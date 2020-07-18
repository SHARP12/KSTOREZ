(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\"> \r\n    <ion-row>  \r\n      <ion-col>        \r\n          <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>        \r\n  </ion-col> \r\n    <ion-col size=\"10\">\r\n    <ion-text>      \r\n      <h2>Payments</h2>\r\n    </ion-text>\r\n  </ion-col> \r\n  </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>\r\n        <ion-text>\r\n        <h3>Billing and Order details</h3>\r\n        </ion-text>\r\n        </ion-card-title>       \r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <form #f=\"ngForm\" (ngSubmit)=\"pay()\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\"> Name </ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"name\" required ngModel name=\"name\" required></ion-input>\r\n        <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>  \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Town/City</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"town\" required ngModel name=\"town\" required></ion-input> \r\n        <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>   \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon> \r\n        <ion-label position=\"floating\">Phone</ion-label>\r\n        <ion-input type=\"tel\" [(ngModel)]=\"phone\" required ngModel name=\"phone\" required></ion-input>    \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon> \r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input type=\"email\" [(ngModel)]=\"email\" required ngModel name=\"email\" required></ion-input>    \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"paper-plane-outline\" slot=\"start\"></ion-icon> \r\n        <ion-label position=\"floating\">Shipment Adrress</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"ship_address\" required ngModel name=\"ship_address\" required placeholder=\"Eg Nyabugogo kwamutangana\"></ion-input>    \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-text>\r\n          <span style=\"font-size: 15pt;\"><b>Your order</b></span>\r\n        </ion-text>         \r\n      </ion-item>\r\n      <ion-grid class=\"ion-grid\">\r\n        <ion-row class=\"ion-align-items-center cell-class\">\r\n          <ion-col  size=\"4\">\r\n            <ion-item><b>Product</b></ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-item><b>Qty</b></ion-item>\r\n          </ion-col>  \r\n          <ion-col size=\"4\">\r\n            <ion-item><b>Amount</b></ion-item>\r\n          </ion-col>        \r\n        </ion-row>        \r\n        <ion-row *ngFor=\"let p of cart\" class=\"ion-align-items-center cell-class\">\r\n          <ion-col  size=\"4\">\r\n            <ion-item>{{p.ProductName }}</ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-item>{{p.Amount}} </ion-item>\r\n          </ion-col>  \r\n          <ion-col size=\"4\">\r\n            <ion-item>{{p.Amount* p.Price}} Frw</ion-item>\r\n          </ion-col>         \r\n        </ion-row>       \r\n        <ion-row class=\"ion-align-items-center cell-class\">\r\n          <ion-col  size=\"6\">\r\n            <ion-item>Subtotal</ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item> {{total()}} Frw</ion-item>\r\n          </ion-col>          \r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center cell-class\">\r\n          <ion-col  size=\"6\">\r\n            <ion-item>Shipping Fees</ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>Free Shipping</ion-item>\r\n          </ion-col>          \r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center cell-class\">\r\n          <ion-col  size=\"6\">\r\n            <ion-item>Total </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>{{total() |currency:'Frw'}}</ion-item>\r\n          </ion-col>          \r\n        </ion-row>\r\n        \r\n      </ion-grid>\r\n      <ion-list>\r\n  <ion-radio-group [(ngModel)]=\"pay_method\" required ngModel name=\"pay_method\" required>\r\n    <ion-list-header>\r\n      <ion-label>Payment Method</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Cash on delivery </ion-label>\r\n      <ion-radio slot=\"start\" value=\"cash on delivery\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Mobile Money/Credit Card</ion-label>\r\n      <ion-radio slot=\"start\" value=\"mobile Money / credit card\" selected></ion-radio>\r\n    </ion-item>    \r\n  </ion-radio-group>\r\n</ion-list>\r\n\r\n      <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\" [disabled]=\"!f.valid\">\r\n        \r\n        <span style=\"text-transform:none!important;font-size:20px;\">Confirm</span></ion-button> \r\n        \r\n      </form>     \r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/payments/payments-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/payments/payments-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function() { return PaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.page */ "./src/app/payments/payments.page.ts");




const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
    },
    {
        path: 'payment-confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | payment-confirm-payment-confirm-module */ "payment-confirm-payment-confirm-module").then(__webpack_require__.bind(null, /*! ./payment-confirm/payment-confirm.module */ "./src/app/payments/payment-confirm/payment-confirm.module.ts")).then(m => m.PaymentConfirmPageModule)
    }
];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {
};
PaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentsPageRoutingModule);



/***/ }),

/***/ "./src/app/payments/payments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.module.ts ***!
  \*********************************************/
/*! exports provided: PaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-routing.module */ "./src/app/payments/payments-routing.module.ts");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments.page */ "./src/app/payments/payments.page.ts");







let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"]
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
    })
], PaymentsPageModule);



/***/ }),

/***/ "./src/app/payments/payments.page.scss":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cell-class {\n  border-color: #aeb7ca;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  background-color: lightgrey;\n}\n\n.ion-grid {\n  border: 4px solid #0b1427;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvQzpcXFVzZXJzXFxva290aGJyYWluXFxEZXNrdG9wXFxDcmVhdGVPcmRlci9zcmNcXGFwcFxccGF5bWVudHNcXHBheW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5bWVudHMvcGF5bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQW9CLG1CQUFBO0VBQ3BCLDJCQUFBO0FDRUo7O0FEQUU7RUFDRSx5QkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudHMvcGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbGwtY2xhc3Mge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWViN2NhOyBcclxuICAgIGJvcmRlci13aWR0aDogLjAxZW07IFxyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBtYXJnaW4tYm90dG9tIDogLTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleVxyXG4gIH1cclxuICAuaW9uLWdyaWQge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzBiMTQyNztcclxuICB9IiwiLmNlbGwtY2xhc3Mge1xuICBib3JkZXItY29sb3I6ICNhZWI3Y2E7XG4gIGJvcmRlci13aWR0aDogMC4wMWVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi5pb24tZ3JpZCB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMwYjE0Mjc7XG59Il19 */");

/***/ }),

/***/ "./src/app/payments/payments.page.ts":
/*!*******************************************!*\
  !*** ./src/app/payments/payments.page.ts ***!
  \*******************************************/
/*! exports provided: PaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPage", function() { return PaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");






let PaymentsPage = class PaymentsPage {
    //cart: Product[] = [];
    constructor(cartService, alertController, fbs) {
        this.cartService = cartService;
        this.alertController = alertController;
        this.fbs = fbs;
        this.cart = this.cartService.getCart();
        //creating the product list containing the name and the number 
        //of items
        this.ProductList = [];
        //payment amoiunt
        this.pay_amount = this.total();
        //getting today's date
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-RW');
        this.today = new Date().toDateString();
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
        //adding order values to orders array
    }
    total() {
        return window.home.getTotal();
    }
    //function for alert
    presentAlert(noti_header, noti_subheader, noti_message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: noti_header,
                subHeader: noti_subheader,
                message: noti_message,
                buttons: ['OK']
            });
            alert.present();
        });
    }
    //general function for sending emails
    email_customer(receiver_email, subject, body) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "alexnewzniyo@gmail.com",
            Password: "C18C89757270B98191EE45EAB7FB47A7ABE7",
            To: receiver_email,
            From: "alexnewzniyo@gmail.com",
            Subject: subject,
            Body: body
        });
    }
    //function for sending order email
    orderEmail() {
        this.email_customer(this.email, 'Your Order', this.body_mail_order);
    }
    //function that manages payment and orders
    pay() {
        //the body of order email    
        this.body_mail_order = "<table><thead><tr style='background-color: maroon;color: white;'>" +
            "<th colspan='2'><h1><br>Thank you for your order</h1></th></tr></thead><tbody><tr>" +
            "<td colspan='2'><br>Hi <b>" + this.name + ",</b> <br><br>Just to let you know — we've received " +
            "your order <b>#9412</b> ,and it is now being processed:<br><br>Payment Method : <b>" + this.pay_method + ".</b><br>" +
            "<h2><b>[Order #9412] (" + this.today + ")</b></h2></td></tr><tr><td><b>Products</b></td>" +
            "<td>Denim Jeans(3in1) - 32 [x 2] <br><br></td></tr> <b><br><tr><td><b>Amount</b></td>" +
            "<td>30,000 Frw <br><br></td></tr><tr><td><b>Shipping</b></td><td>Free Shipping <br><br></td>" +
            "</tr><tr><td><b>Total</b></td><td>30,000 Frw <br><br></td></tr><tr><td><b>Shipping Address</b></td>" +
            "<td>" + this.ship_address + " <br><br></td></tr></tbody><tfoot><tr><th colspan='2'>Thank you for shopping with" +
            "<a href='https://kstorez.com'>Kstorez</a></th></tr></tfoot></table>";
        //checking the payment method chosen by the customer
        if (this.pay_method == "mobile Money / credit card") {
            //this.presentAlert("Order Received","Dear,"+ this.name, "We have received your order. we are now processing it.");
            //saving the order details in the database
            this.fbs.createOrder({
                amount: this.pay_amount,
                cust_email: this.email,
                cust_name: this.name,
                cust_phone: this.phone,
                products: this.cartService.getCart(),
                ref: "23436565",
                ship_address: this.ship_address,
                status: "unpaid"
            });
            //email customer
            this.orderEmail();
            //proceeding with payment
            makePayment(this.pay_amount, this.email, this.phone, this.name);
        }
        else {
            //sending order email
            this.orderEmail();
            //saving the order details in the database
            this.fbs.createOrder({
                amount: this.pay_amount,
                cust_email: this.email,
                cust_name: this.name,
                cust_phone: this.phone,
                products: "rice [x 2]",
                ref: "23436565",
                ship_address: this.ship_address,
                status: "unpaid"
            });
            //sending an alert
            //this.presentAlert("Order Received","Dear,"+ this.name, "We have received your order. we are now processing it.");
        }
    }
    sendSms() {
    }
};
PaymentsPage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
];
PaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payments.page.scss */ "./src/app/payments/payments.page.scss")).default]
    })
], PaymentsPage);



/***/ })

}]);
//# sourceMappingURL=payments-payments-module-es2015.js.map