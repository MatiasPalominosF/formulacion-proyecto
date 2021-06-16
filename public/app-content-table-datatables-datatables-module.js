(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-table-datatables-datatables-module"],{

/***/ "4KQv":
/*!***********************************************************************!*\
  !*** ./src/app/content/table/datatables/styling/styling.component.ts ***!
  \***********************************************************************/
/*! exports provided: StylingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingComponent", function() { return StylingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/table-api.service */ "adm4");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ "FhuM");













function StylingComponent_div_7_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r4 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r4.name, " ");
} }
function StylingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function StylingComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.reloadBaseStyle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Base style ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "The DataTables default style file has a number of features which can be enabled based on the class name of the table.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function StylingComponent_div_7_Template_input_keyup_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.updateFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngx-datatable", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-datatable-column", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StylingComponent_div_7_ng_template_17_Template, 1, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ngx-datatable-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 6)("rows", ctx_r0.rows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
} }
function StylingComponent_div_10_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r9.name, " ");
} }
function StylingComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function StylingComponent_div_10_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.reloadNoStylingClasses($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No styling classes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This example shows the base DataTables style file being used, with none of the additional feature style classes being used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function StylingComponent_div_10_Template_input_keyup_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.updatedefaultFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, StylingComponent_div_10_ng_template_16_Template, 1, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ngx-datatable-column", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ngx-datatable-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ngx-datatable-column", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ngx-datatable-column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ngx-datatable-column", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx_r1.stylerows)("columnMode", "force")("perfectScrollbar", ctx_r1.config);
} }
function StylingComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r13.name, " ");
} }
var StylingComponent = /** @class */ (function () {
    function StylingComponent(tableApiservice) {
        this.tableApiservice = tableApiservice;
        this.config = { suppressScrollY: true };
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        this.temp = [];
        this.rows = [];
        this.temp2 = this.rows;
    }
    StylingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumb = {
            'mainlabel': 'Styling DataTable',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'DataTables',
                    'isLink': true,
                    'link': '#'
                },
                {
                    'name': 'Styling DataTable',
                    'isLink': false
                }
            ]
        };
        this.tableApiservice.getStylingData().subscribe(function (Response) {
            _this.data = Response;
            _this.getTabledata();
        });
    };
    StylingComponent.prototype.getTabledata = function () {
        this.rows = this.data.rows;
        this.stylerows = this.data.stylerows;
        this.baserows = this.data.baserows;
    };
    StylingComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        this.rows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        // filter our data
        var temp = this.rows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    StylingComponent.prototype.updatedefaultFilter = function (event) {
        var val = event.target.value.toLowerCase();
        this.stylerows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.stylerows);
        // filter our data
        var temp = this.stylerows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.stylerows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    StylingComponent.prototype.updatecompactFilter = function (event) {
        var val = event.target.value.toLowerCase();
        this.baserows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.baserows);
        // filter our data
        var temp = this.baserows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.baserows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    StylingComponent.prototype.reloadBaseStyle = function () {
        var _this = this;
        this.blockUIBaseStyle.start('Loading..');
        setTimeout(function () {
            _this.blockUIBaseStyle.stop();
        }, 2500);
    };
    StylingComponent.prototype.reloadNoStylingClasses = function () {
        var _this = this;
        this.blockUINoStylingClasses.start('Loading..');
        setTimeout(function () {
            _this.blockUINoStylingClasses.stop();
        }, 2500);
    };
    StylingComponent.ɵfac = function StylingComponent_Factory(t) { return new (t || StylingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_5__["TableApiService"])); };
    StylingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StylingComponent, selectors: [["app-styling"]], viewQuery: function StylingComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, decls: 35, vars: 24, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "base-style"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "no-style"], ["id", "compact-style"], [1, "col-12"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "col-sm-12", "col-md-12"], [1, "dataTables_filter"], ["type", "text", "placeholder", "Type to filter the name column...", 2, "padding", "4px", "margin", "0px auto", "margin-left", "8px", "width", "200px", "border-radius", ".22rem", "border", "1px solid #BABFC7", 3, "keyup"], [1, "table", "table-striped", "table-bordered", "compact"], ["fxFlex", "auto", 1, "material", 3, "limit", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "perfectScrollbar"], ["name", "Name", 3, "flexGrow", "minWidth"], ["ngx-datatable-cell-template", ""], ["name", "Position", 3, "flexGrow", "minWidth"], ["name", "Office", 3, "flexGrow", "minWidth"], ["name", "Age", 3, "flexGrow", "minWidth"], ["name", "Salary", 3, "flexGrow", "minWidth"], ["name", "Startdate", 3, "flexGrow", "minWidth"], [3, "options", "reloadFunction"], [1, "card-dashboard"], [1, "card-text"], [1, "table", "table-striped", "table-bordered", "base-style"], ["fxFlex", "auto", 1, "bootstrap", "ps", 3, "limit", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "perfectScrollbar"], [1, "no-style-no", "no-style"], ["fxFlex", "auto", 3, "rows", "columnMode", "perfectScrollbar"], ["name", "Name"], ["name", "Position"], ["name", "Office"], ["name", "Age"], ["name", "Salary"], ["name", "Startdate"]], template: function StylingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StylingComponent_div_7_Template, 23, 20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, StylingComponent_div_10_Template, 22, 4, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "m-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Base style - compact ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "The material class is used to reduce the amount of white-space the default styling for the DataTable uses, increasing the information density on screen, as shown below.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Search : ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function StylingComponent_Template_input_keyup_25_listener($event) { return ctx.updatecompactFilter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, StylingComponent_ng_template_29_Template, 1, 1, "ng-template", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ngx-datatable-column", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ngx-datatable-column", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ngx-datatable-column", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "ngx-datatable-column", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ngx-datatable-column", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "baseStyle")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "noStylingClasses")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 10)("rows", ctx.baserows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["ɵf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"]], styles: ["[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\r\n    font-family: inherit;\r\n    font-size: medium;\r\n    font-weight: bold;\r\n    color: #6B6F82;\r\n}\r\n\r\n[_nghost-%COMP%]     .table-bordered {\r\n    border: 2px solid #e3ebf3;\r\n}\r\n\r\n[_nghost-%COMP%]     .no-style {\r\n    border-top: 2px solid #e3ebf3;\r\n}\r\n\r\n[_nghost-%COMP%]     .filter {\r\n    margin-left: 4px;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-header {\r\n    display: block;\r\n    overflow: inherit;\r\n    font-family: inherit;\r\n    font-size: medium;\r\n    font-weight: bold;\r\n    color: #6B6F82;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-right:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n    content: \"\\203A\";\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-skip:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n    content: \"\\00BB\";\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-left:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n    content: \"\\2039\";\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-prev:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n    content: \"\\00AB\";\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-icon-left:before {\r\n\r\n    font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-icon-prev:before {\r\n\r\n    font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-icon-right:before {\r\n\r\n    font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-icon-skip:before {\r\n\r\n    font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   ul[_ngcontent-c11][_ngcontent-%COMP%]   li[_ngcontent-c11][_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    background-color: #d4d2e7;\r\n    font-weight: bold;\r\n    font-size: small;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\r\n    height: 32px;\r\n    min-width: 34px;\r\n    line-height: 22px;\r\n    padding: 0;\r\n    border-radius: 3px;\r\n    margin: 0 3px;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    padding-top: 3px;\r\n    text-decoration: none;\r\n    vertical-align: bottom;\r\n    color: #7c8091;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    line-height: 9px;\r\n    padding: 0px 08px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\r\n    background-color: #545454;\r\n    font-weight: bold;\r\n    color: white;\r\n\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-%COMP%] {\r\n    background-color: #545454;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer {\r\n    background: #727e8e;\r\n    color: #ededed;\r\n    margin-top: -1px;\r\n    overflow: inherit;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-footer .datatable-pager .pager li a {\r\n    width: 30px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\r\n    flex: 1 1 97%;\r\n    text-align: right;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-down:after {\r\n    content: \"\\2193\";\r\n    font-size: large;\r\n}\r\n\r\n[_nghost-%COMP%]     .dataTables_filter {\r\n  text-align: right;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.no-style .datatable-header {\r\n    font-weight: bold;\r\n    height: unset !important;\r\n    overflow: inherit;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\r\n    flex: 0 0 0%;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager .pager {\r\n    display: flex;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager a {\r\n    height: 32px;\r\n    min-width: 34px;\r\n    line-height: 22px;\r\n    padding: 0;\r\n    border-radius: 3px;\r\n    margin: 0 3px;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    padding-top: 3px;\r\n    text-decoration: none;\r\n    vertical-align: bottom;\r\n    color: #7c8091;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable {\r\n  display: -webkit-box;\r\n}\r\n\r\n[_nghost-%COMP%]     .empty-row {\r\n  padding-left: 1rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZOztBQUVoQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFHSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InN0eWxpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNkI2RjgyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlM2ViZjM7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubm8tc3R5bGUge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlM2ViZjM7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzZCNkY4MjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDNBXCI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tc2tpcDpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbnRlbnQ6IFwiXFwwMEJCXCI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDM5XCI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tcHJldjpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbnRlbnQ6IFwiXFwwMEFCXCI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1pY29uLWxlZnQ6YmVmb3JlIHtcclxuXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1pY29uLXByZXY6YmVmb3JlIHtcclxuXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0OmJlZm9yZSB7XHJcblxyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XHJcblxyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSBhLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSB1bFtfbmdjb250ZW50LWMxMV0gbGlbX25nY29udGVudC1jMTFdOm5vdCguZGlzYWJsZWQpOmhvdmVyIGFbX25nY29udGVudC1jMTFdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1pbi13aWR0aDogMzRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICBjb2xvcjogIzdjODA5MTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDlweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldixcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKTpob3ZlciBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUgYSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzcyN2U4ZTtcclxuICAgIGNvbG9yOiAjZWRlZGVkO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLW1zLWZsZXg6IDEgMSA4MCU7XHJcbiAgICBmbGV4OiAxIDEgOTclO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tZG93bjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMjE5M1wiO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhVGFibGVzX2ZpbHRlciB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUubm8tc3R5bGUgLmRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuICAgIGZsZXg6IDAgMCAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1pbi13aWR0aDogMzRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICBjb2xvcjogIzdjODA5MTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5lbXB0eS1yb3cge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('baseStyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], StylingComponent.prototype, "blockUIBaseStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('noStylingClasses'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], StylingComponent.prototype, "blockUINoStylingClasses", void 0);
    return StylingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StylingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-styling',
                templateUrl: './styling.component.html',
                styleUrls: ['./styling.component.css']
            }]
    }], function () { return [{ type: src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_5__["TableApiService"] }]; }, { blockUIBaseStyle: [], blockUINoStylingClasses: [], componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "7RZ/":
/*!****************************************************************************!*\
  !*** ./node_modules/ngx-datatable-footer/fesm2015/ngx-datatable-footer.js ***!
  \****************************************************************************/
/*! exports provided: DatatablePagerComponent, DatatableFooterComponent, NgxDatatableFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablePagerComponent", function() { return DatatablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterComponent", function() { return DatatableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableFooterModule", function() { return NgxDatatableFooterModule; });
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var _c0 = ["customerInput"];

var _c1 = function _c1(a0) {
  return {
    "page-size-column-active": a0
  };
};

function DatatablePagerComponent_li_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatatablePagerComponent_li_1_li_5_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      var ps_r6 = ctx.$implicit;
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r7.changePageSize(ps_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ps_r6 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, ctx_r5.size === ps_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ps_r6, " \u884C/\u9875");
  }
}

var _c2 = function _c2(a0, a1) {
  return {
    "fa-angle-up": a0,
    "fa-angle-down": a1
  };
};

function DatatablePagerComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatatablePagerComponent_li_1_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r9.pageSizeColumn = !ctx_r9.pageSizeColumn;
    })("mouseleave", function DatatablePagerComponent_li_1_Template_li_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r11.pageSizeColumn = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DatatablePagerComponent_li_1_li_5_Template, 2, 4, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.size, " \u884C/\u9875");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c2, ctx_r0.pageSizeColumn, !ctx_r0.pageSizeColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r0.pageSizeColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.pageSizes);
  }
}

function DatatablePagerComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatatablePagerComponent_li_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r12.selectPage(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r1.canPrevious());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.pagerPreviousIcon);
  }
}

function DatatablePagerComponent_li_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatatablePagerComponent_li_6_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      var pg_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r16.selectPage(pg_r14.number);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pg_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pg_r14.text, " ");
  }
}

function DatatablePagerComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DatatablePagerComponent_li_6_a_1_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pg_r14 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", pg_r14.number === ctx_r2.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.pageNumber);
  }
}

function DatatablePagerComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatatablePagerComponent_li_10_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r20.selectPage(ctx_r20.totalPages);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r3.canNext());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r3.pagerNextIcon);
  }
}

var _c3 = function _c3() {
  return {
    "position": "relative"
  };
};

function DatatableFooterComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 3);
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    var offset_r5 = ctx_r8.offset;
    var pageSize_r2 = ctx_r8.pageSize;
    var rowCount_r1 = ctx_r8.rowCount;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", "\u5F53\u524D " + ((offset_r5 || 0) * pageSize_r2 + 1) + " - " + ((offset_r5 + 1) * pageSize_r2 > rowCount_r1 ? rowCount_r1 : (offset_r5 + 1 || 1) * pageSize_r2) + " / " + rowCount_r1 + " \u884C", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

function DatatableFooterComponent_ng_template_0_app_datatable_pager_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-datatable-pager", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DatatableFooterComponent_ng_template_0_app_datatable_pager_1_Template_app_datatable_pager_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r9.datatable.onFooterPage($event);
      return ctx_r9.emitPage($event);
    })("pageChange", function DatatableFooterComponent_ng_template_0_app_datatable_pager_1_Template_app_datatable_pager_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r11.emitPage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    var curPage_r4 = ctx_r12.curPage;
    var pageSize_r2 = ctx_r12.pageSize;
    var rowCount_r1 = ctx_r12.rowCount;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("linage", ctx_r7.linage)("displayBothEnds", ctx_r7.displayBothEnds)("pageNumber", ctx_r7.pageNumber)("pageSizes", ctx_r7.pageSizes)("pagerPreviousIcon", ctx_r7.pagerPreviousIcon)("pagerNextIcon", ctx_r7.pagerNextIcon)("pagerLeftArrowIcon", ctx_r7.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r7.pagerRightArrowIcon)("page", curPage_r4)("size", pageSize_r2)("datatable", ctx_r7.datatable)("count", rowCount_r1);
  }
}

function DatatableFooterComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DatatableFooterComponent_ng_template_0_div_0_Template, 1, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DatatableFooterComponent_ng_template_0_app_datatable_pager_1_Template, 1, 12, "app-datatable-pager", 2);
  }

  if (rf & 2) {
    var rowCount_r1 = ctx.rowCount;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowCount_r1 > 0 && ctx_r0.totalNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowCount_r1 > 0);
  }
}

var DatatablePagerComponent = /*#__PURE__*/function () {
  function DatatablePagerComponent() {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DatatablePagerComponent);

    this.linage = true;
    this.displayBothEnds = true;
    this.pageNumber = true;
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // tslint:disable-next-line:member-ordering

    this._page = 1; // tslint:disable-next-line:member-ordering

    this._count = 0; // tslint:disable-next-line:member-ordering

    this._size = 0; // tslint:disable-next-line:member-ordering

    this.pageSizeColumn = true;
  }
  /**
   * @param {?} val
   * @return {?}
   */


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DatatablePagerComponent, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {}
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.inputEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.customerInput.nativeElement, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe(function (event) {
        /** @type {?} */
        var value;

        if (event.target.value) {
          value = Number(event.target.value);

          if (value < 1) {
            value = 1;
            _this.customerInput.nativeElement.value = 1;
          }

          _this.selectPage(Math.round(value));
        }
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "canPrevious",
    value: function canPrevious() {
      return this.page > 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "canNext",
    value: function canNext() {
      return this.page < this.totalPages;
    }
    /**
     * @return {?}
     */

  }, {
    key: "prevPage",
    value: function prevPage() {
      this.selectPage(this.page - 1);
    }
    /**
     * @return {?}
     */

  }, {
    key: "nextPage",
    value: function nextPage() {
      this.selectPage(this.page + 1);
    }
    /**
     * @param {?} page
     * @param {?=} changePageSize
     * @return {?}
     */

  }, {
    key: "selectPage",
    value: function selectPage(page, changePageSize) {
      if (changePageSize) {
        if (page > 0 && page <= this.totalPages) {
          this.page = page;
          this.change.emit({
            page: page
          });
        }
      } else {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
          this.page = page;
          this.change.emit({
            page: page
          });
        }
      }
    }
    /**
     * @param {?=} page
     * @return {?}
     */

  }, {
    key: "calcPages",
    value: function calcPages(page) {
      /** @type {?} */
      var pages = [];
      /** @type {?} */

      var startPage = 1;
      /** @type {?} */

      var endPage = this.totalPages;
      /** @type {?} */

      var maxSize = 5;
      /** @type {?} */

      var isMaxSized = maxSize < this.totalPages;
      page = page || this.page;

      if (isMaxSized) {
        startPage = (Math.ceil(page / maxSize) - 1) * maxSize + 1;
        endPage = Math.min(startPage + maxSize - 1, this.totalPages);
      }

      for (var num = startPage; num <= endPage; num++) {
        pages.push({
          number: num,
          text: num
        });
      }

      return pages;
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "valChange",
    value: function valChange(event) {
      if (event === null) {
        this.customerInput.nativeElement.value = '';
      }

      if (event || event === 0) {
        this.currentOffset = Number(event) > this.totalPages ? this.totalPages : Number(event);
        this.customerInput.nativeElement.value = event === 0 ? 1 : event > this.totalPages ? this.totalPages : event;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "blurHandel",
    value: function blurHandel() {
      if (this.currentOffset === 0 || this.customerInput.nativeElement.value === '') {
        this.customerInput.nativeElement.value = 1;
      } else if (this.currentOffset !== undefined) {
        this.customerInput.nativeElement.value = this.currentOffset;
      } else if (this.currentOffset === undefined) {
        if (this.prveOffset !== undefined) {
          this.customerInput.nativeElement.value = this.prveOffset;
        }
      }

      this.page = Number(this.customerInput.nativeElement.value);
      this.datatable.offset = this.page - 1;
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */

  }, {
    key: "changePageSize",
    value: function changePageSize(pageSize) {
      this.datatable.limit = pageSize;
      this.selectPage(1, 'changePageSize');
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "keyDownHandel",
    value: function keyDownHandel(event) {
      if (this.customerInput.nativeElement.value) {
        this.prveOffset = Number(this.customerInput.nativeElement.value);
      }

      if (event.keyCode < 48 && event.keyCode !== 8 || event.keyCode > 57 && event.keyCode < 96 || event.keyCode > 105) {
        return false;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.inputEvent.unsubscribe();
    }
  }, {
    key: "size",
    set: function set(val) {
      this._size = val;
      this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._size;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "count",
    set: function set(val) {
      this._count = val;
      this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._count;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "page",
    set: function set(val) {
      this._page = val;
      this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._page || 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "totalPages",
    get: function get() {
      /** @type {?} */
      var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
      return Math.max(count || 0, 1);
    }
  }]);

  return DatatablePagerComponent;
}();

DatatablePagerComponent.ɵfac = function DatatablePagerComponent_Factory(t) {
  return new (t || DatatablePagerComponent)();
};

DatatablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DatatablePagerComponent,
  selectors: [["app-datatable-pager"]],
  viewQuery: function DatatablePagerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.customerInput = _t.first);
    }
  },
  inputs: {
    linage: "linage",
    displayBothEnds: "displayBothEnds",
    pageNumber: "pageNumber",
    size: "size",
    count: "count",
    page: "page",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    pageSizes: "pageSizes",
    datatable: "datatable"
  },
  outputs: {
    change: "change",
    pageChange: "pageChange"
  },
  decls: 17,
  vars: 18,
  consts: [[1, "pager"], ["class", "page-size-continer", 3, "click", "mouseleave", 4, "ngIf"], [3, "disabled", 4, "ngIf"], [3, "click"], ["class", "pages", 3, "active", 4, "ngFor", "ngForOf"], [3, "ngStyle"], ["type", "number", "title", " ", "rows", "2", 1, "lz-jump-page", 3, "min", "ngModel", "keydown", "blur", "ngModelChange"], ["customerInput", ""], [1, "page-size-continer", 3, "click", "mouseleave"], [1, "fa", 3, "ngClass"], [1, "page-size-content", 3, "hidden"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "pages"], [3, "click", 4, "ngIf"]],
  template: function DatatablePagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DatatablePagerComponent_li_1_Template, 6, 7, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DatatablePagerComponent_li_2_Template, 3, 5, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatatablePagerComponent_Template_a_click_4_listener() {
        return ctx.prevPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DatatablePagerComponent_li_6_Template, 2, 3, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatatablePagerComponent_Template_a_click_8_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DatatablePagerComponent_li_10_Template, 3, 5, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u8DF3\u8F6C\u5230");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function DatatablePagerComponent_Template_input_keydown_14_listener($event) {
        return ctx.keyDownHandel($event);
      })("blur", function DatatablePagerComponent_Template_input_blur_14_listener() {
        return ctx.blurHandel();
      })("ngModelChange", function DatatablePagerComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.valChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u9875 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.linage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayBothEnds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayBothEnds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 1)("ngModel", ctx.page);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
  styles: [".page-size-continer[_ngcontent-%COMP%] {\n        position: relative;\n        width: 80px;\n        height: 26px;\n        line-height: 26px;\n        text-align: center;\n        border-radius: 2px;\n        cursor: pointer;\n      }\n      .page-size-continer[_ngcontent-%COMP%]:hover {\n        background-color: rgba(158, 158, 158, 0.2);\n      }\n      .page-size-continer[_ngcontent-%COMP%]   .page-size-content[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: 24px;\n        left: 0;\n        padding: 0;\n        background: #fff;\n        border-radius: 4px;\n        box-shadow: 0 0 15px 1px rgba(113, 106, 202, 0.2);\n        z-index: 11;\n      }\n      .page-size-continer[_ngcontent-%COMP%]   .page-size-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 4px 0;\n      }\n      .page-size-continer[_ngcontent-%COMP%]   .page-size-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n        background-color: rgba(158, 158, 158, 0.2);\n      }\n      .page-size-continer[_ngcontent-%COMP%]   .page-size-content[_ngcontent-%COMP%]   .page-size-column-active[_ngcontent-%COMP%] {\n        color: #409eff;\n      }\n      input[type='number'][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type='number'][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n      }\n      .lz-jump-page[_ngcontent-%COMP%] {\n        display: inline-block;\n        width: 50px;\n        border-radius: 2px;\n        margin-right: 6px;\n        padding-left: 4px;\n        border: solid 1px #ebedf2;\n      }\n      input[type='number'][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n      }"]
});
DatatablePagerComponent.propDecorators = {
  pagerLeftArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerRightArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerPreviousIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerNextIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pageSizes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  datatable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  linage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  displayBothEnds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pageNumber: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  count: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  pageChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  customerInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
    args: ['customerInput']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DatatablePagerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'app-datatable-pager',
      template: "\n    <ul class=\"pager\">\n      <li class=\"page-size-continer\" *ngIf=\"linage\" (click)=\"pageSizeColumn=!pageSizeColumn\" (mouseleave)=\"pageSizeColumn=true\">\n        <span>{{size}} \u884C/\u9875</span>\n        <span class=\"fa\" [ngClass]=\"{'fa-angle-up':pageSizeColumn,'fa-angle-down':!pageSizeColumn}\"></span>\n        <ul [hidden]=\"pageSizeColumn\" class=\"page-size-content\">\n          <li *ngFor=\"let ps of pageSizes\" (click)=\"changePageSize(ps)\" [ngClass]=\"{'page-size-column-active':size===ps}\">{{ps}} \u884C/\u9875</li>\n        </ul>\n      </li>\n      <li *ngIf=\"displayBothEnds\" [class.disabled]=\"!canPrevious()\">\n        <a (click)=\"selectPage(1)\">\n          <i class=\"{{pagerPreviousIcon}}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a (click)=\"prevPage()\">\n          <i class=\"{{pagerLeftArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li class=\"pages\" *ngFor=\"let pg of pages\" [class.active]=\"pg.number === page\">\n        <a *ngIf=\"pageNumber\" (click)=\"selectPage(pg.number)\">\n          {{pg.text}}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a (click)=\"nextPage()\">\n          <i class=\"{{pagerRightArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li *ngIf=\"displayBothEnds\" [class.disabled]=\"!canNext()\">\n        <a (click)=\"selectPage(totalPages)\">\n          <i class=\"{{pagerNextIcon}}\"></i>\n        </a>\n      </li>\n      <li [ngStyle]=\"{'position':'relative'}\">\n        <span>\u8DF3\u8F6C\u5230</span>\n        <input #customerInput class=\"lz-jump-page\" type=\"number\" title=\" \" rows=\"2\" [min]=\"1\" [ngModel]=\"page\" (keydown)='keyDownHandel($event)'\n          (blur)=\"blurHandel()\" (ngModelChange)=\"valChange($event)\" />\u9875\n      </li>\n    </ul>",
      styles: ["\n      .page-size-continer {\n        position: relative;\n        width: 80px;\n        height: 26px;\n        line-height: 26px;\n        text-align: center;\n        border-radius: 2px;\n        cursor: pointer;\n      }\n      .page-size-continer:hover {\n        background-color: rgba(158, 158, 158, 0.2);\n      }\n      .page-size-continer .page-size-content {\n        position: absolute;\n        bottom: 24px;\n        left: 0;\n        padding: 0;\n        background: #fff;\n        border-radius: 4px;\n        box-shadow: 0 0 15px 1px rgba(113, 106, 202, 0.2);\n        z-index: 11;\n      }\n      .page-size-continer .page-size-content li {\n        width: 100%;\n        padding: 4px 0;\n      }\n      .page-size-continer .page-size-content li:hover {\n        background-color: rgba(158, 158, 158, 0.2);\n      }\n      .page-size-continer .page-size-content .page-size-column-active {\n        color: #409eff;\n      }\n      input[type='number']::-webkit-inner-spin-button,\n      input[type='number']::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n      }\n      .lz-jump-page {\n        display: inline-block;\n        width: 50px;\n        border-radius: 2px;\n        margin-right: 6px;\n        padding-left: 4px;\n        border: solid 1px #ebedf2;\n      }\n      input[type='number'] {\n        -moz-appearance: textfield;\n      }\n    "]
    }]
  }], function () {
    return [];
  }, {
    linage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    displayBothEnds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pageNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    datatable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    customerInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
      args: ['customerInput']
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var DatatableFooterComponent = /*#__PURE__*/function () {
  function DatatableFooterComponent() {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DatatableFooterComponent);

    this.pagerLeftArrowIcon = 'fa fa-angle-left';
    this.pagerRightArrowIcon = 'fa fa-angle-right';
    this.pagerPreviousIcon = 'fa fa-step-backward';
    this.pagerNextIcon = 'fa fa-step-forward';
    this.pageSizes = [10, 20, 30, 40, 50];
    this.totalNumber = true;
    this.linage = true;
    this.displayBothEnds = true;
    this.pageNumber = true;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
  }
  /**
   * @param {?} val
   * @return {?}
   */


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DatatableFooterComponent, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {}
    /**
     * @return {?}
     */

  }, {
    key: "update",
    value: function update() {
      if (this._datatable && this._template && (!this._datatable.footer || !this._datatable.footer.template)) {
        if (this._datatable.footer) {
          this._datatable.footer.template = this._template;
        } else {
          this._datatable.footer = {
            footerHeight: this._datatable.footerHeight,
            totalMessage: this._datatable.messages.totalMessage,
            selectedMessage: this._datatable.messages.selectedMessage,
            pagerLeftArrowIcon: '',
            pagerRightArrowIcon: '',
            pagerPreviousIcon: '',
            pagerNextIcon: '',
            template: this._template
          };
        }
      }
    }
    /**
     * @param {?} page
     * @return {?}
     */

  }, {
    key: "emitPage",
    value: function emitPage(page) {
      this.pageChange.emit(page);
    }
  }, {
    key: "template",
    set: function set(val) {
      this._template = val;
      this.update();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._template;
    }
    /**
     * @param {?} val
     * @return {?}
     */

  }, {
    key: "datatable",
    set: function set(val) {
      this._datatable = val;
      this.update();
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._datatable;
    }
  }]);

  return DatatableFooterComponent;
}();

DatatableFooterComponent.ɵfac = function DatatableFooterComponent_Factory(t) {
  return new (t || DatatableFooterComponent)();
};

DatatableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DatatableFooterComponent,
  selectors: [["ngx-datatable-footer"]],
  viewQuery: function DatatableFooterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    pageSizes: "pageSizes",
    totalNumber: "totalNumber",
    linage: "linage",
    displayBothEnds: "displayBothEnds",
    pageNumber: "pageNumber",
    datatable: "datatable",
    page: "page"
  },
  outputs: {
    pageChange: "pageChange"
  },
  decls: 1,
  vars: 0,
  consts: [["ngx-datatable-footer-template", ""], ["class", "page-count", 3, "innerHTML", 4, "ngIf"], ["class", "datatable-pager", 3, "linage", "displayBothEnds", "pageNumber", "pageSizes", "pagerPreviousIcon", "pagerNextIcon", "pagerLeftArrowIcon", "pagerRightArrowIcon", "page", "size", "datatable", "count", "change", "pageChange", 4, "ngIf"], [1, "page-count", 3, "innerHTML"], [1, "datatable-pager", 3, "linage", "displayBothEnds", "pageNumber", "pageSizes", "pagerPreviousIcon", "pagerNextIcon", "pagerLeftArrowIcon", "pagerRightArrowIcon", "page", "size", "datatable", "count", "change", "pageChange"]],
  template: function DatatableFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DatatableFooterComponent_ng_template_0_Template, 2, 2, "ng-template", 0);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], DatatablePagerComponent],
  encapsulation: 2
});
/** @nocollapse */

DatatableFooterComponent.ctorParameters = function () {
  return [];
};

DatatableFooterComponent.propDecorators = {
  template: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]]
  }],
  datatable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerLeftArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerRightArrowIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerPreviousIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pagerNextIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pageSizes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  totalNumber: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  linage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  displayBothEnds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pageNumber: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  pageChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DatatableFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'ngx-datatable-footer',
      template: "\n  <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\" let-selectedCount=\"selectedCount\"\n    let-curPage=\"curPage\" let-offset=\"offset\">\n    <div class=\"page-count\" *ngIf=\"rowCount>0&&totalNumber\" [innerHTML]=\"'\u5F53\u524D '+((offset||0) * pageSize + 1)+' - '+((offset+1) * pageSize > rowCount?rowCount : ((offset+1)||1) * pageSize)+' / '+rowCount+' \u884C'\">\n    </div>\n    <app-datatable-pager *ngIf=\"rowCount>0\" [linage]=\"linage\" [displayBothEnds]=\"displayBothEnds\" [pageNumber]=\"pageNumber\" [pageSizes]=\"pageSizes\" [pagerPreviousIcon]=\"pagerPreviousIcon\" [pagerNextIcon]=\"pagerNextIcon\"\n      [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\" [pagerRightArrowIcon]=\"pagerRightArrowIcon\" [page]=\"curPage\" [size]=\"pageSize\"\n      [datatable]=\"datatable\" [count]=\"rowCount\" (change)=\"datatable.onFooterPage($event);emitPage($event)\" (pageChange)=\"emitPage($event)\" class=\"datatable-pager\">\n    </app-datatable-pager>\n  </ng-template>"
    }]
  }], function () {
    return [];
  }, {
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    totalNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    linage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    displayBothEnds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pageNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]]
    }],
    datatable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var NgxDatatableFooterModule = /*#__PURE__*/function () {
  function NgxDatatableFooterModule() {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NgxDatatableFooterModule);
  }

  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NgxDatatableFooterModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgxDatatableFooterModule
      };
    }
  }]);

  return NgxDatatableFooterModule;
}();

NgxDatatableFooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: NgxDatatableFooterModule
});
NgxDatatableFooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function NgxDatatableFooterModule_Factory(t) {
    return new (t || NgxDatatableFooterModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NgxDatatableFooterModule, {
    declarations: function declarations() {
      return [DatatablePagerComponent, DatatableFooterComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]];
    },
    exports: function exports() {
      return [DatatablePagerComponent, DatatableFooterComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NgxDatatableFooterModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
      declarations: [DatatablePagerComponent, DatatableFooterComponent],
      exports: [DatatablePagerComponent, DatatableFooterComponent]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "GSZs":
/*!***************************************************************!*\
  !*** ./src/app/content/table/datatables/datatables.module.ts ***!
  \***************************************************************/
/*! exports provided: DatatablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesModule", function() { return DatatablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _basicinitialisation_basicinitialisation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basicinitialisation/basicinitialisation.component */ "Y4mk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var ngx_datatable_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-datatable-footer */ "7RZ/");
/* harmony import */ var _styling_styling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styling/styling.component */ "4KQv");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/api.component */ "hDVu");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-clipboard */ "IbkX");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../partials/general/card/card.module */ "vj4e");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");




















var DatatablesModule = /** @class */ (function () {
    function DatatablesModule() {
    }
    DatatablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DatatablesModule });
    DatatablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DatatablesModule_Factory(t) { return new (t || DatatablesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_14__["BlockTemplateComponent"]
                }),
                ngx_datatable_footer__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableFooterModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'basicinitialisation',
                        component: _basicinitialisation_basicinitialisation_component__WEBPACK_IMPORTED_MODULE_2__["BasicinitialisationComponent"]
                    },
                    {
                        path: 'styling',
                        component: _styling_styling_component__WEBPACK_IMPORTED_MODULE_6__["StylingComponent"]
                    },
                    {
                        path: 'api',
                        component: _api_api_component__WEBPACK_IMPORTED_MODULE_7__["ApiComponent"]
                    },
                ]),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
    return DatatablesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DatatablesModule, { declarations: [_basicinitialisation_basicinitialisation_component__WEBPACK_IMPORTED_MODULE_2__["BasicinitialisationComponent"], _styling_styling_component__WEBPACK_IMPORTED_MODULE_6__["StylingComponent"], _api_api_component__WEBPACK_IMPORTED_MODULE_7__["ApiComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
        src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"], ngx_datatable_footer__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableFooterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                    src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"].forRoot({
                        template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_14__["BlockTemplateComponent"]
                    }),
                    ngx_datatable_footer__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableFooterModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: 'basicinitialisation',
                            component: _basicinitialisation_basicinitialisation_component__WEBPACK_IMPORTED_MODULE_2__["BasicinitialisationComponent"]
                        },
                        {
                            path: 'styling',
                            component: _styling_styling_component__WEBPACK_IMPORTED_MODULE_6__["StylingComponent"]
                        },
                        {
                            path: 'api',
                            component: _api_api_component__WEBPACK_IMPORTED_MODULE_7__["ApiComponent"]
                        },
                    ]),
                ],
                declarations: [_basicinitialisation_basicinitialisation_component__WEBPACK_IMPORTED_MODULE_2__["BasicinitialisationComponent"], _styling_styling_component__WEBPACK_IMPORTED_MODULE_6__["StylingComponent"], _api_api_component__WEBPACK_IMPORTED_MODULE_7__["ApiComponent"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Y4mk":
/*!***********************************************************************************************!*\
  !*** ./src/app/content/table/datatables/basicinitialisation/basicinitialisation.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BasicinitialisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicinitialisationComponent", function() { return BasicinitialisationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/table-api.service */ "adm4");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ "FhuM");













function BasicinitialisationComponent_div_7_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r20 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r20, " ");
} }
function BasicinitialisationComponent_div_7_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r21 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r21, " ");
} }
function BasicinitialisationComponent_div_7_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r22 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r22, " ");
} }
function BasicinitialisationComponent_div_7_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r23 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r23, " ");
} }
function BasicinitialisationComponent_div_7_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r24 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r24, " ");
} }
function BasicinitialisationComponent_div_7_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r25 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r25, " ");
} }
function BasicinitialisationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function BasicinitialisationComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.reloadZeroConfiguration($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Zero configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "DataTables has sorting and most features enabled by default.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-datatable", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ngx-datatable-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BasicinitialisationComponent_div_7_ng_template_10_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BasicinitialisationComponent_div_7_ng_template_12_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BasicinitialisationComponent_div_7_ng_template_14_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BasicinitialisationComponent_div_7_ng_template_16_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BasicinitialisationComponent_div_7_ng_template_18_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, BasicinitialisationComponent_div_7_ng_template_20_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 7)("rows", ctx_r0.rows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
} }
function BasicinitialisationComponent_div_10_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r34 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r34, " ");
} }
function BasicinitialisationComponent_div_10_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r35 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r35, " ");
} }
function BasicinitialisationComponent_div_10_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r36 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r36, " ");
} }
function BasicinitialisationComponent_div_10_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r37 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r37, " ");
} }
function BasicinitialisationComponent_div_10_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r38 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r38, " ");
} }
function BasicinitialisationComponent_div_10_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r39 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r39, " ");
} }
function BasicinitialisationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function BasicinitialisationComponent_div_10_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.reloadDefaultOrdering($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Default ordering ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Lets say you want to sort column descending and ascending order. You want to search by the name column. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function BasicinitialisationComponent_div_10_Template_input_keyup_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.updatedefaultFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngx-datatable", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-datatable-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BasicinitialisationComponent_div_10_ng_template_17_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, BasicinitialisationComponent_div_10_ng_template_19_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, BasicinitialisationComponent_div_10_ng_template_21_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BasicinitialisationComponent_div_10_ng_template_23_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BasicinitialisationComponent_div_10_ng_template_25_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, BasicinitialisationComponent_div_10_ng_template_27_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 7)("rows", ctx_r1.defaultrows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx_r1.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
} }
function BasicinitialisationComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r43 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r43, " ");
} }
function BasicinitialisationComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r44 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r44, " ");
} }
function BasicinitialisationComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r45 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r45, " ");
} }
function BasicinitialisationComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r46 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r46, " ");
} }
function BasicinitialisationComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r47 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r47, " ");
} }
function BasicinitialisationComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r48 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r48, " ");
} }
function BasicinitialisationComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r49 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r49, " ");
} }
function BasicinitialisationComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r50 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r50, " ");
} }
function BasicinitialisationComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r51 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r51, " ");
} }
function BasicinitialisationComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r52 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r52, " ");
} }
function BasicinitialisationComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r53 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r53, " ");
} }
function BasicinitialisationComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r54 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r54, " ");
} }
var BasicinitialisationComponent = /** @class */ (function () {
    function BasicinitialisationComponent(tableApiservice) {
        this.tableApiservice = tableApiservice;
        this.configScroll = { suppressScrollY: false, wheelPropagation: false };
        this.config = { suppressScrollY: true };
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        this.temp = [];
        this.rows = [];
        this.temp2 = this.rows;
    }
    BasicinitialisationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumb = {
            'mainlabel': 'Basic DataTables',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'DataTables',
                    'isLink': true,
                    'link': '#'
                },
                {
                    'name': 'Basic DataTables',
                    'isLink': false
                }
            ]
        };
        this.tableApiservice.getTableInitialisationData().subscribe(function (Response) {
            _this.data = Response;
            _this.getTabledata();
        });
    };
    BasicinitialisationComponent.prototype.getTabledata = function () {
        this.rows = this.data.rows;
        this.defaultrows = this.data.defaultrows;
        this.DOMrows = this.data.DOMrows;
        this.Scrollrows = this.data.Scrollrows;
    };
    BasicinitialisationComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        this.rows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        // filter our data
        var temp = this.rows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BasicinitialisationComponent.prototype.updatedefaultFilter = function (event) {
        var val = event.target.value.toLowerCase();
        this.defaultrows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.defaultrows);
        // filter our data
        var temp = this.defaultrows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.defaultrows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BasicinitialisationComponent.prototype.updateDOMFilter = function (event) {
        var val = event.target.value.toLowerCase();
        this.DOMrows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.DOMrows);
        // filter our data
        var temp = this.DOMrows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.DOMrows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BasicinitialisationComponent.prototype.reloadZeroConfiguration = function () {
        var _this = this;
        this.blockUIZeroConfiguration.start('Loading..');
        setTimeout(function () {
            _this.blockUIZeroConfiguration.stop();
        }, 2500);
    };
    BasicinitialisationComponent.prototype.reloadDefaultOrdering = function () {
        var _this = this;
        this.blockUIDefaultOrdering.start('Loading..');
        setTimeout(function () {
            _this.blockUIDefaultOrdering.stop();
        }, 2500);
    };
    BasicinitialisationComponent.ɵfac = function BasicinitialisationComponent_Factory(t) { return new (t || BasicinitialisationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_5__["TableApiService"])); };
    BasicinitialisationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BasicinitialisationComponent, selectors: [["app-basicinitialisation"]], viewQuery: function BasicinitialisationComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, decls: 67, vars: 40, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "configuration"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "ordering"], ["id", "positioning"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body", "card-dashboard"], [1, "card-text"], [1, "dom-positioning"], ["fxFlex", "auto", 1, "bootstrap", "table-bordered", 3, "limit", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "perfectScrollbar"], ["name", "Name", 3, "flexGrow", "minWidth"], ["ngx-datatable-cell-template", ""], ["name", "Position", 3, "flexGrow", "minWidth"], ["name", "Office", 3, "flexGrow", "minWidth"], ["name", "Age", 3, "flexGrow", "minWidth"], ["name", "Startdate", 3, "flexGrow", "minWidth"], ["name", "Salary", 3, "flexGrow", "minWidth"], [1, "col-sm-12", "col-md-6"], [1, "col-sm-12", "col-md-6", "dataTables_filter"], ["type", "text", "placeholder", "Type to filter the name column...", 2, "padding", "4px", "margin", "0px auto", "margin-left", "8px", "width", "200px", "border-radius", ".22rem", "border", "1px solid #BABFC7", 3, "keyup"], ["id", "horizontal"], [1, "table-striped", "table-bordered"], ["columnMode", "force", "fxFlex", "auto", 1, "bootstrap", 2, "height", "300px", 3, "rows", "headerHeight", "rowHeight", "perfectScrollbar"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-dashboard"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_filter"], [1, "table-bordered", "default-ordering"], ["fxFlex", "auto", 1, "bootstrap", 3, "limit", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "perfectScrollbar"]], template: function BasicinitialisationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BasicinitialisationComponent_div_7_Template, 21, 20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BasicinitialisationComponent_div_10_Template, 28, 20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "DOM positioning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "When customizing DataTables for your own usage, you might find that the default position of the feature elements (filter input etc) is not quite to your liking. To address this issue DataTables takes inspiration from the CSS 3 Advanced Layout Module and provides the dom initialization parameter which can be set to indicate where you wish particular features to appear in the DOM. You can also specify div wrapping containers (with an id and / or class) to provide complete layout flexibility.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ngx-datatable", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BasicinitialisationComponent_ng_template_25_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ngx-datatable-column", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, BasicinitialisationComponent_ng_template_27_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, BasicinitialisationComponent_ng_template_29_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BasicinitialisationComponent_ng_template_31_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ngx-datatable-column", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BasicinitialisationComponent_ng_template_33_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, BasicinitialisationComponent_ng_template_35_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Search:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function BasicinitialisationComponent_Template_input_keyup_41_listener($event) { return ctx.updateDOMFilter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Scroll - horizontal and vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Scroll - horizontal and vertical DataTables has the ability to show tables with horizontal scrolling, which is very useful for when you have a wide table, but want to constrain it to a limited horizontal display area. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ngx-datatable", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ngx-datatable-column", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, BasicinitialisationComponent_ng_template_56_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ngx-datatable-column", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, BasicinitialisationComponent_ng_template_58_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ngx-datatable-column", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, BasicinitialisationComponent_ng_template_60_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ngx-datatable-column", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, BasicinitialisationComponent_ng_template_62_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ngx-datatable-column", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, BasicinitialisationComponent_ng_template_64_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ngx-datatable-column", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, BasicinitialisationComponent_ng_template_66_Template, 1, 1, "ng-template", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "zeroConfiguration")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "defaultOrdering")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 7)("rows", ctx.DOMrows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.Scrollrows)("headerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx.configScroll);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["ɵf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], styles: ["[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\r\n    font-family: inherit;\r\n    font-size: medium;\r\n    font-weight: bold;\r\n    color: #6B6F82;\r\n}\r\n\r\n[_nghost-%COMP%]     .table-bordered {\r\n    border: 2px solid #e3ebf3;\r\n}\r\n\r\n[_nghost-%COMP%]     .filter {\r\n    padding: 8px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-right:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-skip:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-left:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-left:before {\r\n    content: \"\\2039\";\r\n    font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-prev:before {\r\n    content: \"\\00AB\";\r\n    font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-right:before {\r\n    content: \"\\203A\";\r\n    font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-skip:before {\r\n    content: \"\\00BB\";\r\n    font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   ul[_ngcontent-c11][_ngcontent-%COMP%]   li[_ngcontent-c11][_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    background-color: #d4d2e7;\r\n    font-weight: bold;\r\n    font-size: larger;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\r\n    height: 32px;\r\n    min-width: 34px;\r\n    line-height: 22px;\r\n    padding: 0;\r\n    border-radius: 3px;\r\n    margin: 0 3px;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    padding-top: 3px;\r\n    text-decoration: none;\r\n    vertical-align: bottom;\r\n    color: #7c8091;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    line-height: 9px;\r\n    padding: 0px 08px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\r\n    background-color: #545454;\r\n    font-weight: bold;\r\n    color: white;\r\n\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-%COMP%] {\r\n    background-color: #545454;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer {\r\n    background: #727e8e;\r\n    color: #ededed;\r\n    margin-top: -1px;\r\n    overflow: inherit;\r\n}\r\n\r\n[_nghost-%COMP%]     .dataTables_filter {\r\n    text-align: right;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-down:after {\r\n    content: \"\\2193\";\r\n    font-size: large;\r\n}\r\n\r\n[_nghost-%COMP%]     .span .sort-btn .sort-desc .datatable-icon-down:before {\r\n    font-style: normal !important;\r\n    font-weight: normal !important;\r\n    font-variant: normal !important;\r\n    text-transform: none !important;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n[_nghost-%COMP%]     .span .sort-btn .sort-asc .datatable-icon-up:before {\r\n    font-style: normal !important;\r\n    font-weight: normal !important;\r\n    font-variant: normal !important;\r\n    text-transform: none !important;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n[_nghost-%COMP%]     .row {\r\n    display: flex !important;\r\n    flex-wrap: wrap !important;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable {\r\n    display: block;\r\n    overflow: hidden;\r\n    justify-content: center;\r\n    position: relative;\r\n\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap {\r\n    box-shadow: none;\r\n    font-size: 1rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header {\r\n    font-weight: bold;\r\n    height: unset !important;\r\n    overflow: inherit\r\n}\r\n\r\n\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n.datatable-scroll[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager .pager {\r\n    display: flex;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .selected-count .datatable-pager {\r\n    flex: 0 0 0%;\r\n }\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\r\n    flex: 0 0 0%;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable {\r\n  display: -webkit-box;\r\n}\r\n\r\n[_nghost-%COMP%]     .empty-row {\r\n  padding-left: 1rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljaW5pdGlhbGlzYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFHaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEI7QUFDSjs7QUFHQTs7R0FFRzs7QUFFSDtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImJhc2ljaW5pdGlhbGlzYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNkI2RjgyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlM2ViZjM7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVyIHtcclxuICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0OmJlZm9yZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ljb2ZvbnQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1sZWZ0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAzOVwiO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXByZXY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwwMEFCXCI7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tcmlnaHQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDNBXCI7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tc2tpcDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDAwQkJcIjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUgYSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gdWxbX25nY29udGVudC1jMTFdIGxpW19uZ2NvbnRlbnQtYzExXTpub3QoLmRpc2FibGVkKTpob3ZlciBhW19uZ2NvbnRlbnQtYzExXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGEge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWluLXdpZHRoOiAzNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAwIDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGNvbG9yOiAjN2M4MDkxO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogOXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XHJcbiAgICBmb250LXNpemU6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSBhLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKTpob3ZlciBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzI3ZThlO1xyXG4gICAgY29sb3I6ICNlZGVkZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YVRhYmxlc19maWx0ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tZG93bjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMjE5M1wiO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zcGFuIC5zb3J0LWJ0biAuc29ydC1kZXNjIC5kYXRhdGFibGUtaWNvbi1kb3duOmJlZm9yZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3BhbiAuc29ydC1idG4gLnNvcnQtYXNjIC5kYXRhdGFibGUtaWNvbi11cDpiZWZvcmUge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0XHJcbn1cclxuXHJcblxyXG4vKiA6aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YXRhYmxlLXNjcm9sbCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XHJcbiAgICBmbGV4OiAwIDAgMCU7XHJcbiB9XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XHJcbiAgICBmbGV4OiAwIDAgMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZW1wdHktcm93IHtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('zeroConfiguration'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BasicinitialisationComponent.prototype, "blockUIZeroConfiguration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('defaultOrdering'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BasicinitialisationComponent.prototype, "blockUIDefaultOrdering", void 0);
    return BasicinitialisationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BasicinitialisationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-basicinitialisation',
                templateUrl: './basicinitialisation.component.html',
                styleUrls: ['./basicinitialisation.component.css']
            }]
    }], function () { return [{ type: src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_5__["TableApiService"] }]; }, { blockUIZeroConfiguration: [], blockUIDefaultOrdering: [], componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "hDVu":
/*!***************************************************************!*\
  !*** ./src/app/content/table/datatables/api/api.component.ts ***!
  \***************************************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/table-api.service */ "adm4");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ "FhuM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");














function ApiComponent_div_7_13_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.element.id);
} }
function ApiComponent_div_7_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_7_13_ng_template_0_Template, 2, 1, "ng-template", 35);
} }
function ApiComponent_div_7_15_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r17.element.name, " ");
} }
function ApiComponent_div_7_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_7_15_ng_template_0_Template, 2, 1, "ng-template", 35);
} }
function ApiComponent_div_7_17_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r19.element.position, " ");
} }
function ApiComponent_div_7_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_7_17_ng_template_0_Template, 2, 1, "ng-template", 35);
} }
function ApiComponent_div_7_19_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r22.element.office, " ");
} }
function ApiComponent_div_7_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_7_19_ng_template_0_Template, 1, 1, "ng-template", 35);
} }
function ApiComponent_div_7_21_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r23.element.age, " ");
} }
function ApiComponent_div_7_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_7_21_ng_template_0_Template, 1, 1, "ng-template", 35);
} }
function ApiComponent_div_7_23_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r24.element.salary, " ");
} }
function ApiComponent_div_7_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_7_23_ng_template_0_Template, 1, 1, "ng-template", 35);
} }
function ApiComponent_div_7_25_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r25.element.startdate, " ");
} }
function ApiComponent_div_7_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_7_25_ng_template_0_Template, 1, 1, "ng-template", 35);
} }
function ApiComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function ApiComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.reloadAddRows($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add rows ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "New rows can be added to a DataTable very easily using the (addFieldValue()) function. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiComponent_div_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.addFieldValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00A0 Add new row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngx-datatable", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ApiComponent_div_7_13_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-column", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ApiComponent_div_7_15_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-datatable-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ApiComponent_div_7_17_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ngx-datatable-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ApiComponent_div_7_19_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ApiComponent_div_7_21_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ApiComponent_div_7_23_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ApiComponent_div_7_25_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sortType", "multi")("headerHeight", 50)("limit", 7)("footerHeight", 40)("rowHeight", 40)("rows", ctx_r0.rows)("columnMode", "force")("loadingIndicator", ctx_r0.loadingIndicator)("perfectScrollbar", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
} }
function ApiComponent_div_10_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ApiComponent_div_10_ng_template_13_Template_input_change_1_listener() { var allRowsSelected_r39 = ctx.allRowsSelected; var selectFn_r40 = ctx.selectFn; return selectFn_r40(!allRowsSelected_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var allRowsSelected_r39 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", allRowsSelected_r39);
} }
function ApiComponent_div_10_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ApiComponent_div_10_ng_template_14_Template_input_change_1_listener($event) { var onCheckboxChangeFn_r45 = ctx.onCheckboxChangeFn; return onCheckboxChangeFn_r45($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var rowIndex_r44 = ctx.rowIndex;
    var isSelected_r46 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "select", rowIndex_r44, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", isSelected_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "select", rowIndex_r44, "");
} }
function ApiComponent_div_10_16_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r48.element.id);
} }
function ApiComponent_div_10_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_10_16_ng_template_0_Template, 2, 1, "ng-template", 35);
} }
function ApiComponent_div_10_18_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r50.element.name, " ");
} }
function ApiComponent_div_10_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_10_18_ng_template_0_Template, 2, 1, "ng-template", 35);
} }
function ApiComponent_div_10_20_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r52.element.position, " ");
} }
function ApiComponent_div_10_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_10_20_ng_template_0_Template, 2, 1, "ng-template", 35);
} }
function ApiComponent_div_10_22_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r55.element.office, " ");
} }
function ApiComponent_div_10_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_10_22_ng_template_0_Template, 1, 1, "ng-template", 35);
} }
function ApiComponent_div_10_24_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r56.element.age, " ");
} }
function ApiComponent_div_10_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_10_24_ng_template_0_Template, 1, 1, "ng-template", 35);
} }
function ApiComponent_div_10_26_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r57.element.salary, " ");
} }
function ApiComponent_div_10_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_10_26_ng_template_0_Template, 1, 1, "ng-template", 35);
} }
function ApiComponent_div_10_28_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r58.element.startdate, " ");
} }
function ApiComponent_div_10_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_div_10_28_ng_template_0_Template, 1, 1, "ng-template", 35);
} }
function ApiComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function ApiComponent_div_10_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.reloadRowSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Row selection and deletion (single row) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This example shows a modification of the multiple row selection example, where just a single can now be selected. This is done simply by checking to see if the row already has a selected class or not, and if so removing it, if not then the class is removed from any other row in the table which does have it and applied to the row to be selected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiComponent_div_10_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.deleteCheckedRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Delete All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngx-datatable", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function ApiComponent_div_10_Template_ngx_datatable_select_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r62.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ApiComponent_div_10_ng_template_13_Template, 3, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ApiComponent_div_10_ng_template_14_Template, 3, 3, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ApiComponent_div_10_16_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ApiComponent_div_10_18_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ngx-datatable-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ApiComponent_div_10_20_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ngx-datatable-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ApiComponent_div_10_22_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ApiComponent_div_10_24_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ApiComponent_div_10_26_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ApiComponent_div_10_28_Template, 1, 0, undefined, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sortType", "multi")("headerHeight", 50)("limit", 7)("footerHeight", 40)("rowHeight", 40)("rows", ctx_r1.rows)("columnMode", "force")("loadingIndicator", ctx_r1.loadingIndicator)("selected", ctx_r1.selected)("selectionType", "checkbox")("perfectScrollbar", ctx_r1.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("maxWidth", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
} }
function ApiComponent_ng_template_26_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_26_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); var rowIndex_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r68.editing[rowIndex_r63 + "-name"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r64, " ");
} }
function ApiComponent_ng_template_26_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function ApiComponent_ng_template_26_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var rowIndex_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r72.updateValue($event, "name", rowIndex_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r64);
} }
function ApiComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_ng_template_26_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiComponent_ng_template_26_input_1_Template, 1, 1, "input", 46);
} if (rf & 2) {
    var rowIndex_r63 = ctx.rowIndex;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.editing[rowIndex_r63 + "-name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editing[rowIndex_r63 + "-name"]);
} }
function ApiComponent_ng_template_28_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_28_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82); var rowIndex_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r81.editing[rowIndex_r76 + "-position"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r77, " ");
} }
function ApiComponent_ng_template_28_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function ApiComponent_ng_template_28_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); var rowIndex_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r85.updateValue($event, "position", rowIndex_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r77);
} }
function ApiComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_ng_template_28_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiComponent_ng_template_28_input_1_Template, 1, 1, "input", 46);
} if (rf & 2) {
    var rowIndex_r76 = ctx.rowIndex;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.editing[rowIndex_r76 + "-position"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.editing[rowIndex_r76 + "-position"]);
} }
function ApiComponent_ng_template_30_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_30_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95); var rowIndex_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r94.editing[rowIndex_r89 + "-office"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r90, " ");
} }
function ApiComponent_ng_template_30_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function ApiComponent_ng_template_30_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); var rowIndex_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r98.updateValue($event, "office", rowIndex_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r90);
} }
function ApiComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_ng_template_30_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiComponent_ng_template_30_input_1_Template, 1, 1, "input", 46);
} if (rf & 2) {
    var rowIndex_r89 = ctx.rowIndex;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.editing[rowIndex_r89 + "-office"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.editing[rowIndex_r89 + "-office"]);
} }
function ApiComponent_ng_template_32_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_32_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108); var rowIndex_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r107.editing[rowIndex_r102 + "-age"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r103, " ");
} }
function ApiComponent_ng_template_32_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function ApiComponent_ng_template_32_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r113); var rowIndex_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r111.updateValue($event, "age", rowIndex_r102); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r103);
} }
function ApiComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_ng_template_32_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiComponent_ng_template_32_input_1_Template, 1, 1, "input", 46);
} if (rf & 2) {
    var rowIndex_r102 = ctx.rowIndex;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.editing[rowIndex_r102 + "-age"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.editing[rowIndex_r102 + "-age"]);
} }
function ApiComponent_ng_template_34_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_34_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121); var rowIndex_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r120.editing[rowIndex_r115 + "-salary"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r116, " ");
} }
function ApiComponent_ng_template_34_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function ApiComponent_ng_template_34_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r126); var rowIndex_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r124.updateValue($event, "salary", rowIndex_r115); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r116);
} }
function ApiComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_ng_template_34_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiComponent_ng_template_34_input_1_Template, 1, 1, "input", 46);
} if (rf & 2) {
    var rowIndex_r115 = ctx.rowIndex;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.editing[rowIndex_r115 + "-salary"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.editing[rowIndex_r115 + "-salary"]);
} }
function ApiComponent_ng_template_36_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_36_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r134); var rowIndex_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r133.editing[rowIndex_r128 + "-gender"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r130, " ");
} }
function ApiComponent_ng_template_36_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ApiComponent_ng_template_36_select_1_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139); var rowIndex_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r137.updateValue($event, "gender", rowIndex_r128); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r130);
} }
function ApiComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApiComponent_ng_template_36_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiComponent_ng_template_36_select_1_Template, 5, 1, "select", 49);
} if (rf & 2) {
    var rowIndex_r128 = ctx.rowIndex;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.editing[rowIndex_r128 + "-gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.editing[rowIndex_r128 + "-gender"]);
} }
var ApiComponent = /** @class */ (function () {
    function ApiComponent(tableApiservice) {
        this.tableApiservice = tableApiservice;
        this.config = { wheelPropagation: true };
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        this.temp = [];
        this.selected = [];
        this.editing = {};
        // tslint:disable-next-line: member-ordering
        this.newAttribute = { 'id': 15, name: 'Mark', position: 'Otto', office: '@mdo', age: '31', salary: '12000', startdate: '16/05/2017' };
    }
    ApiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumb = {
            'mainlabel': 'API DataTable',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'DataTables',
                    'isLink': true,
                    'link': '#'
                },
                {
                    'name': 'API DataTable',
                    'isLink': false
                }
            ]
        };
        this.tableApiservice.getTableApiData().subscribe(function (Response) {
            _this.data = Response;
            _this.getTabledata();
        });
    };
    ApiComponent.prototype.getTabledata = function () {
        this.rows = this.data.rows;
        this.row = this.data.row;
    };
    ApiComponent.prototype.updateFiltername = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.rows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    ApiComponent.prototype.updateFilterposition = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.rows.filter(function (d) {
            return d.position.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    ApiComponent.prototype.updateFilteroffice = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.rows.filter(function (d) {
            return d.office.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    ApiComponent.prototype.updateFilterage = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.rows.filter(function (d) {
            return d.age.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    ApiComponent.prototype.updateFiltersalary = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.rows.filter(function (d) {
            return d.salary.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    ApiComponent.prototype.updateFilterstartdate = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.rows.filter(function (d) {
            return d.startdate.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    ApiComponent.prototype.addFieldValue = function () {
        this.rows.push(this.newAttribute);
        this.rows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
    };
    ApiComponent.prototype.deleteFieldValue = function (index) {
        this.rows.splice(index, 1);
    };
    ApiComponent.prototype.deleteRow = function (id) {
        var i = 0;
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.id === id) {
                break;
            }
            i++;
        }
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        temp.splice(i, 1);
        this.rows = temp;
    };
    ApiComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.row[rowIndex][cell] = event.target.value;
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.row);
        this.row = temp;
    };
    ApiComponent.prototype.reloadAddRows = function () {
        var _this = this;
        this.blockUIAddRows.start('Loading..');
        setTimeout(function () {
            _this.blockUIAddRows.stop();
        }, 2500);
    };
    ApiComponent.prototype.onSelect = function (_a) {
        var _b;
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
    };
    ApiComponent.prototype.reloadRowSelection = function () {
        var _this = this;
        this.blockUIRowSelection.start('Loading..');
        setTimeout(function () {
            _this.blockUIRowSelection.stop();
        }, 2500);
    };
    ApiComponent.prototype.deleteCheckedRow = function () {
        var index = 0;
        var removedIndex = [];
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
            var row = temp_1[_i];
            for (var _a = 0, _b = this.selected; _a < _b.length; _a++) {
                var selectedRow = _b[_a];
                if (row.id === selectedRow.id) {
                    removedIndex.push(index);
                }
            }
            index++;
        }
        for (var i = removedIndex.length - 1; i >= 0; i--) {
            temp.splice(removedIndex[i], 1);
        }
        this.rows = temp;
        this.selected = [];
    };
    ApiComponent.ɵfac = function ApiComponent_Factory(t) { return new (t || ApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_4__["TableApiService"])); };
    ApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ApiComponent, selectors: [["app-api"]], viewQuery: function ApiComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, decls: 37, vars: 24, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "add-row"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "selection-n-deletion"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "table", "table-striped", "table-bordered", "selection-deletion-row"], ["fxFlex", "auto", 1, "bootstrap", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows", "perfectScrollbar"], ["name", "Name", 3, "flexGrow", "minWidth"], ["ngx-datatable-cell-template", ""], ["name", "Position", 3, "flexGrow", "minWidth"], ["name", "Office", 3, "flexGrow", "minWidth"], ["name", "Age", 3, "flexGrow", "minWidth"], ["name", "Salary", 3, "flexGrow", "minWidth"], ["name", "Gender", 3, "flexGrow", "minWidth"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-text"], ["id", "addRow", 1, "btn", "btn-secondary", "my-1", "mb-2", 3, "click"], [1, "feather", "ft-plus"], [1, "table", "table-striped", "table-bordered", "add-rows"], ["fxFlex", "auto", 1, "bootstrap", 3, "sortType", "headerHeight", "limit", "footerHeight", "rowHeight", "rows", "columnMode", "loadingIndicator", "perfectScrollbar"], ["name", "ID", 3, "flexGrow", "minWidth"], [4, "ngfor"], ["name", "Startdate", 3, "flexGrow", "minWidth"], ["ngx-datatable-cell-template", "", "let", "", "element", "", "of", "", "rows", ""], ["type", "button", 1, "btn", "btn-secondary", "my-1", "delete-all", 3, "click"], ["fxFlex", "auto", 1, "bootstrap", 3, "sortType", "headerHeight", "limit", "footerHeight", "rowHeight", "rows", "columnMode", "loadingIndicator", "selected", "selectionType", "perfectScrollbar", "select"], [3, "flexGrow", "maxWidth"], ["ngx-datatable-header-template", ""], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "selectAll", 1, "custom-control-input", 3, "checked", "change"], ["for", "selectAll", 1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"], [3, "value", "change", 4, "ngIf"], [3, "value", "change"], ["value", "male"], ["value", "female"]], template: function ApiComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ApiComponent_div_7_Template, 26, 24, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ApiComponent_div_10_Template, 29, 28, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Row Editing Content ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Double click on any content to edit that section.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ApiComponent_ng_template_26_Template, 2, 2, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ApiComponent_ng_template_28_Template, 2, 2, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ApiComponent_ng_template_30_Template, 2, 2, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ApiComponent_ng_template_32_Template, 2, 2, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ApiComponent_ng_template_34_Template, 2, 2, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ngx-datatable-column", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ApiComponent_ng_template_36_Template, 2, 2, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "addRows")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "rowSelection")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("headerHeight", 50)("limit", 7)("columnMode", "force")("footerHeight", 50)("rowHeight", 40)("rows", ctx.row)("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["ɵf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnCellDirective"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnHeaderDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], styles: ["[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\r\n    font-family: inherit;\r\n    font-size: medium;\r\n    font-weight: bold;\r\n    color: #6B6F82;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-row-center, .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 50px !important;\r\n}\r\n[_nghost-%COMP%]     .datatable-icon-right:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n}\r\n[_nghost-%COMP%]     .datatable-icon-skip:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n}\r\n[_nghost-%COMP%]     .datatable-icon-left:before {\r\n    font-family: 'icofont';\r\n    font-style: normal;\r\n}\r\n[_nghost-%COMP%]     .datatable-icon-left:before {\r\n    content: \"\\2039\";\r\n    font-size: x-large;\r\n}\r\n[_nghost-%COMP%]     .datatable-icon-prev:before {\r\n    content: \"\\00AB\";\r\n    font-size: x-large;\r\n}\r\n[_nghost-%COMP%]     .datatable-icon-right:before {\r\n    content: \"\\203A\";\r\n    font-size: x-large;\r\n}\r\n[_nghost-%COMP%]     .datatable-icon-skip:before {\r\n    content: \"\\00BB\";\r\n    font-size: x-large;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #d4d2e7;\r\n}\r\n[_nghost-%COMP%]     .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   ul[_ngcontent-c11][_ngcontent-%COMP%]   li[_ngcontent-c11][_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    background-color: #d4d2e7;\r\n    font-weight: bold;\r\n    font-size: larger;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\r\n    height: 32px;\r\n    min-width: 34px;\r\n    line-height: 22px;\r\n    padding: 0;\r\n    border-radius: 3px;\r\n    margin: 0 3px;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    padding-top: 3px;\r\n    text-decoration: none;\r\n    vertical-align: bottom;\r\n    color: #7c8091;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    line-height: 9px;\r\n    padding: 0px 08px;\r\n    background-color: #ffffff;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n    font-size: 0px;\r\n    line-height: 22px;\r\n    padding: 0px 09px;\r\n    background-color: #ffffff;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\r\n    background-color: #545454;\r\n    font-weight: bold;\r\n    color: white;\r\n\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-%COMP%] {\r\n    background-color: #545454;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer {\r\n    background: #727e8e;\r\n    color: #ededed;\r\n    margin-top: -1px;\r\n    overflow: inherit;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header {\r\n    font-weight: bold;\r\n    height: unset !important;\r\n    overflow: inherit\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\r\n    flex: 0 0 0%;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager .pager {\r\n    display: flex;\r\n}\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .selected-count .datatable-pager {\r\n   flex: 0 0 0%;\r\n}\r\n[_nghost-%COMP%]     .ngx-datatable {\r\n  display: -webkit-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7O0FBRWhCO0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEI7QUFDSjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksK0NBQStDO0FBQ25EO0FBQ0E7R0FDRyxZQUFZO0FBQ2Y7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJhcGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNkI2RjgyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ljb2ZvbnQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLWxlZnQ6YmVmb3JlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwMzlcIjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1wcmV2OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMDBBQlwiO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAzQVwiO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwwMEJCXCI7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIHVsW19uZ2NvbnRlbnQtYzExXSBsaVtfbmdjb250ZW50LWMxMV06bm90KC5kaXNhYmxlZCk6aG92ZXIgYVtfbmdjb250ZW50LWMxMV0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1pbi13aWR0aDogMzRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICBjb2xvcjogIzdjODA5MTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDlweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldixcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKTpob3ZlciBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUgYSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzcyN2U4ZTtcclxuICAgIGNvbG9yOiAjZWRlZGVkO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXRcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xyXG4gICAgZmxleDogMCAwIDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XHJcbiAgIGZsZXg6IDAgMCAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxufVxyXG5cclxuIl19 */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('addRows'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ApiComponent.prototype, "blockUIAddRows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('rowSelection'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ApiComponent.prototype, "blockUIRowSelection", void 0);
    return ApiComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-api',
                templateUrl: './api.component.html',
                styleUrls: ['./api.component.css']
            }]
    }], function () { return [{ type: src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_4__["TableApiService"] }]; }, { blockUIAddRows: [], blockUIRowSelection: [], componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=app-content-table-datatables-datatables-module.js.map