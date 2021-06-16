(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-applications-contacts-contacts-module"],{

/***/ "+Y+/":
/*!*********************************************************************!*\
  !*** ./src/app/content/applications/contacts/contacts.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");












function ContactsComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactsComponent_ng_template_56_Template_input_change_1_listener() { var allRowsSelected_r12 = ctx.allRowsSelected; var selectFn_r13 = ctx.selectFn; return selectFn_r13(!allRowsSelected_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var allRowsSelected_r12 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", allRowsSelected_r12);
} }
function ContactsComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactsComponent_ng_template_57_Template_input_change_1_listener($event) { var onCheckboxChangeFn_r18 = ctx.onCheckboxChangeFn; return onCheckboxChangeFn_r18($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var rowIndex_r17 = ctx.rowIndex;
    var isSelected_r19 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "select", rowIndex_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", isSelected_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "select", rowIndex_r17, "");
} }
function ContactsComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
} if (rf & 2) {
    var row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("avatar avatar-sm avatar-", row_r21.isActive, " rounded-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", row_r21.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r21.name, " ");
} }
function ContactsComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r22 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r22.email);
} }
function ContactsComponent_ng_template_64_img_0_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_64_img_0_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); var row_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row; var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.favoriteChange(row_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_64_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_64_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); var row_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row; var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.favoriteChange(row_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContactsComponent_ng_template_64_img_0_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactsComponent_ng_template_64_img_1_Template, 1, 0, "img", 82);
} if (rf & 2) {
    var row_r23 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !row_r23.isFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r23.isFavorite);
} }
function ContactsComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_66_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); var row_r32 = ctx.row; var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](127); return ctx_r33.editTableDataModal(_r7, row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_66_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); var row_r32 = ctx.row; var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.deleteRow(row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_66_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); var row_r32 = ctx.row; var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](127); return ctx_r36.editTableDataModal(_r7, row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_66_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); var row_r32 = ctx.row; var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.deleteRow(row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_126_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_126_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactsComponent_ng_template_126_div_12_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r41.errors.required);
} }
function ContactsComponent_ng_template_126_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_126_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_126_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactsComponent_ng_template_126_div_16_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactsComponent_ng_template_126_div_16_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r43.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r43.errors.email);
} }
var _c0 = function (a0) { return { "is-invalid": a0 }; };
function ContactsComponent_ng_template_126_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 102, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactsComponent_ng_template_126_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.onUpdate(_r40, ctx_r49.selectedContact.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_126_Template_button_click_5_listener() { var d_r39 = ctx.dismiss; return d_r39("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 110, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactsComponent_ng_template_126_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.selectedContact.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContactsComponent_ng_template_126_div_12_Template, 2, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 113, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactsComponent_ng_template_126_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.selectedContact.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ContactsComponent_ng_template_126_div_16_Template, 3, 2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 115, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactsComponent_ng_template_126_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.selectedContact.phone = $event; })("keyup", function ContactsComponent_ng_template_126_Template_input_keyup_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.onFormat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.selectedContact.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, _r40.submitted && _r41.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r40.submitted && _r41.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.selectedContact.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, _r40.submitted && _r43.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r40.submitted && _r43.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.selectedContact.phone);
} }
function ContactsComponent_ng_template_128_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_128_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactsComponent_ng_template_128_div_12_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r59.errors.required);
} }
function ContactsComponent_ng_template_128_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_128_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactsComponent_ng_template_128_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactsComponent_ng_template_128_div_16_div_1_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactsComponent_ng_template_128_div_16_div_2_Template, 2, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r61.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r61.errors.email);
} }
function ContactsComponent_ng_template_128_Template(rf, ctx) { if (rf & 1) {
    var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 102, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactsComponent_ng_template_128_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r67.addNewContact(_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add New Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_ng_template_128_Template_button_click_5_listener() { var d_r57 = ctx.dismiss; return d_r57("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactsComponent_ng_template_128_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r70.contactName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContactsComponent_ng_template_128_div_12_Template, 2, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 128, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactsComponent_ng_template_128_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r71.contactEmail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ContactsComponent_ng_template_128_div_16_Template, 3, 2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 130, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactsComponent_ng_template_128_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r72.contactPhone = $event; })("keyup", function ContactsComponent_ng_template_128_Template_input_keyup_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.onFormat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactsComponent_ng_template_128_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r74.contactFavorite = $event; })("change", function ContactsComponent_ng_template_128_Template_input_change_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.addFavoriteImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactsComponent_ng_template_128_Template_input_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.preview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Choose Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Add New");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.contactName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, _r58.submitted && _r59.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r58.submitted && _r59.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.contactEmail)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, _r58.submitted && _r61.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r58.submitted && _r61.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.contactPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.contactFavorite);
} }
var Contact = /** @class */ (function () {
    function Contact(id, name, email, phone, image, isFavorite, isActive) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.image = image;
        this.isFavorite = isFavorite;
        this.isActive = isActive;
    }
    return Contact;
}());
var ContactsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param NgbModal  modal;
     * @param Renderer2  _renderer
     */
    function ContactsComponent(modal, _renderer) {
        this.modal = modal;
        this._renderer = _renderer;
        this.columns = [];
        this.rows = [];
        this.name = 'Angular';
        this.placement = 'bottom-right';
        this.addModal = null;
        this.editModal = null;
        this.selected = [];
        this.temp = [];
        this.temp2 = this.rows;
        this.config = {};
        this.closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * OnInit
     */
    ContactsComponent.prototype.ngOnInit = function () {
        this.rows.push(new Contact(1, 'Scott Marsh', 'scott@gmail.com', '(954)-654-5641', '../../../assets/images/portrait/small/avatar-s-5.png', false, 'online'));
        this.rows.push(new Contact(2, 'Russell Bry', 'russell@gmail.com', '(235)-654-5642', '../../../assets/images/portrait/small/avatar-s-3.png', false, 'busy'));
        this.rows.push(new Contact(3, 'james john', 'john@gmail.com', '(125)-654-5643', '../../../assets/images/portrait/small/avatar-s-1.png', true, 'away'));
        this.rows.push(new Contact(4, 'Cynth Tuck', 'tuck@gmail.com', '(974)-654-5644', '../../../assets/images/portrait/small/avatar-s-4.png', false, 'busy'));
        this.rows.push(new Contact(5, 'Margi Govan', 'govan@gmail.com', '(954)-654-5645', '../../../assets/images/portrait/small/avatar-s-6.png', true, 'online'));
        this.rows.push(new Contact(6, 'Eugene Wood', 'wood@gmail.com', '(987)-654-5646', '../../../assets/images/portrait/small/avatar-s-9.png', false, 'busy'));
        this.rows.push(new Contact(7, 'Eric Marshall', 'eric@gmail.com', '(545)-654-5647', '../../../assets/images/portrait/small/avatar-s-7.png', false, 'online'));
    };
    /**
     * Add new contact
     *
     * @param addTableDataModalContent      Id of the add contact modal;
     */
    ContactsComponent.prototype.addTableDataModal = function (addTableDataModalContent) {
        this.addModal = this.modal.open(addTableDataModalContent, {
            windowClass: 'animated fadeInDown'
        });
        this.contactFlag = true;
    };
    /**
     * Edit selected contact row.
     *
     * @param editTableDataModalContent     Id of the edit contact model.
     * @param row     The row which needs to be edited.
     */
    ContactsComponent.prototype.editTableDataModal = function (editTableDataModalContent, row) {
        this.selectedContact = Object.assign({}, row);
        this.editModal = this.modal.open(editTableDataModalContent, {
            windowClass: 'animated fadeInDown'
        });
        this.contactFlag = false;
    };
    /**
     * Selected contact
     *
     * @param selected      Selected contact;
     */
    ContactsComponent.prototype.onSelectContact = function (_a) {
        var _b;
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
    };
    /**
     * Search contact from contact table
     *
     * @param event     Convert value uppercase to lowercase;
     */
    ContactsComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        this.rows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2);
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        var temp = this.rows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
        this.table.offset = 0;
    };
    /**
     * Choose contact image
     *
     * @param event     Select contact image;
     */
    ContactsComponent.prototype.preview = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.contactImage = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    /**
     * Delete contact row
     * @param row     Selected row for delete contact
     */
    ContactsComponent.prototype.deleteRow = function (row) {
        var index = 0;
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
            var tempRow = temp_1[_i];
            if (tempRow.id === row.id) {
                temp.splice(index, 1);
                break;
            }
            index++;
        }
        this.rows = temp;
    };
    /**
     * Update contact details
     *
     * @param editForm      Edit form for values check
     * @param id      Id match to the selected row Id
     */
    ContactsComponent.prototype.onUpdate = function (editForm, id) {
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.id === id && editForm.valid === true) {
                row.name = this.selectedContact['name'];
                row.email = this.selectedContact['email'];
                row.phone = this.selectedContact['phone'];
                this.editModal.close(editForm.resetForm);
                break;
            }
        }
    };
    /**
     * Contact changed to favorite or non-favorite
     *
     * @param row     Row of the favorite contact
     */
    ContactsComponent.prototype.favoriteChange = function (row) {
        if (row.isFavorite) {
            row.isFavorite = row.isFavorite ? false : true;
        }
        else {
            row.isFavorite = true;
        }
    };
    /**
     * Delete selected contact
     */
    ContactsComponent.prototype.deleteCheckedRow = function () {
        var index = 0;
        var removedIndex = [];
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        for (var _i = 0, temp_2 = temp; _i < temp_2.length; _i++) {
            var row = temp_2[_i];
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
    /**
     * favorite set when add contact
     *
     * @param event     favorite set on click event
     */
    ContactsComponent.prototype.addFavoriteImage = function (event) {
        if (event.target.checked === true) {
            this.contactFavorite = true;
        }
        else {
            this.contactFavorite = false;
        }
    };
    /**
     * New contact add to the table
     *
     * @param addForm     Add contact form
     */
    ContactsComponent.prototype.addNewContact = function (addForm) {
        if (this.contactImage == null) {
            this.contactImage = '../../../assets/images/portrait/small/default.png';
        }
        else {
            this.contactImage = this.contactImage;
        }
        if (this.contactactive === undefined) {
            this.contactactive = 'away';
        }
        else {
            this.contactactive = this.contactactive;
        }
        /**
         * Add contact if valid addform value
         */
        if (addForm.valid === true) {
            this.rows.push(new Contact(this.rows.length + 1, this.contactName, this.contactEmail, this.contactPhone, this.contactImage, this.contactFavorite, this.contactactive));
            this.rows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
            addForm.reset();
            this.addModal.close(addForm.resetForm);
        }
    };
    /**
     * Set the phone number format
     */
    ContactsComponent.prototype.onFormat = function () {
        if (this.contactFlag === true) {
            this.value = this.contactPhone;
        }
        else if (this.contactFlag === false) {
            this.value = this.selectedContact['phone'];
        }
        var country, city, number;
        switch (this.value.length) {
            case 6:
                country = 1;
                city = this.value.slice(0, 3);
                number = this.value.slice(3);
                break;
            case 7:
                country = this.value[0];
                city = this.value.slice(1, 4);
                number = this.value.slice(4);
                break;
            case 8:
                country = this.value.slice(0, 3);
                city = this.value.slice(3, 5);
                number = this.value.slice(5);
                break;
            default:
                return this.value;
        }
        if (country === 1) {
            country = '';
        }
        number = number.slice(0, 3) + '-' + number.slice(3);
        var no = '(' + city + ')' + '-' + number;
        if (this.contactFlag === true) {
            this.contactPhone = no;
        }
        else if (this.contactFlag === false) {
            this.selectedContact['phone'] = no;
        }
    };
    /**
     * Sidebar open/close in responsive
     *
     * @param event     Sidebar open/close
     */
    ContactsComponent.prototype.sidebar = function (event) {
        var toggleIcon = document.getElementById('sidebar-left');
        var toggle = document.getElementById('content-overlay');
        if (event.currentTarget.className === 'sidebar-toggle d-block d-lg-none') {
            this._renderer.addClass(toggleIcon, 'show');
            this._renderer.addClass(toggle, 'show');
        }
    };
    /**
     * Overlay add/remove fuction in responsive
     *
     * @param event     Overlay click event
     */
    ContactsComponent.prototype.contentOverlay = function (event) {
        var toggleIcon = document.getElementById('sidebar-left');
        var toggle = document.getElementById('content-overlay');
        if (event.currentTarget.className === 'content-overlay show') {
            this._renderer.removeClass(toggleIcon, 'show');
            this._renderer.removeClass(toggle, 'show');
        }
    };
    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], viewQuery: function ContactsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, outputs: { closeModalEvent: "closeModalEvent" }, decls: 130, vars: 25, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-detached", "content-right"], [1, "content-body"], ["id", "content-overlay", 1, "content-overlay", 3, "click"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "bug-list-search"], [1, "bug-list-search-content"], [1, "sidebar-toggle", "d-block", "d-lg-none", 3, "click"], [1, "feather", "ft-menu", "font-large-1"], ["action", ""], [1, "position-relative"], ["type", "text", "id", "search-contacts", "placeholder", "Search contacts...", 1, "form-control", 3, "keyup"], [1, "form-control-position"], [1, "la", "la-search", "text-size-base", "text-muted", "la-rotate-270"], [1, "card-head"], [1, "card-header"], [1, "card-title"], [1, "heading-elements", "mt-0"], [1, "btn", "btn-primary", "btn-sm", "gap_contact", 3, "click"], [1, "d-md-none", "d-block", "feather", "ft-plus", "white"], [1, "d-md-block", "d-none"], ["ngbDropdown", "", 1, "d-inline-block", "dropdown", "gap_contact", 3, "placement"], ["id", "btnSearchDrop1", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", "ngbDropdownToggle", "", 1, "btn", "btn-warning", "dropdown-toggle", "dropdown-menu-right", "btn-sm"], [1, "feather", "ft-download-cloud", "white"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "mt-1"], [1, "dropdown-item"], [1, "feather", "ft-upload"], [1, "feather", "ft-download"], [1, "feather", "ft-shuffle"], [1, "card-content"], [1, "col-sm-12"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "pull-right"], ["type", "search", 2, "padding", "8px", "margin", "15px auto", "width", "200px", "height", "calc(1.875rem + 2px)", "border-radius", "0.21rem", "border", "1px solid #babfc7", 3, "keyup"], ["fxFlex", "auto", 1, "bootstrap", "row", "contacts-table", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "selected", "selectionType", "perfectScrollbar", "select"], ["table", ""], [3, "flexGrow", "minWidth", "maxWidth"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name", 3, "flexGrow", "minWidth"], ["name", "Email", 3, "flexGrow", "minWidth"], ["name", "Phone", 3, "flexGrow", "minWidth"], ["name", "Favorite", 3, "flexGrow", "minWidth", "cellClass"], ["name", "Actions", 3, "flexGrow", "minWidth"], ["id", "sidebar-left", "fxFlex", "auto", 1, "sidebar-detached", "sidebar-left", 3, "perfectScrollbar"], [1, "sidebar"], [1, "bug-list-sidebar-content"], [1, "media", "p-1"], [1, "media-left", "pr-1"], [1, "avatar", "avatar-sm", "avatar-online", "rounded-circle"], ["src", "../../../assets/images/portrait/small/avatar-s-1.png", "alt", "avatar"], [1, "icon"], [1, "media-body", "media-middle"], [1, "media-heading"], [1, "card-body", "border-top-blue-grey", "border-top-lighten-5"], [1, "list-group"], [1, "list-group-item", "active", "active", 3, "routerLink"], [1, "list-group-item", "list-group-item-action", 3, "routerLink"], [1, "lead"], [1, "list-group-item"], [1, "badge", "badge-primary", "badge-pill", "float-right"], [1, "info", 3, "routerLink"], [1, "badge", "badge-info", "badge-pill", "float-right"], [1, "badge", "badge-warning", "badge-pill", "float-right"], [1, "badge", "badge-success", "badge-pill", "float-right"], [1, "list-group-item", "info", 3, "routerLink"], ["editTableDataModalContent", ""], ["addTableDataModalContent", ""], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "selectAll", 1, "custom-control-input", 3, "checked", "change"], ["for", "selectAll", 1, "custom-control-label"], [1, "custom-control", "custom-checkbox", "_center"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"], [3, "src"], [3, "routerLink"], ["src", "../../../assets/images/raty/star-off.png", "class", "favoriteChange", 3, "click", 4, "ngIf"], ["src", "../../../assets/images/raty/star-on.png", "class", "favoriteChange", 3, "click", 4, "ngIf"], ["src", "../../../assets/images/raty/star-off.png", 1, "favoriteChange", 3, "click"], ["src", "../../../assets/images/raty/star-on.png", 1, "favoriteChange", 3, "click"], [1, "primary", "edit", "mr-1", "mrless", 3, "routerLink", "click"], [1, "la", "la-pencil"], [1, "danger", "delete", "mr-1", "mrless"], [1, "la", "la-trash-o", 3, "click"], ["ngbDropdown", "", "placement", "left", 1, "dropdown"], ["id", "btnSearchDrop27", "ngbDropdownToggle", "", "id", "dropdownBasic1", 1, "mrless", 3, "routerLink"], [1, "la", "la-ellipsis-v"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item", "edit", "space", 3, "routerLink", "click"], [1, "feather", "ft-edit-2"], [1, "dropdown-item", "delete", "space", 3, "routerLink", "click"], [1, "feather", "ft-trash-2"], [1, "dropdown-item", "space", 3, "routerLink"], [1, "feather", "ft-plus-circle", "primary"], [1, "feather", "ft-plus-circle", "info"], [1, "feather", "ft-plus-circle", "warning"], [1, "feather", "ft-plus-circle", "success"], [3, "ngSubmit"], ["editForm", "ngForm"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "col-12"], ["type", "text", "name", "name", "id", "name", "placeholder", "Name", "required", "", 1, "name", "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editname", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "name", "email", "id", "email", "placeholder", "Email", "required", "", "email", "", 1, "email", "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editemail", "ngModel"], ["type", "text", "name", "phone", "id", "phone", "placeholder", "Phone Number", "maxlength", "14", 1, "phone", "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["editphone", "ngModel"], [1, "modal-footer"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "submit", "id", "edit-contact-item", "data-dismiss", "modal", 1, "btn", "btn-info", "edit-contact-item"], [1, "la", "la-paper-plane-o", "d-lg-none"], [1, "d-none", "d-lg-block"], [1, "invalid-feedback"], [4, "ngIf"], ["addForm", "ngForm"], ["id", "exampleModalLabel1", 1, "modal-title"], ["type", "text", "name", "name", "id", "contact-name", "placeholder", "Name", "required", "", 1, "contact-name", "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["contactname", "ngModel"], ["type", "text", "name", "email", "id", "contact-email", "placeholder", "Email", "required", "", "email", "", 1, "contact-email", "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["contactemail", "ngModel"], ["type", "text", "name", "contactPhone", "id", "contact-phone", "placeholder", "Phone Number", "maxlength", "14", 1, "contact-phone", "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["contactphone", "ngModel"], ["type", "checkbox", "name", "favorite", "id", "favorite", 1, "contact-fav", "input-chk", "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "favorite", 1, "custom-control-label"], [1, "custom-file", "form-group", "col-12"], ["type", "file", "accept", "contactImage/*", "id", "customFile", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], ["type", "submit", "id", "add-contact-item", 1, "btn", "btn-info", "add-contact-item"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_Template_div_click_5_listener($event) { return ctx.contentOverlay($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_Template_div_click_12_listener($event) { return ctx.sidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ContactsComponent_Template_input_keyup_16_listener($event) { return ctx.updateFilter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "All Contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77); var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](129); return ctx.addTableDataModal(_r9); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Add Contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Import");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Export");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Find Duplicate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_48_listener() { return ctx.deleteCheckedRow(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Delete All");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Search : ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ContactsComponent_Template_input_keyup_52_listener($event) { return ctx.updateFilter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ngx-datatable", 39, 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function ContactsComponent_Template_ngx_datatable_select_53_listener($event) { return ctx.onSelectContact($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ngx-datatable-column", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ContactsComponent_ng_template_56_Template, 3, 1, "ng-template", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, ContactsComponent_ng_template_57_Template, 3, 3, "ng-template", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ngx-datatable-column", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ContactsComponent_ng_template_59_Template, 4, 5, "ng-template", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ngx-datatable-column", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ContactsComponent_ng_template_61_Template, 2, 1, "ng-template", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "ngx-datatable-column", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ngx-datatable-column", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ContactsComponent_ng_template_64_Template, 2, 2, "ng-template", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ngx-datatable-column", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ContactsComponent_ng_template_66_Template, 26, 0, "ng-template", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h5", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Margaret Govan");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "All Contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Recently contacted");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Favorite contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Groups");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ul", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "14");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " Project");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "22");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Team");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "10");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "a", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " Clients");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Friends");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "More");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "ul", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Import");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Export");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Print");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Restore contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Find duplicate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, ContactsComponent_ng_template_126_Template, 26, 11, "ng-template", null, 71, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, ContactsComponent_ng_template_128_Template, 35, 12, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placement", ctx.placement);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.rows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 70)("limit", 5)("selected", ctx.selected)("selectionType", "checkbox")("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30)("maxWidth", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 140);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 140);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 140);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90)("cellClass", "my-custom-cell");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flexGrow", 1)("minWidth", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]], styles: [".custom-file[_ngcontent-%COMP%] {\r\n  width: 440px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative !important;\r\n  margin-left: 0px !important;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]::after {\r\n  content: none !important;\r\n}\r\n\r\n.favoriteChange[_ngcontent-%COMP%]:hover {\r\n  background: url('star-on.png');\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-right:before {\r\n  font-family: 'icofont';\r\n  font-style: normal;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-skip:before {\r\n  font-family: 'icofont';\r\n  font-style: normal;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-left:before {\r\n  font-family: 'icofont';\r\n  font-style: normal;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-left:before {\r\n  content: \"\\2039\";\r\n  font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-prev:before {\r\n  content: \"\\00AB\";\r\n  font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-right:before {\r\n  content: \"\\203A\";\r\n  font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-icon-skip:before {\r\n  content: \"\\00BB\";\r\n  font-size: x-large;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  padding: 0px 09px;\r\n  background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  padding: 0px 09px;\r\n  background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip {\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  padding: 0px 09px;\r\n  background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  padding: 0px 09px;\r\n  background-color: #d4d2e7;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   ul[_ngcontent-c11][_ngcontent-%COMP%]   li[_ngcontent-c11][_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-c11][_ngcontent-%COMP%] {\r\n  background-color: #d4d2e7;\r\n  font-weight: bold;\r\n  font-size: larger;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\r\n  height: 32px;\r\n  min-width: 34px;\r\n  line-height: 22px;\r\n  padding: 0;\r\n  border-radius: 3px;\r\n  margin: 0 3px;\r\n  text-align: center;\r\n  vertical-align: top;\r\n  padding-top: 3px;\r\n  text-decoration: none;\r\n  vertical-align: bottom;\r\n  color: #7c8091;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  line-height: 9px;\r\n  padding: 0px 08px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n  font-size: 0px;\r\n  line-height: 22px;\r\n  padding: 0px 09px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n  font-size: 0px;\r\n  line-height: 22px;\r\n  padding: 0px 09px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n  font-size: 0px;\r\n  line-height: 22px;\r\n  padding: 0px 09px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\r\n  font-size: 0px;\r\n  line-height: 22px;\r\n  padding: 0px 09px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\r\n  background-color: #545454;\r\n  font-weight: bold;\r\n  color: white;\r\n\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-%COMP%] {\r\n  background-color: #545454;\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer {\r\n  background: #727e8e;\r\n  color: #ededed;\r\n  margin-top: -1px;\r\n  overflow: inherit;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\r\n  font-weight: bold;\r\n  line-height: 24px;\r\n  font-size: medium;\r\n  color: #6b6f82;\r\n}\r\n\r\n[_nghost-%COMP%]     .cotnblck img {\r\n  vertical-align: middle\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  [_ngcontent-%COMP%]:horizontal.app-contacts   .sidebar-left.show[_ngcontent-%COMP%] {\r\n    margin-left: 0rem !important;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]     .heading-elements .gap_contact {\r\n  margin-right: 0.2rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .image-name-space {\r\n  margin-right: 8px;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-row-center, [_nghost-%COMP%]     .datatable-header-inner, [_nghost-%COMP%]     .datatable-row-wrapper, [_nghost-%COMP%]     .datatable-body-row.datatable-row-even, [_nghost-%COMP%]     .datatable-scroll, [_nghost-%COMP%]     .datatable-body-row.datatable-row-odd, [_nghost-%COMP%]     .datatable-footer, [_nghost-%COMP%]     .datatable-footer-inner {\r\n  width: 100% !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-body-cell-label, [_nghost-%COMP%]     .datatable-header-cell {\r\n  padding: 0.6rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-body-row {\r\n  padding: 0 !important\r\n}\r\n\r\n[_nghost-%COMP%]     .mrless {\r\n  margin-right: 0.4rem !important\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header {\r\n  font-weight: bold;\r\n  height: unset !important;\r\n  overflow: inherit;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap {\r\n  font-size: 14px;\r\n}\r\n\r\n[_nghost-%COMP%]     .datatable-header-cell {\r\n  font-size: 13px\r\n}\r\n\r\n@media(max-width:767px) {\r\n\r\n  [_nghost-%COMP%]     .page-count, [_nghost-%COMP%]     .datatable-pager {\r\n    flex: 1 1 100% !important\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]     .my-custom-cell {\r\n  padding: 0.1rem 1.4rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-body-cell, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\r\n\r\n  line-height: 3.625;\r\n}\r\n\r\n[_nghost-%COMP%]     .avatar i {\r\n  position: absolute;\r\n  right: -2px;\r\n  bottom: 5px;\r\n  width: 10px;\r\n  height: 10px;\r\n  border: 2px solid white;\r\n  border-radius: 100%;\r\n}\r\n\r\n[_nghost-%COMP%]     .icon {\r\n  right: 0px;\r\n  left: 26px;\r\n  bottom: -1px !important;\r\n  width: 10px;\r\n  height: 10px;\r\n  border: 0px !important;\r\n  border: 2px solid white !important;\r\n\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .custom-file[_ngcontent-%COMP%] {\r\n    margin-left: 15px !important;\r\n    margin-right: 15px !important;\r\n    width: 282px !important;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-body .datatable-body-row {\r\n  border-top: none !important;\r\n  border-bottom: 1px solid #e3ebf3;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  margin-right: 15px;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]::after {\r\n  font-family: 'LineAwesome';\r\n  font-size: .8rem;\r\n  position: relative;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0 .3em 0 0;\r\n  padding: 0 2px 0 6px;\r\n  content: '\\f110' !important;\r\n  vertical-align: 0;\r\n  border: none !important;\r\n}\r\n\r\n.pr-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\r\n  padding-right: 0rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-body .datatable-body-row>div {\r\n  color: #6b6f82 !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .close:not(:disabled):not(.disabled):hover, .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):focus {\r\n  outline: none !important;\r\n}\r\n\r\n.datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\r\n  padding-top: 1rem !important;\r\n}\r\n\r\n._center[_ngcontent-%COMP%] {\r\n  padding-top: 1rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable {\r\n  display: -webkit-box;\r\n}\r\n\r\n[_nghost-%COMP%]     .empty-row {\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .dropdown .dropdown-menu .space, [_nghost-%COMP%]     .dropup .dropdown-menu .space {\r\n  padding: 10px 20px !important;\r\n  height: 38px;\r\n  line-height: 1.625;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\r\n  padding: 0rem;\r\n  overflow-y: visible !important;\r\n  overflow-x: visible !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager {\r\n  padding: 0px 25px;\r\n}\r\n\r\n[_nghost-%COMP%]     .contacts-table{\r\n  padding-top: 30px;\r\n  padding-bottom: 35px;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\r\n  text-align: left !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\r\n  background-color: #FFF !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .content-right {\r\n  width: calc(100% - -30px) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDhCQUE2RDtBQUMvRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZOztBQUVkOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7OztFQVFFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtBQUNGOztBQUVBOztFQUVFOztJQUVFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0NBQWtDOztBQUVwQzs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1maWxlIHtcclxuICB3aWR0aDogNDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmF2b3JpdGVDaGFuZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmF0eS9zdGFyLW9uLnBuZ1wiKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogJ2ljb2ZvbnQnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1sZWZ0OmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdpY29mb250JztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDM5XCI7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXByZXY6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMDBBQlwiO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDNBXCI7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMDBCQlwiO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIHVsW19uZ2NvbnRlbnQtYzExXSBsaVtfbmdjb250ZW50LWMxMV06bm90KC5kaXNhYmxlZCk6aG92ZXIgYVtfbmdjb250ZW50LWMxMV0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbWluLXdpZHRoOiAzNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMCAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBjb2xvcjogIzdjODA5MTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogOXB4O1xyXG4gIHBhZGRpbmc6IDBweCAwOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcclxuICBmb250LXNpemU6IDBweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAwcHggMDlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xyXG4gIGZvbnQtc2l6ZTogMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIHBhZGRpbmc6IDBweCAwOXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcclxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcclxuICBmb250LXNpemU6IDBweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAwcHggMDlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYsXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXHJcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XHJcbiAgZm9udC1zaXplOiAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMHB4IDA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSBhLFxyXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKTpob3ZlciBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogIzcyN2U4ZTtcclxuICBjb2xvcjogI2VkZWRlZDtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgY29sb3I6ICM2YjZmODI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY290bmJsY2sgaW1nIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICA6aG9yaXpvbnRhbC5hcHAtY29udGFjdHMgLnNpZGViYXItbGVmdC5zaG93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhlYWRpbmctZWxlbWVudHMgLmdhcF9jb250YWN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5pbWFnZS1uYW1lLXNwYWNlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtcm93LWNlbnRlcixcclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyLFxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1yb3ctd3JhcHBlcixcclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtYm9keS1yb3cuZGF0YXRhYmxlLXJvdy1ldmVuLFxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1zY3JvbGwsXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWJvZHktcm93LmRhdGF0YWJsZS1yb3ctb2RkLFxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1mb290ZXIsXHJcbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtYm9keS1jZWxsLWxhYmVsLFxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XHJcbiAgcGFkZGluZzogMC42cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubXJsZXNzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNHJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaW5oZXJpdDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XHJcbiAgZm9udC1zaXplOiAxM3B4XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5wYWdlLWNvdW50LFxyXG4gIDpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuICAgIGZsZXg6IDEgMSAxMDAlICFpbXBvcnRhbnRcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubXktY3VzdG9tLWNlbGwge1xyXG4gIHBhZGRpbmc6IDAuMXJlbSAxLjRyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxyXG4ubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcclxuXHJcbiAgbGluZS1oZWlnaHQ6IDMuNjI1O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmF2YXRhciBpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0ycHg7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaWNvbiB7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBsZWZ0OiAyNnB4O1xyXG4gIGJvdHRvbTogLTFweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmN1c3RvbS1maWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyODJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdy5kYXRhdGFibGUtcm93LWV2ZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xyXG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZWJmMztcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdMaW5lQXdlc29tZSc7XHJcbiAgZm9udC1zaXplOiAuOHJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMCAuM2VtIDAgMDtcclxuICBwYWRkaW5nOiAwIDJweCAwIDZweDtcclxuICBjb250ZW50OiAnXFxmMTEwJyAhaW1wb3J0YW50O1xyXG4gIHZlcnRpY2FsLWFsaWduOiAwO1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHItMSxcclxuLnB4LTEge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93PmRpdiB7XHJcbiAgY29sb3I6ICM2YjZmODIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpob3ZlcixcclxuLmNsb3NlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XHJcbiAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLl9jZW50ZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZW1wdHktcm93IHtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuc3BhY2UsXHJcbjpob3N0IDo6bmctZGVlcCAuZHJvcHVwIC5kcm9wZG93bi1tZW51IC5zcGFjZSB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjYyNTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XHJcbiAgcGFkZGluZzogMHJlbTtcclxuICBvdmVyZmxvdy15OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRhY3RzLXRhYmxle1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuY29udGVudC1yaWdodCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIC0zMHB4KSAhaW1wb3J0YW50O1xyXG59Il19 */"] });
    return ContactsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"]]
        }], closeModalEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "zFWs":
/*!******************************************************************!*\
  !*** ./src/app/content/applications/contacts/contacts.module.ts ***!
  \******************************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.component */ "+Y+/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "w9WL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");











var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactsModule });
    ContactsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactsModule_Factory(t) { return new (t || ContactsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]
                    }
                ])
            ], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
    return ContactsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsModule, { declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
        src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                    src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]
                        }
                    ])
                ],
                declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-content-applications-contacts-contacts-module.js.map