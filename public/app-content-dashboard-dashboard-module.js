(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-dashboard-dashboard-module"],{

/***/ "3p/8":
/*!************************************************************!*\
  !*** ./src/app/content/dashboard/sales/sales.component.ts ***!
  \************************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/chart.api */ "5YoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/general/card/card.component */ "FhuM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-chartist */ "4QQT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");

















function SalesComponent_div_6_x_chartist_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "x-chartist", 74);
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r6.lineArea.data)("type", ctx_r6.lineArea.type)("options", ctx_r6.lineArea.options)("responsiveOptions", ctx_r6.lineArea.responsiveOptions)("events", ctx_r6.lineArea.events);
} }
function SalesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function SalesComponent_div_6_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.reloadRevenue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Revenue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Current week");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "$82,124");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Previous week");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "$52,502");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SalesComponent_div_6_x_chartist_17_Template, 1, 5, "x-chartist", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.lineArea);
} }
function SalesComponent_div_10_x_chartist_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "x-chartist", 74);
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r9.donutChart2.data)("type", ctx_r9.donutChart2.type)("options", ctx_r9.donutChart2.options)("responsiveOptions", ctx_r9.donutChart2.responsiveOptions)("events", ctx_r9.donutChart2.events);
} }
function SalesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function SalesComponent_div_10_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.reloadHitRate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Hit Rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "-12%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SalesComponent_div_10_x_chartist_8_Template, 1, 5, "x-chartist", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.hitRateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.donutChart2);
} }
function SalesComponent_x_chartist_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "x-chartist", 74);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r2.donutChart1.data)("type", ctx_r2.donutChart1.type)("options", ctx_r2.donutChart1.options)("responsiveOptions", ctx_r2.donutChart1.responsiveOptions)("events", ctx_r2.donutChart1.events);
} }
function SalesComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function SalesComponent_div_52_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.reloadEmail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Emails ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Open rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "89%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngb-progressbar", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "310");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "/500");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ngb-progressbar", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.emailsOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 50);
} }
function SalesComponent_x_chartist_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "x-chartist", 74);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r4.earningchart.data)("type", ctx_r4.earningchart.type)("options", ctx_r4.earningchart.options)("responsiveOptions", ctx_r4.earningchart.responsiveOptions)("events", ctx_r4.earningchart.events);
} }
function SalesComponent_tr_151_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var imageUrl_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imageUrl_r16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SalesComponent_tr_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SalesComponent_tr_151_li_5_Template, 2, 1, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ngb-progressbar", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r14.product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r14.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-outline-", row_r14.type, " round");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r14.buttonname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", row_r14.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", row_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r14.amount, " ");
} }
var SalesComponent = /** @class */ (function () {
    function SalesComponent(_renderer, route, chartApiservice) {
        this._renderer = _renderer;
        this.route = route;
        this.chartApiservice = chartApiservice;
        this.config = { suppressScrollY: true };
        this.options = {
            bodyClass: ['pt-0'],
            close: false,
            expand: false,
            minimize: false,
            reload: true
        };
        this.hitRateOptions = {
            bodyClass: ['bg-hexagons', 'pt-0'],
            headerClass: ['bg-hexagons'],
            cardClass: ['pull-up'],
            close: false,
            expand: false,
            minimize: false,
            reload: true
        };
        this.dealsOptions = {
            bodyClass: ['bg-hexagons-danger'],
            cardClass: ['pull-up'],
            contentClass: ['bg-gradient-directional-danger']
        };
        this.emailsOptions = {
            bodyClass: ['pt-0'],
            close: false,
            expand: false,
            minimize: false,
            reload: true
        };
        this.loadingIndicator = true;
        this.firstRow = ['../../../assets/images/portrait/small/avatar-s-4.png',
            '../../../assets/images/portrait/small/avatar-s-5.png',
            '../../../assets/images/portrait/small/avatar-s-6.png'];
        this.secondRow = ['../../../assets/images/portrait/small/avatar-s-7.png',
            '../../../assets/images/portrait/small/avatar-s-8.png'];
        this.thirdRow = ['../../../assets/images/portrait/small/avatar-s-1.png',
            '../../../assets/images/portrait/small/avatar-s-2.png',
            '../../../assets/images/portrait/small/avatar-s-3.png'];
        this.fourthRow = ['../../../assets/images/portrait/small/avatar-s-11.png',
            '../../../assets/images/portrait/small/avatar-s-12.png'];
        this.fifthRow = ['../../../assets/images/portrait/small/avatar-s-6.png',
            '../../../assets/images/portrait/small/avatar-s-4.png'];
        this.rows = [
            {
                'type': 'danger', 'value': 85, 'product': 'iPhone X',
                'image': this.firstRow, 'buttonname': 'Mobile', 'amount': '$ 1200.00', 'bagde': '+8 more'
            },
            {
                'type': 'success', 'value': 75, 'product': 'iPad',
                'image': this.secondRow, 'buttonname': 'Teblet', 'amount': '$ 1190.00', 'bagde': '+5 more'
            },
            {
                'type': 'danger', 'value': 65, 'product': 'OnePlus',
                'image': this.thirdRow, 'buttonname': 'Mobile', 'amount': '$ 999.00', 'bagde': '+3 more'
            },
            {
                'type': 'success', 'value': 55, 'product': 'ZenPad',
                'image': this.fourthRow, 'buttonname': 'Teblet', 'amount': '$ 1150.00'
            },
            {
                'type': 'danger', 'value': 45, 'product': 'Pixel 2',
                'image': this.fifthRow, 'buttonname': 'Mobile', 'amount': '$ 1180.00'
            }
        ];
        this.Daygraph = true;
        this.Weekgraph = false;
        this.Monthgraph = false;
    }
    SalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartApiservice.getSalesData().subscribe(function (Response) {
            _this.salesData = Response;
            _this.getChartdata();
        });
    };
    SalesComponent.prototype.reloadRevenue = function () {
        var _this = this;
        this.blockUIRevenue.start('Loading..');
        setTimeout(function () {
            _this.blockUIRevenue.stop();
        }, 2500);
    };
    SalesComponent.prototype.reloadHitRate = function () {
        var _this = this;
        this.blockUIHitRate.start('Please Wait..');
        setTimeout(function () {
            _this.blockUIHitRate.stop();
        }, 2500);
    };
    SalesComponent.prototype.reloadEmail = function () {
        var _this = this;
        this.blockUIEmail.start();
        setTimeout(function () {
            _this.blockUIEmail.stop();
        }, 2500);
    };
    SalesComponent.prototype.rotueInvoice = function () {
        this.route.navigate(['/invoice/invoice-summary']);
    };
    SalesComponent.prototype.getChartdata = function () {
        var Chartdata = this.salesData;
        this.lineArea = {
            type: 'Line',
            data: Chartdata['lineArea'],
            options: {
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].simple({
                    divisor: 2.8
                }),
                fullWidth: true,
                height: '270px',
                showArea: false,
                showPoint: false,
                axisX: {
                    showGrid: false,
                    showLabel: true,
                    offset: 32
                },
                axisY: {
                    showGrid: true,
                    showLabel: true,
                    scaleMinSpace: 28,
                    offset: 44
                },
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgb(255,73,97)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgb(255,73,97)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (26 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        this.earningchart = {
            type: 'Line',
            data: Chartdata['earningchart'],
            options: {
                chartPadding: 0,
                height: '440px',
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: -1
                },
                axisY: {
                    scaleMinSpace: 40,
                    showGrid: false,
                    showLabel: false,
                    offset: -2
                },
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient1',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgb(255,73,97)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgb(255,73,97)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Doughnut
        this.donutChart2 = {
            type: 'Pie',
            data: Chartdata['donut1'],
            options: {
                chartPadding: 0,
                fullwidth: true,
                height: '273px',
                donut: true,
                showLabel: true,
                startAngle: 0,
                labelInterpolationFnc: function (value) {
                    var total = 82;
                    return total + '%';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        this.donutChart1 = {
            type: 'Pie',
            data: Chartdata['donut2'],
            options: {
                chartPadding: 0,
                fullwidth: true,
                height: '273px',
                donut: true,
                showLabel: true,
                labelInterpolationFnc: function (value) {
                    var total = 76;
                    return total + '%';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
    };
    SalesComponent.ɵfac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_6__["ChartApiService"])); };
    SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SalesComponent, selectors: [["app-sales"]], viewQuery: function SalesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, decls: 152, vars: 11, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "row"], [1, "col-xl-6", "col-12"], ["class", "Revenue", 4, "blockUI", "blockUIMessage"], [1, "col-md-6", "col-12"], ["class", "HitRate", 4, "blockUI", "blockUIMessage"], [3, "options"], ["mCardBody", ""], [1, "card-title", "white"], [1, "white"], [1, "float-right"], [1, "red", "lighten-4"], ["id", "donut-chart1", 1, "height-230", "donut-chart1"], [3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "col-lg-6", "col-12"], [1, "card", "pull-up"], [1, "card-content"], [1, "card-body"], [1, "media", "d-flex"], [1, "media-body", "text-left"], [1, "text-muted"], [1, "align-self-center"], [1, "icon-trophy", "success", "font-large-2", "float-right"], [1, "icon-call-in", "danger", "font-large-2", "float-right"], [1, "col-12", "col-md-3"], ["class", "EmailRate", 4, "blockUI", "blockUIMessage"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "heading-elements"], [1, "list-inline", "mb-0"], [1, "info"], [1, "card-content", "collapse", "show"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "mb-0"], ["scope", "row", 1, "border-top-0"], [1, "border-top-0"], ["scope", "row"], [1, "col-12", "col-md-6"], [1, "card-title", "text-center"], [1, "card-body", "pt-0"], [1, "col-md-6", "col-12", "border-right-blue-grey", "border-right-lighten-5", "text-center"], [1, "danger", "text-bold-600"], [1, "font-large-2", "text-bold-400"], [1, "blue-grey", "lighten-2", "mb-0"], [1, "col-md-6", "col-12", "text-center"], [1, "success", "text-bold-600"], [1, "col-12", "col-md-4"], [1, "earning-chart", "position-relative"], [1, "chart-title", "position-absolute", "mt-2", "ml-2"], [1, "display-4"], ["id", "cost-revenue", 1, "earningchart", "position-relative"], [1, "chart-stats", "position-absolute", "position-bottom-0", "position-right-0", "mb-2", "mr-3"], [1, "btn", "round", "btn-danger", "mr-1", "btn-glow", 3, "routerLink"], [1, "feather", "ft-bar-chart"], [1, "danger", "darken-2", 3, "routerLink"], ["id", "recent-sales", 1, "col-12", "col-md-8"], [1, "btn", "btn-sm", "btn-danger", "box-shadow-2", "round", "btn-min-width", "pull-right", 3, "routerLink", "click"], [1, "card-content", "mt-1"], ["fxFlex", "auto", 1, "table-responsive", 3, "perfectScrollbar"], [1, "table", "border_bottom", "table-hover"], ["scope", "col", 1, "border-top-0"], [4, "ngFor", "ngForOf"], [1, "Revenue"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "row", "mb-1"], [1, "col-6", "col-md-4"], [1, "danger"], [1, "chartist"], [3, "data", "type", "options", "responsiveOptions", "events"], [1, "HitRate"], ["id", "card", 3, "options", "reloadFunction"], ["id", "donut-chart2", 1, "height-230", "donut-chart2"], [1, "EmailRate"], [1, "float-right", "text-bold-600"], ["height", "7px", "type", "danger", 3, "value"], [1, "pt-1"], [1, "text-bold-600"], ["height", "7px", "type", "success", 3, "value"], [1, "text-truncate"], [1, "text-truncate", "p-1"], [1, "list-unstyled", "users-list", "m-0"], ["class", "avatar avatar-sm pull-up", 4, "ngFor", "ngForOf"], ["type", "button"], ["height", "7px", 3, "type", "value"], [1, "avatar", "avatar-sm", "pull-up"], ["alt", "Avatar", 1, "media-object", "rounded-circle", 3, "src"]], template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SalesComponent_div_6_Template, 18, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SalesComponent_div_10_Template, 9, 2, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "m-card", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Deals ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "-55%");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "152");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "/200");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SalesComponent_x_chartist_24_Template, 1, 5, "x-chartist", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h6", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Order Value ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "$ 88,568");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h6", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Calls");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "3,568");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SalesComponent_div_52_Template, 17, 3, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h4", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Top Products");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Show all");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "table", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "th", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "iPone X");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "2245");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "th", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "One Plus");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "1850");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "th", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Samsung S7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "1550");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h4", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Average Deal Size");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h6", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "-30%");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h4", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "$12,536");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Per rep");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h6", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "12%");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h4", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "$18,548");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Per team");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h1", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "$1,596");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Total Earning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, SalesComponent_x_chartist_116_Template, 1, 5, "x-chartist", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Statistics ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "for the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "a", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "last year.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "h4", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Recent Sales");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "ul", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "a", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SalesComponent_Template_a_click_133_listener() { return ctx.rotueInvoice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "View all");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "table", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "th", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "th", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Customers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "th", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "th", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Popularity");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "th", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, SalesComponent_tr_151_Template, 14, 9, "tr", 66);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "revenue")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "hitrate")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.dealsOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.donutChart1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "email")("blockUIMessage", "Updating");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.earningchart);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
        } }, directives: [ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["ɵf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_chartist__WEBPACK_IMPORTED_MODULE_10__["ChartistComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbar"]], styles: ["[_nghost-%COMP%]     .chartist .ct-series-a .ct-line {\r\n\r\n    stroke: url(#gradient2);\r\n    stroke-linecap: round;\r\n    \r\n   }\r\n[_nghost-%COMP%]     .chartist {\r\n    filter: drop-shadow(0px 20px 11px rgba(252, 198, 198, 0.8)) !important;\r\n}\r\n[_nghost-%COMP%]     .chartist .ct-grid{\r\n    stroke-dasharray: 0px;\r\n    stroke: rgba(0, 0, 0, 0.4);\r\n    stroke-width: 0.6px;\r\n}\r\n[_nghost-%COMP%]     .chartist .ct-series-b .ct-line {\r\n    stroke: #c8c2c3;\r\n    stroke-dasharray: 8px 3px;\r\n}\r\n[_nghost-%COMP%]     .chartist .ct-label.ct-vertical.ct-start {\r\n    font-weight: 600;\r\n    color: #636161;\r\n    font-size: 12px;\r\n}\r\n[_nghost-%COMP%]     .earningchart .ct-series-a .ct-area {\r\n    fill: rgba(255,117,136,1);\r\n}\r\n[_nghost-%COMP%]     .earningchart .ct-series-a .ct-point-circle {\r\n    stroke-width: 3px;\r\n    stroke: #FF4961;\r\n    fill: #ffffff;\r\n  }\r\n[_nghost-%COMP%]     .earningchart .ct-series-a .ct-line {\r\n    stroke: #FF4961;\r\n    stroke-width: 3px;\r\n}\r\n[_nghost-%COMP%]     .avatar-xs {\r\n  width: 32px !important;\r\n  border: 2px solid #FFF;\r\n}\r\n[_nghost-%COMP%]     .donut-chart2{\r\n    margin-bottom: -25px;\r\n    margin-top: -17px;\r\n}\r\n[_nghost-%COMP%]     .donut-chart2 .ct-series-a .ct-slice-donut {\r\n    stroke: #28d094;\r\n    stroke-width: 5.5px !important;\r\n}\r\n[_nghost-%COMP%]     .donut-chart2 .ct-series-b .ct-slice-donut {\r\n    stroke: #ff4961;\r\n    stroke-width: 5.5px !important;\r\n}\r\n[_nghost-%COMP%]     .donut-chart2 {\r\nfilter: drop-shadow(0px 10px 11px rgba(187,187,187));\r\n}\r\n[_nghost-%COMP%]     .donut-chart1 {\r\n    margin-bottom: -25px;\r\n    margin-top: -17px;\r\n}\r\n[_nghost-%COMP%]     .donut-chart1 .ct-series-a .ct-slice-donut {\r\n    stroke: #ff7889;\r\n    stroke-width: 5.5px !important;\r\n}\r\n[_nghost-%COMP%]     .donut-chart1 .ct-series-b .ct-slice-donut {\r\n    stroke: #ffffff;\r\n    stroke-width: 5.5px !important;\r\n}\r\n[_nghost-%COMP%]     .donut-chart1 .ct-label {\r\n    fill: #ffffff;\r\n    color: rgba(0, 0, 0, 0.4);\r\n    font-size: 1.75rem;\r\n    line-height: 1;\r\n}\r\n[_nghost-%COMP%]     .donut-chart2 .ct-label {\r\n    fill: #ff4b62;\r\n    color: rgba(0, 0, 0, 0.4);\r\n    font-size: 1.75rem;\r\n    line-height: 1;\r\n}\r\n[_nghost-%COMP%]     .position-relative {\r\n    position: relative !important;\r\n    margin-left: 0px;\r\n\r\n}\r\n[_nghost-%COMP%]     .pt-1, .py-1[_ngcontent-%COMP%] {\r\n    padding-top: 0rem !important;\r\n}\r\n[_nghost-%COMP%]     .chartist .ct-label.ct-horizontal.ct-end {\r\n    \r\n    font-weight: 600;\r\n    color: #636161;\r\n    font-size: 12px;\r\n    font-family: sans-serif;\r\n}\r\n[_nghost-%COMP%]     .container > .ct-chart .ct-series.ct-series-c .ct-line {\r\n    stroke-width: 2px;\r\n    stroke-dasharray: 20px 180px;\r\n    stroke: #28d094;\r\n    -webkit-animation: draw 0.3s linear infinite;\r\n            animation: draw 0.3s linear infinite;\r\n}\r\n@-webkit-keyframes draw {\r\n    from {\r\n        stroke-dashoffset: 200\r\n    }\r\n\r\n    to {\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n@keyframes draw {\r\n    from {\r\n        stroke-dashoffset: 200\r\n    }\r\n\r\n    to {\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n[_nghost-%COMP%]     .ct-series-c .ct-point, .ct-series-c[_ngcontent-%COMP%]   .ct-line[_ngcontent-%COMP%], .ct-series-c[_ngcontent-%COMP%]   .ct-bar[_ngcontent-%COMP%], .ct-series-c[_ngcontent-%COMP%]   .ct-slice-donut[_ngcontent-%COMP%] {\r\n    stroke: #28d094;\r\n}\r\n[_nghost-%COMP%]     .ct-chart .ct-series.ct-series-c .ct-line {\r\n    stroke: #28d094;\r\n\r\n}\r\n[_nghost-%COMP%]     .ct-series-b .ct-point, .ct-series-b[_ngcontent-%COMP%]   .ct-line[_ngcontent-%COMP%], .ct-series-b[_ngcontent-%COMP%]   .ct-bar[_ngcontent-%COMP%], .ct-series-b[_ngcontent-%COMP%]   .ct-slice-donut[_ngcontent-%COMP%] {\r\n    stroke: #ff4961;\r\n}\r\n[_nghost-%COMP%]     .container > .ct-chart .ct-series.ct-series-a .ct-line {\r\n    stroke-dasharray: 5px;\r\n    -webkit-animation: dash 4s linear infinite;\r\n            animation: dash 4s linear infinite;\r\n\r\n}\r\n@-webkit-keyframes dash {\r\n    to {\r\n        stroke-dashoffset: 2000;\r\n    }\r\n}\r\n@keyframes dash {\r\n    to {\r\n        stroke-dashoffset: 2000;\r\n    }\r\n}\r\n[_nghost-%COMP%]     .ct-chart .ct-point {\r\n    stroke-width: 10px;\r\n    stroke-linecap: round;\r\n}\r\n[_nghost-%COMP%]     .container >  .ct-chart .ct-series.ct-series-b .ct-line {\r\n    stroke-width: 10px;\r\n    stroke-dasharray: 15px 5px;\r\n    -webkit-animation: draw 4s linear infinite;\r\n            animation: draw 4s linear infinite;\r\n}\r\n@keyframes draw {\r\n    from {\r\n        stroke-dashoffset: 100\r\n    }\r\n\r\n    to {\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n[_nghost-%COMP%]     .container {\r\n   max-width: 100% !important;\r\n}\r\n[_nghost-%COMP%]     .btn.gradient-blackberry.active, .gradient-blackberry[_ngcontent-%COMP%] {\r\n    background-color: #f05b4f;\r\n\r\n}\r\n[_nghost-%COMP%]     .Visit {\r\n\r\n    background-color: #28d094;\r\n\r\n}\r\n[_nghost-%COMP%]     .Sales {\r\n    \r\n    background-color: #d70206;\r\n\r\n}\r\n[_nghost-%COMP%]     .col-md-11 {\r\n    padding-right: 0 !important;\r\n}\r\n[_nghost-%COMP%]     .col-md-1 {\r\n    padding-left: 0 !important;\r\n}\r\n[_nghost-%COMP%]     .box-shadow-0 .ct-label.ct-vertical.ct-start {\r\n\r\n    font-weight: bold;\r\n    color: #6e6e6e;\r\n    font-size: 12px;\r\n}\r\n[_nghost-%COMP%]     .box-shadow-0 .ct-label.ct-horizontal.ct-end {\r\n\r\n    font-weight: bold;\r\n    color: #6e6e6e;\r\n    font-size: 12px;\r\n}\r\n[_nghost-%COMP%]     .text-truncate {\r\n  padding: 0.9rem 2rem;\r\n}\r\n.mr-2[_ngcontent-%COMP%] {\r\n  margin-left: 1rem !important;\r\n  margin-right: 0rem !important;\r\n}\r\n.mt-2[_ngcontent-%COMP%] {\r\n  margin-top : 1.5rem !important;\r\n}\r\n.ml-2[_ngcontent-%COMP%] {\r\n  margin-left : 2rem !important;\r\n}\r\n[_nghost-%COMP%]     .my-custom-cell {\r\n  padding-right: 6% !important;\r\n  padding-top: 1.5% !important;\r\n}\r\n[_nghost-%COMP%]     .border_bottom {\r\n  margin-bottom: 0rem !important;\r\n}\r\n[_nghost-%COMP%]     .border-top-0 {\r\n  padding: 1.25rem 2rem !important;\r\n}\r\n[_nghost-%COMP%]     .progress {\r\n  box-shadow: 0 10px 18px 0 rgba(62, 57, 107, .2);\r\n  margin-top: 1rem!important;\r\n}\r\n[_nghost-%COMP%]     .btn-danger {\r\n  color: #FFF !important;\r\n}\r\n[_nghost-%COMP%]     .users-list li + li {\r\n  margin-left: -10px !important;\r\n}\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n[_nghost-%COMP%]     .ps--active-x > .ps__rail-x {\r\n  display: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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Z0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUdBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY2hhcnRpc3QgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcclxuXHJcbiAgICBzdHJva2U6IHVybCgjZ3JhZGllbnQyKTtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgIC8qIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjBweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC41KSkgIWltcG9ydGFudDsgKi9cclxuICAgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmNoYXJ0aXN0IHtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggMTFweCByZ2JhKDI1MiwgMTk4LCAxOTgsIDAuOCkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2hhcnRpc3QgLmN0LWdyaWR7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XHJcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIHN0cm9rZS13aWR0aDogMC42cHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jaGFydGlzdCAuY3Qtc2VyaWVzLWIgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlOiAjYzhjMmMzO1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOHB4IDNweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jaGFydGlzdCAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNjM2MTYxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZWFybmluZ2NoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiByZ2JhKDI1NSwxMTcsMTM2LDEpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZWFybmluZ2NoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogM3B4O1xyXG4gICAgc3Ryb2tlOiAjRkY0OTYxO1xyXG4gICAgZmlsbDogI2ZmZmZmZjtcclxuICB9XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmVhcm5pbmdjaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlOiAjRkY0OTYxO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYXZhdGFyLXhzIHtcclxuICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzI4ZDA5NDtcclxuICAgIHN0cm9rZS13aWR0aDogNS41cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDIgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNmZjQ5NjE7XHJcbiAgICBzdHJva2Utd2lkdGg6IDUuNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDIge1xyXG4td2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDEwcHggMTFweCByZ2JhKDE4NywxODcsMTg3KSkgIWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDEwcHggMTFweCByZ2JhKDE4NywxODcsMTg3KSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MSAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI2ZmNzg4OTtcclxuICAgIHN0cm9rZS13aWR0aDogNS41cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDEgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNmZmZmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDUuNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQxIC5jdC1sYWJlbCB7XHJcbiAgICBmaWxsOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MiAuY3QtbGFiZWwge1xyXG4gICAgZmlsbDogI2ZmNGI2MjtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcblxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnB0LTEsXHJcbi5weS0xIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2hhcnRpc3QgLmN0LWxhYmVsLmN0LWhvcml6b250YWwuY3QtZW5kIHtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtYW5jaG9yOiBzdGFydDsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzYzNjE2MTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIgPiAuY3QtY2hhcnQgLmN0LXNlcmllcy5jdC1zZXJpZXMtYyAuY3QtbGluZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIwcHggMTgwcHg7XHJcbiAgICBzdHJva2U6ICMyOGQwOTQ7XHJcbiAgICBhbmltYXRpb246IGRyYXcgMC4zcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZHJhdyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMjAwXHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN0LXNlcmllcy1jIC5jdC1wb2ludCxcclxuLmN0LXNlcmllcy1jIC5jdC1saW5lLFxyXG4uY3Qtc2VyaWVzLWMgLmN0LWJhcixcclxuLmN0LXNlcmllcy1jIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyOGQwOTQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3QtY2hhcnQgLmN0LXNlcmllcy5jdC1zZXJpZXMtYyAuY3QtbGluZSB7XHJcbiAgICBzdHJva2U6ICMyOGQwOTQ7XHJcblxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN0LXNlcmllcy1iIC5jdC1wb2ludCxcclxuLmN0LXNlcmllcy1iIC5jdC1saW5lLFxyXG4uY3Qtc2VyaWVzLWIgLmN0LWJhcixcclxuLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNmZjQ5NjE7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY29udGFpbmVyID4gLmN0LWNoYXJ0IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBkYXNoIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGFzaCB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3QtY2hhcnQgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMTBweDtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIgPiAgLmN0LWNoYXJ0IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWIgLmN0LWxpbmUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTVweCA1cHg7XHJcbiAgICBhbmltYXRpb246IGRyYXcgNHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRyYXcge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMFxyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY29udGFpbmVyIHtcclxuICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4uZ3JhZGllbnQtYmxhY2tiZXJyeS5hY3RpdmUsXHJcbi5ncmFkaWVudC1ibGFja2JlcnJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDViNGY7XHJcblxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLlZpc2l0IHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkMDk0O1xyXG5cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5TYWxlcyB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzg0M2NmNywjMzhiOGYyKSFpbXBvcnRhbnQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDcwMjA2O1xyXG5cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jb2wtbWQtMTEge1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNvbC1tZC0xIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJveC1zaGFkb3ctMCAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnQge1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYm94LXNoYWRvdy0wIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LWVuZCB7XHJcblxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzZlNmU2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGV4dC10cnVuY2F0ZSB7XHJcbiAgcGFkZGluZzogMC45cmVtIDJyZW07XHJcbn1cclxuXHJcbi5tci0yIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMiB7XHJcbiAgbWFyZ2luLXRvcCA6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWwtMiB7XHJcbiAgbWFyZ2luLWxlZnQgOiAycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubXktY3VzdG9tLWNlbGwge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDYlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDEuNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ib3JkZXJfYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYm9yZGVyLXRvcC0wIHtcclxuICBwYWRkaW5nOiAxLjI1cmVtIDJyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wcm9ncmVzcyB7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE4cHggMCByZ2JhKDYyLCA1NywgMTA3LCAuMik7XHJcbiAgbWFyZ2luLXRvcDogMXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYnRuLWRhbmdlciB7XHJcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC51c2Vycy1saXN0IGxpICsgbGkge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wcy0tYWN0aXZlLXggPiAucHNfX3JhaWwteCB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])('revenue'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SalesComponent.prototype, "blockUIRevenue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])('hitrate'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SalesComponent.prototype, "blockUIHitRate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])('email'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SalesComponent.prototype, "blockUIEmail", void 0);
    return SalesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sales',
                templateUrl: './sales.component.html',
                styleUrls: ['./sales.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_chart_api__WEBPACK_IMPORTED_MODULE_6__["ChartApiService"] }]; }, { blockUIRevenue: [], blockUIHitRate: [], blockUIEmail: [], componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "An5s":
/*!*******************************************************!*\
  !*** ./src/app/content/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce/ecommerce.component */ "hzKO");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-chartist */ "4QQT");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../partials/general/card/card.module */ "vj4e");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sales/sales.component */ "3p/8");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../partials/general/match-height/match-height.module */ "jT46");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_pipe_filter_pipe_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/_pipe/filter-pipe.module */ "YDLe");



















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistModule"],
                src_app_pipe_filter_pipe_module__WEBPACK_IMPORTED_MODULE_15__["FilterPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
                _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_13__["MatchHeightModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_11__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_12__["BlockTemplateComponent"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'ecommerce',
                        component: _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"]
                    },
                    {
                        path: 'sales',
                        component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"]
                    },
                ])
            ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"], _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistModule"],
        src_app_pipe_filter_pipe_module__WEBPACK_IMPORTED_MODULE_15__["FilterPipeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
        _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
        _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_13__["MatchHeightModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_11__["BlockUIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistModule"],
                    src_app_pipe_filter_pipe_module__WEBPACK_IMPORTED_MODULE_15__["FilterPipeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
                    _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
                    _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_13__["MatchHeightModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_11__["BlockUIModule"].forRoot({
                        template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_12__["BlockTemplateComponent"]
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'ecommerce',
                            component: _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"]
                        },
                        {
                            path: 'sales',
                            component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"]
                        },
                    ])
                ],
                declarations: [_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"], _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "BCt1":
/*!*****************************************!*\
  !*** ./src/app/_pipe/transform.pipe.ts ***!
  \*****************************************/
/*! exports provided: TransformPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformPipe", function() { return TransformPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var TransformPipe = /** @class */ (function () {
    function TransformPipe() {
    }
    TransformPipe.prototype.transform = function (value) {
        if (!value)
            return "";
        else
            return value.toString().replace(/,/g, '.');
    };
    TransformPipe.ɵfac = function TransformPipe_Factory(t) { return new (t || TransformPipe)(); };
    TransformPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "transform", type: TransformPipe, pure: true });
    return TransformPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'transform'
            }]
    }], null, null); })();


/***/ }),

/***/ "Fdpk":
/*!*******************************************!*\
  !*** ./src/app/_pipe/filter-date.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDatePipe", function() { return FilterDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var FilterDatePipe = /** @class */ (function () {
    function FilterDatePipe() {
    }
    FilterDatePipe.prototype.transform = function (row, f1, f2) {
        if (row == null) {
            return;
        }
        f1.toString().length == 0 ? f1 = new Date() : f1;
        f2 == null ? f2 = new Date() : f2;
        if (f1 >= f2 || f1 == null) {
            return row;
        }
        return row.filter(function (x) {
            return new Date(x.date.toDate()) >= new Date(f1) && new Date(x.date.toDate()) <= new Date(f2);
        });
    };
    FilterDatePipe.ɵfac = function FilterDatePipe_Factory(t) { return new (t || FilterDatePipe)(); };
    FilterDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterDate", type: FilterDatePipe, pure: true });
    return FilterDatePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterDate'
            }]
    }], null, null); })();


/***/ }),

/***/ "YDLe":
/*!*********************************************!*\
  !*** ./src/app/_pipe/filter-pipe.module.ts ***!
  \*********************************************/
/*! exports provided: FilterPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipeModule", function() { return FilterPipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _filter_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-date.pipe */ "Fdpk");
/* harmony import */ var _transform_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.pipe */ "BCt1");





var FilterPipeModule = /** @class */ (function () {
    function FilterPipeModule() {
    }
    FilterPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FilterPipeModule });
    FilterPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FilterPipeModule_Factory(t) { return new (t || FilterPipeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return FilterPipeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilterPipeModule, { declarations: [_filter_date_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterDatePipe"], _transform_pipe__WEBPACK_IMPORTED_MODULE_3__["TransformPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_filter_date_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterDatePipe"], _transform_pipe__WEBPACK_IMPORTED_MODULE_3__["TransformPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_filter_date_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterDatePipe"], _transform_pipe__WEBPACK_IMPORTED_MODULE_3__["TransformPipe"]],
                exports: [_filter_date_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterDatePipe"], _transform_pipe__WEBPACK_IMPORTED_MODULE_3__["TransformPipe"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hzKO":
/*!********************************************************************!*\
  !*** ./src/app/content/dashboard/ecommerce/ecommerce.component.ts ***!
  \********************************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _api_workers_workers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../_api/workers/workers.service */ "+nQj");
/* harmony import */ var _api_sale_sale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../_api/sale/sale.service */ "b3t4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var chartist_plugin_tooltips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartist-plugin-tooltips */ "sJBm");
/* harmony import */ var chartist_plugin_tooltips__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartist_plugin_tooltips__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_services/chart.api */ "5YoL");
/* harmony import */ var _services_table_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../_services/table-api.service */ "adm4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-chartist */ "4QQT");
/* harmony import */ var _pipe_transform_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../_pipe/transform.pipe */ "BCt1");























function EcommerceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EcommerceComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "transform");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Productos vendidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ngb-progressbar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, ctx_r1.cantSales)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.cantSales);
} }
function EcommerceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "transform");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Ventas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ngb-progressbar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, ctx_r2.sumSales)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.sumSales);
} }
function EcommerceComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "transform");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ngb-progressbar", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, ctx_r3.cantWorkers)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r3.cantWorkers);
} }
function EcommerceComponent_ng_template_29_x_chartist_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 41);
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r7.lineAreaDay.data)("type", ctx_r7.lineAreaDay.type)("options", ctx_r7.lineAreaDay.options)("responsiveOptions", ctx_r7.lineAreaDay.responsiveOptions)("events", ctx_r7.lineAreaDay.events);
} }
function EcommerceComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EcommerceComponent_ng_template_29_x_chartist_1_Template, 1, 5, "x-chartist", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.lineAreaDay);
} }
function EcommerceComponent_ng_template_31_x_chartist_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 41);
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r8.lineAreaWeek.data)("type", ctx_r8.lineAreaWeek.type)("options", ctx_r8.lineAreaWeek.options)("responsiveOptions", ctx_r8.lineAreaWeek.responsiveOptions)("events", ctx_r8.lineAreaWeek.events);
} }
function EcommerceComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EcommerceComponent_ng_template_31_x_chartist_1_Template, 1, 5, "x-chartist", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.lineAreaWeek);
} }
function EcommerceComponent_ng_template_33_x_chartist_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 41);
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r9.lineAreaMonth.data)("type", ctx_r9.lineAreaMonth.type)("options", ctx_r9.lineAreaMonth.options)("responsiveOptions", ctx_r9.lineAreaMonth.responsiveOptions)("events", ctx_r9.lineAreaMonth.events);
} }
function EcommerceComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EcommerceComponent_ng_template_33_x_chartist_1_Template, 1, 5, "x-chartist", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.lineAreaMonth);
} }
var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent(chartApiservice, tableApiservice, route, workersService, saleService) {
        this.chartApiservice = chartApiservice;
        this.tableApiservice = tableApiservice;
        this.route = route;
        this.workersService = workersService;
        this.saleService = saleService;
        this.config = { wheelPropagation: true };
        this.loading = false;
        this.currentJustify = 'end';
        this.loadingIndicator = true;
        this.options = {
            close: false,
            expand: false,
            minimize: false,
            reload: true
        };
        this.Daygraph = true;
        this.Weekgraph = false;
        this.Monthgraph = false;
        this.getUserLogged();
        this.getDataCards();
    }
    EcommerceComponent.prototype.getTabledata = function () {
        this.rows = this.datatableData.rows;
    };
    EcommerceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartApiservice.getEcommerceData().subscribe(function (Response) {
            _this.ChartistData = Response;
            _this.getlineArea();
        });
        this.tableApiservice.getEcommerceTableData().subscribe(function (Response) {
            _this.datatableData = Response;
            _this.getTabledata();
        });
    };
    EcommerceComponent.prototype.reloadNewOrders = function () {
        var _this = this;
        this.blockUINewOrders.start('Loading..');
        setTimeout(function () {
            _this.blockUINewOrders.stop();
        }, 2500);
    };
    EcommerceComponent.prototype.rotueInvoice = function () {
        this.route.navigate(['/invoice/invoice-summary']);
    };
    EcommerceComponent.prototype.reLoad = function () {
        this.route.navigate(['/sale']);
    };
    EcommerceComponent.prototype.getDataCards = function () {
        this.getInfoEmployees();
        this.getInfoSales();
    };
    EcommerceComponent.prototype.getInfoSales = function () {
        var _this = this;
        this.blockUISellCard.start('Loading..');
        this.saleService.getFullInfoSaleNotCancelled(this.currentUser.uid).subscribe(function (sale) {
            var sum = 0;
            sale.forEach(function (element) {
                sum += element.totalPrice;
            });
            _this.cantSales = sale.length;
            _this.sumSales = sum;
            _this.blockUISellCard.stop();
        });
    };
    EcommerceComponent.prototype.getInfoEmployees = function () {
        var _this = this;
        this.blockUIUserCard.start('Loading..');
        this.workersService.getFullInfoEmployees(this.currentUser.uid).subscribe(function (workers) {
            var sizework = workers.length;
            _this.cantWorkers = sizework;
            _this.blockUIUserCard.stop();
        });
    };
    EcommerceComponent.prototype.getUserLogged = function () {
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    EcommerceComponent.prototype.getlineArea = function () {
        var ChartData = this.ChartistData;
        this.lineAreaDay = {
            type: 'Line',
            data: ChartData['lineArea'],
            options: {
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_4__["Interpolation"].simple({
                    divisor: 1.8
                }),
                fullwidth: true,
                height: '320px',
                low: 0,
                showArea: true,
                fullWidth: true,
                showPoint: false,
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    offset: 16,
                    scaleMinSpace: 40,
                    labelInterpolationFnc: function (value) {
                        return value + 'K';
                    },
                },
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 200px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
                        x1: 1,
                        y1: 1,
                        x2: 1,
                        y2: 1
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(22, 141, 238, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(98, 188, 270, 11)'
                    });
                },
            },
        };
        this.lineAreaWeek = {
            type: 'Line',
            data: ChartData['lineAreaWeek'],
            options: {
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_4__["Interpolation"].simple({
                    divisor: 2
                }),
                fullwidth: true,
                height: '320px',
                low: 0,
                showArea: true,
                fullWidth: true,
                showPoint: false,
                chartPadding: {
                    top: 33,
                },
                axisX: {
                    showGrid: false
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 40,
                    labelInterpolationFnc: function (value) {
                        return value + 'K';
                    },
                    offset: 20,
                },
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 200px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(22, 141, 238, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(98, 188, 246, 1)'
                    });
                },
            },
        };
        this.lineAreaMonth = {
            type: 'Line',
            data: ChartData['lineAreaMonth'],
            options: {
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_4__["Interpolation"].simple({
                    divisor: 2
                }),
                // low: 650,
                fullwidth: true,
                height: '320px',
                low: 0,
                chartPadding: {
                    top: 30,
                    left: 0,
                    right: 25
                },
                showArea: true,
                fullWidth: true,
                showPoint: false,
                axisX: {
                    showGrid: false
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 60,
                    labelInterpolationFnc: function (value) {
                        return value + 'K';
                    },
                }
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 200px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(22, 141, 238, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(98, 188, 246, 1)'
                    });
                },
            },
        };
        this.ecommercesaleslineArea = {
            type: 'Line',
            data: ChartData['lineArea2'],
            options: {
                height: '300px',
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisX: {
                    showGrid: false
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 40,
                    showGrid: false
                },
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_4__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Doughnut
        this.donutChart = {
            type: 'Pie',
            data: ChartData.donutDashboard,
            options: {
                width: '100%',
                height: '290px',
                donut: true,
                startAngle: 0,
                low: 0,
                high: 8,
                fullWidth: true,
                plugins: [
                    chartist__WEBPACK_IMPORTED_MODULE_4__["plugins"].tooltip({
                        appendToBody: false,
                        class: 'donut_tooltip',
                    })
                ],
                labelInterpolationFnc: function (value) {
                    var total = ChartData.donutDashboard.series.reduce(function (prev, series) {
                        return prev + series.value;
                    }, 0);
                    return total + '%';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        ///////////////////// End doughnutchart////////////////
        ///////////////////// Start barchart////////////////
        this.barChart = {
            type: 'Bar',
            data: ChartData['Bar'],
            options: {
                fullwidth: true,
                height: '380px',
                seriesBarDistance: 21,
                chartPadding: {
                    top: 0,
                },
                plugins: [
                    chartist__WEBPACK_IMPORTED_MODULE_4__["plugins"].tooltip({
                        appendToBody: false,
                        class: 'bar_tooltip',
                    })
                ],
                axisX: {
                    showLable: true,
                    showGrid: false,
                    offset: 60,
                    labelInterpolationFnc: function (value) {
                        return value.slice(0, 3);
                    }
                },
                axisY: {
                    scaleMinSpace: 40,
                }
            },
        };
    };
    EcommerceComponent.ɵfac = function EcommerceComponent_Factory(t) { return new (t || EcommerceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_9__["ChartApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_table_api_service__WEBPACK_IMPORTED_MODULE_10__["TableApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_workers_workers_service__WEBPACK_IMPORTED_MODULE_1__["WorkersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_sale_sale_service__WEBPACK_IMPORTED_MODULE_2__["SaleService"])); };
    EcommerceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EcommerceComponent, selectors: [["app-ecommerce"]], viewQuery: function EcommerceComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, decls: 35, vars: 8, consts: [[1, "app-content", "content"], ["class", "loader-wrapper", 4, "ngIf"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "row"], [1, "col-xl-4", "col-lg-6", "col-12"], ["class", "card pull-up", 4, "blockUI", "blockUIMessage"], [1, "col-xl-12", "col-12"], [1, "card", "card-shadow"], [1, "card-header", "card-header-transparent", "py-20"], [1, "btn-group", "dropdown"], ["ngbDropdown", "", 1, "d-inline-block", 3, "routerLink"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn_dropdown", "btn_set_padding", "btn-dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], ["type", "pills", 3, "justify"], ["title", "D\u00EDa"], ["ngbTabContent", ""], ["title", "Semana"], ["title", "Mes"], [1, "loader-wrapper"], [1, "loader-container"], [1, "ball-rotate", "loader-danger"], [1, "card", "pull-up"], [1, "card-content"], [1, "card-body", "card_padding"], [1, "media", "d-flex"], [1, "media-body", "text-left"], [1, "info"], [1, "icon-basket-loaded", "info", "font-large-2", "float-right"], [1, "mb-0", "mt-1"], ["height", "7px", "width", "100%", "type", "gradient-x-info", 3, "value"], [1, "warning"], [1, "icon-pie-chart", "warning", "font-large-2", "float-right"], ["height", "7px", "width", "100%", "type", "gradient-x-warning", 3, "value"], [1, "success"], [1, "icon-user-follow", "success", "font-large-2", "float-right"], ["height", "7px", "width", "100%", "type", "gradient-x-success", 3, "value"], [1, "areaChartLegend", "scoreLineShadow"], [3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [3, "data", "type", "options", "responsiveOptions", "events"]], template: function EcommerceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EcommerceComponent_div_1_Template, 4, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EcommerceComponent_div_7_Template, 15, 6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EcommerceComponent_div_9_Template, 15, 6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EcommerceComponent_div_11_Template, 15, 6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Venta de productos ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Ventas");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Ventas totales");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Ganancia");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ngb-tabset", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ngb-tab", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, EcommerceComponent_ng_template_29_Template, 2, 1, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ngb-tab", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EcommerceComponent_ng_template_31_Template, 2, 1, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ngb-tab", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, EcommerceComponent_ng_template_33_Template, 2, 1, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "sellCard")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "sellCard")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "userCard")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("justify", ctx.currentJustify);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbProgressbar"], ng_chartist__WEBPACK_IMPORTED_MODULE_14__["ChartistComponent"]], pipes: [_pipe_transform_pipe__WEBPACK_IMPORTED_MODULE_15__["TransformPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]], styles: [".avatar-xs[_ngcontent-%COMP%] {\r\n  width: 24px !important;\r\n  margin-right: 5px !important;\r\n}\r\n\r\n.btn_set_padding[_ngcontent-%COMP%] {\r\n  padding: 0% !important;\r\n}\r\n\r\n.chart_body_padding[_ngcontent-%COMP%] {\r\n  padding: 2rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .scoreLineShadow {\r\n  filter: drop-shadow(0px 20px 11px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-a .ct-point-circle {\r\n  stroke-width: 5px;\r\n  stroke: #ffffff;\r\n  fill: #1e9ff2;\r\n}\r\n\r\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-b .ct-point-circle {\r\n  stroke-width: 5px;\r\n  stroke: #ffffff;\r\n  fill: #58e0cd;\r\n  ;\r\n}\r\n\r\n[_nghost-%COMP%]     .media {\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n\r\n[_nghost-%COMP%]     .position-relative {\r\n  position: relative !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ct-series-b .ct-bar, .ct-series-b[_ngcontent-%COMP%]   .ct-slice-donut[_ngcontent-%COMP%] {\r\n  stroke: #beb6b6;\r\n}\r\n\r\n[_nghost-%COMP%]     .progress:last-child {\r\n  width: 100% !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .areaChartLegend .ct-series-a .ct-line {\r\n  stroke: url(#gradient2);\r\n  stroke-width: 5px;\r\n  stroke-linecap: round;\r\n}\r\n\r\n[_nghost-%COMP%]     .areaChartLegend .ct-series-a .ct-area {\r\n  fill: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .areaChartLegend .ct-series-a .ct-line {\r\n  stroke: #3da2ea;\r\n}\r\n\r\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-a .ct-area {\r\n  fill: #4105f9f5;\r\n}\r\n\r\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-b .ct-area {\r\n  fill: #03f7b2fa;\r\n}\r\n\r\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-b .ct-line {\r\n  stroke: #58e0cd;\r\n}\r\n\r\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-a .ct-line {\r\n  stroke: #1e9ff2;\r\n}\r\n\r\n[_nghost-%COMP%]     .barchart .ct-series-a .ct-bar {\r\n  stroke: #ff394f !important;\r\n  stroke-width: 7px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .pull-up {\r\n  transition: all 0.25s ease;\r\n}\r\n\r\n[_nghost-%COMP%]     .chart-info {\r\n  margin-top: 73px !important;\r\n}\r\n\r\n.mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\r\n  margin-bottom: -4rem !important;\r\n}\r\n\r\n.mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\r\n  margin-bottom: -4.5rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .donut .ct-done .ct-slice-donut {\r\n  stroke: #28d094;\r\n  stroke-width: 24px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .donut .ct-progress .ct-slice-donut {\r\n  stroke: #ff4558;\r\n  stroke-width: 16px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .donut .ct-outstanding .ct-slice-donut {\r\n  stroke: #ff7d4d;\r\n  stroke-width: 8px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .donut .ct-started .ct-slice-donut {\r\n  stroke: #666ECC;\r\n  stroke-width: 32px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .donut .ct-label {\r\n  text-anchor: middle;\r\n  font-size: 20px;\r\n  fill: #868e96;\r\n}\r\n\r\n[_nghost-%COMP%]     .Barchart {\r\n  display: block;\r\n  margin-left: -100px;\r\n  margin-bottom: -60px;\r\n  margin-top: -45px;\r\n}\r\n\r\n[_nghost-%COMP%]     .Barchart .ct-label {\r\n  font-size: 0.75rem;\r\n  line-height: 15;\r\n}\r\n\r\n.p[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: -1.5rem;\r\n  font-size: large;\r\n  color: #6c757d !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .text-center .p {\r\n  margin-top: 2rem;\r\n  margin-bottom: -1.2rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .height-300 {\r\n  height: 250px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .gradient-blackberry {\r\n  background-image: linear-gradient(45deg, #b9e2fa, #b9e2fa) !important;\r\n  margin-left: 48px;\r\n}\r\n\r\n[_nghost-%COMP%]     .gradient-mint {\r\n  background-image: linear-gradient(45deg, #ff9ba6, #ff9ba6);\r\n  margin-left: 48px;\r\n}\r\n\r\n[_nghost-%COMP%]     .gradient-info {\r\n  background-image: linear-gradient(45deg, #6ef9d6, #6ef9d6);\r\n  margin-left: 48px;\r\n}\r\n\r\n[_nghost-%COMP%]     .extraPadding7 {\r\n  padding: 0.7rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .avatar-md {\r\n  width: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .square {\r\n  border-radius: 0% !important;\r\n  height: auto;\r\n  border: 2px solid #FFF !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ps--active-x>.ps__rail-x {\r\n  display: none !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .border-top-0 {\r\n  padding: 1.25rem 2rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .btn-danger {\r\n  color: white !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .progress:last-child {\r\n  margin-bottom: 0rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .btn.active {\r\n  outline: none;\r\n  box-shadow: none !important;\r\n  background-color: #2196F3 !important;\r\n  color: white !important;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  cursor: pointer !important;\r\n}\r\n\r\n.btn_dropdown[_ngcontent-%COMP%] {\r\n  background-color: white !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .text_color {\r\n  color: #0c84d1;\r\n}\r\n\r\n[_nghost-%COMP%]     .progress {\r\n  box-shadow: 6px 6px 14px -1px rgba(62, 57, 107, .2);\r\n  margin-top: 1rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .btn-group {\r\n  position: absolute !important;\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n  .btn-group[_ngcontent-%COMP%] {\r\n    position: relative !important;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]     .text-muted {\r\n  color: #6b6f82 !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .mb-3, .my-3[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .media {\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n\r\n[_nghost-%COMP%]     .height-350 {\r\n  height: 250px !important;\r\n  margin-left: 18%;\r\n  margin-bottom: 55px;\r\n}\r\n\r\n[_nghost-%COMP%]     .card-text:last-child {\r\n  margin-bottom: 0;\r\n  height: 430px;\r\n}\r\n\r\n[_nghost-%COMP%]     .mb-3 {\r\n  margin-bottom: 1.1rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .chart-info .p {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  margin-left: 4px;\r\n}\r\n\r\n[_nghost-%COMP%]     .order-tbl_change th, .order-tbl_change[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding-right: 0.8rem;\r\n}\r\n\r\n[_nghost-%COMP%]     svg.ct-chart-bar {\r\n  width: 100% !important;\r\n  padding-top: 5%;\r\n}\r\n\r\n[_nghost-%COMP%]     #donut-dashboard-chart {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n[_nghost-%COMP%]     .pr_stats {\r\n  text-align: center\r\n}\r\n\r\n[_nghost-%COMP%]     .height-300 {\r\n  width: 100%;\r\n}\r\n\r\n[_nghost-%COMP%]     .alert_basics_charrt {\r\n  padding: 0;\r\n}\r\n\r\n[_nghost-%COMP%]     .card-header .heading-elements a.btn {\r\n  color: white !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .row_padding {\r\n  padding: 1.25rem 2rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .border_bottom {\r\n  margin-bottom: 0rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .top_space {\r\n  padding-top: 5% !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .border_top {\r\n  border-top: none !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .card-footer {\r\n  padding: 2rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ct-chart-bar .ct-label.ct-horizontal.ct-end {\r\n  text-anchor: middle;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n[_nghost-%COMP%]     .ct-chart-bar .ct-label.ct-vertical.ct-start {\r\n  text-anchor: middle;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .chartist-tooltip.bar_tooltip {\r\n  border-radius: 10px;\r\n  padding: 18px;\r\n  color: rgb(29, 28, 28);\r\n  height: 60px;\r\n  width: 80px;\r\n  background: rgba(255, 255, 255, 0.9);\r\n  border: solid 2px rgba(230, 230, 230, 0.9);\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  text-align: center;\r\n}\r\n\r\n[_nghost-%COMP%]     .chartist-tooltip.donut_tooltip {\r\n  border-radius: 10px;\r\n  padding: 2px;\r\n  color: rgb(29, 28, 28);\r\n  height: 60px;\r\n  width: 90px;\r\n  background: rgba(255, 255, 255, 0.9);\r\n  border: solid 2px rgba(230, 230, 230, 0.9);\r\n  font-family: sans-serif;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  top: 16.906px;\r\n}\r\n\r\n[_nghost-%COMP%]     .chartist-tooltip.tooltip-show {\r\n  opacity: 0.6 !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .chartist-tooltip.bar_tooltip:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: -15px;\r\n  border: 15px solid transparent;\r\n  border-top-color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n[_nghost-%COMP%]     .chartist-tooltip.donut_tooltip:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: -15px;\r\n  border: 15px solid transparent;\r\n  border-top-color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n\r\n\r\n.loader-white[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #fff !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #fff !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #fff transparent #fff transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #fff transparent #fff !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-white.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.loader-white.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #fff !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #fff !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #fff !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-white.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #fff !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-white.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #fff 30%, #fff 100%);\r\n}\r\n\r\n.loader-white.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-white.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.loader-white.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-white.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.loader-black[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #000 !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #000 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #000 !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #000 transparent #000 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #000 transparent #000 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-black.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #000 !important;\r\n}\r\n\r\n.loader-black.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #000 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #000 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #000 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-black.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #000 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-black.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #000 30%, #000 100%);\r\n}\r\n\r\n.loader-black.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-black.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #000 !important;\r\n}\r\n\r\n.loader-black.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-black.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #000 !important;\r\n}\r\n\r\n.loader-primary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #666ee8 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #666ee8 transparent #666ee8 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #666ee8 transparent #666ee8 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-primary.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #666ee8 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #666ee8 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #666ee8 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #666ee8 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #666ee8 30%, #666ee8 100%);\r\n}\r\n\r\n.loader-primary.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-success[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #28d094 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #28d094 transparent #28d094 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #28d094 transparent #28d094 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-success.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #28d094 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #28d094 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #28d094 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-success.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #28d094 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-success.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #28d094 30%, #28d094 100%);\r\n}\r\n\r\n.loader-success.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-success.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-success.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #28d094 !important;\r\n}\r\n\r\n.loader-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #1e9ff2 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #1e9ff2 transparent #1e9ff2 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #1e9ff2 transparent #1e9ff2 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-info.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #1e9ff2 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #1e9ff2 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #1e9ff2 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-info.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #1e9ff2 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-info.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #1e9ff2 30%, #1e9ff2 100%);\r\n}\r\n\r\n.loader-info.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-info.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-info.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-warning[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ff9149 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #ff9149 transparent #ff9149 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #ff9149 transparent #ff9149 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-warning.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ff9149 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ff9149 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ff9149 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #ff9149 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #ff9149 30%, #ff9149 100%);\r\n}\r\n\r\n.loader-warning.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-danger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ff4961 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #ff4961 transparent #ff4961 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #ff4961 transparent #ff4961 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-danger.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ff4961 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ff4961 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ff4961 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #ff4961 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #ff4961 30%, #ff4961 100%);\r\n}\r\n\r\n.loader-danger.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-red[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #f44336 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #f44336 transparent #f44336 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #f44336 transparent #f44336 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-red.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #f44336 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #f44336 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #f44336 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-red.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #f44336 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-red.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #f44336 30%, #f44336 100%);\r\n}\r\n\r\n.loader-red.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-red.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-red.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #f44336 !important;\r\n}\r\n\r\n.loader-pink[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #e91e63 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #e91e63 transparent #e91e63 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #e91e63 transparent #e91e63 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-pink.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #e91e63 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #e91e63 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #e91e63 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #e91e63 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #e91e63 30%, #e91e63 100%);\r\n}\r\n\r\n.loader-pink.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-purple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #9c27b0 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #9c27b0 transparent #9c27b0 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #9c27b0 transparent #9c27b0 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-purple.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #9c27b0 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #9c27b0 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #9c27b0 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #9c27b0 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #9c27b0 30%, #9c27b0 100%);\r\n}\r\n\r\n.loader-purple.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-blue[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #2196f3 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #2196f3 transparent #2196f3 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #2196f3 transparent #2196f3 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #2196f3 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #2196f3 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #2196f3 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #2196f3 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #2196f3 30%, #2196f3 100%);\r\n}\r\n\r\n.loader-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-cyan[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #00bcd4 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #00bcd4 transparent #00bcd4 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #00bcd4 transparent #00bcd4 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-cyan.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #00bcd4 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #00bcd4 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #00bcd4 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #00bcd4 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #00bcd4 30%, #00bcd4 100%);\r\n}\r\n\r\n.loader-cyan.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-teal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #009688 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #009688 transparent #009688 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #009688 transparent #009688 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-teal.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #009688 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #009688 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #009688 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #009688 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #009688 30%, #009688 100%);\r\n}\r\n\r\n.loader-teal.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #009688 !important;\r\n}\r\n\r\n.loader-yellow[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ffeb3b !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #ffeb3b transparent #ffeb3b transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #ffeb3b transparent #ffeb3b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-yellow.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ffeb3b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ffeb3b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ffeb3b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #ffeb3b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #ffeb3b 30%, #ffeb3b 100%);\r\n}\r\n\r\n.loader-yellow.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-amber[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ffc107 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #ffc107 transparent #ffc107 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #ffc107 transparent #ffc107 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-amber.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ffc107 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ffc107 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #ffc107 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #ffc107 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #ffc107 30%, #ffc107 100%);\r\n}\r\n\r\n.loader-amber.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-blue-grey[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #607d8b !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #607d8b transparent #607d8b transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #607d8b transparent #607d8b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-blue-grey.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #607d8b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #607d8b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #607d8b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #607d8b !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #607d8b 30%, #607d8b 100%);\r\n}\r\n\r\n.loader-blue-grey.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #607d8b !important;\r\n}\r\n\r\n.loader-grey-blue[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #1b2942 !important;\r\n  border-bottom-color: transparent !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n  background: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n  border-color: #1b2942 transparent #1b2942 transparent !important;\r\n  background: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: transparent #1b2942 transparent #1b2942 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-grey-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #1b2942 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #1b2942 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-color: #1b2942 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  border-bottom-color: #1b2942 !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n  background-image: linear-gradient(transparent 0%, transparent 70%, #1b2942 30%, #1b2942 100%);\r\n}\r\n\r\n.loader-grey-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n  background-color: #1b2942 !important;\r\n}\r\n\r\n.mb-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem !important;\r\n  margin-left: 0.3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVjb21tZXJjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUVFLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhOztBQUVmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFD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QUNFLHVDQUF1QztFQUN2Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFNeEMsNkZBQTZGO0FBQy9GOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJlY29tbWVyY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIteHMge1xyXG4gIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bl9zZXRfcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoYXJ0X2JvZHlfcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnNjb3JlTGluZVNoYWRvdyB7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjUpKSAhaW1wb3J0YW50O1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggMTFweCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmVjb21tZXJjZXNhbGVzbGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gIHN0cm9rZS13aWR0aDogNXB4O1xyXG4gIHN0cm9rZTogI2ZmZmZmZjtcclxuICBmaWxsOiAjMWU5ZmYyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmVjb21tZXJjZXNhbGVzbGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gIHN0cm9rZS13aWR0aDogNXB4O1xyXG4gIHN0cm9rZTogI2ZmZmZmZjtcclxuICBmaWxsOiAjNThlMGNkO1xyXG4gIDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3Qtc2VyaWVzLWIgLmN0LWJhciwgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dCB7XHJcbiAgc3Ryb2tlOiAjYmViNmI2O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnByb2dyZXNzOmxhc3QtY2hpbGQge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYXJlYUNoYXJ0TGVnZW5kIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XHJcbiAgc3Ryb2tlOiB1cmwoI2dyYWRpZW50Mik7XHJcbiAgc3Ryb2tlLXdpZHRoOiA1cHg7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFyZWFDaGFydExlZ2VuZCAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gIGZpbGw6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYXJlYUNoYXJ0TGVnZW5kIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XHJcbiAgc3Ryb2tlOiAjM2RhMmVhO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmVjb21tZXJjZXNhbGVzbGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICBmaWxsOiAjNDEwNWY5ZjU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZWNvbW1lcmNlc2FsZXNsaW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gIGZpbGw6ICMwM2Y3YjJmYTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5lY29tbWVyY2VzYWxlc2xpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtbGluZSB7XHJcbiAgc3Ryb2tlOiAjNThlMGNkO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmVjb21tZXJjZXNhbGVzbGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcclxuICBzdHJva2U6ICMxZTlmZjI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmFyY2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXIge1xyXG4gIHN0cm9rZTogI2ZmMzk0ZiAhaW1wb3J0YW50O1xyXG4gIHN0cm9rZS13aWR0aDogN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucHVsbC11cCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNoYXJ0LWluZm8ge1xyXG4gIG1hcmdpbi10b3A6IDczcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1iLTMsIC5teS0zIHtcclxuICBtYXJnaW4tYm90dG9tOiAtNHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWItMiwgLm15LTIge1xyXG4gIG1hcmdpbi1ib3R0b206IC00LjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dCAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gIHN0cm9rZTogIzI4ZDA5NDtcclxuICBzdHJva2Utd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0IHtcclxuICBzdHJva2U6ICNmZjQ1NTg7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgc3Ryb2tlOiAjZmY3ZDRkO1xyXG4gIHN0cm9rZS13aWR0aDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZG9udXQgLmN0LXN0YXJ0ZWQgLmN0LXNsaWNlLWRvbnV0IHtcclxuICBzdHJva2U6ICM2NjZFQ0M7XHJcbiAgc3Ryb2tlLXdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZG9udXQgLmN0LWxhYmVsIHtcclxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmaWxsOiAjODY4ZTk2O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLkJhcmNoYXJ0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC02MHB4O1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLkJhcmNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTtcclxufVxyXG5cclxuLnAge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudGV4dC1jZW50ZXIgLnAge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEuMnJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5oZWlnaHQtMzAwIHtcclxuICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZ3JhZGllbnQtYmxhY2tiZXJyeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYjllMmZhLCAjYjllMmZhKSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmdyYWRpZW50LW1pbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmOWJhNiwgI2ZmOWJhNik7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ4cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZ3JhZGllbnQtaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNmVmOWQ2LCAjNmVmOWQ2KTtcclxuICBtYXJnaW4tbGVmdDogNDhweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5leHRyYVBhZGRpbmc3IHtcclxuICBwYWRkaW5nOiAwLjdyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYXZhdGFyLW1kIHtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zcXVhcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wcy0tYWN0aXZlLXg+LnBzX19yYWlsLXgge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ib3JkZXItdG9wLTAge1xyXG4gIHBhZGRpbmc6IDEuMjVyZW0gMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1kYW5nZXIge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnByb2dyZXNzOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYnRuLmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bl9kcm9wZG93biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0X2NvbG9yIHtcclxuICBjb2xvcjogIzBjODRkMTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wcm9ncmVzcyB7XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxNHB4IC0xcHggcmdiYSg2MiwgNTcsIDEwNywgLjIpO1xyXG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4tZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAuYnRuLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LW11dGVkIHtcclxuICBjb2xvcjogIzZiNmY4MiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1iLTMsIC5teS0zIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5oZWlnaHQtMzUwIHtcclxuICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4JTtcclxuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQtdGV4dDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWItMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2hhcnQtaW5mbyAucCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAub3JkZXItdGJsX2NoYW5nZSB0aCwgLm9yZGVyLXRibF9jaGFuZ2UgdGQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHN2Zy5jdC1jaGFydC1iYXIge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgI2RvbnV0LWRhc2hib2FyZC1jaGFydCB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wcl9zdGF0cyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaGVpZ2h0LTMwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYWxlcnRfYmFzaWNzX2NoYXJydCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWhlYWRlciAuaGVhZGluZy1lbGVtZW50cyBhLmJ0biB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucm93X3BhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDEuMjVyZW0gMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJvcmRlcl9ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50b3Bfc3BhY2Uge1xyXG4gIHBhZGRpbmctdG9wOiA1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJvcmRlcl90b3Age1xyXG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN0LWNoYXJ0LWJhciAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1lbmQge1xyXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3QtY2hhcnQtYmFyIC5jdC1sYWJlbC5jdC12ZXJ0aWNhbC5jdC1zdGFydCB7XHJcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jaGFydGlzdC10b29sdGlwLmJhcl90b29sdGlwIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI4KTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC45KTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNoYXJ0aXN0LXRvb2x0aXAuZG9udXRfdG9vbHRpcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI4KTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC45KTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogMTYuOTA2cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2hhcnRpc3QtdG9vbHRpcC50b29sdGlwLXNob3cge1xyXG4gIG9wYWNpdHk6IDAuNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNoYXJ0aXN0LXRvb2x0aXAuYmFyX3Rvb2x0aXA6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jaGFydGlzdC10b29sdGlwLmRvbnV0X3Rvb2x0aXA6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG5cclxuLypTUElOTkVSUyBDU1MqL1xyXG5cclxuLmxvYWRlci13aGl0ZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13aGl0ZS5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci13aGl0ZS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13aGl0ZS5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13aGl0ZS5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZmYpLCB0bygjZmZmKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZiAzMCUsICNmZmYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZiAzMCUsICNmZmYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmYgMzAlLCAjZmZmIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmZiksIHRvKCNmZmYpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZiAzMCUsICNmZmYgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13aGl0ZS5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItY29sb3I6ICMwMDAgdHJhbnNwYXJlbnQgIzAwMCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwMCB0cmFuc3BhcmVudCAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWJsYWNrLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzAwMCksIHRvKCMwMDApKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzAwMCAzMCUsICMwMDAgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDAwKSwgdG8oIzAwMCkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZDogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjY2ZWU4IHRyYW5zcGFyZW50ICM2NjZlZTggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzY2NmVlOCB0cmFuc3BhcmVudCAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItcHJpbWFyeS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjNjY2ZWU4KSwgdG8oIzY2NmVlOCkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2NjZlZTggMzAlLCAjNjY2ZWU4IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2NjZlZTggMzAlLCAjNjY2ZWU4IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjY2ZWU4IDMwJSwgIzY2NmVlOCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICM2NjZlZTgpLCB0bygjNjY2ZWU4KSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2NjZlZTggMzAlLCAjNjY2ZWU4IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmZvbGRpbmctY3ViZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICMyOGQwOTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1jb2xvcjogIzI4ZDA5NCB0cmFuc3BhcmVudCAjMjhkMDk0IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMyOGQwOTQgdHJhbnNwYXJlbnQgIzI4ZDA5NCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLXN1Y2Nlc3MuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI4ZDA5NCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzI4ZDA5NCksIHRvKCMyOGQwOTQpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMjhkMDk0IDMwJSwgIzI4ZDA5NCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMjhkMDk0IDMwJSwgIzI4ZDA5NCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzI4ZDA5NCAzMCUsICMyOGQwOTQgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMjhkMDk0KSwgdG8oIzI4ZDA5NCkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMjhkMDk0IDMwJSwgIzI4ZDA5NCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItY29sb3I6ICMxZTlmZjIgdHJhbnNwYXJlbnQgIzFlOWZmMiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMWU5ZmYyIHRyYW5zcGFyZW50ICMxZTlmZjIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1pbmZvLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxZTlmZjIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMxZTlmZjIpLCB0bygjMWU5ZmYyKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMxZTlmZjIgMzAlLCAjMWU5ZmYyIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzFlOWZmMiksIHRvKCMxZTlmZjIpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZyBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxNDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNmZjkxNDkgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmY5MTQ5IHRyYW5zcGFyZW50ICNmZjkxNDkgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmOTE0OSB0cmFuc3BhcmVudCAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItd2FybmluZy5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxNDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmY5MTQ5KSwgdG8oI2ZmOTE0OSkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjkxNDkgMzAlLCAjZmY5MTQ5IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjkxNDkgMzAlLCAjZmY5MTQ5IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY5MTQ5IDMwJSwgI2ZmOTE0OSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZjkxNDkpLCB0bygjZmY5MTQ5KSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjkxNDkgMzAlLCAjZmY5MTQ5IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxNDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmZvbGRpbmctY3ViZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlciBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmY0OTYxIHRyYW5zcGFyZW50ICNmZjQ5NjEgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmY0OTYxIHRyYW5zcGFyZW50ICNmZjQ5NjEgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWRhbmdlci5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmY0OTYxICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZGFuZ2VyLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmNDk2MSksIHRvKCNmZjQ5NjEpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY0OTYxIDMwJSwgI2ZmNDk2MSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY0OTYxIDMwJSwgI2ZmNDk2MSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmNDk2MSAzMCUsICNmZjQ5NjEgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmY0OTYxKSwgdG8oI2ZmNDk2MSkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY0OTYxIDMwJSwgI2ZmNDk2MSAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZGFuZ2VyLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZCBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2IHRyYW5zcGFyZW50ICNmNDQzMzYgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjQ0MzM2IHRyYW5zcGFyZW50ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLXJlZC5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcmVkLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2Y0NDMzNiksIHRvKCNmNDQzMzYpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2Y0NDMzNiAzMCUsICNmNDQzMzYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZjQ0MzM2KSwgdG8oI2Y0NDMzNikpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcmVkLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNlOTFlNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1jb2xvcjogI2U5MWU2MyB0cmFuc3BhcmVudCAjZTkxZTYzIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlOTFlNjMgdHJhbnNwYXJlbnQgI2U5MWU2MyAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLXBpbmsuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2U5MWU2MyksIHRvKCNlOTFlNjMpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZTkxZTYzIDMwJSwgI2U5MWU2MyAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZTkxZTYzIDMwJSwgI2U5MWU2MyAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2U5MWU2MyAzMCUsICNlOTFlNjMgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZTkxZTYzKSwgdG8oI2U5MWU2MykpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZTkxZTYzIDMwJSwgI2U5MWU2MyAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1jb2xvcjogIzljMjdiMCB0cmFuc3BhcmVudCAjOWMyN2IwIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzljMjdiMCB0cmFuc3BhcmVudCAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1wdXJwbGUuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzljMjdiMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXB1cnBsZS50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICM5YzI3YjApLCB0bygjOWMyN2IwKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzljMjdiMCAzMCUsICM5YzI3YjAgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzljMjdiMCAzMCUsICM5YzI3YjAgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM5YzI3YjAgMzAlLCAjOWMyN2IwIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzljMjdiMCksIHRvKCM5YzI3YjApKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzljMjdiMCAzMCUsICM5YzI3YjAgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXB1cnBsZS5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItY29sb3I6ICMyMTk2ZjMgdHJhbnNwYXJlbnQgIzIxOTZmMyB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjE5NmYzIHRyYW5zcGFyZW50ICMyMTk2ZjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1ibHVlLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMyMTk2ZjMpLCB0bygjMjE5NmYzKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyMTk2ZjMgMzAlLCAjMjE5NmYzIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzIxOTZmMyksIHRvKCMyMTk2ZjMpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZDogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBiY2Q0IHRyYW5zcGFyZW50ICMwMGJjZDQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwYmNkNCB0cmFuc3BhcmVudCAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItY3lhbi5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDBiY2Q0KSwgdG8oIzAwYmNkNCkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMGJjZDQgMzAlLCAjMDBiY2Q0IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMGJjZDQgMzAlLCAjMDBiY2Q0IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDBiY2Q0IDMwJSwgIzAwYmNkNCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMwMGJjZDQpLCB0bygjMDBiY2Q0KSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMGJjZDQgMzAlLCAjMDBiY2Q0IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmZvbGRpbmctY3ViZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICMwMDk2ODggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwOTY4OCB0cmFuc3BhcmVudCAjMDA5Njg4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMwMDk2ODggdHJhbnNwYXJlbnQgIzAwOTY4OCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLXRlYWwuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwOTY4OCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzAwOTY4OCksIHRvKCMwMDk2ODgpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDA5Njg4IDMwJSwgIzAwOTY4OCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDA5Njg4IDMwJSwgIzAwOTY4OCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzAwOTY4OCAzMCUsICMwMDk2ODggMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDA5Njg4KSwgdG8oIzAwOTY4OCkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDA5Njg4IDMwJSwgIzAwOTY4OCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNmZmViM2IgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZWIzYiB0cmFuc3BhcmVudCAjZmZlYjNiIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZWIzYiB0cmFuc3BhcmVudCAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci15ZWxsb3cuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZWIzYiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNmZmViM2IgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXllbGxvdy50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZmViM2IpLCB0bygjZmZlYjNiKSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmViM2IgMzAlLCAjZmZlYjNiIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmZWIzYiksIHRvKCNmZmViM2IpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXllbGxvdy5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViM2IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViM2IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlciBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3IHRyYW5zcGFyZW50ICNmZmMxMDcgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmMxMDcgdHJhbnNwYXJlbnQgI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1hbWJlci5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICBib3JkZXItY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZmMxMDcpLCB0bygjZmZjMTA3KSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmYzEwNyAzMCUsICNmZmMxMDcgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmYzEwNyAzMCUsICNmZmMxMDcgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmMxMDcgMzAlLCAjZmZjMTA3IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmYzEwNyksIHRvKCNmZmMxMDcpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmYzEwNyAzMCUsICNmZmMxMDcgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICM2MDdkOGIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjA3ZDhiIHRyYW5zcGFyZW50ICM2MDdkOGIgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjNjA3ZDhiIHRyYW5zcGFyZW50ICM2MDdkOGIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS1ncmV5LnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzYwN2Q4YiksIHRvKCM2MDdkOGIpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjA3ZDhiIDMwJSwgIzYwN2Q4YiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjA3ZDhiIDMwJSwgIzYwN2Q4YiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzYwN2Q4YiAzMCUsICM2MDdkOGIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjNjA3ZDhiKSwgdG8oIzYwN2Q4YikpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjA3ZDhiIDMwJSwgIzYwN2Q4YiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS1ncmV5LmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzFiMjk0MiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWIyOTQyIHRyYW5zcGFyZW50ICMxYjI5NDIgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMWIyOTQyIHRyYW5zcGFyZW50ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWdyZXktYmx1ZS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWIyOTQyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICBib3JkZXItY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gIGJvcmRlci1jb2xvcjogIzFiMjk0MiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZ3JleS1ibHVlLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzFiMjk0MiksIHRvKCMxYjI5NDIpKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFiMjk0MiAzMCUsICMxYjI5NDIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMWIyOTQyKSwgdG8oIzFiMjk0MikpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZ3JleS1ibHVlLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMjk0MiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMjk0MiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWItMSwgLm15LTEge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG59Il19 */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUI"])('newOrders'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EcommerceComponent.prototype, "blockUINewOrders", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUI"])('sellCard'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EcommerceComponent.prototype, "blockUISellCard", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUI"])('userCard'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EcommerceComponent.prototype, "blockUIUserCard", void 0);
    return EcommerceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](EcommerceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-ecommerce',
                templateUrl: './ecommerce.component.html',
                styleUrls: ['./ecommerce.component.css']
            }]
    }], function () { return [{ type: _services_chart_api__WEBPACK_IMPORTED_MODULE_9__["ChartApiService"] }, { type: _services_table_api_service__WEBPACK_IMPORTED_MODULE_10__["TableApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _api_workers_workers_service__WEBPACK_IMPORTED_MODULE_1__["WorkersService"] }, { type: _api_sale_sale_service__WEBPACK_IMPORTED_MODULE_2__["SaleService"] }]; }, { blockUINewOrders: [], blockUISellCard: [], blockUIUserCard: [], componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarDirective"]]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=app-content-dashboard-dashboard-module.js.map