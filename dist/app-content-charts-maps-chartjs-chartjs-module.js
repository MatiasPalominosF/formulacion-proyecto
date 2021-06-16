(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-charts-maps-chartjs-chartjs-module"],{

/***/ "Il0I":
/*!***************************************************************!*\
  !*** ./src/app/content/charts-maps/chartjs/chartjs.module.ts ***!
  \***************************************************************/
/*! exports provided: ChartjsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsModule", function() { return ChartjsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts/charts.component */ "OJW5");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/general/card/card.module */ "vj4e");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");












var ChartjsModule = /** @class */ (function () {
    function ChartjsModule() {
    }
    ChartjsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartjsModule });
    ChartjsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartjsModule_Factory(t) { return new (t || ChartjsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot({
                    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_7__["BlockTemplateComponent"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'charts',
                        component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]
                    }
                ])
            ]] });
    return ChartjsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartjsModule, { declarations: [_charts_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
        _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                    _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot({
                        template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_7__["BlockTemplateComponent"]
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'charts',
                            component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]
                        }
                    ])
                ],
                declarations: [_charts_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "OJW5":
/*!************************************************************************!*\
  !*** ./src/app/content/charts-maps/chartjs/charts/charts.component.ts ***!
  \************************************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjs */ "Wxmm");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ "FhuM");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "hrfs");









function ChartsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function ChartsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.reloadBarCharts($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Bar charts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "canvas", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("colors", ctx_r0.barChartColors)("legend", ctx_r0.barChartLegend)("chartType", ctx_r0.barChartType);
} }
function ChartsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function ChartsComponent_div_10_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.reloadLineCharts($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Line Charts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "canvas", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r1.lineChartsData)("labels", ctx_r1.lineChartsLabels)("options", ctx_r1.lineChartsOptions)("colors", ctx_r1.lineChartsColors)("legend", ctx_r1.lineChartsLegend)("chartType", ctx_r1.lineChartsType);
} }
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        /**
         * lineChart
         */
        this.lineChartData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartData"];
        this.lineChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartLabels"];
        this.lineChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartOptions"];
        this.lineChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartColors"];
        this.lineChartLegend = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartLegend"];
        this.lineChartType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartType"];
        /**
        * areaChart
        */
        this.areaChartData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["areaChartData"];
        this.areaChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["areaChartLabels"];
        this.areaChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["areaChartOptions"];
        this.areaChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["areaChartColors"];
        this.areaChartLegend = _chartjs__WEBPACK_IMPORTED_MODULE_3__["areaChartLegend"];
        this.areaChartType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["areaChartType"];
        /**
         * scatterChartData
         */
        this.scatterChartData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["scatterChartData"];
        this.scatterChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["scatterChartLabels"];
        this.scatterChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["scatterChartOptions"];
        this.scatterChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["scatterChartColors"];
        this.scatterChartLegend = _chartjs__WEBPACK_IMPORTED_MODULE_3__["scatterChartLegend"];
        this.scatterChartType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["scatterChartType"];
        /**
         * barChart
         */
        this.barChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["barChartOptions"];
        this.barChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["barChartLabels"];
        this.barChartType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["barChartType"];
        this.barChartLegend = _chartjs__WEBPACK_IMPORTED_MODULE_3__["barChartLegend"];
        this.barChartData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["barChartData"];
        this.barChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["barChartColors"];
        /**
         * Doughnut
         */
        this.doughnutChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["doughnutChartLabels"];
        this.doughnutChartData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["doughnutChartData"];
        this.doughnutChartType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["doughnutChartType"];
        this.doughnutChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["doughnutChartColors"];
        this.doughnutChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["doughnutChartOptions"];
        /**
         * Radar
         */
        this.radarChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["radarChartLabels"];
        this.radarChartData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["radarChartData"];
        this.radarChartType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["radarChartType"];
        this.radarChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["radarChartColors"];
        this.radarChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["radarChartOptions"];
        /**
         * Pie
         */
        this.pieChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["pieChartLabels"];
        this.pieChartData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["pieChartData"];
        this.pieChartType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["pieChartType"];
        this.pieChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["pieChartColors"];
        this.pieChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["pieChartOptions"];
        /**
         * PolarArea
         */
        this.polarAreaChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["polarAreaChartLabels"];
        this.polarAreaChartData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["polarAreaChartData"];
        this.polarAreaLegend = _chartjs__WEBPACK_IMPORTED_MODULE_3__["polarAreaLegend"];
        this.ploarChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["ploarChartColors"];
        this.polarAreaChartType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["polarAreaChartType"];
        this.polarChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["polarChartOptions"];
        /**
         * lineChart
         */
        this.lineChartsData = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartsData"];
        this.lineChartsLabels = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartsLabels"];
        this.lineChartsOptions = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartsOptions"];
        this.lineChartsColors = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartsColors"];
        this.lineChartsLegend = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartsLegend"];
        this.lineChartsType = _chartjs__WEBPACK_IMPORTED_MODULE_3__["lineChartsType"];
    }
    /**
     * OnInit
     */
    ChartsComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'Chartjs Charts',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'Chartjs',
                    'isLink': true,
                    'link': '#'
                },
            ]
        };
    };
    /**
  * Reload card
  */
    ChartsComponent.prototype.reloadBarCharts = function () {
        var _this = this;
        this.blockUIBarCharts.start('Loading..');
        setTimeout(function () {
            _this.blockUIBarCharts.stop();
        }, 2500);
    };
    ChartsComponent.prototype.reloadLineCharts = function () {
        var _this = this;
        this.blockUILineCharts.start('Loading..');
        setTimeout(function () {
            _this.blockUILineCharts.stop();
        }, 2500);
    };
    ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(); };
    ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["app-charts"]], decls: 81, vars: 44, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "chartjs-bar-charts"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "chartjs-line-charts"], ["id", "chartjs-arealine-charts"], [1, "col-12"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-block"], [1, "height-400"], ["height", "400", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], ["id", "chartjs-line-stacked-charts"], ["id", "chartjs-scatter-charts"], ["height", "400", "id", "scatter-chart", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], ["id", "chartjs-pie-charts"], [1, "card"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "piechart", "height-400"], ["baseChart", "", 3, "data", "options", "labels", "chartType", "colors"], ["id", "chartjs-doughnut-charts"], [1, "doughnutChart", "height-400"], ["id", "chartjs-polar-charts"], [1, "polarchart", "height-400"], ["baseChart", "", 3, "data", "labels", "legend", "options", "chartType", "colors"], ["id", "chartjs-radar-charts"], [1, "card", "radarChart"], ["baseChart", "", 3, "datasets", "options", "labels", "chartType", "colors"], [3, "options", "reloadFunction"], [1, "z"], ["height", "400", "baseChart", "", 1, "barchart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChartsComponent_div_7_Template, 7, 7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChartsComponent_div_10_Template, 8, 7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "m-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Area Line charts ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "canvas", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "m-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Line Stacked Area Chart ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "canvas", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "m-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](35, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Scatter Logx Chart ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](37, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "canvas", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "section", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Pie Chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "canvas", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "section", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Doughnut Chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "canvas", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "section", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Polar Chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "canvas", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "section", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Radar Chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "canvas", 32);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "barCharts")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "lineCharts")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.areaChartData)("labels", ctx.areaChartLabels)("options", ctx.areaChartOptions)("colors", ctx.areaChartColors)("legend", ctx.areaChartLegend)("chartType", ctx.areaChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.scatterChartData)("labels", ctx.scatterChartLabels)("options", ctx.scatterChartOptions)("colors", ctx.scatterChartColors)("legend", ctx.scatterChartLegend)("chartType", ctx.scatterChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.pieChartData)("options", ctx.pieChartOptions)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("colors", ctx.pieChartColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.doughnutChartData)("options", ctx.doughnutChartOptions)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.polarAreaChartData)("labels", ctx.polarAreaChartLabels)("legend", ctx.polarAreaLegend)("options", ctx.polarChartOptions)("chartType", ctx.polarAreaChartType)("colors", ctx.ploarChartColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.radarChartData)("options", ctx.radarChartOptions)("labels", ctx.radarChartLabels)("chartType", ctx.radarChartType)("colors", ctx.radarChartColors);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["ɵf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"]], styles: ["[_nghost-%COMP%]     .barchart .chartjs-render-monitor {\r\n    -webkit-animation: chartjs-render-animation 0.001s;\r\n    animation: chartjs-render-animation 0.001s;\r\n\r\n}\r\n[_nghost-%COMP%]     .radarChart {\r\n  height: 470px !important;\r\n}\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n@media(max-width:767px) {\r\n  [_nghost-%COMP%]     .chart\r\n   {\r\n    height:400px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsMENBQTBDOztBQUU5QztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFOztJQUVFLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6ImNoYXJ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJhcmNoYXJ0IC5jaGFydGpzLXJlbmRlci1tb25pdG9yIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjaGFydGpzLXJlbmRlci1hbmltYXRpb24gMC4wMDFzO1xyXG4gICAgYW5pbWF0aW9uOiBjaGFydGpzLXJlbmRlci1hbmltYXRpb24gMC4wMDFzO1xyXG5cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnJhZGFyQ2hhcnQge1xyXG4gIGhlaWdodDogNDcwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5jaGFydFxyXG4gICB7XHJcbiAgICBoZWlnaHQ6NDAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn0iXX0= */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('barCharts'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ChartsComponent.prototype, "blockUIBarCharts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('lineCharts'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ChartsComponent.prototype, "blockUILineCharts", void 0);
    return ChartsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-charts',
                templateUrl: './charts.component.html',
                styleUrls: ['./charts.component.css']
            }]
    }], null, { blockUIBarCharts: [], blockUILineCharts: [] }); })();


/***/ }),

/***/ "Wxmm":
/*!***************************************************************!*\
  !*** ./src/app/content/charts-maps/chartjs/charts/chartjs.ts ***!
  \***************************************************************/
/*! exports provided: lineChartData, lineChartLabels, lineChartOptions, lineChartColors, lineChartLegend, lineChartType, areaChartData, areaChartLabels, areaChartOptions, areaChartColors, areaChartLegend, areaChartType, scatterChartData, scatterChartLabels, scatterChartOptions, scatterChartColors, scatterChartLegend, scatterChartType, barChartOptions, barChartLabels, barChartType, barChartLegend, barChartData, barChartColors, doughnutChartLabels, doughnutChartData, doughnutChartType, doughnutChartColors, doughnutChartOptions, radarChartLabels, radarChartData, radarChartType, radarChartColors, radarChartOptions, pieChartLabels, pieChartData, pieChartType, pieChartColors, pieChartOptions, polarAreaChartLabels, polarAreaChartData, polarAreaLegend, ploarChartColors, polarAreaChartType, polarChartOptions, lineChartsData, lineChartsLabels, lineChartsOptions, lineChartsColors, lineChartsLegend, lineChartsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartData", function() { return lineChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartLabels", function() { return lineChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartOptions", function() { return lineChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartColors", function() { return lineChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartLegend", function() { return lineChartLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartType", function() { return lineChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartData", function() { return areaChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartLabels", function() { return areaChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartOptions", function() { return areaChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartColors", function() { return areaChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartLegend", function() { return areaChartLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartType", function() { return areaChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterChartData", function() { return scatterChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterChartLabels", function() { return scatterChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterChartOptions", function() { return scatterChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterChartColors", function() { return scatterChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterChartLegend", function() { return scatterChartLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scatterChartType", function() { return scatterChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartOptions", function() { return barChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartLabels", function() { return barChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartType", function() { return barChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartLegend", function() { return barChartLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartData", function() { return barChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartColors", function() { return barChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartLabels", function() { return doughnutChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartData", function() { return doughnutChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartType", function() { return doughnutChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartColors", function() { return doughnutChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartOptions", function() { return doughnutChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartLabels", function() { return radarChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartData", function() { return radarChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartType", function() { return radarChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartColors", function() { return radarChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartOptions", function() { return radarChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartLabels", function() { return pieChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartData", function() { return pieChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartType", function() { return pieChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartColors", function() { return pieChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartOptions", function() { return pieChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaChartLabels", function() { return polarAreaChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaChartData", function() { return polarAreaChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaLegend", function() { return polarAreaLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ploarChartColors", function() { return ploarChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaChartType", function() { return polarAreaChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarChartOptions", function() { return polarChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartsData", function() { return lineChartsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartsLabels", function() { return lineChartsLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartsOptions", function() { return lineChartsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartsColors", function() { return lineChartsColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartsLegend", function() { return lineChartsLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartsType", function() { return lineChartsType; });
///////////////////// start linechart ///////////
var lineChartData = [
    { data: [56, 70, 55, 46, 67, 52, 70], label: 'Series C' },
    { data: [28, 48, 35, 29, 46, 27, 60], label: 'Series B' },
    { data: [0, 20, 11, 19, 10, 22, 9], label: 'Series A' }
];
var lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
var lineChartOptions = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: true,
                ticks: {
                    padding: 4
                },
                gridLines: {
                    color: '#f3f3f3',
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month',
                }
            }],
        yAxes: [{
                display: true,
                gridLines: {
                    color: '#f3f3f3',
                    drawTicks: false,
                },
                ticks: {
                    padding: 4
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value',
                }
            }]
    },
};
var lineChartColors = [
    {
        backgroundColor: 'rgb(138,233,204,0.5)',
        borderColor: 'rgb(138,233,204,1)',
        pointBackgroundColor: 'rgb(138,233,204,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(138,233,204,0.2)'
    },
    {
        backgroundColor: 'rgb(68,186,239,0.8)',
        borderColor: 'rgb(168,186,239,1)',
        pointBackgroundColor: 'rgb(168,186,239,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(168,186,239,1)'
    },
    {
        backgroundColor: 'rgb(1,57,204,2.5)',
        borderColor: 'rgb(166,157,204,1)',
        pointBackgroundColor: 'rgb(166,157,204,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(166,157,204,1)'
    }
];
var lineChartLegend = true;
var lineChartType = 'line';
///////////////////// Start AreaChart///////////
var areaChartData = [
    { data: [0, 150, 140, 105, 190, 230, 270], label: 'Series A' },
    { data: [0, 90, 120, 240, 140, 250, 190], label: 'Series B' }
];
var areaChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
var areaChartOptions = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                display: true,
                gridLines: {
                    color: '#f3f3f3',
                    drawTicks: false,
                },
                ticks: {
                    padding: 4
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                display: true,
                gridLines: {
                    color: '#f3f3f3',
                    drawTicks: false,
                },
                ticks: {
                    padding: 4
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
    },
};
var areaChartColors = [
    {
        backgroundColor: 'rgb(237,238,240,0.4)',
        borderColor: 'transparent',
        pointBackgroundColor: '#FFF',
        pointBorderColor: 'rgb(237,238,240,0.4)',
        pointHoverBackgroundColor: 'rgb(237,238,240,0.4)',
        pointRadius: '5',
        pointHoverBorderColor: '#FFF',
        pointHoverRadius: '5',
        pointBorderWidth: '2'
    },
    {
        backgroundColor: 'rgb(133,158,233,0.9)',
        borderColor: 'transparent',
        pointBackgroundColor: '#FFF',
        pointBorderColor: 'rgb(133,158,233,0.9)',
        pointHoverBackgroundColor: 'rgb(133,158,233,0.9)',
        pointRadius: '5',
        pointHoverBorderColor: '#FFF',
        pointHoverRadius: '5',
        pointBorderWidth: '2'
    },
];
var areaChartLegend = true;
var areaChartType = 'line';
///////////////////// End AreaChart///////////
///////////////////// End ScatterChart///////////
// scatterChart//
var scatterChartData = [
    {
        data: [
            {
                x: 1,
                y: -1.711e-2,
            }, {
                x: 1.26,
                y: -2.708e-2,
            }, {
                x: 1.58,
                y: -4.285e-2,
            }, {
                x: 2.0,
                y: -6.772e-2,
            }, {
                x: 2.51,
                y: -1.068e-1,
            }, {
                x: 3.16,
                y: -1.681e-1,
            }, {
                x: 3.98,
                y: -2.635e-1,
            }, {
                x: 5.01,
                y: -4.106e-1,
            }, {
                x: 6.31,
                y: -6.339e-1,
            }, {
                x: 7.94,
                y: -9.659e-1,
            }, {
                x: 10.00,
                y: -1.445,
            }, {
                x: 12.6,
                y: -2.110,
            }, {
                x: 15.8,
                y: -2.992,
            }, {
                x: 20.0,
                y: -4.102,
            }, {
                x: 25.1,
                y: -5.429,
            }, {
                x: 31.6,
                y: -6.944,
            }, {
                x: 39.8,
                y: -8.607,
            }, {
                x: 50.1,
                y: -1.038e1,
            }, {
                x: 63.1,
                y: -1.223e1,
            }, {
                x: 79.4,
                y: -1.413e1,
            }, {
                x: 100.00,
                y: -1.607e1,
            }, {
                x: 126,
                y: -1.803e1,
            }, {
                x: 158,
                y: -2e1,
            }, {
                x: 200,
                y: -2.199e1,
            }, {
                x: 251,
                y: -2.398e1,
            }, {
                x: 316,
                y: -2.597e1,
            }, {
                x: 398,
                y: -2.797e1,
            }, {
                x: 501,
                y: -2.996e1,
            }, {
                x: 631,
                y: -3.196e1,
            }, {
                x: 794,
                y: -3.396e1,
            }, {
                x: 1000,
                y: -3.596e1,
            }
        ], label: 'V(node2)'
    }
];
var scatterChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
var scatterChartOptions = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: false,
        text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
    },
    scales: {
        xAxes: [{
                type: 'logarithmic',
                position: 'bottom',
                gridLines: {
                    zeroLineColor: 'rgba(0,0,0,.1)',
                    color: '#f3f3f3',
                    drawTicks: false,
                },
                ticks: {
                    padding: 4
                },
                scaleLabel: {
                    labelString: 'Frequency',
                    display: true,
                }
            }],
        yAxes: [{
                type: 'linear',
                ticks: {
                    padding: 4,
                    userCallback: function (tick) {
                        return tick.toString() + 'dB';
                    }
                },
                gridLines: {
                    zeroLineColor: 'rgba(81,117,224,1)',
                    color: '#f3f3f3',
                    drawTicks: false,
                },
                scaleLabel: {
                    labelString: 'Voltage',
                    display: true
                }
            }]
    }
};
var scatterChartColors = [
    {
        backgroundColor: 'rgba(81,117,224,.6)',
        borderColor: 'transparent',
        pointBorderColor: '#5175E0',
        pointBackgroundColor: '#FFF',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
    }
];
var scatterChartLegend = true;
var scatterChartType = 'scatter';
///////////////////// Start scatterChart ///////////////
///////////////////// Start Barchart ///////////////
var barChartOptions = {
    responsive: true,
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
                categoryPercentage: 0.5
            }]
    }
};
var barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
var barChartType = 'bar';
var barChartLegend = true;
var barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 59, 86, 27, 90], label: 'Series B' }
];
var barChartColors = [
    {
        backgroundColor: '#28d094',
        borderColor: '#28d094',
        pointBackgroundColor: '#28d094',
        pointBorderColor: '#28d094',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#28d094',
    },
    {
        backgroundColor: '#f98e76',
        borderColor: '#f98e76',
        pointBackgroundColor: '#f98e76',
        pointBorderColor: '#f98e76',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#f98e76'
    },
];
///////////////////// End barchart////////////////
///////////////////// Start Doughnut////////////////
var doughnutChartLabels = ['January', 'February', 'March', 'April', 'May'];
var doughnutChartData = [350, 250, 100, 200, 80];
var doughnutChartType = 'doughnut';
var doughnutChartColors = [{ backgroundColor: ['#00a5a8', '#28d094', '#ff4558', '#ff7d4d', '#626e82'] }];
var doughnutChartOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
};
///////////////////// End Doughnut////////////////
///////////////////// Start Radar////////////////
var radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
var radarChartData = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
];
var radarChartType = 'radar';
var radarChartColors = [
    {
        backgroundColor: 'rgba(245,0,87,.3)'
    },
    {
        backgroundColor: 'rgba(29,233,182,.6)'
    }
];
var radarChartOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
};
///////////////////// End Radar////////////////
///////////////////// start PieChart////////////////
var pieChartLabels = ['January', 'February', 'March', 'April', 'May'];
var pieChartData = [300, 200, 100, 150, 80];
var pieChartType = 'pie';
var pieChartColors = [{ backgroundColor: ['#00a5a8', '#28d094', '#ff4558', '#ff7d4d', '#626e82'] }];
var pieChartOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
};
///////////////////// end Pie chart ////////////////
///////////////////// start polar-chart///////////
// PolarArea
var polarAreaChartLabels = ['January', 'February', 'March', 'April', 'May'];
var polarAreaChartData = [300, 500, 100, 40, 120];
var polarAreaLegend = true;
var ploarChartColors = [{ backgroundColor: ['#00a5a8', '#28d094', '#ff4558', '#ff7d4d', '#626e82'] }];
var polarAreaChartType = 'polarArea';
var polarChartOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false
};
///////////////////// end polar-chart///////////
// lineChartsData//
var lineChartsData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' },
    { data: [45, 25, 16, 36, 67, 18, 76], label: 'My Third dataset - No bezier' }
];
var lineChartsLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
var lineChartsOptions = {
    animation: {
        duration: 1000,
        easing: 'easeOutBack'
    },
    hover: {
        animationDuration: 1000,
        mode: 'label'
    },
    responsiveAnimationDuration: 1000,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
    },
    scales: {
        xAxes: [{
                display: true,
                gridLines: {
                    color: 'f3f3f3',
                    drawTicks: false,
                },
                ticks: {
                    padding: 4
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
        yAxes: [{
                display: true,
                gridLines: {
                    color: '#f3f3f3',
                    drawTicks: false,
                },
                ticks: {
                    padding: 4
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
    },
    title: {
        display: true,
        text: 'Chart.js Line Chart - Legend'
    }
};
var lineChartsColors = [
    {
        fill: false,
        borderDash: [5, 5],
        borderColor: '#9C27B0',
        pointBorderColor: '#9C27B0',
        pointBackgroundColor: '#FFF',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
    },
    {
        fill: false,
        borderDash: [5, 5],
        borderColor: '#00A5A8',
        pointBorderColor: '#00A5A8',
        pointBackgroundColor: '#FFF',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
    },
    {
        lineTension: 0,
        fill: false,
        borderColor: '#FF7D4D',
        pointBorderColor: '#FF7D4D',
        pointBackgroundColor: '#FFF',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
    },
];
var lineChartsLegend = true;
var lineChartsType = 'line';
// lineChartsData//


/***/ })

}]);
//# sourceMappingURL=app-content-charts-maps-chartjs-chartjs-module.js.map