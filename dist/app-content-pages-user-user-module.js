(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-pages-user-user-module"],{

/***/ "+3ci":
/*!***********************************************************************!*\
  !*** ./src/app/content/pages/user/user-cards/user-cards.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardsComponent", function() { return UserCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




var UserCardsComponent = /** @class */ (function () {
    function UserCardsComponent() {
    }
    UserCardsComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'User Cards',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'Users',
                    'isLink': true,
                    'link': ''
                },
                {
                    'name': 'User Cards',
                    'isLink': false
                }
            ]
        };
    };
    UserCardsComponent.ɵfac = function UserCardsComponent_Factory(t) { return new (t || UserCardsComponent)(); };
    UserCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCardsComponent, selectors: [["app-user-cards"]], decls: 584, vars: 1, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "simple-user-cards", 1, "row"], [1, "col-12"], [1, "text-uppercase"], [1, "col-xl-3", "col-md-6", "col-12"], [1, "card"], [1, "text-center"], [1, "card-body"], ["src", "../../../assets/images/portrait/medium/avatar-m-4.png", "alt", "Card image", 1, "rounded-circle", "height-150"], [1, "card-title"], [1, "card-subtitle", "text-muted"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], ["src", "../../../assets/images/portrait/medium/avatar-m-1.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["src", "../../../assets/images/portrait/medium/avatar-m-6.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["src", "../../../assets/images/portrait/medium/avatar-m-5.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["id", "simple-user-cards-with-border", 1, "row", "mt-2"], [1, "card", "border-teal", "border-lighten-2"], [1, "card", "border-pink", "border-lighten-2"], [1, "card", "border-blue", "border-lighten-2"], [1, "card", "border-amber", "border-lighten-2"], ["id", "user-cards-with-square-thumbnail", 1, "row", "mt-2"], [1, "card", "box-shadow-1"], [1, "card", "box-shadow-2"], [1, "card", "box-shadow-3"], [1, "card", "box-shadow-4"], ["id", "user-profile-cards", 1, "row", "mt-2"], [1, "col-xl-4", "col-md-6", "col-12"], ["type", "button", 1, "btn", "btn-danger", "mr-1"], [1, "la", "la-plus"], ["type", "button", 1, "btn", "btn-primary", "mr-1"], [1, "feather", "ft-user"], [1, "list-group", "list-group-flush"], [1, "list-group-item", 3, "routerLink"], [1, "la", "la-briefcase"], [1, "feather", "ft-mail"], [1, "feather", "ft-check-square"], [1, "feather", "ft-message-square"], [1, "card", "card", "border-teal", "border-lighten-2"], ["id", "user-profile-cards-with-stats", 1, "row", "mt-2"], [1, "card", "profile-card-with-stats"], ["src", "../../../assets/images/portrait/medium/avatar-m-8.png", "alt", "Card image", 1, "rounded-circle", "height-150"], [1, "list-inline", "list-inline-pipe"], ["role", "group", "aria-label", "Profile example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-float", "box-shadow-0", "btn-outline-info"], [1, "ladda-label"], [1, "la", "la-bell-o"], [1, "ladda-spinner"], [1, "la", "la-heart-o"], [1, "la", "la-dashcube"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-md", "mr-1"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-md", "mr-1"], [1, "card", "profile-card-with-stats", "border-teal", "border-lighten-2"], ["src", "../../../assets/images/portrait/medium/avatar-m-7.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["type", "button", 1, "btn", "btn-float", "box-shadow-0", "btn-outline-info", "btn-round"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-md", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-md", "btn-round", "mr-1"], [1, "card", "profile-card-with-stats", "box-shadow-2"], ["src", "../../../assets/images/portrait/medium/avatar-m-10.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["type", "button", 1, "btn", "btn-float", "box-shadow-0", "btn-outline-info", "btn-square"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-md", "btn-square", "mr-1"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-md", "btn-square", "mr-1"], ["id", "user-profile-cards-with-cover-image", 1, "row", "mt-2"], [1, "card", "profile-card-with-cover"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../assets/images/carousel/18.jpg')"], [1, "card-profile-image"], ["src", "../../../assets/images/portrait/small/avatar-s-4.png", "alt", "Card image", 1, "rounded-circle", "img-border", "box-shadow-1"], [1, "profile-card-with-cover-content", "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "btn", "btn-social-icon", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"], [1, "card", "profile-card-with-cover", "border-teal", "border-lighten-2"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../assets/images/carousel/16.jpg')"], ["src", "../../../assets/images/portrait/small/avatar-s-9.png", "alt", "Card image", 1, "rounded-circle", "img-border"], [1, "card", "profile-card-with-cover", "box-shadow-2"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../assets/images/carousel/17.jpg')"], ["src", "../../../assets/images/portrait/small/avatar-s-8.png", "alt", "Card image", 1, "rounded-circle", "img-border", "box-shadow-4"]], template: function UserCardsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Simple User Cards");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A very basic simple user cards.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Michelle Howard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Joseph Ryan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Marketing Head");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Frances Butler");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Technical Lead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Andrew Davis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "UI/UX Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "section", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Simple User Cards with Border");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Use color palette border class ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "border-color");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, ", ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "border-lighten-*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Michelle Howard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Joseph Ryan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Marketing Head");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Frances Butler");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Technical Lead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Andrew Davis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "UI/UX Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "section", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Simple User Cards with Square Thumbnail");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Use shadow helper class ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "box-shadow-*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " to add show in cards.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Michelle Howard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Joseph Ryan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Marketing Head");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Frances Butler");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Technical Lead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Andrew Davis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "UI/UX Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "section", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "User Profile Cards");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "User profile cards with border & shadow variant.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Frances Butler");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Technical Lead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " Follow");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Overview");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Task");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " Calender");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Andrew Davis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "UI/UX Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " Follow");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " Overview");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Task");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " Calender");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Michelle Howard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " Follow");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " Overview");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " Task");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " Calender");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "section", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "User Profile Cards with Stats");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "User profile cards with Stats in border & shadow variant.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "img", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Linda Holland");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "ul", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "@lindah");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "domain.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "12+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "25");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "75+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "125");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores id quo, sed ei.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "button", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " Follow");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "button", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "img", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Philip Garrett");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "ul", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "@philipg");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "domain.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "button", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "i", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "12+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "button", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "25");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "button", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "button", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "75+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "button", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "125");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores id quo, sed ei.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "button", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " Follow");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "button", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "img", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Christine Wood");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "ul", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "@christine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "domain.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "button", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "i", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "12+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "button", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "25");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "button", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](481, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "button", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "75+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "button", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "125");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "span", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores id quo, sed ei.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "button", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, " Follow");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "button", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, " Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "section", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "User Profile Cards with Cover Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "User profile cards with Cover Image in border & shadow variant.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "div", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "img", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Linda Holland");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "ul", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "@lindah");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "domain.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](527, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](529, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "a", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](533, "span", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](538, "img", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Philip Garrett");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "ul", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "@philip");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "domain.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](552, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "a", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "span", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](561, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](563, "img", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "Christine Wood");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "ul", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "@christine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "domain.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "h6", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Managing Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](577, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](579, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "a", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "a", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](583, "span", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%]     .btn.btn-social-icon {\r\n    padding: unset !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJ1c2VyLWNhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJ0bi5idG4tc29jaWFsLWljb24ge1xyXG4gICAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
    return UserCardsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-cards',
                templateUrl: './user-cards.component.html',
                styleUrls: ['./user-cards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "+7SE":
/*!**********************************************************!*\
  !*** ./src/app/_services/confirmation-dialog.service.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var _core_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_core/confirmation-dialog/confirmation-dialog.component */ "3CGN");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");





var ConfirmationDialogService = /** @class */ (function () {
    function ConfirmationDialogService(modalService) {
        this.modalService = modalService;
    }
    ConfirmationDialogService.prototype.confirm = function (title, message, btnOkText, btnCancelText, dialogSize) {
        if (btnOkText === void 0) { btnOkText = 'OK'; }
        if (btnCancelText === void 0) { btnCancelText = 'Cancel'; }
        if (dialogSize === void 0) { dialogSize = 'sm'; }
        var modalRef = this.modalService.open(_core_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"], { size: dialogSize, windowClass: 'animated fadeInDown' });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    };
    ConfirmationDialogService.ɵfac = function ConfirmationDialogService_Factory(t) { return new (t || ConfirmationDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
    ConfirmationDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfirmationDialogService, factory: ConfirmationDialogService.ɵfac, providedIn: 'root' });
    return ConfirmationDialogService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ConfirmationDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "3CGN":
/*!****************************************************************************!*\
  !*** ./src/app/_core/confirmation-dialog/confirmation-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.decline = function () {
        this.activeModal.close(false);
    };
    ConfirmationDialogComponent.prototype.accept = function () {
        this.activeModal.close(true);
    };
    ConfirmationDialogComponent.prototype.dismiss = function () {
        this.activeModal.dismiss();
    };
    ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbActiveModal"])); };
    ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], inputs: { title: "title", message: "message", btnOkText: "btnOkText", btnCancelText: "btnCancelText" }, decls: 16, vars: 4, consts: [[1, "modal-header"], [1, "modal-title"], [1, "mr-2", "mt-6", "feather", "ft-alert-triangle"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "grey", "btn-outline-secondary", 3, "click"], [1, "feather", "ft-x"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "feather", "ft-check"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_4_listener() { return ctx.dismiss(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_10_listener() { return ctx.decline(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_13_listener() { return ctx.accept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.btnCancelText);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.btnOkText);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
    return ConfirmationDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-confirmation-dialog',
                templateUrl: './confirmation-dialog.component.html',
                styleUrls: ['./confirmation-dialog.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbActiveModal"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], btnOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], btnCancelText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "5T1Y":
/*!***********************************************!*\
  !*** ./src/app/_services/data-api.service.ts ***!
  \***********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");




var DataApiService = /** @class */ (function () {
    function DataApiService(afs) {
        this.afs = afs;
        this.usersCollection = afs.collection('users');
        this.users = this.usersCollection.valueChanges();
    }
    DataApiService.prototype.getAllUsers = function () {
        return this.users;
    };
    DataApiService.prototype.getUserByUid = function (uid) {
        this.afs.collection('users').snapshotChanges();
        return this.afs.collection('users'), function (ref) { return ref.where("uid", "==", uid).valueChanges(); };
    };
    DataApiService.prototype.getCurrentUser2 = function () {
    };
    DataApiService.prototype.addUser = function () { };
    DataApiService.prototype.updateUser = function () { };
    DataApiService.prototype.deleteUser = function () { };
    DataApiService.ɵfac = function DataApiService_Factory(t) { return new (t || DataApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
    DataApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataApiService, factory: DataApiService.ɵfac, providedIn: 'root' });
    return DataApiService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "BFlE":
/*!***************************************************!*\
  !*** ./src/app/content/pages/user/user.module.ts ***!
  \***************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _core_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../_core/confirmation-dialog.module */ "3O3Q");
/* harmony import */ var _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../_services/confirmation-dialog.service */ "+7SE");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-cards/user-cards.component */ "+3ci");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "vUNw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ "Q1xG");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../partials/general/card/card.module */ "vj4e");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2_photoswipe */ "f5Ne");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-archwizard */ "tPw2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-list/user-list.component */ "uHpQ");
/* harmony import */ var _worker_modal_worker_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./worker-modal/worker-modal.component */ "JWq8");


















// Imports from wizard 









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserModule });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogService"]], imports: [[
                _core_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_15__["CardModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_18__["ArchwizardModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDatepickerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"],
                angular2_photoswipe__WEBPACK_IMPORTED_MODULE_17__["Angular2PhotoswipeModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"].forRoot({
                    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_13__["BlockTemplateComponent"]
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].googleApiKey,
                    libraries: ['places']
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                    {
                        path: 'user-profile',
                        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]
                    },
                    {
                        path: 'user-cards',
                        component: _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_5__["UserCardsComponent"]
                    },
                    {
                        path: 'user-list',
                        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__["UserListComponent"]
                    },
                    {
                        path: 'worker-modal',
                        component: _worker_modal_worker_modal_component__WEBPACK_IMPORTED_MODULE_21__["WorkerModalComponent"]
                    },
                ]),
            ]] });
    return UserModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_5__["UserCardsComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__["UserListComponent"], _worker_modal_worker_modal_component__WEBPACK_IMPORTED_MODULE_21__["WorkerModalComponent"]], imports: [_core_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_15__["CardModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
        angular_archwizard__WEBPACK_IMPORTED_MODULE_18__["ArchwizardModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDatepickerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"],
        src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"],
        angular2_photoswipe__WEBPACK_IMPORTED_MODULE_17__["Angular2PhotoswipeModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [_user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_5__["UserCardsComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__["UserListComponent"], _worker_modal_worker_modal_component__WEBPACK_IMPORTED_MODULE_21__["WorkerModalComponent"]],
                imports: [
                    _core_confirmation_dialog_module__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_15__["CardModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_10__["NgxEchartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
                    angular_archwizard__WEBPACK_IMPORTED_MODULE_18__["ArchwizardModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDatepickerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"],
                    src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"],
                    angular2_photoswipe__WEBPACK_IMPORTED_MODULE_17__["Angular2PhotoswipeModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"].forRoot({
                        template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_13__["BlockTemplateComponent"]
                    }),
                    _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                        apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].googleApiKey,
                        libraries: ['places']
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                        {
                            path: 'user-profile',
                            component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]
                        },
                        {
                            path: 'user-cards',
                            component: _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_5__["UserCardsComponent"]
                        },
                        {
                            path: 'user-list',
                            component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__["UserListComponent"]
                        },
                        {
                            path: 'worker-modal',
                            component: _worker_modal_worker_modal_component__WEBPACK_IMPORTED_MODULE_21__["WorkerModalComponent"]
                        },
                    ]),
                ],
                providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "JWq8":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/user/worker-modal/worker-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: WorkerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerModalComponent", function() { return WorkerModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _api_workers_workers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../_api/workers/workers.service */ "+nQj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");











function WorkerModalComponent_small_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkerModalComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WorkerModalComponent_small_16_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.required);
} }
function WorkerModalComponent_small_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkerModalComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WorkerModalComponent_small_22_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.lastname.errors.required);
} }
function WorkerModalComponent_div_25_small_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El RUT es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkerModalComponent_div_25_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WorkerModalComponent_div_25_small_4_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.f.id.errors.required);
} }
var _c0 = function (a0) { return { "is-invalid": a0 }; };
function WorkerModalComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "RUT *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkerModalComponent_div_25_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.workerService.selectedWorker.id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WorkerModalComponent_div_25_small_4_Template, 2, 1, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r2.submitted && ctx_r2.f.id.errors))("ngModel", ctx_r2.workerService.selectedWorker.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.f.id.errors);
} }
function WorkerModalComponent_ng_template_26_div_0_small_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El RUT es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkerModalComponent_ng_template_26_div_0_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WorkerModalComponent_ng_template_26_div_0_small_4_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.f.id.errors.required);
} }
function WorkerModalComponent_ng_template_26_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "RUT *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkerModalComponent_ng_template_26_div_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r15.workerService.selectedWorker.id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WorkerModalComponent_ng_template_26_div_0_small_4_Template, 2, 1, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r12.submitted && ctx_r12.f.id.errors))("ngModel", ctx_r12.workerService.selectedWorker.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.submitted && ctx_r12.f.id.errors);
} }
function WorkerModalComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WorkerModalComponent_ng_template_26_div_0_Template, 5, 5, "div", 16);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.opc)("ngIfElse", _r3);
} }
function WorkerModalComponent_small_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El celular es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkerModalComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WorkerModalComponent_small_33_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.f.phone.errors.required);
} }
var WorkerModalComponent = /** @class */ (function () {
    function WorkerModalComponent(activeModal, workerService, formBuilder) {
        this.activeModal = activeModal;
        this.workerService = workerService;
        this.formBuilder = formBuilder;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.submitted = false;
    }
    WorkerModalComponent.prototype.ngOnInit = function () {
        console.log(this.opc);
        this.projectInfo = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getUserLogged();
    };
    Object.defineProperty(WorkerModalComponent.prototype, "f", {
        get: function () {
            return this.projectInfo.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerModalComponent.prototype, "fValue", {
        get: function () {
            return this.projectInfo.value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerModalComponent.prototype.onProjectInfoSubmit = function () {
        this.submitted = true;
        if (this.projectInfo.invalid) {
            return;
        }
        if (!this.opc) {
            // Se agrega nuevo usuario.
            this.workerService.addWorker(this.fValue, this.currentUser.uid);
            this.passEntry.emit(true);
            this.activeModal.close(true);
        }
        else {
            // Se edita un usuario.
            this.workerService.updateWorker(this.fValue, this.currentUser.uid);
            this.passEntry.emit(false);
            this.activeModal.close(false);
        }
        this.projectInfo.reset();
    };
    WorkerModalComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    WorkerModalComponent.prototype.getUserLogged = function () {
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    WorkerModalComponent.ɵfac = function WorkerModalComponent_Factory(t) { return new (t || WorkerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
    WorkerModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WorkerModalComponent, selectors: [["app-worker-modal"]], inputs: { opc: "opc" }, outputs: { passEntry: "passEntry" }, decls: 41, vars: 19, consts: [[1, "modal-header"], [1, "form-section"], [1, "mr-2", "mt-6", "feather", "ft-user"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-body"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "projectinput1"], ["type", "text", "id", "projectinput1", "formControlName", "name", "placeholder", "Nombre", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "form-text text-muted danger", "class", "invalid-feedback", 4, "ngIf"], ["for", "projectinput2"], ["type", "text", "id", "projectinput2", "formControlName", "lastname", "placeholder", "Apellido", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf", "ngIfElse"], ["editBlock", ""], ["for", "projectinput4"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Celular", 1, "form-control", 3, "ngClass", "ngModel", "keypress", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "grey", "btn-outline-secondary", 3, "click"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-sm", "btn-outline-primary"], [1, "feather", "ft-check"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "projectinput3"], ["type", "text", "id", "projectinput3", "formControlName", "id", "placeholder", "RUT", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "readonly", "", "id", "projectinput3", "formControlName", "id", "placeholder", "RUT", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"]], template: function WorkerModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkerModalComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function WorkerModalComponent_Template_form_ngSubmit_8_listener() { return ctx.onProjectInfoSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Nombre *");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkerModalComponent_Template_input_ngModelChange_15_listener($event) { return ctx.workerService.selectedWorker.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WorkerModalComponent_small_16_Template, 2, 1, "small", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Apellido *");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkerModalComponent_Template_input_ngModelChange_21_listener($event) { return ctx.workerService.selectedWorker.lastname = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, WorkerModalComponent_small_22_Template, 2, 1, "small", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, WorkerModalComponent_div_25_Template, 5, 5, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, WorkerModalComponent_ng_template_26_Template, 1, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Celular *");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function WorkerModalComponent_Template_input_keypress_32_listener($event) { return ctx.keyPress($event); })("ngModelChange", function WorkerModalComponent_Template_input_ngModelChange_32_listener($event) { return ctx.workerService.selectedWorker.phone = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, WorkerModalComponent_small_33_Template, 2, 1, "small", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkerModalComponent_Template_button_click_35_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Cerrar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Guardar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.opc ? "Editar personal" : "Agregar personal", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.projectInfo);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.name.errors))("ngModel", ctx.workerService.selectedWorker.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.lastname.errors))("ngModel", ctx.workerService.selectedWorker.lastname);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastname.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.opc == false)("ngIfElse", _r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.phone.errors))("ngModel", ctx.workerService.selectedWorker.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrZXItbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_1__["BlockUI"])('projectInfo'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WorkerModalComponent.prototype, "blockUIProjectInfo", void 0);
    return WorkerModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](WorkerModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-worker-modal',
                templateUrl: './worker-modal.component.html',
                styleUrls: ['./worker-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }, { type: _api_workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { opc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], blockUIProjectInfo: [], passEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }] }); })();


/***/ }),

/***/ "ScZz":
/*!***************************************************!*\
  !*** ./src/app/_services/notificacion.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "EApP");




var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
    }
    NotificationService.prototype.showSuccess = function (message, title) {
        this.toastr.success(message, title);
    };
    NotificationService.prototype.showError = function (message, title) {
        this.toastr.error(message, title);
    };
    NotificationService.prototype.showInfo = function (message, title) {
        this.toastr.info(message, title);
    };
    NotificationService.prototype.showWarning = function (message, title) {
        this.toastr.warning(message, title);
    };
    NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
    return NotificationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "uHpQ":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/user/user-list/user-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: compare, NgbSortable, UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSortable", function() { return NgbSortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../_services/confirmation-dialog.service */ "+7SE");
/* harmony import */ var _services_notificacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../_services/notificacion.service */ "ScZz");
/* harmony import */ var _worker_modal_worker_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../worker-modal/worker-modal.component */ "JWq8");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_workers_workers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../_api/workers/workers.service */ "+nQj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../_directives/sortable.directive */ "lfl4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");




















function UserListComponent_div_6_tr_34_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ngb-highlight", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ngb-highlight", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ngb-highlight", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ngb-highlight", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "ngb-highlight", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserListComponent_div_6_tr_34_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); var element_r2 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r4.onPreUpdateWorker(element_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserListComponent_div_6_tr_34_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); var element_r2 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r6.onDeleteWorker(element_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r2.id)("term", ctx_r1.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r2.name)("term", ctx_r1.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r2.lastname)("term", ctx_r1.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r2.phone)("term", ctx_r1.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("result", element_r2.vendedor ? "Vendedor" : "Nada")("term", ctx_r1.filter.value);
} }
function UserListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Gesti\u00F3n de usuarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Buscar: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserListComponent_div_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.onAddWorker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Agregar personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "RUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, UserListComponent_div_6_tr_34_Template, 18, 11, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "ngb-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function UserListComponent_div_6_Template_ngb_pagination_pageChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function UserListComponent_div_6_Template_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r10.pageSize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "2 \u00EDtems por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "4 \u00EDtems por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "6 \u00EDtems por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r0.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](35, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 13, ctx_r0.employeeSearch), (ctx_r0.page - 1) * ctx_r0.pageSize, (ctx_r0.page - 1) * ctx_r0.pageSize + ctx_r0.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collectionSize", ctx_r0.collectionSize)("page", ctx_r0.page)("pageSize", ctx_r0.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.pageSize);
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
var UserListComponent = /** @class */ (function () {
    function UserListComponent(workersService, modalService, notifyService, confirmationDialogService) {
        this.workersService = workersService;
        this.modalService = modalService;
        this.notifyService = notifyService;
        this.confirmationDialogService = confirmationDialogService;
        this.closeResult = '';
        this.page = 1;
        this.pageSize = 4;
        this.loading = false;
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'Lista de usuarios',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/ecommerce'
                },
                {
                    'name': 'Usuarios',
                    'isLink': false,
                    'link': ''
                }
            ]
        };
        this.getUserLogged();
        this.getInfoEmployees();
    };
    UserListComponent.prototype.onAddWorker = function () {
        var _this = this;
        this.workersService.selectedWorker = Object.assign({}, {});
        var modalRef = this.modalService.open(_worker_modal_worker_modal_component__WEBPACK_IMPORTED_MODULE_3__["WorkerModalComponent"], { windowClass: 'animated fadeInDown' });
        modalRef.componentInstance.opc = false;
        modalRef.result.then(function (result) {
            console.log("resultado del modal: ", result);
            if (result) {
                _this.notifyService.showSuccess("Agregar", "¡El nuevo personal se agregó correctamente!");
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    UserListComponent.prototype.onDeleteWorker = function (idWorker) {
        var _this = this;
        console.log("Delete Work: ", idWorker);
        console.log("Delete Work Boss: ", this.currentUser.uid);
        this.confirmationDialogService.confirm('Confirmación', '¿Estás seguro de eliminar el personal?')
            .then(function (confirmed) {
            if (!confirmed) {
            }
            else {
                _this.workersService.deleteWorker(idWorker, _this.currentUser.uid);
                _this.notifyService.showSuccess("Eliminar", "¡El personal se eliminó correctamente!");
            }
        }).catch(function () {
            console.log("Not ok");
        });
        //
    };
    UserListComponent.prototype.onPreUpdateWorker = function (worker) {
        var _this = this;
        console.log("WORKER: ", worker);
        this.workersService.selectedWorker = Object.assign({}, worker);
        var modalRef = this.modalService.open(_worker_modal_worker_modal_component__WEBPACK_IMPORTED_MODULE_3__["WorkerModalComponent"], { windowClass: 'animated fadeInDown' });
        modalRef.componentInstance.opc = true;
        modalRef.result.then(function (result) {
            if (!result) {
                _this.notifyService.showSuccess("Agregar", "¡El personal se editó correctamente!");
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    UserListComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    UserListComponent.prototype.getUserLogged = function () {
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    UserListComponent.prototype.getInfoEmployees = function () {
        var _this = this;
        this.blockUIUserTable.start('Loading..');
        this.workersService.getFullInfoEmployees(this.currentUser.uid).subscribe(function (workers) {
            _this.PERSON = workers;
            _this.collectionSize = _this.PERSON.length;
            _this.searchData(_this.pipe);
            _this.employeeSortable = _this.PERSON;
            _this.blockUIUserTable.stop();
        });
    };
    /**
    *
    * '@param' pipe
    */
    UserListComponent.prototype.searchData = function (pipe) {
        var _this = this;
        console.log("employeeSearch:", this.employeeSearch);
        this.employeeSearch = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (text) { return _this.search(text, pipe); }));
    };
    /**
    * Search table
    * '@param' text
    * '@param' pipe
    */
    UserListComponent.prototype.search = function (text, pipe) {
        return this.PERSON.filter(function (response) {
            var term = text.toLowerCase();
            return response.name.toLowerCase().includes(term)
                || response.lastname.toLowerCase().includes(term)
                || response.id.toLowerCase().includes(term)
                || response.phone.toLowerCase().includes(term);
        });
    };
    Object.defineProperty(UserListComponent.prototype, "PaginationData", {
        /**
        * Pagination table
        */
        get: function () {
            if (this.PERSON) {
                return this.PERSON.map(function (person, i) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: i + 1 }, person)); })
                    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
            }
        },
        enumerable: false,
        configurable: true
    });
    UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_api_workers_workers_service__WEBPACK_IMPORTED_MODULE_5__["WorkersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notificacion_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogService"])); };
    UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], viewQuery: function UserListComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_7__["NgbdSortableHeader"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](NgbSortable, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.headers1 = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.headers = _t);
        } }, decls: 7, vars: 3, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "row"], ["class", "col-sm-12", 4, "blockUI", "blockUIMessage"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "row", "justify-content-between"], [1, "col-4"], [1, "ml-2", "form-group", "form-inline"], ["type", "text", 1, "form-control", "ml-2", 3, "formControl"], [1, "col-4", "col-sm-3", "col-lg-4"], [1, "btn", "btn-primary", "btn-min-width", "mr-1", "mb-1", 3, "click"], [1, "la", "la-plus"], [1, "table-responsive", "card-body"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["scope", "row"], [3, "result", "term"], [1, "btn", "btn-xs", "btn-social-icon", "mr-1", "mb-1", "btn-instagram", 3, "click"], [1, "la", "la-pencil"], [1, "btn", "btn-xs", "btn-social-icon", "mr-1", "mb-1", "btn-pinterest", 3, "click"], [1, "la", "la-trash"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserListComponent_div_6_Template, 46, 15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("blockUI", "userTable")("blockUIMessage", "Loading");
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_10__["ɵf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbHighlight"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["th[sortable].asc[_ngcontent-%COMP%]:before {\r\n    content: '\\2191';\r\n    display: block;\r\n    width: 22px;\r\n    height: 22px;\r\n    float: left;\r\n    margin-left: -22px;\r\n}\r\n\r\nth[sortable].desc[_ngcontent-%COMP%]:before {\r\n    content: '\\2193';\r\n    display: block;\r\n    width: 22px;\r\n    height: 22px;\r\n    float: left;\r\n    margin-left: -22px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .close:not(:disabled):not(.disabled):hover, .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):focus {\r\n    outline: none !important;\r\n}\r\n\r\n\r\n\r\n.loader-white[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #fff !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #fff !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #fff transparent #fff transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-white.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #fff transparent #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-white.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.loader-white.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #fff !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #fff 30%, #fff 100%);\r\n}\r\n\r\n.loader-white.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.loader-white.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-white.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #fff !important;\r\n}\r\n\r\n.loader-black[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #000 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #000 !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #000 transparent #000 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-black.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #000 transparent #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-black.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.loader-black.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #000 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #000 30%, #000 100%);\r\n}\r\n\r\n.loader-black.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.loader-black.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-black.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #000 !important;\r\n}\r\n\r\n.loader-primary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #666ee8 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #666ee8 transparent #666ee8 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #666ee8 transparent #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-primary.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #666ee8 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #666ee8 30%, #666ee8 100%);\r\n}\r\n\r\n.loader-primary.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-primary.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-primary.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #666ee8 !important;\r\n}\r\n\r\n.loader-success[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #28d094 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #28d094 transparent #28d094 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-success.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #28d094 transparent #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-success.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #28d094 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #28d094 30%, #28d094 100%);\r\n}\r\n\r\n.loader-success.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #28d094 !important;\r\n}\r\n\r\n.loader-success.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-success.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #28d094 !important;\r\n}\r\n\r\n.loader-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1e9ff2 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #1e9ff2 transparent #1e9ff2 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-info.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #1e9ff2 transparent #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-info.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #1e9ff2 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #1e9ff2 30%, #1e9ff2 100%);\r\n}\r\n\r\n.loader-info.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-info.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-info.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #1e9ff2 !important;\r\n}\r\n\r\n.loader-warning[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff9149 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #ff9149 transparent #ff9149 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #ff9149 transparent #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-warning.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #ff9149 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #ff9149 30%, #ff9149 100%);\r\n}\r\n\r\n.loader-warning.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-warning.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-warning.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ff9149 !important;\r\n}\r\n\r\n.loader-danger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff4961 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #ff4961 transparent #ff4961 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #ff4961 transparent #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-danger.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #ff4961 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #ff4961 30%, #ff4961 100%);\r\n}\r\n\r\n.loader-danger.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-danger.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-danger.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ff4961 !important;\r\n}\r\n\r\n.loader-red[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #f44336 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #f44336 transparent #f44336 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-red.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #f44336 transparent #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-red.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #f44336 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #f44336 30%, #f44336 100%);\r\n}\r\n\r\n.loader-red.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #f44336 !important;\r\n}\r\n\r\n.loader-red.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-red.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #f44336 !important;\r\n}\r\n\r\n.loader-pink[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #e91e63 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #e91e63 transparent #e91e63 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #e91e63 transparent #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-pink.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #e91e63 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #e91e63 30%, #e91e63 100%);\r\n}\r\n\r\n.loader-pink.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-pink.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-pink.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #e91e63 !important;\r\n}\r\n\r\n.loader-purple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #9c27b0 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #9c27b0 transparent #9c27b0 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #9c27b0 transparent #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-purple.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #9c27b0 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #9c27b0 30%, #9c27b0 100%);\r\n}\r\n\r\n.loader-purple.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-purple.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-purple.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #9c27b0 !important;\r\n}\r\n\r\n.loader-blue[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #2196f3 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #2196f3 transparent #2196f3 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #2196f3 transparent #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #2196f3 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #2196f3 30%, #2196f3 100%);\r\n}\r\n\r\n.loader-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #2196f3 !important;\r\n}\r\n\r\n.loader-cyan[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #00bcd4 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #00bcd4 transparent #00bcd4 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #00bcd4 transparent #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-cyan.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #00bcd4 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #00bcd4 30%, #00bcd4 100%);\r\n}\r\n\r\n.loader-cyan.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-cyan.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-cyan.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #00bcd4 !important;\r\n}\r\n\r\n.loader-teal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #009688 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #009688 transparent #009688 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #009688 transparent #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-teal.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #009688 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #009688 30%, #009688 100%);\r\n}\r\n\r\n.loader-teal.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #009688 !important;\r\n}\r\n\r\n.loader-teal.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-teal.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #009688 !important;\r\n}\r\n\r\n.loader-yellow[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffeb3b !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #ffeb3b transparent #ffeb3b transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #ffeb3b transparent #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-yellow.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #ffeb3b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #ffeb3b 30%, #ffeb3b 100%);\r\n}\r\n\r\n.loader-yellow.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-yellow.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-yellow.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ffeb3b !important;\r\n}\r\n\r\n.loader-amber[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffc107 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #ffc107 transparent #ffc107 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #ffc107 transparent #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-amber.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #ffc107 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #ffc107 30%, #ffc107 100%);\r\n}\r\n\r\n.loader-amber.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-amber.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-amber.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #ffc107 !important;\r\n}\r\n\r\n.loader-blue-grey[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #607d8b !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #607d8b transparent #607d8b transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #607d8b transparent #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-blue-grey.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #607d8b !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #607d8b 30%, #607d8b 100%);\r\n}\r\n\r\n.loader-blue-grey.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #607d8b !important;\r\n}\r\n\r\n.loader-blue-grey.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-blue-grey.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #607d8b !important;\r\n}\r\n\r\n.loader-grey-blue[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1b2942 !important;\r\n    border-bottom-color: transparent !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n    background: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-pulse[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-color: #1b2942 transparent #1b2942 transparent !important;\r\n    background: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-clip-rotate-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: transparent #1b2942 transparent #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .loader-grey-blue.ball-rotate[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.ball-triangle-path[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-scale-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.ball-scale-ripple-multiple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-color: #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.triangle-skew-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    border-bottom-color: #1b2942 !important;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.semi-circle-spin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    background-image: linear-gradient(transparent 0%, transparent 70%, #1b2942 30%, #1b2942 100%);\r\n}\r\n\r\n.loader-grey-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.fading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #1b2942 !important;\r\n}\r\n\r\n.loader-grey-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.loader-grey-blue.folding-cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\r\n    background-color: #1b2942 !important;\r\n}\r\n\r\n.mb-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem !important;\r\n    margin-left: 0.3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwREFBMEQ7SUFDMUQsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksMERBQTBEO0lBQzFELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsdUZBQXVGO0FBQzNGOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwREFBMEQ7SUFDMUQsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksMERBQTBEO0lBQzFELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsdUZBQXVGO0FBQzNGOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFNeEMsNkZBQTZGO0FBQ2pHOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoW3NvcnRhYmxlXS5hc2M6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXDIxOTEnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xyXG59XHJcblxyXG50aFtzb3J0YWJsZV0uZGVzYzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ1xcMjE5Myc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIycHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpob3ZlciwgLmNsb3NlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLypDU1MgRk9SIFNQSU5ORVIqL1xyXG5cclxuLmxvYWRlci13aGl0ZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci13aGl0ZS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13aGl0ZS50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmZmKSwgdG8oI2ZmZikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZiAzMCUsICNmZmYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmZmIDMwJSwgI2ZmZiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmZmIDMwJSwgI2ZmZiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmZiksIHRvKCNmZmYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmZmIDMwJSwgI2ZmZiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci13aGl0ZS5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2hpdGUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdoaXRlLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjayBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwIHRyYW5zcGFyZW50ICMwMDAgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMDAwIHRyYW5zcGFyZW50ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1ibGFjay5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDAwKSwgdG8oIzAwMCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzAwMCAzMCUsICMwMDAgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzAwMCksIHRvKCMwMDApKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDAwIDMwJSwgIzAwMCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1ibGFjay5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmxhY2suZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsYWNrLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjZlZTggdHJhbnNwYXJlbnQgIzY2NmVlOCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzY2NmVlOCB0cmFuc3BhcmVudCAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1wcmltYXJ5LmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjY2ZWU4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjNjY2ZWU4KSwgdG8oIzY2NmVlOCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzY2NmVlOCAzMCUsICM2NjZlZTggMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjY2ZWU4IDMwJSwgIzY2NmVlOCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjY2ZWU4IDMwJSwgIzY2NmVlOCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzY2NmVlOCksIHRvKCM2NjZlZTgpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjY2ZWU4IDMwJSwgIzY2NmVlOCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1wcmltYXJ5LmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHJpbWFyeS5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXByaW1hcnkuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI4ZDA5NCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI4ZDA5NCB0cmFuc3BhcmVudCAjMjhkMDk0IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjhkMDk0IHRyYW5zcGFyZW50ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLXN1Y2Nlc3MuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI4ZDA5NCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyOGQwOTQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMyOGQwOTQpLCB0bygjMjhkMDk0KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMjhkMDk0IDMwJSwgIzI4ZDA5NCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyOGQwOTQgMzAlLCAjMjhkMDk0IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyOGQwOTQgMzAlLCAjMjhkMDk0IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMjhkMDk0KSwgdG8oIzI4ZDA5NCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyOGQwOTQgMzAlLCAjMjhkMDk0IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLXN1Y2Nlc3MuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1zdWNjZXNzLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItc3VjY2Vzcy5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkMDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mbyBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICMxZTlmZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyIHRyYW5zcGFyZW50ICMxZTlmZjIgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMxZTlmZjIgdHJhbnNwYXJlbnQgIzFlOWZmMiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItaW5mby5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZTlmZjIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5ZmYyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFlOWZmMiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzFlOWZmMiksIHRvKCMxZTlmZjIpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMxZTlmZjIgMzAlLCAjMWU5ZmYyIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMxZTlmZjIpLCB0bygjMWU5ZmYyKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFlOWZmMiAzMCUsICMxZTlmZjIgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItaW5mby5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWluZm8uZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTlmZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmZvbGRpbmctY3ViZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1pbmZvLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTlmZjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjkxNDkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjkxNDkgdHJhbnNwYXJlbnQgI2ZmOTE0OSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmOTE0OSB0cmFuc3BhcmVudCAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci13YXJuaW5nLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjkxNDkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmY5MTQ5KSwgdG8oI2ZmOTE0OSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmOTE0OSAzMCUsICNmZjkxNDkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY5MTQ5IDMwJSwgI2ZmOTE0OSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY5MTQ5IDMwJSwgI2ZmOTE0OSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmOTE0OSksIHRvKCNmZjkxNDkpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY5MTQ5IDMwJSwgI2ZmOTE0OSAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci13YXJuaW5nLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItd2FybmluZy5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXdhcm5pbmcuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTE0OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlciBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY0OTYxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZGFuZ2VyLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY0OTYxIHRyYW5zcGFyZW50ICNmZjQ5NjEgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZGFuZ2VyLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmNDk2MSB0cmFuc3BhcmVudCAjZmY0OTYxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWRhbmdlci5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1kYW5nZXIudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmY0OTYxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZjQ5NjEpLCB0bygjZmY0OTYxKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmY0OTYxIDMwJSwgI2ZmNDk2MSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjQ5NjEgMzAlLCAjZmY0OTYxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjQ5NjEgMzAlLCAjZmY0OTYxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmY0OTYxKSwgdG8oI2ZmNDk2MSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZjQ5NjEgMzAlLCAjZmY0OTYxIDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDk2MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWRhbmdlci5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZGFuZ2VyLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ5NjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y0NDMzNiB0cmFuc3BhcmVudCAjZjQ0MzM2IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmNDQzMzYgdHJhbnNwYXJlbnQgI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1yZWQuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcmVkLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcmVkLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcmVkLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZjQ0MzM2KSwgdG8oI2Y0NDMzNikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2Y0NDMzNiAzMCUsICNmNDQzMzYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2Y0NDMzNiksIHRvKCNmNDQzMzYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZjQ0MzM2IDMwJSwgI2Y0NDMzNiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1yZWQuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXJlZC5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluayBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTFlNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzIHRyYW5zcGFyZW50ICNlOTFlNjMgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlOTFlNjMgdHJhbnNwYXJlbnQgI2U5MWU2MyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItcGluay5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2U5MWU2MyksIHRvKCNlOTFlNjMpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNlOTFlNjMgMzAlLCAjZTkxZTYzIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2U5MWU2MyAzMCUsICNlOTFlNjMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2U5MWU2MyAzMCUsICNlOTFlNjMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNlOTFlNjMpLCB0bygjZTkxZTYzKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2U5MWU2MyAzMCUsICNlOTFlNjMgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItcGluay5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXBpbmsuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmZvbGRpbmctY3ViZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1waW5rLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzljMjdiMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXB1cnBsZS5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzljMjdiMCB0cmFuc3BhcmVudCAjOWMyN2IwIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXB1cnBsZS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICM5YzI3YjAgdHJhbnNwYXJlbnQgIzljMjdiMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1wdXJwbGUuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItcHVycGxlLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzljMjdiMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjOWMyN2IwKSwgdG8oIzljMjdiMCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzljMjdiMCAzMCUsICM5YzI3YjAgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjOWMyN2IwIDMwJSwgIzljMjdiMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjOWMyN2IwIDMwJSwgIzljMjdiMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzljMjdiMCksIHRvKCM5YzI3YjApKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjOWMyN2IwIDMwJSwgIzljMjdiMCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1wdXJwbGUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXB1cnBsZS5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzIHRyYW5zcGFyZW50ICMyMTk2ZjMgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMyMTk2ZjMgdHJhbnNwYXJlbnQgIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXItYmx1ZS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzIxOTZmMyksIHRvKCMyMTk2ZjMpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMyMTk2ZjMgMzAlLCAjMjE5NmYzIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMyMTk2ZjMpLCB0bygjMjE5NmYzKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzIxOTZmMyAzMCUsICMyMTk2ZjMgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmZvbGRpbmctY3ViZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGJjZDQgdHJhbnNwYXJlbnQgIzAwYmNkNCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwYmNkNCB0cmFuc3BhcmVudCAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1jeWFuLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4udHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDBiY2Q0KSwgdG8oIzAwYmNkNCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzAwYmNkNCAzMCUsICMwMGJjZDQgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDBiY2Q0IDMwJSwgIzAwYmNkNCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDBiY2Q0IDMwJSwgIzAwYmNkNCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzAwYmNkNCksIHRvKCMwMGJjZDQpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDBiY2Q0IDMwJSwgIzAwYmNkNCAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1jeWFuLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItY3lhbi5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWN5YW4uZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTY4OCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTY4OCB0cmFuc3BhcmVudCAjMDA5Njg4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMDA5Njg4IHRyYW5zcGFyZW50ICMwMDk2ODggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLXRlYWwuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTY4OCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDk2ODggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICMwMDk2ODgpLCB0bygjMDA5Njg4KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMDA5Njg4IDMwJSwgIzAwOTY4OCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMDk2ODggMzAlLCAjMDA5Njg4IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMDk2ODggMzAlLCAjMDA5Njg4IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMDA5Njg4KSwgdG8oIzAwOTY4OCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICMwMDk2ODggMzAlLCAjMDA5Njg4IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLXRlYWwuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci10ZWFsLmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItdGVhbC5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtY2xpcC1yb3RhdGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZWIzYiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmViM2IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmViM2IgdHJhbnNwYXJlbnQgI2ZmZWIzYiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZlYjNiIHRyYW5zcGFyZW50ICNmZmViM2IgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtcm90YXRlIGRpdjpiZWZvcmUsIC5sb2FkZXIteWVsbG93LmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmJhbGwtdHJpYW5nbGUtcGF0aCBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXllbGxvdy5iYWxsLXNjYWxlLXJpcHBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXllbGxvdy5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLXllbGxvdy50cmlhbmdsZS1za2V3LXNwaW4gZGl2IHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmViM2IgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LnNlbWktY2lyY2xlLXNwaW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCByaWdodCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgI2ZmZWIzYiksIHRvKCNmZmViM2IpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmViM2IgMzAlLCAjZmZlYjNiIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZmViM2IpLCB0bygjZmZlYjNiKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgI2ZmZWIzYiAzMCUsICNmZmViM2IgMTAwJSk7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmZhZGluZy1jaXJjbGUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXIteWVsbG93LmZvbGRpbmctY3ViZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci15ZWxsb3cuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDcgdHJhbnNwYXJlbnQgI2ZmYzEwNyB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmMxMDcgdHJhbnNwYXJlbnQgI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWFtYmVyLmJhbGwtcm90YXRlIGRpdjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5iYWxsLXNjYWxlLXJpcHBsZS1tdWx0aXBsZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICNmZmMxMDcpLCB0bygjZmZjMTA3KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjZmZjMTA3IDMwJSwgI2ZmYzEwNyAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmMxMDcgMzAlLCAjZmZjMTA3IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmMxMDcgMzAlLCAjZmZjMTA3IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjZmZjMTA3KSwgdG8oI2ZmYzEwNykpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICNmZmMxMDcgMzAlLCAjZmZjMTA3IDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLWFtYmVyLmZhZGluZy1jaXJjbGUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1hbWJlci5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYW1iZXIuZm9sZGluZy1jdWJlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLWNsaXAtcm90YXRlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS1ncmV5LmJhbGwtY2xpcC1yb3RhdGUtcHVsc2UgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjA3ZDhiIHRyYW5zcGFyZW50ICM2MDdkOGIgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS1ncmV5LmJhbGwtY2xpcC1yb3RhdGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzYwN2Q4YiB0cmFuc3BhcmVudCAjNjA3ZDhiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXJvdGF0ZSBkaXY6YmVmb3JlLCAubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXJvdGF0ZSBkaXY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5iYWxsLXRyaWFuZ2xlLXBhdGggZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC1zY2FsZS1yaXBwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkuYmFsbC1zY2FsZS1yaXBwbGUtbXVsdGlwbGUgZGl2IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ibHVlLWdyZXkudHJpYW5nbGUtc2tldy1zcGluIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA3ZDhiICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5zZW1pLWNpcmNsZS1zcGluIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCg3MCUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgzMCUsICM2MDdkOGIpLCB0bygjNjA3ZDhiKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjNjA3ZDhiIDMwJSwgIzYwN2Q4YiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2MDdkOGIgMzAlLCAjNjA3ZDhiIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2MDdkOGIgMzAlLCAjNjA3ZDhiIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjNjA3ZDhiKSwgdG8oIzYwN2Q4YikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3MCUsICM2MDdkOGIgMzAlLCAjNjA3ZDhiIDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5mYWRpbmctY2lyY2xlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5mYWRpbmctY2lyY2xlIGRpdjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWJsdWUtZ3JleS5mb2xkaW5nLWN1YmUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItYmx1ZS1ncmV5LmZvbGRpbmctY3ViZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1jbGlwLXJvdGF0ZSBkaXYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWIyOTQyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1jbGlwLXJvdGF0ZS1wdWxzZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogIzFiMjk0MiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5iYWxsLWNsaXAtcm90YXRlLXB1bHNlIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFiMjk0MiB0cmFuc3BhcmVudCAjMWIyOTQyIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5iYWxsLWNsaXAtcm90YXRlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMxYjI5NDIgdHJhbnNwYXJlbnQgIzFiMjk0MiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1yb3RhdGUgZGl2OmJlZm9yZSwgLmxvYWRlci1ncmV5LWJsdWUuYmFsbC1yb3RhdGUgZGl2OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuYmFsbC10cmlhbmdsZS1wYXRoIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZ3JleS1ibHVlLmJhbGwtc2NhbGUtcmlwcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZ3JleS1ibHVlLmJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlIGRpdiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkZXItZ3JleS1ibHVlLnRyaWFuZ2xlLXNrZXctc3BpbiBkaXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFiMjk0MiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuc2VtaS1jaXJjbGUtc3BpbiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoNzAlLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMzAlLCAjMWIyOTQyKSwgdG8oIzFiMjk0MikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDcwJSwgIzFiMjk0MiAzMCUsICMxYjI5NDIgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDcwJSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDMwJSwgIzFiMjk0MiksIHRvKCMxYjI5NDIpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzAlLCAjMWIyOTQyIDMwJSwgIzFiMjk0MiAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuZmFkaW5nLWNpcmNsZSBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuZmFkaW5nLWNpcmNsZSBkaXY6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjI5NDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlci1ncmV5LWJsdWUuZm9sZGluZy1jdWJlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9hZGVyLWdyZXktYmx1ZS5mb2xkaW5nLWN1YmUgZGl2OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyOTQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYi0xLCAubXktMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG59Il19 */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_10__["BlockUI"])('userTable'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], UserListComponent.prototype, "blockUIUserTable", void 0);
    return UserListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
        args: [{
                selector: 'app-user-list',
                templateUrl: './user-list.component.html',
                styleUrls: ['./user-list.component.css']
            }]
    }], function () { return [{ type: _api_workers_workers_service__WEBPACK_IMPORTED_MODULE_5__["WorkersService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _services_notificacion_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }, { type: _services_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogService"] }]; }, { blockUIUserTable: [], headers1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChildren"],
            args: [_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_7__["NgbdSortableHeader"]]
        }], headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChildren"],
            args: [NgbSortable]
        }] }); })();


/***/ }),

/***/ "vUNw":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/user/user-profile/user-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_notificacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../_services/notificacion.service */ "ScZz");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../_services/data-api.service */ "5T1Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "H88C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_api/user/user.service */ "wsei");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/alert.service */ "f5O9");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-archwizard */ "tPw2");























function UserProfileComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 71);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.currentUser.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function UserProfileComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 72);
} }
function UserProfileComponent_small_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserProfileComponent_small_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserProfileComponent_small_46_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.firstName.errors.required && (ctx_r3.f.firstName.dirty || ctx_r3.f.firstName.touched));
} }
function UserProfileComponent_small_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El Email es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserProfileComponent_small_51_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El Email debe ser v\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserProfileComponent_small_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserProfileComponent_small_51_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserProfileComponent_small_51_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required && (ctx_r4.f.email.dirty || ctx_r4.f.email.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.email && (ctx_r4.f.email.dirty || ctx_r4.f.email.touched));
} }
function UserProfileComponent_small_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El celular es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserProfileComponent_small_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserProfileComponent_small_56_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.phone.errors.required && (ctx_r5.f.phone.dirty || ctx_r5.f.phone.touched));
} }
function UserProfileComponent_small_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El apellido es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserProfileComponent_small_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserProfileComponent_small_62_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.lastName.errors.required && (ctx_r6.f.lastName.dirty || ctx_r6.f.lastName.touched));
} }
function UserProfileComponent_small_89_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Nombre de pasteler\u00EDa requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserProfileComponent_small_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserProfileComponent_small_89_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.i.cakeName.errors.required && ctx_r8.submitted && (ctx_r8.i.cakeName.dirty || ctx_r8.i.cakeName.touched));
} }
function UserProfileComponent_small_95_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " El giro es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserProfileComponent_small_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserProfileComponent_small_95_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.i.giro.errors.required && ctx_r9.submitted && (ctx_r9.i.giro.dirty || ctx_r9.i.giro.touched));
} }
function UserProfileComponent_small_101_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UserProfileComponent_small_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserProfileComponent_small_101_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.i.address.errors.required && ctx_r10.submitted && (ctx_r10.i.address.dirty || ctx_r10.i.address.touched));
} }
function UserProfileComponent_i_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 75);
} }
function UserProfileComponent_i_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 76);
} }
var _c0 = function () { return { symbol: "1" }; };
var _c1 = function (a0) { return { "is-invalid": a0 }; };
var _c2 = function () { return { symbol: "2" }; };
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(formBuilder, router, alertService, authService, userService, storage, dataApi, notifyService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.userService = userService;
        this.storage = storage;
        this.dataApi = dataApi;
        this.notifyService = notifyService;
        this.loading = false;
        this.uploading = false;
        this.uploadFile = false;
        this.uploadOk = false;
        this.submitted = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.user = {};
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        this.stepOneForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: [''],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            birthDate3: ['']
        });
        this.stepTwoForm = this.formBuilder.group({
            cakeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            giro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.getUserData();
    };
    UserProfileComponent.prototype.getUserData = function () {
        var _this = this;
        this.userService.getCurrentUser(this.currentUser.uid).subscribe(function (user) {
            console.log("user: ", user);
            _this.idUsuario = user[0].id;
            var array = user[0].birthdate.split("/");
            var date = { year: parseInt(array[2]), month: parseInt(array[1]), day: parseInt(array[0]) };
            _this.stepOneForm.get("firstName").setValue(user[0].name);
            _this.stepOneForm.get("lastName").setValue(user[0].lastName);
            _this.stepOneForm.get("email").setValue(_this.currentUser.email);
            _this.stepOneForm.get("phone").setValue(user[0].phone);
            _this.stepOneForm.get("birthDate3").setValue(date);
            _this.stepTwoForm.get("cakeName").setValue(user[0].cakeName);
            _this.stepTwoForm.get("giro").setValue(user[0].giro);
            _this.stepTwoForm.get("address").setValue(user[0].address);
        });
    };
    UserProfileComponent.prototype.onSaveUser = function () {
        var birthDate = this.fValue.birthDate3.day + "/" + this.fValue.birthDate3.month + "/" + this.fValue.birthDate3.year;
        this.user = {
            name: this.fValue.firstName,
            lastName: this.fValue.lastName,
            phone: this.fValue.phone,
            birthdate: birthDate,
            cakeName: this.iValue.cakeName,
            giro: this.iValue.giro,
            address: this.iValue.address,
        };
        if (this.userService.updateUser(this.user, this.idUsuario)) {
            this.notifyService.showSuccess("Usuario actualizado correctamente", "Actualización");
            this.router.navigate(['/dashboard/ecommerce']);
        }
        else {
            this.notifyService.showError("Error al actualizar el usuario", "Actualización");
        }
    };
    Object.defineProperty(UserProfileComponent.prototype, "f", {
        get: function () {
            return this.stepOneForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfileComponent.prototype, "i", {
        get: function () {
            return this.stepTwoForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfileComponent.prototype, "fValue", {
        get: function () {
            return this.stepOneForm.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfileComponent.prototype, "iValue", {
        get: function () {
            return this.stepTwoForm.value;
        },
        enumerable: false,
        configurable: true
    });
    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notificacion_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"])); };
    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 111, vars: 44, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "user-profile"], [1, "row"], [1, "col-12"], [1, "card", "profile-with-cover"], [1, "card-img-top", "img-fluid", "bg-cover", "height-300", 2, "background", "url('../../../assets/images/carousel/32.gif') 90%"], [1, "media", "profil-cover-details", "w-100"], [1, "media-left", "pl-2", "pt-2"], [1, "profile-image", 3, "routerLink"], ["class", "rounded-circle img-border height-100", "alt", "Card image", 3, "src", 4, "ngIf"], ["src", "../../../assets/images/portrait/small/avatar-s-19.png", "class", "rounded-circle img-border height-100", "alt", "Card image", 4, "ngIf"], [1, "media-body", "pt-3", "px-2"], [1, "col"], [1, "card-title"], [1, "navbar", "navbar-light", "navbar-profile", "align-self-end"], ["type", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-sm-none"], [1, "navbar", "navbar-expand-lg"], [1, "navbar-nav", "mr-auto"], ["type", "pills", 3, "justify"], ["id", "validation"], [1, "row", "justify-content-center"], [1, "col-10"], [1, "card"], [1, "card-header"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-block"], ["navBarLayout", "large-filled-symbols"], ["wizard", ""], [3, "stepTitle", "navigationSymbol"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], ["for", "firstname", 1, "form-control-label"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "form-text text-muted danger", "class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-control-label"], ["readonly", "", "type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "phone", 1, "form-control-label"], ["type", "number", "formControlName", "phone", 1, "form-control", 3, "ngClass"], ["for", "lastname", 1, "form-control-label"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "form-control-label"], ["type", "password", "formControlName", "password", "readonly", "", 1, "form-control"], ["for", "birthDate3", 1, "form-control-label"], [1, "input-group"], ["formControlName", "birthDate3", "placeholder", "dd-mm-yyyy", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d4", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], [1, "form-group", "text-center", "space-20"], ["uiSref", "address", "type", "button", "awNextStep", "", 1, "btn", "btn-raised", "btn-info", 3, "disabled"], [2, "margin-left", "10px"], [1, "feather", "ft-chevron-right"], ["for", "cake", 1, "form-control-label"], ["type", "text", "formControlName", "cakeName", 1, "form-control", 3, "ngClass"], ["for", "email2", 1, "form-control-label"], ["type", "text", "formControlName", "giro", 1, "form-control", 3, "ngClass"], [1, "col-md-12"], ["for", "address", 1, "form-control-label"], ["type", "text", "formControlName", "address", "rows", "3", 1, "form-control", 3, "ngClass"], ["uiSref", "personal", "type", "button", "awPreviousStep", "", 1, "btn", "btn-raised", "btn-secondary", "mr-1"], [2, "margin-right", "10px"], [1, "feather", "ft-chevron-left"], ["uiSref", "address", "type", "submit", 1, "btn", "btn-outline-info", 3, "disabled", "click"], ["class", "fa fa-refresh fa-spin", 4, "ngIf"], ["class", "feather ft-user", 4, "ngIf"], ["alt", "Card image", 1, "rounded-circle", "img-border", "height-100", 3, "src"], ["src", "../../../assets/images/portrait/small/avatar-s-19.png", "alt", "Card image", 1, "rounded-circle", "img-border", "height-100"], [1, "invalid-feedback"], [4, "ngIf"], [1, "fa", "fa-refresh", "fa-spin"], [1, "feather", "ft-user"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, UserProfileComponent_img_12_Template, 1, 1, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, UserProfileComponent_img_13_Template, 1, 0, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h3", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nav", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nav", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ul", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ngb-tabset", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "section", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h4", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Formulario de edici\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "aw-wizard", 30, 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "aw-wizard-step", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "form", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Nombre : ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, UserProfileComponent_small_46_Template, 2, 1, "small", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Email :");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, UserProfileComponent_small_51_Template, 3, 2, "small", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Celular :");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, UserProfileComponent_small_56_Template, 2, 1, "small", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "label", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Apellido :");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, UserProfileComponent_small_62_Template, 2, 1, "small", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Contrase\u00F1a :");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "input", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Fecha de nacimiento :");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 49, 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](72); return _r7.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "button", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " Siguiente ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "span", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "aw-wizard-step", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "form", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "label", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Nombre pasteler\u00EDa :");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "input", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, UserProfileComponent_small_89_Template, 2, 1, "small", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "label", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Giro :");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, UserProfileComponent_small_95_Template, 2, 1, "small", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "label", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Direcci\u00F3n pasteler\u00EDa :");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "textarea", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](101, UserProfileComponent_small_101_Template, 2, 1, "small", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "button", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "span", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "i", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, " Anterior");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "button", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_107_listener() { return ctx.onSaveUser(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, UserProfileComponent_i_108_Template, 1, 0, "i", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, UserProfileComponent_i_109_Template, 1, 0, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " Actualizar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.currentUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.currentUser.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("justify", ctx.end);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepTitle", "Usuario")("navigationSymbol", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.stepOneForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c1, ctx.f.firstName.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c1, ctx.f.email.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.email.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](33, _c1, ctx.f.phone.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.phone.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](35, _c1, ctx.f.lastName.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.stepOneForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepTitle", "Pasteler\u00EDa")("navigationSymbol", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](37, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.stepTwoForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c1, ctx.i.cakeName.errors && ctx.submitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.i.cakeName.errors && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](40, _c1, ctx.i.giro.errors && ctx.submitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.i.giro.errors && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c1, ctx.i.address.errors && ctx.submitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.i.address.errors && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.stepTwoForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.submitted);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTabset"], angular_archwizard__WEBPACK_IMPORTED_MODULE_13__["WizardComponent"], angular_archwizard__WEBPACK_IMPORTED_MODULE_13__["WizardStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbInputDatepicker"], angular_archwizard__WEBPACK_IMPORTED_MODULE_13__["NextStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_13__["PreviousStepDirective"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .my-gallery img{\r\n  max-width: 100% !important;\r\n  padding: .25rem;\r\n  background-color: #F4F5FA;\r\n  border: 1px solid #626E82;\r\n  border-radius: .25rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n[_nghost-%COMP%]     .my-gallery .img-thumbnail {\r\n  padding: .25rem;\r\n  background-color: #F4F5FA;\r\n  border: 1px solid #626E82;\r\n  border-radius: .25rem;\r\n}\r\n\r\n.tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.form-control.is-invalid[_ngcontent-%COMP%] {\r\n  border-color: #CACFE7;\r\n  background-image: none !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .wizard-steps.vertical {\r\n  width: 90%;\r\n\r\n}\r\n\r\n[_nghost-%COMP%]     .vertical .large-filled-symbols{\r\nwidth: 10;\r\n\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n.wizard-steps.vertical[_ngcontent-%COMP%] {\r\n  width: 80% !important;\r\n}\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n.vertical[_ngcontent-%COMP%]   .large-filled-symbols[_ngcontent-%COMP%] {\r\n  width: 20% !important;\r\n}\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li:after {\r\n  color: #999;\r\n  font-size: 19px;\r\n  text-align: center;\r\n  border: 5px solid #f4f5fa;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.editing:after {\r\n  color: #666EE8;\r\n  border: 5px solid #666EE8 !important;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.editing1:after {\r\ncolor: #666EE8;\r\nborder: 5px solid #666EE8 !important;\r\nbackground-color: #fff;\r\nline-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.current:after {\r\n  color: #666EE8;\r\n  border: 5px solid #666EE8;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]    .horizontal.large-filled-symbols ul.steps-indicator li.done:after {\r\n  color: #fff;\r\n  border: 5px solid #666EE8;\r\n  background-color: #666EE8;\r\n  line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\nbackground-color: #e6e6e6;\r\ncontent: '';\r\nposition: absolute;\r\nheight: 5px !important;\r\nwidth: calc(100% - 50px);\r\ntop: -25px;\r\nleft: calc(50% + 25px);\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.done:before {\r\nbackground-color:#666EE8;\r\ncontent: '';\r\nposition: absolute;\r\nheight: 5px !important;\r\nwidth: calc(100% - 50px);\r\ntop: -25px;\r\nleft: calc(50% + 25px);\r\n}\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\nbackground-color: #f4f5fa;\r\nheight: 5px;\r\nline-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.done:not(:last-child):before {\r\n  background-color: #666EE8;\r\n  height: 5px;\r\n  line-height: 40px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li:after {\r\n    color: #999;\r\n    font-size: 18px;\r\n    border: 5px solid #f4f5fa;\r\n    background-color: #fff;\r\n    line-height: 40px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.editing:after {\r\n    color: #666EE8;\r\n    border: 5px solid #666EE8 !important;\r\n    background-color: #fff;\r\n    line-height: 40px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.current:after {\r\n    color: #666EE8;\r\n      border: 5px solid #666EE8;\r\n      background-color: #fff;\r\n      line-height: 40px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.done:after {\r\n    color: #fff;\r\n    border: 5px solid #666EE8;\r\n    background-color: #666EE8;\r\n    line-height: 40px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n    background-color: #f4f5fa;\r\n    height: 5px;\r\n    line-height: 40px;\r\n    }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.done:not(:last-child):before {\r\n      background-color: #666EE8;\r\n      height: 35px;\r\n      }\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.done.step:after {\r\n        background-color: #666EE8;\r\n        border-color: #666EE8;\r\n        color: #FFF;\r\n        line-height: 40px;\r\n    }\r\n\r\n[_nghost-%COMP%]     .horizontal ul.steps-indicator li .step-indicator{\r\n      position: relative;\r\n      margin: 0px;\r\n      padding: 10px 0 0;\r\n      text-align: center;\r\n  }\r\n\r\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\r\n    color: unset !important;\r\n    background-color: unset !important;\r\n    border-color: #d3d9df !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\r\n    background-color: #e2e6ea !important;\r\n    border-color: #dae0e5 !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .btn-light {\r\n    color: unset !important;\r\n    background-color: unset !important;\r\n    border-color: unset !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .bg-primary {\r\n    background-color: #007bff !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .text-white {\r\n    color: #fff !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .custom-day {\r\n    text-align: center;\r\n    padding: .185rem .25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .custom-day:active {\r\n    color: #6d7183 !important;\r\n   background-color: #fff !important;\r\n   border-block-color: rgb(2, 117, 216) !important;\r\n   \r\n}\r\n\r\n.bg-light[_ngcontent-%COMP%] {\r\n    background-color: #f8f9fa !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .hidden {\r\n    display: block !important;\r\n}\r\n\r\n.ngb-dp-weekday[_ngcontent-%COMP%] {\r\n    color: #17a2b8;\r\n}\r\n\r\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\r\n    line-height: 2rem;\r\n    text-align: center;\r\n    font-style: italic;\r\n}\r\n\r\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\r\n    pointer-events: auto;\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    font-size: 80%;\r\n    font-weight: 400;\r\n}\r\n\r\n.ngb-dp-day[_ngcontent-%COMP%] {\r\n    cursor: pointer !important;\r\n}\r\n\r\n.ngb-dp-month[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n}\r\n\r\n.btn-light[_ngcontent-%COMP%]:hover {\r\n    color: #212529 !important;\r\n    background-color: #e2e6ea !important;\r\n    border-color: #dae0e5 !important;\r\n}\r\n\r\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\r\n    pointer-events: auto;\r\n}\r\n\r\n.ngb-dp-header[_ngcontent-%COMP%] {\r\n    border-bottom: 0;\r\n    border-radius: .25rem .25rem 0 0;\r\n    padding-top: .25rem;\r\n}\r\n\r\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n\r\n.custom-day[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 0.185rem 0.25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n}\r\n\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n    background-color: #e6e6e6;\r\n}\r\n\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(2, 117, 216);\r\n    color: white;\r\n}\r\n\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n    background-color: rgba(2, 117, 216, 0.5);\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLFVBQVU7O0FBRVo7O0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFDQTtBQUNBLGNBQWM7QUFDZCxvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsVUFBVTtBQUNWLHNCQUFzQjtBQUN0Qjs7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsVUFBVTtBQUNWLHNCQUFzQjtBQUN0Qjs7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakI7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0UsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0UsY0FBYztNQUNaLHlCQUF5QjtNQUN6QixzQkFBc0I7TUFDdEIsaUJBQWlCO0VBQ3JCOztBQUNBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakI7O0FBQ0E7TUFDRSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaOztBQUNBO1FBQ0UseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCOztBQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsa0JBQWtCO0VBQ3RCOztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0dBQzFCLGlDQUFpQztHQUNqQywrQ0FBK0M7O0FBRWxEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQiLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubXktZ2FsbGVyeSBpbWd7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyNkU4MjtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgLmltZy10aHVtYm5haWwge1xyXG4gIHBhZGRpbmc6IC4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcbi50YWItY29udGVudCAudGFiLXBhbmUge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjQ0FDRkU3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC53aXphcmQtc3RlcHMudmVydGljYWwge1xyXG4gIHdpZHRoOiA5MCU7XHJcblxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwgLmxhcmdlLWZpbGxlZC1zeW1ib2xze1xyXG53aWR0aDogMTA7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4ud2l6YXJkLXN0ZXBzLnZlcnRpY2FsIHtcclxuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuLnZlcnRpY2FsIC5sYXJnZS1maWxsZWQtc3ltYm9scyB7XHJcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2Y0ZjVmYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmc6YWZ0ZXIge1xyXG4gIGNvbG9yOiAjNjY2RUU4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICM2NjZFRTggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZWRpdGluZzE6YWZ0ZXIge1xyXG5jb2xvcjogIzY2NkVFODtcclxuYm9yZGVyOiA1cHggc29saWQgIzY2NkVFOCAhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5saW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jdXJyZW50OmFmdGVyIHtcclxuICBjb2xvcjogIzY2NkVFODtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2RUU4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOmFmdGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2RUU4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjZFRTg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaTpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbmNvbnRlbnQ6ICcnO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbndpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxudG9wOiAtMjVweDtcclxubGVmdDogY2FsYyg1MCUgKyAyNXB4KTtcclxufSBcclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOmJlZm9yZSB7XHJcbmJhY2tncm91bmQtY29sb3I6IzY2NkVFODtcclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcclxud2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG50b3A6IC0yNXB4O1xyXG5sZWZ0OiBjYWxjKDUwJSArIDI1cHgpO1xyXG59IFxyXG46aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaTpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmNGY1ZmE7XHJcbmhlaWdodDogNXB4O1xyXG5saW5lLWhlaWdodDogNDBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOm5vdCg6bGFzdC1jaGlsZCk6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2RUU4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaTphZnRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmNGY1ZmE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmc6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICM2NjZFRTg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjNjY2RUU4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmN1cnJlbnQ6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICM2NjZFRTg7XHJcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkICM2NjZFRTg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzY2NkVFODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjZFRTg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmYTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOm5vdCg6bGFzdC1jaGlsZCk6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NkVFODtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIDpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZG9uZS5zdGVwOmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2RUU4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzY2NkVFODtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH0gICBcclxuICAgIDpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgLnN0ZXAtaW5kaWNhdG9ye1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDAgMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gICAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xyXG4gICAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xyXG4gICAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcclxuICAgXHJcbn1cclxuXHJcbi5iZy1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgICBjb2xvcjogIzE3YTJiODtcclxufVxyXG5cclxuLm5nYi1kcC13ZWVrLW51bWJlcixcclxuLm5nYi1kcC13ZWVrZGF5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5nYi1kcC1kYXkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZ2ItZHAtbW9udGgge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tbGlnaHQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLm5nYi1kcC1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xyXG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcclxufVxyXG5cclxuLm5nYi1kcC1kYXksXHJcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbi5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbi5jdXN0b20tZGF5LnJhbmdlLFxyXG4uY3VzdG9tLWRheTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tLWRheS5mYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_10__["BlockUI"])('numberTabs'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], UserProfileComponent.prototype, "blockUINumberTabs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_10__["BlockUI"])('iconTabs'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], UserProfileComponent.prototype, "blockUIIconTabs", void 0);
    return UserProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] }, { type: _services_notificacion_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }]; }, { blockUINumberTabs: [], blockUIIconTabs: [] }); })();


/***/ })

}]);
//# sourceMappingURL=app-content-pages-user-user-module.js.map