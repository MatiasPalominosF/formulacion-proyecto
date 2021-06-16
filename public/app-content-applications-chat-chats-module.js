(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-applications-chat-chats-module"],{

/***/ "5mUT":
/*!********************************************************************************!*\
  !*** ./src/app/content/applications/chat/static-chat/static-chat.component.ts ***!
  \********************************************************************************/
/*! exports provided: StaticChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticChatComponent", function() { return StaticChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/app/_services/application-api.service */ "wW7e");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_helpers/app.constants */ "2iER");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");














var _c0 = ["content"];
var _c1 = ["messages"];
var _c2 = function (a0, a1) { return { "active": a0, "": a1 }; };
function StaticChatComponent_li_84_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_li_84_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.contentOverlay($event); })("click", function StaticChatComponent_li_84_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var chats_r6 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.showChat(chats_r6.friendId, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chats_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c2, chats_r6.isSelected === true, chats_r6.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chats_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chats_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chats_r6.showMessage);
} }
function StaticChatComponent_li_89_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_li_89_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.contentOverlay($event); })("click", function StaticChatComponent_li_89_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var contact_r10 = ctx.$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.showChat(contact_r10.friendId, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c2, contact_r10.isSelected === true, contact_r10.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", contact_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", contact_r10.showMessage, "");
} }
function StaticChatComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_div_106_Template_i_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.showSidebar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_div_106_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.ShowChatProfile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chats_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chats_r14.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chats_r14.senderName);
} }
var _c3 = function (a0, a1) { return { "chat-right": a0, "chat-left": a1 }; };
function StaticChatComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messages_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c3, messages_r18.sender == 0, messages_r18.sender == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", messages_r18.senderImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](messages_r18.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](messages_r18.time);
} }
function StaticChatComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Devloper");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chats_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chats_r20.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chats_r20.senderName);
} }
/**
 * ChatHistory class
 */
var ChatHistory = /** @class */ (function () {
    function ChatHistory(message, sender, senderImage, senderName, time) {
        this.message = message;
        this.sender = sender;
        this.senderImage = senderImage;
        this.senderName = senderName;
        this.time = time;
    }
    return ChatHistory;
}());
var ChatHeader = /** @class */ (function () {
    function ChatHeader(senderImage, senderName) {
        this.senderImage = senderImage;
        this.senderName = senderName;
    }
    return ChatHeader;
}());
var ContactHeader = /** @class */ (function () {
    function ContactHeader(senderImage, senderName) {
        this.senderImage = senderImage;
        this.senderName = senderName;
    }
    return ContactHeader;
}());
/**
 * Chats class
 */
var Chats = /** @class */ (function () {
    function Chats(friendId, name, image, showMessage, _ChatHistory, chatHeader, isSelected) {
        this.friendId = friendId;
        this.name = name;
        this.image = image;
        this.showMessage = showMessage;
        this._ChatHistory = _ChatHistory;
        this.chatHeader = chatHeader;
        this.isSelected = isSelected;
    }
    return Chats;
}());
/**
 * Contact class
 */
var Contact = /** @class */ (function () {
    function Contact(friendId, name, image, showMessage, isSelected, contactHeader) {
        this.friendId = friendId;
        this.name = name;
        this.image = image;
        this.showMessage = showMessage;
        this.isSelected = isSelected;
        this.contactHeader = contactHeader;
    }
    return Contact;
}());
var StaticChatComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param ApplicationApiService  chatApiService;
     * @param Renderer2              renderer
     */
    function StaticChatComponent(chatApiService, renderer, toastr) {
        var _this = this;
        this.chatApiService = chatApiService;
        this.renderer = renderer;
        this.toastr = toastr;
        this.status = true;
        this.contactChat = [];
        this.headerChat = [];
        this.Contact = [];
        this.newMessage = '';
        this.newMessageArray = [];
        this.config = { wheelPropagation: false };
        this.chatsList = [];
        this.contactList = [];
        this.temp = [];
        this.temp2 = this.chatsList;
        this.temp3 = this.contactList;
        this.ContactHeader = [];
        /**
         * Chat scroll to bottom
         */
        this.scrollToBottom = function () {
            try {
                _this.content.nativeElement.scrollTop = _this.content.nativeElement.scrollHeight;
            }
            catch (err) { }
        };
        this.headerArray = this.chatApiService.getChatContactData().subscribe(function (Response) {
            _this.headerArray = Response;
        });
    }
    /**
     * Scroll chat to bottom
     */
    StaticChatComponent.prototype.ngAfterViewInit = function () {
        this.messages.forEach(this.scrollToBottom);
        this.messages.changes.subscribe(this.scrollToBottom);
    };
    /**
     * OnInit
     */
    StaticChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toastr.clear();
        this.toastr.warning('', 'Please login through a personal account to experience the Live chat. We have it disabled for demo account.', { timeOut: 5000, disableTimeOut: true, closeButton: true });
        this.chatArray = this.chatApiService.getChatsData().subscribe(function (Response) {
            _this.chatArray = Response;
            _this.contactChat = _this.chatArray[2].ChatHistory;
            _this.chatsList.push(new Chats(2, 'Kristopher Candy', '../../../assets/images/portrait/small/avatar-s-7.png', ' Thank you', _this.chatArray[1].ChatHistory, _this.chatArray[1].chatHeader, false));
            _this.chatsList.push(new Chats(3, 'Sarah Woods', '../../../assets/images/portrait/small/avatar-s-8.png', ' Hello krish!', _this.chatArray[2].ChatHistory, _this.chatArray[2].chatHeader, false));
            _this.contactList.push(new Contact(1, 'Kristopher Candy', '../../../assets/images/portrait/small/avatar-s-9.png', 'lemon drops', false, _this.headerArray[0].contactHeader));
            _this.contactList.push(new Contact(2, 'Jenny Perich', '../../../assets/images/portrait/small/avatar-s-10.png', 'candy canes', false, _this.headerArray[1].contactHeader));
            _this.contactList.push(new Contact(3, 'Rock Montgomery', '../../../assets/images/portrait/small/avatar-s-11.png', 'powder gum', false, _this.headerArray[2].contactHeader));
            _this.contactList.push(new Contact(4, 'Heather Howell', '../../../assets/images/portrait/small/avatar-s-12.png', 'cheesecake toffee', false, _this.headerArray[3].contactHeader));
        });
    };
    /**
     * Filter Chat
     *
     * @param event     search event
     */
    StaticChatComponent.prototype.updateFilter = function (event) {
        var value = event.target.value.toLowerCase();
        this.chatsList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp2); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.chatsList);
        // filter our data
        var temp = this.chatsList.filter(function (d) {
            return d.name.toLowerCase().indexOf(value) !== -1 || !value;
        });
        // update the rows
        this.chatsList = temp;
        // Whenever the filter changes, always go back to the first page
    };
    StaticChatComponent.prototype.updateFilter1 = function (event) {
        var value = event.target.value.toLowerCase();
        this.contactList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.temp3); // and here you have to initialize it with your data
        this.temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.contactList);
        // filter our data
        var temp = this.contactList.filter(function (d) {
            return d.name.toLowerCase().indexOf(value) !== -1 || !value;
        });
        // update the rows
        this.contactList = temp;
        // Whenever the filter changes, always go back to the first page
    };
    /**
     * Send message
     */
    StaticChatComponent.prototype.sendMessage = function () {
        if (this.newMessage !== null && this.newMessage !== '') {
            this.contactChat.push({
                message: [this.newMessage],
                sender: 0,
                senderImage: '',
                time: '3:35AM',
            });
            this.newMessage = null;
        }
    };
    /**
     * Message send on Enter
     *
     * @param value       New message
     */
    StaticChatComponent.prototype.onEnter = function (value) {
        this.newMessage = value;
        if (this.newMessage !== null && this.newMessage !== '') {
            this.contactChat.push({
                message: [this.newMessage],
                sender: 0,
                senderImage: '',
                time: '3:35AM'
            });
            this.newMessage = null;
        }
    };
    /**
     * Display chat when click on contact
     *
     * @param friendId      Friend id
     */
    StaticChatComponent.prototype.showChat = function (friendId, number) {
        this.contactChat = [];
        if (number === 1) {
            for (var i = 0; i < this.chatsList.length; i++) {
                if (friendId !== this.chatsList[i].friendId) {
                    this.chatsList[i].isSelected = false;
                }
                if (friendId === this.chatsList[i].friendId) {
                    this.chatsList[i].isSelected = true;
                }
            }
            for (var i = 0; i < this.contactList.length; i++) {
                this.contactList[i].isSelected = false;
            }
            for (var _i = 0, _a = this.chatsList; _i < _a.length; _i++) {
                var friend = _a[_i];
                if (friend.friendId === friendId) {
                    this.contactChat = this.chatArray[friendId - 1].ChatHistory;
                    this.headerChat = this.chatArray[friendId - 1].chatHeader;
                    break;
                }
            }
        }
        else if (number === 2) {
            for (var i = 0; i < this.contactList.length; i++) {
                if (friendId !== this.contactList[i].friendId) {
                    this.contactList[i].isSelected = false;
                }
                if (friendId === this.contactList[i].friendId) {
                    this.contactList[i].isSelected = true;
                }
            }
            for (var i = 0; i < this.chatsList.length; i++) {
                this.chatsList[i].isSelected = false;
            }
            this.contactChat = [];
            this.headerChat = this.headerArray[friendId - 1].contactHeader;
        }
    };
    /**
     * Overlay add/remove fuction in responsive
     *
     * @param event     Overlay click event
     */
    StaticChatComponent.prototype.contentOverlay = function (event) {
        var toggleIcon = document.getElementById('chat-overlay1');
        var toggle = document.getElementById('chat-area d-none');
        if (event.currentTarget.className === 'chatSidebar ng-star-inserted') {
            this.renderer.addClass(toggleIcon, 'd-none');
            this.renderer.removeClass(toggle, 'd-none');
        }
    };
    /**
    * Warning add/remove class
    *
    * @param event    click event
    */
    StaticChatComponent.prototype.chatFavorite = function (event) {
        var chatIcon = document.getElementById('chat-icon');
        if (event.currentTarget.className === 'chat-icon-favorite') {
            this.renderer.addClass(chatIcon, 'warning');
        }
        else if (event.currentTarget.className === 'chat-icon-favorite warning') {
            this.renderer.removeClass(chatIcon, 'warning');
        }
    };
    StaticChatComponent.prototype.showContact = function (friendId) {
        this.contactChat = [];
        for (var i = 0; i < this.contactList.length; i++) {
            if (friendId !== this.contactList[i].friendId) {
                this.contactList[i].isSelected = false;
            }
            if (friendId === this.contactList[i].friendId) {
                this.contactList[i].isSelected = true;
            }
        }
    };
    /**
    * Show add/remove class at open profile
    *
    * @param event    Overlay click event
    */
    StaticChatComponent.prototype.showProfile = function (event) {
        var toggleIcon = document.getElementById('user-profile');
        var toggle = document.getElementById('overlayChat');
        if (event.currentTarget.className === 'chat-sidebar-profile-toggle') {
            this.renderer.addClass(toggleIcon, 'show');
            this.renderer.addClass(toggle, 'show');
        }
        else if (event.currentTarget.className === 'chat-profile-close') {
            this.renderer.removeClass(toggleIcon, 'show');
            this.renderer.removeClass(toggle, 'show');
        }
    };
    /**
     * Show add/remove function in responsive
     *
     * @param event    Overlay click event
     */
    StaticChatComponent.prototype.showSidebar = function (event) {
        if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            var toggleIcon = document.getElementById('sidebar-card');
            var toggle = document.getElementById('overlayChat');
            var toggleChat = document.getElementById('sidebar-left');
            if (event.currentTarget.className === 'ficon feather ft-message-square chat-sidebar-toggle chat-start-icon font-large-3 p-3 mb-1' ||
                'ficon feather ft-align-justify font-large-1 cursor-pointer') {
                this.renderer.addClass(toggle, 'show');
                this.renderer.addClass(toggleIcon, 'show');
            }
            if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
                this.renderer.removeClass(toggleChat, 'sidebar-fixed');
            }
        }
    };
    /**
      * Show add/remove function in responsive
      *
      * @param event    Overlay click event
      */
    StaticChatComponent.prototype.Sidebar = function (event) {
        var toggleChat = document.getElementById('sidebar-card');
        var toggleIcon = document.getElementById('chat-profile');
        var toggle = document.getElementById('overlayChat');
        if (event.currentTarget.className === 'chat-sidebar-close' || 'chat-overlay show') {
            this.renderer.removeClass(toggle, 'show');
            this.renderer.removeClass(toggleChat, 'show');
            this.renderer.removeClass(toggleIcon, 'show');
        }
    };
    /**
      * Show add/remove function
      *
      * @param event    Overlay click event
      */
    StaticChatComponent.prototype.ShowChatProfile = function (event) {
        var toggleIcon = document.getElementById('chat-profile');
        var toggle = document.getElementById('overlayChat');
        if (event.currentTarget.className === 'avatar chat-profile-toggle m-0 mr-1') {
            this.renderer.addClass(toggleIcon, 'show');
            this.renderer.addClass(toggle, 'show');
        }
    };
    /**
    * Show add/remove function
    *
    * @param event    Overlay click event
    */
    StaticChatComponent.prototype.ChatProfile = function (event) {
        var toggleIcon = document.getElementById('chat-profile');
        var toggle = document.getElementById('overlayChat');
        if (event.currentTarget.className === 'chat-profile-close') {
            this.renderer.removeClass(toggleIcon, 'show');
            this.renderer.removeClass(toggle, 'show');
        }
    };
    StaticChatComponent.ɵfac = function StaticChatComponent_Factory(t) { return new (t || StaticChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
    StaticChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StaticChatComponent, selectors: [["app-static-chat"]], viewQuery: function StaticChatComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messages = _t);
        } }, decls: 151, vars: 11, consts: [[1, "app-content", "content"], ["id", "sidebar-left", 1, "sidebar-left"], [1, "sidebar"], ["id", "user-profile", 1, "chat-user-profile"], [1, "chat-user-profile-header", "text-center", "border-bottom"], [1, "chat-profile-close", 3, "click"], [1, "ficon", "feather", "ft-x"], [1, "my-2"], ["src", "../../../assets/images/portrait/small/avatar-s-19.png", "alt", "user_avatar", "height", "100", "width", "100", 1, "round", "mb-1"], [1, "mb-0"], [1, "chat-user-profile-content"], ["fxFlex", "auto", 1, "chat-user-profile-scroll", 3, "perfectScrollbar"], [1, "text-uppercase", "mb-1"], [1, "mb-2"], [1, "list-unstyled", "mb-2"], [1, "mb-25"], ["href", ""], [1, "list-unstyled"], [1, "mb-50"], ["href", "", 1, "d-flex", "align-items-center"], [1, "ficon", "feather", "ft-tag", "mr-50"], [1, "ficon", "feather", "ft-star", "mr-50"], [1, "ficon", "feather", "ft-image", "mr-50"], [1, "ficon", "feather", "ft-trash-2", "mr-50"], [1, "ficon", "feather", "ft-x-circle", "mr-50"], ["id", "sidebar-card", 1, "chat-sidebar", "card"], [1, "chat-sidebar-close", 3, "click"], [1, "chat-sidebar-search"], [1, "d-flex", "align-items-center"], [1, "chat-sidebar-profile-toggle", 3, "click"], [1, "avatar"], ["src", "../../../assets/images/portrait/small/avatar-s-19.png", "alt", "user_avatar", "height", "36", "width", "36", 1, "cursor-pointer"], [1, "form-group", "position-relative", "has-icon-left", "mx-75", "mb-0"], ["type", "text", "id", "chat-search", "placeholder", "Search", 1, "form-control", "round", 3, "keyup"], [1, "form-control-position"], [1, "ficon", "feather", "ft-search", "text-dark"], [1, "chat-sidebar-list-wrapper", "pt-2", 2, "top", "0px", "height", "450px", 3, "perfectScrollbar"], [1, "px-2", "pb-25", "mb-0"], [1, "ficon", "feather", "ft-plus", "float-right", "cursor-pointer"], [1, "chat-sidebar-list"], [1, "px-2", "pt-2", "pb-25", "mb-0"], ["class", "chatSidebar", "id", "users-list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "chatSidebar", "id", "_media", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-right"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], ["id", "overlayChat", 1, "chat-overlay", 3, "click"], [1, "chat-window-wrapper"], ["id", "chat-overlay1", 1, "chat-start"], [1, "ficon", "feather", "ft-message-square", "chat-sidebar-toggle", "chat-start-icon", "font-large-3", "p-3", "mb-1", 3, "click"], [1, "d-none", "d-lg-block", "py-50", "text-bold-500"], [1, "btn", "btn-light-primary", "chat-start-text", "chat-sidebar-toggle", "d-block", "d-lg-none", "py-50", "px-1", 3, "click"], ["id", "chat-area d-none", 1, "chat-area", "d-none"], [1, "chat-header"], [1, "d-flex", "justify-content-between", "align-items-center", "px-1", "py-75"], ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "chat-header-icons"], ["id", "chat-icon", 1, "chat-icon-favorite", 3, "click"], [1, "ficon", "feather", "ft-star", "font-medium-5", "cursor-pointer"], ["ngbDropdown", "", 1, "d-inline-block", "dropdown", 3, "open", "autoClose"], ["id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-left", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "ficon", "feather", "ft-more-vertical", "font-medium-4", "ml-25", "cursor-pointer", "dropdown-toggle", "nav-hide-arrow", "cursor-pointer"], ["ngbDropdownMenu", "dropdownMenuButton"], [1, "dropdown-item"], [1, "card", "chat-wrapper", "shadow-none", "mb-0"], [1, "card-content"], ["id", "test", "fxFlex", "auto", 1, "card-body", "chat-container", 3, "perfectScrollbar"], [1, "chat-content"], ["class", "chat", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card-footer", "chat-footer", "px-2", "py-1", "pb-0"], [1, "ficon", "feather", "ft-user", "cursor-pointer"], [1, "ficon", "feather", "ft-paperclip", "ml-1", "cursor-pointer"], ["type", "text", "name", "newmessage", "id", "iconLeft4", "placeholder", "Type your message here....", 1, "form-control", "chat-message-send", "mx-1", 3, "ngModel", "ngModelChange", "keyup.enter"], ["box", ""], ["type", "submit", 1, "btn", "btn-primary", "glow", "send", "d-lg-flex", 3, "click"], [1, "ficon", "feather", "ft-play"], [1, "d-none", "d-lg-block", "mx-50"], ["id", "chat-profile", 1, "chat-profile"], [1, "chat-profile-header", "text-center", "border-bottom"], ["class", "my-2", 4, "ngFor", "ngForOf"], [1, "chat-profile-content", "p-2"], [1, "mt-1"], [1, "mt-2"], ["id", "users-list", 1, "chatSidebar", 3, "ngClass", "click"], [1, "avatar", "m-0", "mr-50"], ["height", "36", "width", "36", "alt", "sidebar user image", 3, "src"], [1, "avatar-status-busy"], [1, "chat-sidebar-name"], [1, "text-muted"], ["id", "_media", 1, "chatSidebar", 3, "ngClass", "click"], [3, "src"], [1, "avatar-status-away"], ["id", "chat-sidebar", 1, "chat-sidebar-toggle", "d-block", "d-lg-none", "mr-1"], [1, "ficon", "feather", "ft-align-justify", "font-large-1", "cursor-pointer", 3, "click"], [1, "avatar", "chat-profile-toggle", "m-0", "mr-1", 3, "click"], ["alt", "avatar", 1, "cursor-pointer", 3, "src"], [1, "chat", 3, "ngClass"], ["messages", ""], [1, "chat-avatar"], [1, "avatar", "m-0", 3, "routerLink"], [1, "chat-body"], [1, "chat-message"], [1, "chat-time"], ["alt", "chat avatar", "height", "100", "width", "100", 1, "round", "mb-1", 3, "src"], [1, "app-chat-user-name", "mb-0"]], template: function StaticChatComponent_Template(rf, ctx) { if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "header", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_5_listener($event) { return ctx.showProfile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "John Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "ABOUT");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "It is a long established fact that a reader will be distracted by the readable content .");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "PERSONAL INFORAMTION");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "email@gmail.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "+1(789) 950 -7654");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "CHANNELS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "# Devlopers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "# Designers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "SETTINGS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ul", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Add Tag");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Important Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Shared Documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Deleted Documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Blocked Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_59_listener($event) { return ctx.Sidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_div_click_63_listener($event) { return ctx.showProfile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "fieldset", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function StaticChatComponent_Template_input_keyup_67_listener($event) { return ctx.updateFilter($event); })("keyup", function StaticChatComponent_Template_input_keyup_67_listener($event) { return ctx.updateFilter1($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h6", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "CHANNELS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ul", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "# Devlopers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "# Designers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h6", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "CHATS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ul", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, StaticChatComponent_li_84_Template, 10, 7, "li", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h6", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "CONTACTS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ul", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, StaticChatComponent_li_89_Template, 10, 7, "li", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_div_click_95_listener($event) { return ctx.Sidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "section", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_98_listener($event) { return ctx.showSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h4", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Select a contact to start a chat!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_button_click_101_listener($event) { return ctx.showSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Start Conversation!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "header", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, StaticChatComponent_div_106_Template, 9, 2, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_108_listener($event) { return ctx.chatFavorite($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "a", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Pin to top");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Delete chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "a", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Block");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, StaticChatComponent_div_123_Template, 11, 7, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "form", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "input", 73, 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StaticChatComponent_Template_input_ngModelChange_128_listener($event) { return ctx.newMessage = $event; })("keyup.enter", function StaticChatComponent_Template_input_keyup_enter_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](129); return ctx.onEnter(_r4.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "button", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_button_click_130_listener() { return ctx.sendMessage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "i", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Send");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "section", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "header", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_136_listener($event) { return ctx.ChatProfile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, StaticChatComponent_div_138_Template, 6, 2, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "h6", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "ABOUT");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "It is a long established fact that a reader will be distracted by the readable content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "h6", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "PERSONAL INFORMATION");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "ul", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "email@gmail.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "+1(789) 950-7654");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chatsList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.contactList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.headerChat);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.contactChat);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.headerChat);
        } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%]     .content-right {\r\n  width: calc(100% - 300px) !important;\r\n}\r\n [_nghost-%COMP%]     .mx-75 {\r\n  margin-left: .75rem!important;\r\n  margin-right: .75rem!important;\r\n}\r\n [_nghost-%COMP%]     .py-75 {\r\n  padding-bottom: .75rem!important;\r\n  padding-top: .75rem!important;\r\n}\r\n [_nghost-%COMP%]     .px-1 {\r\n  padding-left: 1rem!important;\r\n  padding-right: 1rem!important;\r\n}\r\n [_nghost-%COMP%]     .mr-50, .mx-50[_ngcontent-%COMP%] {\r\n  margin-right: .5rem!important;\r\n  margin-left: .5rem!important;\r\n}\r\n [_nghost-%COMP%]     .mb-50, .my-50[_ngcontent-%COMP%] {\r\n  margin-bottom: .5rem!important;\r\n}\r\n [_nghost-%COMP%]     .dropdown-menu\r\n{\r\n  transform: translate3d(-131px, 18px, 0px) !important;\r\n}\r\n [_nghost-%COMP%]     .chat-sidebar .chat-sidebar-list-wrapper {\r\n   overflow-y: scroll;\r\n}\r\n [_nghost-%COMP%]     .sidebar-fixed {\r\n  overflow: hidden !important;\r\n  width: 300px;\r\n}\r\n [_nghost-%COMP%]     .app-content {\r\n   overflow-y: hidden !important;\r\n}\r\n [_nghost-%COMP%]     .pb-25, .py-25[_ngcontent-%COMP%] {\r\n  padding-bottom: .25rem!important;\r\n}\r\n [_nghost-%COMP%]     .ml-25, .mx-25[_ngcontent-%COMP%] {\r\n  margin-left: .25rem!important;\r\n}\r\n @media(max-width:767px) {\r\n  [_nghost-%COMP%]     .chat-footer\r\n   {\r\n    position: relative !important;\r\n    bottom: 17px !important;\r\n  }\r\n}\r\n @media(max-width:767px) {\r\n  [_nghost-%COMP%]     .chat-wrapper\r\n   {\r\n    background-color: unset !important;\r\n  }\r\n}\r\n @media(max-width:767px) {\r\n  [_nghost-%COMP%]     .content-right {\r\n    width: calc(100% - 0px) !important;\r\n  }\r\n}\r\n [_nghost-%COMP%]     .d-inline-block {\r\n  display: inline !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpYy1jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0VBQ0Msb0NBQW9DO0FBQ3RDO0NBQ0M7RUFDQyw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDO0NBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9CO0NBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9CO0NBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCO0NBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7Q0FDQTs7RUFFRSxvREFBb0Q7QUFDdEQ7Q0FDQTtHQUNHLGtCQUFrQjtBQUNyQjtDQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDtDQUVBO0dBQ0csNkJBQTZCO0FBQ2hDO0NBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7Q0FDQTtFQUNFLDZCQUE2QjtBQUMvQjtDQUNBO0VBQ0U7O0lBRUUsNkJBQTZCO0lBQzdCLHVCQUF1QjtFQUN6QjtBQUNGO0NBQ0E7RUFDRTs7SUFFRSxrQ0FBa0M7RUFDcEM7QUFDRjtDQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjtDQUNBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InN0YXRpYy1jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIDpob3N0IDo6bmctZGVlcCAuY29udGVudC1yaWdodCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KSAhaW1wb3J0YW50O1xyXG59XHJcbiA6aG9zdCA6Om5nLWRlZXAgLm14LTc1IHtcclxuICBtYXJnaW4tbGVmdDogLjc1cmVtIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC43NXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5weS03NSB7XHJcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IC43NXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5weC0xIHtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW0haW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0haW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubXItNTAsIC5teC01MCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC41cmVtIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1iLTUwLCAubXktNTAge1xyXG4gIG1hcmdpbi1ib3R0b206IC41cmVtIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnVcclxue1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEzMXB4LCAxOHB4LCAwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jaGF0LXNpZGViYXIgLmNoYXQtc2lkZWJhci1saXN0LXdyYXBwZXIge1xyXG4gICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5zaWRlYmFyLWZpeGVkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFwcC1jb250ZW50IHtcclxuICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn0gXHJcbjpob3N0IDo6bmctZGVlcCAucGItMjUsIC5weS0yNSB7XHJcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tbC0yNSwgLm14LTI1IHtcclxuICBtYXJnaW4tbGVmdDogLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5jaGF0LWZvb3RlclxyXG4gICB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogMTdweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5jaGF0LXdyYXBwZXJcclxuICAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcclxuICA6aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtcmlnaHQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5kLWlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    return StaticChatComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaticChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-static-chat',
                templateUrl: './static-chat.component.html',
                styleUrls: ['./static-chat.component.css']
            }]
    }], function () { return [{ type: _src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, { componentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"]]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], { static: true }]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['messages']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['content', { static: true }]
        }] }); })();


/***/ }),

/***/ "DGCW":
/*!*******************************************!*\
  !*** ./src/app/_api/chat/chat.service.ts ***!
  \*******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "CqG3");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var ChatService = /** @class */ (function () {
    function ChatService(afs) {
        this.afs = afs;
    }
    ChatService.prototype.getChats = function () {
        return this.afs.collection('chatroom').snapshotChanges();
    };
    ChatService.prototype.createChatRoom = function (data) {
        return this.afs.collection('chatroom').add(data);
    };
    ChatService.prototype.showChat = function (id) {
        var chat = this.afs.doc('chatroom/' + id);
        return chat.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            var data = changes.payload.data();
            var chatId = changes.payload.id;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ chatId: chatId }, data);
        }));
    };
    ChatService.prototype.sendMessage = function (chatId, data) {
        return this.afs.collection('chatroom').doc(chatId).update({
            chatHistory: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(data)
        });
    };
    ChatService.prototype.updateChatStatus = function (chatId, history) {
        return this.afs.collection('chatroom').doc(chatId).update({
            chatHistory: history
        });
    };
    ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
    return ChatService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "R/WO":
/*!**************************************************************!*\
  !*** ./src/app/content/applications/chat/chats.component.ts ***!
  \**************************************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/app/_api/user/user.service */ "wsei");
/* harmony import */ var _src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/app/_api/chat/chat.service */ "DGCW");
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_helpers/app.constants */ "2iER");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");















var _c0 = ["chatPS"];
var _c1 = ["content"];
var _c2 = ["messages"];
function ChatsComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 95);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.loggedInUser.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatsComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 96);
} }
function ChatsComponent_img_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 97);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.loggedInUser.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatsComponent_img_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 98);
} }
function ChatsComponent_li_86_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_li_86_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var chat_r10 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.loadMyChatRoom(chat_r10); })("click", function ChatsComponent_li_86_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.contentOverlay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r10 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", chat_r10.uid == ctx_r4.clickedUser ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chat_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r10.unreadMessageCount ? chat_r10.unreadMessageCount : "");
} }
function ChatsComponent_li_91_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_li_91_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var contact_r14 = ctx.$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.showChat(contact_r14); })("click", function ChatsComponent_li_91_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.contentOverlay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r14 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", contact_r14.uid == ctx_r5.clickedUser ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", contact_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", contact_r14.showMessage, "");
} }
function ChatsComponent_div_137_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 114);
} if (rf & 2) {
    var messages_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", messages_r18.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatsComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatsComponent_div_137_img_3_Template, 1, 1, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messages_r18 = ctx.$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r8.currentUserUid == messages_r18.uid ? "chat-right" : "chat-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", messages_r18.userImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](messages_r18.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, messages_r18.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 7, messages_r18.date, "HH:mm a"));
} }
var ChatsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param ApplicationApiService  chatApiService;
     * @param Renderer2              renderer
     */
    function ChatsComponent(renderer, userService, chatService) {
        var _this = this;
        this.renderer = renderer;
        this.userService = userService;
        this.chatService = chatService;
        this.status = true;
        this.newMessage = '';
        this.config = { wheelPropagation: false };
        this.contactList = [];
        this.contactChats = [];
        this.showChatInProgress = false;
        this.createInProgress = false;
        this.contactMaster = this.contactList;
        this.chatListMaster = [];
        this.temp = [];
        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUserUid = this.loggedInUser.uid;
        this.currentUser = ''; // UID of user 1
        this.clickedUser = ''; // UID of user 2
        this.chatList = [];
        this.displayChat = [];
        this.chatId = '';
        this.senderImage = '';
        this.currentUserImage = '';
        this.loadContacts = false;
        this.prevMsg = '';
        /**
         * Chat scroll to bottom
         */
        this.scrollToBottom = function () {
            try {
                _this.content.nativeElement.scrollTop = _this.content.nativeElement.scrollHeight;
                _this.chatPS.directiveRef.scrollToBottom(0, 500);
            }
            catch (err) { }
        };
    }
    /**
     * Scroll chat to bottom
     */
    ChatsComponent.prototype.ngAfterViewInit = function () {
        this.messages.forEach(this.scrollToBottom);
        this.messages.changes.subscribe(this.scrollToBottom);
    };
    ChatsComponent.prototype.getLoggedInUserChats = function () {
        var _this = this;
        if (this.contactChats) {
            var chatsWithHistory = this.contactChats.filter(function (item) {
                return item.chatHistory.length > 0;
            });
            var loggedInUserChats = chatsWithHistory.filter(function (chatHistory) {
                return chatHistory.name.indexOf(_this.loggedInUser.uid) !== -1;
            });
            return loggedInUserChats;
        }
        return [];
    };
    /**
     * OnInit
     */
    ChatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            var contactList = users.map(function (item) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
            });
            contactList = contactList.filter(function (element) {
                return _this.loggedInUser.uid !== element['uid'];
            });
            _this.contactMaster = contactList;
            _this.chatService.getChats().subscribe(function (chats) {
                _this.chatList = [];
                _this.contactList = [];
                var chatRooms = chats.map(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item.payload.doc.data()), { id: item.payload.doc.id });
                });
                _this.contactChats = chatRooms;
                var loggedInUserChats = _this.getLoggedInUserChats();
                var contactListMap = [];
                var chatListMap = [];
                _this.contactMaster.forEach(function (element) {
                    var userChat = _this.isChatExistsWithUser(loggedInUserChats, element.uid);
                    if (userChat && !chatListMap[element.uid]) {
                        element['chatRoomId'] = userChat['id'];
                        if (userChat['chatHistory'] && userChat['chatHistory'].length > 0) {
                            var unreadMessages = userChat['chatHistory'].filter(function (history) {
                                return history.uid !== _this.loggedInUser.uid && history.status === 'send';
                            });
                            if (unreadMessages.length > 0 && _this.clickedUser !== element.uid) {
                                element['unreadMessageCount'] = unreadMessages.length;
                            }
                            else {
                                element['unreadMessageCount'] = 0;
                            }
                            element['chatHistory'] = userChat['chatHistory'];
                        }
                        chatListMap[element.uid] = true;
                        _this.chatList.push(element);
                        _this.chatListMaster.push(element);
                    }
                    else if (!contactListMap[element.uid]) {
                        contactListMap[element.uid] = true;
                        _this.contactList.push(element);
                    }
                });
                _this.chatList = lodash__WEBPACK_IMPORTED_MODULE_6__["orderBy"](_this.chatList, [function (user) { return user.name.toLowerCase(); }], ['asc']);
                _this.contactList = lodash__WEBPACK_IMPORTED_MODULE_6__["orderBy"](_this.contactList, [function (user) { return user.name && user.name.toLowerCase(); }], ['asc']);
                _this.currentUserImage = _this.loggedInUser.photoURL;
                _this.senderImage = _this.contactList[0].image;
                _this.createInProgress = false;
            });
        });
    };
    ChatsComponent.prototype.isChatExistsWithUser = function (userChats, userId) {
        for (var index = 0; index < userChats.length; index++) {
            if (userChats[index].name.indexOf(userId) !== -1) {
                return userChats[index];
            }
        }
        return false;
    };
    /**
     * Filter Chat
     *
     * @param event     search event
     */
    ChatsComponent.prototype.searchContact = function (event) {
        var _this = this;
        var value = event.target.value.toLowerCase();
        // filter our data
        var temp = this.contactMaster.filter(function (d) {
            return d.name && d.name.toLowerCase().indexOf(value) !== -1 || !value;
        });
        var loggedInUserChats = this.getLoggedInUserChats();
        var _self = this;
        temp = temp.filter(function (user) {
            return !_self.isChatExistsWithUser(loggedInUserChats, user.uid);
        });
        // update the rows
        this.contactList = [];
        var contactListMap = [];
        temp.forEach(function (element) {
            if (!contactListMap[element.uid]) {
                contactListMap[element.uid] = true;
                _this.contactList.push(element);
            }
        });
        // filter our data
        var tempChat = this.chatListMaster.filter(function (d) {
            return d.name && d.name.toLowerCase().indexOf(value) !== -1 || !value;
        });
        // update the rows
        this.chatList = [];
        var chatListMap = [];
        tempChat.forEach(function (element) {
            if (!chatListMap[element.uid]) {
                chatListMap[element.uid] = true;
                _this.chatList.push(element);
            }
        });
    };
    /**
     * Send message
     */
    ChatsComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.newMessage !== null && this.newMessage !== '') {
            this.messageInfo = {
                message: this.newMessage,
                date: Date.now(),
                uid: this.loggedInUser.uid,
                status: 'send'
            };
            if (this.chatId !== '') {
                this.chatService.sendMessage(this.chatId, this.messageInfo);
            }
            else {
                this.currentUser = this.loggedInUser.uid;
                var roomName = (this.currentUser < this.clickedUser ? this.currentUser + '_' +
                    this.clickedUser : this.clickedUser + '_' + this.currentUser);
                this.userInfo = {
                    uid: this.loggedInUser.uid,
                    name: roomName,
                    image: this.loggedInUser.photoURL,
                    time: Date.now(),
                    showMessage: '',
                    badge: '',
                    showicon: true,
                    isicon: false,
                    isactive: 'online',
                    isSelected: false,
                    chatHistory: []
                };
                // Add message to box before sending
                this.displayChat.push(this.messageInfo);
                this.createInProgress = true;
                this.chatService.createChatRoom(this.userInfo).then(function (chatRoom) {
                    _this.chatId = chatRoom.id;
                    _this.loadChatRoom(chatRoom.id);
                    _this.chatService.sendMessage(_this.chatId, _this.messageInfo);
                    _this.createInProgress = false;
                });
            }
            this.newMessage = null;
        }
    };
    /**
     * Message send on Enter
     *
     * @param value       New message
     */
    ChatsComponent.prototype.onEnter = function (value) {
        this.newMessage = value;
        this.sendMessage();
    };
    /**
     * Display chat when click on contact
     *
     * @param friendId      Friend id
     */
    ChatsComponent.prototype.showChat = function (data) {
        if (this.showChatInProgress || this.createInProgress) {
            return;
        }
        this.showChatInProgress = true;
        this.currentUser = this.loggedInUser.uid;
        this.currentUserImage = this.loggedInUser.photoURL;
        this.clickedUser = data.uid;
        this.contactId = data.id;
        this.senderImage = data.image;
        this.showHeaderData();
        var roomName = (this.currentUser < this.clickedUser ? this.currentUser + '_' +
            this.clickedUser : this.clickedUser + '_' + this.currentUser);
        this.userInfo = {
            uid: this.loggedInUser.uid,
            name: roomName,
            image: this.loggedInUser.photoURL,
            time: Date.now(),
            showMessage: '',
            badge: '',
            showicon: true,
            isicon: false,
            isactive: 'online',
            isSelected: false,
            chatHistory: []
        };
        if (this.contactChats.length === 0) {
            this.createAndLoadChatRoom();
        }
        else if (this.contactChats.length !== 0) {
            var chatExists = false;
            for (var i = 0; i < this.contactChats.length; i++) {
                var room = this.contactChats[i].name;
                if (room === roomName) {
                    chatExists = true;
                    this.chatId = this.contactChats[i].id;
                    break;
                }
            }
            if (!chatExists) {
                this.createAndLoadChatRoom();
            }
            else {
                // subscribe
                this.loadChatRoom(this.chatId);
                this.showChatInProgress = false;
                this.userInfo.isSelected = true;
            }
        }
    };
    ChatsComponent.prototype.createAndLoadChatRoom = function () {
        var _this = this;
        this.createInProgress = true;
        this.chatService.createChatRoom(this.userInfo).then(function (chatRoom) {
            _this.chatId = chatRoom.id;
            _this.loadChatRoom(chatRoom.id);
        });
    };
    ChatsComponent.prototype.setUserImage = function (chatHistory) {
        for (var i = 0; i < chatHistory.length; i++) {
            if (chatHistory.length > 0) {
                if (i > 0) {
                    this.prevMsg = chatHistory[i - 1];
                }
                if (i > 0 && chatHistory[i].uid === this.prevMsg['uid']) {
                    continue;
                }
                if (chatHistory[i].uid === this.loggedInUser.uid) {
                    chatHistory[i]['userImage'] = this.currentUserImage;
                }
                else {
                    chatHistory[i]['userImage'] = this.senderImage;
                }
            }
        }
    };
    ChatsComponent.prototype.loadMyChatRoom = function (selectedUser) {
        this.chatId = selectedUser.chatRoomId;
        this.loadChatRoom(selectedUser.chatRoomId);
        this.clickedUser = selectedUser.uid;
        this.contactId = selectedUser.id;
        this.senderImage = selectedUser.image;
        this.headerName = selectedUser.name;
        this.headerImage = selectedUser.image;
        this.setHistoryAsRead(selectedUser, selectedUser.chatRoomId, selectedUser.chatHistory);
    };
    ChatsComponent.prototype.setHistoryAsRead = function (selectedUser, chatRoomId, history) {
        var _this = this;
        var unreadMsgExists = false;
        history.forEach(function (element) {
            if (element.uid !== _this.loggedInUser.uid && element.status !== 'read') {
                element.status = 'read';
                unreadMsgExists = true;
            }
        });
        if (unreadMsgExists) {
            this.chatService.updateChatStatus(chatRoomId, history).then(function (result) {
                delete selectedUser.unreadMessageCount;
            });
        }
    };
    ChatsComponent.prototype.loadChatRoom = function (chatRoomId) {
        var _this = this;
        this.chatService.showChat(chatRoomId).subscribe(function (res) {
            if (chatRoomId === _this.chatId) {
                _this.setUserImage(res.chatHistory);
                _this.displayChat = res['chatHistory'];
                _this.chatId = res['chatId'];
            }
            _this.showChatInProgress = false;
            _this.scrollToBottom();
        });
    };
    ChatsComponent.prototype.showDefaultChat = function () {
        this.currentUser = this.loggedInUser.uid;
        var roomName = (this.currentUser < this.clickedUser ? this.currentUser + '_' +
            this.clickedUser : this.clickedUser + '_' + this.currentUser);
        for (var j = 0; j < this.contactChats.length; j++) {
            if (this.contactChats[j].name === roomName) {
                if (this.contactChats[j].chatHistory && this.contactChats[j].chatHistory.length > 0) {
                    this.displayChat = this.contactChats[j].chatHistory;
                    this.setUserImage(this.contactChats[j].chatHistory);
                }
                this.chatId = this.contactChats[j].id;
            }
        }
    };
    ChatsComponent.prototype.showLastMessage = function () {
        for (var i = 0; i < this.contactList.length; i++) {
            if (this.contactList[i]) {
                for (var j = 0; j < this.contactChats.length; j++) {
                    var room = this.contactChats[j].name;
                    var index = room.indexOf(this.contactList[i].uid);
                    var currentUser = this.loggedInUser.uid;
                    var userUid = this.contactList[i].uid;
                    var roomName = (currentUser < userUid ? currentUser + '_' +
                        userUid : userUid + '_' + currentUser);
                    if (index >= 0) {
                        if (this.contactChats[j].chatHistory.length > 0 && roomName === room) {
                            this.contactList[i]['lastmsg'] = this.contactChats[j].chatHistory[this.contactChats[j].chatHistory.length - 1].message;
                            this.contactList[i]['isActive'] = this.contactChats[j].isactive;
                            this.contactList[i]['icon'] = this.contactChats[j].isicon;
                            this.contactList[i]['showicon'] = this.contactChats[j].showicon;
                            this.contactList[i]['lastmsgTime'] = this.contactChats[j].chatHistory[this.contactChats[j].chatHistory.length - 1].date;
                        }
                    }
                }
            }
        }
    };
    /**
     * Overlay add/remove fuction in responsive
     *
     * @param event     Overlay click event
     */
    ChatsComponent.prototype.contentOverlay = function (event) {
        var toggleIcon = document.getElementById('chat-overlay1');
        var toggle = document.getElementById('chat-area d-none');
        if (event.currentTarget.className === 'chatSidebar ng-star-inserted') {
            this.renderer.addClass(toggleIcon, 'd-none');
            this.renderer.removeClass(toggle, 'd-none');
        }
    };
    /**
    * Show add/remove class at open profile
    *
    * @param event    Overlay click event
    */
    ChatsComponent.prototype.showProfile = function (event) {
        var toggleIcon = document.getElementById('user-profile');
        var toggle = document.getElementById('overlayChat');
        if (event.currentTarget.className === 'chat-sidebar-profile-toggle') {
            this.renderer.addClass(toggleIcon, 'show');
            this.renderer.addClass(toggle, 'show');
        }
        else if (event.currentTarget.className === 'chat-profile-close') {
            this.renderer.removeClass(toggleIcon, 'show');
            this.renderer.removeClass(toggle, 'show');
        }
    };
    /**
     * Show add/remove function in responsive
     *
     * @param event    Overlay click event
     */
    ChatsComponent.prototype.Sidebar = function (event) {
        var toggleChat = document.getElementById('sidebar-card');
        var toggleIcon = document.getElementById('chat-profile');
        var toggle = document.getElementById('overlayChat');
        if (event.currentTarget.className === 'chat-sidebar-close' || 'chat-overlay') {
            this.renderer.removeClass(toggle, 'show');
            this.renderer.removeClass(toggleIcon, 'show');
            this.renderer.removeClass(toggleChat, 'show');
        }
    };
    /**
    * Show add/remove function in responsive
    *
    * @param event    Overlay click event
    */
    ChatsComponent.prototype.showSidebar = function (event) {
        if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
            var toggleIcon = document.getElementById('sidebar-card');
            var toggle = document.getElementById('overlayChat');
            var toggleChat = document.getElementById('sidebar-left');
            if (event.currentTarget.className === 'ficon feather ft-message-square chat-sidebar-toggle chat-start-icon font-large-3 p-3 mb-1' ||
                'ficon feather ft-align-justify font-large-1 cursor-pointer') {
                this.renderer.addClass(toggle, 'show');
                this.renderer.addClass(toggleIcon, 'show');
            }
            if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].MOBILE_RESPONSIVE_WIDTH) {
                this.renderer.removeClass(toggleChat, 'sidebar-fixed');
            }
        }
    };
    // FixChat() {
    //   const toggleIcon = document.getElementById('sidebar-left');
    //   if (window.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH) {
    //     this.renderer.removeClass(toggleIcon, 'sidebar-fixed');
    //   }
    // }
    ChatsComponent.prototype.chatFavorite = function (event) {
        var chatIcon = document.getElementById('chat-icon');
        if (event.currentTarget.className === 'chat-icon-favorite') {
            this.renderer.addClass(chatIcon, 'warning');
        }
        else if (event.currentTarget.className === 'chat-icon-favorite warning') {
            this.renderer.removeClass(chatIcon, 'warning');
        }
    };
    ChatsComponent.prototype.showHeaderData = function () {
        var _this = this;
        this.contactList.forEach(function (element) {
            if (_this.clickedUser === element['uid']) {
                _this.headerName = element.name;
                _this.headerImage = element.image;
            }
        });
    };
    /**
      * Show add/remove function
      *
      * @param event    Overlay click event
      */
    ChatsComponent.prototype.ShowChatProfile = function (event) {
        var toggleIcon = document.getElementById('chat-profile');
        var toggle = document.getElementById('overlayChat');
        if (event.currentTarget.className === 'avatar chat-profile-toggle m-0 mr-1') {
            this.renderer.addClass(toggleIcon, 'show');
            this.renderer.addClass(toggle, 'show');
        }
    };
    /**
      * Show add/remove function
      *
      * @param event    Overlay click event
      */
    ChatsComponent.prototype.ChatProfile = function (event) {
        var toggleIcon = document.getElementById('chat-profile');
        var toggle = document.getElementById('overlayChat');
        if (event.currentTarget.className === 'chat-profile-close') {
            this.renderer.removeClass(toggleIcon, 'show');
            this.renderer.removeClass(toggle, 'show');
        }
    };
    ChatsComponent.ɵfac = function ChatsComponent_Factory(t) { return new (t || ChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"])); };
    ChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatsComponent, selectors: [["app-chat"]], viewQuery: function ChatsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chatPS = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messages = _t);
        } }, decls: 170, vars: 18, consts: [[1, "app-content", "content"], ["id", "sidebar-left", 1, "sidebar-left"], [1, "sidebar"], ["id", "user-profile", 1, "chat-user-profile"], [1, "chat-user-profile-header", "text-center", "border-bottom"], [1, "chat-profile-close", 3, "click"], [1, "ficon", "feather", "ft-x"], [1, "my-2"], ["class", "round mb-1", "alt", "user_avatar", "height", "100", "width", "100", 3, "src", 4, "ngIf"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "class", "round mb-1", "alt", "user_avatar", "alt", "avatar", "height", "100", "width", "100", 4, "ngIf"], [1, "mb-0"], [1, "chat-user-profile-content"], ["fxFlex", "auto", 1, "chat-user-profile-scroll", 3, "perfectScrollbar"], [1, "text-uppercase", "mb-1"], [1, "mb-2"], [1, "list-unstyled", "mb-2"], [1, "mb-25"], ["href", ""], [1, "list-unstyled"], [1, "mb-50"], ["href", "", 1, "d-flex", "align-items-center"], [1, "ficon", "feather", "ft-tag", "mr-50"], [1, "ficon", "feather", "ft-star", "mr-50"], [1, "ficon", "feather", "ft-image", "mr-50"], [1, "ficon", "feather", "ft-trash-2", "mr-50"], [1, "ficon", "feather", "ft-x-circle", "mr-50"], ["id", "sidebar-card", 1, "chat-sidebar", "card"], [1, "chat-sidebar-close", 3, "click"], [1, "chat-sidebar-search"], [1, "d-flex", "align-items-center"], [1, "chat-sidebar-profile-toggle", 3, "click"], [1, "avatar"], ["class", "cursor-pointer", "alt", "user_avatar", "height", "36", "width", "36", 3, "src", 4, "ngIf"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar", "height", "36", "width", "36", 4, "ngIf"], [1, "form-group", "position-relative", "has-icon-left", "mx-75", "mb-0"], ["type", "text", "id", "chat-search", "placeholder", "Search", 1, "form-control", "round", 3, "keyup"], [1, "form-control-position"], [1, "ficon", "feather", "ft-search", "text-dark"], ["fxFlex", "auto", 1, "chat-sidebar-list-wrapper", "pt-2", 3, "perfectScrollbar"], [1, "px-2", "pb-25", "mb-0"], [1, "ficon", "feather", "ft-plus", "float-right", "cursor-pointer"], [1, "chat-sidebar-list"], [1, "px-2", "pt-2", "pb-25", "mb-0"], ["class", "chatSidebar", "id", "users-list", "id", "_media", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "chatSidebar", "id", "_media", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-right"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], ["id", "overlayChat", 1, "chat-overlay", 3, "click"], [1, "chat-window-wrapper"], ["id", "chat-overlay1", 1, "chat-start"], [1, "ficon", "feather", "ft-message-square", "chat-sidebar-toggle", "chat-start-icon", "font-large-3", "p-3", "mb-1", 3, "click"], [1, "d-none", "d-lg-block", "py-50", "text-bold-500"], [1, "btn", "btn-light-primary", "chat-start-text", "chat-sidebar-toggle", "d-block", "d-lg-none", "py-50", "px-1", 3, "click"], ["id", "chat-area d-none", 1, "chat-area", "d-none"], [1, "chat-header"], [1, "d-flex", "justify-content-between", "align-items-center", "px-1", "py-75"], ["id", "chat-sidebar", 1, "chat-sidebar-toggle", "d-block", "d-lg-none", "mr-1"], [1, "ficon", "feather", "ft-align-justify", "font-large-1", "cursor-pointer", 3, "click"], [1, "avatar", "chat-profile-toggle", "m-0", "mr-1", 3, "click"], ["alt", "avatar", 1, "cursor-pointer", 3, "src"], [1, "avatar-status-busy"], [1, "chat-header-icons"], ["id", "chat-icon", 1, "chat-icon-favorite", 3, "click"], [1, "ficon", "feather", "ft-star", "font-medium-5", "cursor-pointer"], [1, "dropdown"], ["ngbDropdown", "", 1, "d-inline-block", 3, "open", "autoClose"], ["id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-left", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "ficon", "feather", "ft-more-vertical", "font-medium-4", "ml-25", "cursor-pointer", "dropdown-toggle", "nav-hide-arrow", "cursor-pointer"], ["ngbDropdownMenu", "dropdownMenuButton"], [1, "dropdown-item"], [1, "card", "chat-wrapper", "shadow-none", "mb-0"], [1, "card-content"], ["id", "componentRef", 1, "card-body", "chat-container"], [3, "config"], ["chatPS", ""], [1, "chat-content"], ["content", ""], ["id", "chatWindow", "class", "chat", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card-footer", "chat-footer", "px-2", "py-1", "pb-0"], [1, "ficon", "feather", "ft-user", "cursor-pointer"], [1, "ficon", "feather", "ft-paperclip", "ml-1", "cursor-pointer"], ["type", "text", "name", "newmessage", "id", "iconLeft4", "placeholder", "Type your message here....", 1, "form-control", "chat-message-send", "mx-1", 3, "ngModel", "ngModelChange", "keyup.enter"], ["box", ""], ["type", "submit", 1, "btn", "btn-primary", "glow", "send", "d-lg-flex", 3, "click"], [1, "ficon", "feather", "ft-play"], [1, "d-none", "d-lg-block", "mx-50"], ["id", "chat-profile", 1, "chat-profile"], [1, "chat-profile-header", "text-center", "border-bottom"], ["alt", "chat avatar", "height", "100", "width", "100", 1, "round", "mb-1", 3, "src"], [1, "app-chat-user-name", "mb-0"], [1, "chat-profile-content", "p-2"], [1, "mt-1"], [1, "mt-2"], ["alt", "user_avatar", "height", "100", "width", "100", 1, "round", "mb-1", 3, "src"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "user_avatar", "alt", "avatar", "height", "100", "width", "100", 1, "round", "mb-1"], ["alt", "user_avatar", "height", "36", "width", "36", 1, "cursor-pointer", 3, "src"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar", "height", "36", "width", "36"], ["id", "users-list", "id", "_media", 1, "chatSidebar", 3, "ngClass", "click"], [1, "avatar", "m-0", "mr-50"], ["height", "36", "width", "36", 3, "src"], [1, "chat-sidebar-name"], [1, "badge", "badge-pill", "float-right", "badge-danger", "mr-2"], [1, "text-muted"], ["id", "_media", 1, "chatSidebar", 3, "ngClass", "click"], [1, "avatar-status-away"], ["id", "chatWindow", 1, "chat", 3, "ngClass"], [1, "chat-avatar"], [1, "avatar", "m-0", 3, "routerLink"], [3, "src", 4, "ngIf"], [1, "chat-body"], [1, "chat-message"], [1, "chat-time", 3, "title"], [3, "src"]], template: function ChatsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "header", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_5_listener($event) { return ctx.showProfile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChatsComponent_img_8_Template, 1, 1, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ChatsComponent_img_9_Template, 1, 0, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "ABOUT");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "It is a long established fact that a reader will be distracted by the readable content .");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "PERSONAL INFORAMTION");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "email@gmail.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "+1(789) 950 -7654");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h6", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "CHANNELS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "# Devlopers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "# Designers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h6", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "SETTINGS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ul", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Add Tag");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Important Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Shared Documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Deleted Documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Blocked Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_60_listener($event) { return ctx.Sidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_div_click_64_listener($event) { return ctx.showProfile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ChatsComponent_img_66_Template, 1, 1, "img", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ChatsComponent_img_67_Template, 1, 0, "img", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ChatsComponent_Template_input_keyup_69_listener($event) { return ctx.searchContact($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h6", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "CHANNELS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ul", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h6", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "# Devlopers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h6", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "# Designers");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h6", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "CHATS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "ul", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, ChatsComponent_li_86_Template, 11, 4, "li", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h6", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "CONTACTS");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "ul", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, ChatsComponent_li_91_Template, 10, 4, "li", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_div_click_97_listener($event) { return ctx.Sidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "section", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_100_listener($event) { return ctx.showSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h4", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Select a contact to start a chat!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_button_click_103_listener($event) { return ctx.showSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Start Conversation!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "header", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "i", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_i_click_110_listener($event) { return ctx.showSidebar($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_div_click_111_listener($event) { return ctx.ShowChatProfile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "span", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h6", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_118_listener($event) { return ctx.chatFavorite($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Pin to top");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Delete chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Block");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "perfect-scrollbar", 75, 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 77, 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, ChatsComponent_div_137_Template, 12, 10, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "form", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "i", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "input", 83, 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatsComponent_Template_input_ngModelChange_142_listener($event) { return ctx.newMessage = $event; })("keyup.enter", function ChatsComponent_Template_input_keyup_enter_142_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](143); return ctx.onEnter(_r9.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "button", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_button_click_144_listener() { return ctx.sendMessage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "i", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "span", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Send");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "section", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "header", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_150_listener($event) { return ctx.ChatProfile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "img", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "h5", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Devloper");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h6", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "ABOUT");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "It is a long established fact that a reader will be distracted by the readable content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "h6", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "PERSONAL INFORMATION");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "ul", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "email@gmail.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "+1(789) 950-7654");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedInUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedInUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loggedInUser.displayName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedInUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedInUser.photoURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chatList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.contactList);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.headerName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", false)("autoClose", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayChat);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.headerName);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownMenu"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["[_nghost-%COMP%]     .content-right {\r\n  width: calc(100% - 300px) !important;\r\n}\r\n [_nghost-%COMP%]     .mx-75 {\r\n    margin-left: .75rem!important;\r\n    margin-right: .75rem!important;\r\n  }\r\n [_nghost-%COMP%]     .py-75 {\r\n    padding-bottom: .75rem!important;\r\n    padding-top: .75rem!important;\r\n  }\r\n [_nghost-%COMP%]     .px-1 {\r\n    padding-left: 1rem!important;\r\n    padding-right: 1rem!important;\r\n  }\r\n [_nghost-%COMP%]     .mr-50, .mx-50[_ngcontent-%COMP%] {\r\n    margin-right: .5rem!important;\r\n    margin-left: .5rem!important;\r\n  }\r\n [_nghost-%COMP%]     .mb-50, .my-50[_ngcontent-%COMP%] {\r\n    margin-bottom: .5rem!important;\r\n  }\r\n [_nghost-%COMP%]     .dropdown-menu\r\n  {\r\n    transform: translate3d(-131px, 18px, 0px) !important;\r\n  }\r\n [_nghost-%COMP%]     .chat-sidebar .chat-sidebar-list-wrapper {\r\n     overflow-y: scroll;\r\n  }\r\n [_nghost-%COMP%]     .sidebar-fixed {\r\n    overflow: hidden !important;\r\n    width: 300px;\r\n  }\r\n [_nghost-%COMP%]     .app-content {\r\n     overflow-y: hidden !important;\r\n  }\r\n [_nghost-%COMP%]     .pb-25, .py-25[_ngcontent-%COMP%] {\r\n    padding-bottom: .25rem!important;\r\n  }\r\n [_nghost-%COMP%]     .ml-25, .mx-25[_ngcontent-%COMP%] {\r\n    margin-left: .25rem!important;\r\n  }\r\n [_nghost-%COMP%]     .ps--active-y > .ps__rail-y {\r\n    display: none;\r\n  }\r\n @media(max-width:767px) {\r\n    [_nghost-%COMP%]     .content-right {\r\n      width: calc(100% - 0px) !important;\r\n    }\r\n  }\r\n [_nghost-%COMP%]     .d-inline-block {\r\n    display: inline !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7Q0FDQztJQUNHLDZCQUE2QjtJQUM3Qiw4QkFBOEI7RUFDaEM7Q0FDQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7RUFDL0I7Q0FDQTtJQUNFLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7Q0FDQTtJQUNFLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7Q0FDQTtJQUNFLDhCQUE4QjtFQUNoQztDQUNBOztJQUVFLG9EQUFvRDtFQUN0RDtDQUNBO0tBQ0csa0JBQWtCO0VBQ3JCO0NBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsWUFBWTtFQUNkO0NBRUE7S0FDRyw2QkFBNkI7RUFDaEM7Q0FDQTtJQUNFLGdDQUFnQztFQUNsQztDQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0NBRUE7SUFDRSxhQUFhO0VBQ2Y7Q0FDQTtJQUNFO01BQ0Usa0NBQWtDO0lBQ3BDO0VBQ0Y7Q0FDQTtJQUNFLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXJpZ2h0IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuIDpob3N0IDo6bmctZGVlcCAubXgtNzUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43NXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC43NXJlbSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAucHktNzUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5weC0xIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5tci01MCwgLm14LTUwIHtcclxuICAgIG1hcmdpbi1yaWdodDogLjVyZW0haW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5tYi01MCwgLm15LTUwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51XHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTMxcHgsIDE4cHgsIDBweCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5jaGF0LXNpZGViYXIgLmNoYXQtc2lkZWJhci1saXN0LXdyYXBwZXIge1xyXG4gICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zaWRlYmFyLWZpeGVkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAuYXBwLWNvbnRlbnQge1xyXG4gICAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLnBiLTI1LCAucHktMjUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAubWwtMjUsIC5teC0yNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjI1cmVtIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAucHMtLWFjdGl2ZS15ID4gLnBzX19yYWlsLXkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXJpZ2h0IHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kLWlubGluZS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgIl19 */"] });
    return ChatsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chats.component.html',
                styleUrls: ['./chats.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }]; }, { chatPS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chatPS']
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], { static: true }]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['messages']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['content', { static: true }]
        }] }); })();


/***/ }),

/***/ "XTOg":
/*!***********************************************************!*\
  !*** ./src/app/content/applications/chat/chats.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsModule", function() { return ChatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _chats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats.component */ "R/WO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_api/chat/chat.service */ "DGCW");
/* harmony import */ var _static_chat_static_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static-chat/static-chat.component */ "5mUT");
/* harmony import */ var src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/application-api.service */ "wW7e");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");














var ChatsModule = /** @class */ (function () {
    function ChatsModule() {
    }
    ChatsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatsModule });
    ChatsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatsModule_Factory(t) { return new (t || ChatsModule)(); }, providers: [src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"], src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationApiService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"]
                    },
                    {
                        path: 'static-chat',
                        component: _static_chat_static_chat_component__WEBPACK_IMPORTED_MODULE_7__["StaticChatComponent"]
                    }
                ])
            ]] });
    return ChatsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatsModule, { declarations: [_chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"], _static_chat_static_chat_component__WEBPACK_IMPORTED_MODULE_7__["StaticChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"]
                        },
                        {
                            path: 'static-chat',
                            component: _static_chat_static_chat_component__WEBPACK_IMPORTED_MODULE_7__["StaticChatComponent"]
                        }
                    ])
                ],
                declarations: [_chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"], _static_chat_static_chat_component__WEBPACK_IMPORTED_MODULE_7__["StaticChatComponent"]],
                providers: [src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"], src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationApiService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-content-applications-chat-chats-module.js.map