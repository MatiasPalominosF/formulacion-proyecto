(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{mPmp:function(e,n,t){"use strict";t.r(n),t.d(n,"DropzoneModule",function(){return N});var o=t("SVse"),i=t("mrSG"),r=t("N8BJ"),a=t("8Y7J"),c=t("/DnI"),l=t("FhuM"),s=t("Ji7U"),d=t("LK+K"),p=t("o0o1"),b=t.n(p),u=t("vuIU"),f=t("1OyB"),g=t("30Go"),h=t("cUpR");function v(e,n){if(1&e){var t=a.Yb();a.Xb(0,"ngx-dropzone-remove-badge",1),a.hc("click",function(e){return a.Ic(t),a.kc()._remove(e)}),a.Wb()}}var m=[[["ngx-dropzone-label"]]],x=["ngx-dropzone-label"],z=["fileInput"];function y(e,n){1&e&&a.pc(0,2,["*ngIf","!_hasPreviews"])}var _=[[["ngx-dropzone-preview"]],"*",[["ngx-dropzone-label"]]],k=["ngx-dropzone-preview","*","ngx-dropzone-label"];function w(e,n){if(1&e){var t=a.Yb();a.Xb(0,"ngx-dropzone-remove-badge",2),a.hc("click",function(e){return a.Ic(t),a.kc()._remove(e)}),a.Wb()}}var O=function(){var e=function e(){Object(f.a)(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=a.Mb({type:e,selectors:[["ngx-dropzone-label"]]}),e}();function C(e){return null!=e&&"false"!=="".concat(e)}var X={BACKSPACE:8,DELETE:46};X[X.BACKSPACE]="BACKSPACE",X[X.DELETE]="DELETE";var P=function(){var e=function(){function e(n){Object(f.a)(this,e),this.sanitizer=n,this._removable=!1,this.removed=new a.o,this.tabIndex=0}return Object(u.a)(e,[{key:"keyEvent",value:function(e){switch(e.keyCode){case X.BACKSPACE:case X.DELETE:this.remove()}}},{key:"_remove",value:function(e){e.stopPropagation(),this.remove()}},{key:"remove",value:function(){this._removable&&this.removed.next(this.file)}},{key:"readFile",value:function(){return Object(g.__awaiter)(this,void 0,void 0,b.a.mark(function e(){var n=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){var o=new FileReader;if(o.onload=function(n){e(n.target.result)},o.onerror=function(e){console.error("FileReader failed on file ".concat(n.file.name,".")),t(e)},!n.file)return t("No file to read. Please provide a file using the [file] Input property.");o.readAsDataURL(n.file)}));case 1:case"end":return e.stop()}},e)}))}},{key:"removable",get:function(){return this._removable},set:function(e){this._removable=C(e)}},{key:"hostStyle",get:function(){return this.sanitizer.bypassSecurityTrustStyle("\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t")}}]),e}();return e.\u0275fac=function(n){return new(n||e)(a.Rb(h.b))},e.\u0275cmp=a.Lb({type:e,selectors:[["ngx-dropzone-preview"]],hostVars:3,hostBindings:function(e,n){1&e&&a.hc("keyup",function(e){return n.keyEvent(e)}),2&e&&(a.ac("tabindex",n.tabIndex),a.Pc(n.hostStyle))},inputs:{removable:"removable",file:"file"},outputs:{removed:"removed"},ngContentSelectors:x,decls:2,vars:1,consts:[[3,"click",4,"ngIf"],[3,"click"]],template:function(e,n){1&e&&(a.qc(m),a.pc(0),a.Sc(1,v,1,0,"ngx-dropzone-remove-badge",0)),2&e&&(a.Db(1),a.rc("ngIf",n.removable))},directives:function(){return[o.u,F]},styles:["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]}),e}(),W=function(){var e=function(){function e(){Object(f.a)(this,e)}return Object(u.a)(e,[{key:"parseFileList",value:function(e,n,t,o){for(var i=[],r=[],a=0;a<e.length;a++){var c=e.item(a);this.isAccepted(c,n)?t&&c.size>t?this.rejectFile(r,c,"size"):!o&&i.length>=1?this.rejectFile(r,c,"no_multiple"):i.push(c):this.rejectFile(r,c,"type")}return{addedFiles:i,rejectedFiles:r}}},{key:"isAccepted",value:function(e,n){if("*"===n)return!0;var t=n.split(",").map(function(e){return e.toLowerCase().trim()}),o=e.type.toLowerCase(),i=e.name.toLowerCase();return!!t.find(function(e){return e.endsWith("/*")?o.split("/")[0]===e.split("/")[0]:e.startsWith(".")?i.endsWith(e):e==o})}},{key:"rejectFile",value:function(e,n,t){var o=n;o.reason=t,e.push(o)}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac}),e}(),M=function(){var e=function(){function e(n){Object(f.a)(this,e),this.service=n,this.change=new a.o,this.accept="*",this._disabled=!1,this._multiple=!0,this._maxFileSize=void 0,this._expandable=!1,this._disableClick=!1,this._isHovered=!1}return Object(u.a)(e,[{key:"_onClick",value:function(){this.disableClick||this.showFileSelector()}},{key:"_onDragOver",value:function(e){this.disabled||(this.preventDefault(e),this._isHovered=!0)}},{key:"_onDragLeave",value:function(){this._isHovered=!1}},{key:"_onDrop",value:function(e){this.disabled||(this.preventDefault(e),this._isHovered=!1,this.handleFileDrop(e.dataTransfer.files))}},{key:"showFileSelector",value:function(){this.disabled||this._fileInput.nativeElement.click()}},{key:"_onFilesSelected",value:function(e){this.handleFileDrop(e.target.files),this._fileInput.nativeElement.value="",this.preventDefault(e)}},{key:"handleFileDrop",value:function(e){var n=this.service.parseFileList(e,this.accept,this.maxFileSize,this.multiple);this.change.next({addedFiles:n.addedFiles,rejectedFiles:n.rejectedFiles,source:this})}},{key:"preventDefault",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"_hasPreviews",get:function(){return!!this._previewChildren.length}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=C(e),this._isHovered&&(this._isHovered=!1)}},{key:"multiple",get:function(){return this._multiple},set:function(e){this._multiple=C(e)}},{key:"maxFileSize",get:function(){return this._maxFileSize},set:function(e){this._maxFileSize=function(e){return isNaN(parseFloat(e))||isNaN(Number(e))?null:Number(e)}(e)}},{key:"expandable",get:function(){return this._expandable},set:function(e){this._expandable=C(e)}},{key:"disableClick",get:function(){return this._disableClick},set:function(e){this._disableClick=C(e)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(a.Rb(W,2))},e.\u0275cmp=a.Lb({type:e,selectors:[["ngx-dropzone"],["","ngx-dropzone",""]],contentQueries:function(e,n,t){var o;1&e&&a.Kb(t,P,!0),2&e&&a.Ec(o=a.ic())&&(n._previewChildren=o)},viewQuery:function(e,n){var t;1&e&&a.Zc(z,!0),2&e&&a.Ec(t=a.ic())&&(n._fileInput=t.first)},hostVars:8,hostBindings:function(e,n){1&e&&a.hc("click",function(){return n._onClick()})("dragover",function(e){return n._onDragOver(e)})("dragleave",function(){return n._onDragLeave()})("drop",function(e){return n._onDrop(e)}),2&e&&a.Jb("ngx-dz-hovered",n._isHovered)("ngx-dz-disabled",n.disabled)("expandable",n.expandable)("unclickable",n.disableClick)},inputs:{accept:"accept",disabled:"disabled",multiple:"multiple",maxFileSize:"maxFileSize",expandable:"expandable",disableClick:"disableClick",id:"id",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedBy:["aria-describedby","ariaDescribedBy"]},outputs:{change:"change"},features:[a.Cb([W])],ngContentSelectors:k,decls:5,vars:8,consts:[["type","file",3,"id","multiple","accept","disabled","change"],["fileInput",""],[4,"ngIf"]],template:function(e,n){1&e&&(a.qc(_),a.Xb(0,"input",0,1),a.hc("change",function(e){return n._onFilesSelected(e)}),a.Wb(),a.Sc(2,y,1,0,"ng-content",2),a.pc(3),a.pc(4,1)),2&e&&(a.rc("id",n.id)("multiple",n.multiple)("accept",n.accept)("disabled",n.disabled),a.Eb("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedBy),a.Db(2),a.rc("ngIf",!n._hasPreviews))},directives:[o.u],styles:["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}"]}),e}(),D=function(){var e=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(e){var o;return Object(f.a)(this,t),(o=n.call(this,e)).imageSrc="",o}return Object(u.a)(t,[{key:"ngOnInit",value:function(){var e=this;this.readFile().then(function(n){return setTimeout(function(){return e.imageSrc=n})}).catch(function(e){return console.error(e)})}}]),t}(P);return e.\u0275fac=function(n){return new(n||e)(a.Rb(h.b))},e.\u0275cmp=a.Lb({type:e,selectors:[["ngx-dropzone-image-preview"]],features:[a.Cb([{provide:P,useExisting:e}]),a.Ab],ngContentSelectors:x,decls:3,vars:2,consts:[[3,"src"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,n){1&e&&(a.qc(m),a.Sb(0,"img",0),a.pc(1),a.Sc(2,w,1,0,"ngx-dropzone-remove-badge",1)),2&e&&(a.rc("src",n.imageSrc,a.Kc),a.Db(2),a.rc("ngIf",n.removable))},directives:function(){return[o.u,F]},styles:["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   img[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]}),e}(),F=function(){var e=function e(){Object(f.a)(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Lb({type:e,selectors:[["ngx-dropzone-remove-badge"]],decls:3,vars:0,consts:[["x1","0","y1","0","x2","10","y2","10"],["x1","0","y1","10","x2","10","y2","0"]],template:function(e,n){1&e&&(a.jc(),a.Xb(0,"svg"),a.Sb(1,"line",0),a.Sb(2,"line",1),a.Wb())},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"]}),e}(),S=function(){var e=function e(){Object(f.a)(this,e)};return e.\u0275mod=a.Pb({type:e}),e.\u0275inj=a.Ob({factory:function(n){return new(n||e)},imports:[[o.c]]}),e}();function I(e,n){if(1&e){var t=a.Yb();a.Xb(0,"ngx-dropzone-preview",24),a.hc("removed",function(){a.Ic(t);var e=n.$implicit;return a.kc(2).SinglefileonRemove(e)}),a.Xb(1,"ngx-dropzone-label"),a.Uc(2),a.Wb(),a.Wb()}if(2&e){var o=n.$implicit;a.rc("removable",!0),a.Db(2),a.Xc("",o.name," (",o.type,")")}}function U(e,n){if(1&e&&(a.Xb(0,"ngx-dropzone-preview",25),a.Xb(1,"ngx-dropzone-label"),a.Uc(2),a.Wb(),a.Wb()),2&e){var t=n.$implicit;a.Db(2),a.Xc("",t.name," (",t.type,")")}}function j(e,n){if(1&e){var t=a.Yb();a.Xb(0,"ngx-dropzone-image-preview",26),a.hc("removed",function(){a.Ic(t);var e=n.$implicit;return a.kc(2).SinglefileonRemove(e)}),a.Xb(1,"ngx-dropzone-label",27),a.Uc(2),a.Wb(),a.Wb()}if(2&e){var o=n.$implicit;a.rc("file",o)("removable",!0),a.Db(2),a.Xc("",o.name," (",o.type,")")}}function L(e,n){if(1&e){var t=a.Yb();a.Xb(0,"ngx-dropzone-preview",24),a.hc("removed",function(){a.Ic(t);var e=n.$implicit;return a.kc(2).MultiplefilesonRemove(e)}),a.Xb(1,"ngx-dropzone-label"),a.Uc(2),a.Wb(),a.Wb()}if(2&e){var o=n.$implicit;a.rc("removable",!0),a.Db(2),a.Xc("",o.name," (",o.type,")")}}function E(e,n){if(1&e&&(a.Xb(0,"ngx-dropzone-preview",25),a.Xb(1,"ngx-dropzone-label"),a.Uc(2),a.Wb(),a.Wb()),2&e){var t=n.$implicit;a.Db(2),a.Xc("",t.name," (",t.type,")")}}function A(e,n){if(1&e){var t=a.Yb();a.Xb(0,"ngx-dropzone-image-preview",26),a.hc("removed",function(){a.Ic(t);var e=n.$implicit;return a.kc(2).MultiplefilesonRemove(e)}),a.Xb(1,"ngx-dropzone-label",27),a.Uc(2),a.Wb(),a.Wb()}if(2&e){var o=n.$implicit;a.rc("file",o)("removable",!0),a.Db(2),a.Xc("",o.name," (",o.type,")")}}function T(e,n){if(1&e){var t=a.Yb();a.Xb(0,"section",6),a.Xb(1,"div",7),a.Xb(2,"div",8),a.Xb(3,"m-card",9),a.hc("reloadFunction",function(e){return a.Ic(t),a.kc().reloadDorpzone(e)}),a.Vb(4,10),a.Uc(5," Single File Upload "),a.Ub(),a.Vb(6,11),a.Xb(7,"p",12),a.Uc(8,"This example uploads a single file using ngx-dropzone. User can either click on the dropzone area and select single files or just drop all selected files in the dropzone area. This example is the most basic setup for dropzone."),a.Wb(),a.Xb(9,"div",13),a.Xb(10,"div",14),a.Xb(11,"h4",15),a.Uc(12,"The default dropzone."),a.Wb(),a.Wb(),a.Xb(13,"ngx-dropzone",16),a.hc("change",function(e){return a.Ic(t),a.kc().SelectSingleFile(e)}),a.Xb(14,"ngx-dropzone-label"),a.Xb(15,"div",17),a.Xb(16,"span",18),a.Uc(17,"Drop files here to upload"),a.Wb(),a.Wb(),a.Wb(),a.Sc(18,I,3,3,"ngx-dropzone-preview",19),a.Wb(),a.Xb(19,"div",14),a.Xb(20,"h4",15),a.Uc(21,"The disabled but expanding dropzone."),a.Wb(),a.Wb(),a.Xb(22,"ngx-dropzone",20),a.hc("change",function(e){return a.Ic(t),a.kc().SelectSingleFile(e)}),a.Xb(23,"ngx-dropzone-label"),a.Xb(24,"div",17),a.Xb(25,"span",18),a.Uc(26,"Drop files here to upload"),a.Wb(),a.Wb(),a.Wb(),a.Sc(27,U,3,2,"ngx-dropzone-preview",21),a.Wb(),a.Xb(28,"div",14),a.Xb(29,"h4",15),a.Uc(30,"A custom dropzone."),a.Wb(),a.Wb(),a.Xb(31,"div",22),a.hc("change",function(e){return a.Ic(t),a.kc().SelectSingleFile(e)}),a.Xb(32,"ngx-dropzone-label"),a.Xb(33,"div",17),a.Xb(34,"span",18),a.Uc(35,"My custome dropzone"),a.Wb(),a.Wb(),a.Wb(),a.Sc(36,j,3,4,"ngx-dropzone-image-preview",23),a.Wb(),a.Wb(),a.Ub(),a.Wb(),a.Wb(),a.Wb(),a.Xb(37,"div",7),a.Xb(38,"div",8),a.Xb(39,"m-card",9),a.hc("reloadFunction",function(e){return a.Ic(t),a.kc().reloadDorpzone(e)}),a.Vb(40,10),a.Uc(41," Multiple File Upload "),a.Ub(),a.Vb(42,11),a.Xb(43,"p",12),a.Uc(44,"This example uploads a multiple files using ngx-dropzone. By default, dropzone is a multiple file uploader. User can either click on the dropzone area and select multiple files or just drop all selected files in the dropzone area. This example is the most basic setup for dropzone."),a.Wb(),a.Xb(45,"ngx-dropzone",16),a.hc("change",function(e){return a.Ic(t),a.kc().SelectMultipleFile(e)}),a.Xb(46,"ngx-dropzone-label"),a.Xb(47,"div",17),a.Xb(48,"span",18),a.Uc(49,"Drop files here to upload"),a.Wb(),a.Wb(),a.Wb(),a.Sc(50,L,3,3,"ngx-dropzone-preview",19),a.Wb(),a.Xb(51,"div",14),a.Xb(52,"h4",15),a.Uc(53,"The disabled but expanding dropzone."),a.Wb(),a.Wb(),a.Xb(54,"ngx-dropzone",20),a.hc("change",function(e){return a.Ic(t),a.kc().SelectMultipleFile(e)}),a.Xb(55,"ngx-dropzone-label"),a.Xb(56,"div",17),a.Xb(57,"span",18),a.Uc(58,"Drop files here to upload"),a.Wb(),a.Wb(),a.Wb(),a.Sc(59,E,3,2,"ngx-dropzone-preview",21),a.Wb(),a.Xb(60,"div",14),a.Xb(61,"h4",15),a.Uc(62,"A custom dropzone."),a.Wb(),a.Wb(),a.Xb(63,"div",22),a.hc("change",function(e){return a.Ic(t),a.kc().SelectMultipleFile(e)}),a.Xb(64,"ngx-dropzone-label"),a.Xb(65,"div",17),a.Xb(66,"span",18),a.Uc(67,"My custome dropzone"),a.Wb(),a.Wb(),a.Wb(),a.Sc(68,A,3,4,"ngx-dropzone-image-preview",23),a.Wb(),a.Ub(),a.Wb(),a.Wb(),a.Wb(),a.Wb()}if(2&e){var o=a.kc();a.Db(3),a.rc("options",o.options),a.Db(15),a.rc("ngForOf",o.file),a.Db(4),a.rc("disabled",!0)("expandable",!0),a.Db(5),a.rc("ngForOf",o.file),a.Db(4),a.rc("accept","image/*"),a.Db(5),a.rc("ngForOf",o.file),a.Db(3),a.rc("options",o.options),a.Db(11),a.rc("ngForOf",o.files),a.Db(4),a.rc("disabled",!0)("expandable",!0),a.Db(5),a.rc("ngForOf",o.files),a.Db(4),a.rc("accept","image/*"),a.Db(5),a.rc("ngForOf",o.files)}}var B=function(){function e(){this.options={close:!0,expand:!0,minimize:!0,reload:!0},this.files=[]}return e.prototype.ngOnInit=function(){this.breadcrumb={mainlabel:"Dropzone",links:[{name:"Home",isLink:!0,link:"/dashboard/sales"},{name:"Page",isLink:!0,link:""},{name:"Dropzone",isLink:!1}]}},e.prototype.SelectMultipleFile=function(e){var n;(n=this.files).push.apply(n,e.addedFiles)},e.prototype.SelectSingleFile=function(e){this.file=e.addedFiles},e.prototype.MultiplefilesonRemove=function(e){this.files.splice(this.files.indexOf(e),1)},e.prototype.SinglefileonRemove=function(e){this.file.splice(this.files.indexOf(e),1)},e.prototype.reloadDorpzone=function(){var e=this;this.blockUIDropzone.start("Loading.."),setTimeout(function(){e.blockUIDropzone.stop()},2500)},e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Lb({type:e,selectors:[["app-dropzone"]],decls:6,vars:3,consts:[[1,"app-content","content"],[1,"content-wrapper"],[1,"content-header","row","mb-1"],[1,"col-12",3,"breadcrumb"],[1,"content-body"],["id","dropzone-examples",4,"blockUI","blockUIMessage"],["id","dropzone-examples"],[1,"row"],[1,"col-12"],[3,"options","reloadFunction"],["mCardHeaderTitle",""],["mCardBody",""],[1,"card-text"],[1,"card-content","collapse","show"],[1,"card-header"],[1,"card-title"],[1,"_dropzone",3,"change"],[1,"dz-default","dz-message"],[1,"dz-default"],["class","dropzone",3,"removable","removed",4,"ngFor","ngForOf"],[1,"_dropzone",3,"disabled","expandable","change"],["class","dropzone",4,"ngFor","ngForOf"],["ngx-dropzone","",1,"custom-dropzone",3,"accept","change"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],[1,"dropzone",3,"removable","removed"],[1,"dropzone"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed"],[1,"dropzone1"]],template:function(e,n){1&e&&(a.Xb(0,"div",0),a.Xb(1,"div",1),a.Xb(2,"div",2),a.Sb(3,"app-breadcrumb",3),a.Wb(),a.Xb(4,"div",4),a.Sc(5,T,69,14,"section",5),a.Wb(),a.Wb(),a.Wb()),2&e&&(a.Db(3),a.rc("breadcrumb",n.breadcrumb),a.Db(2),a.rc("blockUI","dropzoneGallery")("blockUIMessage","Loading"))},directives:[c.a,r.e,l.a,M,O,o.t,P,D],styles:["*[_ngcontent-%COMP%]{font-family:Lato}.custom-dropzone[_ngcontent-%COMP%], ngx-dropzone[_ngcontent-%COMP%]{margin:20px}[_nghost-%COMP%]     .dropzone{max-width:-webkit-fit-content!important;max-width:-moz-fit-content!important;max-width:fit-content!important}[_nghost-%COMP%]     .dropzone1{position:unset!important;overflow-wrap:break-word}[_nghost-%COMP%]     .dz-default{font-size:2rem;color:#666ee8!important;text-align:center}[_nghost-%COMP%]     ._dropzone{border:2px dashed #666ee8}[_nghost-%COMP%]     .custom-dropzone{height:250px;background:#333;color:#fff;border:5px dashed #666ee8!important}"]}),Object(i.b)([Object(r.a)("dropzoneGallery"),Object(i.c)("design:type",Object)],e.prototype,"blockUIDropzone",void 0),e}(),R=t("iInd"),$=t("ErSb"),H=t("vj4e"),N=function(){function e(){}return e.\u0275mod=a.Pb({type:e}),e.\u0275inj=a.Ob({factory:function(n){return new(n||e)},imports:[[o.c,S,$.a,r.d,H.a,R.l.forChild([{path:"dropzone",component:B}])]]}),e}()}}]);