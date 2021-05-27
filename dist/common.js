(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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

/***/ "+nQj":
/*!*************************************************!*\
  !*** ./src/app/_api/workers/workers.service.ts ***!
  \*************************************************/
/*! exports provided: WorkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkersService", function() { return WorkersService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var WorkersService = /** @class */ (function () {
    function WorkersService(afs) {
        this.afs = afs;
        this.selectedWorker = {};
        this.workerCollection = afs.collection('workers');
        this.workers = this.workerCollection.valueChanges();
    }
    WorkersService.prototype.getFullInfoEmployees = function (uidBoss) {
        return this.workers = this.afs.collection('users', function (ref) { return ref.where('uidboss', '==', "" + uidBoss); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    WorkersService.prototype.getOneWorker = function (idWorker, idBoss) {
        this.workerDoc = this.afs.collection('workers').doc("" + idBoss).collection('workersInfo').doc("" + idWorker);
        return this.worker = this.workerDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
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
    WorkersService.prototype.addWorker = function (worker, idBoss) {
        var workerId = worker.id;
        this.afs.collection('users').doc("" + workerId).set(worker).catch(function (error) {
            // An error happened.
            console.log(error);
        });
        //this.afs.collection('workers').doc(`${idBoss}`).collection<WorkersInterface>('workersInfo').doc(`${workerId}`).set(worker);
    };
    WorkersService.prototype.updateWorker = function (worker, idBoss) {
        var idWorker = worker.id;
        this.workerDoc = this.afs.collection('users').doc("" + idWorker);
        try {
            this.workerDoc.update(worker);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    WorkersService.prototype.deleteWorker = function (idWorker, idBoss) {
        this.workerDoc = this.afs.collection('users').doc("" + idWorker);
        this.workerDoc.delete();
    };
    WorkersService.ɵfac = function WorkersService_Factory(t) { return new (t || WorkersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"])); };
    WorkersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WorkersService, factory: WorkersService.ɵfac, providedIn: 'root' });
    return WorkersService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorkersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"] }]; }, null); })();


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

/***/ "3O3Q":
/*!*****************************************************!*\
  !*** ./src/app/_core/confirmation-dialog.module.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmationDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogModule", function() { return ConfirmationDialogModule; });
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "3CGN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




var ConfirmationDialogModule = /** @class */ (function () {
    function ConfirmationDialogModule() {
    }
    ConfirmationDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConfirmationDialogModule });
    ConfirmationDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ConfirmationDialogModule_Factory(t) { return new (t || ConfirmationDialogModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]] });
    return ConfirmationDialogModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfirmationDialogModule, { declarations: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmationDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"]],
                exports: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ]
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

/***/ "TwWe":
/*!*************************************************!*\
  !*** ./src/app/_api/product/product.service.ts ***!
  \*************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var ProductService = /** @class */ (function () {
    function ProductService(afs) {
        this.afs = afs;
        this.selectedProduct = {};
        this.productListSelected = [];
        this.ingredientsSelected = [];
        this.workerCollection = afs.collection('product');
        this.products = this.workerCollection.valueChanges();
    }
    ProductService.prototype.getFullInfoProduct = function (uidBoss) {
        return this.products = this.afs.collection('product').doc("" + uidBoss).collection('productInfo')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ProductService.prototype.getMaterial = function (uidBoss) {
        return this.products = this.afs.collection('product').doc("" + uidBoss).collection('productInfo', function (ref) { return ref.where('ismaterial', '==', true); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ProductService.prototype.getProductById = function (uidBoss, idProduct) {
        this.productDoc = this.afs.doc("product/" + uidBoss + "/productInfo/" + idProduct);
        return this.product = this.productDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
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
    ProductService.prototype.addProduct = function (producto, idBoss) {
        var tempId = this.afs.createId();
        producto.id = tempId;
        console.log("Producto en service: ", producto.id);
        this.afs.collection('product').doc("" + idBoss).collection('productInfo').doc(tempId).set(producto); //SE SETEA CON UN ID ESPECÍFICO
        //this.afs.collection('product').doc(`${idBoss}`).collection('productInfo').add(producto); //SE SETEA CON UN ID ALEATORIO QUE DA FIREBASE
    };
    ProductService.prototype.updateProduct = function (producto, idProduct, idBoss) {
        //console.log(producto);
        console.log("IDPRODUCT:", idProduct);
        this.productDoc = this.afs.collection('product').doc("" + idBoss).collection('productInfo').doc("" + idProduct);
        this.productDoc.update(producto);
    };
    ProductService.prototype.updateFieldOnProduct = function (idProduct, idBoss, value) {
        this.afs.collection('product').doc("" + idBoss).collection('productInfo').doc("" + idProduct).update({ "stock": value });
    };
    ProductService.prototype.deleteProduct = function (idProduct, idBoss) {
        this.productDoc = this.afs.collection('product').doc("" + idBoss).collection('productInfo').doc("" + idProduct);
        this.productDoc.delete();
    };
    ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"])); };
    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
    return ProductService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "Umpa":
/*!***********************************************!*\
  !*** ./src/app/_api/client/client.service.ts ***!
  \***********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var ClientService = /** @class */ (function () {
    function ClientService(afs) {
        this.afs = afs;
        this.selectedClient = {};
        this.clientCollection = afs.collection('clients');
        this.clients = this.clientCollection.valueChanges();
    }
    ClientService.prototype.getFullInfoClient = function (uidBoss) {
        return this.clients = this.afs.collection('clients').doc("" + uidBoss).collection('clientsInfo')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.rut = action.payload.doc.id;
                return data;
            });
        }));
    };
    ClientService.prototype.addClient = function (client, idBoss) {
        var idClient = client.rut;
        this.afs.collection('clients').doc("" + idBoss).collection('clientsInfo').doc("" + idClient).set(client);
    };
    ClientService.prototype.updateClient = function (client, idBoss) {
        var idClient = client.rut;
        this.clientDoc = this.afs.collection('clients').doc("" + idBoss).collection('clientsInfo').doc("" + idClient);
        this.clientDoc.update(client);
    };
    ClientService.prototype.deleteClient = function (idClient, idBoss) {
        this.clientDoc = this.afs.collection('clients').doc("" + idBoss).collection('clientsInfo').doc("" + idClient);
        this.clientDoc.delete();
    };
    ClientService.prototype.getOneClient = function (idClient, idBoss) {
        this.clientDoc = this.afs.doc("clients/" + idBoss + "/clientsInfo/" + idClient);
        return this.client = this.clientDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.rut = action.payload.id;
                return data;
            }
        }));
    };
    ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
    ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });
    return ClientService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


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

/***/ "b3t4":
/*!*******************************************!*\
  !*** ./src/app/_api/sale/sale.service.ts ***!
  \*******************************************/
/*! exports provided: SaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleService", function() { return SaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "g+7Q");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var SaleService = /** @class */ (function () {
    function SaleService(afs) {
        this.afs = afs;
        this.saleCollection = afs.collection('product');
        this.sales = this.saleCollection.valueChanges();
    }
    SaleService.prototype.addSaleProduct = function (sale, idBoss) {
        var tempId = this.afs.createId();
        sale.id = tempId;
        this.afs.collection('sale').doc("" + idBoss).collection('saleInfo').doc(tempId).set(sale);
    };
    SaleService.prototype.updateSale = function (producto, idSale, idBoss) {
        this.saleDoc = this.afs.collection('sale').doc("" + idBoss).collection('saleInfo').doc("" + idSale);
        this.saleDoc.update(producto);
    };
    SaleService.prototype.getFullInfoSaleNotCancelled = function (uidBoss) {
        //.orderBy('date','desc')
        return this.sales = this.afs.collection('sale').doc("" + uidBoss).collection('saleInfo', function (ref) { return ref.where('cancellation', '==', false).orderBy('date', 'desc'); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    SaleService.prototype.getFullInfoSale = function (uidBoss) {
        return this.sales = this.afs.collection('sale').doc("" + uidBoss).collection('saleInfo', function (ref) { return ref.orderBy('date', 'desc'); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    SaleService.prototype.getCancellationSale = function (uidBoss) {
        return this.sales = this.afs.collection('sale').doc("" + uidBoss).collection('saleInfo', function (ref) { return ref.where('cancellation', '==', true).orderBy('datecancellation', 'desc'); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    SaleService.ɵfac = function SaleService_Factory(t) { return new (t || SaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
    SaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SaleService, factory: SaleService.ɵfac, providedIn: 'root' });
    return SaleService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
var environment = {
    production: true,
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


/***/ }),

/***/ "lfl4":
/*!***************************************************!*\
  !*** ./src/app/_directives/sortable.directive.ts ***!
  \***************************************************/
/*! exports provided: NgbdSortableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function() { return NgbdSortableHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var rotate = {
    asc: 'desc',
    desc: '',
    '': 'asc'
};
var NgbdSortableHeader = /** @class */ (function () {
    function NgbdSortableHeader() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbdSortableHeader.prototype.rotate = function () {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    };
    NgbdSortableHeader.ɵfac = function NgbdSortableHeader_Factory(t) { return new (t || NgbdSortableHeader)(); };
    NgbdSortableHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdSortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdSortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeader_click_HostBindingHandler() { return ctx.rotate(); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
        } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });
    return NgbdSortableHeader;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdSortableHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'th[sortable]',
                host: {
                    '[class.asc]': 'direction === "asc"',
                    '[class.desc]': 'direction === "desc"',
                    '(click)': 'rotate()'
                }
            }]
    }], null, { sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "sJBm":
/*!*******************************************************************************!*\
  !*** ./node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! chartist */ "uki+")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Chartist) {
      return root.returnExportsGlobal = factory(Chartist);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Chartist) {
  /**
   * Chartist.js plugin to display a data label on top of the points in a line chart.
   *
   */

  /* global Chartist */
  (function (window, document, Chartist) {
    'use strict';

    var defaultOptions = {
      currency: undefined,
      currencyFormatCallback: undefined,
      tooltipOffset: {
        x: 0,
        y: -20
      },
      anchorToPoint: false,
      appendToBody: false,
      class: undefined,
      pointClass: 'ct-point'
    };
    Chartist.plugins = Chartist.plugins || {};

    Chartist.plugins.tooltip = function (options) {
      options = Chartist.extend({}, defaultOptions, options);
      return function tooltip(chart) {
        var tooltipSelector = options.pointClass;

        if (chart instanceof Chartist.Bar) {
          tooltipSelector = 'ct-bar';
        } else if (chart instanceof Chartist.Pie) {
          // Added support for donut graph
          if (chart.options.donut) {
            tooltipSelector = 'ct-slice-donut';
          } else {
            tooltipSelector = 'ct-slice-pie';
          }
        }

        var $chart = chart.container;
        var $toolTip = $chart.querySelector('.chartist-tooltip');

        if (!$toolTip) {
          $toolTip = document.createElement('div');
          $toolTip.className = !options.class ? 'chartist-tooltip' : 'chartist-tooltip ' + options.class;

          if (!options.appendToBody) {
            $chart.appendChild($toolTip);
          } else {
            document.body.appendChild($toolTip);
          }
        }

        var height = $toolTip.offsetHeight;
        var width = $toolTip.offsetWidth;
        hide($toolTip);

        function on(event, selector, callback) {
          $chart.addEventListener(event, function (e) {
            if (!selector || hasClass(e.target, selector)) callback(e);
          });
        }

        on('mouseover', tooltipSelector, function (event) {
          var $point = event.target;
          var tooltipText = '';
          var isPieChart = chart instanceof Chartist.Pie ? $point : $point.parentNode;
          var seriesName = isPieChart ? $point.parentNode.getAttribute('ct:meta') || $point.parentNode.getAttribute('ct:series-name') : '';
          var meta = $point.getAttribute('ct:meta') || seriesName || '';
          var hasMeta = !!meta;
          var value = $point.getAttribute('ct:value');

          if (options.transformTooltipTextFnc && typeof options.transformTooltipTextFnc === 'function') {
            value = options.transformTooltipTextFnc(value);
          }

          if (options.tooltipFnc && typeof options.tooltipFnc === 'function') {
            tooltipText = options.tooltipFnc(meta, value);
          } else {
            if (options.metaIsHTML) {
              var txt = document.createElement('textarea');
              txt.innerHTML = meta;
              meta = txt.value;
            }

            meta = '<span class="chartist-tooltip-meta">' + meta + '</span>';

            if (hasMeta) {
              tooltipText += meta + '<br>';
            } else {
              // For Pie Charts also take the labels into account
              // Could add support for more charts here as well!
              if (chart instanceof Chartist.Pie) {
                var label = next($point, 'ct-label');

                if (label) {
                  tooltipText += text(label) + '<br>';
                }
              }
            }

            if (value) {
              if (options.currency) {
                if (options.currencyFormatCallback != undefined) {
                  value = options.currencyFormatCallback(value, options);
                } else {
                  value = options.currency + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                }
              }

              value = '<span class="chartist-tooltip-value">' + value + '</span>';
              tooltipText += value;
            }
          }

          if (tooltipText) {
            $toolTip.innerHTML = tooltipText;
            setPosition(event);
            show($toolTip); // Remember height and width to avoid wrong position in IE

            height = $toolTip.offsetHeight;
            width = $toolTip.offsetWidth;
          }
        });
        on('mouseout', tooltipSelector, function () {
          hide($toolTip);
        });
        on('mousemove', null, function (event) {
          if (false === options.anchorToPoint) setPosition(event);
        });

        function setPosition(event) {
          height = height || $toolTip.offsetHeight;
          width = width || $toolTip.offsetWidth;
          var offsetX = -width / 2 + options.tooltipOffset.x;
          var offsetY = -height + options.tooltipOffset.y;
          var anchorX, anchorY;

          if (!options.appendToBody) {
            var box = $chart.getBoundingClientRect();
            var left = event.pageX - box.left - window.pageXOffset;
            var top = event.pageY - box.top - window.pageYOffset;

            if (true === options.anchorToPoint && event.target.x2 && event.target.y2) {
              anchorX = parseInt(event.target.x2.baseVal.value);
              anchorY = parseInt(event.target.y2.baseVal.value);
            }

            $toolTip.style.top = (anchorY || top) + offsetY + 'px';
            $toolTip.style.left = (anchorX || left) + offsetX + 'px';
          } else {
            $toolTip.style.top = event.pageY + offsetY + 'px';
            $toolTip.style.left = event.pageX + offsetX + 'px';
          }
        }
      };
    };

    function show(element) {
      if (!hasClass(element, 'tooltip-show')) {
        element.className = element.className + ' tooltip-show';
      }
    }

    function hide(element) {
      var regex = new RegExp('tooltip-show' + '\\s*', 'gi');
      element.className = element.className.replace(regex, '').trim();
    }

    function hasClass(element, className) {
      return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function next(element, className) {
      do {
        element = element.nextSibling;
      } while (element && !hasClass(element, className));

      return element;
    }

    function text(element) {
      return element.innerText || element.textContent;
    }
  })(window, document, Chartist);

  return Chartist.plugins.tooltips;
});

/***/ })

}]);
//# sourceMappingURL=common.js.map