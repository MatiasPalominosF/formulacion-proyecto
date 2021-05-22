(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+/8v":
/*!************************************************************!*\
  !*** ./src/app/_layout/settings/theme-settings.service.ts ***!
  \************************************************************/
/*! exports provided: THEME_SETTINGS_CONFIG, ThemeSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_SETTINGS_CONFIG", function() { return THEME_SETTINGS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsService", function() { return ThemeSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);







var THEME_SETTINGS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('themeCustomConfig');
var ThemeSettingsService = /** @class */ (function () {
    function ThemeSettingsService(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;
        // Initialize the service
        this._init();
    }
    ThemeSettingsService.prototype._init = function () {
        var _this = this;
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this._defaultConfig));
        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]; }))
            .subscribe(function () {
            if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"](_this._configSubject.getValue().layout, _this._defaultConfig.layout)) {
                // Clone the current config
                var config = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_this._configSubject.getValue());
                // Reset the layout from the default config
                // config.layout = _.cloneDeep(this._defaultConfig.layout);
                // Set the config
                _this._configSubject.next(config);
            }
        });
    };
    Object.defineProperty(ThemeSettingsService.prototype, "config", {
        get: function () {
            return this._configSubject.asObservable();
        },
        set: function (value) {
            // Get the value from the behavior subject
            var config = this._configSubject.getValue();
            // Merge the new config
            config = lodash__WEBPACK_IMPORTED_MODULE_4__["merge"]({}, config, value);
            // Notify the observers
            this._configSubject.next(config);
        },
        enumerable: false,
        configurable: true
    });
    ThemeSettingsService.ɵfac = function ThemeSettingsService_Factory(t) { return new (t || ThemeSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](THEME_SETTINGS_CONFIG)); };
    ThemeSettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeSettingsService, factory: ThemeSettingsService.ɵfac, providedIn: 'root' });
    return ThemeSettingsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeSettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [THEME_SETTINGS_CONFIG]
            }] }]; }, null); })();


/***/ }),

/***/ "+Kvt":
/*!**************************************************************!*\
  !*** ./src/app/content/applications/quill/quillAutolinks.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ "SNEm");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autolinker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! autolinker */ "YtNn");



var defaults = {
    globalRegularExpression: /https?:\/\/[\S]+/g,
    urlRegularExpression: /(https?:\/\/[\S]+)/
};
var QuillAutoLink = /** @class */ (function () {
    function QuillAutoLink(quill, options) {
        this.autolinker = new autolinker__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.checkIfHasLink = function (currentIndex, input) {
            var hasLink = false;
            var linkedText = autolinker__WEBPACK_IMPORTED_MODULE_2__["default"].link(input, {
                replaceFn: function (match) {
                    switch (match.getType()) {
                        //   case 'url' :
                        //     //console.log( "url: ", match.getUrl() );
                        //     var index = (currentIndex - match.matchedText.length) - 1;
                        //     this.textToUrl(index,match.matchedText,match.getUrl());
                        //     return true;  // let Autolinker perform its normal anchor tag replacement
                        // case 'email' :
                        //     var email = match.getEmail();
                        //     console.log( "email: ", email );
                        //     return true;
                        // case 'phone' :
                        //     console.log( "Phone Number: ", match.getNumber() );
                    }
                }
            });
            return hasLink;
        };
        this.quill = quill;
        options = options || {};
        this.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaults), options);
        this.registerTypeListener();
        this.registerPasteListener();
    }
    QuillAutoLink.prototype.registerPasteListener = function () {
        var _this = this;
        this.quill.clipboard.addMatcher(Node.TEXT_NODE, function (node, delta) {
            if (typeof node.data !== 'string') {
                return;
            }
            var matches = node.data.match(_this.options.globalRegularExpression);
            if (matches && matches.length > 0) {
                var newDelta_1 = new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();
                var str_1 = node.data;
                matches.forEach(function (match) {
                    var split = str_1.split(match);
                    var beforeLink = split.shift();
                    newDelta_1.insert(beforeLink);
                    newDelta_1.insert(match, { link: match });
                    str_1 = split.join(match);
                });
                newDelta_1.insert(str_1);
                delta.ops = newDelta_1.ops;
            }
            return delta;
        });
    };
    QuillAutoLink.prototype.registerTypeListener = function () {
        var _this = this;
        this.quill.on('text-change', function (delta) {
            var ops = delta.ops;
            // Only return true, if last operation includes whitespace inserts
            // Equivalent to listening for enter, tab or space
            if (!ops || ops.length < 1 || ops.length > 2) {
                return;
            }
            var lastOp = ops[ops.length - 1];
            if (!lastOp.insert || typeof lastOp.insert !== 'string' || !lastOp.insert.match(/\s/)) {
                return;
            }
            _this.checkTextForUrl();
        });
    };
    QuillAutoLink.prototype.checkTextForUrl = function () {
        var sel = this.quill.getSelection();
        if (!sel) {
            return;
        }
        var leaf = this.quill.getLeaf(sel.index)[0];
        if (!leaf.text) {
            return;
        }
        if (leaf.parent != undefined && leaf.parent.domNode != undefined && leaf.parent.domNode.tagName.toLowerCase() == "a") {
            return;
        }
        var temp = leaf.text.substring(0, leaf.text.length - 1);
        var to_check_str = temp.substring(temp.lastIndexOf(' '));
        this.checkIfHasLink(sel.index, to_check_str);
    };
    QuillAutoLink.prototype.textToUrl = function (index, text, url) {
        var ops = new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a()
            .retain(index)
            .delete(text.length)
            .insert(text, { link: url });
        this.quill.updateContents(ops);
    };
    return QuillAutoLink;
}());
/* harmony default export */ __webpack_exports__["default"] = (QuillAutoLink);


/***/ }),

/***/ "+kQa":
/*!***********************************************!*\
  !*** ./src/app/_directives/card.directive.ts ***!
  \***********************************************/
/*! exports provided: CardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDirective", function() { return CardDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var CardDirective = /** @class */ (function () {
    function CardDirective(el) {
        this.el = el;
        this.class = this.el.nativeElement.classList;
    }
    CardDirective.prototype.ngOnInit = function () { };
    CardDirective.prototype.ngAfterViewInit = function () { };
    CardDirective.prototype.ngOnDestroy = function () { };
    CardDirective.ɵfac = function CardDirective_Factory(t) { return new (t || CardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    CardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CardDirective, selectors: [["", "mCard", ""]], hostVars: 2, hostBindings: function CardDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        } }, inputs: { options: "options" } });
    return CardDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mCard]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "/DnI":
/*!************************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




function BreadcrumbComponent_div_1_li_6_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var link_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.name);
} }
function BreadcrumbComponent_div_1_li_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var link_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.name);
} }
function BreadcrumbComponent_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_li_6_a_1_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_1_li_6_span_2_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r2.isLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !link_r2.isLink);
} }
function BreadcrumbComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreadcrumbComponent_div_1_li_6_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.breadcrumb.mainlabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumb.links);
} }
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.processBreadCrumbLinks();
    };
    BreadcrumbComponent.prototype.processBreadCrumbLinks = function () {
    };
    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
    BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { breadcrumb: "breadcrumb" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "content-header-left col-md-6 col-12 mb-2 breadcrumb-new", 4, "ngIf"], [1, "content-header-left", "col-md-6", "col-12", "mb-2", "breadcrumb-new"], [1, "content-header-title", "mb-0", "d-inline-block"], [1, "row", "breadcrumbs-top", "d-inline-block"], [1, "breadcrumb-wrapper", "col-12"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 7, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breadcrumb);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".dropdown-menu-right[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  left: auto !important;\r\n}\r\n\r\n.dropdown-menu.arrow[_ngcontent-%COMP%]:before {\r\n    left: 70px !important;\r\n    border-bottom-color: #ffffff;\r\n}\r\n\r\n.dropdown-menu.arrow[_ngcontent-%COMP%]:after {\r\n    top: 0px;\r\n}\r\n\r\n@media only screen and (max-width:767px) {\r\n  ._dropdown_mob[_ngcontent-%COMP%] {\r\n      margin-left: 150px !important;\r\n      transform: translate(40px, 40px) !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0VBQ0U7TUFDSSw2QkFBNkI7TUFDN0IsMkNBQTJDO0VBQy9DO0FBQ0YiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUuYXJyb3c6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LmFycm93OmFmdGVyIHtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAuX2Ryb3Bkb3duX21vYiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return BreadcrumbComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.css']
            }]
    }], function () { return []; }, { breadcrumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Matías\Universidad\Proyecto formulación\formulacion-proyecto\src\main.ts */"zUnb");


/***/ }),

/***/ "0KhJ":
/*!******************************************************************!*\
  !*** ./src/app/_layout/public-layout/public-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: PublicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicLayoutComponent", function() { return PublicLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");





var PublicLayoutComponent = /** @class */ (function () {
    function PublicLayoutComponent(renderer, router, document) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
    }
    PublicLayoutComponent.prototype.ngOnInit = function () {
        this.setBodyClass();
    };
    PublicLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    PublicLayoutComponent.prototype.setBodyClass = function () {
        var previosBodyClassList = [].slice.call(document.body.classList);
        var self = this;
        previosBodyClassList.forEach(function (c) {
            self.renderer.removeClass(document.body, c);
        });
        var currentBodyClassList = ['vertical-layout', 'bg-full-screen-image', 'vertical-overlay-menu',
            '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
        currentBodyClassList.forEach(function (c) {
            self.renderer.addClass(document.body, c);
        });
        // if (this.router.url === '/login' || (this.router.url === '')) {
        //   this.renderer.removeClass(document.body, 'fixed-navbar');
        // } else {
        //   this.renderer.addClass(document.body, 'fixed-navbar');
        // }
    };
    PublicLayoutComponent.ɵfac = function PublicLayoutComponent_Factory(t) { return new (t || PublicLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
    PublicLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicLayoutComponent, selectors: [["app-public-layout"]], decls: 2, vars: 0, consts: [["id", "sidenav-overlay", 1, "sidenav-overlay", "d-none", 3, "click"]], template: function PublicLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicLayoutComponent_Template_div_click_1_listener($event) { return ctx.rightbar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWMtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
    return PublicLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-public-layout',
                templateUrl: './public-layout.component.html',
                styleUrls: ['./public-layout.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "0SQT":
/*!****************************************************!*\
  !*** ./src/app/_layout/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_helpers/app.constants */ "2iER");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vertical/vertical.component */ "yYK4");
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./horizontal/horizontal.component */ "X1Yx");













function HeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HeaderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_ng_container_1_Template_ng_container_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_renderer, document, _themeSettingsService, deviceService) {
        this._renderer = _renderer;
        this.document = document;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.isMobile = false;
        this.selectedColorClass = '';
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (config.layout && config.layout.style &&
                config.layout.style === 'vertical') {
                self.layout = 'vertical';
            }
            else {
                self.layout = 'horizontal';
            }
            _this.refreshView();
        });
    };
    HeaderComponent.prototype.refreshView = function () {
        var self = this;
        var headerElement = document.getElementsByClassName('header-navbar');
        if (headerElement.item(0)) {
            var currentHeaderClassList = [];
            var navbar = this.document.getElementById('navbar-mobile');
            // Layout
            if (self._themeSettingsConfig.layout.style === 'horizontal') {
                currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu',
                    'navbar-without-dd-arrow', 'navbar-static-top'];
                var topHeaderElement = document.getElementById('top-header');
                if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
                    currentHeaderClassList.push('fixed-top');
                    this._renderer.removeClass(topHeaderElement, 'navbar-brand-center');
                    navbar.classList.remove('show');
                }
                else {
                    currentHeaderClassList.push('navbar-brand-center');
                    this._renderer.removeClass(topHeaderElement, 'fixed-top');
                    navbar.classList.add('show');
                }
            }
            else {
                currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu', 'navbar-without-dd-arrow', 'fixed-top',
                    'navbar-shadow'];
                if (self._themeSettingsConfig.colorTheme === 'semi-light' && self._themeSettingsConfig.layout.style === 'vertical') {
                    if (self._themeSettingsConfig.layout.style === 'vertical') {
                        // currentHeaderClassList.push('bg-info');
                    }
                    self._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                }
                else if (self._themeSettingsConfig.colorTheme === 'semi-dark' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
                else if (self._themeSettingsConfig.colorTheme === 'dark' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
                else if (self._themeSettingsConfig.colorTheme === 'light' && self._themeSettingsConfig.layout.style === 'vertical') {
                    self._renderer.addClass(headerElement.item(0), 'navbar-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
                    self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
                    // self._renderer.removeClass(headerElement.item(0), 'bg-info');
                }
            }
            currentHeaderClassList.forEach(function (c) {
                self._renderer.addClass(headerElement.item(0), c);
            });
        }
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HeaderComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
        this.refreshView();
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "resize", 4, "ngIf"], [3, "resize"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_7__["VerticalComponent"], _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_8__["HorizontalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
            }] }, { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_api/user/user.service */ "wsei");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "H88C");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-archwizard */ "tPw2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");





















var _c0 = ["labelImport"];
var _c1 = ["logoCake"];
function RegisterComponent_small_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_small_24_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.firstName.errors.required && (ctx_r1.f.firstName.dirty || ctx_r1.f.firstName.touched));
} }
function RegisterComponent_small_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El apellido es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_small_30_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.lastName.errors.required && (ctx_r2.f.lastName.dirty || ctx_r2.f.lastName.touched));
} }
function RegisterComponent_small_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El Email es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_36_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El Email debe ser v\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_small_36_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_small_36_div_2_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.required && (ctx_r3.f.email.dirty || ctx_r3.f.email.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.email && (ctx_r3.f.email.dirty || ctx_r3.f.email.touched));
} }
function RegisterComponent_small_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La contrase\u00F1a es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_small_42_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.required && (ctx_r4.f.password.dirty || ctx_r4.f.password.touched));
} }
function RegisterComponent_small_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El celular es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_small_48_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.f.phone.errors.required && (ctx_r5.f.phone.dirty || ctx_r5.f.phone.touched));
} }
function RegisterComponent_small_76_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Nombre de pasteler\u00EDa requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_small_76_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.i.cakeName.errors.required && ctx_r7.submitted && (ctx_r7.i.cakeName.dirty || ctx_r7.i.cakeName.touched));
} }
function RegisterComponent_small_82_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El giro es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_small_82_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.i.giro.errors.required && ctx_r8.submitted && (ctx_r8.i.giro.dirty || ctx_r8.i.giro.touched));
} }
function RegisterComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngb-progressbar", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("striped", true)("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r10.uploadPercent));
} }
function RegisterComponent_small_101_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_small_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_small_101_div_1_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.i.address.errors.required && ctx_r12.submitted && (ctx_r12.i.address.dirty || ctx_r12.i.address.touched));
} }
function RegisterComponent_i_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 66);
} }
function RegisterComponent_i_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 67);
} }
var _c2 = function () { return { symbol: "1" }; };
var _c3 = function (a0) { return { "is-invalid": a0 }; };
var _c4 = function () { return ["/login"]; };
var _c5 = function () { return { symbol: "2" }; };
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, alertService, authService, userService, storage) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.userService = userService;
        this.storage = storage;
        // Attribute for File
        this.fileToUpload = null;
        this.isStepTwoReached = false;
        this.isStepOneReached = false;
        this.loading = false;
        this.uploading = false;
        this.uploadFile = false;
        this.uploadOk = false;
        this.submitted = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.user = {};
        this.users = [];
        this.defaultImage = '../assets/images/portrait/small/default.png';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stepOneForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            birthDate3: ['']
        });
        this.stepTwoForm = this.formBuilder.group({
            cakeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            giro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users.map(function (item) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
            });
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () {
            return this.stepOneForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "i", {
        get: function () {
            return this.stepTwoForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "fValue", {
        get: function () {
            return this.stepOneForm.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "iValue", {
        get: function () {
            return this.stepTwoForm.value;
        },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        console.log("se presionó");
        this.submitted = true;
        console.log("upload en submit ", this.fileToUpload);
        if (this.stepTwoForm.invalid) {
            console.log("Pasó pa acá");
            this.submitted = false;
            return;
        }
        this.loading = true;
        this.authService.doRegister(this.stepOneForm.value).then(function (res) {
            var birthDate = _this.fValue.birthDate3.day + "/" + _this.fValue.birthDate3.month + "/" + _this.fValue.birthDate3.year;
            _this.user = {
                name: _this.fValue.firstName,
                lastName: _this.fValue.lastName,
                image: '../../../../assets/images/portrait/small/default.png',
                phone: _this.fValue.phone,
                birthdate: birthDate,
                cakeName: _this.iValue.cakeName,
                address: _this.iValue.address,
                rol: "admin",
                giro: _this.iValue.giro,
                uid: res.user.uid
            };
            console.log("El usuario " + _this.user);
            var currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser;
            currentUser.updateProfile({
                photoURL: _this.logoCake.nativeElement.value,
                displayName: _this.fValue.firstName + " " + _this.fValue.lastName
            }).then(function (user) {
                console.log(user, 'user succesfull update');
            }, function (err) {
                console.log(err);
            });
            _this.loading = false;
            console.log(res);
            _this.errorMessage = '';
            _this.alertService.success('Registration successful', true);
            if (_this.users.length === 0) {
                _this.userService.createUser(_this.user).then(function (user) {
                    console.log(user);
                });
            }
            else if (_this.users.length !== 0) {
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.users[i].uid !== res.user.uid) {
                        _this.userService.createUser(_this.user).then(function (user) {
                            console.log(user);
                        });
                        break;
                    }
                    else {
                        console.log('error');
                    }
                }
            }
            else {
                console.log('error');
            }
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.submitted = false;
            _this.alertService.error(err.message);
        });
    };
    RegisterComponent.prototype.onFileChange = function (files) {
        var _this = this;
        console.log(files);
        this.labelImport.nativeElement.innerText = Array.from(files)
            .map(function (f) { return f.name; })
            .join(', ');
        this.fileToUpload = files.item(0);
        console.log("al", this.fileToUpload);
        var id = Math.random().toString(36).substring(2); // Id for images
        var file = this.fileToUpload;
        var filePath = "uploads/image_" + id;
        var ref = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        console.log(this.uploadPercent);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe(function (value) {
            _this.uploading = true;
        });
        this.uploadOk = true;
    };
    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"])); };
    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["ng-component"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.labelImport = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.logoCake = _t.first);
        } }, decls: 111, vars: 50, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "validation"], [1, "row", "justify-content-center"], [1, "col-8"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-block"], ["navBarLayout", "large-filled-symbols"], ["wizard", ""], [3, "stepTitle", "navigationSymbol"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "firstname", 1, "form-control-label"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "form-text text-muted danger", "class", "invalid-feedback", 4, "ngIf"], ["for", "lastname", 1, "form-control-label"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["for", "email", 1, "form-control-label"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "form-control-label"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "phone", 1, "form-control-label"], ["type", "number", "formControlName", "phone", 1, "form-control", 3, "ngClass"], ["for", "birthDate3", 1, "form-control-label"], [1, "input-group"], ["formControlName", "birthDate3", "placeholder", "dd-mm-yyyy", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d4", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], [1, "form-group", "text-center", "space-20"], ["type", "button", 1, "btn", "btn-raised", "btn-secondary", "mr-1", 3, "routerLink"], [2, "margin-right", "10px"], [1, "feather", "ft-chevron-left"], ["uiSref", "address", "type", "button", "awNextStep", "", 1, "btn", "btn-raised", "btn-info", 3, "disabled"], [2, "margin-left", "10px"], [1, "feather", "ft-chevron-right"], [1, "col-md-12"], ["for", "cake", 1, "form-control-label"], ["type", "text", "formControlName", "cakeName", 1, "form-control", 3, "ngClass"], ["for", "email2", 1, "form-control-label"], ["type", "text", "formControlName", "giro", 1, "form-control", 3, "ngClass"], ["novalidate", "", 1, "form-group"], [1, "custom-file"], ["type", "file", "accept", ".png, .jpg, jpeg", "formControlName", "logo", "id", "logo", 1, "custom-file-input", 3, "change"], ["for", "logo", 1, "custom-file-label"], ["labelImport", ""], [4, "ngIf"], ["type", "hidden", 3, "value"], ["logoCake", ""], ["for", "address", 1, "form-control-label"], ["type", "text", "formControlName", "address", "rows", "3", 1, "form-control", 3, "ngClass"], ["uiSref", "personal", "type", "button", "awPreviousStep", "", 1, "btn", "btn-raised", "btn-secondary", "mr-1"], ["uiSref", "address", "type", "button", 1, "btn", "btn-outline-info", 3, "disabled", "click"], ["class", "fa fa-refresh fa-spin", 4, "ngIf"], ["class", "feather ft-user", 4, "ngIf"], [1, "invalid-feedback"], ["height", "3px", "type", "success", 3, "striped", "value"], [1, "fa", "fa-refresh", "fa-spin"], [1, "feather", "ft-user"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Formulario de registro");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "aw-wizard", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "aw-wizard-step", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "form", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Nombre : ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterComponent_small_24_Template, 2, 1, "small", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Apellido :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RegisterComponent_small_30_Template, 2, 1, "small", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Email :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RegisterComponent_small_36_Template, 3, 2, "small", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Contrase\u00F1a :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, RegisterComponent_small_42_Template, 2, 1, "small", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Celular :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, RegisterComponent_small_48_Template, 2, 1, "small", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Fecha de nacimiento :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 33, 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55); return _r6.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Iniciar sesi\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Siguiente ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "aw-wizard-step", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "form", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Nombre pasteler\u00EDa :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, RegisterComponent_small_76_Template, 2, 1, "small", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Giro :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, RegisterComponent_small_82_Template, 2, 1, "small", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Logo :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "input", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_88_listener($event) { return ctx.onFileChange($event.target.files); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "label", 53, 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Elige un archivo");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, RegisterComponent_div_92_Template, 3, 4, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 56, 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "label", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Direcci\u00F3n pasteler\u00EDa :");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "textarea", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, RegisterComponent_small_101_Template, 2, 1, "small", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " Anterior");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_107_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, RegisterComponent_i_108_Template, 1, 0, "i", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, RegisterComponent_i_109_Template, 1, 0, "i", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Reg\u00EDstrate ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTitle", "Usuario")("navigationSymbol", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.stepOneForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c3, ctx.f.firstName.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c3, ctx.f.lastName.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c3, ctx.f.email.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.email.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c3, ctx.f.password.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.password.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c3, ctx.f.phone.errors));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.phone.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.stepOneForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTitle", "Pasteler\u00EDa")("navigationSymbol", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c5));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.stepTwoForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](44, _c3, ctx.i.cakeName.errors && ctx.submitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.i.cakeName.errors && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](46, _c3, ctx.i.giro.errors && ctx.submitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.i.giro.errors && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uploadOk);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](95, 29, ctx.urlImage));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](48, _c3, ctx.i.address.errors && ctx.submitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.i.address.errors && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.stepTwoForm.valid || ctx.uploading == false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.submitted);
        } }, directives: [angular_archwizard__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"], angular_archwizard__WEBPACK_IMPORTED_MODULE_11__["WizardStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbInputDatepicker"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], angular_archwizard__WEBPACK_IMPORTED_MODULE_11__["NextStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_11__["PreviousStepDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbProgressbar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".margin-left-5[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n}\r\n\r\n.tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.form-control.is-invalid[_ngcontent-%COMP%] {\r\n    border-color: #CACFE7;\r\n    background-image: none !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .wizard-steps.vertical {\r\n    width: 90%;\r\n\r\n}\r\n\r\n[_nghost-%COMP%]     .vertical .large-filled-symbols{\r\n  width: 10;\r\n\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .wizard-steps.vertical[_ngcontent-%COMP%] {\r\n    width: 80% !important;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .vertical[_ngcontent-%COMP%]   .large-filled-symbols[_ngcontent-%COMP%] {\r\n    width: 20% !important;\r\n  }\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li:after {\r\n    color: #999;\r\n    font-size: 19px;\r\n    text-align: center;\r\n    border: 5px solid #f4f5fa;\r\n    background-color: #fff;\r\n    line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.editing:after {\r\n    color: #666EE8;\r\n    border: 5px solid #666EE8 !important;\r\n    background-color: #fff;\r\n    line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.editing1:after {\r\n  color: #666EE8;\r\n  border: 5px solid #666EE8 !important;\r\n  background-color: #fff;\r\n  line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.current:after {\r\n    color: #666EE8;\r\n    border: 5px solid #666EE8;\r\n    background-color: #fff;\r\n    line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]    .horizontal.large-filled-symbols ul.steps-indicator li.done:after {\r\n    color: #fff;\r\n    border: 5px solid #666EE8;\r\n    background-color: #666EE8;\r\n    line-height: 40px;\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n  background-color: #e6e6e6;\r\n  content: '';\r\n  position: absolute;\r\n  height: 5px !important;\r\n  width: calc(100% - 50px);\r\n  top: -25px;\r\n  left: calc(50% + 25px);\r\n}\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.done:before {\r\n  background-color:#666EE8;\r\n  content: '';\r\n  position: absolute;\r\n  height: 5px !important;\r\n  width: calc(100% - 50px);\r\n  top: -25px;\r\n  left: calc(50% + 25px);\r\n}\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n  background-color: #f4f5fa;\r\n  height: 5px;\r\n  line-height: 40px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.done:not(:last-child):before {\r\n    background-color: #666EE8;\r\n    height: 5px;\r\n    line-height: 40px;\r\n    }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li:after {\r\n      color: #999;\r\n      font-size: 18px;\r\n      border: 5px solid #f4f5fa;\r\n      background-color: #fff;\r\n      line-height: 40px;\r\n    }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.editing:after {\r\n      color: #666EE8;\r\n      border: 5px solid #666EE8 !important;\r\n      background-color: #fff;\r\n      line-height: 40px;\r\n    }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.current:after {\r\n      color: #666EE8;\r\n        border: 5px solid #666EE8;\r\n        background-color: #fff;\r\n        line-height: 40px;\r\n    }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.done:after {\r\n      color: #fff;\r\n      border: 5px solid #666EE8;\r\n      background-color: #666EE8;\r\n      line-height: 40px;\r\n    }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before {\r\n      background-color: #f4f5fa;\r\n      height: 5px;\r\n      line-height: 40px;\r\n      }\r\n\r\n[_nghost-%COMP%]     .vertical.large-filled-symbols ul.steps-indicator li.done:not(:last-child):before {\r\n        background-color: #666EE8;\r\n        height: 35px;\r\n        }\r\n\r\n[_nghost-%COMP%]     .horizontal.large-filled-symbols ul.steps-indicator li.done.step:after {\r\n          background-color: #666EE8;\r\n          border-color: #666EE8;\r\n          color: #FFF;\r\n          line-height: 40px;\r\n      }\r\n\r\n[_nghost-%COMP%]     .horizontal ul.steps-indicator li .step-indicator{\r\n        position: relative;\r\n        margin: 0px;\r\n        padding: 10px 0 0;\r\n        text-align: center;\r\n    }\r\n\r\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\r\n      color: unset !important;\r\n      background-color: unset !important;\r\n      border-color: #d3d9df !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\r\n      background-color: #e2e6ea !important;\r\n      border-color: #dae0e5 !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .btn-light {\r\n      color: unset !important;\r\n      background-color: unset !important;\r\n      border-color: unset !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .bg-primary {\r\n      background-color: #007bff !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .text-white {\r\n      color: #fff !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .custom-day {\r\n      text-align: center;\r\n      padding: .185rem .25rem;\r\n      display: inline-block;\r\n      height: 2rem;\r\n      width: 2rem;\r\n  }\r\n\r\n[_nghost-%COMP%]     .custom-day:active {\r\n      color: #6d7183 !important;\r\n     background-color: #fff !important;\r\n     border-block-color: rgb(2, 117, 216) !important;\r\n     \r\n  }\r\n\r\n.bg-light[_ngcontent-%COMP%] {\r\n      background-color: #f8f9fa !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .hidden {\r\n      display: block !important;\r\n  }\r\n\r\n.ngb-dp-weekday[_ngcontent-%COMP%] {\r\n      color: #17a2b8;\r\n  }\r\n\r\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\r\n      line-height: 2rem;\r\n      text-align: center;\r\n      font-style: italic;\r\n  }\r\n\r\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\r\n      pointer-events: auto;\r\n  }\r\n\r\n.small[_ngcontent-%COMP%] {\r\n      font-size: 80%;\r\n      font-weight: 400;\r\n  }\r\n\r\n.ngb-dp-day[_ngcontent-%COMP%] {\r\n      cursor: pointer !important;\r\n  }\r\n\r\n.ngb-dp-month[_ngcontent-%COMP%] {\r\n      pointer-events: none;\r\n  }\r\n\r\n.btn-light[_ngcontent-%COMP%]:hover {\r\n      color: #212529 !important;\r\n      background-color: #e2e6ea !important;\r\n      border-color: #dae0e5 !important;\r\n  }\r\n\r\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\r\n      pointer-events: auto;\r\n  }\r\n\r\n.ngb-dp-header[_ngcontent-%COMP%] {\r\n      border-bottom: 0;\r\n      border-radius: .25rem .25rem 0 0;\r\n      padding-top: .25rem;\r\n  }\r\n\r\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\r\n      width: 2rem;\r\n      height: 2rem;\r\n  }\r\n\r\n.custom-day[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      padding: 0.185rem 0.25rem;\r\n      display: inline-block;\r\n      height: 2rem;\r\n      width: 2rem;\r\n  }\r\n\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n      background-color: #e6e6e6;\r\n  }\r\n\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(2, 117, 216);\r\n      color: white;\r\n  }\r\n\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n      background-color: rgba(2, 117, 216, 0.5);\r\n  }\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n      background: rgba(255, 249, 249, 0.5) !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\r\n    color: unset !important;\r\n    background-color: unset !important;\r\n    border-color: #d3d9df !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\r\n    background-color: #e2e6ea !important;\r\n    border-color: #dae0e5 !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .btn-light {\r\n    color: unset !important;\r\n    background-color: unset !important;\r\n    border-color: unset !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .bg-primary {\r\n    background-color: #007bff !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .text-white {\r\n    color: #fff !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .custom-day {\r\n    text-align: center;\r\n    padding: .185rem .25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n  }\r\n\r\n[_nghost-%COMP%]     .custom-day:active {\r\n    color: #6d7183 !important;\r\n   background-color: #fff !important;\r\n   border-block-color: rgb(2, 117, 216) !important;\r\n  }\r\n\r\nselect.form-control[_ngcontent-%COMP%]:not([size]):not([multiple]).input-sm {\r\n    padding: unset !important;\r\n  }\r\n\r\n.bg-light[_ngcontent-%COMP%] {\r\n    background-color: #f8f9fa !important;\r\n  }\r\n\r\n[_nghost-%COMP%]     .hidden {\r\n    display: block !important;\r\n  }\r\n\r\n.ngb-dp-weekday[_ngcontent-%COMP%] {\r\n    color: #17a2b8;\r\n  }\r\n\r\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\r\n    line-height: 2rem;\r\n    text-align: center;\r\n    font-style: italic;\r\n  }\r\n\r\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\r\n    pointer-events: auto;\r\n  }\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    font-size: 80%;\r\n    font-weight: 400;\r\n  }\r\n\r\n.ngb-dp-day[_ngcontent-%COMP%] {\r\n    cursor: pointer !important;\r\n  }\r\n\r\n.ngb-dp-month[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n  }\r\n\r\n.btn-light[_ngcontent-%COMP%]:hover {\r\n    color: #212529 !important;\r\n    background-color: #e2e6ea !important;\r\n    border-color: #dae0e5 !important;\r\n  }\r\n\r\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\r\n    pointer-events: auto;\r\n  }\r\n\r\n.ngb-dp-header[_ngcontent-%COMP%] {\r\n    border-bottom: 0;\r\n    border-radius: .25rem .25rem 0 0;\r\n    padding-top: .25rem;\r\n  }\r\n\r\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    height: 2rem;\r\n  }\r\n\r\n.custom-day[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 0.185rem 0.25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n  }\r\n\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n    background-color: #e6e6e6;\r\n  }\r\n\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(2, 117, 216);\r\n    color: white;\r\n  }\r\n\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n    background-color: rgba(2, 117, 216, 0.5);\r\n  }\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLFVBQVU7O0FBRWQ7O0FBQ0E7RUFDRSxTQUFTOztBQUVYOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCOztBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakI7O0FBQ0E7TUFDRSxXQUFXO01BQ1gsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixzQkFBc0I7TUFDdEIsaUJBQWlCO0lBQ25COztBQUNBO01BQ0UsY0FBYztNQUNkLG9DQUFvQztNQUNwQyxzQkFBc0I7TUFDdEIsaUJBQWlCO0lBQ25COztBQUNBO01BQ0UsY0FBYztRQUNaLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsaUJBQWlCO0lBQ3JCOztBQUNBO01BQ0UsV0FBVztNQUNYLHlCQUF5QjtNQUN6Qix5QkFBeUI7TUFDekIsaUJBQWlCO0lBQ25COztBQUNBO01BQ0UseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxpQkFBaUI7TUFDakI7O0FBQ0E7UUFDRSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaOztBQUNBO1VBQ0UseUJBQXlCO1VBQ3pCLHFCQUFxQjtVQUNyQixXQUFXO1VBQ1gsaUJBQWlCO01BQ3JCOztBQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztBQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLGtDQUFrQztNQUNsQyxnQ0FBZ0M7RUFDcEM7O0FBRUE7TUFDSSxvQ0FBb0M7TUFDcEMsZ0NBQWdDO0VBQ3BDOztBQUVBO01BQ0ksdUJBQXVCO01BQ3ZCLGtDQUFrQztNQUNsQyw4QkFBOEI7RUFDbEM7O0FBRUE7TUFDSSxvQ0FBb0M7RUFDeEM7O0FBRUE7TUFDSSxzQkFBc0I7RUFDMUI7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osV0FBVztFQUNmOztBQUVBO01BQ0kseUJBQXlCO0tBQzFCLGlDQUFpQztLQUNqQywrQ0FBK0M7O0VBRWxEOztBQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztBQUVBO01BQ0kseUJBQXlCO0VBQzdCOztBQUVBO01BQ0ksY0FBYztFQUNsQjs7QUFFQTs7TUFFSSxpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGtCQUFrQjtFQUN0Qjs7QUFFQTtNQUNJLG9CQUFvQjtFQUN4Qjs7QUFFQTtNQUNJLGNBQWM7TUFDZCxnQkFBZ0I7RUFDcEI7O0FBRUE7TUFDSSwwQkFBMEI7RUFDOUI7O0FBRUE7TUFDSSxvQkFBb0I7RUFDeEI7O0FBRUE7TUFDSSx5QkFBeUI7TUFDekIsb0NBQW9DO01BQ3BDLGdDQUFnQztFQUNwQzs7QUFFQTtNQUNJLG9CQUFvQjtFQUN4Qjs7QUFFQTtNQUNJLGdCQUFnQjtNQUNoQixnQ0FBZ0M7TUFDaEMsbUJBQW1CO0VBQ3ZCOztBQUVBOzs7TUFHSSxXQUFXO01BQ1gsWUFBWTtFQUNoQjs7QUFFQTtNQUNJLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixXQUFXO0VBQ2Y7O0FBRUE7TUFDSSx5QkFBeUI7RUFDN0I7O0FBRUE7O01BRUksa0NBQWtDO01BQ2xDLFlBQVk7RUFDaEI7O0FBRUE7TUFDSSx3Q0FBd0M7RUFDNUM7O0FBRUE7TUFDSSwrQ0FBK0M7RUFDbkQ7O0FBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7O0FBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBRUE7SUFDRSx5QkFBeUI7R0FDMUIsaUNBQWlDO0dBQ2pDLCtDQUErQztFQUNoRDs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7O0lBRUUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtFQUNyQjs7QUFFQTs7O0lBR0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7O0lBRUUsa0NBQWtDO0lBQ2xDLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7QUFFQTtJQUNFLCtDQUErQztFQUNqRCIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1sZWZ0LTV7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQgLnRhYi1wYW5lIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjQ0FDRkU3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAud2l6YXJkLXN0ZXBzLnZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwgLmxhcmdlLWZpbGxlZC1zeW1ib2xze1xyXG4gIHdpZHRoOiAxMDtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLndpemFyZC1zdGVwcy52ZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC52ZXJ0aWNhbCAubGFyZ2UtZmlsbGVkLXN5bWJvbHMge1xyXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaTphZnRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmNGY1ZmE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZWRpdGluZzphZnRlciB7XHJcbiAgICBjb2xvcjogIzY2NkVFODtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM2NjZFRTggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmcxOmFmdGVyIHtcclxuICBjb2xvcjogIzY2NkVFODtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjNjY2RUU4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5jdXJyZW50OmFmdGVyIHtcclxuICAgIGNvbG9yOiAjNjY2RUU4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzY2NkVFODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwLmhvcml6b250YWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmRvbmU6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjNjY2RUU4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NkVFODtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gIHRvcDogLTI1cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgKyAyNXB4KTtcclxufSBcclxuOmhvc3QgOjpuZy1kZWVwIC5ob3Jpem9udGFsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNjY2RUU4O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICB0b3A6IC0yNXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlICsgMjVweCk7XHJcbn0gXHJcbjpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpOm5vdCg6bGFzdC1jaGlsZCk6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWZhO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOm5vdCg6bGFzdC1jaGlsZCk6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjZFRTg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6YWZ0ZXIge1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBib3JkZXI6IDVweCBzb2xpZCAjZjRmNWZhO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmVkaXRpbmc6YWZ0ZXIge1xyXG4gICAgICBjb2xvcjogIzY2NkVFODtcclxuICAgICAgYm9yZGVyOiA1cHggc29saWQgIzY2NkVFOCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAudmVydGljYWwubGFyZ2UtZmlsbGVkLXN5bWJvbHMgdWwuc3RlcHMtaW5kaWNhdG9yIGxpLmN1cnJlbnQ6YWZ0ZXIge1xyXG4gICAgICBjb2xvcjogIzY2NkVFODtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjNjY2RUU4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnZlcnRpY2FsLmxhcmdlLWZpbGxlZC1zeW1ib2xzIHVsLnN0ZXBzLWluZGljYXRvciBsaS5kb25lOmFmdGVyIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkICM2NjZFRTg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjZFRTg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGk6bm90KDpsYXN0LWNoaWxkKTpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWZhO1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC52ZXJ0aWNhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZG9uZTpub3QoOmxhc3QtY2hpbGQpOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NkVFODtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbC5sYXJnZS1maWxsZWQtc3ltYm9scyB1bC5zdGVwcy1pbmRpY2F0b3IgbGkuZG9uZS5zdGVwOmFmdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjZFRTg7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM2NjZFRTg7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9ICAgXHJcbiAgICAgIDpob3N0IDo6bmctZGVlcCAuaG9yaXpvbnRhbCB1bC5zdGVwcy1pbmRpY2F0b3IgbGkgLnN0ZXAtaW5kaWNhdG9ye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gICAgICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0IHtcclxuICAgICAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5iZy1wcmltYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgd2lkdGg6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xyXG4gICAgICBjb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcclxuICAgICBcclxuICB9XHJcbiAgXHJcbiAgLmJnLWxpZ2h0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgICAgIGNvbG9yOiAjMTdhMmI4O1xyXG4gIH1cclxuICBcclxuICAubmdiLWRwLXdlZWstbnVtYmVyLFxyXG4gIC5uZ2ItZHAtd2Vla2RheSB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgXHJcbiAgLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsIHtcclxuICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2ItZHAtZGF5IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2ItZHAtbW9udGgge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1saWdodDpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2ItZHAtaGVhZGVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtIC4yNXJlbSAwIDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2ItZHAtZGF5LFxyXG4gIC5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbiAgLm5nYi1kcC13ZWVrZGF5IHtcclxuICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgIGhlaWdodDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1kYXkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICB3aWR0aDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tZGF5LnJhbmdlLFxyXG4gIC5jdXN0b20tZGF5OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWRheS5mYWRlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkM2Q5ZGYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XHJcbiAgICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjE4NXJlbSAuMjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBzZWxlY3QuZm9ybS1jb250cm9sOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKS5pbnB1dC1zbSB7XHJcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYmctbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubmdiLWRwLXdlZWtkYXkge1xyXG4gICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2ItZHAtd2Vlay1udW1iZXIsXHJcbiAgLm5nYi1kcC13ZWVrZGF5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICAubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgLm5nYi1kcC1kYXkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2ItZHAtbW9udGgge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbGlnaHQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm5nYi1kcC1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xyXG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm5nYi1kcC1kYXksXHJcbiAgLm5nYi1kcC13ZWVrLW51bWJlcixcclxuICAubmdiLWRwLXdlZWtkYXkge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tZGF5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWRheS5yYW5nZSxcclxuICAuY3VzdG9tLWRheTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWRheS5mYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUI"])('numberTabs'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RegisterComponent.prototype, "blockUINumberTabs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["BlockUI"])('iconTabs'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RegisterComponent.prototype, "blockUIIconTabs", void 0);
    return RegisterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _api_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"] }]; }, { blockUINumberTabs: [], blockUIIconTabs: [], labelImport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['labelImport', { static: true }]
        }], logoCake: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['logoCake']
        }] }); })();


/***/ }),

/***/ "2iER":
/*!*******************************************!*\
  !*** ./src/app/_helpers/app.constants.ts ***!
  \*******************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    AppConstants.MOBILE_RESPONSIVE_WIDTH = 992;
    AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL = 768;
    AppConstants.NAVIGATION_TYPE_COLLAPSIBLE = 'menu-collapsible';
    AppConstants.NAVIGATION_TYPE_ACCORDATION = 'menu-accordation';
    AppConstants.LAYOUT_STYLE_HORIZONTAL = 'horizontal';
    AppConstants.LAYOUT_STYLE_VERTICAL = 'vertical';
    AppConstants.fireRefreshEventOnWindow = function () {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
    };
    return AppConstants;
}());



/***/ }),

/***/ "5YoL":
/*!****************************************!*\
  !*** ./src/app/_services/chart.api.ts ***!
  \****************************************/
/*! exports provided: ChartApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartApiService", function() { return ChartApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ChartApiService = /** @class */ (function () {
    function ChartApiService(http) {
        this.http = http;
        this.apiBaseURL = 'assets/data';
        this.loadDataURL = null;
        this.loadSalesDataURL = null;
        this.loadEcommerceDataURL = null;
        this.loadStatisticsDataURL = null;
        this.loadTimelineDataURL = null;
        this.loadInvoiceDataURL = null;
        this.loadDataURL = this.apiBaseURL + "/chartist/charts/chartist.json";
        this.loadSalesDataURL = this.apiBaseURL + "/dashboard/sales/chartist.json";
        this.loadEcommerceDataURL = this.apiBaseURL + "/dashboard/ecommerce/chartist.json";
        this.loadStatisticsDataURL = this.apiBaseURL + "/advancecard/statistics/chartist.json";
        this.loadStatisticsDataURL = this.apiBaseURL + "/advancecard/statistics/chartist.json";
        this.loadTimelineDataURL = this.apiBaseURL + "/user-profile/user-profile.json";
        this.loadInvoiceDataURL = this.apiBaseURL + "/invoice-summary/invoice-summary.json";
    }
    ChartApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // Error
            console.error('error:', error.error.message);
        }
        else {
            // Error
            console.error("Api server returned " + error.status + ", " +
                ("error body: " + error.error));
        }
        // throwError is observable
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Error has happened');
    };
    ChartApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ChartApiService.prototype.getChartistData = function () {
        return this.http.get(this.loadDataURL, httpOptions);
    };
    ChartApiService.prototype.getSalesData = function () {
        return this.http.get(this.loadSalesDataURL, httpOptions);
    };
    ChartApiService.prototype.getEcommerceData = function () {
        return this.http.get(this.loadEcommerceDataURL, httpOptions);
    };
    ChartApiService.prototype.getStatisticsData = function () {
        return this.http.get(this.loadStatisticsDataURL, httpOptions);
    };
    ChartApiService.prototype.getTimelineData = function () {
        return this.http.get(this.loadTimelineDataURL, httpOptions);
    };
    ChartApiService.prototype.getInvoiceData = function () {
        return this.http.get(this.loadInvoiceDataURL, httpOptions);
    };
    ChartApiService.ɵfac = function ChartApiService_Factory(t) { return new (t || ChartApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    ChartApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChartApiService, factory: ChartApiService.ɵfac });
    return ChartApiService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);





var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    // Facebook login
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
            _this.afAuth.auth.signInWithPopup(provider).then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    // Github login
    AuthService.prototype.doGitHubLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GithubAuthProvider();
            _this.afAuth.auth.signInWithPopup(provider).then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    // Twitter login
    AuthService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider();
            _this.afAuth.auth.signInWithPopup(provider).then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    // Google login
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth.signInWithPopup(provider).then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    // Register
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
                .createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    // Login
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
                .signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    // Logout
    AuthService.prototype.doLogout = function () {
        var _this = this;
        var a = "a"; // Fix error in resolve...
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('remember');
                localStorage.removeItem('userForCurrentUser');
                localStorage.removeItem('dataCurrentUser');
                _this.afAuth.auth.signOut();
                resolve(a);
            }
            else {
                localStorage.removeItem('currentUser');
                resolve(a);
            }
        });
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "AgUQ":
/*!***********************************************************************************!*\
  !*** ./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FullLayoutNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutNavbarComponent", function() { return FullLayoutNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





var _c0 = function () { return ["/dashboard/sales"]; };
var FullLayoutNavbarComponent = /** @class */ (function () {
    function FullLayoutNavbarComponent(document) {
        this.document = document;
    }
    FullLayoutNavbarComponent.prototype.ngOnInit = function () {
    };
    FullLayoutNavbarComponent.prototype.toggleNavbar = function (e) {
        var navbar = this.document.getElementById('navbar-mobile');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
        else {
            navbar.classList.add('show');
        }
    };
    FullLayoutNavbarComponent.ɵfac = function FullLayoutNavbarComponent_Factory(t) { return new (t || FullLayoutNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
    FullLayoutNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullLayoutNavbarComponent, selectors: [["app-full-layout-navbar"]], decls: 21, vars: 4, consts: [[1, "header-navbar", "navbar-expand-md", "navbar", "navbar-with-menu", "navbar-without-dd-arrow", "fixed-top", "navbar-dark", "navbar-shadow"], [1, "navbar-wrapper"], [1, "navbar-header"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mobile-menu", "d-md-none", "mr-auto"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs", 3, "routerLink"], [1, "feather", "ft-menu", "font-large-1"], [1, "nav-item"], [1, "navbar-brand", 3, "routerLink"], ["alt", "modern admin logo", "src", "../../../../assets/images/logo/logo.png", 1, "brand-logo"], [1, "brand-text"], [1, "nav-item", "d-md-none"], ["data-toggle", "collapse", "data-target", "#navbar-mobile", 1, "nav-link", "open-navbar-container", 3, "click"], [1, "la", "la-ellipsis-v"], [1, "navbar-container"], ["id", "navbar-mobile", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "nav", "navbar-nav"], [1, "nav-link", "mr-2", "nav-link-label", 3, "routerLink"], [1, "ficon", "feather", "ft-arrow-left"]], template: function FullLayoutNavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Principal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutNavbarComponent_Template_a_click_13_listener($event) { return ctx.toggleNavbar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@media (min-width: 767.98px) {\r\n    .collapse[_ngcontent-%COMP%]:not(.show) {\r\n        display: flex !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 767.98px) {\r\n    .justify-content-end[_ngcontent-%COMP%] {\r\n        display: flex !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtbGF5b3V0LW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoiZnVsbC1sYXlvdXQtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5jb2xsYXBzZTpub3QoLnNob3cpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLmp1c3RpZnktY29udGVudC1lbmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
    return FullLayoutNavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-layout-navbar',
                templateUrl: './full-layout-navbar.component.html',
                styleUrls: ['./full-layout-navbar.component.css']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB-LeL2-iMC0uVRN1znuH3BvVuFESrZ6hI",
        authDomain: "proyectopasteleria-8a8e3.firebaseapp.com",
        databaseURL: "https://proyectopasteleria-8a8e3.firebaseio.com",
        projectId: "proyectopasteleria-8a8e3",
        storageBucket: "proyectopasteleria-8a8e3.appspot.com",
        messagingSenderId: "136402622882",
        appId: "1:136402622882:web:534ef6a95fab8dc108fafb",
        measurementId: "G-V8H2D0GJZ2"
    },
    googleApiKey: 'AIzaSyAIIYOxA7qeetFz6TuR1Qewc0Rrjhzx7ZU',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BGRz":
/*!******************************************************************!*\
  !*** ./src/app/login/privacy-policy/privacy-policy.component.ts ***!
  \******************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
    PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 96, vars: 0, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width"], ["href", "https://firebase.google.com/policies/analytics", "target", "_blank"], ["href", "https://www.facebook.com/about/privacy/update/printable", "target", "_blank"], ["href", "https://privacypolicytemplate.net", "target", "_blank"], ["href", "https://app-privacy-policy-generator.firebaseapp.com/", "target", "_blank"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Evolvision Technologies built the Modern Admin app as a Commercial app. This SERVICE is provided by Evolvision Technologies and is intended for use as is. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. we will not use or share your information with anyone except as described in this Privacy Policy. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Modern Admin unless otherwise defined in this Privacy Policy. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Information Collection and Use");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Email, First name, Last name, Profile picture. The information that we request will be retained by us and used as described in this privacy policy. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " The app does use third party services that may collect information used to identify you. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Link to privacy policy of third party service providers used by the app ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Google Analytics for Firebase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Log Data");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " we want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201CIP\u201D) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cookies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " This Service does not use these \u201Ccookies\u201D explicitly. However, the app may use third party code and libraries that use \u201Ccookies\u201D to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Service Providers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " we may employ third-party companies and individuals due to the following reasons: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "To facilitate our Service;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "To provide the Service on our behalf;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "To perform Service-related services; or");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "To assist us in analyzing how our Service is used.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " we want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Security");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " we value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Links to Other Sites");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. we have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Children\u2019s Privacy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " These Services do not address anyone under the age of 13. we do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Changes to This Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " we may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. we will notify you of any changes by posting the new Privacy Policy on this page. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "This policy is effective as of 2020-06-01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Contact Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at jimit@evolvision.com. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " This privacy policy page was created at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "privacypolicytemplate.net");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " and modified/generated by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "App Privacy Policy Generator");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["body[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n    margin: 8px !important;\r\n    color: #141415;\r\n   font-size: larger;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGNBQWM7R0FDZixpQkFBaUI7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxNDE0MTU7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcbnAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn0iXX0= */", "body[_ngcontent-%COMP%] { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding:1em; }"] });
    return PrivacyPolicyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-policy',
                templateUrl: './privacy-policy.component.html',
                styleUrls: ['./privacy-policy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BOj5":
/*!********************************************************************!*\
  !*** ./src/app/login/terms-condition/terms-condition.component.ts ***!
  \********************************************************************/
/*! exports provided: TermsConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionComponent", function() { return TermsConditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var TermsConditionComponent = /** @class */ (function () {
    function TermsConditionComponent() {
    }
    TermsConditionComponent.prototype.ngOnInit = function () {
    };
    TermsConditionComponent.ɵfac = function TermsConditionComponent_Factory(t) { return new (t || TermsConditionComponent)(); };
    TermsConditionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsConditionComponent, selectors: [["app-terms-condition"]], decls: 54, vars: 0, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width"], ["href", "https://firebase.google.com/terms/analytics", "target", "_blank"], ["href", "https://www.facebook.com/legal/terms/plain_text_terms", "target", "_blank"], ["href", "https://app-privacy-policy-generator.firebaseapp.com/", "target", "_blank"]], template: function TermsConditionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terms & Conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Terms & Conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " By downloading or using the app, these terms will automatically apply to you \u2013 you should make sure therefore that you read them carefully before using the app. You\u2019re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You\u2019re not allowed to attempt to extract the source code of the app, and you also shouldn\u2019t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Evolvision Technologies. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Evolvision Technologies is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you\u2019re paying for. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The Modern Admin app stores and processes personal data that you have provided to us, in order to provide our Service. It\u2019s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone\u2019s security features and it could mean that the Modern Admin app won\u2019t work properly or at all. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The app does use third party services that declare their own Terms and Conditions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Link to Terms and Conditions of third party service providers used by the app ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Google Analytics for Firebase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " You should be aware that there are certain things that Evolvision Technologies will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Evolvision Technologies cannot take responsibility for the app not working at full functionality if you don\u2019t have access to Wi-Fi, and you don\u2019t have any of your data allowance left. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " If you\u2019re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you\u2019re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you\u2019re using the app, please be aware that we assume that you have received permission from the bill payer for using the app. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Along the same lines, Evolvision Technologies cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged \u2013 if it runs out of battery and you can\u2019t turn it on to avail the Service, Evolvision Technologies cannot accept responsibility. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " With respect to Evolvision Technologies\u2019s responsibility for your use of the app, when you\u2019re using the app, it\u2019s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Evolvision Technologies accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " At some point, we may wish to update the app. The app is currently available on \u2013 the requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you\u2019ll need to download the updates if you want to keep using the app. Evolvision Technologies does not promise that it will always update the app so that it is relevant to you and/or works with the version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Changes to This Terms and Conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " we may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. we will notify you of any changes by posting the new Terms and Conditions on this page. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " These terms and conditions are effective as of 2020-06-01 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contact Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at jimit@evolvision.com. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " This Terms and Conditions page was generated by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "App Privacy Policy Generator");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["body[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n    margin: 8px !important;\r\n    color: #141415;\r\n   font-size: larger;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    display: block;\r\n    -webkit-margin-before: 1em;\r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0dBQ2YsaUJBQWlCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHlCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsdUJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJ0ZXJtcy1jb25kaXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzE0MTQxNTtcclxuICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxucCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufSJdfQ== */", "body[_ngcontent-%COMP%] { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding:1em; }"] });
    return TermsConditionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsConditionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms-condition',
                templateUrl: './terms-condition.component.html',
                styleUrls: ['./terms-condition.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BScm":
/*!***********************************************************!*\
  !*** ./src/app/_layout/settings/theme-settings.config.ts ***!
  \***********************************************************/
/*! exports provided: ThemeSettingsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsConfig", function() { return ThemeSettingsConfig; });
// Default theme settings configurations
var ThemeSettingsConfig = {
    colorTheme: 'semi-dark',
    layout: {
        style: 'vertical',
        pattern: 'fixed' // fixed, boxed, static
    },
    menuColor: 'menu-dark',
    navigation: 'menu-collapsible',
    menu: 'expand',
    header: 'fix',
    footer: 'static',
    customizer: 'on',
    buybutton: 'on',
    headerIcons: {
        maximize: 'on',
        search: 'on',
        internationalization: 'on',
        notification: 'on',
        email: 'on' // on, off
    },
    brand: {
        brand_name: 'SoftApp ',
        logo: {
            type: 'internal',
            value: 'assets/custom/images/logo.png' // recommended location for custom images
            // type:'url',
            // value:'http://evolvision.com/wp-content/uploads/2018/01/envelope4-green.png'
        },
    },
    defaultTitleSuffix: ' Proyecto memoria'
};


/***/ }),

/***/ "CTrt":
/*!*************************************************************************!*\
  !*** ./src/app/_layout/navigation/verticalnav/verticalnav.component.ts ***!
  \*************************************************************************/
/*! exports provided: VerticalnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalnavComponent", function() { return VerticalnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");



















function VerticalnavComponent_li_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r1.section);
} }
function VerticalnavComponent_li_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r1.icon);
} }
function VerticalnavComponent_li_4_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleMenu($event, child_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", child_r1.page != "null" ? child_r1.page : ctx_r4.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r1.title);
} }
function VerticalnavComponent_li_4_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_a_4_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.toggleMenu($event, child_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", child_r1.page, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r1.title);
} }
function VerticalnavComponent_li_4_a_5_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toggleMenu($event, child_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", child_r1.page, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r1.title);
} }
function VerticalnavComponent_li_4_a_6_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_a_6_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.toggleMenu($event, child_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", child_r1.page != "null" ? child_r1.page : ctx_r7.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r1.title);
} }
function VerticalnavComponent_li_4_ul_7_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_ul_7_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); var subchild_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.toggleMenu($event, subchild_r28, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", subchild_r28.page != "null" ? subchild_r28.page : ctx_r29.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r28.title);
} }
function VerticalnavComponent_li_4_ul_7_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_ul_7_li_1_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var subchild_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.toggleMenu($event, subchild_r28, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", subchild_r28.page != "null" ? subchild_r28.page : ctx_r30.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r28.title);
} }
function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); var subchild_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r44.toggleMenu($event, subchild_r41, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", subchild_r41.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r41.title);
} }
function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var subchild_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r48.callFunction(subchild_r41.event, subchild_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r41.title);
} }
var _c0 = function (a0) { return { "active": a0 }; };
function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_1_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_2_Template, 2, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, subchild_r41.isSelected && !subchild_r41.submenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subchild_r41.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subchild_r41.event);
} }
function VerticalnavComponent_li_4_ul_7_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_Template, 3, 5, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subchild_r28.submenu.items);
} }
var _c1 = function (a0, a1, a2) { return { "has-sub": a0, "active": a1, "open": a2 }; };
function VerticalnavComponent_li_4_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalnavComponent_li_4_ul_7_li_1_a_1_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalnavComponent_li_4_ul_7_li_1_a_2_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalnavComponent_li_4_ul_7_li_1_ul_3_Template, 2, 1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, subchild_r28.submenu, subchild_r28.isSelected && !subchild_r28.submenu, subchild_r28.isOpen && subchild_r28.submenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subchild_r28.submenu && !subchild_r28.excludeInVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subchild_r28.submenu && !subchild_r28.excludeInVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subchild_r28.submenu && !subchild_r28.excludeInVertical);
} }
function VerticalnavComponent_li_4_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalnavComponent_li_4_ul_7_li_1_Template, 4, 8, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@popOverState", child_r1.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r1.submenu.items);
} }
var _c2 = function (a0, a1, a2, a3, a4, a5, a6) { return { "has-sub": a0, "open": a1, "nav-item": a2, "navigation-header": a3, "active": a4, "menu-collapsed-open": a5, "hover": a6 }; };
function VerticalnavComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalnavComponent_li_4_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalnavComponent_li_4_i_2_Template, 1, 1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalnavComponent_li_4_a_3_Template, 4, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalnavComponent_li_4_a_4_Template, 4, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalnavComponent_li_4_a_5_Template, 4, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VerticalnavComponent_li_4_a_6_Template, 4, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VerticalnavComponent_li_4_ul_7_Template, 2, 2, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](8, _c2, child_r1.submenu, child_r1.isOpen && child_r1.submenu, child_r1.title, child_r1.section, child_r1.isSelected && !child_r1.submenu, child_r1.isSelected && child_r1.submenu, child_r1.hover));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.title && !child_r1.submenu && !child_r1.excludeInVertical && !child_r1.isExternalLink && !child_r1.issupportExternalLink && !child_r1.isStarterkitExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.title && !child_r1.submenu && !child_r1.excludeInVertical && child_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.title && !child_r1.submenu && !child_r1.excludeInVertical && child_r1.isStarterkitExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.title && child_r1.submenu && !child_r1.excludeInVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.submenu);
} }
var VerticalnavComponent = /** @class */ (function () {
    function VerticalnavComponent(document, navbarService, _themeSettingsService, _menuSettingsService, _renderer, router) {
        var _this = this;
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this._renderer = _renderer;
        this.router = router;
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__["NavigationEnd"]) {
                _this.resetMainMenu();
                _this.setActiveRouteInNavbar();
            }
        });
    }
    VerticalnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        // TODO Patch to reset menu after login
        this.resetMainMenu();
        this.setActiveRouteInNavbar();
    };
    VerticalnavComponent.prototype.resetMainMenu = function () {
        var nodes = this.document.getElementById('main-menu-navigation').childNodes;
        for (var i = 0; i < nodes.length; i++) {
            this.resetCollapseMenu(nodes[i]);
        }
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['isOpen'] = false;
            this.resetSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i]);
        }
    };
    VerticalnavComponent.prototype.resetCollapseMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
            element.classList.remove('hover');
            element.classList.remove('menu-collapsed-open');
        }
    };
    VerticalnavComponent.prototype.resetSubmenuItems = function (parentItem) {
        if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            parentItem['isOpen'] = false;
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                parentItem['submenu']['items'][j]['isSelected'] = false;
                this.resetSubmenuItems(parentItem['submenu']['items'][j]);
            }
        }
    };
    VerticalnavComponent.prototype.refreshView = function () {
        var mainMenuElement = document.getElementsByClassName('main-menu');
        if (mainMenuElement && mainMenuElement.length > 0) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-dark');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(mainMenuElement.item(0), 'menu-dark');
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-light');
            }
            if (this._themeSettingsConfig.layout.pattern === 'static') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-fixed');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-static');
            }
            else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                this._renderer.removeClass(mainMenuElement.item(0), 'menu-static');
                this._renderer.addClass(mainMenuElement.item(0), 'menu-fixed');
            }
        }
    };
    VerticalnavComponent.prototype.setActiveRouteInNavbar = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            if (!this._menuSettingsConfig.vertical_menu.items[i].submenu &&
                this._menuSettingsConfig.vertical_menu.items[i].page === this.router.url) {
                this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                break;
            }
            else if (this._menuSettingsConfig.vertical_menu.items[i].submenu) {
                // Level 1 menu
                for (var j = 0; j < this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
                    if (!this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu &&
                        this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === this.router.url) {
                        this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                        this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                        this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
                        break;
                    }
                    else if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
                        // Level 2 menu
                        for (var k = 0; k < this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                            if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                                this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].isOpen = true;
                            }
                        }
                    }
                }
            }
        }
    };
    VerticalnavComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    VerticalnavComponent.prototype.setOpenInNavbar = function (value) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu &&
                menu.page === this.router.url) {
                menu['isOpen'] = value;
                menu['isActive'] = value;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    if (menu.submenu.items[j].page === this.router.url) {
                        menu['isOpen'] = value;
                        menu['isActive'] = value;
                        menu.submenu.items[j]['isOpen'] = value;
                        menu.submenu.items[j]['isActive'] = value;
                        break;
                    }
                }
            }
        }
    };
    VerticalnavComponent.prototype.callFunction = function (event, child, isSubmenuOfSubmenu) {
        var methodName = event.methodName;
        if (this[methodName]) {
            // method exists on the component
            var param = event.methodParam;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isArray"])(param)) {
                this[methodName](param); // call it
            }
            else {
                this[methodName](param[0], param[1]); // call it
            }
        }
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        child['isSelected'] = true;
    };
    VerticalnavComponent.prototype.setTheme = function (theme) {
        this._themeSettingsService.config = {
            colorTheme: theme,
        };
    };
    VerticalnavComponent.prototype.setLayout = function (layout) {
        this._themeSettingsService.config = {
            layout: {
                pattern: layout
            }
        };
    };
    VerticalnavComponent.prototype.fixComponent = function (component, value) {
        if (component === 'header') {
            this._themeSettingsService.config = {
                header: value
            };
        }
        else if (component === 'footer') {
            this._themeSettingsService.config = {
                footer: value
            };
        }
        else {
            this._themeSettingsService.config = {
                header: value,
                footer: value
            };
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalnavComponent.prototype.mouseEnter = function (e) {
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        this.navbarService.setMouseInRegion(true);
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        // check if the left aside menu is fixed
        if (!navBar.classList.contains('expanded')) {
            this._renderer.addClass(navBar, 'expanded');
            this._renderer.addClass(mainMenu, 'expanded');
            this.resetOpenMenu();
            this.setOpenInNavbar(true);
        }
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    VerticalnavComponent.prototype.mouseLeave = function (event) {
        var _this = this;
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        var _self = this;
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        if (navBar && navBar.classList.contains('expanded')) {
            this.insideTm = setTimeout(function () {
                if (!_self.navbarService.isMouseInRegion()) {
                    _this._renderer.removeClass(navBar, 'expanded');
                    _this._renderer.removeClass(mainMenu, 'expanded');
                    _this.resetOpenMenu();
                    _this.setOpenInNavbar(false);
                }
            }, 100);
        }
        this.navbarService.setMouseInRegion(false);
    };
    VerticalnavComponent.prototype.resetOtherActiveMenu = function (selectedChild, isSubmenuOfSubmenu) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
            this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
            this.handleSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i], selectedChild, isSubmenuOfSubmenu);
        }
    };
    VerticalnavComponent.prototype.handleSubmenuItems = function (parentItem, selectedChild, isSubmenuOfSubmenu) {
        if (selectedChild['title'] === 'Horizontal') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].LAYOUT_STYLE_HORIZONTAL);
            window.location.reload();
        }
        else if (selectedChild['title'] === 'Vertical') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].LAYOUT_STYLE_VERTICAL);
            window.location.reload();
        }
        else if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            if (parentItem.title !== selectedChild.title && parentItem['isOpen'] === true && !isSubmenuOfSubmenu &&
                this._themeSettingsConfig.navigation === src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].NAVIGATION_TYPE_COLLAPSIBLE) {
                parentItem['isOpen'] = false;
            }
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                if (selectedChild.page !== 'null') {
                    parentItem['submenu']['items'][j]['isSelected'] = false;
                }
                this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
            }
        }
        else if (parentItem.title !== selectedChild.title && !selectedChild.submenu
            && this._themeSettingsConfig.navigation === src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].NAVIGATION_TYPE_COLLAPSIBLE
            && parentItem['isOpen'] === true) {
            parentItem['isOpen'] = false;
        }
    };
    VerticalnavComponent.prototype.toggleMenu = function (event, child, isSubmenuOfSubmenu) {
        var toggle = document.getElementById('sidenav-overlay');
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        if (child['isSelected'] === true) {
            child['isSelected'] = false;
        }
        else {
            child['isSelected'] = true;
        }
        if (child['hover'] === true) {
            child['hover'] = false;
        }
        else {
            child['hover'] = true;
        }
        if (child['isOpen'] === true) {
            child['isOpen'] = false;
        }
        else {
            child['isOpen'] = true;
        }
        if (this.router.url !== '') {
            this._renderer.addClass(toggle, 'd-none');
            this._renderer.removeClass(toggle, 'd-block');
        }
        if (child.page === '/chats' && this.loggedInUser.email === 'john@pixinvent.com') {
            this.router.navigate(['/chats/static-chat']);
        }
        else if (child.page === '/chats' && this.loggedInUser.email !== 'john@pixinvent.com') {
            this.router.navigate(['/chats']);
        }
    };
    VerticalnavComponent.ɵfac = function VerticalnavComponent_Factory(t) { return new (t || VerticalnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
    VerticalnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerticalnavComponent, selectors: [["app-verticalnav"]], viewQuery: function VerticalnavComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, decls: 5, vars: 3, consts: [["id", "main-menu", "data-scroll-to-active", "true", 1, "main-menu", "menu-fixed", "menu-dark", "menu-accordion", "menu-shadow", 3, "mouseenter", "mouseleave"], ["id", "main-menu-content", "fxFlex", "auto", 1, "main-menu-content", "ps-container", "ps-theme-light", 3, "perfectScrollbar"], ["id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation", "navigation-main"], ["class", "", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "", 3, "ngClass"], ["class", "menu-title", 4, "ngIf"], ["class", "la", "data-toggle", "tooltip", "data-placement", "right", "data-original-title", "Support", 3, "ngClass", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], ["target", "_blank", 3, "href", "click", 4, "ngIf"], ["class", "menu-content", 4, "ngIf"], [1, "menu-title"], ["data-toggle", "tooltip", "data-placement", "right", "data-original-title", "Support", 1, "la", 3, "ngClass"], [3, "routerLink", "click"], [1, "la", 3, "ngClass"], ["data-i18n", "", 1, "menu-title"], ["target", "_blank", 3, "href", "click"], [1, "menu-content"], ["class", "isShown", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "isShown", 3, "ngClass"], ["class", "menu-item", 3, "routerLink", "click", 4, "ngIf"], [1, "menu-item", 3, "routerLink", "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "menu-item", 3, "click", 4, "ngIf"], [1, "menu-item", 3, "click"]], template: function VerticalnavComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function VerticalnavComponent_Template_div_mouseenter_0_listener($event) { return ctx.mouseEnter($event); })("mouseleave", function VerticalnavComponent_Template_div_mouseleave_0_listener($event) { return ctx.mouseLeave($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalnavComponent_li_4_Template, 8, 16, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.child ? ctx.child.title : "", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._menuSettingsConfig.vertical_menu.items);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbG5hdi5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('popOverState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: '1',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: '0',
                        height: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('200ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('200ms ease-in-out'))
                ])
            ] } });
    return VerticalnavComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verticalnav',
                templateUrl: './verticalnav.component.html',
                styleUrls: ['./verticalnav.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('popOverState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                            opacity: '1',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                            opacity: '0',
                            height: '*',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('200ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('200ms ease-in-out'))
                    ])
                ]
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] }, { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"] }, { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "ErSb":
/*!*********************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.module.ts ***!
  \*********************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/content/partials/general/card/card.module */ "vj4e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb.component */ "/DnI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");








var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BreadcrumbModule });
    BreadcrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])
            ]] });
    return BreadcrumbModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BreadcrumbModule, { declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])
                ],
                declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]],
                exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FhuM":
/*!*****************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_directives/card.directive */ "+kQa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






var _c0 = ["mCard"];
var _c1 = ["mCardHeader"];
var _c2 = ["mCardHeaderTitle"];
var _c3 = ["mCardContent"];
var _c4 = ["mCardBody"];
var _c5 = ["mCardFooter"];
var _c6 = ["mCardHeaderTools"];
function CardComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_li_13_Template_i_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleCollpase($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_li_14_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_li_15_Template_i_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.toggleExpand($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_li_16_Template_i_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.close($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c7 = [[["", "mCardHeaderTitle", ""]], [["", "mCardHeaderTools", ""]], [["", "mCardContent", ""]], [["", "mCardBody", ""]], [["", "mCardFooter", ""]]];
var _c8 = ["[mCardHeaderTitle]", "[mCardHeaderTools]", "[mCardContent]", "[mCardBody]", "[mCardFooter]"];
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.reloadFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.elHeader && this.elHeader.nativeElement.children.length === 0) {
            this.elHeader.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['headerClass']) {
            this.options['headerClass'].forEach(function (element) {
                _this.elHeader.nativeElement.classList.add(element);
            });
        }
        if (this.elHeaderTitle && (this.elHeaderTitle.nativeElement.children.length === 0
            && this.elHeaderTitle.nativeElement.innerText.trim().length === 0)) {
            this.elHeader.nativeElement.style.display = 'none';
        }
        if (this.elFooter && this.elFooter.nativeElement.children.length === 0) {
            this.elFooter.nativeElement.style.display = 'none';
        }
        if (this.elHeaderTools && this.elHeaderTools.nativeElement.children.length === 0) {
            this.elFooter.nativeElement.style.display = 'none';
        }
        if (this.elContent && this.elContent.nativeElement.children.length === 0) {
            this.elContent.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['contentClass']) {
            this.options['contentClass'].forEach(function (element) {
                _this.elContent.nativeElement.classList.add(element);
            });
        }
        if (this.elBody && this.elBody.nativeElement.children.length === 0) {
            this.elBody.nativeElement.style.display = 'none';
        }
        else if (this.options && this.options['bodyClass']) {
            this.options['bodyClass'].forEach(function (element) {
                _this.elBody.nativeElement.classList.add(element);
            });
        }
        if (this.options && this.options['cardClass']) {
            this.options['cardClass'].forEach(function (element) {
                _this.elCard.nativeElement.classList.add(element);
            });
        }
    };
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.toggleCollpase = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        if (this.elContent.nativeElement.classList.contains('show')) {
            this.elContent.nativeElement.classList.add('collapse');
            this.elContent.nativeElement.classList.remove('show');
            if (!target.classList.contains('ft-plus') && !target.classList.contains('ft-minus')) {
                target = event.target.querySelector('i');
            }
            target.classList.remove('ft-minus');
            target.classList.add('ft-plus');
        }
        else {
            this.elContent.nativeElement.classList.add('show');
            if (!target.classList.contains('ft-plus') && !target.classList.contains('ft-minus')) {
                target = event.target.querySelector('i');
            }
            this.elContent.nativeElement.classList.remove('collapse');
            target.classList.remove('ft-plus');
            target.classList.add('ft-minus');
        }
        this.toggleMobileMenu();
    };
    CardComponent.prototype.reload = function () {
        this.reloadFunction.emit(this.options);
    };
    CardComponent.prototype.close = function () {
        this.elCard.nativeElement.classList.add('hidden');
        this.elCard.nativeElement.classList.remove('card-fullscreen');
        this.toggleMobileMenu();
    };
    CardComponent.prototype.toggleExpand = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        if (this.elCard.nativeElement.classList.contains('card-fullscreen')) {
            this.elCard.nativeElement.classList.remove('card-fullscreen');
            if (!target.classList.contains('ft-maximize') && !target.classList.contains('ft-minimize')) {
                target = event.target.querySelector('i');
            }
            target.classList.add('ft-maximize');
            target.classList.remove('ft-minimize');
        }
        else {
            this.elCard.nativeElement.classList.add('card-fullscreen');
            if (!target.classList.contains('ft-maximize') && !target.classList.contains('ft-minimize')) {
                target = event.target.querySelector('i');
            }
            target.classList.remove('ft-maximize');
            target.classList.add('ft-minimize');
        }
        this.toggleMobileMenu();
    };
    CardComponent.prototype.toggleMobileMenu = function () {
        if (this.elHeaderTools.nativeElement.classList.contains('visible')) {
            this.elHeaderTools.nativeElement.classList.remove('visible');
        }
        else {
            this.elHeaderTools.nativeElement.classList.add('visible');
        }
        // fire resize event for graphs
        setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
    };
    CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["m-card"]], viewQuery: function CardComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c4, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c6, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elCard = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elHeaderTitle = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elBody = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elFooter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elHeaderTools = _t.first);
        } }, inputs: { loading$: "loading$", options: "options" }, outputs: { reloadFunction: "reloadFunction" }, ngContentSelectors: _c8, decls: 26, vars: 5, consts: [["mCard", "", 1, "card", 3, "options"], ["mCard", ""], [1, "card-header"], ["mCardHeader", ""], [1, "card-title"], ["mCardHeaderTitle", ""], [1, "heading-elements-toggle", 3, "click"], [1, "la", "la-ellipsis-v", "font-medium-3"], [1, "heading-elements"], ["mCardHeaderTools", ""], [1, "list-inline", "mb-0"], [4, "ngIf"], [1, "card-content", "collpase", "show"], ["mCardContent", ""], [1, "card-body"], ["mCardBody", ""], [1, "card-footer"], ["mCardFooter", ""], ["data-action", "collapse"], [1, "feather", "ft-minus", 3, "click"], ["data-action", "reload"], [1, "feather", "ft-rotate-cw", 3, "click"], ["data-action", "expand"], [1, "feather", "ft-maximize", 3, "click"], ["data-action", "close"], [1, "feather", "ft-x", 3, "click"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_a_click_7_listener() { return ctx.toggleMobileMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CardComponent_li_13_Template, 3, 0, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CardComponent_li_14_Template, 3, 0, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CardComponent_li_15_Template, 3, 0, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CardComponent_li_16_Template, 3, 0, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](19, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](22, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](25, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.minimize);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.reload);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.expand);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.close);
        } }, directives: [src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_3__["CardDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
    return CardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'm-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { loading$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reloadFunction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], elCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mCard', { static: true }]
        }], elHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mCardHeader', { static: true }]
        }], elHeaderTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mCardHeaderTitle', { static: true }]
        }], elContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mCardContent', { static: true }]
        }], elBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mCardBody', { static: true }]
        }], elFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mCardFooter', { static: true }]
        }], elHeaderTools: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mCardHeaderTools', { static: true }]
        }] }); })();


/***/ }),

/***/ "H3Uw":
/*!*********************************************************************************************!*\
  !*** ./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HorizontalCustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalCustomizerComponent", function() { return HorizontalCustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");

















function HorizontalCustomizerComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Layouts");
} }
function HorizontalCustomizerComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HorizontalCustomizerComponent_ng_template_28_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleFixMenu($event); })("ngModelChange", function HorizontalCustomizerComponent_ng_template_28_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.isCollapsedMenu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Collapsed Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HorizontalCustomizerComponent_ng_template_28_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.isfixChecked = $event; })("ngModelChange", function HorizontalCustomizerComponent_ng_template_28_Template_input_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toggleLayout("fixed"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fixed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HorizontalCustomizerComponent_ng_template_28_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.isboxChecked = $event; })("ngModelChange", function HorizontalCustomizerComponent_ng_template_28_Template_input_ngModelChange_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleLayout("boxed"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Boxed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HorizontalCustomizerComponent_ng_template_28_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.setLayout("static", $event); })("ngModelChange", function HorizontalCustomizerComponent_ng_template_28_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.isStaticLayout = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Static Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isCollapsedMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isfixChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isboxChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isStaticLayout);
} }
function HorizontalCustomizerComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Navigation");
} }
function HorizontalCustomizerComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HorizontalCustomizerComponent_ng_template_31_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.isRightSideIcons = $event; })("click", function HorizontalCustomizerComponent_ng_template_31_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.setNavigation("navbar-icon-right", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Right Side Icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.isRightSideIcons);
} }
function HorizontalCustomizerComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dark");
} }
function HorizontalCustomizerComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Solid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.setColor("bg-blue-grey"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.setColor("bg-blue-grey"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.setColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.setColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.setColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.setColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.setColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.setColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.setColor("bg-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.setColor("bg-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.setColor("bg-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.setColor("bg-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.setColor("bg-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.setColor("bg-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.setColor("bg-gradient-x-grey-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.setColor("bg-gradient-x-grey-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.setColor("bg-gradient-x-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.setColor("bg-gradient-x-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.setColor("bg-gradient-x-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.setColor("bg-gradient-x-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.setColor("bg-gradient-x-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.setColor("bg-gradient-x-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.setColor("bg-gradient-x-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.setColor("bg-gradient-x-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.setColor("bg-gradient-x-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.setColor("bg-gradient-x-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_input_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.setColor("bg-gradient-x-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_41_Template_label_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.setColor("bg-gradient-x-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HorizontalCustomizerComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Light");
} }
function HorizontalCustomizerComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.setColor("bg-blue-grey bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_label_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.setColor("bg-blue-grey bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.setColor("bg-primary bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_label_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.setColor("bg-primary bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.setColor("bg-danger bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_label_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.setColor("bg-danger bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_input_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.setColor("bg-success bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_label_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.setColor("bg-success bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_input_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.setColor("bg-blue bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_label_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.setColor("bg-blue bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_input_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.setColor("bg-cyan bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_label_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.setColor("bg-cyan bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_input_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.setColor("bg-pink bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_44_Template_label_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.setColor("bg-pink bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var colors = __webpack_require__(/*! ../../../../assets/data/customizer/customizerColor.json */ "cveO");
var HorizontalCustomizerComponent = /** @class */ (function () {
    function HorizontalCustomizerComponent(_renderer, document, navbarService, _themeSettingsService, _menuSettingsService) {
        this._renderer = _renderer;
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.isCollapsedMenu = false;
        this.isfixChecked = false;
        this.isboxChecked = false;
        this.isStaticLayout = false;
        this.isRightSideIcons = false;
        this.activeIdString = 'light';
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    HorizontalCustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeCustomizerConfig = config;
        });
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
    };
    HorizontalCustomizerComponent.prototype.toggleCustomizer = function (event) {
        var element = document.getElementById('customizer');
        if (element && element.classList.contains('open')) {
            this._renderer.removeClass(element, 'open');
        }
        else {
            this._renderer.addClass(element, 'open');
        }
    };
    HorizontalCustomizerComponent.prototype.changeNavbarFontColor = function ($event) {
        var headerElement = document.getElementsByClassName('top-header');
        if ($event.nextId === 'dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-shadow');
            this._renderer.addClass(headerElement.item(0), 'navbar-dark');
        }
        else if ($event.nextId === 'light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.addClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-shadow');
        }
        this._themeSettingsService.config = {
            color: ''
        };
    };
    HorizontalCustomizerComponent.prototype.setColor = function (colorClass) {
        for (var i = 0; i <= colors.colorArray.length; i++) {
            if (colorClass === colors.colorArray[i].cssClass) {
                this.selectColorClass = colorClass;
                break;
            }
        }
        this._themeSettingsService.config = {
            color: this.selectColorClass
        };
    };
    HorizontalCustomizerComponent.prototype.setMenuColor = function (e) {
        var darkMenuButton = document.getElementById('dark-menu');
        var lightMenuButton = document.getElementById('light-menu');
        var menuHeaderElement = document.getElementById('menu-header');
        if (e.currentTarget.className === 'btn btn-outline-info _dark') {
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.removeClass(menuHeaderElement, 'navbar-light');
            this._renderer.addClass(darkMenuButton, 'active');
            this._renderer.addClass(menuHeaderElement, 'navbar-dark');
        }
        else if (e.currentTarget.className === 'btn btn-outline-info _light') {
            this._renderer.removeClass(menuHeaderElement, 'navbar-dark');
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.addClass(lightMenuButton, 'active');
            this._renderer.addClass(menuHeaderElement, 'navbar-light');
        }
        // this._themeSettingsService.config = {
        //   menuColor: colorClass, // menu-dark, menu-light
        // };
    };
    HorizontalCustomizerComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded') && e.currentTarget.checked === true) {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            e.srcElement.classList.remove('ft-toggle-right');
            e.srcElement.classList.add('ft-toggle-left');
            this.isCollapsedMenu = true;
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            e.srcElement.classList.remove('ft-toggle-left');
            e.srcElement.classList.add('ft-toggle-right');
            this.isCollapsedMenu = false;
        }
    };
    HorizontalCustomizerComponent.prototype.setLayout = function (layout, e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var isSticky = document.getElementsByClassName('sticky-wrapper');
        var element = document.getElementById('sticky-wrapper');
        if (e.currentTarget.checked === true && layout === 'static') {
            // this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
            this.isStaticLayout = true;
            this._themeSettingsConfig.layout.pattern = 'static';
            element.classList.add('is-static');
            if (this.isboxChecked === false) {
                this._renderer.removeClass(footer, 'fixed-bottom');
            }
        }
        else {
            this._themeSettingsConfig.layout.pattern = '';
            this._renderer.removeClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.removeClass(footer, 'footer-static');
            this._renderer.removeClass(menuHeader, 'navbar-static');
            this._renderer.removeClass(isSticky.item(0), 'is-static');
            this.isStaticLayout = false;
            if (this.isboxChecked === true) {
                this.boxedLayout();
            }
            if (this.isfixChecked === true) {
                this.fixedLayout();
            }
        }
    };
    HorizontalCustomizerComponent.prototype.setNavigation = function (navigationClass, event) {
        var navigationElement = document.getElementById('menu-header');
        if (event.target.checked === true) {
            this._themeSettingsService.config = {
                navigation: navigationClass,
            };
        }
        else if (event.target.checked === false) {
            this._renderer.removeClass(navigationElement, navigationClass);
            this._renderer.removeClass(document.body, navigationClass);
        }
        if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === true) {
            this.isRightSideIcons = true;
        }
        else if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === false) {
            this.isRightSideIcons = false;
        }
    };
    HorizontalCustomizerComponent.prototype.toggleLayout = function (layout) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var element = document.getElementById('sticky-wrapper');
        if (layout === 'boxed' && this.isboxChecked === true) {
            this.boxedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'boxed' && this.isboxChecked === false) {
            this._renderer.removeClass(headerNavbar.item(0), 'container');
            this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
            this._renderer.removeClass(document.body, 'boxed-layout');
            this._renderer.removeClass(document.body, 'container');
            element.classList.remove('container');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
        else if (layout === 'fixed' && this.isfixChecked === true) {
            this.fixedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'fixed' && this.isfixChecked === false) {
            this._renderer.removeClass(footer, 'fixed-bottom');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
    };
    HorizontalCustomizerComponent.prototype.fixedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var element = document.getElementById('sticky-wrapper');
        this._renderer.addClass(footer, 'fixed-bottom');
        this._renderer.removeClass(document.body, 'boxed-layout');
        this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.removeClass(headerNavbar.item(0), 'container');
        this._renderer.removeClass(document.body, 'container');
        element.classList.remove('container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.removeClass(footer, 'fixed-bottom');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
        }
        this.isfixChecked = true;
        this.isboxChecked = false;
        this._themeSettingsConfig.layout.pattern = 'fixed';
    };
    HorizontalCustomizerComponent.prototype.boxedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var menuHeader = document.getElementById('menu-header');
        var element = document.getElementById('sticky-wrapper');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this._renderer.addClass(headerNavbar.item(0), 'container');
        this._renderer.addClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.addClass(document.body, 'boxed-layout');
        this._renderer.addClass(document.body, 'container');
        element.classList.add('container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.addClass(menuHeader, 'navbar-static');
            this._renderer.addClass(footer, 'footer-static');
        }
        this.isboxChecked = true;
        this.isfixChecked = false;
        this._themeSettingsConfig.layout.pattern = 'boxed';
    };
    HorizontalCustomizerComponent.ɵfac = function HorizontalCustomizerComponent_Factory(t) { return new (t || HorizontalCustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"])); };
    HorizontalCustomizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalCustomizerComponent, selectors: [["app-horizontal-customizer"]], viewQuery: function HorizontalCustomizerComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, decls: 45, vars: 2, consts: [["id", "customizer", 1, "customizer", "border-left-blue-grey", "border-left-lighten-4", "d-none", "d-xl-block"], [1, "customizer-close", 3, "routerLink", "click"], [1, "feather", "ft-x", "font-medium-3"], [1, "customizer-toggle", "bg-danger", "box-shadow-3", 3, "routerLink", "click"], [1, "feather", "ft-settings", "font-medium-3", "spinner", "white"], ["fxFlex", "auto", 1, "customizer-content", "p-2", 3, "perfectScrollbar"], [1, "text-uppercase", "mb-0"], [1, "mt-1", "mb-1", "text-bold-500"], [1, "form-group"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "customizer-sidebar-options"], ["type", "button", "data-sidebar", "navbar-light", "id", "light-menu", 1, "btn", "btn-outline-info", "_light", "active", 3, "click"], ["type", "button", "data-sidebar", "navbar-dark", "id", "dark-menu", 1, "btn", "btn-outline-info", "_dark", 3, "click"], [1, "mt-1", "text-bold-500"], [1, "nav", "nav-tabs", "nav-underline", "nav-justified", "layout-options", "tabsborder"], [1, "col-lg-12", "layout_space"], [1, "ngtab"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "nav", "nav-tabs", "nav-underline", "nav-justified", "color-options", "tabsborder"], [3, "activeId", "tabChange"], ["id", "dark"], ["id", "light"], ["role", "tabpanel", "id", "tabIcon21", "aria-expanded", "true", "aria-labelledby", "baseIcon-tab21", 1, "tab-panel", "active", "px-1", "pt-1"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "collapsed-sidebar", "id", "collapsed-sidebar", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["for", "collapsed-sidebar", 1, "custom-control-label"], ["type", "checkbox", "name", "fixed-layout", "id", "fixed-layout", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "fixed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "static-layout", "id", "static-layout", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["for", "static-layout", 1, "custom-control-label"], ["id", "tabIcon22", "aria-labelledby", "baseIcon-tab22", 1, "tab-panel", "px-1", "pt-1"], ["type", "checkbox", "name", "right-side-icons", "id", "right-side-icons", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "right-side-icons", 1, "custom-control-label"], [1, "row"], [1, "col-6"], [1, "custom-control", "custom-radio", "mb-1"], ["type", "radio", "name", "nav-slight-clr", "id", "default", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "default", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "pink", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-grey-blue", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "bg-gradient-x-grey-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "bg-gradient-x-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "bg-gradient-x-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "bg-gradient-x-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "bg-gradient-x-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "bg-gradient-x-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "bg-gradient-x-pink", 1, "custom-control-label", 3, "click"], ["id", "clrOpt4", "aria-labelledby", "color-opt-4", 1, "tab-pane"], ["type", "radio", "name", "nav-light-clr", "id", "light-blue-grey", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "light-blue-grey", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "light-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "light-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "light-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "light-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "light-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "light-pink", 1, "custom-control-label", 3, "click"]], template: function HorizontalCustomizerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_Template_a_click_1_listener($event) { return ctx.toggleCustomizer($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_Template_a_click_3_listener($event) { return ctx.toggleCustomizer($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Theme Customizer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customize & Preview in Real Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Menu Color Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_Template_button_click_15_listener($event) { return ctx.setMenuColor($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Light Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_Template_button_click_17_listener($event) { return ctx.setMenuColor($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dark Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Layout Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HorizontalCustomizerComponent_ng_template_27_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HorizontalCustomizerComponent_ng_template_28_Template, 17, 4, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HorizontalCustomizerComponent_ng_template_30_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HorizontalCustomizerComponent_ng_template_31_Template, 5, 1, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Navigation Color Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-tabset", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function HorizontalCustomizerComponent_Template_ngb_tabset_tabChange_38_listener($event) { return ctx.changeNavbarFontColor($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngb-tab", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HorizontalCustomizerComponent_ng_template_40_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HorizontalCustomizerComponent_ng_template_41_Template, 63, 0, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ngb-tab", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HorizontalCustomizerComponent_ng_template_43_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HorizontalCustomizerComponent_ng_template_44_Template, 29, 0, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.activeIdString);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], styles: [".tabsborder[_ngcontent-%COMP%]{\r\n    border-bottom: none !important;\r\n  }\r\n\r\n.h6[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .tab-content{\r\n  padding: 1rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .layout_space{\r\n  padding: 0%;\r\n}\r\n\r\n[_nghost-%COMP%]     .nav.nav-tabs.nav-underline .nav-item a.nav-link {\r\n  padding: 0.5rem 0rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtY3VzdG9taXplci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0VBQ2hDOztBQUVGO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJob3Jpem9udGFsLWN1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzYm9yZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5oNiwgaDYge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItY29udGVudHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmxheW91dF9zcGFjZXtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uYXYubmF2LXRhYnMubmF2LXVuZGVybGluZSAubmF2LWl0ZW0gYS5uYXYtbGluayB7XHJcbiAgcGFkZGluZzogMC41cmVtIDByZW07XHJcbn1cclxuIl19 */"] });
    return HorizontalCustomizerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalCustomizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-horizontal-customizer',
                templateUrl: './horizontal-customizer.component.html',
                styleUrls: ['./horizontal-customizer.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"] }, { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"] }, { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "NFyy":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "Ne4N":
/*!**************************************************************!*\
  !*** ./src/app/_layout/full-layout/full-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");





function FullLayoutComponent_app_full_layout_navbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-full-layout-navbar");
} }
function FullLayoutComponent_app_footer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(renderer, router, document) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.showFooter = true;
        this.showNavbar = true;
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        this.renderer.removeClass(document.body, 'vertical-overlay-menu');
        this.renderer.removeClass(document.body, 'bg-full-screen-image');
        this.renderer.removeClass(document.body, 'vertical-menu-modern');
        this.renderer.addClass(document.body, 'blank-page');
        this.renderer.addClass(document.body, 'pace-done');
        if ((this.router.url.indexOf('WithNavbar') >= 0) || (this.router.url.indexOf('Advanced') >= 0)) {
            this.showFooter = true;
            this.showNavbar = true;
            this.renderer.addClass(document.body, 'bg-cyan');
            this.renderer.addClass(document.body, 'bg-lighten-2');
            this.renderer.addClass(document.body, 'fixed-navbar');
            this.renderer.removeClass(document.body, 'blank-page');
        }
        else if (this.router.url.indexOf('WithBgImage') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.addClass(document.body, 'bg-full-screen-image');
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('WithBg') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.addClass(document.body, 'bg-cyan');
            this.renderer.addClass(document.body, 'bg-lighten-2');
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('Simple') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('searchPage') >= 0) {
            this.showFooter = true;
            this.showNavbar = true;
            this.renderer.addClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('flat') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonFlat');
        }
        else if (this.router.url === '/others/bgImage') {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonOne');
        }
        else if (this.router.url.indexOf('bgVideo') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonVideo');
        }
        else if (this.router.url.indexOf('flat') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
            this.renderer.addClass(document.body, 'comingsoonFlat');
        }
        else if (this.router.url.indexOf('error400') >= 0 && this.router.url.indexOf('error400Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error401') >= 0 && this.router.url.indexOf('error401Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error403') >= 0 && this.router.url.indexOf('error403Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error404') >= 0 && this.router.url.indexOf('error404Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('error500') >= 0 && this.router.url.indexOf('error500Withnavbar') <= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('maintenance') >= 0 || this.router.url.indexOf('recoverPassword') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else if (this.router.url.indexOf('unlockUser') >= 0) {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'fixed-navbar');
        }
        else {
            this.showFooter = false;
            this.showNavbar = false;
            this.renderer.removeClass(document.body, 'bg-cyan');
            this.renderer.removeClass(document.body, 'bg-lighten-2');
        }
    };
    FullLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) { return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
    FullLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullLayoutComponent, selectors: [["app-full-layout"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["id", "sidenav-overlay", 1, "sidenav-overlay", "d-none", 3, "click"]], template: function FullLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FullLayoutComponent_app_full_layout_navbar_0_Template, 1, 0, "app-full-layout-navbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_2_listener($event) { return ctx.rightbar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FullLayoutComponent_app_footer_3_Template, 1, 0, "app-footer", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavbar);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"] });
    return FullLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-layout',
                templateUrl: './full-layout.component.html',
                styleUrls: ['./full-layout.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "OwLc":
/*!*******************************************************!*\
  !*** ./src/app/_directives/match-height.directive.ts ***!
  \*******************************************************/
/*! exports provided: MatchHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // call our matchHeight function here
        setTimeout(function () {
            _this.matchHeights(_this.el.nativeElement, _this.matchHeight);
        }, 700);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        if (!parent) {
            return;
        }
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children) {
            return;
        }
        // Match hight - fix --- comment below code
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children).map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        if (window.innerWidth > 1200) {
            Array.from(children).forEach(function (x) { return (x.style.height = maxHeight + "px"); });
        }
        else if (window.innerWidth < 1199) {
            Array.from(children).forEach(function (x) { return (x.style.height = "initial"); });
        }
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.ɵfac = function MatchHeightDirective_Factory(t) { return new (t || MatchHeightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    MatchHeightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatchHeightDirective, selectors: [["", "matchHeight", ""]], hostBindings: function MatchHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MatchHeightDirective_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, inputs: { matchHeight: "matchHeight" } });
    return MatchHeightDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchHeightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matchHeight]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { matchHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log("currentUser en guard: ", localStorage.getItem('currentUser'));
        console.log("dataCurrentUser en guard: ", localStorage.getItem('dataCurrentUser'));
        //console.log("name en guard: ", JSON.parse(localStorage.getItem('dataCurrentUser')).name, JSON.parse(localStorage.getItem('dataCurrentUser')).lastName);
        //console.log("rol en guard: ", JSON.parse(localStorage.getItem('dataCurrentUser')).rol);
        if (localStorage.getItem('currentUser')) {
            // Logged in so return true
            if (JSON.parse(localStorage.getItem('dataCurrentUser')).rol === "admin")
                return true;
        }
        // Not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        localStorage.removeItem('currentUser');
        localStorage.removeItem('dataCurrentUser');
        return false;
    };
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
    return AuthGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-loading-bar/core */ "TtxX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/app.constants */ "2iER");
/* harmony import */ var _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_layout/settings/menu-settings.service */ "erhg");
/* harmony import */ var _layout_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_layout/settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _helpers_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/alert.component */ "eSaF");























function AppComponent_router_outlet_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(spinner, document, router, loader, deviceService, _menuSettingsService, _themeSettingsService, titleService) {
        this.spinner = spinner;
        this.document = document;
        this.router = router;
        this.loader = loader;
        this.deviceService = deviceService;
        this._menuSettingsService = _menuSettingsService;
        this._themeSettingsService = _themeSettingsService;
        this.titleService = titleService;
        this.showContent = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.setTitle();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
        // page progress bar percentage
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                // set page progress bar loading to start on NavigationStart event router
                _this.loader.start();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"]) {
                _this.loader.increment(35);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"]) {
                _this.loader.increment(75);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                // set page progress bar loading to end on NavigationEnd event router
                _this.loader.complete();
                _this.showContent = true;
                // close menu for mobile view
                if (_this.deviceService.isMobile() || window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
                    if (document.body.classList.contains('menu-open')) {
                        document.body.classList.remove('menu-open');
                        document.body.classList.add('menu-close');
                    }
                }
                if (_this.title && _this.router.url !== '/') {
                    _this.titleService.setTitle(_this.title + ' - ' + _this._themeSettingsConfig.defaultTitleSuffix);
                }
                else {
                    if ((_this.router.url === '/' || _this.router.url === '/login' || _this.router.url === '/register') &&
                        !localStorage.getItem('remember')) {
                        _this.title = 'Login';
                        _this.titleService.setTitle(_this.title + '' + _this._themeSettingsConfig.defaultTitleSuffix);
                        _this.title = '';
                    }
                }
            }
        });
    };
    AppComponent.prototype.setTitle = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (_this._themeSettingsConfig.layout.style === 'vertical') {
                    for (var i = 0; i < _this._menuSettingsConfig.vertical_menu.items.length; i++) {
                        if (!_this._menuSettingsConfig.vertical_menu.items[i].submenu &&
                            _this._menuSettingsConfig.vertical_menu.items[i].page === _this.router.url) {
                            _this.title = _this._menuSettingsConfig.vertical_menu.items[i].title;
                            break;
                        }
                        else if (_this._menuSettingsConfig.vertical_menu.items[i].submenu) {
                            // Level 1 menu
                            for (var j = 0; j < _this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
                                if (!_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu &&
                                    _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === _this.router.url) {
                                    _this.title = _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].title;
                                    break;
                                }
                                else if (_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
                                    // Level 2 menu
                                    for (var k = 0; k < _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                                        if (_this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === _this.router.url) {
                                            _this.title = _this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].title;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (_this._themeSettingsConfig.layout.style === 'horizontal') {
                    for (var i = 0; i < _this._menuSettingsConfig.horizontal_menu.items.length; i++) {
                        if (!_this._menuSettingsConfig.horizontal_menu.items[i].submenu &&
                            _this._menuSettingsConfig.horizontal_menu.items[i].page === _this.router.url) {
                            _this.title = _this._menuSettingsConfig.horizontal_menu.items[i].title;
                            break;
                        }
                        else if (_this._menuSettingsConfig.horizontal_menu.items[i].submenu) {
                            // Level 1 menu
                            for (var j = 0; j < _this._menuSettingsConfig.horizontal_menu.items[i].submenu.items.length; j++) {
                                if (!_this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu &&
                                    _this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].page === _this.router.url) {
                                    _this.title = _this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].title;
                                    break;
                                }
                                else if (_this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu) {
                                    // Level 2 menu
                                    for (var k = 0; k < _this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                                        if (_this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k].page === _this.router.url) {
                                            _this.title = _this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k].title;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_8__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-main"]], decls: 3, vars: 2, consts: [["height", "3px", "color", "#FF4961", 3, "includeSpinner"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-alert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_router_outlet_2_Template, 1, 0, "router-outlet", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("includeSpinner", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showContent);
        } }, directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarComponent"], _helpers_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
    AppComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppComponent, factory: AppComponent.ɵfac });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: 'app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }, { type: _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_7__["MenuSettingsService"] }, { type: _layout_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_8__["ThemeSettingsService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"] }]; }, null); })();


/***/ }),

/***/ "UDOh":
/*!*********************************************!*\
  !*** ./src/app/_services/navbar.service.ts ***!
  \*********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.mouseInMenuRegion = false;
        this.fixedMenu = false;
    }
    NavbarService.prototype.isMouseInRegion = function () {
        return this.mouseInMenuRegion;
    };
    NavbarService.prototype.setMouseInRegion = function (flag) {
        this.mouseInMenuRegion = flag;
    };
    NavbarService.prototype.isFixedMenu = function () {
        return this.fixedMenu;
    };
    NavbarService.prototype.setFixedMenu = function (flag) {
        this.fixedMenu = flag;
    };
    NavbarService.ɵfac = function NavbarService_Factory(t) { return new (t || NavbarService)(); };
    NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavbarService, factory: NavbarService.ɵfac });
    return NavbarService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "UyOY":
/*!*****************************************************!*\
  !*** ./src/app/_layout/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-settings.service */ "+/8v");
/* harmony import */ var _menu_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-settings.service */ "erhg");




var SettingsModule = /** @class */ (function () {
    function SettingsModule(parentModule) {
        if (parentModule) {
            throw new Error('SettingsModule is already loaded. Import it in the AppModule only!');
        }
    }
    SettingsModule.forRoot = function (themeConfig, menuConfig) {
        return {
            ngModule: SettingsModule,
            providers: [
                {
                    provide: _theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["THEME_SETTINGS_CONFIG"],
                    useValue: themeConfig
                },
                {
                    provide: _menu_settings_service__WEBPACK_IMPORTED_MODULE_2__["MENU_SETTINGS_CONFIG"],
                    useValue: menuConfig
                }
            ]
        };
    };
    SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsModule });
    SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SettingsModule, 12)); } });
    return SettingsModule;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: SettingsModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "V3S5":
/*!**************************************************!*\
  !*** ./src/app/changelog/changelog.component.ts ***!
  \**************************************************/
/*! exports provided: ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/partials/general/card/card.component */ "FhuM");







function ChangelogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function ChangelogComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.reloadChangelog($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Release Updates: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "08-11-2020 [V2.4]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Upgraded project to use Angular 11.0.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Upgraded project to use ng-bootstrap 5.0.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Fix ngb-calender not default to current date.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Added Dropzone for file upload.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "01-09-2020 [V2.3]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Upgraded project to use Angular 10.1.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Fix Card layout issue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "29-07-2020 [V2.2]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Upgraded project to use Angular 10.0.6.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "New layout for TODO applications.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "30-02-2020 [V2.1]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Upgraded to Angular 9.1.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Upgraded to bootstrap 4.2.2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Upgraded SCSS to latest HTML version of the Modern admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "New design for Email Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "New design for Chat Application (Static as well as Live)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "15-02-2020 [V2.0]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Upgraded project to use Angular 9.0.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Fixed bank navigation menu highlight issue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "12-06-2019 [V1.2]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Upgraded project to use Angular 9.0.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Fixed bank navigation menu highlight issue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "11-08-2019 [V1.1]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Added configuration to hide header icons.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Added ngx-toastr in TODO application.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Added fully functional CRUD Firebase API integration for TODO App.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "10-12-2019 [V1.0]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Initial release");
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
var ChangelogComponent = /** @class */ (function () {
    function ChangelogComponent() {
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
    }
    ChangelogComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'ChangeLog',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'ChangeLog',
                    'isLink': false,
                    'link': '#'
                },
            ]
        };
    };
    ChangelogComponent.prototype.reloadChangelog = function () {
        var _this = this;
        this.blockUIChangelog.start('Loading..');
        setTimeout(function () {
            _this.blockUIChangelog.stop();
        }, 2500);
    };
    ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) { return new (t || ChangelogComponent)(); };
    ChangelogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangelogComponent, selectors: [["app-home"]], decls: 8, vars: 3, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "my-2"], [1, "card-text"]], template: function ChangelogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChangelogComponent_div_7_Template, 83, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["ɵf"], _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\r\n  background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6ImNoYW5nZWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('changelog'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ChangelogComponent.prototype, "blockUIChangelog", void 0);
    return ChangelogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangelogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './changelog.component.html',
                styleUrls: ['./changelog.component.css']
            }]
    }], function () { return []; }, { blockUIChangelog: [] }); })();


/***/ }),

/***/ "Vv3h":
/*!**********************************************************!*\
  !*** ./src/app/_layout/settings/menu-settings.config.ts ***!
  \**********************************************************/
/*! exports provided: MenuSettingsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSettingsConfig", function() { return MenuSettingsConfig; });
// Default menu settings configurations
var MenuSettingsConfig = {
    horizontal_menu: {
        items: [
            {
                title: 'Dashboard',
                icon: 'la-home',
                page: 'null',
                badge: { type: 'badge-info', value: '' },
                submenu: {
                    items: [
                        /*{
                           title: 'Sales',
                           page: '/dashboard/sales'
                         },*/
                        {
                            title: 'Ecommerce',
                            page: '/dashboard/ecommerce'
                        },
                    ]
                }
            },
            {
                title: 'Orientación',
                icon: 'la-television',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Horizontal',
                            page: 'null'
                        },
                        {
                            title: 'Vertical',
                            page: 'null'
                        },
                    ]
                }
            },
            { section: 'PRINCIPAL', icon: 'la-ellipsis-h' },
            {
                title: 'Ventas',
                icon: 'la-cart-plus',
                page: '/sale/sale-list'
            },
            /*{
              title: 'Preventas',
              icon: 'la-cart-arrow-down'
            },*/
            { section: 'INVENTARIO', icon: 'la-ellipsis-h' },
            {
                title: 'Productos',
                icon: 'la-edit',
                page: '/todo-app'
            },
            {
                title: 'Stock',
                icon: 'feather ft-shopping-cart',
                page: '/contacts'
            },
            { section: 'GESTIÓN', icon: 'la-ellipsis-h' },
            {
                title: 'Usuarios',
                icon: 'la-users',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Personal',
                            page: '/user/user-list'
                        },
                        {
                            title: 'Clientes',
                            page: '/client/client-list'
                        },
                    ]
                }
            },
            { section: 'ADMINISTRACIÓN', icon: 'la-ellipsis-h' },
            {
                title: 'Informes',
                icon: 'la-clipboard',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Ventas',
                            page: '/report/report-list'
                        },
                        {
                            title: 'Anulaciones',
                            page: '/cancellation/only-cancellation-list'
                        },
                    ]
                }
            },
            {
                title: 'Anulaciones',
                icon: 'la-calendar-times-o',
                page: '/cancellation/cancellation-list',
            },
            { section: 'SOPORTE', icon: 'la-ellipsis-h' },
            {
                title: 'Contacto',
                icon: 'feather ft-message-circle',
                page: 'https://wa.link/9s54aq',
                isExternalLink: true
            }
        ]
    },
    vertical_menu: {
        items: [
            {
                title: 'Dashboard',
                icon: 'la-home',
                page: 'null',
                badge: { type: 'badge-info', value: '0' },
                submenu: {
                    items: [
                        /*{
                           title: 'Sales',
                           page: '/dashboard/sales'
                         },*/
                        {
                            title: 'Ecommerce',
                            page: '/dashboard/ecommerce'
                        },
                    ]
                }
            },
            {
                title: 'Orientación',
                icon: 'la-television',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Horizontal',
                            page: 'null'
                        },
                        {
                            title: 'Vertical',
                            page: 'null'
                        },
                    ]
                }
            },
            { section: 'PRINCIPAL', icon: 'la-ellipsis-h' },
            {
                title: 'Ventas',
                icon: 'la-cart-plus',
                page: '/sale/sale-list'
            },
            /*{
              title: 'Preventas',
              icon: 'la-cart-arrow-down'
            },*/
            { section: 'INVENTARIO', icon: 'la-ellipsis-h' },
            {
                title: 'Productos',
                icon: 'la-edit',
                page: '/product/product-list'
            },
            { section: 'GESTIÓN', icon: 'la-ellipsis-h' },
            {
                title: 'Usuarios',
                icon: 'la-users',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Personal',
                            page: '/user/user-list'
                        },
                        {
                            title: 'Clientes',
                            page: '/client/client-list'
                        },
                    ]
                }
            },
            { section: 'ADMINISTRACIÓN', icon: 'la-ellipsis-h' },
            {
                title: 'Informes',
                icon: 'la-clipboard',
                page: 'null',
                submenu: {
                    items: [
                        {
                            title: 'Ventas',
                            page: '/report/report-list'
                        },
                        {
                            title: 'Anulaciones',
                            page: '/cancellation/only-cancellation-list'
                        },
                    ]
                }
            },
            {
                title: 'Anulaciones',
                icon: 'la-calendar-times-o',
                page: '/cancellation/cancellation-list',
            },
            { section: 'SOPORTE', icon: 'la-ellipsis-h' },
            {
                title: 'Contacto',
                icon: 'feather ft-message-circle',
                page: 'https://wa.link/9s54aq',
                isExternalLink: true
            }
        ]
    }
};


/***/ }),

/***/ "X1Yx":
/*!*******************************************************************!*\
  !*** ./src/app/_layout/header/horizontal/horizontal.component.ts ***!
  \*******************************************************************/
/*! exports provided: HorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalComponent", function() { return HorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");





















function HorizontalComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalComponent_a_22_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HorizontalComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clickSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HorizontalComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currentUser.displayName);
} }
function HorizontalComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "John Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HorizontalComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 43);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.currentUser.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HorizontalComponent_img_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
} }
var _c0 = function () { return ["/dashboard/sales"]; };
var _c1 = function (a0) { return { "open": a0 }; };
var _c2 = function () { return ["/user/user-profile"]; };
var docElmWithBrowsersFullScreenFunctions = document.documentElement;
var docWithBrowsersExitFunctions = document;
var HorizontalComponent = /** @class */ (function () {
    function HorizontalComponent(document, _renderer, renderer, navbarService, authService, router, _menuSettingsService, _themeSettingsService, deviceService) {
        this.document = document;
        this._renderer = _renderer;
        this.renderer = renderer;
        this.navbarService = navbarService;
        this.authService = authService;
        this.router = router;
        this._menuSettingsService = _menuSettingsService;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.placement = 'bottom-right';
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    HorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _self = this;
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        var isMobile = this.deviceService.isMobile();
        this.handleBody(isMobile);
        this.maximize = this._themeSettingsConfig.headerIcons.maximize;
        this.search = this._themeSettingsConfig.headerIcons.search;
        this.internationalization = this._themeSettingsConfig.headerIcons.internationalization;
        this.notification = this._themeSettingsConfig.headerIcons.notification;
        this.email = this._themeSettingsConfig.headerIcons.email;
    };
    HorizontalComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HorizontalComponent.prototype.handleBody = function (isMobile) {
        var _self = this;
        var currentBodyClassList = [];
        if (window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL && this._themeSettingsConfig.layout.style === 'horizontal') {
            currentBodyClassList = ['horizontal-layout', '2-columns', 'vertical-overlay-menu', 'menu-hide'];
            currentBodyClassList.push('fixed-navbar');
        }
        currentBodyClassList.forEach(function (c) {
            _self.renderer.addClass(document.body, c);
        });
    };
    HorizontalComponent.prototype.logout = function () {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            this.authService.doLogout().then(function (res) {
                _this.router.navigate(['/login']);
            }, function (err) {
                console.log(err);
            });
        }
    };
    HorizontalComponent.prototype.refreshView = function () {
        var topHeaderElement = document.getElementsByClassName('top-header');
        var menuColorElement = document.getElementsByClassName('menu-header');
        var navigationElement = document.getElementsByClassName('menu-header');
        if (topHeaderElement) {
            if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(topHeaderElement.item(0), 'navbar-dark');
                this._renderer.addClass(topHeaderElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(topHeaderElement.item(0), 'navbar-dark');
                this._renderer.removeClass(topHeaderElement.item(0), 'navbar-light');
            }
        }
        if (this._themeSettingsConfig.layout.style === 'horizontal') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
        }
        else if (this._themeSettingsConfig.layout.style === 'horizontal') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
        }
        if (navigationElement) {
            if (this._themeSettingsConfig.navigation === 'navbar-icon-right') {
                this._renderer.addClass(navigationElement.item(0), 'navbar-icon-right');
            }
        }
        if (menuColorElement) {
            if (this._themeSettingsConfig.menuColor === 'navbar-dark') {
                this._renderer.removeClass(menuColorElement.item(0), 'navbar-light');
                this._renderer.addClass(menuColorElement.item(0), 'navbar-dark');
            }
            else if (this._themeSettingsConfig.menuColor === 'navbar-light') {
                this._renderer.removeClass(menuColorElement.item(0), 'navbar-dark');
                this._renderer.addClass(menuColorElement.item(0), 'navbar-light');
            }
        }
    };
    HorizontalComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded')) {
            // show the left aside menu
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
        }
        else {
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
        }
    };
    HorizontalComponent.prototype.toggleNavbar = function (e) {
        var navbar = this.document.getElementById('navbar-mobile');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
        else {
            navbar.classList.add('show');
        }
    };
    HorizontalComponent.prototype.toggleNavigation = function (e) {
        var sidenav = document.getElementById('sidenav-overlay');
        var sidebarLeft = document.getElementById('sidebar-left') || document.getElementById('email-app-menu') ||
            document.getElementById('sidebar-todo');
        var contentOverlay = document.getElementById('content-overlay');
        var navbar = this.document.getElementById('navbar-mobile');
        if (this.document.body.classList.contains('menu-hide')) {
            this.document.body.classList.remove('menu-hide');
            this._renderer.removeClass(sidenav, 'd-none');
            this._renderer.addClass(sidenav, 'd-block');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.document.body.classList.add('menu-expanded');
            navbar.classList.remove('show');
        }
        else if (!this.document.body.classList.contains('menu-hide') && !this.document.body.classList.contains('menu-open')) {
            this.document.body.classList.add('menu-open');
            this._renderer.addClass(sidenav, 'd-block');
            this._renderer.removeClass(sidenav, 'd-none');
        }
        else {
            this._renderer.removeClass(sidenav, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-hide');
            this._renderer.addClass(sidenav, 'd-none');
            navbar.classList.remove('show');
        }
        if (sidebarLeft) {
            this._renderer.removeClass(sidebarLeft, 'show');
            this._renderer.removeClass(contentOverlay, 'show');
        }
    };
    HorizontalComponent.prototype.toggleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (toggleIcon.item(0).classList.contains('ft-maximize')) {
            this.openfullscreen();
            this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
            this.closefullscreen();
            this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    HorizontalComponent.prototype.openfullscreen = function () {
        // Trigger fullscreen
        // tslint:disable-next-line: no-shadowed-variable
        var docElmWithBrowsersFullScreenFunctions = document.documentElement;
        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
    };
    HorizontalComponent.prototype.closefullscreen = function () {
        // tslint:disable-next-line: no-shadowed-variable
        var docWithBrowsersExitFunctions = document;
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            docWithBrowsersExitFunctions.exitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
            docWithBrowsersExitFunctions.mozCancelFullScreen();
        }
        else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
    };
    HorizontalComponent.prototype.onResize = function (event) {
        var sidenav = document.getElementById('sidenav-overlay');
        if (event.target.innerWidth <= 767) {
            this.document.body.classList.add('vertical-overlay-menu');
            this._renderer.removeClass(sidenav, 'd-block');
            this._renderer.addClass(sidenav, 'd-none');
        }
    };
    HorizontalComponent.prototype.clickSearch = function () {
        if (this.isHeaderSearchOpen) {
            this.isHeaderSearchOpen = false;
        }
        else {
            this.isHeaderSearchOpen = true;
        }
    };
    HorizontalComponent.ɵfac = function HorizontalComponent_Factory(t) { return new (t || HorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"])); };
    HorizontalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalComponent, selectors: [["app-header-horizontal"]], viewQuery: function HorizontalComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, hostBindings: function HorizontalComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HorizontalComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 44, vars: 15, consts: [["id", "top-header", 1, "top-header", "header-navbar", "navbar-expand-md", "navbar", "navbar-with-menu", "navbar-without-dd-arrow", "navbar-static-top", "navbar-light", "navbar-brand-center", 3, "ngClass"], [1, "navbar-wrapper"], ["id", "navbar-header", 1, "navbar-header"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mobile-menu", "d-md-none", "mr-auto"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs11", 3, "click"], [1, "feather", "ft-menu", "font-large-1"], [1, "nav-item"], [1, "navbar-brand", 3, "routerLink"], ["alt", "modern admin logo", "src", "../../../../assets/images/logo/logo.png", 1, "brand-logo"], [1, "brand-text"], [1, "nav-item", "d-md-none"], ["data-toggle", "collapse", "data-target", "#navbar-mobile", 1, "nav-link", "open-navbar-container", 3, "click"], [1, "la", "la-ellipsis-v"], [1, "navbar-container", "content"], ["id", "navbar-mobile", 1, "collapse", "navbar-collapse", "show"], [1, "nav", "navbar-nav", "mr-auto", "float-left"], [1, "nav-item", "d-none", "d-md-block"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs", 3, "routerLink", "click"], [1, "feather", "ft-menu"], ["class", "nav-link nav-link-expand", 3, "routerLink", "click", 4, "ngIf"], [1, "nav-item", "nav-search"], ["class", "nav-link nav-link-search", 3, "routerLink", "click", 4, "ngIf"], [1, "search-input", 3, "ngClass"], ["type", "text", "placeholder", "Explore Modern...", 1, "input"], [1, "nav", "navbar-nav", "float-right"], ["ngbDropdown", "", 1, "dropdown-user", "nav-item"], ["ngbDropdownToggle", "", 1, "nav-link", "dropdown-user-link"], ["class", "mr-1 user-name text-bold-700", 4, "ngIf"], [1, "avatar", "avatar-online"], ["alt", "avatar", 3, "src", 4, "ngIf"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar", 4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownProfileMenu", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], [1, "feather", "ft-user"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "feather", "ft-power"], [1, "nav-link", "nav-link-expand", 3, "routerLink", "click"], [1, "ficon", "feather", "ft-maximize"], [1, "nav-link", "nav-link-search", 3, "routerLink", "click"], [1, "ficon", "feather", "ft-search"], [1, "mr-1", "user-name", "text-bold-700"], ["alt", "avatar", 3, "src"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar"]], template: function HorizontalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalComponent_Template_a_click_5_listener($event) { return ctx.toggleNavigation($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalComponent_Template_a_click_13_listener($event) { return ctx.toggleNavbar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalComponent_Template_a_click_19_listener($event) { return ctx.toggleFixMenu($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HorizontalComponent_a_22_Template, 2, 0, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HorizontalComponent_a_24_Template, 2, 0, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HorizontalComponent_span_30_Template, 2, 1, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HorizontalComponent_span_31_Template, 2, 0, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HorizontalComponent_img_33_Template, 1, 1, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HorizontalComponent_img_34_Template, 1, 0, "img", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Editar perfil ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalComponent_Template_a_click_41_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Cerrar sesi\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedHeaderNavBarClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._themeSettingsConfig.brand.brand_name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maximize === "on");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search === "on");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.isHeaderSearchOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownMenu"]], styles: ["@media (max-width: 767.98px) {\r\n    .header-navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\r\n        width: 100% !important;\r\n        top: 3px;\r\n    }\r\n}\r\n\r\n.dropdown-menu-right[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  left: auto !important;\r\n  top: auto !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFFBQVE7SUFDWjtBQUNKOztBQUVBO0VBQ0UsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoiaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuaGVhZGVyLW5hdmJhciAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    return HorizontalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-horizontal',
                templateUrl: './horizontal.component.html',
                styleUrls: ['./horizontal.component.css']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"] }, { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorService"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarDirective"], { static: true }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "MMa0");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "Oipj");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _helpers_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_helpers/alert.component */ "eSaF");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/alert.service */ "f5O9");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/auth.service */ "7Vn+");
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/chart.api */ "5YoL");
/* harmony import */ var _services_table_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/table-api.service */ "adm4");
/* harmony import */ var _services_application_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/application-api.service */ "wW7e");
/* harmony import */ var _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services/quill-initialize-service.service */ "lnAJ");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/storage */ "H88C");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_layout/settings/settings.module */ "UyOY");
/* harmony import */ var _layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_layout/settings/theme-settings.config */ "BScm");
/* harmony import */ var _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_layout/settings/menu-settings.config */ "Vv3h");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_layout/header/header.component */ "0SQT");
/* harmony import */ var _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_layout/header/vertical/vertical.component */ "yYK4");
/* harmony import */ var _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_layout/header/horizontal/horizontal.component */ "X1Yx");
/* harmony import */ var _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_layout/header/full-layout-navbar/full-layout-navbar.component */ "AgUQ");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_layout/footer/footer.component */ "sD6o");
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_layout/navigation/navigation.component */ "jLIj");
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_layout/public-layout/public-layout.component */ "0KhJ");
/* harmony import */ var _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_layout/private-layout/private-layout.component */ "tqKT");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./register */ "lZQ7");
/* harmony import */ var _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./social-signin/social-signin.component */ "g+q+");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./changelog/changelog.component */ "V3S5");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_services/navbar.service */ "UDOh");
/* harmony import */ var _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_layout/navigation/verticalnav/verticalnav.component */ "CTrt");
/* harmony import */ var _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_layout/navigation/horizontalnav/horizontalnav.component */ "z2wB");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ngx-loading-bar/router */ "lNyj");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_layout/customizer/customizer.component */ "n1uN");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./content/partials/partials.module */ "ofOD");
/* harmony import */ var _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./_layout/customizer/horizontal-customizer/horizontal-customizer.component */ "H3Uw");
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./content/partials/general/match-height/match-height.module */ "jT46");
/* harmony import */ var _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./_layout/full-layout/full-layout.component */ "Ne4N");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./_api/user/user.service */ "wsei");
/* harmony import */ var _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./login/privacy-policy/privacy-policy.component */ "BGRz");
/* harmony import */ var _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./login/terms-condition/terms-condition.component */ "BOj5");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! angular-archwizard */ "tPw2");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/service-worker */ "3pDu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./content/partials/general/card/card.component */ "FhuM");
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ "OwLc");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @ngx-loading-bar/core */ "TtxX");





















// Routing

// Components



















// perfect scroll bar

// spinner

















// Imports from wizard 






















;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
            _services_chart_api__WEBPACK_IMPORTED_MODULE_15__["ChartApiService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"],
            _services_navbar_service__WEBPACK_IMPORTED_MODULE_37__["NavbarService"],
            _services_table_api_service__WEBPACK_IMPORTED_MODULE_16__["TableApiService"],
            _services_application_api_service__WEBPACK_IMPORTED_MODULE_17__["ApplicationApiService"],
            _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_18__["QuillInitializeServiceService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
            _api_user_user_service__WEBPACK_IMPORTED_MODULE_55__["UserService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                useClass: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]
            },
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"],
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_47__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_46__["ChartsModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["ArchwizardModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_52__["MatchHeightModule"],
                _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_48__["BreadcrumbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_20__["routing"],
                // Settings modules
                _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_22__["SettingsModule"].forRoot(_layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_23__["ThemeSettingsConfig"], _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_24__["MenuSettingsConfig"]),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_40__["PerfectScrollbarModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_54__["ToastrModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_41__["NgxSpinnerModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_43__["DeviceDetectorModule"].forRoot(),
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_42__["LoadingBarRouterModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_51__["BlockUIModule"].forRoot({
                    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_50__["BlockTemplateComponent"]
                }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_59__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production })
            ], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterModule"]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
        _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_31__["PublicLayoutComponent"],
        _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_32__["PrivateLayoutComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
        _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_28__["FullLayoutNavbarComponent"],
        _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_27__["HorizontalComponent"],
        _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_26__["VerticalComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
        _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__["NavigationComponent"],
        _helpers_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
        _register__WEBPACK_IMPORTED_MODULE_33__["RegisterComponent"],
        _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_34__["SocialSigninComponent"],
        _login__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
        _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_36__["ChangelogComponent"],
        _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_38__["VerticalnavComponent"],
        _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_39__["HorizontalnavComponent"],
        _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_45__["CustomizerComponent"],
        _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_49__["HorizontalCustomizerComponent"],
        _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_50__["BlockTemplateComponent"],
        _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_53__["FullLayoutComponent"],
        _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_56__["PrivacyPolicyComponent"],
        _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_57__["TermsConditionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_47__["PartialsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_46__["ChartsModule"],
        angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["ArchwizardModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_52__["MatchHeightModule"],
        _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_48__["BreadcrumbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterModule"], _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_22__["SettingsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_40__["PerfectScrollbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_54__["ToastrModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_41__["NgxSpinnerModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_43__["DeviceDetectorModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_42__["LoadingBarRouterModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_51__["BlockUIModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_59__["ServiceWorkerModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_47__["PartialsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_46__["ChartsModule"],
                    angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["ArchwizardModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_52__["MatchHeightModule"],
                    _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_48__["BreadcrumbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                    angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                    angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_20__["routing"],
                    // Settings modules
                    _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_22__["SettingsModule"].forRoot(_layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_23__["ThemeSettingsConfig"], _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_24__["MenuSettingsConfig"]),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_40__["PerfectScrollbarModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_54__["ToastrModule"].forRoot(),
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_41__["NgxSpinnerModule"],
                    ngx_device_detector__WEBPACK_IMPORTED_MODULE_43__["DeviceDetectorModule"].forRoot(),
                    _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_42__["LoadingBarRouterModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_51__["BlockUIModule"].forRoot({
                        template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_50__["BlockTemplateComponent"]
                    }),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_59__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production })
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                    _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_31__["PublicLayoutComponent"],
                    _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_32__["PrivateLayoutComponent"],
                    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
                    _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_28__["FullLayoutNavbarComponent"],
                    _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_27__["HorizontalComponent"],
                    _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_26__["VerticalComponent"],
                    _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                    _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__["NavigationComponent"],
                    _helpers_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                    _register__WEBPACK_IMPORTED_MODULE_33__["RegisterComponent"],
                    _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_34__["SocialSigninComponent"],
                    _login__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
                    _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_36__["ChangelogComponent"],
                    _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_38__["VerticalnavComponent"],
                    _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_39__["HorizontalnavComponent"],
                    _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_45__["CustomizerComponent"],
                    _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_49__["HorizontalCustomizerComponent"],
                    _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_50__["BlockTemplateComponent"],
                    _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_53__["FullLayoutComponent"],
                    _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_56__["PrivacyPolicyComponent"],
                    _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_57__["TermsConditionComponent"],
                ],
                providers: [
                    _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                    _services_chart_api__WEBPACK_IMPORTED_MODULE_15__["ChartApiService"],
                    _services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"],
                    _services_navbar_service__WEBPACK_IMPORTED_MODULE_37__["NavbarService"],
                    _services_table_api_service__WEBPACK_IMPORTED_MODULE_16__["TableApiService"],
                    _services_application_api_service__WEBPACK_IMPORTED_MODULE_17__["ApplicationApiService"],
                    _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_18__["QuillInitializeServiceService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                    _api_user_user_service__WEBPACK_IMPORTED_MODULE_55__["UserService"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                        useClass: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]
                    },
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterModule"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_53__["FullLayoutComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_60__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["NgPluralCase"], _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_61__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], ng2_charts__WEBPACK_IMPORTED_MODULE_46__["BaseChartDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["WizardComponent"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["WizardStepComponent"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["WizardNavigationBarComponent"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["WizardCompletionStepComponent"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["GoToStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["NextStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["PreviousStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["OptionalStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["WizardStepTitleDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["EnableBackLinksDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["WizardStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["WizardCompletionStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["SelectedStepDirective"], angular_archwizard__WEBPACK_IMPORTED_MODULE_58__["ResetWizardDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerMonth"], src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_62__["MatchHeightDirective"], _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_63__["BreadcrumbComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCheckBox"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationEllipsis"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationFirst"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationLast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationNumber"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRating"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToastHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["ɵangular_packages_router_router_l"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_40__["PerfectScrollbarComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_40__["PerfectScrollbarDirective"], ngx_toastr__WEBPACK_IMPORTED_MODULE_54__["Toast"], ngx_spinner__WEBPACK_IMPORTED_MODULE_41__["NgxSpinnerComponent"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_64__["LoadingBarComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_51__["BlockUIComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_51__["ɵf"], ng_block_ui__WEBPACK_IMPORTED_MODULE_51__["BlockUIContentComponent"], _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
    _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_31__["PublicLayoutComponent"],
    _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_32__["PrivateLayoutComponent"],
    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
    _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_28__["FullLayoutNavbarComponent"],
    _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_27__["HorizontalComponent"],
    _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_26__["VerticalComponent"],
    _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
    _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__["NavigationComponent"],
    _helpers_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
    _register__WEBPACK_IMPORTED_MODULE_33__["RegisterComponent"],
    _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_34__["SocialSigninComponent"],
    _login__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"],
    _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_36__["ChangelogComponent"],
    _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_38__["VerticalnavComponent"],
    _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_39__["HorizontalnavComponent"],
    _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_45__["CustomizerComponent"],
    _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_49__["HorizontalCustomizerComponent"],
    _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_50__["BlockTemplateComponent"],
    _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_53__["FullLayoutComponent"],
    _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_56__["PrivacyPolicyComponent"],
    _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_57__["TermsConditionComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_60__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_60__["KeyValuePipe"]]);


/***/ }),

/***/ "adm4":
/*!************************************************!*\
  !*** ./src/app/_services/table-api.service.ts ***!
  \************************************************/
/*! exports provided: TableApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableApiService", function() { return TableApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TableApiService = /** @class */ (function () {
    function TableApiService(http) {
        this.http = http;
        this.apiBaseURL = 'assets/data';
        this.loadEcommerceTableDataURL = null;
        this.loadInvoiceTableDataURL = null;
        this.loadBasicTableDataURL = null;
        this.loadTableBorderDataURL = null;
        this.loadTableStylingDataURL = null;
        this.loadTableApiDataURL = null;
        this.loadTableInitialisationDataURL = null;
        this.loadStylingDataURL = null;
        this.loadTableButtonDataURL = null;
        this.loadTableExportDataURL = null;
        this.loadTableHiddenDataURL = null;
        this.loadTableNgxDataURL = null;
        this.loadEcommerceTableDataURL = this.apiBaseURL + "/dashboard/ecommerce/datatable.json";
        this.loadInvoiceTableDataURL = this.apiBaseURL + "/invoice/invoicelist/invoicetable.json";
        this.loadBasicTableDataURL = this.apiBaseURL + "/boostraptable/basictable.json";
        this.loadTableBorderDataURL = this.apiBaseURL + "/boostraptable/tableborder.json";
        this.loadTableStylingDataURL = this.apiBaseURL + "/boostraptable/tablestyling.json";
        this.loadTableApiDataURL = this.apiBaseURL + "/datatables/tableapi/tableapi.json";
        this.loadTableInitialisationDataURL = this.apiBaseURL + "/datatables/tableinitialisation/tableinitialisation.json";
        this.loadStylingDataURL = this.apiBaseURL + "/datatables/tablestyling/tablestyling.json";
        this.loadTableButtonDataURL = this.apiBaseURL + "/datatables/buttons/tablebuttons.json";
        this.loadTableExportDataURL = this.apiBaseURL + "/datatables/html5dataexport/html5dataexport.json";
        this.loadTableHiddenDataURL = this.apiBaseURL + "/datatables/hiddentable/hiddentable.json";
        this.loadTableNgxDataURL = this.apiBaseURL + "/boostraptable/ngxboostraptables.json";
    }
    TableApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // Error
            console.error('error:', error.error.message);
        }
        else {
            // Error
            console.error("Api server returned " + error.status + ", " +
                ("error body: " + error.error));
        }
        // throwError is observable
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Error has happened');
    };
    TableApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    TableApiService.prototype.getEcommerceTableData = function () {
        return this.http.get(this.loadEcommerceTableDataURL, httpOptions);
    };
    TableApiService.prototype.getInvoiceTableData = function () {
        return this.http.get(this.loadInvoiceTableDataURL, httpOptions);
    };
    TableApiService.prototype.getBasicTableData = function () {
        return this.http.get(this.loadBasicTableDataURL, httpOptions);
    };
    TableApiService.prototype.getTableBorderData = function () {
        return this.http.get(this.loadTableBorderDataURL, httpOptions);
    };
    TableApiService.prototype.getTableStylingData = function () {
        return this.http.get(this.loadTableStylingDataURL, httpOptions);
    };
    TableApiService.prototype.getTableApiData = function () {
        return this.http.get(this.loadTableApiDataURL, httpOptions);
    };
    TableApiService.prototype.getTableInitialisationData = function () {
        return this.http.get(this.loadTableInitialisationDataURL, httpOptions);
    };
    TableApiService.prototype.getStylingData = function () {
        return this.http.get(this.loadStylingDataURL, httpOptions);
    };
    TableApiService.prototype.getTableButtonData = function () {
        return this.http.get(this.loadTableButtonDataURL, httpOptions);
    };
    TableApiService.prototype.getTableExportData = function () {
        return this.http.get(this.loadTableExportDataURL, httpOptions);
    };
    TableApiService.prototype.getTableHiddenData = function () {
        return this.http.get(this.loadTableHiddenDataURL, httpOptions);
    };
    TableApiService.prototype.getTableNgxData = function () {
        return this.http.get(this.loadTableNgxDataURL, httpOptions);
    };
    TableApiService.ɵfac = function TableApiService_Factory(t) { return new (t || TableApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    TableApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableApiService, factory: TableApiService.ɵfac, providedIn: 'root' });
    return TableApiService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_layout/public-layout/public-layout.component */ "0KhJ");
/* harmony import */ var _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout/private-layout/private-layout.component */ "tqKT");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register */ "lZQ7");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changelog/changelog.component */ "V3S5");
/* harmony import */ var _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_layout/full-layout/full-layout.component */ "Ne4N");
/* harmony import */ var _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/privacy-policy/privacy-policy.component */ "BGRz");
/* harmony import */ var _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/terms-condition/terms-condition.component */ "BOj5");










var appRoutes = [
    { path: 'privacypolicy', component: _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"] },
    { path: 'termCondition', component: _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_9__["TermsConditionComponent"] },
    // Public layout
    {
        path: '',
        component: _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__["PublicLayoutComponent"],
        children: [
            { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
            { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: '', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
        ]
    },
    {
        path: '',
        component: _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_7__["FullLayoutComponent"],
        children: [
            {
                path: 'error',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-full-pages-error-error-module */ "app-content-full-pages-error-error-module").then(__webpack_require__.bind(null, /*! ../app/content/full-pages/error/error.module */ "Kwvt")).then(function (m) { return m.ErrorModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'authentication',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-full-pages-authentication-authentication-module */ "app-content-full-pages-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ../app/content/full-pages/authentication/authentication.module */ "SMoj")).then(function (m) {
                    return m.AuthenticationModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'others',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-full-pages-others-others-module */ "app-content-full-pages-others-others-module").then(__webpack_require__.bind(null, /*! ../app/content/full-pages/others/others.module */ "Cfgn")).then(function (m) { return m.OthersModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            }
        ]
    },
    // Private layout
    {
        path: '',
        component: _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_2__["PrivateLayoutComponent"],
        children: [
            { path: 'logout', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'changelog', component: _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_6__["ChangelogComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            {
                path: 'dashboard',
                loadChildren: function () { return Promise.all(/*! import() | app-content-dashboard-dashboard-module */[__webpack_require__.e("default~app-content-applications-contacts-contacts-module~app-content-dashboard-dashboard-module~app~a5f9bb0a"), __webpack_require__.e("default~app-content-advance-cards-advance-cards-module~app-content-charts-maps-ngchartist-ngchartist~4d7f7924"), __webpack_require__.e("common"), __webpack_require__.e("app-content-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../app/content/dashboard/dashboard.module */ "An5s")).then(function (m) { return m.DashboardModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'components',
                loadChildren: function () { return Promise.all(/*! import() | app-content-ngbbootstrap-components-module */[__webpack_require__.e("default~app-content-cancellation-cancellation-module~app-content-forms-form-elements-form-elements-m~66743ec6"), __webpack_require__.e("app-content-ngbbootstrap-components-module")]).then(__webpack_require__.bind(null, /*! ../app/content/ngbbootstrap/components.module */ "cUVv")).then(function (m) { return m.ComponentsModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'todo-app',
                loadChildren: function () { return Promise.all(/*! import() | app-content-applications-todo-app-todo-app-module */[__webpack_require__.e("default~app-content-applications-todo-app-todo-app-module~app-content-forms-form-elements-form-eleme~600725ba"), __webpack_require__.e("default~app-content-applications-email-email-module~app-content-applications-todo-app-todo-app-modul~bdf45d4f"), __webpack_require__.e("default~app-content-applications-email-email-module~app-content-applications-todo-app-todo-app-module"), __webpack_require__.e("common"), __webpack_require__.e("app-content-applications-todo-app-todo-app-module")]).then(__webpack_require__.bind(null, /*! ../app/content/applications/todo-app/todo-app.module */ "kf8Y")).then(function (m) { return m.TodoAppModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'chats',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-applications-chat-chats-module */ "app-content-applications-chat-chats-module").then(__webpack_require__.bind(null, /*! ../app/content/applications/chat/chats.module */ "XTOg")).then(function (m) { return m.ChatsModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'email',
                loadChildren: function () { return Promise.all(/*! import() | app-content-applications-email-email-module */[__webpack_require__.e("default~app-content-applications-email-email-module~app-content-extra-components-extra-components-mo~02ca94ce"), __webpack_require__.e("default~app-content-applications-email-email-module~app-content-applications-todo-app-todo-app-modul~bdf45d4f"), __webpack_require__.e("default~app-content-applications-email-email-module~app-content-applications-todo-app-todo-app-module"), __webpack_require__.e("app-content-applications-email-email-module")]).then(__webpack_require__.bind(null, /*! ../app/content/applications/email/email.module */ "uquJ")).then(function (m) { return m.EmailModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'calender',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-applications-calender-calender-module */ "app-content-applications-calender-calender-module").then(__webpack_require__.bind(null, /*! ../app/content/applications/calender/calender.module */ "ejpY")).then(function (m) { return m.CalenderModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'contacts',
                loadChildren: function () { return Promise.all(/*! import() | app-content-applications-contacts-contacts-module */[__webpack_require__.e("default~app-content-applications-contacts-contacts-module~app-content-dashboard-dashboard-module~app~a5f9bb0a"), __webpack_require__.e("app-content-applications-contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ../app/content/applications/contacts/contacts.module */ "zFWs")).then(function (m) { return m.ContactsModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'chartjs',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-charts-maps-chartjs-chartjs-module */ "app-content-charts-maps-chartjs-chartjs-module").then(__webpack_require__.bind(null, /*! ../app/content/charts-maps/chartjs/chartjs.module */ "Il0I")).then(function (m) { return m.ChartjsModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'form-elements',
                loadChildren: function () { return Promise.all(/*! import() | app-content-forms-form-elements-form-elements-module */[__webpack_require__.e("default~app-content-cancellation-cancellation-module~app-content-forms-form-elements-form-elements-m~66743ec6"), __webpack_require__.e("default~app-content-applications-todo-app-todo-app-module~app-content-forms-form-elements-form-eleme~600725ba"), __webpack_require__.e("default~app-content-applications-email-email-module~app-content-extra-components-extra-components-mo~02ca94ce"), __webpack_require__.e("default~app-content-forms-form-elements-form-elements-module~app-content-table-boostraptables-boostr~5b0227fc"), __webpack_require__.e("app-content-forms-form-elements-form-elements-module")]).then(__webpack_require__.bind(null, /*! ../app/content/forms/form-elements/form-elements.module */ "yEPu")).then(function (m) {
                    return m.FormElementsModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'form-layouts',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-forms-form-layouts-form-layouts-module */ "app-content-forms-form-layouts-form-layouts-module").then(__webpack_require__.bind(null, /*! ../app/content/forms/form-layouts/form-layouts.module */ "f1TL")).then(function (m) {
                    return m.FormLayoutsModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'form-wizard',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-forms-form-wizard-form-wizard-module */ "app-content-forms-form-wizard-form-wizard-module").then(__webpack_require__.bind(null, /*! ../app/content/forms/form-wizard/form-wizard.module */ "RjXP")).then(function (m) {
                    return m.FormWizardModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'form-repeater',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-forms-form-repeater-form-repeater-module */ "app-content-forms-form-repeater-form-repeater-module").then(__webpack_require__.bind(null, /*! ../app/content/forms/form-repeater/form-repeater.module */ "BYxk")).then(function (m) {
                    return m.FormRepeaterModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'ngchartist',
                loadChildren: function () { return Promise.all(/*! import() | app-content-charts-maps-ngchartist-ngchartist-module */[__webpack_require__.e("default~app-content-advance-cards-advance-cards-module~app-content-charts-maps-ngchartist-ngchartist~4d7f7924"), __webpack_require__.e("app-content-charts-maps-ngchartist-ngchartist-module")]).then(__webpack_require__.bind(null, /*! ../app/content/charts-maps/ngchartist/ngchartist.module */ "LFUF")).then(function (m) {
                    return m.NgchartistModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'boostraptables',
                loadChildren: function () { return Promise.all(/*! import() | app-content-table-boostraptables-boostraptables-module */[__webpack_require__.e("default~app-content-applications-contacts-contacts-module~app-content-dashboard-dashboard-module~app~a5f9bb0a"), __webpack_require__.e("default~app-content-cancellation-cancellation-module~app-content-forms-form-elements-form-elements-m~66743ec6"), __webpack_require__.e("default~app-content-forms-form-elements-form-elements-module~app-content-table-boostraptables-boostr~5b0227fc"), __webpack_require__.e("common"), __webpack_require__.e("app-content-table-boostraptables-boostraptables-module")]).then(__webpack_require__.bind(null, /*! ../app/content/table/boostraptables/boostraptables.module */ "yuZa")).then(function (m) {
                    return m.BoostraptablesModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'datatables',
                loadChildren: function () { return Promise.all(/*! import() | app-content-table-datatables-datatables-module */[__webpack_require__.e("default~app-content-applications-contacts-contacts-module~app-content-dashboard-dashboard-module~app~a5f9bb0a"), __webpack_require__.e("default~app-content-applications-todo-app-todo-app-module~app-content-forms-form-elements-form-eleme~600725ba"), __webpack_require__.e("default~app-content-table-datatables-datatables-module~app-content-table-datatablesext-datatablesext-module"), __webpack_require__.e("app-content-table-datatables-datatables-module")]).then(__webpack_require__.bind(null, /*! ../app/content/table/datatables/datatables.module */ "GSZs")).then(function (m) { return m.DatatablesModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'datatablesext',
                loadChildren: function () { return Promise.all(/*! import() | app-content-table-datatablesext-datatablesext-module */[__webpack_require__.e("default~app-content-applications-contacts-contacts-module~app-content-dashboard-dashboard-module~app~a5f9bb0a"), __webpack_require__.e("default~app-content-report-report-module~app-content-table-datatablesext-datatablesext-module"), __webpack_require__.e("default~app-content-table-datatables-datatables-module~app-content-table-datatablesext-datatablesext-module"), __webpack_require__.e("app-content-table-datatablesext-datatablesext-module")]).then(__webpack_require__.bind(null, /*! ../app/content/table/datatablesext/datatablesext.module */ "pCGS")).then(function (m) {
                    return m.DatatablesextModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            { path: 'icons', loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-icons-icons-module */ "app-content-icons-icons-module").then(__webpack_require__.bind(null, /*! ../app/content/icons/icons.module */ "U8lZ")).then(function (m) { return m.IconsModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'cards', loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-cards-cards-module */ "app-content-cards-cards-module").then(__webpack_require__.bind(null, /*! ../app/content/cards/cards.module */ "RqxT")).then(function (m) { return m.CardsModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'maps', loadChildren: function () { return Promise.all(/*! import() | app-content-maps-maps-module */[__webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-dropzone-dropzone-module~app-content-pages-ti~9acecfa8"), __webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-timelines-timelines-module~app-content-pages-~ec54938a"), __webpack_require__.e("app-content-maps-maps-module")]).then(__webpack_require__.bind(null, /*! ../app/content/maps/maps.module */ "n7nQ")).then(function (m) { return m.MapsModule; }); }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            {
                path: 'invoice',
                loadChildren: function () { return Promise.all(/*! import() | app-content-pages-invoice-invoice-module */[__webpack_require__.e("default~app-content-pages-invoice-invoice-module~app-content-pages-timelines-timelines-module~app-co~3fc94059"), __webpack_require__.e("app-content-pages-invoice-invoice-module")]).then(__webpack_require__.bind(null, /*! ../app/content/pages/invoice/invoice.module */ "DKI4")).then(function (m) { return m.InvoiceModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'timelines',
                loadChildren: function () { return Promise.all(/*! import() | app-content-pages-timelines-timelines-module */[__webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-dropzone-dropzone-module~app-content-pages-ti~9acecfa8"), __webpack_require__.e("default~app-content-pages-invoice-invoice-module~app-content-pages-timelines-timelines-module~app-co~3fc94059"), __webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-timelines-timelines-module~app-content-pages-~ec54938a"), __webpack_require__.e("default~app-content-pages-gallery-gallery-module~app-content-pages-search-search-module~app-content-~860704ff"), __webpack_require__.e("app-content-pages-timelines-timelines-module")]).then(__webpack_require__.bind(null, /*! ../app/content/pages/timelines/timelines.module */ "zSMy")).then(function (m) { return m.TimelinesModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'user',
                loadChildren: function () { return Promise.all(/*! import() | app-content-pages-user-user-module */[__webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-dropzone-dropzone-module~app-content-pages-ti~9acecfa8"), __webpack_require__.e("default~app-content-pages-invoice-invoice-module~app-content-pages-timelines-timelines-module~app-co~3fc94059"), __webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-timelines-timelines-module~app-content-pages-~ec54938a"), __webpack_require__.e("default~app-content-pages-gallery-gallery-module~app-content-pages-search-search-module~app-content-~860704ff"), __webpack_require__.e("common"), __webpack_require__.e("app-content-pages-user-user-module")]).then(__webpack_require__.bind(null, /*! ../app/content/pages/user/user.module */ "BFlE")).then(function (m) { return m.UserModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'client',
                loadChildren: function () { return Promise.all(/*! import() | content-client-client-module */[__webpack_require__.e("common"), __webpack_require__.e("content-client-client-module")]).then(__webpack_require__.bind(null, /*! ./content/client/client.module */ "cCSp")).then(function (m) { return m.ClientModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'stock',
                loadChildren: function () { return __webpack_require__.e(/*! import() | content-stock-stock-module */ "content-stock-stock-module").then(__webpack_require__.bind(null, /*! ./content/stock/stock.module */ "4Url")).then(function (m) { return m.StockModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'product',
                loadChildren: function () { return Promise.all(/*! import() | content-product-product-module */[__webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-dropzone-dropzone-module~app-content-pages-ti~9acecfa8"), __webpack_require__.e("default~app-content-pages-invoice-invoice-module~app-content-pages-timelines-timelines-module~app-co~3fc94059"), __webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-timelines-timelines-module~app-content-pages-~ec54938a"), __webpack_require__.e("default~app-content-sale-sale-module~content-product-product-module"), __webpack_require__.e("common"), __webpack_require__.e("content-product-product-module")]).then(__webpack_require__.bind(null, /*! ./content/product/product.module */ "E4x6")).then(function (m) { return m.ProductModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'sale',
                loadChildren: function () { return Promise.all(/*! import() | app-content-sale-sale-module */[__webpack_require__.e("default~app-content-sale-sale-module~content-product-product-module"), __webpack_require__.e("common"), __webpack_require__.e("app-content-sale-sale-module")]).then(__webpack_require__.bind(null, /*! ../app/content/sale/sale.module */ "A97n")).then(function (m) { return m.SaleModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'report',
                loadChildren: function () { return Promise.all(/*! import() | app-content-report-report-module */[__webpack_require__.e("default~app-content-report-report-module~app-content-table-datatablesext-datatablesext-module"), __webpack_require__.e("common"), __webpack_require__.e("app-content-report-report-module")]).then(__webpack_require__.bind(null, /*! ../app/content/report/report.module */ "fk/G")).then(function (m) { return m.ReportModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'cancellation',
                loadChildren: function () { return Promise.all(/*! import() | app-content-cancellation-cancellation-module */[__webpack_require__.e("default~app-content-cancellation-cancellation-module~app-content-forms-form-elements-form-elements-m~66743ec6"), __webpack_require__.e("common"), __webpack_require__.e("app-content-cancellation-cancellation-module")]).then(__webpack_require__.bind(null, /*! ../app/content/cancellation/cancellation.module */ "xQ7D")).then(function (m) { return m.CancellationModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'gallery',
                loadChildren: function () { return Promise.all(/*! import() | app-content-pages-gallery-gallery-module */[__webpack_require__.e("default~app-content-pages-gallery-gallery-module~app-content-pages-search-search-module~app-content-~860704ff"), __webpack_require__.e("app-content-pages-gallery-gallery-module")]).then(__webpack_require__.bind(null, /*! ../app/content/pages/gallery/gallery.module */ "36vg")).then(function (m) { return m.GalleryModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'news-feed',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-pages-news-feed-news-feed-module */ "app-content-pages-news-feed-news-feed-module").then(__webpack_require__.bind(null, /*! ../app/content/pages/news-feed/news-feed.module */ "vR12")).then(function (m) { return m.NewsFeedModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'dropzone',
                loadChildren: function () { return Promise.all(/*! import() | app-content-pages-dropzone-dropzone-module */[__webpack_require__.e("default~app-content-maps-maps-module~app-content-pages-dropzone-dropzone-module~app-content-pages-ti~9acecfa8"), __webpack_require__.e("app-content-pages-dropzone-dropzone-module")]).then(__webpack_require__.bind(null, /*! ../app/content/pages/dropzone/dropzone.module */ "mPmp")).then(function (m) { return m.DropzoneModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'social-feed',
                loadChildren: function () { return __webpack_require__.e(/*! import() | app-content-pages-social-feed-social-feed-module */ "app-content-pages-social-feed-social-feed-module").then(__webpack_require__.bind(null, /*! ../app/content/pages/social-feed/social-feed.module */ "ouZR")).then(function (m) {
                    return m.SocialFeedModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'search',
                loadChildren: function () { return Promise.all(/*! import() | app-content-pages-search-search-module */[__webpack_require__.e("default~app-content-pages-gallery-gallery-module~app-content-pages-search-search-module~app-content-~860704ff"), __webpack_require__.e("app-content-pages-search-search-module")]).then(__webpack_require__.bind(null, /*! ../app/content/pages/search/search.module */ "tEMG")).then(function (m) { return m.SearchModule; }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'advanceCards',
                loadChildren: function () { return Promise.all(/*! import() | app-content-advance-cards-advance-cards-module */[__webpack_require__.e("default~app-content-advance-cards-advance-cards-module~app-content-charts-maps-ngchartist-ngchartist~4d7f7924"), __webpack_require__.e("common"), __webpack_require__.e("app-content-advance-cards-advance-cards-module")]).then(__webpack_require__.bind(null, /*! ../app/content/advance-cards/advance-cards.module */ "bws4")).then(function (m) {
                    return m.AdvanceCardsModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'extraComponents',
                loadChildren: function () { return Promise.all(/*! import() | app-content-extra-components-extra-components-module */[__webpack_require__.e("default~app-content-applications-email-email-module~app-content-extra-components-extra-components-mo~02ca94ce"), __webpack_require__.e("default~app-content-applications-email-email-module~app-content-applications-todo-app-todo-app-modul~bdf45d4f"), __webpack_require__.e("app-content-extra-components-extra-components-module")]).then(__webpack_require__.bind(null, /*! ../app/content/extra-components/extra-components.module */ "mCkZ")).then(function (m) {
                    return m.ExtraComponentsModule;
                }); },
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
        ],
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'dashboard' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' });


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cveO":
/*!*********************************************************!*\
  !*** ./src/assets/data/customizer/customizerColor.json ***!
  \*********************************************************/
/*! exports provided: colorArray, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"colorArray\":[{\"cssClass\":\"bg-blue-grey\"},{\"cssClass\":\"bg-primary\"},{\"cssClass\":\"bg-danger\"},{\"cssClass\":\"bg-success\"},{\"cssClass\":\"bg-blue\"},{\"cssClass\":\"bg-cyan\"},{\"cssClass\":\"bg-pink\"},{\"cssClass\":\"bg-gradient-x-grey-blue\"},{\"cssClass\":\"bg-gradient-x-primary\"},{\"cssClass\":\"bg-gradient-x-danger\"},{\"cssClass\":\"bg-gradient-x-success\"},{\"cssClass\":\"bg-gradient-x-blue\"},{\"cssClass\":\"bg-gradient-x-cyan\"},{\"cssClass\":\"bg-gradient-x-pink\"},{\"cssClass\":\"bg-default\"},{\"cssClass\":\"bg-blue-grey bg-lighten-4\"},{\"cssClass\":\"bg-primary bg-lighten-4\"},{\"cssClass\":\"bg-danger bg-lighten-4\"},{\"cssClass\":\"bg-success bg-lighten-4\"},{\"cssClass\":\"bg-blue bg-lighten-4\"},{\"cssClass\":\"bg-cyan bg-lighten-4\"},{\"cssClass\":\"bg-pink bg-lighten-4\"}]}");

/***/ }),

/***/ "eSaF":
/*!*********************************************!*\
  !*** ./src/app/_helpers/alert.component.ts ***!
  \*********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");





var _c0 = function (a0, a1, a2) { return { "alert": a0, "alert-success": a1, "alert-danger": a2 }; };
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r0.message, ctx_r0.message.type === "success", ctx_r0.message.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message.text, "\n");
} }
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 6, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
    return AlertComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert',
                templateUrl: 'alert.component.html'
            }]
    }], function () { return [{ type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "erhg":
/*!***********************************************************!*\
  !*** ./src/app/_layout/settings/menu-settings.service.ts ***!
  \***********************************************************/
/*! exports provided: MENU_SETTINGS_CONFIG, MenuSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_SETTINGS_CONFIG", function() { return MENU_SETTINGS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSettingsService", function() { return MenuSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);







var MENU_SETTINGS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('menuCustomConfig');
var MenuSettingsService = /** @class */ (function () {
    function MenuSettingsService(_router, _config) {
        this._router = _router;
        this._config = _config;
        // Set the default config from the user provided config (from forRoot)
        this._defaultConfig = _config;
        // Initialize the service
        this._init();
    }
    MenuSettingsService.prototype._init = function () {
        var _this = this;
        // Set the config from the default config
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this._defaultConfig));
        // Reload the default layout config on every RoutesRecognized event
        // if the current layout config is different from the default one
        this._router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]; }))
            .subscribe(function () {
            if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"](_this._configSubject.getValue().layout, _this._defaultConfig.layout)) {
                // Clone the current config
                var config = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_this._configSubject.getValue());
                // Set the config
                _this._configSubject.next(config);
            }
        });
    };
    Object.defineProperty(MenuSettingsService.prototype, "config", {
        get: function () {
            return this._configSubject.asObservable();
        },
        set: function (value) {
            // Get the value from the behavior subject
            var config = this._configSubject.getValue();
            // Merge the new config
            config = lodash__WEBPACK_IMPORTED_MODULE_4__["merge"]({}, config, value);
            // Notify the observers
            this._configSubject.next(config);
        },
        enumerable: false,
        configurable: true
    });
    MenuSettingsService.ɵfac = function MenuSettingsService_Factory(t) { return new (t || MenuSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MENU_SETTINGS_CONFIG)); };
    MenuSettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuSettingsService, factory: MenuSettingsService.ɵfac, providedIn: 'root' });
    return MenuSettingsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuSettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MENU_SETTINGS_CONFIG]
            }] }]; }, null); })();


/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // Clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // Only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // Clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac });
    return AlertService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "g+q+":
/*!**********************************************************!*\
  !*** ./src/app/social-signin/social-signin.component.ts ***!
  \**********************************************************/
/*! exports provided: SocialSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSigninComponent", function() { return SocialSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_api/user/user.service */ "wsei");











var SocialSigninComponent = /** @class */ (function () {
    function SocialSigninComponent(route, router, alertService, authService, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.userService = userService;
        this.homeURL = '/dashboard/ecommerce';
        this.users = [];
        this.user = {};
        this.route.queryParams.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'];
        });
    }
    SocialSigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users.map(function (item) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
            });
        });
    };
    SocialSigninComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin().then(function (res) {
            _this.setUserInStorage(res);
            if (_this.returnUrl) {
                _this.homeURL = _this.returnUrl;
            }
            console.log("URL DEL HOME: " + _this.homeURL);
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin().then(function (res) {
            _this.setUserInStorage(res);
            if (_this.returnUrl) {
                _this.homeURL = _this.returnUrl;
            }
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin().then(function (res) {
            _this.setUserInStorage(res);
            if (_this.returnUrl) {
                _this.homeURL = _this.returnUrl;
            }
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            console.log(err);
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.tryGithubLogin = function () {
        var _this = this;
        this.authService.doGitHubLogin().then(function (res) {
            _this.setUserInStorage(res);
            if (_this.returnUrl) {
                _this.homeURL = _this.returnUrl;
            }
            _this.router.navigate([_this.homeURL]);
        }, function (err) {
            console.log(err);
            _this.alertService.error(err.message);
        });
    };
    SocialSigninComponent.prototype.setUserInStorage = function (res) {
        if (res.user) {
            localStorage.setItem('currentUser', JSON.stringify(res.user));
            var loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
            this.user = {
                name: loggedInUser.displayName,
                image: loggedInUser.photoURL,
                uid: loggedInUser.uid
            };
            if (this.users.length === 0) {
                this.userService.createUser(this.user).then(function (user) {
                    console.log(user);
                });
            }
            else {
                var userExists = false;
                for (var i = 0; i < this.users.length; i++) {
                    var userUid = this.users[i].uid;
                    if (res.user.uid === userUid) {
                        userExists = true;
                        break;
                    }
                }
                if (!userExists) {
                    this.userService.createUser(this.user).then(function (user) {
                        console.log(user);
                    });
                }
            }
        }
        else {
            localStorage.setItem('currentUser', JSON.stringify(res));
        }
    };
    SocialSigninComponent.ɵfac = function SocialSigninComponent_Factory(t) { return new (t || SocialSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
    SocialSigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SocialSigninComponent, selectors: [["app-social-signin"]], decls: 7, vars: 0, consts: [[1, "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "click"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "click"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "click"], [1, "la", "la-google", "font-medium-4"]], template: function SocialSigninComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SocialSigninComponent_Template_a_click_1_listener() { return ctx.tryFacebookLogin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SocialSigninComponent_Template_a_click_3_listener() { return ctx.tryTwitterLogin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SocialSigninComponent_Template_a_click_5_listener() { return ctx.tryGoogleLogin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtc2lnbmluLmNvbXBvbmVudC5jc3MifQ== */"] });
    return SocialSigninComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocialSigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-social-signin',
                templateUrl: './social-signin.component.html',
                styleUrls: ['./social-signin.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _api_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "jLIj":
/*!************************************************************!*\
  !*** ./src/app/_layout/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "0SQT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verticalnav/verticalnav.component */ "CTrt");
/* harmony import */ var _horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./horizontalnav/horizontalnav.component */ "z2wB");











function NavigationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-verticalnav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NavigationComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-horizontalnav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_themeSettingsService) {
        this._themeSettingsService = _themeSettingsService;
        this.isMobile = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (config.layout && config.layout.style &&
                config.layout.style === 'vertical') {
                self.layout = 'vertical';
            }
            else {
                self.layout = 'horizontal';
            }
        });
    };
    NavigationComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
            this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
    };
    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"])); };
    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], hostBindings: function NavigationComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavigationComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 4, vars: 2, consts: [[3, "resize"], [4, "ngIf"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavigationComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationComponent_ng_container_3_Template, 2, 0, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "vertical" || ctx.isMobile == true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal" && ctx.isMobile == false);
        } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_7__["VerticalnavComponent"], _horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_8__["HorizontalnavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
    return NavigationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "jT46":
/*!******************************************************************************!*\
  !*** ./src/app/content/partials/general/match-height/match-height.module.ts ***!
  \******************************************************************************/
/*! exports provided: MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ "OwLc");




var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatchHeightModule });
    MatchHeightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatchHeightModule_Factory(t) { return new (t || MatchHeightModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]] });
    return MatchHeightModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatchHeightModule, { declarations: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__["MatchHeightDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__["MatchHeightDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchHeightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__["MatchHeightDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__["MatchHeightDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kaWu":
/*!*************************************************************!*\
  !*** ./src/app/_layout/blockui/block-template.component.ts ***!
  \*************************************************************/
/*! exports provided: BlockTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTemplateComponent", function() { return BlockTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var BlockTemplateComponent = /** @class */ (function () {
    function BlockTemplateComponent() {
    }
    BlockTemplateComponent.ɵfac = function BlockTemplateComponent_Factory(t) { return new (t || BlockTemplateComponent)(); };
    BlockTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockTemplateComponent, selectors: [["app-block-temp"]], decls: 5, vars: 1, consts: [[1, "block-ui-template"], ["aria-hidden", "true", 1, "feather", "ft-refresh-cw", "icon-spin", "font-medium-2"]], template: function BlockTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        } }, styles: ["[_nghost-%COMP%] {\n      text-align: center;\n    }"] });
    return BlockTemplateComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-temp',
                styles: ["\n    :host {\n      text-align: center;\n    }\n  "],
                template: "\n    <div class=\"block-ui-template\">\n      <i class=\"feather ft-refresh-cw icon-spin font-medium-2\" aria-hidden=\"true\"></i>\n      <div><strong>{{message}}</strong></div>\n    </div>\n  "
            }]
    }], null, null); })();


/***/ }),

/***/ "lZQ7":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "1W4x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "lnAJ":
/*!***************************************************************!*\
  !*** ./src/app/_services/quill-initialize-service.service.ts ***!
  \***************************************************************/
/*! exports provided: QuillInitializeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillInitializeServiceService", function() { return QuillInitializeServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill */ "kzlf");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_applications_quill_quillAutolinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/applications/quill/quillAutolinks */ "+Kvt");




var QuillInitializeServiceService = /** @class */ (function () {
    function QuillInitializeServiceService() {
        var Link = quill__WEBPACK_IMPORTED_MODULE_1___default.a.import('formats/link');
        Link.sanitize = function (url) {
            if (url.indexOf("http") <= -1) {
                url = "https://" + url;
            }
            return url;
        };
        quill__WEBPACK_IMPORTED_MODULE_1___default.a.register('modules/autoLink', _content_applications_quill_quillAutolinks__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
    QuillInitializeServiceService.ɵfac = function QuillInitializeServiceService_Factory(t) { return new (t || QuillInitializeServiceService)(); };
    QuillInitializeServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuillInitializeServiceService, factory: QuillInitializeServiceService.ɵfac, providedIn: 'root' });
    return QuillInitializeServiceService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuillInitializeServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "n1uN":
/*!************************************************************!*\
  !*** ./src/app/_layout/customizer/customizer.component.ts ***!
  \************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
















function CustomizerComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Layouts");
} }
function CustomizerComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_ng_template_28_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleFixMenu($event); })("ngModelChange", function CustomizerComponent_ng_template_28_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.isCollapsedMenu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Collapsed Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_28_Template_input_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.toggleLayout("fixed"); })("ngModelChange", function CustomizerComponent_ng_template_28_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.isfixChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fixed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_28_Template_input_ngModelChange_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toggleLayout("boxed"); })("ngModelChange", function CustomizerComponent_ng_template_28_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.isboxChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Boxed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_ng_template_28_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.setLayout("static", $event); })("ngModelChange", function CustomizerComponent_ng_template_28_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.isStaticLayout = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Static Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1._themeSettingsConfig.menu == "collapse")("ngModel", ctx_r1.isCollapsedMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isfixChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isboxChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.isStaticLayout);
} }
function CustomizerComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Navigation");
} }
function CustomizerComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_31_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.isRightSideIcons = $event; })("change", function CustomizerComponent_ng_template_31_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.setNavigation("menu-icon-right", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Right Side Icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_31_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.isBorderedNavigation = $event; })("change", function CustomizerComponent_ng_template_31_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.setNavigation("menu-bordered", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bordered Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_31_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.isFlippedNavigation = $event; })("change", function CustomizerComponent_ng_template_31_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.setNavigation("menu-flipped", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Flipped Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_31_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.isCollapsibleNavigation = $event; })("change", function CustomizerComponent_ng_template_31_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.setNavigation("menu-collapsible", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Collapsible Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_31_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.isStaticNavigation = $event; })("change", function CustomizerComponent_ng_template_31_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.setNavigation("menu-static", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Static Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.isRightSideIcons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.isBorderedNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.isFlippedNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.isCollapsibleNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.isStaticNavigation);
} }
function CustomizerComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Navbar");
} }
function CustomizerComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_34_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.isStaticTop = $event; })("change", function CustomizerComponent_ng_template_34_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.setNavbar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Static Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isStaticTop);
} }
function CustomizerComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Semi Dark");
} }
function CustomizerComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.setColor("bg-default"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_label_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.setColor("bg-default"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_input_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.setColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_label_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.setColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_input_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.setColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_label_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.setColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.setColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_label_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.setColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_input_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.setColor("bg-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_label_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.setColor("bg-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_input_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.setColor("bg-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_label_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.setColor("bg-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_input_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.setColor("bg-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_44_Template_label_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.setColor("bg-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Semi Light");
} }
function CustomizerComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Solid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.setColor("bg-blue-grey"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.setColor("bg-blue-grey"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.setColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.setColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.setColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.setColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.setColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.setColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.setColor("bg-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.setColor("bg-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.setColor("bg-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.setColor("bg-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.setColor("bg-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.setColor("bg-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.setColor("bg-gradient-x-grey-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.setColor("bg-gradient-x-grey-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.setColor("bg-gradient-x-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.setColor("bg-gradient-x-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.setColor("bg-gradient-x-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.setColor("bg-gradient-x-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.setColor("bg-gradient-x-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.setColor("bg-gradient-x-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.setColor("bg-gradient-x-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.setColor("bg-gradient-x-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.setColor("bg-gradient-x-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.setColor("bg-gradient-x-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_input_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.setColor("bg-gradient-x-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_47_Template_label_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.setColor("bg-gradient-x-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dark");
} }
function CustomizerComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Solid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.setColor("bg-blue-grey"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.setColor("bg-blue-grey"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.setColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.setColor("bg-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.setColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.setColor("bg-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.setColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.setColor("bg-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.setColor("bg-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.setColor("bg-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.setColor("bg-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.setColor("bg-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.setColor("bg-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.setColor("bg-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.setColor("bg-gradient-x-grey-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.setColor("bg-gradient-x-grey-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.setColor("bg-gradient-x-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.setColor("bg-gradient-x-primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.setColor("bg-gradient-x-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.setColor("bg-gradient-x-danger"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.setColor("bg-gradient-x-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.setColor("bg-gradient-x-success"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.setColor("bg-gradient-x-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.setColor("bg-gradient-x-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.setColor("bg-gradient-x-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.setColor("bg-gradient-x-cyan"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_input_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.setColor("bg-gradient-x-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_50_Template_label_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.setColor("bg-gradient-x-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizerComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Light");
} }
function CustomizerComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.setColor("bg-blue-grey bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_label_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.setColor("bg-blue-grey bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.setColor("bg-primary bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_label_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.setColor("bg-primary bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.setColor("bg-danger bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_label_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.setColor("bg-danger bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_input_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.setColor("bg-success bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_label_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.setColor("bg-success bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_input_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.setColor("bg-blue bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_label_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.setColor("bg-blue bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_input_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.setColor("bg-cyan bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_label_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.setColor("bg-cyan bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_input_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r123.setColor("bg-pink bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_53_Template_label_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.setColor("bg-pink bg-lighten-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var colors = __webpack_require__(/*! ../../../assets/data/customizer/customizerColor.json */ "cveO");
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(_renderer, document, navbarService, _themeSettingsService, _menuSettingsService) {
        this._renderer = _renderer;
        this.document = document;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.isCollapsedMenu = false;
        this.isfixChecked = false;
        this.isboxChecked = false;
        this.isStaticLayout = false;
        this.isRightSideIcons = false;
        this.isBorderedNavigation = false;
        this.isFlippedNavigation = false;
        this.isCollapsibleNavigation = false;
        this.isStaticNavigation = false;
        this.isStaticTop = false;
        this.config = { wheelPropagation: false };
        this.collapsed = true;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeCustomizerConfig = config;
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuCustomizerConfig = config;
        });
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
    };
    CustomizerComponent.prototype.toggleCustomizer = function (event) {
        var element = document.getElementById('customizer');
        if (element && element.classList.contains('open')) {
            this._renderer.removeClass(element, 'open');
        }
        else {
            this._renderer.addClass(element, 'open');
        }
    };
    CustomizerComponent.prototype.setLayout = function (layout, e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var mainMenu = document.getElementsByClassName('main-menu');
        if (layout === 'static' && e.currentTarget.checked === true) {
            this.staticLayout(e);
        }
        else if (layout === 'static' && e.currentTarget.checked === false) {
            this._themeSettingsConfig.layout.pattern = '';
            this._renderer.removeClass(headerNavbar.item(0), 'navbar-static-top');
            this._renderer.removeClass(footer, 'footer-static');
            this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.addClass(mainMenu.item(0), 'menu-fixed');
            this.isStaticLayout = false;
        }
    };
    CustomizerComponent.prototype.toggleFixMenu = function (e) {
        var toggleIcon = document.getElementsByClassName('toggle-icon');
        if (this.document.body.classList.contains('menu-expanded') && e.currentTarget.checked === true) {
            this._themeCustomizerConfig.navbar = 'collapse';
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            this._renderer.removeClass(toggleIcon.item(0), 'ft-toggle-right');
            this._renderer.addClass(toggleIcon.item(0), 'ft-toggle-left');
            this.isCollapsedMenu = true;
        }
        else {
            this._themeCustomizerConfig.navbar = 'expand';
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            this._renderer.removeClass(toggleIcon.item(0), 'ft-toggle-left');
            this._renderer.addClass(toggleIcon.item(0), 'ft-toggle-right');
            this.isCollapsedMenu = false;
        }
        setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        this.resetOpenMenu();
    };
    CustomizerComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuCustomizerConfig.vertical_menu.items.length; i++) {
            var menu = this._menuCustomizerConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    CustomizerComponent.prototype.changeNavbarFontColor = function ($event) {
        var headerElement = document.getElementsByClassName('header-navbar');
        if ($event.nextId === 'semi-dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
            this._themeCustomizerConfig.colorTheme = 'semi-dark';
        }
        else if ($event.nextId === 'semi-light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
            this._themeCustomizerConfig.colorTheme = 'semi-light';
        }
        else if ($event.nextId === 'dark') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-dark');
            this._themeCustomizerConfig.colorTheme = 'dark';
        }
        else if ($event.nextId === 'light') {
            this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
            this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
            this._renderer.addClass(headerElement.item(0), 'navbar-light');
            this._themeCustomizerConfig.colorTheme = 'light';
        }
        this._themeSettingsService.config = {
            color: ''
        };
    };
    CustomizerComponent.prototype.setMenuColor = function (colorClass, event) {
        var darkMenuButton = document.getElementById('dark-menu');
        var lightMenuButton = document.getElementById('light-menu');
        if (event.currentTarget.className === 'btn btn-outline-info _dark') {
            this._renderer.removeClass(lightMenuButton, 'active');
            this._renderer.addClass(darkMenuButton, 'active');
        }
        else if (event.currentTarget.className === 'btn btn-outline-info _light') {
            this._renderer.removeClass(darkMenuButton, 'active');
            this._renderer.addClass(lightMenuButton, 'active');
        }
        this._themeSettingsService.config = {
            menuColor: colorClass,
        };
    };
    CustomizerComponent.prototype.setNavigation = function (navigationClass, event) {
        var navigationElement = document.getElementById('main-menu');
        var element = document.getElementById('customizer');
        if (event.target.checked === true && navigationClass !== 'menu-collapsible') {
            this._themeSettingsService.config = {
                navigation: navigationClass
            };
            if (navigationClass === 'menu-flipped') {
                this._renderer.removeClass(element, 'open');
            }
            else if (navigationClass === 'menu-static') {
                this._renderer.removeClass(navigationElement, 'menu-fixed');
            }
        }
        else if (event.target.checked === false && navigationClass !== 'menu-collapsible') {
            this._themeSettingsConfig.navigation = src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].NAVIGATION_TYPE_ACCORDATION;
            this._renderer.removeClass(navigationElement, navigationClass);
            this._renderer.removeClass(document.body, navigationClass);
            if (navigationClass === 'menu-static') {
                this._renderer.addClass(navigationElement, 'menu-fixed');
            }
        }
        if (event.target.checked === true && navigationClass === 'menu-collapsible') {
            this._themeSettingsConfig.navigation = src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].NAVIGATION_TYPE_ACCORDATION;
            this._renderer.removeClass(navigationElement, navigationClass);
        }
        else if (event.target.checked === false && navigationClass === 'menu-collapsible') {
            this._themeSettingsService.config = {
                navigation: navigationClass
            };
        }
        if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === true) {
            this.isRightSideIcons = true;
        }
        else if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === false) {
            this.isRightSideIcons = false;
        }
        if (navigationClass === 'menu-bordered' && event.currentTarget.checked === true) {
            this.isBorderedNavigation = true;
        }
        else if (navigationClass === 'menu-bordered' && event.currentTarget.checked === false) {
            this.isBorderedNavigation = false;
        }
        if (navigationClass === 'menu-flipped' && event.currentTarget.checked === true) {
            this.isFlippedNavigation = true;
        }
        else if (navigationClass === 'menu-flipped' && event.currentTarget.checked === false) {
            this.isFlippedNavigation = false;
        }
        if (navigationClass === 'menu-collapsible' && event.currentTarget.checked === true) {
            this.isCollapsibleNavigation = true;
        }
        else if (navigationClass === 'menu-collapsible' && event.currentTarget.checked === false) {
            this.isCollapsibleNavigation = false;
        }
        if (navigationClass === 'menu-static' && event.currentTarget.checked === true) {
            this.isStaticNavigation = true;
        }
        else if (navigationClass === 'menu-static' && event.currentTarget.checked === false) {
            this.isStaticNavigation = false;
        }
    };
    CustomizerComponent.prototype.setNavbar = function (event) {
        var navbarElement = document.getElementsByClassName('header-navbar');
        var navigationElement = document.getElementById('main-menu');
        if (event.target.checked === true) {
            this._renderer.removeClass(document.body, 'fixed-navbar');
            this._renderer.removeClass(navbarElement.item(0), 'fixed-top');
            this._renderer.removeClass(navigationElement, 'menu-fixed');
            this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
            this._renderer.addClass(navigationElement, 'menu-static');
            this.isStaticTop = true;
        }
        else if (event.target.checked === false) {
            this._renderer.removeClass(navbarElement.item(0), 'navbar-static-top');
            this._renderer.removeClass(navigationElement, 'menu-static');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.addClass(navbarElement.item(0), 'fixed-top');
            this._renderer.addClass(navigationElement, 'menu-fixed');
            this.isStaticTop = false;
        }
    };
    CustomizerComponent.prototype.setColor = function (colorClass) {
        for (var i = 0; i <= colors.colorArray.length; i++) {
            if (colorClass === colors.colorArray[i].cssClass) {
                this.selectColorClass = colorClass;
                break;
            }
        }
        this._themeSettingsService.config = {
            color: this.selectColorClass
        };
    };
    CustomizerComponent.prototype.toggleLayout = function (layout) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        if (layout === 'boxed' && this.isboxChecked === false) {
            this.boxedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'boxed' && this.isboxChecked === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'container');
            this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
            this._renderer.removeClass(document.body, 'boxed-layout');
            this._renderer.removeClass(document.body, 'container');
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
            this._themeSettingsConfig.layout.pattern = '';
        }
        else if (layout === 'fixed' && this.isfixChecked === false) {
            this.fixedLayout();
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
        else if (layout === 'fixed' && this.isfixChecked === true) {
            this._renderer.removeClass(footer, 'fixed-bottom');
            this._themeSettingsConfig.layout.pattern = '';
            setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
        }
    };
    CustomizerComponent.prototype.fixedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        this._renderer.removeClass(headerNavbar.item(0), 'container');
        this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.removeClass(document.body, 'boxed-layout');
        this._renderer.removeClass(document.body, 'container');
        this._renderer.addClass(footer, 'fixed-bottom');
        if (this.isStaticLayout === true) {
            this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.addClass(document.body, 'fixed-navbar');
            this._renderer.removeClass(footer, 'fixed-bottom');
        }
        this.isfixChecked = true;
        this.isboxChecked = false;
        this._themeSettingsConfig.layout.pattern = 'fixed';
    };
    CustomizerComponent.prototype.boxedLayout = function () {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this._renderer.addClass(headerNavbar.item(0), 'container');
        this._renderer.addClass(headerNavbar.item(0), 'boxed-layout');
        this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
        this._renderer.addClass(document.body, 'boxed-layout');
        this._renderer.addClass(document.body, 'container');
        if (this.isStaticLayout === true) {
            this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
            this._renderer.removeClass(document.body, 'fixed-navbar');
        }
        this.isboxChecked = true;
        this.isfixChecked = false;
        this._themeSettingsConfig.layout.pattern = 'boxed';
    };
    CustomizerComponent.prototype.staticLayout = function (e) {
        var footer = document.getElementById('footer');
        var headerNavbar = document.getElementsByClassName('header-navbar');
        var mainMenu = document.getElementsByClassName('main-menu');
        this._renderer.removeClass(document.body, 'fixed-navbar');
        this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
        this._renderer.removeClass(mainMenu.item(0), 'menu-fixed');
        this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
        this._renderer.addClass(footer, 'footer-static');
        this._renderer.removeClass(footer, 'fixed-bottom');
        this.isStaticLayout = true;
        this._themeSettingsConfig.layout.pattern = 'static';
    };
    CustomizerComponent.prototype.onResize = function () {
        if (this.document.body.classList.contains('menu-expanded')) {
            this.collapsed = false;
        }
        else {
            this.collapsed = true;
        }
    };
    CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) { return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"])); };
    CustomizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizerComponent, selectors: [["app-customizer"]], viewQuery: function CustomizerComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, hostBindings: function CustomizerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CustomizerComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 54, vars: 1, consts: [["id", "customizer", 1, "customizer", "border-left-blue-grey", "border-left-lighten-4", "d-none", "d-xl-block"], [1, "customizer-close", 3, "click"], [1, "feather", "ft-x", "font-medium-3"], [1, "customizer-toggle", "bg-danger", "box-shadow-3", 3, "click"], [1, "feather", "ft-settings", "font-medium-3", "spinner", "white"], ["fxFlex", "auto", 1, "customizer-content", "p-2", 3, "perfectScrollbar"], [1, "text-uppercase", "mb-0"], [1, "mt-1", "mb-1", "text-bold-500"], [1, "form-group"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "customizer-sidebar-options"], ["type", "button", "data-sidebar", "menu-light", "id", "light-menu", 1, "btn", "btn-outline-info", "_light", 3, "click"], ["type", "button", "data-sidebar", "menu-dark", "id", "dark-menu", 1, "btn", "btn-outline-info", "_dark", "active", 3, "click"], [1, "mt-1", "text-bold-500"], [1, "nav", "nav-tabs", "nav-underline", "nav-justified", "layout-options", "tabsborder"], [1, "col-lg-12", "layout_space"], [1, "ngtab"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "nav", "nav-tabs", "nav-underline", "nav-justified", "color-options", "tabsborder"], [3, "tabChange"], ["id", "semi-dark"], ["ngbTabContent", "", "class", "px-1"], ["id", "semi-light"], ["id", "dark"], ["id", "light"], ["role", "tabpanel", "id", "tabIcon21", "aria-expanded", "true", "aria-labelledby", "baseIcon-tab21", 1, "tab-panel", "active", "px-1", "pt-1"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "collapsed-sidebar", "id", "collapsed-sidebar", 1, "custom-control-input", 3, "checked", "ngModel", "change", "ngModelChange"], ["for", "collapsed-sidebar", 1, "custom-control-label"], ["type", "checkbox", "name", "fixed-layout", "id", "fixed-layout", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "fixed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "static-layout", "id", "static-layout", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["for", "static-layout", 1, "custom-control-label"], ["id", "tabIcon22", "aria-labelledby", "baseIcon-tab22", 1, "tab-panel", "px-1", "pt-1"], ["type", "checkbox", "name", "right-side-icons", "id", "right-side-icons", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "right-side-icons", 1, "custom-control-label"], ["type", "checkbox", "name", "bordered-navigation", "id", "bordered-navigation", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "bordered-navigation", 1, "custom-control-label"], ["type", "checkbox", "name", "flipped-navigation", "id", "flipped-navigation", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "flipped-navigation", 1, "custom-control-label"], ["type", "checkbox", "name", "collapsible-navigation", "id", "collapsible-navigation", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "collapsible-navigation", 1, "custom-control-label"], ["type", "checkbox", "name", "static-navigation", "id", "static-navigation", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "static-navigation", 1, "custom-control-label"], ["id", "tabIcon23", "aria-labelledby", "baseIcon-tab23", 1, "tab-panel", "px-1", "pt-1"], ["type", "checkbox", "name", "navbar-static-top", "id", "navbar-static-top", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "navbar-static-top", 1, "custom-control-label"], [1, "row"], [1, "col-6"], [1, "custom-control", "custom-radio", "mb-1"], ["type", "radio", "name", "nav-sdark-clr", "checked", "", "id", "opt-default", 1, "custom-control-input", "bg-default", 3, "click"], ["for", "opt-default", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "opt-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "opt-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "opt-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "opt-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "opt-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "opt-pink", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "default", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "default", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "pink", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-grey-blue", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "bg-gradient-x-grey-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "bg-gradient-x-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "bg-gradient-x-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "bg-gradient-x-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "bg-gradient-x-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "bg-gradient-x-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "bg-gradient-x-pink", 1, "custom-control-label", 3, "click"], ["id", "clrOpt4", "aria-labelledby", "color-opt-4", 1, "tab-pane"], ["type", "radio", "name", "nav-light-clr", "id", "light-blue-grey", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "light-blue-grey", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "light-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "light-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "light-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "light-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "light-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "light-pink", 1, "custom-control-label", 3, "click"]], template: function CustomizerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_1_listener($event) { return ctx.toggleCustomizer($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_3_listener($event) { return ctx.toggleCustomizer($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Theme Customizer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customize & Preview in Real Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Menu Color Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_15_listener($event) { return ctx.setMenuColor("menu-light", $event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Light Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_17_listener($event) { return ctx.setMenuColor("menu-dark", $event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dark Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Layout Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CustomizerComponent_ng_template_27_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CustomizerComponent_ng_template_28_Template, 17, 5, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CustomizerComponent_ng_template_30_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CustomizerComponent_ng_template_31_Template, 21, 5, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ngb-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CustomizerComponent_ng_template_33_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CustomizerComponent_ng_template_34_Template, 5, 1, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Navigation Color Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngb-tabset", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function CustomizerComponent_Template_ngb_tabset_tabChange_41_listener($event) { return ctx.changeNavbarFontColor($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ngb-tab", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CustomizerComponent_ng_template_43_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CustomizerComponent_ng_template_44_Template, 30, 0, "ng-template", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngb-tab", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CustomizerComponent_ng_template_46_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CustomizerComponent_ng_template_47_Template, 63, 0, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ngb-tab", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CustomizerComponent_ng_template_49_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CustomizerComponent_ng_template_50_Template, 63, 0, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngb-tab", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CustomizerComponent_ng_template_52_Template, 1, 0, "ng-template", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CustomizerComponent_ng_template_53_Template, 29, 0, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], styles: [".tabsborder[_ngcontent-%COMP%]{\r\n    border-bottom: none !important;\r\n  }\r\n\r\n.h6[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .tab-content{\r\n  padding: 1rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .layout_space{\r\n  padding: 0%;\r\n}\r\n\r\n[_nghost-%COMP%]     .nav.nav-tabs.nav-underline .nav-item a.nav-link {\r\n  padding: 0.5rem 0rem;\r\n}\r\n\r\n[_nghost-%COMP%]     .btn-outline-info .active {\r\n  background: rgba(0, 0, 0, .05);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiY3VzdG9taXplci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnNib3JkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLmg2LCBoNiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubGF5b3V0X3NwYWNle1xyXG4gIHBhZGRpbmc6IDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5hdi5uYXYtdGFicy5uYXYtdW5kZXJsaW5lIC5uYXYtaXRlbSBhLm5hdi1saW5rIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vdXRsaW5lLWluZm8gLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */"] });
    return CustomizerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customizer',
                templateUrl: './customizer.component.html',
                styleUrls: ['./customizer.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] }, { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"] }, { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], { static: true }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "ofOD":
/*!*****************************************************!*\
  !*** ./src/app/content/partials/partials.module.ts ***!
  \*****************************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _general_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general/card/card.module */ "vj4e");






var PartialsModule = /** @class */ (function () {
    function PartialsModule() {
    }
    PartialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PartialsModule });
    PartialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PartialsModule_Factory(t) { return new (t || PartialsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ], _general_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CardModule"]] });
    return PartialsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PartialsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]], exports: [_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PartialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    _general_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CardModule"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "sD6o":
/*!****************************************************!*\
  !*** ./src/app/_layout/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../full-layout/full-layout.component */ "Ne4N");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");











function FooterComponent_footer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 2019 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PIXINVENT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hand-crafted & Made with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_footer_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 2019 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PIXINVENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hand-crafted & Made with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var FooterComponent = /** @class */ (function () {
    function FooterComponent(renderer, _renderer, router, _themeSettingsService) {
        var _this = this;
        this.renderer = renderer;
        this._renderer = _renderer;
        this.router = router;
        this._themeSettingsService = _themeSettingsService;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.router.events.subscribe(function (event) {
            var footerElement = document.getElementsByClassName('footer');
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (_this.router.url === '/email' && footerElement.item(0)) {
                    _this._renderer.removeClass(footerElement.item(0), 'footer-static');
                    _this.renderer.addClass(footerElement.item(0), 'fixed-bottom');
                }
                else if (footerElement.item(0)) {
                    _this._renderer.removeClass(footerElement.item(0), 'fixed-bottom');
                    _this.renderer.addClass(footerElement.item(0), 'footer-static');
                }
            }
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].MOBILE_RESPONSIVE_WIDTH;
        if ((this.router.url.indexOf('WithNavbar') >= 0) || (this.router.url.indexOf('Advanced') >= 0) ||
            (this.router.url.indexOf('searchPage') >= 0)) {
            this.showFooter = false;
            this.darkFooter = true;
            this.fixedFooter = false;
        }
        else if (this.router.url.indexOf('email') >= 0) {
            this.showFooter = false;
            this.darkFooter = false;
            this.fixedFooter = true;
        }
        else if (_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_5__["FullLayoutComponent"]) {
            this.showFooter = true;
            this.darkFooter = false;
            this.fixedFooter = false;
        }
        else {
            this.showFooter = true;
            this.darkFooter = false;
            this.fixedFooter = false;
        }
        if (isMobile) {
            this.hideMadeWithLove = true;
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
        });
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"])); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 2, consts: [["id", "footer", "class", "footer footer-static footer-light navbar-border navbar-shadow", 4, "ngIf"], ["id", "footer", "class", "footer fixed-bottom footer-dark navbar-border navbar-shadow", 4, "ngIf"], ["id", "footer", 1, "footer", "footer-static", "footer-light", "navbar-border", "navbar-shadow"], [1, "clearfix", "blue-grey", "lighten-2", "text-sm-center", "mb-0", "px-2"], [1, "float-md-left", "d-block", "d-md-inline-block"], ["href", "https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent", "target", "_blank", 1, "text-bold-800", "grey", "darken-2", 3, "routerLink"], [1, "float-md-right", "d-block", "d-md-inline-block", "d-none", "d-lg-block"], [1, "feather", "ft-heart", "pink"], ["id", "scroll-top"], ["id", "footer", 1, "footer", "fixed-bottom", "footer-dark", "navbar-border", "navbar-shadow"], [1, "float-md-right", "d-none", "d-lg-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 10, 0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_footer_1_Template, 10, 0, "footer", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showFooter);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"] }]; }, null); })();


/***/ }),

/***/ "tqKT":
/*!********************************************************************!*\
  !*** ./src/app/_layout/private-layout/private-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: PrivateLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateLayoutComponent", function() { return PrivateLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "ARm4");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/app.constants */ "2iER");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/navbar.service */ "UDOh");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation/navigation.component */ "jLIj");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../footer/footer.component */ "sD6o");
















var PrivateLayoutComponent = /** @class */ (function () {
    function PrivateLayoutComponent(renderer, document, router, navbarService, _themeSettingsService, deviceService) {
        var _this = this;
        this.renderer = renderer;
        this.document = document;
        this.router = router;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this.deviceService = deviceService;
        this.deviceInfo = null;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                // Hide loading indicator
                if (_this.router.url === '/chats' || _this.router.url === '/chats/static-chat') {
                    _this.renderer.addClass(document.body, 'chat-application');
                }
                else {
                    _this.renderer.removeClass(document.body, 'chat-application');
                }
                if (_this.router.url === '/email') {
                    _this.renderer.addClass(document.body, 'email-application');
                }
                else {
                    _this.renderer.removeClass(document.body, 'email-application');
                }
                if (_this.router.url === '/contacts') {
                    _this.renderer.addClass(document.body, 'app-contacts');
                }
                else {
                    _this.renderer.removeClass(document.body, 'app-contacts');
                }
                if (_this.router.url === '/todos') {
                    _this.renderer.addClass(document.body, 'todo');
                }
                else {
                    _this.renderer.removeClass(document.body, 'todo');
                }
                if (_this.router.url === '/todo-app') {
                    _this.renderer.addClass(document.body, 'todo-application');
                }
                else {
                    _this.renderer.removeClass(document.body, 'todo-application');
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationError"]) {
                // Hide loading indicator
            }
        });
    }
    PrivateLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.removeClass(document.body, 'bg-full-screen-image');
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            if (localStorage.getItem('currentLayoutStyle')) {
                _this._themeSettingsConfig.layout.style = localStorage.getItem('currentLayoutStyle');
            }
        });
        this.deviceInfo = this.deviceService.getDeviceInfo();
        var isMobile = this.deviceService.isMobile();
        this.handleBody(isMobile);
        this.handleCollapsibleMenu();
    };
    PrivateLayoutComponent.prototype.handleBody = function (isMobile) {
        var _self = this;
        if (this._themeSettingsConfig.layout.style === 'vertical') {
            _self.renderer.setAttribute(document.body, 'data-menu', 'vertical-menu-modern');
        }
        else {
            _self.renderer.setAttribute(document.body, 'data-menu', 'horizontal-menu-modern');
        }
        var currentBodyClassList = [];
        this.layout = this._themeSettingsConfig.layout.style;
        this.customizer = this._themeSettingsConfig.customizer;
        this.buybutton = this._themeSettingsConfig.buybutton;
        // Vertical resposive view
        if (this._themeSettingsConfig.layout.style === 'vertical' &&
            window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            var previosBodyClassList = [].slice.call(document.body.classList);
            previosBodyClassList.forEach(function (c) {
                _self.renderer.removeClass(document.body, c);
            });
            if (this._themeSettingsConfig.layout.style === 'vertical') {
                currentBodyClassList = ['vertical-layout', 'vertical-overlay-menu', '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
                if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                    currentBodyClassList.push('fixed-navbar');
                }
            }
            else {
                currentBodyClassList = ['vertical-layout', '2-columns', 'vertical-overlay-menu', 'pace-done', 'menu-hide'];
            }
            if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === '') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                this.renderer.addClass(document.body, 'boxed-layout');
                this.renderer.addClass(document.body, 'container');
                this.renderer.addClass(document.body, 'fixed-navbar');
            }
            // Horizontal resposive view
        }
        else if (this._themeSettingsConfig.layout.style === 'horizontal' &&
            window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
            var previosBodyClassList = [].slice.call(document.body.classList);
            previosBodyClassList.forEach(function (c) {
                _self.renderer.removeClass(document.body, c);
            });
            currentBodyClassList = ['horizontal-layout', 'horizontal-menu', '2-columns', 'pace-done',
                'fixed-navbar', 'menu-hide'];
            if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === '') {
                currentBodyClassList.push('fixed-navbar');
            }
            if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                this.renderer.addClass(document.body, 'boxed-layout');
                this.renderer.addClass(document.body, 'container');
                this.renderer.addClass(document.body, 'fixed-navbar');
            }
            // Normal view
        }
        else {
            var previosBodyClassList = [].slice.call(document.body.classList);
            var callapseOrExpanded_1 = '';
            previosBodyClassList.forEach(function (c) {
                if (c === 'menu-collapsed') {
                    callapseOrExpanded_1 = 'menu-collapsed';
                }
                else if (c === 'menu-expanded') {
                    callapseOrExpanded_1 = 'menu-expanded';
                }
                _self.renderer.removeClass(document.body, c);
            });
            if (this._themeSettingsConfig.layout.style === 'vertical') {
                if (callapseOrExpanded_1 === '') {
                    var toggleIcon = document.getElementsByClassName('toggle-icon');
                    if (toggleIcon.item && toggleIcon.item(0) &&
                        toggleIcon.item(0).classList.contains('ft-toggle-right')) {
                        callapseOrExpanded_1 = 'menu-expanded';
                    }
                    else {
                        callapseOrExpanded_1 = 'menu-collapsed';
                    }
                }
                // callapseOrExpanded = callapseOrExpanded !== '' ? callapseOrExpanded : 'menu-collapsed';
                currentBodyClassList = ['vertical-layout', 'vertical-menu-modern', '2-columns', 'pace-done', 'menu-close', callapseOrExpanded_1];
                if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                    currentBodyClassList.push('fixed-navbar');
                }
                if (this._themeSettingsConfig.layout.pattern === '') {
                    currentBodyClassList.push('fixed-navbar');
                }
                if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                    this.renderer.addClass(document.body, 'boxed-layout');
                    this.renderer.addClass(document.body, 'container');
                    this.renderer.addClass(document.body, 'fixed-navbar');
                }
            }
            else {
                currentBodyClassList = ['horizontal-layout', '2-columns', 'horizontal-menu'];
                if (window.innerWidth >= _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
                    currentBodyClassList.push('menu-expanded');
                }
                else {
                    currentBodyClassList.push('menu-collapsed');
                }
                if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                    this.renderer.addClass(document.body, 'boxed-layout');
                    this.renderer.addClass(document.body, 'container');
                }
            }
        }
        var footer = document.getElementById('footer');
        // if (this.router.url == '/chats') {
        // const footer = document.getElementById('footer');
        if (this.router.url === '/chats' || this.router.url === '/chats/static-chat') {
            currentBodyClassList.push('chat-application');
            // footer.classList.add('fixed-bottom');
        }
        else if (currentBodyClassList.includes('fixed-bottom')) {
            currentBodyClassList.push('chat-application');
            currentBodyClassList = currentBodyClassList.filter(function (item) { return item !== 'fixed-bottom'; });
            footer.classList.remove('fixed-bottom');
        }
        if (this.router.url === '/email') {
            currentBodyClassList.push('email-application');
            // footer.classList.add('fixed-bottom');
        }
        else if (currentBodyClassList.includes('fixed-bottom')) {
            currentBodyClassList.push('email-application');
            currentBodyClassList = currentBodyClassList.filter(function (item) { return item !== 'fixed-bottom'; });
            footer.classList.remove('fixed-bottom');
        }
        if (this.router.url === '/contacts') {
            currentBodyClassList.push('app-contacts');
        }
        if (this.router.url === '/todos') {
            currentBodyClassList.push('todo');
        }
        if (this.router.url === '/todo-app') {
            currentBodyClassList.push('todo-application');
        }
        currentBodyClassList.forEach(function (c) {
            _self.renderer.addClass(document.body, c);
        });
        this.handleFullScreen();
    };
    PrivateLayoutComponent.prototype.handleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (window.innerWidth === screen.width && window.innerHeight === screen.height && toggleIcon.item(0)) {
            this.renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this.renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0)) {
            this.renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this.renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    PrivateLayoutComponent.prototype.handleCollapsibleMenu = function () {
        if (this._themeSettingsConfig.menu === 'collapse') {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
        }
    };
    PrivateLayoutComponent.prototype.onResize = function (event) {
        var menuClose = document.body.getElementsByClassName('menu-close');
        var toggle = document.getElementsByClassName('content-overlay');
        var sidenavOverlay = document.getElementsByClassName('sidenav-overlay');
        var emailMenu = document.getElementsByClassName('email-app-menu');
        var toggleIcon = document.getElementById('sidebar-left');
        if (event.target.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.handleBody(true);
            if (menuClose) {
                this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
                this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
            }
        }
        else {
            this.handleBody(false);
        }
        if (toggle && (this.router.url === '/chats' || this.router.url === '/static-chat' ||
            this.router.url === '/todos' || this.router.url === '/contacts') &&
            event.target.innerWidth > _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.renderer.removeClass(toggle.item(0), 'show');
            this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
            this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
            this.renderer.removeClass(toggleIcon, 'show');
        }
        if ((toggle || sidenavOverlay) && this.router.url === '/email' && event.target.innerWidth > 767) {
            this.renderer.removeClass(toggle.item(0), 'show');
            this.renderer.removeClass(emailMenu.item(0), 'show');
            this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
            this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
        }
    };
    PrivateLayoutComponent.prototype.rightbar = function (event) {
        var toggle = document.getElementById('sidenav-overlay');
        if (event.currentTarget.className === 'sidenav-overlay d-block') {
            this.renderer.removeClass(toggle, 'd-block');
            this.document.body.classList.remove('menu-open');
            this.document.body.classList.add('menu-close');
            this.renderer.addClass(toggle, 'd-none');
        }
        else if (event.currentTarget.className === 'sidenav-overlay d-none') {
            this.renderer.removeClass(toggle, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this.renderer.addClass(toggle, 'd-block');
        }
    };
    PrivateLayoutComponent.ɵfac = function PrivateLayoutComponent_Factory(t) { return new (t || PrivateLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"])); };
    PrivateLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivateLayoutComponent, selectors: [["app-private-layout"]], hostBindings: function PrivateLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PrivateLayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 5, vars: 0, consts: [[3, "resize"], ["id", "sidenav-overlay", 1, "sidenav-overlay", "d-none", 3, "click"]], template: function PrivateLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PrivateLayoutComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateLayoutComponent_Template_div_click_3_listener($event) { return ctx.rightbar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YXRlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"] });
    return PrivateLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-private-layout',
                templateUrl: './private-layout.component.html',
                styleUrls: ['./private-layout.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__["NavbarService"] }, { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingsService"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "vj4e":
/*!**************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.module.ts ***!
  \**************************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../partials/general/match-height/match-height.module */ "jT46");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.component */ "FhuM");
/* harmony import */ var src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_directives/card.directive */ "+kQa");






var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CardModule });
    CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__["MatchHeightModule"]
            ]] });
    return CardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_4__["CardDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__["MatchHeightModule"]], exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__["MatchHeightModule"]
                ],
                declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_4__["CardDirective"]],
                exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_api/user/user.service */ "wsei");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../social-signin/social-signin.component */ "g+q+");














function LoginComponent_div_0_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El nombre de usuario es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_0_div_26_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
} }
function LoginComponent_div_0_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La contrase\u00F1a es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_0_div_31_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
} }
function LoginComponent_div_0_i_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 39);
} }
function LoginComponent_div_0_i_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 40);
} }
var _c0 = function (a0) { return { "is-invalid": a0 }; };
var _c1 = function () { return ["/register"]; };
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ingresa con");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-social-signin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "O usando email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.tryLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "fieldset", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LoginComponent_div_0_div_26_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "fieldset", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginComponent_div_0_div_31_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_0_Template_div_click_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.addCheckbox($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "ins", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Recu\u00E9rdame");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00BFOlvidaste tu contrase\u00F1a?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, LoginComponent_div_0_i_44_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, LoginComponent_div_0_i_45_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Iniciar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u00BFNo tienes cuenta?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Reg\u00EDstrate");
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
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1));
} }
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, alertService, authService, renderer, userService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.renderer = renderer;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.isPageLoaded = false;
        this.route.queryParams.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'];
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['palominos90@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['123456', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rememberMe: false
        });
        // Remember Me
        if (localStorage.getItem('remember')) {
            console.log("localStorage.getItem('remember')", localStorage.getItem('remember'));
            this.renderer.removeClass(document.body, 'bg-full-screen-image');
            localStorage.removeItem('currentLayoutStyle');
            var returnUrl = this.onLoginRedirect();
            this.router.navigate([returnUrl]);
        }
        else if (localStorage.getItem('currentUser')) {
            // Force logout on login if not remember me
            this.authService.doLogout();
            this.isPageLoaded = true;
        }
        else {
            this.isPageLoaded = true;
        }
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        var value = {
            email: this.f.email.value,
            password: this.f.password.value
        };
        this.authService.doLogin(value).then(function (res) {
            if (_this.loginForm.controls['rememberMe'] && _this.loginForm.controls['rememberMe'].value) {
                localStorage.setItem('remember', 'true');
            }
            else {
                localStorage.removeItem('remember');
            }
            //this.setUserInfoInStorage(res);
            _this.userService.getOneUser(res.user.uid).subscribe(function (user) {
                localStorage.setItem('dataCurrentUser', JSON.stringify(user));
                console.log("this.user: ", localStorage.getItem('currentUser2'));
                _this.setUserInStorage(res);
                localStorage.removeItem('currentLayoutStyle');
                var returnUrl = _this.onLoginRedirect();
                if (_this.returnUrl) {
                    returnUrl = _this.returnUrl;
                }
                _this.router.navigate([returnUrl]);
            });
        }, function (err) {
            _this.submitted = false;
            console.log(err.message);
            _this.alertService.error("La contraseña o el correo es inválido.");
        });
    };
    LoginComponent.prototype.addCheckbox = function (event) {
        var toggle = document.getElementById('icheckbox');
        if (event.currentTarget.className === 'icheckbox_square-blue') {
            this.renderer.addClass(toggle, 'checked');
        }
        else if (event.currentTarget.className === 'icheckbox_square-blue checked') {
            this.renderer.removeClass(toggle, 'checked');
        }
    };
    LoginComponent.prototype.setUserInfoInStorage = function (res) {
        this.userService.getOneUser(res.user.uid).subscribe(function (user) {
            localStorage.setItem('dataCurrentUser', JSON.stringify(user));
        });
    };
    LoginComponent.prototype.setUserInStorage = function (res) {
        //console.debug("res.user: " + JSON.stringify(res.user));
        if (res.user) {
            localStorage.setItem('currentUser', JSON.stringify(res.user));
        }
        else {
            localStorage.setItem('currentUser', JSON.stringify(res));
        }
    };
    LoginComponent.prototype.onLoginRedirect = function () {
        return '/dashboard/ecommerce';
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "app-content content", 4, "ngIf"], [1, "app-content", "content"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-1", "py-1", "m-0"], [1, "card-header", "border-0"], [1, "card-title", "text-center"], ["src", "assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-1"], [1, "card-body"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "formControlName", "email", "id", "user-name", "placeholder", "Nombre de usuario", "required", "", 1, "form-control", 3, "ngClass"], [1, "form-control-position"], [1, "la", "la-user"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "placeholder", "Contrase\u00F1a", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "la", "la-key"], [1, "form-group", "row"], [1, "col-md-6", "col-12", "text-center", "text-sm-left", "pr-0"], ["id", "icheckbox", 1, "icheckbox_square-blue", 2, "position", "relative", 3, "click"], ["type", "checkbox", "formControlName", "rememberMe", "name", "remember-me", "id", "remember-me", 1, "chk-remember", 2, "position", "absolute", "opacity", "0"], [1, "iCheck-helper", 2, "position", "absolute", "top", "0%", "left", "0%", "display", "block", "width", "100%", "height", "100%", "margin", "0px", "padding", "0px", "background", "rgb(255, 255, 255)", "border", "0px", "opacity", "0"], ["for", "remember-me", 1, "lb-remember"], [1, "col-md-6", "col-12", "float-sm-left", "text-center", "text-sm-right"], ["href", "recover-password.html", 1, "card-link"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-block"], ["class", "fa fa-refresh fa-spin", 4, "ngIf"], ["class", "feather ft-unlock", 4, "ngIf"], [1, "btn", "btn-outline-danger", "btn-block", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"], [1, "fa", "fa-refresh", "fa-spin"], [1, "feather", "ft-unlock"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 54, 13, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPageLoaded);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_7__["SocialSigninComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".margin-left-5[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n}\r\n.terms[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n[_nghost-%COMP%]     .content .content-wrapper {\r\n    padding: 0!important;\r\n}\r\n[_nghost-%COMP%]     .btn-outline-twitter {\r\n    border: 1px solid #55acee!important;\r\n    color: #55acee !important;\r\n}\r\n[_nghost-%COMP%]     .icheckbox_square-blue, .iradio_square-blue[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 22px;\r\n    height: 22px;\r\n     background: url('blue.png') no-repeat;  \r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n[_nghost-%COMP%]     .icheckbox_square-blue {\r\n    background-position: 0 0;\r\n}\r\n[_nghost-%COMP%]     .lb-remember {\r\n    color: #2b335e;\r\n    padding-left: 3px;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n}\r\n[_nghost-%COMP%]     .icheckbox_square-blue.checked {\r\n    background-position: -48px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0tBQ1gscUNBQStEO0lBQ2hFLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1sZWZ0LTV7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi50ZXJtcyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50IC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZS10d2l0dGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NWFjZWUhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1NWFjZWUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmljaGVja2JveF9zcXVhcmUtYmx1ZSwgLmlyYWRpb19zcXVhcmUtYmx1ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYmx1ZS5wbmdcIikgbm8tcmVwZWF0OyAgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubGItcmVtZW1iZXIge1xyXG4gICAgY29sb3I6ICMyYjMzNWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmljaGVja2JveF9zcXVhcmUtYmx1ZS5jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7XHJcbn0iXX0= */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"] }]; }, null); })();


/***/ }),

/***/ "wW7e":
/*!******************************************************!*\
  !*** ./src/app/_services/application-api.service.ts ***!
  \******************************************************/
/*! exports provided: ApplicationApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationApiService", function() { return ApplicationApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ApplicationApiService = /** @class */ (function () {
    function ApplicationApiService(http) {
        this.http = http;
        this.apiBaseURL = 'assets/data';
        this.loadChatsDataURL = null;
        this.loadEmailDataURL = null;
        this.loadChatContactDataURL = null;
        this.loadChatsDataURL = this.apiBaseURL + "/application/chats.json";
        this.loadChatContactDataURL = this.apiBaseURL + "/application/chatcontact.json";
        this.loadEmailDataURL = this.apiBaseURL + "/application/email.json";
    }
    ApplicationApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // Error
            console.error('error:', error.error.message);
        }
        else {
            // Error
            console.error("Api server returned " + error.status + ", " +
                ("error body: " + error.error));
        }
        // throwError is observable
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Error has happened');
    };
    ApplicationApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApplicationApiService.prototype.getChatsData = function () {
        return this.http.get(this.loadChatsDataURL, httpOptions);
    };
    ApplicationApiService.prototype.getChatContactData = function () {
        return this.http.get(this.loadChatContactDataURL, httpOptions);
    };
    ApplicationApiService.prototype.getEmailData = function () {
        return this.http.get(this.loadEmailDataURL, httpOptions);
    };
    ApplicationApiService.ɵfac = function ApplicationApiService_Factory(t) { return new (t || ApplicationApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    ApplicationApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApplicationApiService, factory: ApplicationApiService.ɵfac, providedIn: 'root' });
    return ApplicationApiService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "wsei":
/*!*******************************************!*\
  !*** ./src/app/_api/user/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






var UserService = /** @class */ (function () {
    function UserService(firestore) {
        this.firestore = firestore;
        this.ref = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('users');
        this.usersCollection = firestore.collection('users');
        this.users = this.usersCollection.valueChanges();
    }
    UserService.prototype.getUsers = function () {
        return this.firestore.collection('users').snapshotChanges(); // use only for login.
    };
    UserService.prototype.getAllUsers = function () {
        return this.users = this.usersCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    UserService.prototype.getCurrentUser = function (userId) {
        return this.firestore.collection('users', function (ref) { return ref.where('uid', '==', userId); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    UserService.prototype.getOneUser = function (userId) {
        this.userDoc = this.firestore.doc("users/" + userId);
        return this.user = this.userDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    };
    UserService.prototype.createUser = function (user) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("users").doc(user.uid).set(user);
    };
    UserService.prototype.updateUser = function (user, id) {
        var currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
        console.log("usuario:", user);
        if (currentUser != null) {
            var currentUserInLocalStorage = JSON.parse(localStorage.getItem("currentUser"));
            currentUserInLocalStorage.displayName = user.name + " " + user.lastName;
            localStorage.setItem("currentUser", JSON.stringify(currentUserInLocalStorage));
            this.userDoc = this.firestore.doc("users/" + id);
            currentUser.updateProfile({
                displayName: user.name + " " + user.lastName
            });
            if (this.userDoc.update(user)) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    UserService.prototype.deleteUser = function (idUser) {
        this.userDoc = this.firestore.doc("users/" + idUser);
        this.userDoc.delete();
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "yYK4":
/*!***************************************************************!*\
  !*** ./src/app/_layout/header/vertical/vertical.component.ts ***!
  \***************************************************************/
/*! exports provided: VerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalComponent", function() { return VerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/navbar.service */ "UDOh");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



















function VerticalComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalComponent_a_22_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VerticalComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clickSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VerticalComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currentUser.displayName);
} }
function VerticalComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "John Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VerticalComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.currentUser.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VerticalComponent_img_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 45);
} }
var _c0 = function () { return ["/dashboard/ecommerce"]; };
var _c1 = function (a0, a1) { return { "ft-toggle-left": a0, "ft-toggle-right": a1 }; };
var _c2 = function (a0) { return { "open": a0 }; };
var _c3 = function () { return ["/user/user-profile"]; };
var docElmWithBrowsersFullScreenFunctions = document.documentElement;
var docWithBrowsersExitFunctions = document;
var VerticalComponent = /** @class */ (function () {
    function VerticalComponent(document, _renderer, navbarService, _themeSettingsService, _menuSettingsService, authService, router, elementRef) {
        this.document = document;
        this._renderer = _renderer;
        this.navbarService = navbarService;
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this.authService = authService;
        this.router = router;
        this.elementRef = elementRef;
        this.isMobile = false;
        this.showNavbar = false;
        this.config = { wheelPropagation: false };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    VerticalComponent.prototype.logout = function () {
        if (localStorage.getItem('currentUser')) {
            this.authService.doLogout().then(function (res) {
                window.location.href = '/login';
            }, function (err) {
                console.log(err);
            });
        }
    };
    VerticalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].MOBILE_RESPONSIVE_WIDTH;
        if (!this.isMobile) {
            this.showNavbar = true;
        }
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.info(this.currentUser);
        }
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        this.maximize = this._themeSettingsConfig.headerIcons.maximize;
        this.search = this._themeSettingsConfig.headerIcons.search;
        this.internationalization = this._themeSettingsConfig.headerIcons.internationalization;
        this.notification = this._themeSettingsConfig.headerIcons.notification;
        this.email = this._themeSettingsConfig.headerIcons.email;
    };
    VerticalComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    VerticalComponent.prototype.refreshView = function () {
        var iconElement = document.getElementsByClassName('toggle-icon');
        var menuColorElement = document.getElementsByClassName('main-menu');
        var navigationElement = document.getElementsByClassName('main-menu');
        var navbarElement = document.getElementsByClassName('header-navbar');
        var themeColorElement = document.getElementsByClassName('header-navbar');
        var element = document.getElementsByClassName('navbar-header');
        var boxelement = document.getElementById('customizer');
        if (iconElement) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(iconElement.item(0), 'white');
                this._renderer.addClass(iconElement.item(0), 'blue-grey');
                this._renderer.addClass(iconElement.item(0), 'darken-3');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(iconElement.item(0), 'white');
                this._renderer.removeClass(iconElement.item(0), 'blue-grey');
                this._renderer.removeClass(iconElement.item(0), 'darken-3');
            }
        }
        if (this._themeSettingsConfig.colorTheme === 'semi-light') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
            this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
            this.selectedHeaderNavBarClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'dark') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = '';
        }
        else if (this._themeSettingsConfig.colorTheme === 'light') {
            this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
            this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
        }
        if (menuColorElement) {
            if (this._themeSettingsConfig.menuColor === 'menu-dark') {
                this._renderer.removeClass(menuColorElement.item(0), 'menu-light');
                this._renderer.addClass(menuColorElement.item(0), 'menu-dark');
            }
            else if (this._themeSettingsConfig.menuColor === 'menu-light') {
                this._renderer.removeClass(menuColorElement.item(0), 'menu-dark');
                this._renderer.addClass(menuColorElement.item(0), 'menu-light');
            }
        }
        if (themeColorElement) {
            if (this._themeSettingsConfig.colorTheme === 'semi-light') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
                this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
            }
        }
        if (navigationElement) {
            if (this._themeSettingsConfig.navigation === 'menu-native-scroll') {
                this._renderer.addClass(navigationElement.item(0), 'menu-native-scroll');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-icon-right') {
                this._renderer.addClass(navigationElement.item(0), 'menu-icon-right');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-bordered') {
                this._renderer.addClass(navigationElement.item(0), 'menu-bordered');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-flipped') {
                this._renderer.addClass(document.body, 'menu-flipped');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-collapsible') {
                this._renderer.addClass(navigationElement.item(0), 'menu-collapsible');
            }
            else if (this._themeSettingsConfig.navigation === 'menu-static') {
                this._renderer.addClass(navigationElement.item(0), 'menu-static');
            }
        }
        if (navbarElement) {
            if (this._themeSettingsConfig.menu === 'navbar-static-top') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
                this._renderer.addClass(navigationElement.item(0), 'menu-static');
            }
        }
        if (navbarElement) {
            if (this._themeSettingsConfig.menu === 'semi-light') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-semi-light bg-gradient-x-grey-blue');
            }
            else if (this._themeSettingsConfig.menu === 'semi-dark') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-semi-dark');
            }
            else if (this._themeSettingsConfig.menu === 'dark') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-dark');
            }
            else if (this._themeSettingsConfig.menu === 'light') {
                this._renderer.addClass(navbarElement.item(0), 'navbar-light');
            }
        }
    };
    VerticalComponent.prototype.resetOpenMenu = function () {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu) {
                menu['isOpen'] = false;
                menu['isActive'] = false;
                menu['hover'] = false;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    menu['isOpen'] = false;
                    menu['isActive'] = false;
                    menu['hover'] = false;
                    menu.submenu.items[j]['isOpen'] = false;
                }
            }
        }
    };
    VerticalComponent.prototype.setOpenInNavbar = function (value) {
        for (var i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            var menu = this._menuSettingsConfig.vertical_menu.items[i];
            if (!menu.submenu &&
                menu.page === this.router.url) {
                menu['isOpen'] = value;
                menu['isActive'] = value;
            }
            else if (menu.submenu) {
                for (var j = 0; j < menu.submenu.items.length; j++) {
                    if (menu.submenu.items[j].page === this.router.url) {
                        menu['isOpen'] = value;
                        menu['isActive'] = value;
                        menu.submenu.items[j]['isOpen'] = value;
                        menu.submenu.items[j]['isActive'] = value;
                        break;
                    }
                }
            }
        }
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    VerticalComponent.prototype.mouseEnter = function (e) {
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        this.navbarService.setMouseInRegion(true);
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        // check if the left aside menu is fixed
        if (!navBar.classList.contains('expanded')) {
            this._renderer.addClass(navBar, 'expanded');
            this._renderer.addClass(mainMenu, 'expanded');
            this.resetOpenMenu();
            this.setOpenInNavbar(true);
        }
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    VerticalComponent.prototype.mouseLeave = function (event) {
        var _this = this;
        if (this.navbarService.isFixedMenu()) {
            return;
        }
        var _self = this;
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        if (navBar && navBar.classList.contains('expanded')) {
            this.insideTm = setTimeout(function () {
                if (!_self.navbarService.isMouseInRegion()) {
                    _this._renderer.removeClass(navBar, 'expanded');
                    _this._renderer.removeClass(mainMenu, 'expanded');
                    _this.resetOpenMenu();
                    _this.setOpenInNavbar(false);
                }
            }, 100);
        }
        this.navbarService.setMouseInRegion(false);
    };
    // example to update badge value dynamically from another component
    VerticalComponent.prototype.updateMenuBadgeValue = function () {
        for (var i = 0; i < this._menuSettingsConfig.items.length; i++) {
            if (this._menuSettingsConfig.items[i].badge) {
                this._menuSettingsConfig.items[i].badge.value = 19;
            }
        }
        this._menuSettingsService.config = this._menuSettingsConfig;
    };
    VerticalComponent.prototype.handleCollapseOfMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
            element.classList.remove('open');
            element.classList.remove('hover');
            element.classList.add('menu-collapsed-open');
        }
    };
    VerticalComponent.prototype.handleExpandOfMenu = function (element) {
        if (element.classList && element.classList.contains('has-sub') &&
            element.classList.contains('menu-collapsed-open')) {
            element.classList.remove('menu-collapsed-open');
            element.classList.add('open');
            element.classList.add('hover');
        }
    };
    VerticalComponent.prototype.toggleMenu = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var parent = target.parentElement;
        if (parent && parent.classList.contains('has-sub')) {
            this.openSubMenuUsingParent(parent);
        }
        else {
            var parentOfParent = parent.parentElement;
            this.openSubMenuUsingParent(parentOfParent);
        }
    };
    VerticalComponent.prototype.openSubMenuUsingParent = function (parent) {
        if (parent.classList && parent.classList.contains('has-sub') &&
            !parent.classList.contains('open')) {
            parent.classList.add('open');
        }
        else if (parent.classList && parent.classList.contains('has-sub') &&
            parent.classList.contains('open')) {
            parent.classList.remove('open');
        }
    };
    VerticalComponent.prototype.toggleFullScreen = function () {
        var toggleIcon = document.getElementsByClassName('ficon');
        if (toggleIcon.item(0).classList.contains('ft-maximize')) {
            this.openfullscreen();
            this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
        }
        else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
            this.closefullscreen();
            this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
            this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
        }
    };
    VerticalComponent.prototype.openfullscreen = function () {
        // Trigger fullscreen
        // tslint:disable-next-line: no-shadowed-variable
        var docElmWithBrowsersFullScreenFunctions = document.documentElement;
        if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
            docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
            docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
        }
        else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
            docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
        }
    };
    VerticalComponent.prototype.closefullscreen = function () {
        // tslint:disable-next-line: no-shadowed-variable
        var docWithBrowsersExitFunctions = document;
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            docWithBrowsersExitFunctions.exitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
            docWithBrowsersExitFunctions.mozCancelFullScreen();
        }
        else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
    };
    VerticalComponent.prototype.toggleFixMenu = function (e) {
        if (this.document.body.classList.contains('menu-expanded')) {
            // show the left aside menu
            this.navbarService.setFixedMenu(false);
            this.document.body.classList.remove('menu-expanded');
            this.document.body.classList.add('menu-collapsed');
            // Change switch icon
            this._themeSettingsConfig.menu = 'collapse';
        }
        else {
            this.navbarService.setFixedMenu(true);
            this.document.body.classList.remove('menu-collapsed');
            this.document.body.classList.add('menu-expanded');
            // Change switch icon
            this._themeSettingsConfig.menu = 'expand';
        }
        var navBar = this.document.getElementById('navbar-header');
        var mainMenu = this.document.getElementById('main-menu');
        this._renderer.addClass(navBar, 'expanded');
        this._renderer.addClass(mainMenu, 'expanded');
        setTimeout(function () { src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].fireRefreshEventOnWindow(); }, 300);
    };
    VerticalComponent.prototype.toggleNavigation = function (e) {
        var sidenav = document.getElementById('sidenav-overlay');
        var sidebarLeft = document.getElementById('sidebar-left') || document.getElementById('email-app-menu') ||
            document.getElementById('sidebar-todo');
        var contentOverlay = document.getElementById('content-overlay');
        if (this.document.body.classList.contains('menu-open') && (this.router.url === '/todos' || this.router.url === '/contacts' ||
            this.router.url === '/email' || this.router.url === '/chats' || this.router.url === '/chats/static-chat')) {
            this.document.body.classList.remove('menu-open');
            this._renderer.removeClass(sidenav, 'd-block');
            this._renderer.removeClass(contentOverlay, 'show');
            this.document.body.classList.add('menu-close');
            this._renderer.addClass(sidenav, 'd-none');
            this.showNavbar = false;
        }
        else if (this.document.body.classList.contains('menu-open')) {
            this.document.body.classList.remove('menu-open');
            this._renderer.removeClass(sidenav, 'd-block');
            this.document.body.classList.add('menu-close');
            this._renderer.addClass(sidenav, 'd-none');
            this.showNavbar = false;
        }
        else {
            this._renderer.removeClass(sidenav, 'd-none');
            this.document.body.classList.remove('menu-close');
            this.document.body.classList.add('menu-open');
            this._renderer.addClass(sidenav, 'd-block');
            this.showNavbar = false;
        }
        if (sidebarLeft) {
            this._renderer.removeClass(sidebarLeft, 'show');
        }
        if (contentOverlay) {
            this._renderer.removeClass(contentOverlay, 'show');
        }
    };
    VerticalComponent.prototype.toggleNavbar = function (e) {
        if (this.showNavbar) {
            this.showNavbar = false;
        }
        else {
            this.showNavbar = true;
        }
    };
    VerticalComponent.prototype.clickSearch = function () {
        if (this.isHeaderSearchOpen) {
            this.isHeaderSearchOpen = false;
        }
        else {
            this.isHeaderSearchOpen = true;
        }
    };
    VerticalComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            this.isMobile = true;
            this.showNavbar = false;
        }
        else {
            this.isMobile = false;
            this.showNavbar = true;
        }
    };
    VerticalComponent.ɵfac = function VerticalComponent_Factory(t) { return new (t || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    VerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerticalComponent, selectors: [["app-header-vertical"]], viewQuery: function VerticalComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarDirective"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, hostBindings: function VerticalComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function VerticalComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 44, vars: 21, consts: [[1, "header-navbar", "navbar-expand-md", "navbar", "navbar-with-menu", "navbar-without-dd-arrow", "fixed-top", "navbar-shadow", 3, "ngClass"], [1, "navbar-wrapper"], ["id", "navbar-header", 1, "navbar-header", 3, "ngClass", "mouseenter", "mouseleave"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mobile-menu", "d-lg-none", "mr-auto"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs11", 3, "click"], [1, "feather", "ft-menu", "font-large-1"], [1, "nav-item", "mr-auto"], ["routerLink", "/dashboard/sales", 1, "navbar-brand", 3, "routerLink"], ["src", "../../../../assets/images/logo/logo.png", "alt", "SoftApp logo", 1, "brand-logo", 2, "background-color", "aliceblue"], [1, "brand-text"], [1, "nav-item", "d-none", "d-md-block", "nav-toggle"], ["data-toggle", "collapse", 1, "nav-link", "modern-nav-toggle", "pr-0", 3, "routerLink", "click"], [1, "feather", "toggle-icon", "font-medium-3", "white", 3, "ngClass"], [1, "nav-item", "d-lg-none"], ["data-toggle", "collapse", "data-target", "#navbar-mobile", 1, "nav-link", "open-navbar-container", 3, "click"], [1, "la", "la-ellipsis-v"], [1, "navbar-container", "content", 3, "hidden"], ["id", "navbar-mobile", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "mr-auto", "float-left"], [1, "nav-item", "d-none", "d-md-block"], ["class", "nav-link nav-link-expand", 3, "routerLink", "click", 4, "ngIf"], [1, "nav-item", "nav-search"], ["class", "nav-link nav-link-search", 3, "routerLink", "click", 4, "ngIf"], [1, "search-input", 3, "ngClass"], ["type", "text", "placeholder", "Explore Modern...", 1, "input"], [1, "nav", "navbar-nav", "float-right"], ["ngbDropdown", "", 1, "dropdown-user", "nav-item"], ["ngbDropdownToggle", "", 1, "nav-link", "dropdown-user-link"], ["class", "mr-1 user-name text-bold-700", 4, "ngIf"], [1, "avatar", "avatar-online"], ["alt", "avatar", 3, "src", 4, "ngIf"], ["src", "../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar", 4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownProfileMenu", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], [1, "feather", "ft-user"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "feather", "ft-power"], [1, "nav-link", "nav-link-expand", 3, "routerLink", "click"], [1, "ficon", "feather", "ft-maximize"], [1, "nav-link", "nav-link-search", 3, "routerLink", "click"], [1, "ficon", "feather", "ft-search"], [1, "mr-1", "user-name", "text-bold-700"], ["alt", "avatar", 3, "src"], ["src", "../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar"]], template: function VerticalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function VerticalComponent_Template_div_mouseenter_2_listener($event) { return ctx.mouseEnter($event); })("mouseleave", function VerticalComponent_Template_div_mouseleave_2_listener($event) { return ctx.mouseLeave($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalComponent_Template_a_click_5_listener($event) { return ctx.toggleNavigation($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalComponent_Template_a_click_13_listener($event) { return ctx.toggleFixMenu($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalComponent_Template_a_click_16_listener($event) { return ctx.toggleNavbar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VerticalComponent_a_22_Template, 2, 0, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VerticalComponent_a_24_Template, 2, 0, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VerticalComponent_span_30_Template, 2, 1, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VerticalComponent_span_31_Template, 2, 0, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VerticalComponent_img_33_Template, 1, 1, "img", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, VerticalComponent_img_34_Template, 1, 0, "img", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Editar perfil ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalComponent_Template_a_click_41_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Cerrar sesi\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedHeaderNavBarClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedNavBarHeaderClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._themeSettingsConfig.brand.brand_name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c1, ctx._themeSettingsConfig.menu == "collapse", ctx._themeSettingsConfig.menu == "expand"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isMobile && !ctx.showNavbar);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maximize === "on");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search === "on");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, ctx.isHeaderSearchOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownMenu"]], styles: [".dropdown-menu-right[_ngcontent-%COMP%] {\r\n    right: 0;\r\n    left: auto !important;\r\n    top: auto !important;\r\n}\r\n\r\n.header-navbar[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.dropdown-user-link[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\r\n    margin-left: 0rem !important;\r\n}\r\n\r\n.border_bottom[_ngcontent-%COMP%] {\r\n    border-bottom: none !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .dropdown-item:active {\r\n    color: #fff !important;\r\n}\r\n\r\n@media only screen and (max-width: 991.98px) {\r\n  .ft-toggle-right[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .ft-toggle-left[_ngcontent-%COMP%] {\r\n        display: none !important;\r\n  }\r\n\r\n  .collapse[_ngcontent-%COMP%]:not(.show) {\r\n    display: unset !important;\r\n  }\r\n}\r\n\r\n.header-navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\r\n  padding-left: 11px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO1FBQ00sd0JBQXdCO0VBQzlCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoidmVydGljYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItbmF2YmFyIC5uYXZiYXItY29udGFpbmVyIHVsLm5hdiBsaSBhLmRyb3Bkb3duLXVzZXItbGluayAudXNlci1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXJfYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLmZ0LXRvZ2dsZS1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZnQtdG9nZ2xlLWxlZnQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb2xsYXBzZTpub3QoLnNob3cpIHtcclxuICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLW5hdmJhciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWJyYW5kIC5icmFuZC10ZXh0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDExcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    return VerticalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-vertical',
                templateUrl: './vertical.component.html',
                styleUrls: ['./vertical.component.css']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] }, { type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__["ThemeSettingsService"] }, { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__["MenuSettingsService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarDirective"], { static: true }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "z2wB":
/*!*****************************************************************************!*\
  !*** ./src/app/_layout/navigation/horizontalnav/horizontalnav.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HorizontalnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalnavComponent", function() { return HorizontalnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/theme-settings.service */ "+/8v");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../settings/menu-settings.service */ "erhg");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_helpers/app.constants */ "2iER");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");















var _c0 = function (a0) { return { "dropdown-item dropdown-toggle active": a0 }; };
function HorizontalnavComponent_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleMenu($event, child_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", child_r1.page != "null" ? child_r1.page : ctx_r2.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, child_r1.submenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", child_r1.submenu ? "dropdown" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r1.title);
} }
function HorizontalnavComponent_li_4_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_ul_2_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.toggleMenu($event, subchild_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", subchild_r9.page != "null" ? subchild_r9.page : ctx_r10.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subchild_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r9.title);
} }
function HorizontalnavComponent_li_4_ul_2_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_ul_2_li_1_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.toggleMenu($event, subchild_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", subchild_r9.page != "null" ? subchild_r9.page : ctx_r11.router.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subchild_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r9.title);
} }
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var subchild_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r25.toggleMenu($event, subchild_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", subchild_r22.page != "null" ? subchild_r22.page : ctx_r23.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r22.title);
} }
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); var subchild_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r32.toggleMenu($event, subchild_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", subchild_r30.page != "null" ? subchild_r30.page : ctx_r31.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subchild_r30.title);
} }
var _c1 = function (a0) { return { "active": a0 }; };
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_a_1_Template, 3, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, subchild_r30.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subchild_r30.event);
} }
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subchild_r22.submenu.items);
} }
var _c2 = function (a0, a1, a2) { return { "dropdown dropdown-submenu": a0, "dropdown-divider": a1, "active": a2 }; };
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_Template_li_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r37.mouseEnter($event); })("mouseleave", function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_Template_li_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r39.mouseLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_a_1_Template, 3, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c2, subchild_r22.submenu, subchild_r22.title == "horizontal-divider", subchild_r22.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-menu", subchild_r22.submenu ? "dropdown-submenu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subchild_r22.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subchild_r22.submenu);
} }
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_Template, 3, 8, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subchild_r9.submenu.items);
} }
function HorizontalnavComponent_li_4_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HorizontalnavComponent_li_4_ul_2_li_1_Template_li_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.mouseEnter($event); })("mouseleave", function HorizontalnavComponent_li_4_ul_2_li_1_Template_li_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.mouseLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_a_1_Template, 4, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalnavComponent_li_4_ul_2_li_1_a_2_Template, 4, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c2, subchild_r9.submenu, subchild_r9.title == "horizontal-divider", subchild_r9.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-menu", subchild_r9.submenu ? "dropdown-submenu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subchild_r9.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subchild_r9.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subchild_r9.submenu);
} }
function HorizontalnavComponent_li_4_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_Template, 4, 9, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child_r1.submenu.items);
} }
var _c3 = function (a0, a2, a3) { return { "dropdown nav-item ": a0, "nav-item": true, "open": a2, "active": a3 }; };
function HorizontalnavComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HorizontalnavComponent_li_4_Template_li_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.mouseEnter($event); })("mouseleave", function HorizontalnavComponent_li_4_Template_li_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.mouseLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_a_1_Template, 4, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalnavComponent_li_4_ul_2_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var child_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c3, child_r1.title && child_r1.submenu, child_r1.isOpen, child_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-menu", child_r1.submenu ? "dropdown" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !child_r1.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.submenu);
} }
var HorizontalnavComponent = /** @class */ (function () {
    function HorizontalnavComponent(_themeSettingsService, _menuSettingsService, _renderer, router) {
        this._themeSettingsService = _themeSettingsService;
        this._menuSettingsService = _menuSettingsService;
        this._renderer = _renderer;
        this.router = router;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HorizontalnavComponent.prototype.ngAfterViewInit = function () {
        this.refreshView();
    };
    HorizontalnavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to config changes
        this._themeSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (config) {
            _this._themeSettingsConfig = config;
            _this.refreshView();
        });
        this._menuSettingsService.config
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAllMenu))
            .subscribe(function (config) {
            _this._menuSettingsConfig = config;
        });
        this.setActiveRouteInNavbar();
    };
    HorizontalnavComponent.prototype.setTheme = function (theme) {
        this._themeSettingsService.config = {
            colorTheme: theme,
        };
    };
    HorizontalnavComponent.prototype.setLayout = function (layout) {
        this._themeSettingsService.config = {
            layout: {
                pattern: layout
            }
        };
    };
    HorizontalnavComponent.prototype.fixComponent = function (component, value) {
        if (component === 'header') {
            this._themeSettingsService.config = {
                header: value
            };
        }
        else if (component === 'footer') {
            this._themeSettingsService.config = {
                footer: value
            };
        }
        else {
            this._themeSettingsService.config = {
                header: value,
                footer: value
            };
        }
    };
    HorizontalnavComponent.prototype.callFunction = function (event) {
        var methodName = event.methodName;
        if (this[methodName]) {
            // method exists on the component
            var param = event.methodParam;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(param)) {
                this[methodName](param); // call it
            }
            else {
                this[methodName](param[0], param[1]); // call it
            }
        }
    };
    HorizontalnavComponent.prototype.refreshView = function () {
        var menuHeaderElement = document.getElementsByClassName('menu-header');
        // Theme
        if (menuHeaderElement && menuHeaderElement.length > 0) {
            if (this._themeSettingsConfig.colorTheme === 'light') {
                this._renderer.removeClass(menuHeaderElement.item(0), 'navbar-dark');
                this._renderer.addClass(menuHeaderElement.item(0), 'navbar-light');
            }
            else if (this._themeSettingsConfig.colorTheme === 'dark') {
                this._renderer.addClass(menuHeaderElement.item(0), 'navbar-dark');
                this._renderer.removeClass(menuHeaderElement.item(0), 'navbar-light');
            }
            if (this._themeSettingsConfig.layout.pattern === 'static') {
                this._renderer.addClass(menuHeaderElement.item(0), 'menu-static');
            }
            else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
                this._renderer.removeClass(menuHeaderElement.item(0), 'menu-static');
            }
        }
    };
    HorizontalnavComponent.prototype.setActiveRouteInNavbar = function () {
        for (var i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
            if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu &&
                this._menuSettingsConfig.horizontal_menu.items[i].page === this.router.url) {
                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                break;
            }
            else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu) {
                // Level 1 menu
                for (var j = 0; j < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items.length; j++) {
                    if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu &&
                        this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].page === this.router.url) {
                        this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                        this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                        this._menuSettingsConfig.horizontal_menu.items[i].isOpen = true;
                        break;
                    }
                    else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu) {
                        // Level 2 menu
                        for (var k = 0; k < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                            if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].isOpen = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].isOpen = true;
                            }
                        }
                    }
                }
            }
        }
    };
    HorizontalnavComponent.prototype.toggleMenu = function (event, child, isSubmenuOfSubmenu) {
        var toggle = document.getElementById('sidenav-overlay');
        this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        child['isSelected'] = true;
        if (this.router.url !== '') {
            this._renderer.addClass(toggle, 'd-none');
            this._renderer.removeClass(toggle, 'd-block');
        }
        if (child.page === '/chats' && this.loggedInUser.email === 'john@pixinvent.com') {
            this.router.navigate(['/chats/static-chat']);
        }
        else if (child.page === '/chats' && this.loggedInUser.email !== 'john@pixinvent.com') {
            this.router.navigate(['/chats']);
        }
    };
    HorizontalnavComponent.prototype.resetOtherActiveMenu = function (selectedChild, isSubmenuOfSubmenu) {
        for (var i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
            if (selectedChild.page !== 'null') {
                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = false;
            }
            this.handleSubmenuItems(this._menuSettingsConfig.horizontal_menu.items[i], selectedChild, isSubmenuOfSubmenu);
        }
    };
    HorizontalnavComponent.prototype.handleSubmenuItems = function (parentItem, selectedChild, isSubmenuOfSubmenu) {
        var isSelectedChildExist = false;
        if (selectedChild['title'] === 'Horizontal') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].LAYOUT_STYLE_HORIZONTAL);
            window.location.reload();
        }
        else if (selectedChild['title'] === 'Vertical') {
            localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_8__["AppConstants"].LAYOUT_STYLE_VERTICAL);
            window.location.reload();
        }
        else if (parentItem['submenu'] &&
            parentItem['submenu']['items'] &&
            parentItem['submenu']['items'].length > 0) {
            for (var j = 0; j < parentItem['submenu']['items'].length; j++) {
                if (selectedChild.title === parentItem['submenu']['items'][j].title) {
                    isSelectedChildExist = true;
                }
                this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
                if (parentItem['submenu']['items'][j]['isSelected'] === true) {
                    isSelectedChildExist = true;
                }
            }
            if (!isSelectedChildExist) {
                parentItem['isSelected'] = false;
            }
            else {
                parentItem['isSelected'] = true;
            }
        }
        else if (parentItem.title !== selectedChild.title && !isSubmenuOfSubmenu) {
            parentItem['isSelected'] = false;
        }
    };
    HorizontalnavComponent.prototype.onWindowScroll = function (e) {
        var element = document.getElementById('sticky-wrapper');
        if (this._themeSettingsConfig.layout.style === 'horizontal') {
            if (this._themeSettingsConfig.layout.pattern === 'fixed' ||
                this._themeSettingsConfig.layout.pattern === '') {
                if (window.pageYOffset > 70) { // 70 is the height of the horizontal header
                    element.classList.add('is-sticky');
                    element.classList.remove('container');
                }
                else {
                    element.classList.remove('is-sticky');
                }
            }
            else if (this._themeSettingsConfig.layout.pattern === 'boxed') {
                if (window.pageYOffset > 70) { // 70 is the height of the horizontal header
                    element.classList.add('is-sticky');
                    element.classList.add('container');
                }
                else {
                    element.classList.remove('is-sticky');
                    element.classList.remove('container');
                }
            }
            else if (this._themeSettingsConfig.layout.pattern === 'static') {
                element.classList.remove('is-sticky');
                element.classList.remove('container');
                element.classList.add('is-static');
            }
        }
    };
    HorizontalnavComponent.prototype.mouseEnter = function (e) {
        var _event = e;
        _event.srcElement.classList.add('show');
    };
    /**
       * Use for fixed left aside menu, to show menu on mouseenter event.
       * @param e Event
       */
    HorizontalnavComponent.prototype.mouseLeave = function (event) {
        var _event = event;
        _event.srcElement.classList.remove('show');
    };
    HorizontalnavComponent.ɵfac = function HorizontalnavComponent_Factory(t) { return new (t || HorizontalnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_5__["MenuSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
    HorizontalnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalnavComponent, selectors: [["app-horizontalnav"]], hostBindings: function HorizontalnavComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HorizontalnavComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 5, vars: 1, consts: [["id", "sticky-wrapper", 1, "sticky-wrapper"], ["role", "navigation", "data-menu", "menu-wrapper", "id", "menu-header", 1, "menu-header", "header-navbar", "navbar-expand-sm", "navbar", "navbar-horizontal", "navbar-fixed", "navbar-dark", "navbar-without-dd-arrow", "navbar-shadow", 3, "scroll"], ["data-menu", "menu-container", 1, "navbar-container", "main-menu-content"], ["id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "nav", "navbar-nav"], ["class", "nav-item", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "nav-link ", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["class", "dropdown-menu", 4, "ngIf"], [1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "la", 3, "ngClass"], ["data-i18n", "nav.dash.main"], [1, "dropdown-menu"], ["class", "", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "dropdown-item", "data-toggle", "dropdown", 3, "routerLink", "click", 4, "ngIf"], ["class", "dropdown-item", "target", "_blank", "data-toggle", "dropdown", 3, "href", "click", 4, "ngIf"], ["data-toggle", "dropdown", 1, "dropdown-item", 3, "routerLink", "click"], ["target", "_blank", "data-toggle", "dropdown", 1, "dropdown-item", 3, "href", "click"], [3, "ngClass", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "ngClass", "mouseenter", "mouseleave"], ["data-menu", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["data-menu", "", 3, "ngClass"]], template: function HorizontalnavComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HorizontalnavComponent_Template_div_scroll_1_listener($event) { return ctx.onWindowScroll($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HorizontalnavComponent_li_4_Template, 3, 8, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._menuSettingsConfig.horizontal_menu.items);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".is-sticky[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  z-index: 999;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding-left: 0px !important;\r\n  padding-right: 0px !important;\r\n}\r\n\r\n.is-static[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0px;\r\n  z-index: 999;\r\n}\r\n\r\n[_nghost-%COMP%]     .navbar-dark .navbar-nav .nav-link {\r\n  color: white !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .navbar-light .navbar-nav .nav-link {\r\n  color: #6b6f82 !important;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-submenu[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\r\n  top: 14px;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  min-width: 13rem !important;\r\n}\r\n\r\n.navbar-horizontal[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-submenu[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after, .navbar-horizontal[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-submenu[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:after {\r\n  right: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWxuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLGFBQWE7QUFDZiIsImZpbGUiOiJob3Jpem9udGFsbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtc3RpY2t5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXMtc3RhdGljIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjNmI2ZjgyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51PmE6YWZ0ZXIge1xyXG4gIHRvcDogMTRweDtcclxufVxyXG5cclxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxuICBtaW4td2lkdGg6IDEzcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tc3VibWVudT5hOmFmdGVyLFxyXG4ubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLXN1Ym1lbnU+YnV0dG9uOmFmdGVyIHtcclxuICByaWdodDogMC41cmVtO1xyXG59XHJcbiJdfQ== */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)]),
                ])
            ] } });
    return HorizontalnavComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-horizontalnav',
                templateUrl: './horizontalnav.component.html',
                styleUrls: ['./horizontalnav.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)]),
                    ])
                ]
            }]
    }], function () { return [{ type: _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__["ThemeSettingsService"] }, { type: _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_5__["MenuSettingsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map