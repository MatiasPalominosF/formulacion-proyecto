(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-applications-email-email-module"],{

/***/ "WTTS":
/*!***************************************************************!*\
  !*** ./src/app/content/applications/email/email.component.ts ***!
  \***************************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _services_application_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/application-api.service */ "wW7e");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/quill-initialize-service.service */ "lnAJ");
/* harmony import */ var quill_mention__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill-mention */ "g9P2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-quill */ "alHs");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");

















var _c0 = function (a0, a1) { return { "active": a0, "": a1 }; };
function EmailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_div_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var email_r4 = ctx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.showEmailMenu(email_r4.Id, ctx_r5.emailMenuList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var email_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, email_r4.isSelected === true, email_r4.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](email_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](email_r4.budgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](email_r4.budge);
} }
function EmailComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_div_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var email_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.showEmailMenu(email_r7.Id, ctx_r8.emailLable); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var email_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, email_r7.isSelected === true, email_r7.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", email_r7.bulletClass, " d-inline-block rounded-circle ");
} }
function EmailComponent_li_146_i_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 161);
} }
function EmailComponent_li_146_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmailComponent_li_146_Template_input_ngModelChange_4_listener($event) { var contact_r10 = ctx.$implicit; return contact_r10.isSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_li_146_Template_span_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var contact_r10 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.emailFavorite($event, contact_r10.emailId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_li_146_Template_div_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.showEmail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, EmailComponent_li_146_i_25_Template, 1, 0, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r10 = ctx.$implicit;
    var i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contact_r10.mediaClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "checkboxsmall", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", contact_r10.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "checkboxsmall", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contact_r10.starClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "emailstar-icon" + contact_r10.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](contact_r10.starIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", contact_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r10.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", contact_r10.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contact_r10.showicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("bullet bullet-sm ", contact_r10.bullet, " d-inline-block rounded-circle");
} }
function EmailComponent_div_223_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_div_223_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); var email_r17 = ctx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.showMassage($event, email_r17.emailId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "small", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_div_223_Template_span_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); var email_r17 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.emailFavorite($event, email_r17.emailId); })("click", function EmailComponent_div_223_Template_span_click_17_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_div_223_Template_a_click_21_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Add to another project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Create follow up task");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Attached Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ul", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "small", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "small", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var email_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "emailThread" + email_r17.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "headingCollapse5" + email_r17.emailId)("data-target", "collapse5" + email_r17.emailId)("aria-expanded", email_r17.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", email_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](email_r17.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" <", email_r17.email, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](email_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](email_r17.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "email-icon" + email_r17.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "collapse5" + email_r17.emailId)("aria-labelledby", "headingCollapse5" + email_r17.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](email_r17.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r17.descrition, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r17.descrition_detail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r17.sender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r17.sender_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", email_r17.image_icon1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r17.file_name1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", email_r17.image_icon2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", email_r17.file_name2, "");
} }
var _c1 = function () { return { height: "80px" }; };
var _c2 = function () { return { height: "100px" }; };
var Email = /** @class */ (function () {
    function Email(emailId, mediaClass, starClass, starIcon, image, time, title, message, showicon, bullet) {
        this.emailId = emailId;
        this.mediaClass = mediaClass;
        this.starClass = starClass;
        this.starIcon = starIcon;
        this.image = image;
        this.time = time;
        this.title = title;
        this.message = message;
        this.showicon = showicon;
        this.bullet = bullet;
    }
    return Email;
}());
var EmailHistory = /** @class */ (function () {
    function EmailHistory(emailId, username, email, image, date, title, message, descrition, descrition_detail, sender, sender_name, iconClass, image_icon1, file_name1, image_icon2, file_name2) {
        this.emailId = emailId;
        this.username = username;
        this.email = email;
        this.image = image;
        this.date = date;
        this.title = title;
        this.message = message;
        this.descrition = descrition;
        this.descrition_detail = descrition_detail;
        this.sender = sender;
        this.sender_name = sender_name;
        this.iconClass = iconClass;
        this.image_icon1 = image_icon1;
        this.file_name1 = file_name1;
        this.image_icon2 = image_icon2;
        this.file_name2 = file_name2;
    }
    return EmailHistory;
}());
var EmailMenu = /** @class */ (function () {
    function EmailMenu(Id, name, icon, budge, budgeClass, budgeIcon, isSelected) {
        this.Id = Id;
        this.name = name;
        this.icon = icon;
        this.budge = budge;
        this.budgeClass = budgeClass;
        this.budgeIcon = budgeIcon;
        this.isSelected = isSelected;
    }
    return EmailMenu;
}());
var EmailLable = /** @class */ (function () {
    function EmailLable(Id, name, isSelected, bulletClass) {
        this.Id = Id;
        this.name = name;
        this.isSelected = isSelected;
        this.bulletClass = bulletClass;
    }
    return EmailLable;
}());
var EmailComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param ApplicationApiService     emailApiService
     * @param Renderer2                 renderer
     */
    function EmailComponent(emailApiService, renderer, QuillInitializeServiceServicec, fb) {
        var _this = this;
        this.emailApiService = emailApiService;
        this.renderer = renderer;
        this.QuillInitializeServiceServicec = QuillInitializeServiceServicec;
        this.config = { wheelPropagation: true };
        this.isHidden = false;
        this.isShown = true;
        this.emailList = [];
        this.emailDisplayList = [];
        this.emailMenuList = [];
        this.temp = [];
        this.temp2 = this.emailList;
        this.isCollapsed = false;
        this.selectAll = false;
        this.blured = false;
        this.focused = false;
        this.hide = false;
        this.htmlText = 'Type Something';
        this.atValues = [
            { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
            { id: 2, value: 'Patrik Sjölin' }
        ];
        this.hashValues = [
            { id: 3, value: 'Fredrik Sundqvist 2' },
            { id: 4, value: 'Patrik Sjölin 2' }
        ];
        this.quillConfig = {
            toolbar: '.toolbar1',
            autoLink: true,
            mention: {
                allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
                mentionDenotationChars: ['@', '#'],
                source: function (searchTerm, renderList, mentionChar) {
                    var values;
                    if (mentionChar === '@') {
                        values = _this.atValues;
                    }
                    else {
                        values = _this.hashValues;
                    }
                    if (searchTerm.length === 0) {
                        renderList(values, searchTerm);
                    }
                    else {
                        var matches = [];
                        for (var i = 0; i < values.length; i++) {
                            if (values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) {
                                matches.push(values[i]);
                                renderList(matches, searchTerm);
                            }
                        }
                    }
                },
            },
            keyboard: {
                bindings: {
                    enter: {
                        key: 13,
                        handler: function (range, context) {
                            console.log('enter');
                            return true;
                        }
                    }
                }
            }
        };
        this.emailquillConfig = {
            toolbar: '.toolbar',
            autoLink: true,
            mention: {
                allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
                mentionDenotationChars: ['@', '#'],
                source: function (searchTerm, renderList, mentionChar) {
                    var values;
                    if (mentionChar === '@') {
                        values = _this.atValues;
                    }
                    else {
                        values = _this.hashValues;
                    }
                    if (searchTerm.length === 0) {
                        renderList(values, searchTerm);
                    }
                    else {
                        var matches = [];
                        for (var i = 0; i < values.length; i++) {
                            if (values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) {
                                matches.push(values[i]);
                                renderList(matches, searchTerm);
                            }
                        }
                    }
                },
            },
        };
        this.form = fb.group({
            editor: ['']
        });
    }
    /**
     * OnInit
     */
    EmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailApiService.getEmailData().subscribe(function (Response) {
            _this.emailArray = Response;
            _this.emailDisplayList = Response.EmailHistory;
            _this.emailMenuList = Response.EmailMenu;
            _this.emailLable = Response.EmailLable;
            _this.email = _this.emailArray.EmailHistory[1];
            _this.emailList.push(new Email(1, 'media mail-read', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-1.png', '4.14 AM', 'Open source project public release 👍', 'Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary ', false, 'gradient-mint'));
            _this.emailList.push(new Email(2, 'media mail-read', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-2.png', '2.15 AM', 'Ecommerce website Paypal integration 😃', ' We will start the new application development soon once this will be completed. ', false, 'gradient-danger'));
            _this.emailList.push(new Email(3, 'media', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-3.png', '11.18AM', 'How To Set Intentions That Energize You', ' I will provide you more details after this Saturday. Hope that will be fine for you.. ', true, 'gradient-mint'));
            _this.emailList.push(new Email(4, 'media', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-4.png', 'Yesterday', 'Harness The Power Of Words In Your Life', 'When the equation, first to ability the forwards, the a but travelling, outlines sentinels bad expand to goodness....', true, 'gradient-warning'));
            _this.emailList.push(new Email(5, 'media mail-read', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-5.png', '24 Feb', 'Helen Keller A Teller And A Seller', 'Thanks for your feedback ! Here`s a new layout for a new Modern Admin theme.', true, 'gradient-warning'));
            _this.emailList.push(new Email(6, 'media mail-read', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-6.png', '15 March', 'Use Your Reset Button To Change Your Vibration 🎉', 'Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary', false, 'gradient-info'));
            _this.emailList.push(new Email(7, 'media', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-7.png', '12-07-2019', 'Will connect you', 'Hi Kelly!', false, 'gradient-mint'));
            _this.emailList.push(new Email(8, 'media mail-read', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-8.png', '03-29-2019', 'Harness The Power Of Words In Your Life', 'Hope your like it, or feel free to comment, feedback or rebound !', false, 'gradient-danger'));
            _this.emailList.push(new Email(9, 'media ', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-9.png', '19 Jun', 'Hypnosis 12 Steps To Acquire Mind Power', 'Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of geared from next...', false, 'gradient-info'));
            _this.emailList.push(new Email(10, 'media ', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-10.png', '21 Mar', ' Know Yourself Your Inner Power ', ' Hope your like it, or feel free to comment, feedback or rebound.', false, 'gradient-warning'));
        });
        this.form
            .controls
            .editor
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
            .subscribe(function (data) {
        });
    };
    /**
   * Search email
   *
   * @param event     Convert value uppercase to lowercase;
   */
    EmailComponent.prototype.updateFilter = function (event) {
        var value = event.target.value.toLowerCase();
        this.emailList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.emailList);
        // filter our data
        var temp = this.emailList.filter(function (d) {
            return d.name.toLowerCase().indexOf(value) !== -1 || !value;
        });
        // update the rows
        this.emailList = temp;
        // Whenever the filter changes, always go back to the first page
    };
    /**
     * Overlay add/remove fuction in responsive
     *
     * @param event     Overlay click event
     */
    EmailComponent.prototype.contentOverlay = function (event) {
        var toggleIcon = document.getElementById('email-app-menu');
        var toggle = document.getElementById('content-overlay');
        if (event.currentTarget.className === 'content-overlay show') {
            this.renderer.removeClass(toggleIcon, 'show');
            this.renderer.removeClass(toggle, 'show');
        }
    };
    /**
     * Add overlay when open sidebar
     *
     * @param event     Content overlay
     */
    EmailComponent.prototype.contentRightSidebar = function (event) {
        var toggle = document.getElementById('content-right');
        if (event.currentTarget.className === 'media _media border-0 ng-star-inserted active') {
            this.renderer.addClass(toggle, 'show');
        }
    };
    /**
     * Remove overlay when close sidebar
     *
     * @param event     Content overlay
     */
    EmailComponent.prototype.contentRight = function (event) {
        var toggle = document.getElementById('content-right');
        if (event.currentTarget.className === 'btn btn-primary go-back') {
            this.renderer.removeClass(toggle, 'show');
        }
    };
    /**
     * Open Media-body
     *
     * @param event   Mail Read
     */
    EmailComponent.prototype.showEmail = function (event) {
        var toggleIcon = document.getElementById('app-details');
        if (event.currentTarget.className === 'media-body') {
            this.renderer.addClass(toggleIcon, 'show');
        }
        else if (event.currentTarget.className === 'ficon feather ft-chevron-left font-medium-4 align-middle') {
            this.renderer.removeClass(toggleIcon, 'show');
        }
    };
    /**
     *
     * @'param' event
     * @'param' emailId
     */
    EmailComponent.prototype.showMassage = function (event, emailId) {
        for (var i = 1; i <= this.emailDisplayList.length; i++) {
            if (emailId === i) {
                var toggleIcon = document.getElementById('headingCollapse5' + emailId);
                var toggle = document.getElementById('collapse5' + emailId);
                var toggleHeader = document.getElementById('emailThread' + emailId);
                if (event.currentTarget.className === 'card collapse-header ng-star-inserted') {
                    this.renderer.addClass(toggle, 'show');
                    this.renderer.addClass(toggleHeader, 'open');
                    this.renderer.removeClass(toggleIcon, 'collapsed');
                    this.emailDisplayList[i - 1].isCollapsed = true;
                }
                else if (event.currentTarget.className === 'card collapse-header ng-star-inserted open') {
                    this.renderer.removeClass(toggle, 'show');
                    this.renderer.removeClass(toggleHeader, 'open');
                    this.renderer.addClass(toggleIcon, 'collapsed');
                    this.emailDisplayList[i - 1].isCollapsed = false;
                }
            }
        }
    };
    /**
    * Add overlay when open sidebar
    *
    * @param event    Content overlay
    */
    EmailComponent.prototype.showComposeSidebar = function (event) {
        var toggleIcon = document.getElementById('compose-sidebar');
        var toggleSidebar = document.getElementById('sidebar-left');
        var toggleOverlay = document.getElementById('app-content-overlay');
        if (event.currentTarget.className === 'btn btn-danger btn-glow btn-block my-2 compose-btn') {
            this.renderer.addClass(toggleIcon, 'show');
            this.renderer.removeClass(toggleSidebar, 'show');
            this.renderer.addClass(toggleOverlay, 'show');
        }
        else if (event.currentTarget.className === 'btn btn-danger btn-glow btn-block my-2 compose-btn show') {
            this.renderer.removeClass(toggleIcon, 'show');
        }
    };
    /**
    * Remove overlay when open sidebar
    *
    * @param event    Content overlay
    */
    EmailComponent.prototype.showCompose = function (event) {
        var toggleIcon = document.getElementById('compose-sidebar');
        var toggleOverlay = document.getElementById('app-content-overlay');
        if (event.currentTarget.className === 'close close-icon' || 'app-content-overlay') {
            this.renderer.removeClass(toggleIcon, 'show');
            this.renderer.removeClass(toggleOverlay, 'show');
        }
    };
    /**
   * Add overlay when open sidebar
   *
   * @param event     Content overlay
   */
    EmailComponent.prototype.showSidebar = function (event) {
        var toggleIcon = document.getElementById('sidebar-left');
        var toggle = document.getElementById('app-content-overlay');
        if (event.currentTarget.className === 'sidebar-toggle d-block d-lg-none') {
            this.renderer.addClass(toggleIcon, 'show');
            this.renderer.addClass(toggle, 'show');
        }
        else if (event.currentTarget.className === 'sidebar-close-icon' || 'app-content-overlay') {
            this.renderer.removeClass(toggleIcon, 'show');
            this.renderer.removeClass(toggle, 'show');
        }
    };
    /**
     * Filter Email
     *
     * @param term    search term
     */
    EmailComponent.prototype.search = function (term) {
        var searchTerm = term.currentTarget.value;
        if (searchTerm !== '') {
            this.emailList = this.emailList.filter(function (result) {
                if (result && searchTerm) {
                    if (result.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                        result.message.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                        return true;
                    }
                    return false;
                }
            });
        }
        else {
            this.emailList = this.temp2;
        }
    };
    EmailComponent.prototype.selectAllEmails = function () {
        for (var i = 0; i < this.emailList.length; i++) {
            if (this.selectAll) {
                this.emailList[i].isSelected = false;
            }
            else {
                this.emailList[i].isSelected = true;
            }
        }
    };
    EmailComponent.prototype.deleteCheckedRow = function () {
        var index = 0;
        var removedIndex = [];
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.emailList);
        for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
            var row = temp_1[_i];
            if (row.isSelected === true) {
                removedIndex.push(index);
            }
            index++;
        }
        for (var i = removedIndex.length - 1; i >= 0; i--) {
            temp.splice(removedIndex[i], 1);
        }
        this.emailList = temp;
        this.selectAll = false;
    };
    EmailComponent.prototype.showEmailMenu = function (Id, emailMenu) {
        for (var j = 0; j < emailMenu.length; j++) {
            for (var i = 0; i < this.emailMenuList.length; i++) {
                for (var k = 0; k < this.emailLable.length; k++) {
                    if (emailMenu[j].name === this.emailMenuList[i].name) {
                        if (Id !== this.emailMenuList[i].Id) {
                            this.emailMenuList[i].isSelected = false;
                        }
                        if (Id === this.emailMenuList[i].Id) {
                            this.emailMenuList[i].isSelected = true;
                            this.emailLable[k].isSelected = false;
                        }
                    }
                    else if (emailMenu[j].name === this.emailLable[k].name) {
                        if (Id !== this.emailLable[k].Id) {
                            this.emailLable[k].isSelected = false;
                        }
                        if (Id === this.emailLable[k].Id) {
                            this.emailLable[k].isSelected = true;
                            this.emailMenuList[i].isSelected = false;
                        }
                    }
                }
            }
        }
        for (var _i = 0, _a = this.emailMenuList; _i < _a.length; _i++) {
            var friend = _a[_i];
            if (friend.Id === Id) {
                break;
            }
        }
    };
    EmailComponent.prototype.focus = function () {
        this.focused = true;
        this.blured = false;
    };
    EmailComponent.prototype.blur = function () {
        this.focused = false;
        this.blured = true;
    };
    EmailComponent.prototype.setControl = function () {
        this.form.setControl('editor', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('test - new Control'));
    };
    /**
    * Filter Email
    *
    * @ param event   warning Class
    * @ param emailId
    */
    EmailComponent.prototype.emailFavorite = function (event, emailId) {
        for (var i = 1; i <= this.emailDisplayList.length; i++) {
            if (emailId === i) {
                var emailIcon = document.getElementById('email-icon' + emailId);
                var emailstarIcon = document.getElementById('emailstar-icon' + emailId);
                if (event.currentTarget.className === 'favorite') {
                    this.renderer.addClass(emailIcon, 'warning');
                    this.renderer.addClass(emailstarIcon, 'warning');
                }
                else if (event.currentTarget.className === 'favorite warning') {
                    this.renderer.removeClass(emailIcon, 'warning');
                    this.renderer.removeClass(emailstarIcon, 'warning');
                }
            }
        }
    };
    EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_application_api_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_6__["QuillInitializeServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
    EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], viewQuery: function EmailComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.isHidden = _t.first);
        } }, decls: 248, vars: 23, consts: [[1, "app-content", "content"], ["id", "sidebar-left", 1, "sidebar-left"], [1, "sidebar"], [1, "sidebar-content", "email-app-sidebar", "d-flex"], [1, "sidebar-close-icon", 3, "click"], [1, "ficon", "feather", "ft-x"], [1, "email-app-menu"], [1, "form-group", "form-group-compose"], ["type", "button", "id", "compose-btn", 1, "btn", "btn-danger", "btn-glow", "btn-block", "my-2", "compose-btn", 3, "click"], [1, "ficon", "feather", "ficon", "feather", "ft-plus"], ["fxFlex", "auto", 1, "sidebar-menu-list", 3, "perfectScrollbar"], ["class", "list-group list-group-messages", 4, "ngFor", "ngForOf"], [1, "sidebar-label"], ["class", "list-group list-group-labels ", 4, "ngFor", "ngForOf"], ["id", "compose-sidebar", "fxFlex", "auto", 1, "compose-new-mail-sidebar", 3, "perfectScrollbar"], [1, "card", "mb-0", "shadow-none", "quill-wrapper", "p-0"], [1, "card-header"], ["id", "emailCompose", 1, "card-title"], ["type", "button", "id", "showCompose", 1, "close", "close-icon", 3, "click"], ["action", "", "id", "compose-form"], [1, "card-content"], [1, "card-body", "pt-0"], [1, "form-group", "pb-50"], ["for", "emailfrom"], ["type", "text", "id", "emailfrom", "placeholder", "user@example.com", "disabled", "", 1, "form-control"], [1, "form-label-group", "mb-1"], ["type", "email", "id", "emailTo", "placeholder", "To", "required", "", 1, "form-control"], ["type", "text", "id", "emailSubject", "placeholder", "Subject", 1, "form-control"], ["type", "text", "id", "emailCC", "placeholder", "CC", 1, "form-control"], ["type", "text", "id", "emailBCC", "placeholder", "BCC", 1, "form-control"], [1, "snow-container", "border", "rounded", "p-50"], [1, "default-editor"], [1, "row"], [1, "col-12"], [3, "styles", "modules", "onFocus", "onBlur"], [1, "toolbar1"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], [1, "form-group", "mt-2"], [1, "custom-file"], ["type", "file", "id", "emailAttach", 1, "custom-file-input"], ["for", "emailAttach", 1, "custom-file-label"], [1, "card-footer", "border-0", "d-flex", "justify-content-end", "pt-0"], ["type", "reset", 1, "btn", "btn-secondary", "cancel-btn", "mr-1", 3, "click"], [1, "ficon", "feather", "ft-x", "mr-25"], [1, "d-sm-inline", "d-none"], ["type", "submit", 1, "btn-send", "btn", "btn-danger", "btn-glow"], [1, "ficon", "feather", "ft-play", "mr-25"], [1, "content-right"], [1, "content-header", "row"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-body"], ["id", "app-content-overlay", 1, "app-content-overlay", 3, "click"], [1, "email-app-area"], [1, "email-app-list-wrapper"], [1, "email-app-list"], [1, "email-action"], [1, "action-left", "d-flex", "align-items-center"], [1, "custom-control", "custom-checkbox", "selectAll", "mr-50"], ["type", "checkbox", "id", "selectAll", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "selectAll", 1, "custom-control-label"], [1, "list-inline", "m-0", "d-flex"], [1, "list-inline-item", "mail-delete"], ["type", "button", 1, "btn", "btn-icon", "action-icon", 3, "click"], [1, "ficon", "feather", "ft-trash-2"], [1, "list-inline-item", "mail-unread"], ["type", "button", 1, "btn", "btn-icon", "action-icon"], [1, "ficon", "feather", "ft-mail"], [1, "list-inline-item"], [1, "dropdown"], ["ngbDropdown", "", 1, "d-inline-block", 3, "open", "autoClose"], ["type", "button", "id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "dropdown-toggle", "btn", "btn-icon", "action-icon"], [1, "ficon", "feather", "ft-folder", "mr-0"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "inboxDropdown"], [1, "dropdown-item", 3, "routerLink"], [1, "ficon", "feather", "ft-edit"], [1, "ficon", "feather", "ft-info"], ["type", "button", "id", "tag", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "ropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "dropdown-toggle", "action-icon"], [1, "ficon", "feather", "ft-tag", "mr-0"], ["aria-labelledby", "tag"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "tagDropdown"], [1, "dropdown-item", "align-items-center", 3, "routerLink"], [1, "bullet", "bullet-sm", "gradient-mint", "d-inline-block", "rounded-circle"], [1, "bullet", "bullet-sm", "gradient-primary", "d-inline-block", "rounded-circle"], [1, "bullet", "bullet-sm", "gradient-warning", "d-inline-block", "rounded-circle"], [1, "bullet", "bullet-sm", "gradient-danger", "d-inline-block", "rounded-circle"], [1, "bullet", "bullet-sm", "gradient-info", "d-inline-block", "rounded-circle"], [1, "action-right", "d-flex", "flex-grow-1", "align-items-center", "justify-content-around"], [1, "email-fixed-search", "flex-grow-1"], [1, "sidebar-toggle", "d-block", "d-lg-none", 3, "click"], [1, "ficon", "feather", "ft-align-justify"], [1, "form-group", "position-relative", "has-icon-left", "m-0"], ["type", "text", "id", "email-search", "placeholder", "Search email", 1, "form-control", 3, "keyup"], [1, "form-control-position"], [1, "ficon", "feather", "ft-search"], [1, "d-none", "d-sm-block"], [1, "btn", "btn-icon", "email-pagination-prev", "d-none", "d-sm-block"], [1, "ficon", "feather", "ft-chevron-left"], [1, "btn", "btn-icon", "email-pagination-next", "d-none", "d-sm-block"], [1, "ficon", "feather", "ft-chevron-right"], [1, "email-user-list", "list-group", 3, "perfectScrollbar"], [1, "users-list-wrapper", "media-list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "no-results"], [1, "ficon", "feather", "ft-info", "font-large-2"], ["id", "app-details", 1, "email-app-details"], [1, "email-detail-header"], [1, "email-header-left", "d-flex", "align-items-center", "mb-1"], [1, "go-back", "mr-50"], [1, "ficon", "feather", "ft-chevron-left", "font-medium-4", "align-middle", 3, "click"], [1, "email-detail-title", "font-weight-normal", "mb-0"], [1, "badge", "badge-light-danger", "badge-pill", "ml-1", "bg-1"], [1, "email-header-right", "mb-1", "ml-2", "pl-1"], [1, "list-inline", "m-0"], [1, "btn", "btn-icon", "action-icon"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "listDropdown"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "taglistDropdown"], [1, "no-of-list", "d-none", "d-sm-block", "ml-1"], [1, "btn", "btn-icon", "email-pagination-prev", "action-icon"], [1, "btn", "btn-icon", "email-pagination-next", "action-icon"], ["fxFlex", "auto", 1, "email-scroll-area", 3, "perfectScrollbar"], [1, "collapsible", "email-detail-head"], ["class", "card collapse-header", "role", "tablist", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "px-2", "mb-4"], [1, "col-12", "px-0"], [1, "card", "shadow-none", "border", "rounded"], [1, "card-body", "quill-wrapper", "emailquillConfig"], [1, "snow-container"], ["placeholder", "Enter Text", 3, "styles", "modules", "onFocus", "onBlur"], [1, "emailtoolbar"], [1, "toolbar"], [1, "ql-image"], [1, "btn", "btn-primary", "send-btn"], [1, "d-none", "d-sm-inline"], [1, "list-group", "list-group-messages"], ["id", "inbox-menu", 1, "list-group-item", 3, "ngClass", "click"], [1, "d-inline", "mr-25"], [1, "list-group", "list-group-labels"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", 3, "routerLink", "ngClass", "click"], [1, "user-action"], [1, "checkbox-con", "mr-25"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "id", "ngModelChange"], [1, "custom-control-label", 3, "for"], [3, "click"], [1, "pr-50"], [1, "avatar"], ["alt", "avtar img holder", 3, "src"], [1, "media-body", 3, "click"], [1, "user-details"], [1, "mail-items"], [1, "list-group-item-text", "text-truncate"], [1, "mail-meta-item"], [1, "float-right"], [1, "mail-date"], [1, "mail-message"], [1, "list-group-item-text", "truncate", "mb-0"], ["class", "ficon feather ft-paperclip mr-50", 4, "ngIf"], [1, "ficon", "feather", "ft-paperclip", "mr-50"], ["role", "tablist", 1, "card", "collapse-header", 3, "click"], ["data-toggle", "collapse", "role", "tab", "aria-controls", "collapse5", 1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "collapse-title", "media"], [1, "pr-1"], [1, "avatar", "mr-75"], ["alt", "avtar img holder", "width", "30", "height", "30", 3, "src"], [1, "media-body", "mt-25"], [1, "text-primary"], [1, "text-muted", "d-block"], [1, "information", "d-sm-flex", "d-none", "align-items-center"], [1, "text-muted", "mr-50"], [1, "favorite", 3, "click"], [1, "ficon", "feather", "ft-star", "mr-25"], ["id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "dropdown-toggle", 3, "click"], [1, "ficon", "feather", "ft-more-vertical", "mr-0"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right"], ["role", "tabpanel", 1, "collapse"], [1, "card-body", "py-1"], [1, "text-bold-500"], [1, "mb-0"], [1, "card-footer", "pt-0", "border-top"], [1, "list-unstyled", "mb-0"], [1, "cursor-pointer", "pb-25"], ["height", "30", "alt", "psd.png", 3, "src"], [1, "text-muted", "ml-1", "attchement-text"], [1, "cursor-pointer"], ["height", "30", "alt", "sketch.png", 3, "src"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_span_click_4_listener($event) { return ctx.showSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_8_listener($event) { return ctx.showComposeSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Compose ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EmailComponent_div_12_Template, 7, 12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Labels");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmailComponent_div_15_Template, 4, 8, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "New Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_21_listener($event) { return ctx.showCompose($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "from");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "section", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "quill-editor", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFocus", function EmailComponent_Template_quill_editor_onFocus_43_listener() { return ctx.focus(); })("onBlur", function EmailComponent_Template_quill_editor_onBlur_43_listener() { return ctx.blur(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Bold");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Italic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Underline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Strike");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Attach file");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_59_listener($event) { return ctx.showCompose($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Send");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_div_click_72_listener($event) { return ctx.showCompose($event); })("click", function EmailComponent_Template_div_click_72_listener($event) { return ctx.showSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "input", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_79_listener($event) { return ctx.selectAll = $event; })("click", function EmailComponent_Template_input_click_79_listener() { return ctx.selectAllEmails(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "label", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ul", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_83_listener() { return ctx.deleteCheckedRow(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Draft");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "i", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Spam");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Trash");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "span", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Work");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "span", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Misc");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Family");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "span", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " Design");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_div_click_132_listener($event) { return ctx.showSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "fieldset", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "input", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function EmailComponent_Template_input_keyup_135_listener($event) { return ctx.search($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "1-10 of 653");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "button", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "button", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "ul", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, EmailComponent_li_146_Template, 27, 21, "li", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "i", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "No Items Found");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "span", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "i", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailComponent_Template_i_click_155_listener($event) { return ctx.showEmail($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "h5", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " Advertising Internet Online ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "span", 114);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "PRODUCT");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 115);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "ul", 116);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "button", 117);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "button", 117);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "button", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "i", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 118);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "i", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Draft");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "i", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Spam");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Trash");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "i", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 119);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "span", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Work");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "span", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Misc");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Family");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "a", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "span", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, " Design");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "span", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "1-10 of 653");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "button", 121);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "button", 122);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "i", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 123);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 124);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](223, EmailComponent_div_223_Template, 55, 23, "div", 125);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 126);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 127);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 128);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 129);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 130);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Reply to Lois Jimenez");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "quill-editor", 131);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFocus", function EmailComponent_Template_quill_editor_onFocus_232_listener() { return ctx.focus(); })("onBlur", function EmailComponent_Template_quill_editor_onBlur_232_listener() { return ctx.blur(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 132);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 133);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Bold");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Italic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Underline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Strike");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "button", 134);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "button", 135);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "i", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "span", 136);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, " Send");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emailMenuList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emailLable);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1))("modules", ctx.quillConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectAll);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emailList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emailDisplayList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c2))("modules", ctx.emailquillConfig);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["[_nghost-%COMP%]     .mr-50, .mx-50[_ngcontent-%COMP%] {\r\n  margin-right: .5rem!important;\r\n}\r\n[_nghost-%COMP%]     .mr-25, .mx-25[_ngcontent-%COMP%] {\r\n  margin-right: .25rem!important;\r\n}\r\n[_nghost-%COMP%]     .pr-50, .px-50[_ngcontent-%COMP%] {\r\n  padding-right: .5rem!important;\r\n}\r\n[_nghost-%COMP%]     .content-right .email-app-list-wrapper .email-app-list .email-user-list .users-list-wrapper li {\r\n  border-top: 1px solid #E4E5EC !important;\r\n}\r\n[_nghost-%COMP%]     .app-content .content-right {\r\n  width: calc(100% - 300px) !important;\r\n  background-color: #fff;\r\n}\r\n@media (max-width: 768px){\r\n  .app-content[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%] {\r\n    width: calc(100% - 0px) !important;\r\n    background-color: #fff;\r\n  }\r\n}\r\n[_nghost-%COMP%]     .ps__thumb-y {\r\n  background-color: #aaa;\r\n  border-radius: 6px;\r\n  position: absolute;\r\n}\r\n[_nghost-%COMP%]     .content-right .email-app-details .email-scroll-area {\r\n   overflow-x: hidden !important;\r\n}\r\n[_nghost-%COMP%]     .d-block {\r\n text-align: left;\r\n}\r\n[_nghost-%COMP%]     .d-flex {\r\n  display: flex!important;\r\n}\r\n[_nghost-%COMP%]     .btn-link {\r\n  font-weight: 400;\r\n  color:#6b6f82 !important;\r\n  text-decoration: none;\r\n}\r\n[_nghost-%COMP%]     .email-detail-head .collapse-header .card-header {\r\n   background-color: transparent !important;\r\n}\r\n[_nghost-%COMP%]     .py-1 {\r\n  background-color: #f4f5fa;\r\n}\r\n[_nghost-%COMP%]     .ps {\r\n  overflow: hidden!important;\r\n}\r\n[_nghost-%COMP%]     .content.app-content {\r\n  overflow-y: hidden !important;\r\n}\r\n[_nghost-%COMP%]      .tagDropdown {\r\n  transform: translate3d(-118px, -16px, 0px) !important; \r\n  top: 8px;\r\n }\r\n@media (max-width: 768px){ \r\n   .tagDropdown[_ngcontent-%COMP%] {\r\n  transform: translate3d(-98px, -64px, 0px) !important; \r\n  top: 8px;\r\n }\r\n}\r\n[_nghost-%COMP%]      .listDropdown {\r\n  transform: translate3d(-123px, 30px, 0px) !important; \r\n  }\r\n@media (max-width: 768px){ \r\n   .listDropdown[_ngcontent-%COMP%] {\r\n  transform: translate3d(-88px, -65px, 0px) !important; \r\n  top: 8px;\r\n }\r\n}\r\n[_nghost-%COMP%]      .taglistDropdown {\r\n  transform: translate3d(-123px, -8px, 0px) !important; \r\n  }\r\n@media (max-width: 768px){ \r\n   .taglistDropdown[_ngcontent-%COMP%] {\r\n  transform: translate3d(-124px, -65px, 0px) !important; \r\n  top: 8px;\r\n }\r\n}\r\n[_nghost-%COMP%]      .dropdown .dropdown-menu .dropdown-item {\r\n  padding: 10px 17px !important;\r\n }\r\n[_nghost-%COMP%]     .bg-1{\r\n  background-color: #666ee8;\r\n\r\n}\r\n[_nghost-%COMP%]     .badge {\r\n  display: inline-block;\r\n  padding: .35em .4em;\r\n  font-size: 80%;\r\n  text-align: center;\r\n  vertical-align: baseline;\r\n  border-radius: .25rem;\r\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n}\r\n[_nghost-%COMP%]     .badge-pill {\r\n  padding-right: .6em;\r\n  padding-left: .6em;\r\n  border-radius: 10rem;\r\n}\r\n[_nghost-%COMP%]     .show>.inboxDropdown {\r\n  transform: translate3d(-118px, 30px, 0px) !important;\r\n  }\r\n@media (max-width: 768px){\r\n    .show[_ngcontent-%COMP%] > .inboxDropdown[_ngcontent-%COMP%] {\r\n      transform: translate3d(-106px, -65px, 0px) !important;\r\n      }\r\n  }\r\n[_nghost-%COMP%]      .app-content .sidebar .email-app-sidebar {\r\n    width: 300px !important;\r\n  }\r\n[_nghost-%COMP%]      .app-content .quill-wrapper .snow-container .emailtoolbar {\r\n  float: right;\r\n  margin-bottom: 12px;\r\n }\r\n[_nghost-%COMP%]      .app-content .quill-wrapper .snow-container .send-btn {\r\n  height: 38px;\r\n }\r\n[_nghost-%COMP%]      .gradient-mint {\r\n  background-image: linear-gradient(45deg,#28d094,#28d094)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .gradient-primary{\r\n  background-image: linear-gradient(45deg,#666ee8,#666ee8)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .gradient-warning {\r\n  background-image: linear-gradient(45deg,#ff9149,#ff9149)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .gradient-danger {\r\n  background-image: linear-gradient(45deg,#ff4961,#ff4961)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .gradient-info {\r\n  background-image: linear-gradient(45deg,#1e9ff2,#1e9ff2)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .list-group .list-group-messages :hover {\r\n  color: #0c84d1 !important;\r\n}\r\n[_nghost-%COMP%]     .mr-75, .mx-75[_ngcontent-%COMP%] {\r\n  margin-right: .75rem!important;\r\n}\r\n.list-inline-item[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 0.7rem !important; \r\n}\r\n@media (max-width: 768px){\r\n  .list-inline-item[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 0.25rem !important; \r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO0lBQ0Usa0NBQWtDO0lBQ2xDLHNCQUFzQjtFQUN4QjtBQUNGO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0dBQ0csNkJBQTZCO0FBQ2hDO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtHQUNHLHdDQUF3QztBQUMzQztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UscURBQXFEO0VBQ3JELFFBQVE7Q0FDVDtBQUNBO0dBQ0U7RUFDRCxvREFBb0Q7RUFDcEQsUUFBUTtDQUNUO0FBQ0Q7QUFDQTtFQUNFLG9EQUFvRDtFQUNwRDtBQUNEO0dBQ0U7RUFDRCxvREFBb0Q7RUFDcEQsUUFBUTtDQUNUO0FBQ0Q7QUFDQTtFQUNFLG9EQUFvRDtFQUNwRDtBQUNEO0dBQ0U7RUFDRCxxREFBcUQ7RUFDckQsUUFBUTtDQUNUO0FBQ0Q7QUFDQztFQUNDLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsOEhBQThIO0FBQ2hJO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usb0RBQW9EO0VBQ3BEO0FBQ0E7SUFDRTtNQUNFLHFEQUFxRDtNQUNyRDtFQUNKO0FBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7QUFDQTtFQUNDLFlBQVk7Q0FDYjtBQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7QUFDQTtFQUNDLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0FBQ0E7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtBQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7QUFDQTtFQUNDLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0FBQ0E7RUFDQyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRTtJQUNFLGdDQUFnQztFQUNsQztBQUNGIiwiZmlsZSI6ImVtYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1yLTUwLCAubXgtNTAge1xyXG4gIG1hcmdpbi1yaWdodDogLjVyZW0haW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubXItMjUsIC5teC0yNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW0haW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucHItNTAsIC5weC01MCB7XHJcbiAgcGFkZGluZy1yaWdodDogLjVyZW0haW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY29udGVudC1yaWdodCAuZW1haWwtYXBwLWxpc3Qtd3JhcHBlciAuZW1haWwtYXBwLWxpc3QgLmVtYWlsLXVzZXItbGlzdCAudXNlcnMtbGlzdC13cmFwcGVyIGxpIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U0RTVFQyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtcmlnaHQge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgLmFwcC1jb250ZW50IC5jb250ZW50LXJpZ2h0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBzX190aHVtYi15IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXJpZ2h0IC5lbWFpbC1hcHAtZGV0YWlscyAuZW1haWwtc2Nyb2xsLWFyZWEge1xyXG4gICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmQtYmxvY2sge1xyXG4gdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmQtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGluayB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjojNmI2ZjgyICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZW1haWwtZGV0YWlsLWhlYWQgLmNvbGxhcHNlLWhlYWRlciAuY2FyZC1oZWFkZXIge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnB5LTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZmE7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LmFwcC1jb250ZW50IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwICAudGFnRHJvcGRvd24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTExOHB4LCAtMTZweCwgMHB4KSAhaW1wb3J0YW50OyBcclxuICB0b3A6IDhweDtcclxuIH1cclxuIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7IFxyXG4gICAudGFnRHJvcGRvd24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTk4cHgsIC02NHB4LCAwcHgpICFpbXBvcnRhbnQ7IFxyXG4gIHRvcDogOHB4O1xyXG4gfVxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAgLmxpc3REcm9wZG93biB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTIzcHgsIDMwcHgsIDBweCkgIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsgXHJcbiAgIC5saXN0RHJvcGRvd24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTg4cHgsIC02NXB4LCAwcHgpICFpbXBvcnRhbnQ7IFxyXG4gIHRvcDogOHB4O1xyXG4gfVxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAgLnRhZ2xpc3REcm9wZG93biB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTIzcHgsIC04cHgsIDBweCkgIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsgXHJcbiAgIC50YWdsaXN0RHJvcGRvd24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEyNHB4LCAtNjVweCwgMHB4KSAhaW1wb3J0YW50OyBcclxuICB0b3A6IDhweDtcclxuIH1cclxufVxyXG4gOmhvc3QgOjpuZy1kZWVwICAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTdweCAhaW1wb3J0YW50O1xyXG4gfVxyXG46aG9zdCA6Om5nLWRlZXAgLmJnLTF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlODtcclxuXHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IC4zNWVtIC40ZW07XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuYmFkZ2UtcGlsbCB7XHJcbiAgcGFkZGluZy1yaWdodDogLjZlbTtcclxuICBwYWRkaW5nLWxlZnQ6IC42ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5zaG93Pi5pbmJveERyb3Bkb3duIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMThweCwgMzBweCwgMHB4KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnNob3c+LmluYm94RHJvcGRvd24ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDZweCwgLTY1cHgsIDBweCkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgIC5hcHAtY29udGVudCAuc2lkZWJhciAuZW1haWwtYXBwLXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG46aG9zdCA6Om5nLWRlZXAgIC5hcHAtY29udGVudCAucXVpbGwtd3JhcHBlciAuc25vdy1jb250YWluZXIgLmVtYWlsdG9vbGJhciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiB9XHJcbiA6aG9zdCA6Om5nLWRlZXAgIC5hcHAtY29udGVudCAucXVpbGwtd3JhcHBlciAuc25vdy1jb250YWluZXIgLnNlbmQtYnRuIHtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiB9XHJcbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1taW50IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzI4ZDA5NCwjMjhkMDk0KSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuIH1cclxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM2NjZlZTgsIzY2NmVlOCkhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2ZmOTE0OSwjZmY5MTQ5KSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuIH1cclxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNmZjQ5NjEsI2ZmNDk2MSkhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzFlOWZmMiwjMWU5ZmYyKSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuIH1cclxuIDpob3N0IDo6bmctZGVlcCAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtbWVzc2FnZXMgOmhvdmVyIHtcclxuICBjb2xvcjogIzBjODRkMSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubXItNzUsIC5teC03NSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWlubGluZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogMC43cmVtICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5saXN0LWlubGluZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return EmailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-email',
                templateUrl: './email.component.html',
                styleUrls: ['./email.component.css'],
            }]
    }], function () { return [{ type: _services_application_api_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_6__["QuillInitializeServiceService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"]]
        }], isHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "uquJ":
/*!************************************************************!*\
  !*** ./src/app/content/applications/email/email.module.ts ***!
  \************************************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.component */ "WTTS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "alHs");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-custom-validators */ "8M/b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ "tPw2");














var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailModule });
    EmailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailModule_Factory(t) { return new (t || EmailModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"].forRoot(),
                ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_10__["ArchwizardModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _email_component__WEBPACK_IMPORTED_MODULE_2__["EmailComponent"]
                    }
                ])
            ]] });
    return EmailModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailModule, { declarations: [_email_component__WEBPACK_IMPORTED_MODULE_2__["EmailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomFormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        angular_archwizard__WEBPACK_IMPORTED_MODULE_10__["ArchwizardModule"],
        src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"].forRoot(),
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomFormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                    angular_archwizard__WEBPACK_IMPORTED_MODULE_10__["ArchwizardModule"],
                    src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _email_component__WEBPACK_IMPORTED_MODULE_2__["EmailComponent"]
                        }
                    ])
                ],
                declarations: [_email_component__WEBPACK_IMPORTED_MODULE_2__["EmailComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-content-applications-email-email-module.js.map