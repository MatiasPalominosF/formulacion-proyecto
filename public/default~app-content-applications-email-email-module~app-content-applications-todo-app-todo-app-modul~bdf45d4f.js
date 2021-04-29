(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-content-applications-email-email-module~app-content-applications-todo-app-todo-app-modul~bdf45d4f"],{

/***/ "alHs":
/*!******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2015/ngx-quill.js ***!
  \******************************************************/
/*! exports provided: QUILL_CONFIG_TOKEN, QuillEditorComponent, QuillModule, defaultModules, ɵ0, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUILL_CONFIG_TOKEN", function() { return QUILL_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function() { return QuillEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillModule", function() { return QuillModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModules", function() { return defaultModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return QuillViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return QuillViewHTMLComponent; });
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "9ac6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");










var _c0 = [[["", "quill-editor-toolbar", ""]]];
var _c1 = ["[quill-editor-toolbar]"];
var defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};
var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('config');
var QuillEditorComponent_1; // tslint:disable-next-line:variable-name

var Quill = null;

var getFormat = function getFormat(format, configFormat) {
  var passedFormat = format || configFormat;
  return passedFormat || 'html';
};

var ɵ0 = getFormat;

var QuillEditorComponent = QuillEditorComponent_1 = /*#__PURE__*/function () {
  function QuillEditorComponent(elementRef, domSanitizer, doc, // tslint:disable-next-line:ban-types
  platformId, renderer, zone, config) {
    var _this = this;

    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuillEditorComponent);

    this.elementRef = elementRef;
    this.domSanitizer = domSanitizer;
    this.doc = doc;
    this.platformId = platformId;
    this.renderer = renderer;
    this.zone = zone;
    this.config = config;
    this.required = false;
    this.customToolbarPosition = 'top';
    this.sanitize = false;
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.disabled = false; // used to store initial value before ViewInit

    this.valueGetter = function (quillEditor, editorElement) {
      var html = editorElement.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br><div>') {
        html = null;
      }

      var modelValue = html;
      var format = getFormat(_this.format, _this.config.format);

      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }

      return modelValue;
    };

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this.format, _this.config.format);

      if (format === 'html') {
        if (_this.sanitize) {
          value = _this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_4__["SecurityContext"].HTML, value);
        }

        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }

      return value;
    };

    this.selectionChangeHandler = function (range, oldRange, source) {
      _this.zone.run(function () {
        if (range === null) {
          _this.onBlur.emit({
            editor: _this.quillEditor,
            source: source
          });
        } else if (oldRange === null) {
          _this.onFocus.emit({
            editor: _this.quillEditor,
            source: source
          });
        }

        _this.onSelectionChanged.emit({
          editor: _this.quillEditor,
          oldRange: oldRange,
          range: range,
          source: source
        });

        if (!range && _this.onModelTouched) {
          _this.onModelTouched();
        }
      });
    };

    this.textChangeHandler = function (delta, oldDelta, source) {
      // only emit changes emitted by user interactions
      var text = _this.quillEditor.getText();

      var content = _this.quillEditor.getContents();

      var html = _this.editorElem.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br><div>') {
        html = null;
      }

      _this.zone.run(function () {
        var trackChanges = _this.trackChanges || _this.config.trackChanges;

        if ((source === Quill.sources.USER || trackChanges && trackChanges === 'all') && _this.onModelChange) {
          _this.onModelChange(_this.valueGetter(_this.quillEditor, _this.editorElem));
        }

        _this.onContentChanged.emit({
          content: content,
          delta: delta,
          editor: _this.quillEditor,
          html: html,
          oldDelta: oldDelta,
          source: source,
          text: text
        });
      });
    };
  } // tslint:disable-next-line:no-empty


  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuillEditorComponent, [{
    key: "onModelChange",
    value: function onModelChange(_modelValue) {} // tslint:disable-next-line:no-empty

  }, {
    key: "onModelTouched",
    value: function onModelTouched() {}
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this2 = this;

      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platformId)) {
        return;
      }

      if (!Quill) {
        Quill = __webpack_require__(/*! quill */ "kzlf");
      }

      this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
      var toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
      var modules = this.modules || this.config.modules || defaultModules;

      if (modules.toolbar === undefined) {
        modules.toolbar = defaultModules.toolbar;
      }

      var placeholder = this.placeholder !== undefined ? this.placeholder : this.config.placeholder;

      if (placeholder === undefined) {
        placeholder = 'Insert text here ...';
      }

      if (toolbarElem) {
        // tslint:disable-next-line:no-string-literal
        modules['toolbar'] = toolbarElem;
      }

      if (this.styles) {
        Object.keys(this.styles).forEach(function (key) {
          _this2.renderer.setStyle(_this2.editorElem, key, _this2.styles[key]);
        });
      }

      this.customOptions.forEach(function (customOption) {
        var newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      var bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

      if (!bounds) {
        bounds = this.config.bounds ? this.config.bounds : this.doc.body;
      }

      var debug = this.debug;

      if (!debug && debug !== false && this.config.debug) {
        debug = this.config.debug;
      }

      var readOnly = this.readOnly;

      if (!readOnly && this.readOnly !== false) {
        readOnly = this.config.readOnly !== undefined ? this.config.readOnly : false;
      }

      var scrollingContainer = this.scrollingContainer;

      if (!scrollingContainer && this.scrollingContainer !== null) {
        scrollingContainer = this.config.scrollingContainer === null || this.config.scrollingContainer ? this.config.scrollingContainer : null;
      }

      var formats = this.formats;

      if (!formats && formats === undefined) {
        formats = this.config.formats || this.config.formats === null ? this.config.formats : undefined;
      }

      this.quillEditor = new Quill(this.editorElem, {
        bounds: bounds,
        debug: debug,
        formats: formats,
        modules: modules,
        placeholder: placeholder,
        readOnly: readOnly,
        scrollingContainer: scrollingContainer,
        strict: this.strict,
        theme: this.theme || (this.config.theme ? this.config.theme : 'snow')
      });

      if (this.content) {
        var format = getFormat(this.format, this.config.format);

        if (format === 'object') {
          this.quillEditor.setContents(this.content, 'silent');
        } else if (format === 'text') {
          this.quillEditor.setText(this.content, 'silent');
        } else if (format === 'json') {
          try {
            this.quillEditor.setContents(JSON.parse(this.content), 'silent');
          } catch (e) {
            this.quillEditor.setText(this.content, 'silent');
          }
        } else {
          if (this.sanitize) {
            this.content = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_4__["SecurityContext"].HTML, this.content);
          }

          var contents = this.quillEditor.clipboard.convert(this.content);
          this.quillEditor.setContents(contents, 'silent');
        }

        this.quillEditor.history.clear();
      } // initialize disabled status based on this.disabled as default value


      this.setDisabledState(); // mark model as touched if editor lost focus

      this.quillEditor.on('selection-change', this.selectionChangeHandler); // update model if text changes

      this.quillEditor.on('text-change', this.textChangeHandler); // trigger created in a timeout to avoid changed models after checked
      // if you are using the editor api in created output to change the editor content

      setTimeout(function () {
        return _this2.onEditorCreated.emit(_this2.quillEditor);
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.quillEditor) {
        this.quillEditor.off('selection-change', this.selectionChangeHandler);
        this.quillEditor.off('text-change', this.textChangeHandler);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this3 = this;

      if (!this.quillEditor) {
        return;
      } // tslint:disable:no-string-literal


      if (changes['readOnly']) {
        this.quillEditor.enable(!changes['readOnly'].currentValue);
      }

      if (changes['placeholder']) {
        this.quillEditor.root.dataset.placeholder = changes['placeholder'].currentValue;
      }

      if (changes['styles']) {
        var currentStyling = changes['styles'].currentValue;
        var previousStyling = changes['styles'].previousValue;

        if (previousStyling) {
          Object.keys(previousStyling).forEach(function (key) {
            _this3.renderer.removeStyle(_this3.editorElem, key);
          });
        }

        if (currentStyling) {
          Object.keys(currentStyling).forEach(function (key) {
            _this3.renderer.setStyle(_this3.editorElem, key, _this3.styles[key]);
          });
        }
      } // tslint:enable:no-string-literal

    }
  }, {
    key: "writeValue",
    value: function writeValue(currentValue) {
      this.content = currentValue;
      var format = getFormat(this.format, this.config.format);

      if (this.quillEditor) {
        if (currentValue) {
          if (format === 'text') {
            this.quillEditor.setText(currentValue);
          } else {
            this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content));
          }

          return;
        }

        this.quillEditor.setText('');
      }
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState() {
      var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
      // store initial value to set appropriate disabled status after ViewInit
      this.disabled = isDisabled;

      if (this.quillEditor) {
        if (isDisabled) {
          this.quillEditor.disable();
          this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
        } else {
          if (!this.readOnly) {
            this.quillEditor.enable();
          }

          this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
        }
      }
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onModelChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.quillEditor) {
        return null;
      }

      var err = {};
      var valid = true;
      var textLength = this.quillEditor.getText().trim().length;

      if (this.minLength && textLength && textLength < this.minLength) {
        err.minLengthError = {
          given: textLength,
          minLength: this.minLength
        };
        valid = false;
      }

      if (this.maxLength && textLength > this.maxLength) {
        err.maxLengthError = {
          given: textLength,
          maxLength: this.maxLength
        };
        valid = false;
      }

      if (this.required && !textLength) {
        err.requiredError = {
          empty: true
        };
        valid = false;
      }

      return valid ? null : err;
    }
  }]);

  return QuillEditorComponent;
}();

QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
  return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](QUILL_CONFIG_TOKEN));
};

QuillEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: QuillEditorComponent,
  selectors: [["quill-editor"]],
  inputs: {
    required: "required",
    customToolbarPosition: "customToolbarPosition",
    sanitize: "sanitize",
    styles: "styles",
    strict: "strict",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace",
    valueGetter: "valueGetter",
    valueSetter: "valueSetter",
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    readOnly: "readOnly",
    placeholder: "placeholder",
    maxLength: "maxLength",
    minLength: "minLength",
    formats: "formats",
    scrollingContainer: "scrollingContainer",
    bounds: "bounds",
    trackChanges: "trackChanges"
  },
  outputs: {
    onEditorCreated: "onEditorCreated",
    onContentChanged: "onContentChanged",
    onSelectionChanged: "onSelectionChanged",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
      return QuillEditorComponent_1;
    })
  }, {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
      return QuillEditorComponent_1;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function QuillEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillEditorComponent.prototype, "format", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillEditorComponent.prototype, "theme", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillEditorComponent.prototype, "modules", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillEditorComponent.prototype, "debug", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Boolean)], QuillEditorComponent.prototype, "readOnly", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillEditorComponent.prototype, "placeholder", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Number)], QuillEditorComponent.prototype, "maxLength", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Number)], QuillEditorComponent.prototype, "minLength", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Boolean)], QuillEditorComponent.prototype, "required", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Array)], QuillEditorComponent.prototype, "formats", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillEditorComponent.prototype, "customToolbarPosition", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Boolean)], QuillEditorComponent.prototype, "sanitize", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillEditorComponent.prototype, "styles", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Boolean)], QuillEditorComponent.prototype, "strict", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillEditorComponent.prototype, "scrollingContainer", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillEditorComponent.prototype, "bounds", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Array)], QuillEditorComponent.prototype, "customOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillEditorComponent.prototype, "trackChanges", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Boolean)], QuillEditorComponent.prototype, "preserveWhitespace", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])], QuillEditorComponent.prototype, "onEditorCreated", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])], QuillEditorComponent.prototype, "onContentChanged", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])], QuillEditorComponent.prototype, "onSelectionChanged", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])], QuillEditorComponent.prototype, "onFocus", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])], QuillEditorComponent.prototype, "onBlur", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillEditorComponent.prototype, "valueGetter", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillEditorComponent.prototype, "valueSetter", void 0);

QuillEditorComponent = QuillEditorComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(QUILL_CONFIG_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], Object])], QuillEditorComponent);

var QuillViewHTMLComponent = /*#__PURE__*/function () {
  function QuillViewHTMLComponent(sanitizer, config) {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuillViewHTMLComponent);

    this.sanitizer = sanitizer;
    this.config = config;
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
    this.content = '';
  }

  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuillViewHTMLComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.theme) {
        var theme = changes.theme.currentValue || (this.config.theme ? this.config.theme : 'snow');
        this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
      } else if (!this.theme) {
        var _theme = this.config.theme ? this.config.theme : 'snow';

        this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
      }

      if (changes.content) {
        this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
      }
    }
  }]);

  return QuillViewHTMLComponent;
}();

QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
  return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](QUILL_CONFIG_TOKEN));
};

QuillViewHTMLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: QuillViewHTMLComponent,
  selectors: [["quill-view-html"]],
  inputs: {
    content: "content",
    theme: "theme"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
  template: function QuillViewHTMLComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.themeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
  styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
  encapsulation: 2
});

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillViewHTMLComponent.prototype, "content", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillViewHTMLComponent.prototype, "theme", void 0);

QuillViewHTMLComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(QUILL_CONFIG_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], Object])], QuillViewHTMLComponent); // tslint:disable-next-line:variable-name

var Quill$1 = null;

var getFormat$1 = function getFormat$1(format, configFormat) {
  var passedFormat = format || configFormat;
  return passedFormat || 'html';
};

var QuillViewComponent = /*#__PURE__*/function () {
  function QuillViewComponent( // tslint:disable-next-line:ban-types
  platformId, config, renderer, elementRef) {
    var _this4 = this;

    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuillViewComponent);

    this.platformId = platformId;
    this.config = config;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.strict = true;
    this.customOptions = [];
    this.preserveWhitespace = false;

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat$1(_this4.format, _this4.config.format);
      var content = value;

      if (format === 'html' || format === 'text') {
        content = quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          content = JSON.parse(value);
        } catch (e) {
          content = [{
            insert: value
          }];
        }
      }

      quillEditor.setContents(content);
    };
  }

  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuillViewComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this.quillEditor) {
        return;
      }

      if (changes.content) {
        this.valueSetter(this.quillEditor, changes.content.currentValue);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platformId)) {
        return;
      }

      if (!Quill$1) {
        Quill$1 = __webpack_require__(/*! quill */ "kzlf");
      }

      var modules = this.modules || this.config.modules || defaultModules;
      modules.toolbar = false;
      this.customOptions.forEach(function (customOption) {
        var newCustomOption = Quill$1.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill$1.register(newCustomOption, true);
      });
      var debug = this.debug;

      if (!debug && debug !== false && this.config.debug) {
        debug = this.config.debug;
      }

      var formats = this.formats;

      if (!formats && formats === undefined) {
        formats = this.config.formats || this.config.formats === null ? this.config.formats : undefined;
      }

      var theme = this.theme || (this.config.theme ? this.config.theme : 'snow');
      this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
      this.quillEditor = new Quill$1(this.editorElem, {
        debug: debug,
        formats: formats,
        modules: modules,
        readOnly: true,
        strict: this.strict,
        theme: theme
      });
      this.renderer.addClass(this.editorElem, 'ngx-quill-view');

      if (this.content) {
        this.valueSetter(this.quillEditor, this.content);
      }
    }
  }]);

  return QuillViewComponent;
}();

QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
  return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](QUILL_CONFIG_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
};

QuillViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: QuillViewComponent,
  selectors: [["quill-view"]],
  inputs: {
    strict: "strict",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace",
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    formats: "formats",
    content: "content"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function QuillViewComponent_Template(rf, ctx) {},
  styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
  encapsulation: 2
});

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillViewComponent.prototype, "format", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", String)], QuillViewComponent.prototype, "theme", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillViewComponent.prototype, "modules", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillViewComponent.prototype, "debug", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Array)], QuillViewComponent.prototype, "formats", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Boolean)], QuillViewComponent.prototype, "strict", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)], QuillViewComponent.prototype, "content", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Array)], QuillViewComponent.prototype, "customOptions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Boolean)], QuillViewComponent.prototype, "preserveWhitespace", void 0);

QuillViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(QUILL_CONFIG_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]])], QuillViewComponent);
var QuillModule_1;

var QuillModule = QuillModule_1 = /*#__PURE__*/function () {
  function QuillModule() {
    Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuillModule);
  }

  Object(D_Mat_as_Universidad_Proyecto_formulaci_n_formulacion_proyecto_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuillModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: QuillModule_1,
        providers: [{
          provide: QUILL_CONFIG_TOKEN,
          // tslint:disable-next-line:only-arrow-functions
          useValue: config || {
            modules: defaultModules
          }
        }]
      };
    }
  }]);

  return QuillModule;
}();

QuillModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: QuillModule
});
QuillModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function QuillModule_Factory(t) {
    return new (t || QuillModule)();
  },
  providers: [],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return QuillEditorComponent_1;
        })
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return QuillEditorComponent_1;
        })
      }],
      selector: 'quill-editor',
      template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [QUILL_CONFIG_TOKEN]
      }]
    }];
  }, {
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
      selector: 'quill-view-html',
      template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n",
      styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [QUILL_CONFIG_TOKEN]
      }]
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
      selector: 'quill-view',
      template: "\n",
      styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"]
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [QUILL_CONFIG_TOKEN]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }];
  }, {
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuillModule, {
    declarations: function declarations() {
      return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      providers: []
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default~app-content-applications-email-email-module~app-content-applications-todo-app-todo-app-modul~bdf45d4f.js.map