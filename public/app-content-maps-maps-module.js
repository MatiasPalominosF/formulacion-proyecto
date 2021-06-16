(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-maps-maps-module"],{

/***/ "3MXp":
/*!*************************************************************!*\
  !*** ./src/app/content/maps/services/services.component.ts ***!
  \*************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_geocoding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/geocoding.service */ "MNlM");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/general/card/card.component */ "FhuM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");














var _c0 = ["search"];
function ServicesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function ServicesComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.reloadGeolocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Geolocation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "GMaps.geolocate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " supports 4 functions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " (required): fires when geolocation has been successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " (required): fires when geolocation has not been done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "not_supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " (required): fires when geolocation is not supported by the browser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "always");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " (optional): fires always after every scenario described above.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "agm-map", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r0.latitude)("longitude", ctx_r0.longitude)("zoom", ctx_r0.zoom)("scrollwheel", null);
} }
function ServicesComponent_div_9_agm_marker_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "agm-marker", 19);
} if (rf & 2) {
    var m_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", m_r6.lat)("longitude", m_r6.lng)("label", m_r6.label);
} }
function ServicesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function ServicesComponent_div_9_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.reloadGeocoding($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Geocoding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "You can define either ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "lat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "lng");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ". Also, you must define ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "callback");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ", which will use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " of geocoding and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "agm-map", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ServicesComponent_div_9_agm_marker_32_Template, 1, 3, "agm-marker", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.searchControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r1.lat)("longitude", ctx_r1.lng)("zoom", ctx_r1.zoom)("scrollwheel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.markers);
} }
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(geocodeService, ref, mapsAPILoader, ngZone) {
        this.geocodeService = geocodeService;
        this.ref = ref;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        this.latitude = -12.046374;
        this.longitude = -77.042793;
        this.lat = -12.046374;
        this.lng = -77.042793;
        this.zoom = 12;
        this.dragMarker = '';
        this.markers = [];
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumb = {
            'mainlabel': 'gmaps - Services',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'gmaps',
                    'isLink': true,
                    'link': ''
                },
                {
                    'name': 'Services',
                    'isLink': false
                }
            ]
        };
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['(regions)']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    _this.geocodeService.geocodeAddress(place.name)
                        .subscribe(function (location) {
                        _this.markers.push({
                            lat: location.lat,
                            lng: location.lng,
                            label: _this.dragMarker
                        });
                        _this.lat = location.lat;
                        _this.lng = location.lng;
                        _this.ref.detectChanges();
                    });
                });
            });
        });
    };
    ServicesComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    _this.lat = position.coords.latitude;
                    _this.lng = position.coords.longitude;
                }
            }, function (error) { return console.log(error); });
        }
        else {
            window.alert('Geolocation is not supported by this browser.');
        }
    };
    ServicesComponent.prototype.reloadGeolocation = function () {
        var _this = this;
        this.blockUIGeolocation.start('Loading..');
        setTimeout(function () {
            _this.blockUIGeolocation.stop();
        }, 2500);
    };
    ServicesComponent.prototype.reloadGeocoding = function () {
        var _this = this;
        this.blockUIGeocoding.start('Loading..');
        setTimeout(function () {
            _this.blockUIGeocoding.stop();
        }, 2500);
    };
    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_geocoding_service__WEBPACK_IMPORTED_MODULE_2__["GeocodingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], viewQuery: function ServicesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
        } }, decls: 10, vars: 5, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "gmaps-services"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], [1, "col-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-text"], [3, "latitude", "longitude", "zoom", "scrollwheel"], ["for", "address"], [1, "input-group", "mb-1"], ["autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", "type", "text", 3, "formControl"], ["search", ""], [3, "latitude", "longitude", "label", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude", "label"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ServicesComponent_div_7_Template, 27, 5, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ServicesComponent_div_9_Template, 33, 7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "geolocation")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "geocoding")("blockUIMessage", "Loading");
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EIiwiZmlsZSI6InNlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUI"])('geolocation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ServicesComponent.prototype, "blockUIGeolocation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUI"])('geocoding'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ServicesComponent.prototype, "blockUIGeocoding", void 0);
    return ServicesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return [{ type: _services_geocoding_service__WEBPACK_IMPORTED_MODULE_2__["GeocodingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { blockUIGeolocation: [], blockUIGeocoding: [], searchElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['search']
        }] }); })();


/***/ }),

/***/ "MNlM":
/*!************************************************!*\
  !*** ./src/app/_services/geocoding.service.ts ***!
  \************************************************/
/*! exports provided: GeocodingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodingService", function() { return GeocodingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var GeocodingService = /** @class */ (function () {
    function GeocodingService(mapLoader) {
        this.mapLoader = mapLoader;
    }
    GeocodingService.prototype.initGeocoder = function () {
        console.log('Init geocoder!');
        this.geocoder = new google.maps.Geocoder();
    };
    GeocodingService.prototype.waitForMapsToLoad = function () {
        var _this = this;
        if (!this.geocoder) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.mapLoader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.initGeocoder(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return true; }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    GeocodingService.prototype.geocodeAddress = function (location) {
        var _this = this;
        console.log('Start geocoding!');
        return this.waitForMapsToLoad().pipe(
        // filter(loaded => loaded),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                _this.geocoder.geocode({ address: location }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        console.log('Geocoding complete!');
                        observer.next({
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng()
                        });
                    }
                    else {
                        console.log('Error - ', results, ' & Status - ', status);
                        observer.next({ lat: 0, lng: 0 });
                    }
                    observer.complete();
                });
            });
        }));
    };
    GeocodingService.ɵfac = function GeocodingService_Factory(t) { return new (t || GeocodingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"])); };
    GeocodingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeocodingService, factory: GeocodingService.ɵfac, providedIn: 'root' });
    return GeocodingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeocodingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"] }]; }, null); })();


/***/ }),

/***/ "MfPZ":
/*!*****************************************************!*\
  !*** ./src/app/content/maps/maps/maps.component.ts ***!
  \*****************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/general/card/card.component */ "FhuM");









function MapsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function MapsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.reloadBasicMap($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Basic Map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "You must define ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "container ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "longitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " of the map's center.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "You also can define ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "zoom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "width");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "height");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ". By default, zoom is 15. Width an height in a CSS class will replace these values.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Map types are defined in the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "mapType");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " property. Allowed values are: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "roadmap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " (default), ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "satellite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "hybrid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "terrain");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "agm-map", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r0.lat)("longitude", ctx_r0.lng)("zoom", ctx_r0.zoom)("zoomControl", false)("scrollwheel", null);
} }
function MapsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function MapsComponent_div_9_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.reloadMapEvents($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Map Events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Click or drag this map to see attached events. You can check the list of map events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "agm-map", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapClick", function MapsComponent_div_9_Template_agm_map_mapClick_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.mapClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r1.lat)("longitude", ctx_r1.lng)("zoom", ctx_r1.zoom)("mapDraggable", true)("zoomControl", false)("scrollwheel", null);
} }
function MapsComponent_agm_marker_32_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "agm-marker", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragEnd", function MapsComponent_agm_marker_32_Template_agm_marker_dragEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var m_r8 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.markerDragEnd(m_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", m_r8.lat)("longitude", m_r8.lng)("label", m_r8.label);
} }
var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        this.lat = -12.046374;
        this.lng = -77.042793;
        this.markers = [
            {
                lat: this.lat,
                lng: this.lng,
                label: 'A'
            },
            {
                lat: this.lat + 0.004,
                lng: this.lng + 0.004,
                label: 'B'
            },
            {
                lat: this.lat - 0.004,
                lng: this.lng - 0.004,
                label: 'C'
            }
        ];
    }
    MapsComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'gmaps - Basic Maps',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'gmaps',
                    'isLink': true,
                    'link': '#'
                },
                {
                    'name': 'Basic Maps',
                    'isLink': false
                }
            ]
        };
        this.zoom = 15;
    };
    MapsComponent.prototype.mapClicked = function ($event) {
        window.alert('click');
        console.log('Clicked', $event);
    };
    MapsComponent.prototype.reloadBasicMap = function () {
        var _this = this;
        this.blockUIBasicMap.start('Loading..');
        setTimeout(function () {
            _this.blockUIBasicMap.stop();
        }, 2500);
    };
    MapsComponent.prototype.reloadMapEvents = function () {
        var _this = this;
        this.blockUIMapEvents.start('Loading..');
        setTimeout(function () {
            _this.blockUIMapEvents.stop();
        }, 2500);
    };
    MapsComponent.ɵfac = function MapsComponent_Factory(t) { return new (t || MapsComponent)(); };
    MapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapsComponent, selectors: [["app-maps"]], decls: 33, vars: 11, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "gmaps-basic-maps"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-text"], [3, "latitude", "longitude", "zoom", "zoomControl", "scrollwheel"], [3, "latitude", "longitude", "label", "dragEnd", 4, "ngFor", "ngForOf"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], ["href", "https://developers.google.com/maps/documentation/javascript/reference#Map"], [3, "latitude", "longitude", "zoom", "mapDraggable", "zoomControl", "scrollwheel", "mapClick"], [3, "latitude", "longitude", "label", "dragEnd"]], template: function MapsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MapsComponent_div_7_Template, 45, 6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MapsComponent_div_9_Template, 11, 7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Markers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Latitude");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Longitude");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " are required. You can also attach additional information with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "details");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, ", which will be passed to Event object (");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "e");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, ") in the events previously defined.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "agm-map", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, MapsComponent_agm_marker_32_Template, 1, 3, "agm-marker", 16);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "basicMap")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "mapEvents")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("zoomControl", false)("scrollwheel", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.markers);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["ɵf"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQiLCJmaWxlIjoibWFwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('basicMap'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MapsComponent.prototype, "blockUIBasicMap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('mapEvents'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MapsComponent.prototype, "blockUIMapEvents", void 0);
    return MapsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-maps',
                templateUrl: './maps.component.html',
                styleUrls: ['./maps.component.css']
            }]
    }], function () { return []; }, { blockUIBasicMap: [], blockUIMapEvents: [] }); })();


/***/ }),

/***/ "Qp8K":
/*!**************************************************************!*\
  !*** ./node_modules/agm-direction/fesm2015/agm-direction.js ***!
  \**************************************************************/
/*! exports provided: AgmDirectionModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDirectionModule", function() { return AgmDirectionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AgmDirection; });
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "LSHg");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */




var AgmDirection = /*#__PURE__*/function () {
  /**
   * @param {?} gmapsApi
   */
  function AgmDirection(gmapsApi) {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AgmDirection);

    this.gmapsApi = gmapsApi; // Options

    this.travelMode = 'DRIVING';
    this.transitOptions = undefined;
    this.drivingOptions = undefined;
    this.waypoints = [];
    this.optimizeWaypoints = true;
    this.provideRouteAlternatives = false;
    this.avoidHighways = false;
    this.avoidTolls = false; // Remove or draw direction

    this.visible = true; // Direction change event handler

    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Direction response for the new request

    this.onResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Send a custom infowindow

    this.sendInfoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Status of Directions Query (google.maps.DirectionsStatus.OVER_QUERY_LIMIT)

    this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Marker drag event handler

    this.originDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.destinationDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.directionsService = undefined;
    this.directionsDisplay = undefined;
    this.waypointsMarker = []; // Use for visible flag

    this.isFirstChange = true;
  }
  /**
   * @return {?}
   */


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AgmDirection, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.visible === true) {
        this.directionDraw();
      }
    }
    /**
     * @param {?} obj
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(obj) {
      /**
       * When visible is false then remove the direction layer
       */
      if (!this.visible) {
        try {
          this.removeMarkers();
          this.removeDirections();
        } catch (e) {}
      } else {
        if (this.isFirstChange) {
          /**
           * When visible is false at the first time
           */
          if (typeof this.directionsDisplay === 'undefined') {
            this.directionDraw();
          }

          this.isFirstChange = false;
          return;
        }
        /**
         * When renderOptions are not first change then reset the display
         */


        if (typeof obj.renderOptions !== 'undefined') {
          if (obj.renderOptions.firstChange === false) {
            this.removeMarkers();
            this.removeDirections();
          }
        }

        this.directionDraw();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.destroyMarkers();
      this.removeDirections();
    }
    /**
     * This event is fired when the user creating or updating this direction
     * @return {?}
     */

  }, {
    key: "directionDraw",
    value: function directionDraw() {
      var _this = this;

      this.gmapsApi.getNativeMap().then(function (map) {
        if (typeof _this.directionsDisplay === 'undefined') {
          _this.directionsDisplay = new google.maps.DirectionsRenderer(_this.renderOptions);

          _this.directionsDisplay.setMap(map);

          _this.directionsDisplay.addListener('directions_changed', function () {
            _this.onChange.emit(_this.directionsDisplay.getDirections());
          });
        }

        if (typeof _this.directionsService === 'undefined') {
          _this.directionsService = new google.maps.DirectionsService();
        }

        if (typeof _this.panel === 'undefined') {
          _this.directionsDisplay.setPanel(null);
        } else {
          _this.directionsDisplay.setPanel(_this.panel);
        } // Render exist direction


        if (typeof _this.renderRoute === 'object' && _this.renderRoute !== null) {
          _this.directionsDisplay.setDirections(_this.renderRoute);

          _this.renderRoute = null; // or set undefined, ''
        } else {
          // Request new direction
          _this.directionsService.route({
            origin: _this.origin,
            destination: _this.destination,
            travelMode: _this.travelMode,
            transitOptions: _this.transitOptions,
            drivingOptions: _this.drivingOptions,
            waypoints: _this.waypoints,
            optimizeWaypoints: _this.optimizeWaypoints,
            provideRouteAlternatives: _this.provideRouteAlternatives,
            avoidHighways: _this.avoidHighways,
            avoidTolls: _this.avoidTolls
          }, function (response, status) {
            _this.onResponse.emit(response); // Emit Query Status


            _this.status.emit(status);
            /**
             * DirectionsStatus
             * https://developers.google.com/maps/documentation/javascript/directions#DirectionsStatus
             */


            switch (status) {
              case 'OK':
                _this.directionsDisplay.setDirections(response);
                /**
                 * Emit The DirectionsResult Object
                 * https://developers.google.com/maps/documentation/javascript/directions?hl=en#DirectionsResults
                 */
                // Custom Markers


                if (typeof _this.markerOptions !== 'undefined') {
                  _this.destroyMarkers(); // Set custom markers

                  /** @type {?} */


                  var _route = response.routes[0].legs[0];

                  try {
                    // Origin Marker
                    if (typeof _this.markerOptions.origin !== 'undefined') {
                      _this.markerOptions.origin.map = map;
                      _this.markerOptions.origin.position = _route.start_location;
                      _this.originMarker = _this.setMarker(map, _this.originMarker, _this.markerOptions.origin, _route.start_address);

                      if (_this.markerOptions.origin.draggable) {
                        _this.originMarker.addListener('dragend', function () {
                          _this.origin = _this.originMarker.position;

                          _this.directionDraw();

                          _this.originDrag.emit(_this.origin);
                        });
                      }
                    } // Destination Marker


                    if (typeof _this.markerOptions.destination !== 'undefined') {
                      _this.markerOptions.destination.map = map;
                      _this.markerOptions.destination.position = _route.end_location;
                      _this.destinationMarker = _this.setMarker(map, _this.destinationMarker, _this.markerOptions.destination, _route.end_address);

                      if (_this.markerOptions.destination.draggable) {
                        _this.destinationMarker.addListener('dragend', function () {
                          _this.destination = _this.destinationMarker.position;

                          _this.directionDraw();

                          _this.destinationDrag.emit(_this.destination);
                        });
                      }
                    } // Waypoints Marker


                    if (typeof _this.markerOptions.waypoints !== 'undefined') {
                      _this.waypoints.forEach(function (waypoint, index) {
                        // If waypoints are not array then set all the same
                        if (!Array.isArray(_this.markerOptions.waypoints)) {
                          _this.markerOptions.waypoints.map = map;
                          _this.markerOptions.waypoints.position = _route.via_waypoints[index];

                          _this.waypointsMarker.push(_this.setMarker(map, waypoint, _this.markerOptions.waypoints, _route.via_waypoints[index]));
                        } else {
                          _this.markerOptions.waypoints[index].map = map;
                          _this.markerOptions.waypoints[index].position = _route.via_waypoints[index];

                          _this.waypointsMarker.push(_this.setMarker(map, waypoint, _this.markerOptions.waypoints[index], _route.via_waypoints[index]));
                        }
                      }); // End forEach

                    }
                  } catch (err) {
                    console.error('MarkerOptions error.', err);
                  }
                }

                break;

              default:
                // console.warn(status);
                break;
            } // End switch

          });
        }
      });
    }
    /**
     * Custom Origin and Destination Icon
     * \@memberof AgmDirection
     * @param {?} map map
     * @param {?} marker marker
     * @param {?} markerOpts properties
     * @param {?} content marker's infowindow content
     * @return {?} new marker
     */

  }, {
    key: "setMarker",
    value: function setMarker(map, marker, markerOpts, content) {
      var _this2 = this;

      if (typeof this.infoWindow === 'undefined') {
        this.infoWindow = new google.maps.InfoWindow({});
        this.sendInfoWindow.emit(this.infoWindow);
      }

      marker = new google.maps.Marker(markerOpts); // https://developers.google.com/maps/documentation/javascript/reference/marker?hl=zh-tw#MarkerOptions.clickable

      if (marker.clickable) {
        marker.addListener('click', function () {
          /** @type {?} */
          var infowindoContent = typeof markerOpts.infoWindow === 'undefined' ? content : markerOpts.infoWindow;

          _this2.infoWindow.setContent(infowindoContent);

          _this2.infoWindow.open(map, marker);
        });
      }

      return marker;
    }
    /**
     * This event is fired when remove markers
     * @return {?}
     */

  }, {
    key: "removeMarkers",
    value: function removeMarkers() {
      if (typeof this.originMarker !== 'undefined') {
        this.originMarker.setMap(null);
      }

      if (typeof this.destinationMarker !== 'undefined') {
        this.destinationMarker.setMap(null);
      }

      this.waypointsMarker.forEach(function (w) {
        if (typeof w !== 'undefined') {
          w.setMap(null);
        }
      });
    }
    /**
     * This event is fired when remove directions
     * @return {?}
     */

  }, {
    key: "removeDirections",
    value: function removeDirections() {
      if (this.directionsDisplay !== undefined) {
        this.directionsDisplay.setPanel(null);
        this.directionsDisplay.setMap(null);
        this.directionsDisplay = undefined;
      }
    }
    /**
     * This event is fired when destroy markers
     * @return {?}
     */

  }, {
    key: "destroyMarkers",
    value: function destroyMarkers() {
      // Remove origin markers
      try {
        if (typeof this.originMarker !== 'undefined') {
          google.maps.event.clearListeners(this.originMarker, 'click');

          if (this.markerOptions.origin.draggable) {
            google.maps.event.clearListeners(this.originMarker, 'dragend');
          }
        }

        if (typeof this.destinationMarker !== 'undefined') {
          google.maps.event.clearListeners(this.destinationMarker, 'click');

          if (this.markerOptions.origin.draggable) {
            google.maps.event.clearListeners(this.destinationMarker, 'dragend');
          }
        }

        this.waypointsMarker.forEach(function (w) {
          if (typeof w !== 'undefined') {
            google.maps.event.clearListeners(w, 'click');
          }
        });
        this.removeMarkers();
      } catch (err) {
        console.error('Can not reset custom marker.', err);
      }
    }
  }]);

  return AgmDirection;
}();

AgmDirection.ɵfac = function AgmDirection_Factory(t) {
  return new (t || AgmDirection)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAPIWrapper"]));
};

AgmDirection.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: AgmDirection,
  selectors: [["agm-direction"]],
  inputs: {
    travelMode: "travelMode",
    transitOptions: "transitOptions",
    drivingOptions: "drivingOptions",
    waypoints: "waypoints",
    optimizeWaypoints: "optimizeWaypoints",
    provideRouteAlternatives: "provideRouteAlternatives",
    avoidHighways: "avoidHighways",
    avoidTolls: "avoidTolls",
    visible: "visible",
    renderRoute: "renderRoute",
    origin: "origin",
    destination: "destination",
    infoWindow: "infoWindow",
    renderOptions: "renderOptions",
    panel: "panel",
    markerOptions: "markerOptions"
  },
  outputs: {
    onChange: "onChange",
    onResponse: "onResponse",
    sendInfoWindow: "sendInfoWindow",
    status: "status",
    originDrag: "originDrag",
    destinationDrag: "destinationDrag"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

AgmDirection.ctorParameters = function () {
  return [{
    type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAPIWrapper"]
  }];
};

AgmDirection.propDecorators = {
  origin: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  destination: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  travelMode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  transitOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  drivingOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  waypoints: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  optimizeWaypoints: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  provideRouteAlternatives: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  avoidHighways: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  avoidTolls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  renderOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  panel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  markerOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  infoWindow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  renderRoute: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  onChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onResponse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  sendInfoWindow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  status: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  originDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  destinationDrag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AgmDirection, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: 'agm-direction'
    }]
  }], function () {
    return [{
      type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAPIWrapper"]
    }];
  }, {
    travelMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    transitOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    drivingOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    waypoints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    optimizeWaypoints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    provideRouteAlternatives: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    avoidHighways: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    avoidTolls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onResponse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    sendInfoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    status: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    originDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    destinationDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    renderRoute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    destination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    infoWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    renderOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    markerOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var AgmDirectionModule = /*#__PURE__*/function () {
  function AgmDirectionModule() {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AgmDirectionModule);
  }

  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AgmDirectionModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: AgmDirectionModule
      };
    }
  }]);

  return AgmDirectionModule;
}();

AgmDirectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AgmDirectionModule
});
AgmDirectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function AgmDirectionModule_Factory(t) {
    return new (t || AgmDirectionModule)();
  },
  imports: [[]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AgmDirectionModule, {
    declarations: [AgmDirection],
    exports: [AgmDirection]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AgmDirectionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [],
      declarations: [AgmDirection],
      exports: [AgmDirection]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */




/***/ }),

/***/ "bHRX":
/*!*************************************************************!*\
  !*** ./src/app/content/maps/overlays/overlays.component.ts ***!
  \*************************************************************/
/*! exports provided: OverlaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaysComponent", function() { return OverlaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/general/card/card.component */ "FhuM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");










function OverlaysComponent_div_7_agm_polyline_9_agm_polyline_point_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "agm-polyline-point", 24);
} if (rf & 2) {
    var point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", point_r6.latitude)("longitude", point_r6.longitude);
} }
function OverlaysComponent_div_7_agm_polyline_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "agm-polyline", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OverlaysComponent_div_7_agm_polyline_9_agm_polyline_point_1_Template, 1, 2, "agm-polyline-point", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var polyline_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("strokeColor", polyline_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", polyline_r3.path);
} }
function OverlaysComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function OverlaysComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.reloadPolylines($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Polylines ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The path of the polyline is defined by an array of array of two (latitude and longitude).");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "agm-map", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OverlaysComponent_div_7_agm_polyline_9_Template, 2, 2, "agm-polyline", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r0.lat)("longitude", ctx_r0.lng)("zoom", ctx_r0.zoom)("scrollwheel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.polylines);
} }
function OverlaysComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function OverlaysComponent_div_9_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.reloadPolygons($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Polygons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The path of a polygon can be defined as an array of:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "google.maps.LatLng");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " objects, or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "arrays of coordinates, with index 0 and 1 as, respectively, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "longitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " (as in the example) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Also, you can add a GeoJSON Polygon or MultiPolygon path using ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "useGeoJSON: true");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "agm-map", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "agm-polygon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r1.lat)("longitude", ctx_r1.lng)("zoom", ctx_r1.zoom)("scrollwheel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("paths", ctx_r1.paths)("strokeWeight", 3);
} }
var OverlaysComponent = /** @class */ (function () {
    function OverlaysComponent(mapsAPILoader) {
        this.mapsAPILoader = mapsAPILoader;
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        this.lat = -12.046374;
        this.lng = -77.042793;
        this.paths = [
            { lat: -12.045374, lng: -77.041793 },
            { lat: -12.045985, lng: -77.035000 },
            { lat: -12.048374, lng: -77.043793 },
            { lat: -12.045374, lng: -77.046793 },
            { lat: -12.045374, lng: -77.041793 },
        ];
        this.multiPaths = [[
                { lat: -12.045374, lng: -77.041793 },
                { lat: -12.045985, lng: -77.035000 },
                { lat: -12.048374, lng: -77.043793 },
                { lat: -12.045374, lng: -77.046793 },
                { lat: -12.045374, lng: -77.041793 },
            ],
            [
                { lat: -12.045374, lng: -77.031793 },
                { lat: -12.045985, lng: -77.025000 },
                { lat: -12.048374, lng: -77.033793 },
                { lat: -12.045374, lng: -77.036793 },
                { lat: -12.045374, lng: -77.031793 },
            ]
        ];
    }
    OverlaysComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'gmaps - Overlays',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'gmaps',
                    'isLink': true,
                    'link': '#'
                },
                {
                    'name': 'Overlays',
                    'isLink': false
                }
            ]
        };
        // set google maps defaults
        this.zoom = 15;
        this.lat = -12.046374;
        this.lng = -77.042793;
        this.polyline = [
            {
                latitude: -12.045374,
                longitude: -77.041793
            },
            {
                latitude: -12.045985,
                longitude: -77.035000
            },
            {
                latitude: -12.048374,
                longitude: -77.043793
            },
            {
                latitude: -12.045374,
                longitude: -77.046793
            },
        ];
        this.polylines = this.rebuildPolylines();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
        });
    };
    OverlaysComponent.prototype.rebuildPolylines = function () {
        this.polylines = [];
        var newPolyline;
        for (var i = 0; i < this.polyline.length; i++) {
            newPolyline = {
                latitude: this.polyline[i].latitude,
                longitude: this.polyline[i].longitude,
                path: [],
                label: '',
                color: 'blue'
            };
            var pre = void 0;
            if (i !== 0) {
                pre = {
                    latitude: this.polyline[i - 1].latitude,
                    longitude: this.polyline[i - 1].longitude
                };
            }
            if (pre && this.polyline[i]) {
                newPolyline.path.push(pre);
                var cur = {
                    latitude: this.polyline[i].latitude,
                    longitude: this.polyline[i].longitude
                };
                newPolyline.path.push(cur);
            }
            this.polylines.push(newPolyline);
        }
        console.log(this.polylines);
        return this.polylines;
    };
    OverlaysComponent.prototype.reloadPolylines = function () {
        var _this = this;
        this.blockUIPolylines.start('Loading..');
        setTimeout(function () {
            _this.blockUIPolylines.stop();
        }, 2500);
    };
    OverlaysComponent.prototype.reloadPolygons = function () {
        var _this = this;
        this.blockUIPolygons.start('Loading..');
        setTimeout(function () {
            _this.blockUIPolygons.stop();
        }, 2500);
    };
    OverlaysComponent.ɵfac = function OverlaysComponent_Factory(t) { return new (t || OverlaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"])); };
    OverlaysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OverlaysComponent, selectors: [["app-overlays"]], decls: 25, vars: 11, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "gmaps-overlays"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-text"], ["href", "http://geojson.org/geojson-spec.html#id7"], [3, "latitude", "longitude", "zoom", "scrollwheel"], ["strokeColor", "LightSkyBlue", "fillColor", "LightSkyBlue", 3, "paths", "strokeWeight"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [3, "strokeColor", 4, "ngFor", "ngForOf"], [3, "strokeColor"], [3, "latitude", "longitude", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude"]], template: function OverlaysComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OverlaysComponent_div_7_Template, 10, 6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OverlaysComponent_div_9_Template, 27, 7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "GeoJSON Polygons");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "The GeoJSON Polygon should be surrounded by brackets, according the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "specification");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "agm-map", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "agm-polygon", 17);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "polylines")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "polygons")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("scrollwheel", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("paths", ctx.multiPaths)("strokeWeight", 3);
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["ɵf"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmPolygon"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmPolyline"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmPolylinePoint"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJsYXlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EIiwiZmlsZSI6Im92ZXJsYXlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('polylines'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], OverlaysComponent.prototype, "blockUIPolylines", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('polygons'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], OverlaysComponent.prototype, "blockUIPolygons", void 0);
    return OverlaysComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlaysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-overlays',
                templateUrl: './overlays.component.html',
                styleUrls: ['./overlays.component.css']
            }]
    }], function () { return [{ type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] }]; }, { blockUIPolylines: [], blockUIPolygons: [] }); })();


/***/ }),

/***/ "erxi":
/*!*********************************************************!*\
  !*** ./src/app/content/maps/routes/routes.component.ts ***!
  \*********************************************************/
/*! exports provided: RoutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesComponent", function() { return RoutesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ "/DnI");
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/general/card/card.component */ "FhuM");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! agm-direction */ "Qp8K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");











function RoutesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function RoutesComponent_div_7_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.reloadRoutes($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Routes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "You must define two points (");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ") and color, opacity and weight of the route in the map.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Also, you can define a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "travelMode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "driving");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "bicycling");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "walking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ". Default is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "walking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "agm-map", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "agm-direction", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r0.lat)("longitude", ctx_r0.lng)("zoom", ctx_r0.zoom)("scrollwheel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("origin", ctx_r0.origin)("destination", ctx_r0.destination);
} }
function RoutesComponent_div_9_div_25_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var detail_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", detail_r6.instructions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function RoutesComponent_div_9_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RoutesComponent_div_9_div_25_li_2_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.routeArray);
} }
function RoutesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reloadFunction", function RoutesComponent_div_9_Template_m_card_reloadFunction_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.reloadRoutesAdvance($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Routes Advance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Same as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "drawRoute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ", you must define an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "travelMode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ". Also, you must define the function that GMaps will call every step in the route.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "agm-map", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "agm-direction", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onResponse", function RoutesComponent_div_9_Template_agm_direction_onResponse_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onResponse($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoutesComponent_div_9_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.startInstructions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Start Travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RoutesComponent_div_9_div_25_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r1.lat)("longitude", ctx_r1.lng)("zoom", ctx_r1.zoom)("scrollwheel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("origin", ctx_r1.origin)("destination", ctx_r1.destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.clickOnStartTravel);
} }
var RoutesComponent = /** @class */ (function () {
    function RoutesComponent(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.options = {
            close: true,
            expand: true,
            minimize: true,
            reload: true
        };
        this.lat = -12.045374;
        this.lng = -77.042793;
        this.origin = { lat: -12.045374, lng: -77.042793 };
        this.destination = { lat: -12.045374, lng: -76.050793 };
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.waypoints = [];
        this.zoom = 15;
        this.visible = true;
        this.routeDetail = [];
        this.directionsService = undefined;
        this.directionsDisplay = undefined;
        this.clickOnStartTravel = false;
        this.waypointsMarker = [];
        this.isFirstChange = true;
    }
    RoutesComponent.prototype.ngOnInit = function () {
        this.breadcrumb = {
            'mainlabel': 'gmaps - Routes',
            'links': [
                {
                    'name': 'Home',
                    'isLink': true,
                    'link': '/dashboard/sales'
                },
                {
                    'name': 'gmaps',
                    'isLink': true,
                    'link': '#'
                },
                {
                    'name': 'Routes',
                    'isLink': false
                }
            ]
        };
        if (this.visible === true) {
            this.directionDraw();
        }
    };
    RoutesComponent.prototype.ngOnChanges = function (obj) {
        /**
         * When visible is false then remove the direction layer
         */
        if (!this.visible) {
            try {
                if (typeof this.originMarker !== 'undefined') {
                    this.originMarker.setMap(null);
                    this.destinationMarker.setMap(null);
                    this.waypointsMarker.forEach(function (w) { return w.setMap(null); });
                }
                this.directionsDisplay.setPanel(null);
                this.directionsDisplay.setMap(null);
                this.directionsDisplay = undefined;
            }
            catch (e) { }
        }
        else {
            if (this.isFirstChange) {
                /**
                 * When visible is false at the first time
                 */
                if (typeof this.directionsDisplay === 'undefined') {
                    this.directionDraw();
                }
                this.isFirstChange = false;
                return;
            }
            /**
             * When renderOptions are not first change then reset the display
             */
            if (typeof obj.renderOptions !== 'undefined') {
                if (obj.renderOptions.firstChange === false) {
                    if (typeof this.originMarker !== 'undefined') {
                        this.originMarker.setMap(null);
                        this.destinationMarker.setMap(null);
                        this.waypointsMarker.forEach(function (w) { return w.setMap(null); });
                    }
                    this.directionsDisplay.setPanel(null);
                    this.directionsDisplay.setMap(null);
                    this.directionsDisplay = undefined;
                }
            }
            this.directionDraw();
        }
    };
    RoutesComponent.prototype.directionDraw = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (typeof _this.directionsDisplay === 'undefined') {
                _this.directionsDisplay = new google.maps.DirectionsRenderer(_this.renderOptions);
                _this.directionsDisplay.setMap(map);
                _this.directionsDisplay.addListener('directions_changed', function () {
                    _this.addressChanged.emit(_this.directionsDisplay.getDirections());
                });
            }
            if (typeof _this.directionsService === 'undefined') {
                _this.directionsService = new google.maps.DirectionsService;
            }
            if (typeof _this.panel === 'undefined') {
                _this.directionsDisplay.setPanel(null);
            }
            else {
                _this.directionsDisplay.setPanel(_this.panel);
            }
            // Render exist direction
            if (typeof _this.renderRoute === 'object' && _this.renderRoute !== null) {
                _this.directionsDisplay.setDirections(_this.renderRoute);
                _this.renderRoute = null; // or set undefined, ''
            }
            else {
                _this.directionsService.route({
                    origin: _this.origin,
                    destination: _this.destination,
                    travelMode: 'DRIVING',
                    transitOptions: undefined,
                    drivingOptions: undefined,
                    waypoints: [],
                    optimizeWaypoints: true,
                    provideRouteAlternatives: false,
                    avoidHighways: false,
                    avoidTolls: false,
                }, function (response, status) {
                    _this.onResponse(response);
                });
            }
        });
    };
    RoutesComponent.prototype.onResponse = function (event) {
        this.routeDetail.push(event);
        this.routeArray = this.routeDetail[0].routes[0].legs[0].steps;
    };
    RoutesComponent.prototype.startInstructions = function () {
        this.clickOnStartTravel = true;
    };
    RoutesComponent.prototype.reloadRoutes = function () {
        var _this = this;
        this.blockUIRoutes.start('Loading..');
        setTimeout(function () {
            _this.blockUIRoutes.stop();
        }, 2500);
    };
    RoutesComponent.prototype.reloadRoutesAdvance = function () {
        var _this = this;
        this.blockUIRoutesAdvance.start('Loading..');
        setTimeout(function () {
            _this.blockUIRoutesAdvance.stop();
        }, 2500);
    };
    RoutesComponent.ɵfac = function RoutesComponent_Factory(t) { return new (t || RoutesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"])); };
    RoutesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoutesComponent, selectors: [["app-routes"]], outputs: { status: "status", addressChanged: "addressChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 5, consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "gmaps-routes"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], [1, "col-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-text"], [3, "latitude", "longitude", "zoom", "scrollwheel"], [3, "origin", "destination"], [3, "origin", "destination", "onResponse"], [1, "col-2"], ["type", "submit", 1, "btn", "btn-primary", "mt-1", 3, "click"], ["class", "col-10", 4, "ngIf"], [1, "col-10"], [4, "ngFor", "ngForOf"], [3, "innerHtml"]], template: function RoutesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RoutesComponent_div_7_Template, 31, 7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RoutesComponent_div_9_Template, 26, 8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "routes")("blockUIMessage", "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blockUI", "routesAdvance")("blockUIMessage", "Loading");
        } }, directives: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["ɵf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], agm_direction__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n}\r\n\r\n[_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRCIsImZpbGUiOiJyb3V0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('routes'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RoutesComponent.prototype, "blockUIRoutes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])('routesAdvance'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RoutesComponent.prototype, "blockUIRoutesAdvance", void 0);
    return RoutesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoutesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-routes',
                templateUrl: './routes.component.html',
                styleUrls: ['./routes.component.css']
            }]
    }], function () { return [{ type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"] }]; }, { blockUIRoutes: [], blockUIRoutesAdvance: [], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], addressChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "n7nQ":
/*!*********************************************!*\
  !*** ./src/app/content/maps/maps.module.ts ***!
  \*********************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps/maps.component */ "MfPZ");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "LSHg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "3MXp");
/* harmony import */ var _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlays/overlays.component */ "bHRX");
/* harmony import */ var src_app_services_geocoding_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/geocoding.service */ "MNlM");
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/routes.component */ "erxi");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! agm-direction */ "Qp8K");
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ "ErSb");
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../partials/general/card/card.module */ "vj4e");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-block-ui */ "N8BJ");
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ "kaWu");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "AytR");




















var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapsModule });
    MapsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapsModule_Factory(t) { return new (t || MapsModule)(); }, providers: [
            src_app_services_geocoding_service__WEBPACK_IMPORTED_MODULE_8__["GeocodingService"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"],
                _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"].forRoot({
                    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_14__["BlockTemplateComponent"]
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].googleApiKey,
                    libraries: ['places']
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_10__["AgmDirectionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'maps',
                        component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_3__["MapsComponent"]
                    },
                    {
                        path: 'services',
                        component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"]
                    },
                    {
                        path: 'overlays',
                        component: _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_7__["OverlaysComponent"]
                    },
                    {
                        path: 'routes',
                        component: _routes_routes_component__WEBPACK_IMPORTED_MODULE_9__["RoutesComponent"]
                    },
                ])
            ]] });
    return MapsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapsModule, { declarations: [_maps_maps_component__WEBPACK_IMPORTED_MODULE_3__["MapsComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_7__["OverlaysComponent"], _routes_routes_component__WEBPACK_IMPORTED_MODULE_9__["RoutesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"],
        _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"], agm_direction__WEBPACK_IMPORTED_MODULE_10__["AgmDirectionModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbModule"],
                    _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUIModule"].forRoot({
                        template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_14__["BlockTemplateComponent"]
                    }),
                    _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                        apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].googleApiKey,
                        libraries: ['places']
                    }),
                    agm_direction__WEBPACK_IMPORTED_MODULE_10__["AgmDirectionModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'maps',
                            component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_3__["MapsComponent"]
                        },
                        {
                            path: 'services',
                            component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"]
                        },
                        {
                            path: 'overlays',
                            component: _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_7__["OverlaysComponent"]
                        },
                        {
                            path: 'routes',
                            component: _routes_routes_component__WEBPACK_IMPORTED_MODULE_9__["RoutesComponent"]
                        },
                    ])
                ],
                providers: [
                    src_app_services_geocoding_service__WEBPACK_IMPORTED_MODULE_8__["GeocodingService"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"]
                ],
                declarations: [_maps_maps_component__WEBPACK_IMPORTED_MODULE_3__["MapsComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_7__["OverlaysComponent"], _routes_routes_component__WEBPACK_IMPORTED_MODULE_9__["RoutesComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-content-maps-maps-module.js.map