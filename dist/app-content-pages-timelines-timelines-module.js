(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-pages-timelines-timelines-module"],{

/***/ "+L7H":
/*!****************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-center/timelines-center.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TimelinesCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinesCenterComponent", function() { return TimelinesCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2_photoswipe */ "f5Ne");
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_services/chart.api */ "5YoL");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ "FhuM");















function TimelinesCenterComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function TimelinesCenterComponent_div_21_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.reloadProjectWorkOne($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](26, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
} }
function TimelinesCenterComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function TimelinesCenterComponent_div_26_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.reloadSofiaOrav($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Sofia Orav ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "iframe", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](29, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "fieldset", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
} }
function TimelinesCenterComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function TimelinesCenterComponent_div_71_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.reloadSofiaOravTwo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Sofia Orav ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "18 June, 2016 at 4.50 P.M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cras justo odio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Dapibus ac facilisis in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Morbi leo risus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Porta ac consectetur ac");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Vestibulum at eros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](37, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "fieldset", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.options);
} }
function TimelinesCenterComponent_agm_marker_268_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "agm-marker", 111);
} if (rf & 2) {
    var m_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", m_r10.lat)("longitude", m_r10.lng)("label", m_r10.label);
} }
var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
var TimelinesCenterComponent = /** @class */ (function () {
    function TimelinesCenterComponent(chartApiservice) {
        this.chartApiservice = chartApiservice;
        this.options = {
            close: false,
            expand: true,
            minimize: false,
            reload: true
        };
        this.lat = 40.650002;
        this.lng = -73.949997;
        this.markers = [
            {
                lat: this.lat,
                lng: this.lng,
                label: ''
            }
        ];
    }
    TimelinesCenterComponent.prototype.getChordchart = function () {
        this.chartOption = {
            grid: {
                x: 40,
                x2: 40,
                y: 45,
                y2: 25
            },
            // Add tooltip
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // The default is a straight line, optionally: 'line' | 'shadow'
                }
            },
            // Add legend
            legend: {
                data: this.data['report'].data,
            },
            // Add custom colors
            color: ['#666EE8', '#FF9149', '#FF9966', '#FA8E57', '#FF637b', '#5175E0', '#A147F0', '#28D094', '#BABFC7'],
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Direct access',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Email marketing',
                    type: 'bar',
                    stack: 'advertising',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Advertising alliance',
                    type: 'bar',
                    stack: 'advertising',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video ads',
                    type: 'bar',
                    stack: 'advertising',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Search Engine',
                    type: 'bar',
                    stack: 'Total',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                },
                {
                    name: 'Google',
                    type: 'bar',
                    barWidth: 12,
                    stack: 'search engine',
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name: 'Safari',
                    type: 'bar',
                    stack: 'search engine',
                    data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name: 'Opera',
                    type: 'bar',
                    stack: 'search engine',
                    data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name: 'Firefox',
                    type: 'bar',
                    stack: 'search engine',
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        this.option = {
            legend: {
                data: ['Punch Card'],
                left: 'right'
            },
            polar: {},
            tooltip: {
                formatter: function (params) {
                    return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
                }
            },
            angleAxis: {
                type: 'category',
                data: hours,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            },
            radiusAxis: {
                type: 'category',
                data: days,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    rotate: 45
                }
            },
            series: [{
                    name: 'Punch Card',
                    type: 'scatter',
                    coordinateSystem: 'polar',
                    symbolSize: function (val) {
                        return val[2] * 2;
                    },
                    data: this.data['punchdata'].data,
                    animationDelay: function (idx) {
                        return idx * 5;
                    }
                }]
        };
    };
    TimelinesCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image1 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image1.largeUrl = '../../../../../assets/images/gallery/1.jpg';
        this.image1.height = 3296;
        this.image1.width = 4234;
        this.image1.id = 0;
        this.image1.size = this.image1.width + "x" + this.image1.height;
        this.image1.thumbUrl = '../../../../../assets/images/gallery/1.jpg';
        this.image1.description = 'hello world';
        this.image1.author = 'David Wollschlegel';
        this.image2 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image2.largeUrl = '../../../../../assets/images/gallery/2.jpg';
        this.image2.height = 3296;
        this.image2.width = 4234;
        this.image2.id = 1;
        this.image2.size = this.image2.width + "x" + this.image2.height;
        this.image2.thumbUrl = '../../../../../assets/images/gallery/2.jpg';
        this.image3 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image3.largeUrl = '../../../../../assets/images/gallery/3.jpg';
        this.image3.height = 3296;
        this.image3.width = 4234;
        this.image3.id = 2;
        this.image3.size = this.image2.width + "x" + this.image2.height;
        this.image3.thumbUrl = '../../../../../assets/images/gallery/3.jpg';
        this.image4 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image4.largeUrl = '../../../../../assets/images/gallery/4.jpg';
        this.image4.height = 3296;
        this.image4.width = 4234;
        this.image4.id = 3;
        this.image4.size = this.image4.width + "x" + this.image4.height;
        this.image4.thumbUrl = '../../../../../assets/images/gallery/4.jpg';
        this.image5 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image5.largeUrl = '../../../../../assets/images/gallery/6.jpg';
        this.image5.height = 3296;
        this.image5.width = 4234;
        this.image5.id = 4;
        this.image5.size = this.image5.width + "x" + this.image5.height;
        this.image5.thumbUrl = '../../../../../assets/images/gallery/5.jpg';
        this.image6 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image6.largeUrl = '../../../../../assets/images/gallery/6.jpg';
        this.image6.height = 3296;
        this.image6.width = 4234;
        this.image6.id = 5;
        this.image6.size = this.image6.width + "x" + this.image6.height;
        this.image6.thumbUrl = '../../../../../assets/images/gallery/6.jpg';
        this.image7 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image7.largeUrl = '../../../../../assets/images/gallery/7.jpg';
        this.image7.height = 3296;
        this.image7.width = 4234;
        this.image7.id = 6;
        this.image7.size = this.image7.width + "x" + this.image7.height;
        this.image7.thumbUrl = '../../../../../assets/images/gallery/7.jpg';
        this.image8 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image8.largeUrl = '../../../../../assets/images/gallery/8.jpg';
        this.image8.height = 3296;
        this.image8.width = 4234;
        this.image8.id = 7;
        this.image8.size = this.image8.width + "x" + this.image8.height;
        this.image8.thumbUrl = '../../../../../assets/images/gallery/8.jpg';
        this.image9 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image9.largeUrl = '../../../../../assets/images/gallery/9.jpg';
        this.image9.height = 3296;
        this.image9.width = 4234;
        this.image9.id = 8;
        this.image9.size = this.image9.width + "x" + this.image9.height;
        this.image9.thumbUrl = '../../../../../assets/images/gallery/9.jpg';
        this.image10 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image10.largeUrl = '../../../../../assets/images/gallery/10.jpg';
        this.image10.height = 3296;
        this.image10.width = 4234;
        this.image10.id = 9;
        this.image10.size = this.image10.width + "x" + this.image10.height;
        this.image10.thumbUrl = '../../../../../assets/images/gallery/10.jpg';
        this.image11 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image11.largeUrl = '../../../../../assets/images/gallery/11.jpg';
        this.image11.height = 3296;
        this.image11.width = 4234;
        this.image11.id = 10;
        this.image11.size = this.image11.width + "x" + this.image11.height;
        this.image11.thumbUrl = '../../../../../assets/images/gallery/11.jpg';
        this.image12 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image12.largeUrl = '../../../../../assets/images/gallery/12.jpg';
        this.image12.height = 3296;
        this.image12.width = 4234;
        this.image12.id = 11;
        this.image12.size = this.image12.width + "x" + this.image12.height;
        this.image12.thumbUrl = '../../../../../assets/images/gallery/12.jpg';
        this.zoom = 15;
        this.breadcrumb = {
            'mainlabel': 'Timeline Center',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'Timelines',
                    'isLink': true,
                    'link': ''
                },
                {
                    'name': 'Timelines Center',
                    'isLink': false
                }
            ]
        };
        this.chartApiservice.getTimelineData().subscribe(function (Response) {
            _this.data = Response;
            _this.getChordchart();
        });
    };
    TimelinesCenterComponent.prototype.reloadProjectWorkOne = function () {
        var _this = this;
        this.blockUIProjectWorkOne.start('Loading..');
        setTimeout(function () {
            _this.blockUIProjectWorkOne.stop();
        }, 2500);
    };
    TimelinesCenterComponent.prototype.reloadSofiaOrav = function () {
        var _this = this;
        this.blockUISofiaOrav.start('Loading..');
        setTimeout(function () {
            _this.blockUISofiaOrav.stop();
        }, 2500);
    };
    TimelinesCenterComponent.prototype.reloadSofiaOravTwo = function () {
        var _this = this;
        this.blockUISofiaOravTwo.start('Loading..');
        setTimeout(function () {
            _this.blockUISofiaOravTwo.stop();
        }, 2500);
    };
    TimelinesCenterComponent.ɵfac = function TimelinesCenterComponent_Factory(t) { return new (t || TimelinesCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_4__["ChartApiService"])); };
    TimelinesCenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimelinesCenterComponent, selectors: [["app-timelines-center"]], decls: 275, vars: 27, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "user-profile"], ["id", "timeline", 1, "timeline-center", "timeline-wrapper"], [1, "page-title", "text-center"], [1, "timeline"], [1, "timeline-line"], [1, "timeline-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "la", "la-calendar-o"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-red", "bg-lighten-1"], [1, "la", "la-plane"], ["class", "timeline-card card border-grey border-lighten-2", 4, "blockUI", "blockUIMessage"], [1, "timeline-item", "mt-3"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-14.png", "alt", "avatar"], [1, "timeline-item", "block"], ["title", "", "data-context", "inverse", "data-container", "body", "data-original-title", "block highlight", 1, "border-silc", 3, "routerLink"], [1, "timeline-card", "card", "border-grey", "border-lighten-2"], [1, "card-header"], [1, "text-center"], [1, "la", "la-bar-chart", "font-medium-4"], [1, "timeline-date"], [1, "card-content"], [1, "card-body"], [1, "chart-container"], ["echarts", "", 3, "options"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-5.png", "alt", "avatar"], [1, "timeline-card", "card", "text-white"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "bg-overlay"], [1, "card-title", "white"], [1, "card-text"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Nullam facilisis fermentum", 1, "bg-teal", "bg-lighten-1"], [1, "la", "la-check-square-o"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Nullam facilisis fermentum", 1, "bg-purple", "bg-lighten-1"], [1, "la", "la-area-chart"], [1, "card-title"], [3, "routerLink"], [1, "card-subtitle", "text-muted", "mb-0", "pt-1"], [1, "font-small-3"], ["echarts", "", 1, "height-400", "overflow-hidden", "echart-container", 3, "options"], [1, "card-footer", "px-0", "py-0"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "text", "placeholder", "Write comments...", 1, "form-control"], [1, "form-control-position"], [1, "la", "la-dashcube"], [1, "mt-1"], [1, "la", "la-file-image-o", "font-medium-4"], [1, "card-body", "my-gallery"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-12"], [3, "image"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Application API Support", 1, "bg-warning", "bg-darken-1"], [1, "la", "la-life-ring"], [1, "media"], [1, "media-left", "mr-1"], [1, "avatar", "avatar-md", "avatar-busy"], ["src", "../../../../../assets/images/portrait/small/avatar-s-18.png", "alt", "avatar"], [1, "media-body"], [1, "badge", "badge-pill", "badge-warning", "float-right"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "list-inline"], [1, "pr-1"], [1, "", 3, "routerLink"], [1, "la", "la-commenting-o"], [1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-4.png", "alt", "avatar"], [1, "text-bold-600", "mb-0"], ["src", "../../../../../assets/images/portrait/small/avatar-s-6.png", "alt", "avatar"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Quote of the day", 1, "bg-amber", "bg-darken-1"], [1, "la", "la-smile-o"], ["src", "../../../../../assets/images/portfolio/width-600/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "card-bodyquote"], ["title", "Source Title"], [1, "la", "la-map-marker", "font-medium-4"], [3, "latitude", "longitude", "zoom", "zoomControl", "scrollwheel"], [3, "latitude", "longitude", "label", 4, "ngFor", "ngForOf"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardContent", ""], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-1.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["mCardBody", ""], [1, "la", "la-thumbs-o-up"], [1, "la", "la-share-alt"], ["mCardFooter", ""], [1, "media-left", "pr-1"], ["src", "../../../../../assets/images/portrait/small/avatar-s-1.png", "alt", "avatar"], [1, "m-0"], [1, "list-inline", "mb-1"], [1, "embed-responsive", "embed-responsive-4by3"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]("https://player.vimeo.com/video/118589137?title=0&byline=0"), "SameSite", "Secure"], [1, "list-group"], [1, "list-group-item"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "input-1", 1, "custom-control-input"], ["for", "input-1", 1, "custom-control-label"], ["type", "checkbox", "id", "input-2", "checked", "", 1, "custom-control-input"], ["for", "input-2", "checked", "checked", 1, "custom-control-label"], ["type", "checkbox", "id", "input-3", 1, "custom-control-input"], ["for", "input-3", 1, "custom-control-label"], ["type", "checkbox", "id", "input-4", "disabled", "", "checked", "", 1, "custom-control-input"], ["for", "input-4", 1, "custom-control-label"], ["type", "checkbox", "id", "input-5", 1, "custom-control-input"], ["for", "input-5", 1, "custom-control-label"], [3, "latitude", "longitude", "label"]], template: function TimelinesCenterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Timeline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Today");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TimelinesCenterComponent_div_21_Template, 72, 1, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TimelinesCenterComponent_div_26_Template, 34, 1, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Campaign Report");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "18 hours ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " 2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h4", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Good Morning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "26 Aug, 2016 at 2.00 A.M");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, TimelinesCenterComponent_div_71_Template, 42, 1, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h4", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Non-ribbon Chord Chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "6 Feb, 2016 at 6.00 A.M");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "fieldset", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " 2015");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Media Gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "July 1, 2015");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "ngp-gallery-item", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "ngp-lightbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "span", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "span", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "img", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "h4", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Application API Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "span", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "15 Oct, 2015 at 8.00 A.M");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "span", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "High");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "img", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "p", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "ul", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "li", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "span", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, " Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "img", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "p", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Crystal Lawson");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "img", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "p", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Rafila G\u0103itan");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "fieldset", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "input", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "i", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "span", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "h4", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "a", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Quote of the day");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "p", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "03 March, 2015 at 5 P.M");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "img", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "blockquote", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Someone famous in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "cite", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " - Source Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, " 2014");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "i", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Moved to Brooklyn");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "p", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Jan 1, 2014");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "agm-map", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](268, TimelinesCenterComponent_agm_marker_268_Template, 1, 3, "agm-marker", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, " Founded in 2012");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "projectWorkOne")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "sofiaOrav")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.chartOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "sofiaOravTwo")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.option);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](108);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("zoomControl", true)("scrollwheel", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.markers);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["ɵf"], ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["ɵa"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵf"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .my-gallery img{\r\n\r\n  max-width: 100% !important;\r\n  padding: .25rem;\r\n  background-color: #F4F5FA;\r\n  border: 1px solid #626E82;\r\n  border-radius: .25rem;\r\n  margin-bottom: 15px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .my-gallery .img-thumbnail {\r\n  padding: .25rem;\r\n  background-color: #F4F5FA;\r\n  border: 1px solid #626E82;\r\n  border-radius: .25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lcy1jZW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFDQzs7RUFFQywwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQjs7QUFDRjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ0aW1lbGluZXMtY2VudGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcbiA6aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGQTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH0gXHJcbjpob3N0IDo6bmctZGVlcCAubXktZ2FsbGVyeSAuaW1nLXRodW1ibmFpbCB7XHJcbiAgcGFkZGluZzogLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyNkU4MjtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbn0iXX0= */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('projectWorkOne'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TimelinesCenterComponent.prototype, "blockUIProjectWorkOne", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('sofiaOrav'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TimelinesCenterComponent.prototype, "blockUISofiaOrav", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('sofiaOravTwo'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TimelinesCenterComponent.prototype, "blockUISofiaOravTwo", void 0);
    return TimelinesCenterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimelinesCenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-timelines-center',
                templateUrl: './timelines-center.component.html',
                styleUrls: ['./timelines-center.component.css']
            }]
    }], function () { return [{ type: _services_chart_api__WEBPACK_IMPORTED_MODULE_4__["ChartApiService"] }]; }, { blockUIProjectWorkOne: [], blockUISofiaOrav: [], blockUISofiaOravTwo: [] }); })();


/***/ }),

/***/ "Gh/Z":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-left/timelines-left.component.ts ***!
  \************************************************************************************/
/*! exports provided: TimelinesLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinesLeftComponent", function() { return TimelinesLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2_photoswipe */ "f5Ne");
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_services/chart.api */ "5YoL");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ "FhuM");















function TimelinesLeftComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function TimelinesLeftComponent_div_20_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.reloadProjectWorkOne($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "5 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "fieldset", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
} }
function TimelinesLeftComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function TimelinesLeftComponent_div_25_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.reloadProjectWorkTwo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "5 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "fieldset", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
} }
function TimelinesLeftComponent_agm_marker_275_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "agm-marker", 109);
} if (rf & 2) {
    var m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", m_r7.lat)("longitude", m_r7.lng)("label", m_r7.label);
} }
var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
var TimelinesLeftComponent = /** @class */ (function () {
    function TimelinesLeftComponent(chartApiservice) {
        this.chartApiservice = chartApiservice;
        this.options = {
            close: false,
            expand: true,
            minimize: false,
            reload: true
        };
        this.zoom = 15;
        this.lat = 40.650002;
        this.lng = -73.949997;
        this.markers = [
            {
                lat: this.lat,
                lng: this.lng,
                label: ''
            }
        ];
    }
    /**
     *
     */
    TimelinesLeftComponent.prototype.getChordchart = function () {
        this.chartOption = {
            grid: {
                x: 40,
                x2: 40,
                y: 45,
                y2: 25
            },
            // Add tooltip
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // The default is a straight line, optionally: 'line' | 'shadow'
                }
            },
            // Add legend
            legend: {
                data: this.data['report'].data,
            },
            // Add custom colors
            color: ['#666EE8', '#FF9149', '#FF9966', '#FA8E57', '#FF637b', '#5175E0', '#A147F0', '#28D094', '#BABFC7'],
            // // Enable drag recalculate
            // calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Direct access',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Email marketing',
                    type: 'bar',
                    stack: 'advertising',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Advertising alliance',
                    type: 'bar',
                    stack: 'advertising',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video ads',
                    type: 'bar',
                    stack: 'advertising',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Search Engine',
                    type: 'bar',
                    stack: 'Total',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                },
                {
                    name: 'Google',
                    type: 'bar',
                    barWidth: 12,
                    stack: 'search engine',
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name: 'Safari',
                    type: 'bar',
                    stack: 'search engine',
                    data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name: 'Opera',
                    type: 'bar',
                    stack: 'search engine',
                    data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name: 'Firefox',
                    type: 'bar',
                    stack: 'search engine',
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        this.option = {
            legend: {
                data: ['Punch Card'],
                left: 'right'
            },
            polar: {},
            tooltip: {
                formatter: function (params) {
                    return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
                }
            },
            angleAxis: {
                type: 'category',
                data: hours,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            },
            radiusAxis: {
                type: 'category',
                data: days,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    rotate: 45
                }
            },
            series: [{
                    name: 'Punch Card',
                    type: 'scatter',
                    coordinateSystem: 'polar',
                    symbolSize: function (val) {
                        return val[2] * 2;
                    },
                    data: this.data['punchdata'].data,
                    animationDelay: function (idx) {
                        return idx * 5;
                    }
                }]
        };
    };
    TimelinesLeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image1 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image1.largeUrl = '../../../../../assets/images/gallery/1.jpg';
        this.image1.height = 3296;
        this.image1.width = 4234;
        this.image1.id = 0;
        this.image1.size = this.image1.width + "x" + this.image1.height;
        this.image1.thumbUrl = '../../../../../assets/images/gallery/1.jpg';
        this.image1.description = 'hello world';
        this.image1.author = 'David Wollschlegel';
        this.image2 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image2.largeUrl = '../../../../../assets/images/gallery/2.jpg';
        this.image2.height = 3296;
        this.image2.width = 4234;
        this.image2.id = 1;
        this.image2.size = this.image2.width + "x" + this.image2.height;
        this.image2.thumbUrl = '../../../../../assets/images/gallery/2.jpg';
        this.image3 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image3.largeUrl = '../../../../../assets/images/gallery/3.jpg';
        this.image3.height = 3296;
        this.image3.width = 4234;
        this.image3.id = 2;
        this.image3.size = this.image3.width + "x" + this.image3.height;
        this.image3.thumbUrl = '../../../../../assets/images/gallery/3.jpg';
        this.image4 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image4.largeUrl = '../../../../../assets/images/gallery/4.jpg';
        this.image4.height = 3296;
        this.image4.width = 4234;
        this.image4.id = 3;
        this.image4.size = this.image4.width + "x" + this.image4.height;
        this.image4.thumbUrl = '../../../../../assets/images/gallery/4.jpg';
        this.image5 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image5.largeUrl = '../../../../../assets/images/gallery/6.jpg';
        this.image5.height = 3296;
        this.image5.width = 4234;
        this.image5.id = 4;
        this.image5.size = this.image4.width + "x" + this.image4.height;
        this.image5.thumbUrl = '../../../../../assets/images/gallery/5.jpg';
        this.image6 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image6.largeUrl = '../../../../../assets/images/gallery/6.jpg';
        this.image6.height = 3296;
        this.image6.width = 4234;
        this.image6.id = 5;
        this.image6.size = this.image6.width + "x" + this.image6.height;
        this.image6.thumbUrl = '../../../../../assets/images/gallery/6.jpg';
        this.image7 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image7.largeUrl = '../../../../../assets/images/gallery/7.jpg';
        this.image7.height = 3296;
        this.image7.width = 4234;
        this.image7.id = 6;
        this.image7.size = this.image7.width + "x" + this.image7.height;
        this.image7.thumbUrl = '../../../../../assets/images/gallery/7.jpg';
        this.image8 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image8.largeUrl = '../../../../../assets/images/gallery/8.jpg';
        this.image8.height = 3296;
        this.image8.width = 4234;
        this.image8.id = 7;
        this.image8.size = this.image8.width + "x" + this.image8.height;
        this.image8.thumbUrl = '../../../../../assets/images/gallery/8.jpg';
        this.image9 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image9.largeUrl = '../../../../../assets/images/gallery/9.jpg';
        this.image9.height = 3296;
        this.image9.width = 4234;
        this.image9.id = 8;
        this.image9.size = this.image9.width + "x" + this.image9.height;
        this.image9.thumbUrl = '../../../../../assets/images/gallery/9.jpg';
        this.image10 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image10.largeUrl = '../../../../../assets/images/gallery/10.jpg';
        this.image10.height = 3296;
        this.image10.width = 4234;
        this.image10.id = 9;
        this.image10.size = this.image10.width + "x" + this.image10.height;
        this.image10.thumbUrl = '../../../../../assets/images/gallery/10.jpg';
        this.image11 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image11.largeUrl = '../../../../../assets/images/gallery/11.jpg';
        this.image11.height = 3296;
        this.image11.width = 4234;
        this.image11.id = 10;
        this.image11.size = this.image11.width + "x" + this.image11.height;
        this.image11.thumbUrl = '../../../../../assets/images/gallery/11.jpg';
        this.image12 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image12.largeUrl = '../../../../../assets/images/gallery/12.jpg';
        this.image12.height = 3296;
        this.image12.width = 4234;
        this.image12.id = 11;
        this.image12.size = this.image12.width + "x" + this.image12.height;
        this.image12.thumbUrl = '../../../../../assets/images/gallery/12.jpg';
        this.breadcrumb = {
            'mainlabel': 'Timeline Left',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'Timelines',
                    'isLink': true,
                    'link': ''
                },
                {
                    'name': 'Timelines Left',
                    'isLink': false
                }
            ]
        };
        this.chartApiservice.getTimelineData().subscribe(function (Response) {
            _this.data = Response;
            _this.getChordchart();
        });
    };
    TimelinesLeftComponent.prototype.reloadProjectWorkOne = function () {
        var _this = this;
        this.blockUIProjectWorkOne.start('Loading..');
        setTimeout(function () {
            _this.blockUIProjectWorkOne.stop();
        }, 2500);
    };
    TimelinesLeftComponent.prototype.reloadProjectWorkTwo = function () {
        var _this = this;
        this.blockUIProjectWorkTwo.start('Loading..');
        setTimeout(function () {
            _this.blockUIProjectWorkTwo.stop();
        }, 2500);
    };
    TimelinesLeftComponent.ɵfac = function TimelinesLeftComponent_Factory(t) { return new (t || TimelinesLeftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_4__["ChartApiService"])); };
    TimelinesLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimelinesLeftComponent, selectors: [["app-timelines-left"]], decls: 282, vars: 25, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "timeline", 1, "timeline-left", "timeline-wrapper"], [1, "page-title", "text-center", "text-lg-left"], [1, "timeline"], [1, "timeline-line"], [1, "timeline-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "la", "la-calendar"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-red", "bg-lighten-1"], [1, "la", "la-plane"], ["class", "timeline-card card border-grey border-lighten-2", 4, "blockUI", "blockUIMessage"], [1, "la", "la-plus-square-o"], [1, "timeline-item", "mt-3"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-14.png", "alt", "avatar"], [1, "timeline-card", "card", "border-grey", "border-lighten-2"], [1, "card-header"], [1, "card-title"], [3, "routerLink"], [1, "card-subtitle", "text-muted", "pt-1"], [1, "font-small-3"], [1, "card-content"], [1, "card-body", "row"], [1, "col-lg-6", "col-12"], [1, "embed-responsive", "embed-responsive-4by3"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]("https://player.vimeo.com/video/118589137?title=0&byline=0")], [1, "card-text", "m-0"], [1, "card-text"], [1, "list-inline", "mb-1"], [1, "pr-1"], [1, "text-muted", 3, "routerLink"], [1, "la", "la-heart-o"], [1, "la", "la-comments-o"], [1, "la", "la-share-alt"], [1, "card-footer", "px-0", "py-0"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "text", "placeholder", "Write comments...", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-message-square"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-success", "bg-lighten-1"], [1, "la", "la-bar-chart-o"], [1, "text-center", "pt-1"], [1, "timeline-date"], [1, "card-body"], [1, "chart-container"], ["echarts", "", 3, "options"], [1, "feather", "ft-calendar"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-5.png", "alt", "avatar"], ["matchHeight", "card", 1, "row"], [1, "col-lg-8", "col-12"], [1, "timeline-card", "card", "bg-dark", "text-white"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "bg-overlay"], [1, "card-title", "white"], [1, "col-lg-4", "col-12"], [1, "card"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "badge", "badge-pill", "bg-primary", "float-right"], [1, "badge", "badge-pill", "bg-info", "float-right"], [1, "badge", "badge-pill", "bg-warning", "float-right"], [1, "badge", "badge-pill", "bg-success", "float-right"], [1, "badge", "badge-pill", "bg-danger", "float-right"], [1, "card-link", 3, "routerLink"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Nullam facilisis fermentum", 1, "bg-teal", "bg-lighten-1"], [1, "la", "la-check"], [1, "row", "card-body"], [1, "list-group", "icheck-task"], ["type", "checkbox", "id", "input-1"], ["type", "checkbox", "id", "input-2", "checked", ""], ["type", "checkbox", "id", "input-3"], ["type", "checkbox", "id", "input-4", "disabled", "", "checked", ""], ["type", "checkbox", "id", "input-5"], ["type", "checkbox", "id", "input-6", "disabled", "", "checked", ""], ["echarts", "", 1, "height-400", "overflow-hidden", "echart-container", 3, "options"], [1, "la", "la-image"], [1, "card-body", "my-gallery"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-12"], [3, "image"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Moved to Brooklyn", 1, "bg-primary", "bg-lighten-1"], [1, "la", "la-map"], [3, "latitude", "longitude", "zoom", "zoomControl", "scrollwheel"], [3, "latitude", "longitude", "label", 4, "ngFor", "ngForOf"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "", 3, "routerLink"], [1, "card-subtitle", "text-muted", "mb-0", "pt-1"], ["mCardBody", ""], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "media"], [1, "media-left", "pr-1"], [1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-2.png", "alt", "avatar"], [1, "media-body"], [1, "text-bold-600", "mb-0"], [1, "m-0"], ["src", "../../../../../assets/images/portrait/small/avatar-s-18.png", "alt", "avatar"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["src", "../../../../../assets/images/portrait/small/avatar-s-3.png", "alt", "avatar"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-1.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["src", "../../../../../assets/images/portrait/small/avatar-s-1.png", "alt", "avatar"], [3, "latitude", "longitude", "label"]], template: function TimelinesLeftComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Timeline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Today");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TimelinesLeftComponent_div_20_Template, 134, 1, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TimelinesLeftComponent_div_25_Template, 73, 1, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h4", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Sofia Orav");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "8 hours ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "iframe", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt! Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ul", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "span", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Like");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "span", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Share");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "fieldset", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Campaign Report");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "18 hours ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " 2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "img", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h4", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Good Morning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "26 Aug, 2016 at 2.00 A.M");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h4", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "List Group");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Some quick example text to build on the card title and make up the bulk of the card's content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "ul", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " Cras justo odio ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Dapibus ac facilisis in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "span", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Morbi leo risus ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " Porta ac consectetur ac ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "8");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Vestibulum at eros ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Card link");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Another link");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "i", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h4", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Sofia Orav");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "18 June, 2016 at 4.50 P.M");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "ul", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "input", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " Cras justo odio");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "input", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " Dapibus ac facilisis in");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "input", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " Morbi leo risus");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "input", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, " Porta ac consectetur ac");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " Vestibulum at eros");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "input", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " Porta ac consectetur ac");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "p", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "fieldset", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "input", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "i", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, " 2015");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "span", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "i", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Media Gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "July 1, 2015");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "ngp-gallery-item", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "ngp-lightbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "i", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, " 2014");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "span", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "i", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Moved to Brooklyn");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Jan 1, 2014");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "agm-map", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](275, TimelinesLeftComponent_agm_marker_275_Template, 1, 3, "agm-marker", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "i", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, " Founded in 2012");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "projectWorkOne")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "projectWorkTwo")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.chartOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](99);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.option);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("zoomControl", true)("scrollwheel", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.markers);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["ɵf"], ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["ɵa"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵf"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .my-gallery img{\r\n  max-width: 100% !important;\r\n  padding: .25rem;\r\n  background-color: #F4F5FA;\r\n  border: 1px solid #626E82;\r\n  border-radius: .25rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n[_nghost-%COMP%]     .my-gallery .img-thumbnail {\r\n  padding: .25rem;\r\n  background-color: #F4F5FA;\r\n  border: 1px solid #626E82;\r\n  border-radius: .25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lcy1sZWZ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ0aW1lbGluZXMtbGVmdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IC4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5teS1nYWxsZXJ5IC5pbWctdGh1bWJuYWlsIHtcclxuICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGQTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufSJdfQ== */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('projectWorkOne'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TimelinesLeftComponent.prototype, "blockUIProjectWorkOne", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('projectWorkTwo'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TimelinesLeftComponent.prototype, "blockUIProjectWorkTwo", void 0);
    return TimelinesLeftComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimelinesLeftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-timelines-left',
                templateUrl: './timelines-left.component.html',
                styleUrls: ['./timelines-left.component.css']
            }]
    }], function () { return [{ type: _services_chart_api__WEBPACK_IMPORTED_MODULE_4__["ChartApiService"] }]; }, { blockUIProjectWorkOne: [], blockUIProjectWorkTwo: [] }); })();


/***/ }),

/***/ "LoT/":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-horizontal/horizontal-timeline-page/horizontal-timeline-page.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: HorizontalTimelinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTimelinePageComponent", function() { return HorizontalTimelinePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





var _c0 = ["eventsWrapper"];
var _c1 = ["fillingLine"];
var _c2 = ["timelineEvents"];
var _c3 = function (a0, a1) { return { "selected": a0, "older-event": a1 }; };
function HorizontalTimelinePageComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelinePageComponent_li_6_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var item_r4 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onEventClick($event, item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r4 = ctx.$implicit;
    var index_r5 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, item_r4.selected, index_r5 < ctx_r1.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, item_r4.date, ctx_r1.dateFormatTop));
} }
function HorizontalTimelinePageComponent_div_16_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    var index_r11 = ctx.index;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@contentState", item_r10.selected ? "active" : index_r11 < ctx_r9.selectedIndex ? "left" : "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, item_r10.date, ctx_r9.longDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.content);
} }
function HorizontalTimelinePageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalTimelinePageComponent_div_16_li_2_Template, 9, 7, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.timelineElements);
} }
var _c4 = function (a0) { return { "loaded": a0 }; };
var _c5 = function (a0) { return { "inactive": a0 }; };
var HorizontalTimelinePageComponent = /** @class */ (function () {
    function HorizontalTimelinePageComponent(_cdr) {
        this._cdr = _cdr;
        this.prevLinkInactive = true;
        this.nextLinkInactive = false;
        this.loaded = false;
        this.selectedIndex = 0;
        this.eventsWrapperWidth = 0;
        this._viewInitialized = false;
        this._timelineWrapperWidth = 720;
        this._eventsMinDistance = 80;
        this._dateFormat = 'dd.MM.yyyy';
        this._dateFormatTop = 'dd MMM';
        this._disabled = false;
        this._showContent = false;
    }
    Object.defineProperty(HorizontalTimelinePageComponent.prototype, "timelineWrapperWidth", {
        set: function (value) {
            this._timelineWrapperWidth = value;
            this._cdr.detectChanges();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelinePageComponent.prototype, "eventsMinDistance", {
        set: function (value) {
            this._eventsMinDistance = value;
            this.initView();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelinePageComponent.prototype, "timelineElements", {
        get: function () {
            return this._timelineElements;
        },
        set: function (value) {
            this._timelineElements = value;
            this.initView();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelinePageComponent.prototype, "dateFormat", {
        get: function () {
            return this._dateFormat;
        },
        set: function (value) {
            this._dateFormat = value;
            this.initView();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelinePageComponent.prototype, "dateFormatTop", {
        get: function () {
            return this._dateFormatTop;
        },
        set: function (value) {
            this._dateFormatTop = value;
            this.initView();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelinePageComponent.prototype, "disabled", {
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelinePageComponent.prototype, "showContent", {
        get: function () {
            return this._showContent;
        },
        set: function (value) {
            this._showContent = value;
            this._cdr.detectChanges();
        },
        enumerable: false,
        configurable: true
    });
    HorizontalTimelinePageComponent.pxToNumber = function (val) {
        return Number(val.replace('px', ''));
    };
    HorizontalTimelinePageComponent.getElementWidth = function (element) {
        var computedStyle = window.getComputedStyle(element);
        if (!computedStyle.width) {
            return 0;
        }
        return HorizontalTimelinePageComponent.pxToNumber(computedStyle.width);
    };
    HorizontalTimelinePageComponent.parentElement = function (element, tagName) {
        if (!element || !element.parentNode) {
            return null;
        }
        var parent = element.parentNode;
        while (true) {
            if (parent.tagName.toLowerCase() === tagName) {
                return parent;
            }
            parent = parent.parentNode;
            if (!parent) {
                return null;
            }
        }
    };
    HorizontalTimelinePageComponent.getTranslateValue = function (timeline) {
        var timelineStyle = window.getComputedStyle(timeline);
        var timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
            timelineStyle.getPropertyValue('-moz-transform') ||
            timelineStyle.getPropertyValue('-ms-transform') ||
            timelineStyle.getPropertyValue('-o-transform') ||
            timelineStyle.getPropertyValue('transform');
        var translateValue = 0;
        if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslateStr = timelineTranslate
                .split('(')[1]
                .split(')')[0]
                .split(',')[4];
            translateValue = Number(timelineTranslateStr);
        }
        return translateValue;
    };
    HorizontalTimelinePageComponent.setTransformValue = function (element, property, value) {
        element.style['-webkit-transform'] = property + '(' + value + ')';
        element.style['-moz-transform'] = property + '(' + value + ')';
        element.style['-ms-transform'] = property + '(' + value + ')';
        element.style['-o-transform'] = property + '(' + value + ')';
        element.style['transform'] = property + '(' + value + ')';
    };
    HorizontalTimelinePageComponent.dayDiff = function (first, second) {
        return Math.round(second.getTime() - first.getTime());
    };
    HorizontalTimelinePageComponent.minLapse = function (elements) {
        if (elements && elements.length && elements.length === 1) {
            return 0;
        }
        var result = 0;
        for (var i = 1; i < elements.length; i++) {
            var distance = HorizontalTimelinePageComponent.dayDiff(elements[i - 1].date, elements[i].date);
            result = result ? Math.min(result, distance) : distance;
        }
        return result;
    };
    HorizontalTimelinePageComponent.prototype.ngAfterViewInit = function () {
        this._cdr.detach();
        this._viewInitialized = true;
        this.initView();
    };
    HorizontalTimelinePageComponent.prototype.onScrollClick = function (event, forward) {
        event.preventDefault();
        this.updateSlide(this.eventsWrapperWidth, forward);
        this._cdr.detectChanges();
    };
    HorizontalTimelinePageComponent.prototype.onEventClick = function (event, selectedItem) {
        event.preventDefault();
        if (this._disabled) {
            return;
        }
        var element = event.target;
        // detect click on the a single event - show new event content
        var visibleItem = this._timelineElements[0];
        this._timelineElements.forEach(function (item) {
            if (item.selected && item !== selectedItem) {
                visibleItem = item;
                item.selected = false;
            }
        });
        this.selectedIndex = this._timelineElements.indexOf(selectedItem);
        selectedItem.selected = true;
        this.updateFilling(element);
        this._cdr.detectChanges();
    };
    HorizontalTimelinePageComponent.prototype.initTimeline = function (timeLines) {
        var eventsMinLapse = HorizontalTimelinePageComponent.minLapse(timeLines);
        // assign a left position to the single events along the timeline
        this.setDatePosition(timeLines, this._eventsMinDistance, eventsMinLapse);
        // assign a width to the timeline
        this.setTimelineWidth(timeLines, this._eventsMinDistance, eventsMinLapse);
        // the timeline has been initialize - show it
        this.loaded = true;
    };
    HorizontalTimelinePageComponent.prototype.updateSlide = function (timelineTotWidth, forward) {
        var translateValue = HorizontalTimelinePageComponent.getTranslateValue(this.eventsWrapper.nativeElement);
        if (forward) {
            this.translateTimeline(translateValue - this._timelineWrapperWidth +
                this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth);
        }
        else {
            this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
        }
    };
    HorizontalTimelinePageComponent.prototype.updateTimelinePosition = function (element) {
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = HorizontalTimelinePageComponent.pxToNumber(eventStyle.getPropertyValue('left'));
        var translateValue = HorizontalTimelinePageComponent.getTranslateValue(this.eventsWrapper.nativeElement);
        if (eventLeft > this._timelineWrapperWidth - translateValue) {
            this.translateTimeline(-eventLeft + this._timelineWrapperWidth / 2, this._timelineWrapperWidth - this.eventsWrapperWidth);
        }
    };
    HorizontalTimelinePageComponent.prototype.translateTimeline = function (value, totWidth) {
        // only negative translate value
        value = (value > 0) ? 0 : value;
        // do not translate more than timeline width
        value = (!(totWidth === null) && value < totWidth) ? totWidth : value;
        HorizontalTimelinePageComponent.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
        // update navigation arrows visibility
        this.prevLinkInactive = value === 0;
        this.nextLinkInactive = value === totWidth;
    };
    HorizontalTimelinePageComponent.prototype.setTimelineWidth = function (elements, width, eventsMinLapse) {
        var timeSpan = 100;
        if (elements.length > 1) {
            timeSpan = HorizontalTimelinePageComponent.dayDiff(elements[0].date, elements[elements.length - 1].date);
        }
        var timeSpanNorm = timeSpan / eventsMinLapse;
        timeSpanNorm = Math.round(timeSpanNorm) + 4;
        this.eventsWrapperWidth = timeSpanNorm * width;
        var aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
        this.updateFilling(aHref);
        this.updateTimelinePosition(aHref);
        return this.eventsWrapperWidth;
    };
    HorizontalTimelinePageComponent.prototype.updateFilling = function (element) {
        // change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = eventStyle.getPropertyValue('left');
        var eventWidth = eventStyle.getPropertyValue('width');
        var eventLeftNum = HorizontalTimelinePageComponent.pxToNumber(eventLeft) + HorizontalTimelinePageComponent.pxToNumber(eventWidth) / 2;
        var scaleValue = eventLeftNum / this.eventsWrapperWidth;
        HorizontalTimelinePageComponent.setTransformValue(this.fillingLine.nativeElement, 'scaleX', scaleValue);
    };
    HorizontalTimelinePageComponent.prototype.initView = function () {
        if (!this._viewInitialized) {
            return;
        }
        if (this._timelineElements && this._timelineElements.length) {
            for (var i = 0; i < this._timelineElements.length; i++) {
                if (this._timelineElements[i].selected) {
                    this.selectedIndex = i;
                    break;
                }
            }
            this.initTimeline(this._timelineElements);
        }
        this._cdr.detectChanges();
    };
    HorizontalTimelinePageComponent.prototype.setDatePosition = function (elements, min, eventsMinLapse) {
        var timelineEventsArray = this.timelineEvents.toArray();
        var i = 0;
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var component = elements_1[_i];
            var distance = HorizontalTimelinePageComponent.dayDiff(elements[0].date, component.date);
            var distanceNorm = Math.round(distance / eventsMinLapse);
            timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
            // span
            var span = timelineEventsArray[i].nativeElement.parentElement.children[1];
            var spanWidth = HorizontalTimelinePageComponent.getElementWidth(span);
            span.style.left = distanceNorm * min + spanWidth / 2 + 'px';
            i++;
        }
    };
    HorizontalTimelinePageComponent.ɵfac = function HorizontalTimelinePageComponent_Factory(t) { return new (t || HorizontalTimelinePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    HorizontalTimelinePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalTimelinePageComponent, selectors: [["app-horizontal-timeline-page"]], viewQuery: function HorizontalTimelinePageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eventsWrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fillingLine = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timelineEvents = _t);
        } }, inputs: { timelineWrapperWidth: "timelineWrapperWidth", eventsMinDistance: "eventsMinDistance", timelineElements: "timelineElements", dateFormat: "dateFormat", dateFormatTop: "dateFormatTop", disabled: "disabled", showContent: "showContent" }, decls: 17, vars: 13, consts: [[1, "cd-horizontal-timeline", 3, "ngClass"], [1, "timeline"], [1, "events-wrapper"], [1, "events"], ["eventsWrapper", ""], [4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "filling-line"], ["fillingLine", ""], [1, "cd-timeline-navigation"], [1, "prev", 3, "routerLink", "ngClass", "click"], [1, "next", 3, "routerLink", "ngClass", "click"], ["class", "events-content", 4, "ngIf"], [3, "routerLink", "ngClass", "click"], ["timelineEvents", ""], [1, "events-content"], [1, "text-bold-500"], [1, "text-muted", "mb-1"], [1, "lead"]], template: function HorizontalTimelinePageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HorizontalTimelinePageComponent_li_6_Template, 6, 8, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelinePageComponent_Template_a_click_11_listener($event) { return ctx.onScrollClick($event, false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prev");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelinePageComponent_Template_a_click_14_listener($event) { return ctx.onScrollClick($event, true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HorizontalTimelinePageComponent_div_16_Template, 3, 1, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx.loaded));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.eventsWrapperWidth, "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timelineElements);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c5, ctx.prevLinkInactive));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, ctx.nextLinkInactive));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showContent);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLXRpbWVsaW5lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contentState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'relative', 'z-index': 2, opacity: 1, 'left': '100%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('right => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => right', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => left', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('left => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                ])
            ] }, changeDetection: 0 });
    return HorizontalTimelinePageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalTimelinePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-horizontal-timeline-page',
                templateUrl: './horizontal-timeline-page.component.html',
                styleUrls: ['./horizontal-timeline-page.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contentState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            position: 'relative', 'z-index': 2, opacity: 1, 'left': '100%'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('right => active', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(100%)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                            ]))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => right', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(-100%)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                            ]))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => left', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(-100%)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
                            ]))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('left => active', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(100%)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                            ]))
                        ]),
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { eventsWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['eventsWrapper', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], fillingLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fillingLine', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], timelineEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['timelineEvents']
        }], timelineWrapperWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eventsMinDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timelineElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dateFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dateFormatTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MpGc":
/*!************************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-horizontal/timelines-horizontal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TimelinesHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinesHorizontalComponent", function() { return TimelinesHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-timeline-page/horizontal-timeline-page.component */ "LoT/");




var TimelinesHorizontalComponent = /** @class */ (function () {
    function TimelinesHorizontalComponent() {
        this.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae\n    ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae,\n    ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam\n    quisquam, quae, temporibus dolores porro doloribus.";
        this.timeline = [
            { date: new Date(2014, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
            { date: new Date(2014, 2, 28), title: 'Event title here', content: this.content },
            { date: new Date(2014, 3, 20), title: 'Event title here', content: this.content },
            { date: new Date(2014, 5, 20), title: 'Event title here', content: this.content },
            { date: new Date(2014, 7, 9), title: 'Event title here', content: this.content },
            { date: new Date(2014, 8, 30), title: 'Event title here', content: this.content },
            { date: new Date(2014, 9, 15), title: 'Event title here', content: this.content },
            { date: new Date(2014, 11, 1), title: 'Event title here', content: this.content },
            { date: new Date(2014, 12, 10), title: 'Event title here', content: this.content },
            { date: new Date(2015, 1, 19), title: 'Event title here', content: this.content },
            { date: new Date(2015, 3, 3), title: 'Event title here', content: this.content },
        ];
    }
    TimelinesHorizontalComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'Horizontal Timeline',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'Timelines',
                    'isLink': true,
                    'link': ''
                },
                {
                    'name': 'Timelines Horizontal',
                    'isLink': false
                }
            ]
        };
    };
    TimelinesHorizontalComponent.ɵfac = function TimelinesHorizontalComponent_Factory(t) { return new (t || TimelinesHorizontalComponent)(); };
    TimelinesHorizontalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelinesHorizontalComponent, selectors: [["app-timelines-horizontal"]], decls: 15, vars: 3, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-text"], [3, "timelineElements", "showContent"]], template: function TimelinesHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic Horizontal Timeline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This horizontal time line contain just date based post timeline.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-horizontal-timeline-page", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timelineElements", ctx.timeline)("showContent", true);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_2__["HorizontalTimelinePageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lbGluZXMtaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIn0= */"] });
    return TimelinesHorizontalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelinesHorizontalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timelines-horizontal',
                templateUrl: './timelines-horizontal.component.html',
                styleUrls: ['./timelines-horizontal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RkCL":
/*!*****************************************!*\
  !*** ./src/assets/images/gallery/3.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3.jpg");

/***/ }),

/***/ "SqSm":
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-right/timelines-right.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TimelinesRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinesRightComponent", function() { return TimelinesRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2_photoswipe */ "f5Ne");
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_services/chart.api */ "5YoL");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ "FhuM");















function TimelinesRightComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function TimelinesRightComponent_div_36_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.reloadProjectWorkOne($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "fieldset", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
} }
function TimelinesRightComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function TimelinesRightComponent_div_41_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.reloadProjectWorkTwo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "fieldset", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
} }
function TimelinesRightComponent_agm_marker_291_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "agm-marker", 118);
} if (rf & 2) {
    var m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", m_r7.lat)("longitude", m_r7.lng)("label", m_r7.label);
} }
var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
var TimelinesRightComponent = /** @class */ (function () {
    function TimelinesRightComponent(chartApiservice) {
        this.chartApiservice = chartApiservice;
        this.options = {
            close: false,
            expand: true,
            minimize: false,
            reload: true
        };
        this.lat = 40.650002;
        this.lng = -73.949997;
        this.markers = [
            {
                lat: this.lat,
                lng: this.lng,
                label: ''
            }
        ];
    }
    TimelinesRightComponent.prototype.getChordchart = function () {
        this.chartOption = {
            grid: {
                x: 40,
                x2: 40,
                y: 45,
                y2: 25
            },
            // Add tooltip
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // Add legend
            legend: {
                data: this.data['report'].data,
            },
            // Add custom colors
            color: ['#666EE8', '#FF9149', '#FF9966', '#FA8E57', '#FF637b', '#5175E0', '#A147F0', '#28D094', '#BABFC7'],
            // // Enable drag recalculate
            // calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Direct access',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Email marketing',
                    type: 'bar',
                    stack: 'advertising',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Advertising alliance',
                    type: 'bar',
                    stack: 'advertising',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video ads',
                    type: 'bar',
                    stack: 'advertising',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Search Engine',
                    type: 'bar',
                    stack: 'Total',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                },
                {
                    name: 'Google',
                    type: 'bar',
                    barWidth: 12,
                    stack: 'search engine',
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name: 'Safari',
                    type: 'bar',
                    stack: 'search engine',
                    data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name: 'Opera',
                    type: 'bar',
                    stack: 'search engine',
                    data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name: 'Firefox',
                    type: 'bar',
                    stack: 'search engine',
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        this.option = {
            legend: {
                data: ['Punch Card'],
                left: 'right'
            },
            polar: {},
            tooltip: {
                formatter: function (params) {
                    return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
                }
            },
            angleAxis: {
                type: 'category',
                data: hours,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            },
            radiusAxis: {
                type: 'category',
                data: days,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    rotate: 45
                }
            },
            series: [{
                    name: 'Punch Card',
                    type: 'scatter',
                    coordinateSystem: 'polar',
                    symbolSize: function (val) {
                        return val[2] * 2;
                    },
                    data: this.data['punchdata'].data,
                    animationDelay: function (idx) {
                        return idx * 5;
                    }
                }]
        };
    };
    TimelinesRightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image1 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image1.largeUrl = '../../../../../assets/images/gallery/1.jpg';
        this.image1.height = 3296;
        this.image1.width = 4934;
        this.image1.id = 0;
        this.image1.size = this.image1.width + "x" + this.image1.height;
        this.image1.thumbUrl = '../../../../../assets/images/gallery/1.jpg';
        this.image2 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image2.largeUrl = '../../../../../assets/images/gallery/2.jpg';
        this.image2.height = 3296;
        this.image2.width = 4934;
        this.image2.id = 1;
        this.image2.size = this.image2.width + "x" + this.image2.height;
        this.image2.thumbUrl = '../../../../../assets/images/gallery/2.jpg';
        this.image3 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image3.largeUrl = __webpack_require__(/*! ../../../../../assets/images/gallery/3.jpg */ "RkCL");
        this.image3.height = 3296;
        this.image3.width = 4934;
        this.image3.id = 2;
        this.image3.size = this.image2.width + "x" + this.image2.height;
        this.image3.thumbUrl = '../../../../../assets/images/gallery/3.jpg';
        this.image4 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image4.largeUrl = '../../../../../assets/images/gallery/4.jpg';
        this.image4.height = 3296;
        this.image4.width = 4934;
        this.image4.id = 3;
        this.image4.size = this.image4.width + "x" + this.image4.height;
        this.image4.thumbUrl = '../../../../../assets/images/gallery/4.jpg';
        this.image5 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image5.largeUrl = __webpack_require__(/*! ../../../../../assets/images/gallery/6.jpg */ "vJVE");
        this.image5.height = 3296;
        this.image5.width = 4934;
        this.image5.id = 4;
        this.image5.size = this.image5.width + "x" + this.image5.height;
        this.image5.thumbUrl = '../../../../../assets/images/gallery/5.jpg';
        this.image6 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image6.largeUrl = '../../../../../assets/images/gallery/6.jpg';
        this.image6.height = 3296;
        this.image6.width = 4934;
        this.image6.id = 5;
        this.image6.size = this.image6.width + "x" + this.image6.height;
        this.image6.thumbUrl = '../../../../../assets/images/gallery/6.jpg';
        this.image7 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image7.largeUrl = '../../../../../assets/images/gallery/7.jpg';
        this.image7.height = 3296;
        this.image7.width = 4934;
        this.image7.id = 6;
        this.image7.size = this.image7.width + "x" + this.image7.height;
        this.image7.thumbUrl = '../../../../../assets/images/gallery/7.jpg';
        this.image8 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image8.largeUrl = '../../../../../assets/images/gallery/8.jpg';
        this.image8.height = 3296;
        this.image8.width = 4934;
        this.image8.id = 7;
        this.image8.size = this.image8.width + "x" + this.image8.height;
        this.image8.thumbUrl = '../../../../../assets/images/gallery/8.jpg';
        this.image9 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image9.largeUrl = '../../../../../assets/images/gallery/9.jpg';
        this.image9.height = 3296;
        this.image9.width = 4934;
        this.image9.id = 8;
        this.image9.size = this.image9.width + "x" + this.image9.height;
        this.image9.thumbUrl = '../../../../../assets/images/gallery/9.jpg';
        this.image10 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image10.largeUrl = '../../../../../assets/images/gallery/10.jpg';
        this.image10.height = 3296;
        this.image10.width = 4934;
        this.image10.id = 9;
        this.image10.size = this.image10.width + "x" + this.image10.height;
        this.image10.thumbUrl = '../../../../../assets/images/gallery/10.jpg';
        this.image11 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image11.largeUrl = '../../../../../assets/images/gallery/11.jpg';
        this.image11.height = 3296;
        this.image11.width = 4934;
        this.image11.id = 10;
        this.image11.size = this.image11.width + "x" + this.image11.height;
        this.image11.thumbUrl = '../../../../../assets/images/gallery/11.jpg';
        this.image12 = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        this.image12.largeUrl = '../../../../../assets/images/gallery/12.jpg';
        this.image12.height = 3296;
        this.image12.width = 4934;
        this.image12.id = 11;
        this.image12.size = this.image12.width + "x" + this.image12.height;
        this.image12.thumbUrl = '../../../../../assets/images/gallery/12.jpg';
        this.zoom = 15;
        this.breadcrumb = {
            'mainlabel': 'Timeline Right',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'Timelines',
                    'isLink': true,
                    'link': ''
                },
                {
                    'name': 'Timelines Right',
                    'isLink': false
                }
            ]
        };
        this.data = this.chartApiservice.getTimelineData().subscribe(function (Response) {
            _this.data = Response;
            _this.getChordchart();
        });
    };
    TimelinesRightComponent.prototype.reloadProjectWorkOne = function () {
        var _this = this;
        this.blockUIProjectWorkOne.start('Loading..');
        setTimeout(function () {
            _this.blockUIProjectWorkOne.stop();
        }, 2500);
    };
    TimelinesRightComponent.prototype.reloadProjectWorkTwo = function () {
        var _this = this;
        this.blockUIProjectWorkTwo.start('Loading..');
        setTimeout(function () {
            _this.blockUIProjectWorkTwo.stop();
        }, 2500);
    };
    TimelinesRightComponent.ɵfac = function TimelinesRightComponent_Factory(t) { return new (t || TimelinesRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_4__["ChartApiService"])); };
    TimelinesRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimelinesRightComponent, selectors: [["app-timelines-right"]], decls: 298, vars: 25, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-header-right", "col-md-6", "col-12"], [1, "btn-group", "float-md-right"], [1, "dropdown-menu", "arrow"], [1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-calendar-check", "mr-1"], [1, "fa", "fa-cart-plus", "mr-1"], [1, "fa", "fa-life-ring", "mr-1"], [1, "dropdown-divider"], [1, "fa", "fa-cog", "mr-1"], [1, "content-body"], ["id", "timeline", 1, "timeline-right", "timeline-wrapper"], [1, "page-title", "text-center", "text-lg-right"], [1, "timeline"], [1, "timeline-line"], [1, "timeline-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "la", "la-calendar"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-red", "bg-lighten-1"], [1, "la", "la-plane"], ["class", "timeline-card card border-grey border-lighten-2", 4, "blockUI", "blockUIMessage"], [1, "la", "la-plus-square-o"], [1, "timeline-item", "mt-3"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../assets/images/portrait/small/avatar-s-14.png", "alt", "avatar"], [1, "timeline-card", "card", "border-grey", "border-lighten-2"], [1, "card-header"], [1, "card-title"], [3, "routerLink"], [1, "card-subtitle", "text-muted", "pt-1"], [1, "font-small-3"], [1, "card-content"], [1, "card-body", "row"], [1, "col-lg-6", "col-12"], [1, "embed-responsive", "embed-responsive-4by3"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]("https://player.vimeo.com/video/118589137?title=0&byline=0")], [1, "card-text", "m-0"], [1, "card-text"], [1, "list-inline", "mb-1"], [1, "pr-1"], [1, "text-muted", 3, "routerLink"], [1, "la", "la-heart-o"], [1, "la", "la-comments-o"], [1, "la", "la-share-alt"], [1, "card-footer", "px-0", "py-0"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "text", "placeholder", "Write comments...", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-message-square"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-success", "bg-lighten-1"], [1, "la", "la-bar-chart-o"], [1, "text-center", "pt-1"], [1, "timeline-date"], [1, "card-body"], [1, "chart-container"], ["echarts", "", 3, "options"], [1, "feather", "ft-calendar"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../assets/images/portrait/small/avatar-s-5.png", "alt", "avatar"], ["matchHeight", "card", 1, "row"], [1, "col-lg-8", "col-12"], [1, "timeline-card", "card", "bg-dark", "text-white"], ["src", "../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "bg-overlay"], [1, "card-title", "white"], [1, "col-lg-4", "col-12"], [1, "card"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "badge", "badge-pill", "bg-primary", "float-right"], [1, "badge", "badge-pill", "bg-info", "float-right"], [1, "badge", "badge-pill", "bg-warning", "float-right"], [1, "badge", "badge-pill", "bg-success", "float-right"], [1, "badge", "badge-pill", "bg-danger", "float-right"], [1, "card-link", 3, "routerLink"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Nullam facilisis fermentum", 1, "bg-teal", "bg-lighten-1"], [1, "la", "la-check"], [1, "row", "card-body"], [1, "list-group", "icheck-task"], ["type", "checkbox", "id", "input-1"], ["type", "checkbox", "id", "input-2", "checked", ""], ["type", "checkbox", "id", "input-3"], ["type", "checkbox", "id", "input-4", "disabled", "", "checked", ""], ["type", "checkbox", "id", "input-5"], ["type", "checkbox", "id", "input-6", "disabled", "", "checked", ""], ["echarts", "", 1, "height-400", "overflow-hidden", "echart-container", 3, "options"], [1, "la", "la-image"], [1, "card-body", "my-gallery"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-12"], [3, "image"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Moved to Brooklyn", 1, "bg-primary", "bg-lighten-1"], [1, "la", "la-map"], [3, "latitude", "longitude", "zoom", "zoomControl", "scrollwheel"], [3, "latitude", "longitude", "label", 4, "ngFor", "ngForOf"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "", 3, "routerLink"], [1, "card-subtitle", "text-muted", "mb-0", "pt-1"], ["mCardBody", ""], ["src", "../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "media"], [1, "media-left", "pr-1"], [1, "avatar", "avatar-online"], ["src", "../../../assets/images/portrait/small/avatar-s-2.png", "alt", "avatar"], [1, "media-body"], [1, "text-bold-600", "mb-0"], [1, "m-0"], ["src", "../../../assets/images/portrait/small/avatar-s-18.png", "alt", "avatar"], ["src", "../../../assets/images/portfolio/width-1200/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["src", "../../../assets/images/portrait/small/avatar-s-3.png", "alt", "avatar"], ["src", "../../../assets/images/portfolio/width-1200/portfolio-1.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["src", "../../../assets/images/portrait/small/avatar-s-1.png", "alt", "avatar"], [3, "latitude", "longitude", "label"]], template: function TimelinesRightComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Calender");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Timeline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Today");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TimelinesRightComponent_div_36_Template, 134, 1, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, TimelinesRightComponent_div_41_Template, 73, 1, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Sofia Orav");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "8 hours ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "iframe", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt! Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ul", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "span", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Like");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "span", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Share");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "fieldset", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "input", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Campaign Report");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "18 hours ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " 2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "img", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "img", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "h4", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Good Morning");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "p", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "26 Aug, 2016 at 2.00 A.M");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "h4", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "List Group");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Some quick example text to build on the card title and make up the bulk of the card's content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "ul", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Cras justo odio ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " Dapibus ac facilisis in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " Morbi leo risus ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "span", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, " Porta ac consectetur ac ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "span", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "8");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " Vestibulum at eros ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "a", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Card link");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "a", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Another link");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "h4", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Sofia Orav");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "18 June, 2016 at 4.50 P.M");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "ul", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "input", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Cras justo odio");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "input", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " Dapibus ac facilisis in");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "input", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, " Morbi leo risus");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "input", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, " Porta ac consectetur ac");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "input", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " Vestibulum at eros");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "input", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " Porta ac consectetur ac");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "p", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "fieldset", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "input", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, " 2015");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "i", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Media Gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "July 1, 2015");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "ngp-gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "ngp-gallery-item", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "ngp-lightbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, " 2014");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "span", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "i", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Moved to Brooklyn");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Jan 1, 2014");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "agm-map", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](291, TimelinesRightComponent_agm_marker_291_Template, 1, 3, "agm-marker", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, " Founded in 2012");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "projectWorkOne")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "projectWorkTwo")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.chartOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](99);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.option);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx.image12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("zoomControl", true)("scrollwheel", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.markers);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["ɵf"], ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["ɵa"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵf"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_3__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .my-gallery img{\r\n   max-width: 100% !important;\r\n  padding: .25rem;\r\n  background-color: #F4F5FA;\r\n  border: 1px solid #626E82;\r\n  border-radius: .25rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n[_nghost-%COMP%]     .my-gallery .img-thumbnail {\r\n  padding: .25rem;\r\n  background-color: #F4F5FA;\r\n  border: 1px solid #626E82;\r\n  border-radius: .25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lcy1yaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUNBO0dBQ0csMEJBQTBCO0VBQzNCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoidGltZWxpbmVzLXJpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubXktZ2FsbGVyeSBpbWd7XHJcbiAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IC4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5teS1nYWxsZXJ5IC5pbWctdGh1bWJuYWlsIHtcclxuICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGQTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufSJdfQ== */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('projectWorkOne'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TimelinesRightComponent.prototype, "blockUIProjectWorkOne", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('projectWorkTwo'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TimelinesRightComponent.prototype, "blockUIProjectWorkTwo", void 0);
    return TimelinesRightComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimelinesRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-timelines-right',
                templateUrl: './timelines-right.component.html',
                styleUrls: ['./timelines-right.component.css']
            }]
    }], function () { return [{ type: _services_chart_api__WEBPACK_IMPORTED_MODULE_4__["ChartApiService"] }]; }, { blockUIProjectWorkOne: [], blockUIProjectWorkTwo: [] }); })();


/***/ }),

/***/ "vJVE":
/*!*****************************************!*\
  !*** ./src/assets/images/gallery/6.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6.jpg");

/***/ }),

/***/ "zSMy":
/*!*************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines.module.ts ***!
  \*************************************************************/
/*! exports provided: TimelinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinesModule", function() { return TimelinesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _timelines_left_timelines_left_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timelines-left/timelines-left.component */ "Gh/Z");
/* harmony import */ var _timelines_right_timelines_right_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timelines-right/timelines-right.component */ "SqSm");
/* harmony import */ var _timelines_horizontal_timelines_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timelines-horizontal/timelines-horizontal.component */ "MpGc");
/* harmony import */ var _timelines_center_timelines_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timelines-center/timelines-center.component */ "+L7H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../partials/general/card/card.module */ "vj4e");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2_photoswipe */ "f5Ne");
/* harmony import */ var _timelines_horizontal_horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timelines-horizontal/horizontal-timeline-page/horizontal-timeline-page.component */ "LoT/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/environments/environment */ "AytR");






















var TimelinesModule = /** @class */ (function () {
    function TimelinesModule() {
    }
    TimelinesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TimelinesModule });
    TimelinesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TimelinesModule_Factory(t) { return new (t || TimelinesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_11__["NgxEchartsModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_9__["CardModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"],
                angular2_photoswipe__WEBPACK_IMPORTED_MODULE_12__["Angular2PhotoswipeModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_15__["BlockUIModule"].forRoot({
                    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_16__["BlockTemplateComponent"]
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].googleApiKey,
                    libraries: ['places']
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    {
                        path: 'timelines-center',
                        component: _timelines_center_timelines_center_component__WEBPACK_IMPORTED_MODULE_5__["TimelinesCenterComponent"]
                    },
                    {
                        path: 'timelines-left',
                        component: _timelines_left_timelines_left_component__WEBPACK_IMPORTED_MODULE_2__["TimelinesLeftComponent"]
                    },
                    {
                        path: 'timelines-right',
                        component: _timelines_right_timelines_right_component__WEBPACK_IMPORTED_MODULE_3__["TimelinesRightComponent"]
                    },
                    {
                        path: 'timelines-horizontal',
                        component: _timelines_horizontal_timelines_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["TimelinesHorizontalComponent"]
                    }
                ]),
            ]] });
    return TimelinesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TimelinesModule, { declarations: [_timelines_left_timelines_left_component__WEBPACK_IMPORTED_MODULE_2__["TimelinesLeftComponent"], _timelines_right_timelines_right_component__WEBPACK_IMPORTED_MODULE_3__["TimelinesRightComponent"], _timelines_horizontal_timelines_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["TimelinesHorizontalComponent"], _timelines_center_timelines_center_component__WEBPACK_IMPORTED_MODULE_5__["TimelinesCenterComponent"],
        _timelines_horizontal_horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalTimelinePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_11__["NgxEchartsModule"],
        _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_9__["CardModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"],
        angular2_photoswipe__WEBPACK_IMPORTED_MODULE_12__["Angular2PhotoswipeModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_15__["BlockUIModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelinesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_11__["NgxEchartsModule"],
                    _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_9__["CardModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"],
                    angular2_photoswipe__WEBPACK_IMPORTED_MODULE_12__["Angular2PhotoswipeModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_15__["BlockUIModule"].forRoot({
                        template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_16__["BlockTemplateComponent"]
                    }),
                    _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                        apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].googleApiKey,
                        libraries: ['places']
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                        {
                            path: 'timelines-center',
                            component: _timelines_center_timelines_center_component__WEBPACK_IMPORTED_MODULE_5__["TimelinesCenterComponent"]
                        },
                        {
                            path: 'timelines-left',
                            component: _timelines_left_timelines_left_component__WEBPACK_IMPORTED_MODULE_2__["TimelinesLeftComponent"]
                        },
                        {
                            path: 'timelines-right',
                            component: _timelines_right_timelines_right_component__WEBPACK_IMPORTED_MODULE_3__["TimelinesRightComponent"]
                        },
                        {
                            path: 'timelines-horizontal',
                            component: _timelines_horizontal_timelines_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["TimelinesHorizontalComponent"]
                        }
                    ]),
                ],
                declarations: [_timelines_left_timelines_left_component__WEBPACK_IMPORTED_MODULE_2__["TimelinesLeftComponent"], _timelines_right_timelines_right_component__WEBPACK_IMPORTED_MODULE_3__["TimelinesRightComponent"], _timelines_horizontal_timelines_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["TimelinesHorizontalComponent"], _timelines_center_timelines_center_component__WEBPACK_IMPORTED_MODULE_5__["TimelinesCenterComponent"],
                    _timelines_horizontal_horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalTimelinePageComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-content-pages-timelines-timelines-module.js.map