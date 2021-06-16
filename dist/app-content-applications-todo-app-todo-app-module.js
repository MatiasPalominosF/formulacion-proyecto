(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-applications-todo-app-todo-app-module"],{

/***/ "dTOi":
/*!********************************************************************!*\
  !*** ./src/app/content/applications/todo-app/todoapp.component.ts ***!
  \********************************************************************/
/*! exports provided: TodoappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoappComponent", function() { return TodoappComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _api_todo_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_api/todo/todo.service */ "mIRT");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-quill */ "alHs");
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../_api/user/user.service */ "wsei");
/* harmony import */ var _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../_services/quill-initialize-service.service */ "lnAJ");
/* harmony import */ var quill_mention__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! quill-mention */ "g9P2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../_directives/image.preload.directive */ "wVYg");



























var _c0 = ["editor"];
var _c1 = function (a0, a1) { return { "active": a0, "": a1 }; };
function TodoappComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_div_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); var todo_r19 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.showTodoMenu(todo_r19.Id, ctx_r20.todoFilterList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var todo_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, todo_r19.isSelected === true, todo_r19.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](todo_r19.lableIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](todo_r19.lableName);
} }
function TodoappComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_div_24_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); var todo_r22 = ctx.$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.showTodoMenu(todo_r22.Id, ctx_r23.todoLableList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var todo_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, todo_r22.isSelected === true, todo_r22.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](todo_r22.lableName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", todo_r22.bulletClass, " d-inline-block rounded-circle ");
} }
function TodoappComponent_h5_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TodoappComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mark Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TodoappComponent_img_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 118);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.selectedUserImage ? ctx_r4.selectedUserImage : "../../../../assets/images/portrait/small/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TodoappComponent_img_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 118);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.selectedAssignee ? ctx_r5.selectedAssignee.image : "../../../../assets/images/portrait/small/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TodoappComponent_img_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 119);
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r7.currentUserImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TodoappComponent_img_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 119);
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.selectedItem.creator.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TodoappComponent_img_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 120);
} }
function TodoappComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r10.currentUserName, " creating this task ");
} }
function TodoappComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r11.selectedItem.creator.name, " created this task ");
} }
function TodoappComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " John Doe creating this task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TodoappComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var todo_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", todo_r25.userid ? todo_r25.userid : "../../../../assets/images/portrait/small/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", todo_r25.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 3, todo_r25.created_at_date, "dd/MMM HH:mm"));
} }
function TodoappComponent_button_123_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_button_123_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.submitComment(ctx_r26.selectedItem.id, ctx_r26.todoCommentsField); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TodoappComponent_button_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TodoappComponent_button_126_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_button_126_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.onUpdate(ctx_r28.selectedItem.id, ctx_r28.todo.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TodoappComponent_ul_155_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r30.assignedTo.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
var _c2 = function (a0) { return { "completed": a0 }; };
function TodoappComponent_ul_155_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_ul_155_Template_li_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.sidebartask($event); })("click", function TodoappComponent_ul_155_Template_li_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); var item_r30 = ctx.$implicit; var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.editModal(item_r30, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_ul_155_Template_div_click_5_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TodoappComponent_ul_155_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); var item_r30 = ctx.$implicit; var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.completeTODO(item_r30, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TodoappComponent_ul_155_div_14_Template, 2, 1, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_ul_155_Template_a_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); var item_r30 = ctx.$implicit; var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.todoFavorite($event, item_r30.id); })("click", function TodoappComponent_ul_155_Template_a_click_15_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_ul_155_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); var item_r30 = ctx.$implicit; var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.onDelete(item_r30.id); })("click", function TodoappComponent_ul_155_Template_a_click_17_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r30 = ctx.$implicit;
    var i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", item_r30.completed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, item_r30.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "checkbox", i_r31, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", item_r30.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "checkbox", i_r31, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge badge-", item_r30.type, " badge-pill");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r30.assignedTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "todo-icon" + item_r30.id);
} }
var _c3 = function () { return { height: "90px" }; };
var _c4 = function () { return { standalone: true }; };
var TodoFilter = /** @class */ (function () {
    function TodoFilter(Id, lableName, isSelected) {
        this.Id = Id;
        this.lableName = lableName;
        this.isSelected = isSelected;
    }
    return TodoFilter;
}());
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());
var TodoappComponent = /** @class */ (function () {
    /**
    * Constructor
    *
    * @param NgbModal              modal
    * @param FormBuilder           formBuilder
    * @param Renderer2             _renderer
    * @param TodoService           firebaseService
    * @param AngularFirestore      firestore
    * @param ToastrService         toastr
    */
    function TodoappComponent(modal, formBuilder, _renderer, firebaseService, firestore, toastr, modalService, userService, QuillInitializeServiceServicec) {
        var _this = this;
        this.modal = modal;
        this.formBuilder = formBuilder;
        this._renderer = _renderer;
        this.firebaseService = firebaseService;
        this.firestore = firestore;
        this.toastr = toastr;
        this.modalService = modalService;
        this.userService = userService;
        this.QuillInitializeServiceServicec = QuillInitializeServiceServicec;
        this.initialData = __webpack_require__(/*! ../../../../assets/data/application/todo.json */ "oxVz");
        this.LableData = __webpack_require__(/*! ../../../../assets/data/application/todo_lable.json */ "rp4G");
        this.demoUserEmail = 'john@pixinvent.com';
        this.submitted = false;
        this.commentList = [];
        this.todoDisplayList = [];
        this.todoLableList = [];
        this.todoFilterList = [];
        this.selectedUserId = '';
        this.todoComments = [];
        this.selectedTodoTypeText = '';
        this.selectedTodoTypeValue = '';
        this.isShown = true;
        this.completedTodo = false;
        this.loader = true;
        this.blured = false;
        this.focused = false;
        this.hide = false;
        this.hasFocus = false;
        this.commentArray = [];
        this.isShowCropper = false;
        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        this.demoUserImage = '../../../assets/images/portrait/small/avatar-s-19.png';
        this.currentUserImage = this.loggedInUser.photoURL;
        this.currentUserName = this.loggedInUser.name;
        this.config = {};
        this.atValues = [
            { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
            { id: 2, value: 'Patrik Sjölin' }
        ];
        this.hashValues = [
            { id: 3, value: 'Fredrik Sundqvist 2' },
            { id: 4, value: 'Patrik Sjölin 2' }
        ];
        this.newTodoquillConfig = {
            toolbar: '.newtoolbarTodo',
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
        this.TodoquillConfig = {
            toolbar: '.toolbarTodo',
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
    }
    Object.defineProperty(TodoappComponent.prototype, "TodoFormGroup", {
        get: function () {
            return this.todo.get('todoComments');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * OnInit
     */
    TodoappComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.resetForm();
        this.todos = [];
        this.currentUserImage = this.loggedInUser.photoURL;
        this.currentUserName = this.loggedInUser.displayName;
        this.todoLableList = this.LableData.todoLableList;
        this.todoFilterList = this.LableData.todoFilterList;
        this.userService.getUsers().subscribe(function (users) {
            var contactList = users.map(function (item) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
            });
            contactList = contactList.filter(function (element) {
                return _this.loggedInUser.uid !== element['uid'] || _this.loggedInUser.uid === element['uid'];
            });
            _this.contact = contactList;
        });
        if (this.loggedInUser.email === this.demoUserEmail) {
            // To load default todo for demo account
            this.getDemoAccTodos().then(function (todos) {
                if (todos.length === 0) {
                    _this.addDemoAccountTodos().then(function (result) {
                        if (result) {
                            _this.loadTodos();
                        }
                    });
                }
                else {
                    _this.loadTodos();
                }
            });
        }
        else {
            this.loadTodos();
        }
        this.todo = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            assignedTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            assignDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].nullValidator]),
            todoComments: this.formBuilder.array([
                this.formBuilder.group({
                    comment: '',
                    created_at_date: '',
                    userid: ''
                })
            ]),
        });
    };
    // Load TODO of user
    TodoappComponent.prototype.loadTodos = function () {
        var _this = this;
        this.firebaseService.getTODOS(this.loggedInUser.uid).subscribe(function (todos) {
            var todo = [];
            todo = todos.map(function (item) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
            });
            _this.firebaseService.getAssignedTODOS(_this.loggedInUser.uid).subscribe(function (assignedTodos) {
                var todoAssigned = [];
                todoAssigned = assignedTodos.map(function (item) {
                    var toDoObj = item.payload.doc.data();
                    if (toDoObj && toDoObj['uid'] !== _this.loggedInUser.uid) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                    }
                });
                todoAssigned = todoAssigned.filter(function (item) {
                    return item && item['uid'];
                });
                _this.todos = todo.concat(todoAssigned);
                _this.temp = _this.todos;
                _this.loader = false;
            });
        });
    };
    Object.defineProperty(TodoappComponent.prototype, "add", {
        /**
         * Get the add todo Form value
         */
        get: function () {
            return this.todo.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodoappComponent.prototype, "update", {
        /**
         * Get the update todo Form value
         */
        get: function () {
            return this.todo.controls;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Reset form value
     *
     * @param form      Form fields with previous value
     */
    TodoappComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
    };
    TodoappComponent.prototype.addDemoAccountTodos = function () {
        var _this = this;
        var dataPromise = new Promise(function (resolve, reject) {
            var promises = [];
            // Add default TODO for demo account
            for (var i = 0; i < _this.initialData.length; i++) {
                var promise = _this.firestore.collection('todo').add({
                    title: _this.initialData[i].title,
                    description: _this.initialData[i].description,
                    badge: _this.initialData[i].badge,
                    type: _this.initialData[i].type,
                    completed: _this.initialData[i].completed,
                    isDeleted: _this.initialData[i].isDeleted,
                    createdDate: new Date(),
                    uid: _this.loggedInUser.uid,
                    assignedTo: _this.initialData[i].assignedTo,
                    assignDate: _this.initialData[i].assignDate,
                    todoComments: _this.initialData[i].todoComments
                });
                promises.push(promise);
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(promises).subscribe(function (results) {
                resolve(true);
            });
        });
        return dataPromise;
    };
    /**
     * Initial todo display
     */
    TodoappComponent.prototype.getDemoAccTodos = function () {
        var _this = this;
        var dataPromise = new Promise(function (resolve, reject) {
            _this.firebaseService.getTODOS(_this.loggedInUser.uid).subscribe(function (todos) {
                resolve(todos);
            });
        });
        return dataPromise;
    };
    /**
     * Add new todo
     *
     * Update todo
     *
     * @param value     Form field values
     * @param id        todo id
     */
    TodoappComponent.prototype.onSubmit = function (event) {
        var _this = this;
        this.submitted = true;
        var temp = [];
        this.todo.controls.assignDate.clearValidators();
        this.todo.get('assignDate').clearValidators();
        this.todo.get('assignDate').updateValueAndValidity();
        if (this.assignedTo) {
            this.selectedAssignee = this.assignedTo;
        }
        if (this.todoCommentsField == null) {
            temp = null;
        }
        else if (this.todoCommentsField !== null) {
            this.todoCommentsField = this.todoCommentsField.replace(/(<p>|<\/p>)/g, '');
            temp = [{
                    comment: this.todoCommentsField,
                    created_at_date: Date.now(),
                    userid: this.currentUserImage
                }];
        }
        if (this.todo.invalid) {
            return;
        }
        else if (this.todo.valid) {
            this.todo.setValue({
                uid: this.loggedInUser.uid,
                title: this.todo.value.title,
                description: this.todo.value.description,
                type: this.selectedTodoTypeValue,
                completed: false,
                isDeleted: false,
                createdDate: new Date(),
                badge: this.selectedTodoTypeText,
                assignedTo: this.todo.value.assignedTo,
                assignDate: this.todo.value.assignDate,
                todoComments: temp,
            });
            this.firebaseService.createTodo(this.todo.value).subscribe(function (res) {
                _this.toastr.success('Added', 'Todo Created Successfully.', { timeOut: 500, closeButton: true });
            }, function (err) {
                _this.toastr.error('Error', 'Add Todo Error.', { timeOut: 500, closeButton: true });
            });
            var toggleIcon = document.getElementById('todo-new-task');
            var toggle = document.getElementById('content-overlay');
            if (event.currentTarget.className === 'mt-1 ng-dirty ng-valid ng-touched' || 'mt-1 ng-dirty ng-touched ng-valid') {
                this._renderer.removeClass(toggleIcon, 'show');
                this._renderer.removeClass(toggle, 'show');
            }
        }
    };
    /**
    * Submit Comment
    */
    TodoappComponent.prototype.submitComment = function (id, comments) {
        var _this = this;
        if (comments != null) {
            comments = comments.replace(/(<p>|<\/p>)/g, '');
        }
        if (!comments) {
            comments = null;
        }
        if (this.loggedInUser.email === this.demoUserEmail) {
            this.currentUserImage = this.demoUserImage;
        }
        if (!this.todoComments || this.todoComments.length === 0) {
            this.todoComments = [];
        }
        // TODO Add todo comment from parameters to todoComments first
        if (comments != null) {
            this.todoComments.push({
                comment: comments,
                created_at_date: Date.now(),
                userid: this.currentUserImage
            });
        }
        if (this.todoId !== null) {
            this.todo.setValue({
                uid: this.todo.value.uid,
                title: this.todo.value.title,
                description: this.todo.value.description,
                type: this.todo.value.type,
                completed: false,
                isDeleted: false,
                createdDate: this.todo.value.createdDate,
                badge: this.todo.value.badge,
                assignedTo: this.todo.value.assignedTo,
                assignDate: this.todo.value.assignDate,
                todoComments: this.todoComments,
            });
            this.todoCommentsField = null;
            comments = null;
            this.firebaseService.updateTODO(id, this.todo.value)
                .subscribe(function (res) {
                _this.toastr.success('Update', 'Todo Comment Updated Successfully.', { timeOut: 500, closeButton: true });
            }, function (err) {
                _this.toastr.error('Error', 'Todo Comment Updated Error', { timeOut: 500, closeButton: true });
            });
            console.log(this.todo);
        }
    };
    /**
    * Update todo
    *
    * @param value     Form field values
    * @param id        todo id
    */
    TodoappComponent.prototype.onUpdate = function (id, value, event) {
        var _this = this;
        this.submitted = true;
        this.todo.controls.assignDate.clearValidators();
        this.todo.get('assignDate').clearValidators();
        this.todo.get('assignDate').updateValueAndValidity();
        if (this.todo.invalid) {
            return;
        }
        else if (this.todo.valid) {
            this.todo.setValue({
                uid: this.loggedInUser.uid,
                title: value.title,
                description: value.description,
                type: this.selectedTodoTypeValue,
                completed: value.completed,
                isDeleted: false,
                createdDate: this.selectedItem.createdDate,
                badge: this.selectedTodoTypeText,
                assignedTo: value.assignedTo,
                assignDate: value.assignDate,
                todoComments: this.todoComments
            });
            this.firebaseService.updateTODO(id, this.todo.value)
                .subscribe(function (res) {
                _this.toastr.success('Update', 'Todo Updated Successfully.', { timeOut: 500, closeButton: true });
            }, function (err) {
                _this.toastr.error('Error', 'Todo Update Error!', { timeOut: 500, closeButton: true });
            });
            var toggleIcon = document.getElementById('todo-new-task');
            var toggle = document.getElementById('content-overlay');
            if (event.currentTarget.className === 'btn btn-danger update-todo ng-star-inserted' || 'btn btn-danger update-todo') {
                this._renderer.removeClass(toggleIcon, 'show');
                this._renderer.removeClass(toggle, 'show');
            }
        }
    };
    /**
     * Delete todo
     *
     * @param id      todo id
     */
    TodoappComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.firebaseService.deleteTodo(id)
            .then(function (res) {
            _this.toastr.success('Deleted', 'Todo Deleted Successfully!', { timeOut: 500, closeButton: true });
        }, function (err) {
            _this.toastr.error('Error', 'Todo Delete Error!', { timeOut: 500, closeButton: true });
        });
    };
    /**
     * filter task
     */
    TodoappComponent.prototype.search = function (term) {
        var searchTerm = term.currentTarget.value;
        if (searchTerm !== '') {
            this.todos = this.todos.filter(function (result) {
                if (result && searchTerm) {
                    if (result.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                        result.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                        return true;
                    }
                    return false;
                }
            });
        }
        else {
            this.todos = this.temp;
        }
    };
    /**
     * Open add todo modal
     *
     * @param content     Add todo modal id
     */
    TodoappComponent.prototype.open = function () {
        this.selectedItem = null;
        this.selectedTodoTypeValue = '';
        this.selectedTodoTypeText = '';
        this.todoComments = [];
        this.todoCommentsField = null;
        this.resetForm();
        this.selectedUserImage = '';
        this.todoId = null;
        this.todo = this.formBuilder.group({
            uid: this.loggedInUser.uid,
            title: '',
            description: '',
            type: '',
            completed: false,
            isDeleted: false,
            createdDate: new Date(),
            badge: '',
            assignedTo: '',
            assignDate: '',
            todoComments: '',
        });
    };
    /**
     * Open edit todo modal
     *
     * @param editContent    edit todo modal id
     * @param item           edit todo modal values
     */
    TodoappComponent.prototype.editModal = function (value, event) {
        this.selectedItem = value;
        if (this.contact.length > 0) {
            for (var index = 0; index < this.contact.length; index++) {
                var element = this.contact[index];
                if (element.uid === this.selectedItem.uid) {
                    this.selectedItem['creator'] = element;
                    break;
                }
            }
        }
        this.todoId = this.loggedInUser.uid;
        this.TodoId = this.loggedInUser.uid;
        this.todo = this.formBuilder.group({
            uid: this.loggedInUser.uid,
            title: this.selectedItem.title,
            description: this.selectedItem.description,
            type: this.selectedItem.type,
            completed: value.completed,
            isDeleted: false,
            badge: this.selectedItem.badge,
            createdDate: value.createdDate,
            assignDate: value.assignDate,
            assignedTo: value.assignedTo,
            todoComments: value.todoComments,
        });
        this.todoCommentsField = value.todoComments;
        if (value.assignedTo) {
            this.selectedAssignee = value.assignedTo;
        }
        // this.firebaseService.getTODOS(this.loggedInUser.uid).subscribe(todos => {
        //   this.todos = todos.map(item => {
        //     return {
        //       ...item.payload.doc.data() as {},
        //       id: item.payload.doc.id
        //     };
        //   });
        // });
        for (var i = 0; i < this.todos.length; i++) {
            if (value.id === this.todos[i].id) {
                this.todoComments = this.todos[i].todoComments;
            }
        }
        var toggleIcon = document.getElementById('todo-new-task');
        var toggle = document.getElementById('content-overlay');
        var userImage = document.getElementById('avatar-user');
        var contentImage = document.getElementById('avatar-content');
        if (event.currentTarget.className === 'todo-item ng-star-inserted') {
            this._renderer.addClass(toggleIcon, 'show');
            this._renderer.addClass(toggle, 'show');
        }
        else if (this.todoId !== null) {
            this._renderer.addClass(contentImage, 'd-none');
            this._renderer.removeClass(userImage, 'd-none');
        }
    };
    /**
     * Get text and value
     *
     * @param event     Dropdown event
     */
    TodoappComponent.prototype.getSelectedTODOTypeText = function (event) {
        this.selectedTodoTypeText = event.target['options'][event.target['options'].selectedIndex].text;
        this.selectedTodoTypeValue = event.target['options'][event.target['options'].selectedIndex].value;
    };
    TodoappComponent.prototype.getSelectedTODOTypeImage = function (event) {
        this.selectedUserId = event.id;
        this.selectImage();
    };
    TodoappComponent.prototype.selectImage = function () {
        var _this = this;
        this.contact.forEach(function (element) {
            if (_this.selectedUserId === element.id) {
                _this.selectedUserImage = element.image;
            }
        });
    };
    TodoappComponent.prototype.completeTODO = function (data) {
        var _this = this;
        if (data.completed) {
            data.completed = false;
        }
        else {
            data.completed = true;
        }
        this.todo = this.formBuilder.group({
            uid: this.loggedInUser.uid,
            title: data.title,
            description: data.description,
            type: data.type,
            completed: data.completed,
            isDeleted: data.isDeleted,
            createdDate: data.createdDate,
            badge: data.badge,
            assignDate: data.assignDate,
            assignedTo: data.assignedTo,
            // todoImage: data.todoImage,
            todoComments: data.todoComments,
        });
        this.firebaseService.updateTODO(data.id, this.todo.value)
            .subscribe(function (res) {
            if (_this.todo.value.completed === true) {
                _this.toastr.success('Success', 'Todo Completed.', { timeOut: 500, closeButton: true });
            }
            else {
                _this.toastr.success('Success', 'Todo Updated.', { timeOut: 500, closeButton: true });
            }
        }, function (err) {
            _this.toastr.error('Error', 'Something went wrong!', { timeOut: 500, closeButton: true });
        });
    };
    /**
    * Overlay add/remove fuction in responsive
    *
    * @param event     Overlay click event
    */
    TodoappComponent.prototype.sidebartask = function (event) {
        var toggleIcon = document.getElementById('todo-new-task');
        var toggle = document.getElementById('content-overlay');
        var toggleSidebarIcon = document.getElementById('sidebar-left');
        var userImage = document.getElementById('avatar-user');
        var contentImage = document.getElementById('avatar-content');
        if (event.currentTarget.className === 'btn btn-danger btn-glow add-task-btn btn-block my-1') {
            this._renderer.addClass(toggleIcon, 'show');
            this._renderer.addClass(toggle, 'show');
            this._renderer.removeClass(toggleSidebarIcon, 'show');
        }
        else if (event.currentTarget.className === 'todo-item') {
            this._renderer.addClass(toggleIcon, 'show');
            this._renderer.addClass(toggle, 'show');
        }
        else if (event.currentTarget.className === 'close close-icon' || 'app-content-overlay show') {
            this._renderer.removeClass(toggleIcon, 'show');
            this._renderer.removeClass(toggle, 'show');
            this._renderer.removeClass(toggleSidebarIcon, 'show');
        }
    };
    TodoappComponent.prototype.sidebartaskedit = function (event) {
        var toggleIcon = document.getElementById('todo-new-task');
        var toggle = document.getElementById('content-overlay');
        if (event.currentTarget.className === 'btn btn-danger btn-glow add-task-btn btn-block my-1') {
            this._renderer.addClass(toggleIcon, 'show');
            this._renderer.addClass(toggle, 'show');
        }
    };
    TodoappComponent.prototype.showTodoMenu = function (Id, todo) {
        for (var j = 0; j < todo.length; j++) {
            for (var i = 0; i < this.todoLableList.length; i++) {
                for (var k = 0; k < this.todoFilterList.length; k++) {
                    if (todo[j].lableName === this.todoLableList[i].lableName) {
                        if (Id !== this.todoLableList[i].Id) {
                            this.todoLableList[i].isSelected = false;
                        }
                        if (Id === this.todoLableList[i].Id) {
                            this.todoLableList[i].isSelected = true;
                            this.todoFilterList[k].isSelected = false;
                        }
                    }
                    else if (todo[j].lableName === this.todoFilterList[k].lableName) {
                        if (Id !== this.todoFilterList[k].Id) {
                            this.todoFilterList[k].isSelected = false;
                        }
                        if (Id === this.todoFilterList[k].Id) {
                            this.todoFilterList[k].isSelected = true;
                            this.todoLableList[i].isSelected = false;
                        }
                    }
                }
            }
        }
    };
    TodoappComponent.prototype.sidebar = function (event) {
        var toggleIcon = document.getElementById('sidebar-left');
        var toggle = document.getElementById('content-overlay');
        if (event.currentTarget.className === 'sidebar-toggle d-block d-lg-none') {
            this._renderer.addClass(toggleIcon, 'show');
            this._renderer.addClass(toggle, 'show');
        }
        else if (event.currentTarget.className === 'sidebar-close-icon') {
            this._renderer.removeClass(toggleIcon, 'show');
            this._renderer.removeClass(toggle, 'show');
        }
    };
    TodoappComponent.prototype.focus = function () {
        this.focused = true;
        this.blured = false;
    };
    TodoappComponent.prototype.blur = function () {
        this.focused = false;
        this.blured = true;
    };
    TodoappComponent.prototype.todoFavorite = function (event, todoId) {
        var todoIcon = document.getElementById('todo-icon' + todoId);
        if (event.currentTarget.className === 'todo-item-favorite ml-75') {
            this._renderer.addClass(todoIcon, 'warning');
        }
        else if (event.currentTarget.className === 'todo-item-favorite ml-75 warning') {
            this._renderer.removeClass(todoIcon, 'warning');
        }
    };
    TodoappComponent.ɵfac = function TodoappComponent_Factory(t) { return new (t || TodoappComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_todo_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_11__["QuillInitializeServiceService"])); };
    TodoappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TodoappComponent, selectors: [["app-todoapp"]], viewQuery: function TodoappComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
        } }, decls: 159, vars: 36, consts: [[1, "app-content", "content"], ["id", "sidebar-left", 1, "sidebar-left"], [1, "sidebar"], [1, "todo-sidebar", "d-flex"], [1, "sidebar-close-icon", 3, "click"], [1, "ficon", "feather", "ft-x"], [1, "todo-app-menu"], [1, "form-group", "text-center", "add-task"], ["type", "button", 1, "btn", "btn-danger", "btn-glow", "add-task-btn", "btn-block", "my-1", 3, "click"], [1, "ficon", "feather", "ft-plus"], ["fxFlex", "auto", 1, "sidebar-menu-list", 3, "perfectScrollbar"], [1, "list-group"], ["href", "#", 1, "list-group-item", "border-0"], [1, "fonticon-wrap", "mr-50"], [1, "ficon", "feather", "ft-align-justify"], [1, "filter-label", "mt-2", "mb-1", "pt-25"], ["class", "list-group", 4, "ngFor", "ngForOf"], ["id", "todo-new-task", "fxFlex", "auto", 1, "todo-new-task-sidebar", 3, "perfectScrollbar"], [1, "card", "shadow-none", "p-0", "m-0"], [1, "card-header", "border-bottom", "py-75"], [1, "task-header", "d-flex", "justify-content-between", "align-items-center"], ["class", "new-task-title mb-0", 4, "ngIf"], ["class", "mark-complete-btn btn btn-primary btn-sm", 4, "ngIf"], [1, "dropdown", "mr-1"], [1, "ficon", "feather", "ft-paperclip", "cursor-pointer", "mr-50"], ["ngbDropdown", "", 1, "d-inline-block", 3, "open", "autoClose"], ["id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "dropdown-toggle", "new-taskDropdown"], [1, "ficon", "feather", "ft-more-vertical"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "dropdownnew-task"], [1, "dropdown-item", 3, "routerLink"], ["type", "button", 1, "close", "close-icon", 3, "click"], ["id", "compose-form", 1, "mt-1", 3, "formGroup", "ngSubmit"], [1, "card-content"], [1, "card-body", "py-0", "border-bottom"], [1, "form-group"], ["formControlName", "title", "name", "title", "cols", "1", "rows", "2", "placeholder", "Write a Task Name", "required", "", 1, "form-control", "task-title"], [1, "assigned", "d-flex", "justify-content-between"], [1, "form-group", "d-flex", "align-items-center", "mr-1"], [1, "avatar", "avatar-image"], ["class", "avatar-user-image ", "id", "avatar-user", "alt", "#", "width", "38", "height", "38", 3, "src", 4, "ngIf"], ["id", "avatar-content", 1, "avatar-content", "d-none"], [1, "ficon", "feather", "ft-user", "font-medium-4"], [1, "select-box", "mr-1"], ["bindLabel", "name", "formControlName", "assignedTo", 3, "items", "ngModel", "ngModelChange", "change"], [1, "form-group", "d-flex", "align-items-center", "position-relative"], [1, "input-group"], [1, "input-group-text", "mr-50", 3, "click"], [1, "ficon", "feather", "ft-calendar", 2, "cursor", "pointer"], ["placeholder", "yyyy-mm-dd", "formControlName", "assignDate", "name", "assignDate", "ngbDatepicker", "", 1, "form-control"], ["d2", "ngbDatepicker"], [1, "card-body", "border-bottom", "task-description"], [1, "snow-container", "border", "rounded", "p-50"], [1, "compose-editor", "mx-75", "ql-container", "ql-snow"], ["formControlName", "description", 3, "styles", "modules", "onFocus", "onBlur"], [1, "newtoolbarTodo"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-image"], [1, "tag", "d-flex", "justify-content-between", "align-items-center", "pt-1"], [1, "flex-grow-1", "d-flex", "align-items-center"], [1, "ficon", "feather", "ft-tag", "align-middle", "mr-25"], ["id", "todo-select", "placeholder", "Select Tag", "formControlName", "type", "name", "type", 1, "custom-select", "form-control", 3, "change"], ["value", "", "selected", ""], ["value", "warning"], ["value", "secondary"], ["value", "primary"], ["value", "success"], ["value", "danger"], [1, "ml-25"], [1, "ficon", "feather", "ft-plus-circle", "cursor-pointer", "add-tags"], [1, "card-body", "pb-1"], [1, "d-flex", "align-items-center", "mb-1"], [1, "avatar", "mr-75"], ["width", "38", "height", "38", 3, "src", 4, "ngIf"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "width", "38", "height", "38", 4, "ngIf"], ["class", "avatar-content", 4, "ngIf"], [2, "font-family", "bold"], ["class", "d-flex align-items-center mb-1", 4, "ngFor", "ngForOf"], [1, "comment-editor", "mx-75", "ql-container", "ql-snow"], [1, "editor"], [3, "styles", "modules", "ngModel", "ngModelOptions", "onFocus", "onBlur", "ngModelChange"], ["quill", "ngModel"], [1, "d-flex", "justify-content-end"], [1, "toolbarTodo"], [1, "ql-strike"], ["type", "button", "class", "btn btn-sm btn-primary comment-btn", 3, "click", 4, "ngIf"], [1, "mt-1", "d-flex", "justify-content-end"], ["type", "submit", "class", "btn btn-danger add-todo", 4, "ngIf"], ["type", "button", "class", "btn btn-danger update-todo", 3, "click", 4, "ngIf"], [1, "content-right"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], ["id", "content-overlay", 1, "app-content-overlay", 3, "click"], [1, "todo-app-area"], [1, "todo-app-list-wrapper"], [1, "todo-app-list"], [1, "todo-fixed-search", "d-flex", "justify-content-between", "align-items-center"], [1, "sidebar-toggle", "d-block", "d-lg-none", 3, "click"], [1, "form-group", "position-relative", "has-icon-left", "m-0", "flex-grow-1", "pl-2"], ["type", "text", "id", "todo-search", "placeholder", "Search Task", 1, "form-control", "todo-search", 3, "keyup"], [1, "form-control-position"], [1, "ficon", "feather", "ft-search"], [1, "todo-sort", "dropdown", "mr-1"], ["type", "button", "id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle", "sorting"], [1, "ficon", "feather", "ft-filter"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-sort"], [1, "todo-task-list", "list-group", 3, "perfectScrollbar"], ["class", "todo-task-list-wrapper list-unstyled", "id", "todo-task-list-drag", 4, "ngFor", "ngForOf"], [1, "no-results"], [1, "list-group-item", "border-0", 3, "routerLink", "ngClass", "click"], [1, "list-group-item", "border-0", "d-flex", "align-items-center", "justify-content-between", 3, "routerLink", "ngClass", "click"], [1, "new-task-title", "mb-0"], [1, "mark-complete-btn", "btn", "btn-primary", "btn-sm"], [1, "ficon", "feather", "ft-check", "align-middle"], [1, "mark-complete", "align-middle"], ["id", "avatar-user", "alt", "#", "width", "38", "height", "38", 1, "avatar-user-image", 3, "src"], ["width", "38", "height", "38", 3, "src"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "width", "38", "height", "38"], [1, "avatar-content"], [1, "ml-75", "text-muted"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "comment-btn", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", "add-todo"], ["type", "button", 1, "btn", "btn-danger", "update-todo", 3, "click"], ["id", "todo-task-list-drag", 1, "todo-task-list-wrapper", "list-unstyled"], [1, "todo-item", 3, "checked", "ngClass", "click"], [1, "todo-title-wrapper", "d-flex", "justify-content-sm-between", "justify-content-end", "align-items-center"], [1, "todo-title-area", "d-flex"], [1, "ficon", "feather", "ft-more-vertical", "handle"], [1, "custom-control", "custom-checkbox", 3, "click"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 3, "for"], [1, "todo-title", "mx-50", "m-0", "truncate"], [1, "todo-item-action", "d-flex", "align-items-center"], [1, "todo-badge-wrapper", "d-flex"], ["class", "avatar ml-1", 4, "ngIf"], [1, "todo-item-favorite", "ml-75", 3, "click"], [1, "ficon", "feather", "ft-star"], [1, "todo-item-delete", "ml-75", 3, "click"], [1, "ficon", "feather", "ft-trash-2"], [1, "avatar", "ml-1"], ["default", "../../../../assets/images/portrait/small/default.png", "alt", "avatar", "height", "30", "width", "30", 3, "src"]], template: function TodoappComponent_Template(rf, ctx) { if (rf & 1) {
            var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_Template_span_click_4_listener($event) { return ctx.sidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_Template_button_click_8_listener($event) { return ctx.sidebartask($event); })("click", function TodoappComponent_Template_button_click_8_listener() { return ctx.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "New Task");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " All");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Filters");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TodoappComponent_div_21_Template, 6, 8, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Labels");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TodoappComponent_div_24_Template, 5, 8, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, TodoappComponent_h5_29_Template, 2, 0, "h5", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TodoappComponent_button_30_Template, 4, 0, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Add to another project");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Create follow up task");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Print");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_Template_button_click_43_listener($event) { return ctx.sidebartask($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TodoappComponent_Template_form_ngSubmit_45_listener($event) { return ctx.onSubmit($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "textarea", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, TodoappComponent_img_54_Template, 1, 1, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, TodoappComponent_img_55_Template, 1, 1, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ng-select", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TodoappComponent_Template_ng_select_ngModelChange_59_listener($event) { return ctx.selectedAssignee = $event; })("change", function TodoappComponent_Template_ng_select_change_59_listener($event) { return ctx.getSelectedTODOTypeImage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_Template_div_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65); return _r6.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 48, 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "quill-editor", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFocus", function TodoappComponent_Template_quill_editor_onFocus_69_listener() { return ctx.focus(); })("onBlur", function TodoappComponent_Template_quill_editor_onBlur_69_listener() { return ctx.blur(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Bold");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Italic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Underline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "button", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "select", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TodoappComponent_Template_select_change_81_listener($event) { return ctx.getSelectedTODOTypeText($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "option", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Select Tag");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "option", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Project");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "option", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "option", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Bug");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "option", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "API");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "option", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "UI");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, TodoappComponent_img_99_Template, 1, 1, "img", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, TodoappComponent_img_100_Template, 1, 1, "img", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, TodoappComponent_img_101_Template, 1, 0, "img", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, TodoappComponent_div_102_Template, 2, 1, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, TodoappComponent_div_103_Template, 2, 1, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, TodoappComponent_div_104_Template, 2, 0, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h4", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Comments:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, TodoappComponent_div_107_Template, 8, 6, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "quill-editor", 81, 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFocus", function TodoappComponent_Template_quill_editor_onFocus_111_listener() { return ctx.focus(); })("onBlur", function TodoappComponent_Template_quill_editor_onBlur_111_listener() { return ctx.blur(); })("ngModelChange", function TodoappComponent_Template_quill_editor_ngModelChange_111_listener($event) { return ctx.todoCommentsField = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "button", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Bold");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Italic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Underline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "button", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Strike");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, TodoappComponent_button_123_Template, 3, 0, "button", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, TodoappComponent_button_125_Template, 2, 0, "button", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, TodoappComponent_button_126_Template, 2, 0, "button", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "div", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "div", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_Template_div_click_132_listener($event) { return ctx.sidebartask($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoappComponent_Template_div_click_137_listener($event) { return ctx.sidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "fieldset", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "input", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TodoappComponent_Template_input_keyup_140_listener($event) { return ctx.search($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "button", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "i", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Sort");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Ascending");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Descending");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, TodoappComponent_ul_155_Template, 19, 14, "ul", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "No Items Found");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todoFilterList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todoLableList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todoId == null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todoId !== null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.todo);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todoId == null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todoId !== null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.contact)("ngModel", ctx.selectedAssignee);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c3))("modules", ctx.newTodoquillConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedItem && ctx.loggedInUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItem && ctx.selectedItem.creator && ctx.selectedItem.creator.image);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedItem && !ctx.loggedInUser.photoURL || ctx.selectedItem && !ctx.selectedItem.creator);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedItem && ctx.currentUserName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItem && ctx.selectedItem.creator);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currentUserName && (!ctx.selectedItem || !ctx.selectedItem.creator));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todoComments);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c3))("modules", ctx.TodoquillConfig)("ngModel", ctx.todoCommentsField)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todoId !== null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todoId == null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todoId !== null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todos);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbInputDatepicker"], ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_16__["ImagePreloadDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: ["[_nghost-%COMP%]     .todo-app-menu {\r\n    width: 100% !important;\r\n    padding: .5rem 0;\r\n}\r\n[_nghost-%COMP%]     .ml-25 {\r\n  margin-left: .25rem!important;\r\n}\r\n[_nghost-%COMP%]     .todo-sidebar .todo-app-menu .sidebar-menu-list .filter-label {\r\n  font-family: Quicksand,Georgia,\"Times New Roman\",Times,serif;\r\n  letter-spacing: 1px;\r\n  color: #bac0c7;\r\n}\r\n[_nghost-%COMP%]     .border {\r\n    border: 1px solid #dde1e6 !important;\r\n}\r\n[_nghost-%COMP%]     .ql-container.ql-snow {\r\n  border: 0px solid #ccc;\r\n}\r\n[_nghost-%COMP%]     .ql-toolbar.ql-snow {\r\n  border: 0px solid #ccc;\r\n \r\n}\r\n[_nghost-%COMP%]     .btn-primary {\r\n   height: -webkit-fit-content;\r\n   height: -moz-fit-content;\r\n   height: fit-content;\r\n   margin-right: 7px;\r\n}\r\n[_nghost-%COMP%]     .new-taskDropdown::after {\r\n   content: \"\" !important;\r\n}\r\n[_nghost-%COMP%]     .show > .dropdownnew-task {\r\nleft: -166px !important;\r\n}\r\n[_nghost-%COMP%]     .show > .dropdown-sort {\r\n   left: -48px !important;\r\n}\r\n@media (max-width: 991.98px){\r\n  .app-content[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%] {\r\n      width: 100%!important;\r\n  }\r\n}\r\n[_nghost-%COMP%]     .py-75 {\r\n  padding-top: .75rem!important;\r\n}\r\n[_nghost-%COMP%]     .py-75 {\r\n  padding-bottom: .75rem!important;\r\n}\r\n[_nghost-%COMP%]     .ImageUpload {\r\n  width: 10%;\r\n  hight: 10%;\r\n}\r\n[_nghost-%COMP%]     .add-todo{\r\n  margin-left: 10px;\r\n}\r\n[_nghost-%COMP%]     .todo-new-task-sidebar .avatar i {\r\n  right : 18px;\r\n  bottom : 18px;\r\n}\r\n[_nghost-%COMP%]     .ng-dropdown-panel .ng-dropdown-panel-items {\r\n   width: -webkit-fit-content !important;\r\n   width: -moz-fit-content !important;\r\n   width: fit-content !important;\r\n}\r\n[_nghost-%COMP%]     .ng-select {\r\n  width: 130px;\r\n}\r\n@media (max-width: 349.98px) {\r\n  .sidebar[_ngcontent-%COMP%]   .todo-sidebar[_ngcontent-%COMP%] {\r\n    width : 230px;\r\n  }\r\n}\r\n@media (max-width: 575.98px) {\r\n  .todo-new-task-sidebar[_ngcontent-%COMP%] {\r\n    width : 88%;\r\n  }\r\n}\r\n[_nghost-%COMP%]      .gradient-mint {\r\n  background-image: linear-gradient(45deg,#28d094,#28d094)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .gradient-primary{\r\n  background-image: linear-gradient(45deg,#666ee8,#666ee8)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .gradient-warning {\r\n  background-image: linear-gradient(45deg,#ff9149,#ff9149)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .gradient-danger {\r\n  background-image: linear-gradient(45deg,#ff4961,#ff4961)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n[_nghost-%COMP%]      .gradient-info {\r\n  background-image: linear-gradient(45deg,#1e9ff2,#1e9ff2)!important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n }\r\n\r\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\r\n  color: unset !important;\r\n  background-color: unset !important;\r\n  border-color: #d3d9df !important;\r\n}\r\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\r\n  background-color: #e2e6ea !important;\r\n  border-color: #dae0e5 !important;\r\n}\r\n[_nghost-%COMP%]     .btn-light {\r\n  color: unset !important;\r\n  background-color: unset !important;\r\n  border-color: unset !important;\r\n}\r\n[_nghost-%COMP%]     .bg-primary {\r\n  background-color: #007bff !important;\r\n}\r\n[_nghost-%COMP%]     .text-white {\r\n  color: #fff !important;\r\n}\r\n[_nghost-%COMP%]     .custom-day {\r\n  text-align: center;\r\n  padding: .185rem .25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n[_nghost-%COMP%]     .custom-day:active {\r\n  color: #6d7183 !important;\r\n background-color: #fff !important;\r\n border-block-color: rgb(2, 117, 216) !important;\r\n \r\n}\r\n.bg-light[_ngcontent-%COMP%] {\r\n  background-color: #f8f9fa !important;\r\n}\r\n[_nghost-%COMP%]     .hidden {\r\n  display: block !important;\r\n}\r\n.ngb-dp-weekday[_ngcontent-%COMP%] {\r\n  color: #17a2b8;\r\n}\r\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\r\n  pointer-events: auto;\r\n}\r\n.small[_ngcontent-%COMP%] {\r\n  font-size: 80%;\r\n  font-weight: 400;\r\n}\r\n.ngb-dp-day[_ngcontent-%COMP%] {\r\n  cursor: pointer !important;\r\n}\r\n.ngb-dp-month[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n.btn-light[_ngcontent-%COMP%]:hover {\r\n  color: #212529 !important;\r\n  background-color: #e2e6ea !important;\r\n  border-color: #dae0e5 !important;\r\n}\r\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\r\n  pointer-events: auto;\r\n}\r\n.ngb-dp-header[_ngcontent-%COMP%] {\r\n  border-bottom: 0;\r\n  border-radius: .25rem .25rem 0 0;\r\n  padding-top: .25rem;\r\n}\r\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n.custom-day[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n  background-color: #e6e6e6;\r\n}\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(2, 117, 216);\r\n  color: white;\r\n}\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n  background-color: rgba(2, 117, 216, 0.5);\r\n}\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n.custom-day[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  border-radius: 0.25rem;\r\n  display: inline-block;\r\n  width: 2rem;\r\n}\r\n.custom-day[_ngcontent-%COMP%]:hover, .custom-day.focused[_ngcontent-%COMP%] {\r\n  background-color: #e6e6e6;\r\n}\r\n.weekend[_ngcontent-%COMP%] {\r\n  background-color: #f0ad4e;\r\n  border-radius: 1rem;\r\n  color: white;\r\n}\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n[_nghost-%COMP%]     .ft-calendar{\r\n  font-family: feather!important;\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: large;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n[_nghost-%COMP%]     .input-group-text {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: unset !important;\r\n  margin-bottom: unset !important;\r\n  font-size: unset !important;\r\n  font-weight: unset !important;\r\n  line-height: unset !important;\r\n  color:unset !important;\r\n  text-align: unset !important;\r\n  white-space: unset !important;\r\n  background-color: unset !important;\r\n  border:  unset !important;\r\n  border-radius: unset !important;\r\n}\r\n.ml-75[_ngcontent-%COMP%], .mx-75[_ngcontent-%COMP%] {\r\n  margin-left: .75rem!important;\r\n  }\r\n.mx-50[_ngcontent-%COMP%] {\r\n  margin-left: .5rem!important;\r\n}\r\n.sidebar[_ngcontent-%COMP%] {\r\n    width : 270px !important;\r\n  }\r\n.align-middle[_ngcontent-%COMP%] {\r\n    margin-left: 3px;\r\n}\r\n.mr-50[_ngcontent-%COMP%], .mx-50[_ngcontent-%COMP%] {\r\n  margin-right: .5rem!important;\r\n}\r\n[_nghost-%COMP%]     .ft-plus{\r\n  margin-right: 3px !important;\r\n}\r\ncontrol[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  margin-left: -12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNERBQTREO0VBQzVELG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0M7SUFDRyxvQ0FBb0M7QUFDeEM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCOztBQUV4QjtBQUNBO0dBQ0csMkJBQW1CO0dBQW5CLHdCQUFtQjtHQUFuQixtQkFBbUI7R0FDbkIsaUJBQWlCO0FBQ3BCO0FBQ0E7R0FDRyxzQkFBc0I7QUFDekI7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0dBQ0csc0JBQXNCO0FBQ3pCO0FBQ0E7RUFDRTtNQUNJLHFCQUFxQjtFQUN6QjtBQUNGO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7R0FDRyxxQ0FBNkI7R0FBN0Isa0NBQTZCO0dBQTdCLDZCQUE2QjtBQUNoQztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRSxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtBQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7QUFDQTtFQUNDLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0FBQ0E7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtBQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7QUFDQSxvQkFBb0I7QUFDckI7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsaUNBQWlDO0NBQ2pDLCtDQUErQzs7QUFFaEQ7QUFFQTtFQUNFLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCO0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0I7QUFDRjtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0lBQ0ksd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InRvZG9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudG9kby1hcHAtbWVudSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogLjVyZW0gMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1sLTI1IHtcclxuICBtYXJnaW4tbGVmdDogLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvZG8tc2lkZWJhciAudG9kby1hcHAtbWVudSAuc2lkZWJhci1tZW51LWxpc3QgLmZpbHRlci1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxHZW9yZ2lhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjb2xvcjogI2JhYzBjNztcclxufVxyXG4gOmhvc3QgOjpuZy1kZWVwIC5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZTFlNiAhaW1wb3J0YW50O1xyXG59IFxyXG46aG9zdCA6Om5nLWRlZXAgLnFsLWNvbnRhaW5lci5xbC1zbm93IHtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucWwtdG9vbGJhci5xbC1zbm93IHtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xyXG4gXHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4tcHJpbWFyeSB7XHJcbiAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubmV3LXRhc2tEcm9wZG93bjo6YWZ0ZXIge1xyXG4gICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc2hvdyA+IC5kcm9wZG93bm5ldy10YXNrIHtcclxubGVmdDogLTE2NnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5zaG93ID4gLmRyb3Bkb3duLXNvcnQge1xyXG4gICBsZWZ0OiAtNDhweCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCl7XHJcbiAgLmFwcC1jb250ZW50IC5jb250ZW50LXJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnB5LTc1IHtcclxuICBwYWRkaW5nLXRvcDogLjc1cmVtIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnB5LTc1IHtcclxuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLkltYWdlVXBsb2FkIHtcclxuICB3aWR0aDogMTAlO1xyXG4gIGhpZ2h0OiAxMCU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5hZGQtdG9kb3tcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvZG8tbmV3LXRhc2stc2lkZWJhciAuYXZhdGFyIGkge1xyXG4gIHJpZ2h0IDogMThweDtcclxuICBib3R0b20gOiAxOHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcclxuICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM0OS45OHB4KSB7XHJcbiAgLnNpZGViYXIgLnRvZG8tc2lkZWJhciB7XHJcbiAgICB3aWR0aCA6IDIzMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAudG9kby1uZXctdGFzay1zaWRlYmFyIHtcclxuICAgIHdpZHRoIDogODglO1xyXG4gIH1cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1taW50IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzI4ZDA5NCwjMjhkMDk0KSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuIH1cclxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM2NjZlZTgsIzY2NmVlOCkhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2ZmOTE0OSwjZmY5MTQ5KSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuIH1cclxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNmZjQ5NjEsI2ZmNDk2MSkhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzFlOWZmMiwjMWU5ZmYyKSFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuIH1cclxuIC8qIGRhdGUgcGlja2VyIGNzcyAqL1xyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XHJcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xyXG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcclxuIFxyXG59XHJcblxyXG4uYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgY29sb3I6ICMxN2EyYjg7XHJcbn1cclxuXHJcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcblxyXG4uc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uZ2ItZHAtZGF5IHtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5nYi1kcC1tb250aCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tbGlnaHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcbi5uZ2ItZHAtaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xyXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XHJcbn1cclxuXHJcbi5uZ2ItZHAtZGF5LFxyXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxyXG4ubmdiLWRwLXdlZWtkYXkge1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbi5jdXN0b20tZGF5LnJhbmdlLFxyXG4uY3VzdG9tLWRheTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXN0b20tZGF5LmZhZGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWRheSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuLmN1c3RvbS1kYXk6aG92ZXIsIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuLndlZWtlbmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZ0LWNhbGVuZGFye1xyXG4gIGZvbnQtZmFtaWx5OiBmZWF0aGVyIWltcG9ydGFudDtcclxuICBzcGVhazogbm9uZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICBjb2xvcjp1bnNldCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICBib3JkZXI6ICB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1sLTc1LCAubXgtNzUge1xyXG4gIG1hcmdpbi1sZWZ0OiAuNzVyZW0haW1wb3J0YW50O1xyXG4gIH1cclxuLm14LTUwIHtcclxuICBtYXJnaW4tbGVmdDogLjVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5zaWRlYmFyIHtcclxuICAgIHdpZHRoIDogMjcwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFsaWduLW1pZGRsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5tci01MCwgLm14LTUwIHtcclxuICBtYXJnaW4tcmlnaHQ6IC41cmVtIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZ0LXBsdXN7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDtcclxufVxyXG5jb250cm9sOmRpc2FibGVkLCAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tbGVmdDogLTEycHg7XHJcbn0iXX0= */"] });
    return TodoappComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodoappComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-todoapp',
                templateUrl: './todoapp.component.html',
                styleUrls: ['./todoapp.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _api_todo_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"] }, { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _api_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }, { type: _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_11__["QuillInitializeServiceService"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], { static: true }]
        }], editor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['editor', { static: true }]
        }] }); })();


/***/ }),

/***/ "kf8Y":
/*!******************************************************************!*\
  !*** ./src/app/content/applications/todo-app/todo-app.module.ts ***!
  \******************************************************************/
/*! exports provided: TodoAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAppModule", function() { return TodoAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _todoapp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoapp.component */ "dTOi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "MMa0");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_api_todo_todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_api/todo/todo.service */ "mIRT");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-quill */ "alHs");
/* harmony import */ var _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../_directives/image.preload.directive */ "wVYg");





















var TodoAppModule = /** @class */ (function () {
    function TodoAppModule() {
    }
    TodoAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TodoAppModule });
    TodoAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TodoAppModule_Factory(t) { return new (t || TodoAppModule)(); }, providers: [src_app_api_todo_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"].enablePersistence(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _todoapp_component__WEBPACK_IMPORTED_MODULE_2__["TodoappComponent"]
                    }
                ])
            ]] });
    return TodoAppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoAppModule, { declarations: [_todoapp_component__WEBPACK_IMPORTED_MODULE_2__["TodoappComponent"], _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_14__["ImagePreloadDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_14__["ImagePreloadDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoAppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_todoapp_component__WEBPACK_IMPORTED_MODULE_2__["TodoappComponent"], _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_14__["ImagePreloadDirective"]],
                providers: [src_app_api_todo_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"].forRoot(),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                    angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                    angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"].enablePersistence(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _todoapp_component__WEBPACK_IMPORTED_MODULE_2__["TodoappComponent"]
                        }
                    ])
                ],
                exports: [_directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_14__["ImagePreloadDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mIRT":
/*!*******************************************!*\
  !*** ./src/app/_api/todo/todo.service.ts ***!
  \*******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");






var TodoService = /** @class */ (function () {
    function TodoService(firestore) {
        this.firestore = firestore;
        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        this.ref = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('todo');
    }
    TodoService.prototype.getTODOS = function (userId) {
        return this.firestore.collection('todo', function (ref) { return ref.orderBy('createdDate', 'desc')
            .where('uid', '==', userId); }).snapshotChanges();
    };
    TodoService.prototype.getAssignedTODOS = function (userId) {
        return this.firestore.collection('todo', function (ref) { return ref.orderBy('createdDate', 'desc')
            .where('assignedTo.uid', '==', userId); }).snapshotChanges();
    };
    TodoService.prototype.createTodo = function (todo) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.ref.add(todo).then(function (doc) {
                observer.next({
                    data: doc
                });
            });
        });
    };
    TodoService.prototype.sendMessage = function (todoId, data) {
        return this.firestore.collection('todo').doc(todoId).update({
            todoComments: data
        });
    };
    TodoService.prototype.updateTODO = function (id, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.ref.doc(id).set(data).then(function () {
                observer.next();
            });
        });
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.ref.doc(id).delete();
    };
    TodoService.ɵfac = function TodoService_Factory(t) { return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoService, factory: TodoService.ɵfac, providedIn: 'root' });
    return TodoService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "oxVz":
/*!***********************************************!*\
  !*** ./src/assets/data/application/todo.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Brownie marzipan gingerbread cake muffin\",\"description\":\"Oat cake biscuit liquorice biscuit cookie chocolate marshmallow dragée.\",\"badge\":\"Project\",\"type\":\"warning\",\"completed\":false,\"isDeleted\":false,\"createdDate\":\"\",\"uid\":\"\"},{\"title\":\"Ice cream toffee pudding caramels donut ice cream\",\"description\":\"Chocolate bar chupa chups biscuit. Icing pudding cake caramels halvah.\",\"badge\":\"\",\"type\":\"\",\"completed\":false,\"isDeleted\":false,\"createdDate\":\"\",\"uid\":\"\"},{\"title\":\"Danish liquorice candy lemon drops gingerbread\",\"description\":\"Jelly beans sesame snaps wafer sweet roll. Biscuit tart pastry lemon drops brownie.\",\"badge\":\"Product\",\"type\":\"secondary\",\"completed\":false,\"isDeleted\":false,\"createdDate\":\"\",\"uid\":\"\"},{\"title\":\"Chocolate macaroon oat cake pudding marzipan\",\"description\":\"Sweet tart cake jujubes. Jelly beans carrot cake sugar plum candy dessert.\",\"badge\":\"\",\"type\":\"\",\"completed\":false,\"isDeleted\":false,\"createdDate\":\"\",\"uid\":\"\"},{\"title\":\"Toffee biscuit muffin toffee tootsie roll macaroon\",\"description\":\"Tootsie roll caramels tart chupa chups tiramisu lollipop. Tiramisu soufflé bonbon.\",\"badge\":\"UI\",\"type\":\"danger\",\"completed\":false,\"isDeleted\":false,\"createdDate\":\"\",\"uid\":\"\"},{\"title\":\"Powder chocolate fruitcake apple pie marshmallow\",\"description\":\"Chocolate cookie tart apple pie cake cupcake gingerbread fruitcake cookie.\",\"badge\":\"\",\"type\":\"\",\"completed\":false,\"isDeleted\":false,\"createdDate\":\"\",\"uid\":\"\"}]");

/***/ }),

/***/ "rp4G":
/*!*****************************************************!*\
  !*** ./src/assets/data/application/todo_lable.json ***!
  \*****************************************************/
/*! exports provided: todoFilterList, todoLableList, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"todoFilterList\":[{\"Id\":1,\"lableName\":\"Favourite\",\"lableIcon\":\"ficon feather ficon feather ft-star\",\"isSelected\":true},{\"Id\":2,\"lableName\":\"Done\",\"lableIcon\":\"ficon feather ft-check\",\"isSelected\":false},{\"Id\":3,\"lableName\":\"Deleted\",\"lableIcon\":\"ficon feather ft-trash-2\",\"isSelected\":false}],\"todoLableList\":[{\"Id\":1,\"lableName\":\"Frontend\",\"isSelected\":false,\"bulletClass\":\"gradient-primary\"},{\"Id\":2,\"lableName\":\"Backend\",\"isSelected\":false,\"bulletClass\":\"gradient-mint\"},{\"Id\":3,\"lableName\":\"Issue\",\"isSelected\":false,\"bulletClass\":\"gradient-warning\"},{\"Id\":4,\"lableName\":\"Design\",\"isSelected\":false,\"bulletClass\":\"gradient-danger\"},{\"Id\":5,\"lableName\":\"Wireframe\",\"isSelected\":false,\"bulletClass\":\"gradient-info\"}]}");

/***/ }),

/***/ "wVYg":
/*!********************************************************!*\
  !*** ./src/app/_directives/image.preload.directive.ts ***!
  \********************************************************/
/*! exports provided: ImagePreloadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreloadDirective", function() { return ImagePreloadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var ImagePreloadDirective = /** @class */ (function () {
    function ImagePreloadDirective() {
    }
    ImagePreloadDirective.prototype.updateUrl = function () {
        this.src = this.default;
    };
    ImagePreloadDirective.prototype.load = function () {
        this.className = 'image-loaded';
    };
    ImagePreloadDirective.ɵfac = function ImagePreloadDirective_Factory(t) { return new (t || ImagePreloadDirective)(); };
    ImagePreloadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ImagePreloadDirective, selectors: [["img", "default", ""]], hostVars: 3, hostBindings: function ImagePreloadDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImagePreloadDirective_error_HostBindingHandler() { return ctx.updateUrl(); })("load", function ImagePreloadDirective_load_HostBindingHandler() { return ctx.load(); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
        } }, inputs: { src: "src", default: "default" } });
    return ImagePreloadDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagePreloadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'img[default]',
                host: {
                    '(error)': 'updateUrl()',
                    '(load)': 'load()',
                    '[src]': 'src'
                }
            }]
    }], null, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], default: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=app-content-applications-todo-app-todo-app-module.js.map