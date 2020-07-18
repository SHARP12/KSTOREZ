(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-confirm-payment-confirm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payment-confirm/payment-confirm.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payment-confirm/payment-confirm.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\"> \r\n    <ion-row>  \r\n      <ion-col>        \r\n          <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>        \r\n  </ion-col> \r\n    <ion-col size=\"10\">\r\n    <ion-text>      \r\n      <h2>Payments</h2>\r\n    </ion-text>\r\n  </ion-col> \r\n  </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-text> \r\n      {{verify_payment()}}\r\n      <h1>{{payment_results}}</h1>\r\n    </ion-text>    \r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/payments/payment-confirm/payment-confirm-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/payments/payment-confirm/payment-confirm-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmPageRoutingModule", function() { return PaymentConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-confirm.page */ "./src/app/payments/payment-confirm/payment-confirm.page.ts");




const routes = [
    {
        path: '',
        component: _payment_confirm_page__WEBPACK_IMPORTED_MODULE_3__["PaymentConfirmPage"]
    }
];
let PaymentConfirmPageRoutingModule = class PaymentConfirmPageRoutingModule {
};
PaymentConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentConfirmPageRoutingModule);



/***/ }),

/***/ "./src/app/payments/payment-confirm/payment-confirm.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/payments/payment-confirm/payment-confirm.module.ts ***!
  \********************************************************************/
/*! exports provided: PaymentConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmPageModule", function() { return PaymentConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-confirm-routing.module */ "./src/app/payments/payment-confirm/payment-confirm-routing.module.ts");
/* harmony import */ var _payment_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-confirm.page */ "./src/app/payments/payment-confirm/payment-confirm.page.ts");







let PaymentConfirmPageModule = class PaymentConfirmPageModule {
};
PaymentConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentConfirmPageRoutingModule"]
        ],
        declarations: [_payment_confirm_page__WEBPACK_IMPORTED_MODULE_6__["PaymentConfirmPage"]]
    })
], PaymentConfirmPageModule);



/***/ }),

/***/ "./src/app/payments/payment-confirm/payment-confirm.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/payments/payment-confirm/payment-confirm.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL3BheW1lbnQtY29uZmlybS9wYXltZW50LWNvbmZpcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/payments/payment-confirm/payment-confirm.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/payments/payment-confirm/payment-confirm.page.ts ***!
  \******************************************************************/
/*! exports provided: PaymentConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmPage", function() { return PaymentConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaymentConfirmPage = class PaymentConfirmPage {
    //constructor() { }
    //function that checks the payment status
    check_payment_status() {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        return params.get('status');
    }
    //verifying the payment if the status is success full
    verify_payment() {
        //if(this.check_payment_status()!= null){
        if (this.check_payment_status() == "successful") {
            //verify payment on flutterwave
            //save payment data in the database
            //alert for successfull payment
            this.payment_results = "Payment successfull";
        }
        else {
            //alert a failed payment
            this.payment_results = "Payment declined";
        }
        //}  
    }
    ngOnInit() {
    }
};
PaymentConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-confirm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-confirm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payment-confirm/payment-confirm.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-confirm.page.scss */ "./src/app/payments/payment-confirm/payment-confirm.page.scss")).default]
    })
], PaymentConfirmPage);



/***/ })

}]);
//# sourceMappingURL=payment-confirm-payment-confirm-module-es2015.js.map