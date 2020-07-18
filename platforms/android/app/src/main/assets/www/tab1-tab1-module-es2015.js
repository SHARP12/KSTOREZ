(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title><h1>Kstorez</h1></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-searchbar\r\n  showcancelbutton=\"\"\r\n  (ionInput)=\"filterList($event)\"\r\n></ion-searchbar>\r\n\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button >\r\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-text>\r\n    <h4 style=\"text-align: center;\">Categories</h4>\r\n  </ion-text>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"3\" offset=\"1\">\r\n        <ion-avatar>\r\n          <img src=\"https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_626/https://www.kstorez.com/wp-content/uploads/2020/06/foot-heels-shoe-girl-women_1203-6517.jpg\">\r\n        </ion-avatar><br>\r\n        <ion-label>Women's shoes</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" offset=\"1\">\r\n        <ion-avatar>\r\n          <img src=\"https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_765/https://www.kstorez.com/wp-content/uploads/2020/05/apple-iphone-xr-64gb.jpg\">\r\n        </ion-avatar><br>\r\n        <ion-label>Smart Phones</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" offset=\"1\">\r\n        <ion-avatar>\r\n          <img src=\"https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1080/https://www.kstorez.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-22-at-15.59.20.jpeg\">\r\n        </ion-avatar><br>\r\n        <ion-label>Men's Shirts</ion-label>\r\n      </ion-col>\r\n           \r\n    </ion-row>\r\n    </ion-grid>\r\n\r\n  <ion-text>\r\n    <h4 style=\"text-align: center;\">All products</h4>\r\n  </ion-text>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col  size=\"6\">\r\n        <ion-card *ngFor=\"let item of itemList\">\r\n          <ion-card-header>\r\n            \r\n            <ion-card-title>\r\n              <ion-col>\r\n                {{item.ProductName}}\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-button fill=\"clear\" (click)=\"addToCart(item)\" class=\"cart\" style=\"color:maroon\">\r\n                  <ion-icon name=\"heart\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n               \r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-row>\r\n              \r\n              <img [src]= \"item.imageUrl\" alt=\"image\" width=\"150\" height=\"100\">\r\n              \r\n            </ion-row>\r\n            <ion-row class=\"ion-align-items-center\">\r\n              <ion-col size=\"\">\r\n                <ion-label color=\"secondary\">\r\n                  <b>{{ item.Price | currency:'RF'}}</b>\r\n                  <p>{{item.Description}}</p>\r\n                </ion-label>\r\n              </ion-col>             \r\n            </ion-row>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col  size=\"6\">\r\n        <ion-card *ngFor=\"let item of itemList\">\r\n          <ion-card-header>\r\n            \r\n            <ion-card-title>\r\n              <ion-col>\r\n                {{item.ProductName}}\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-button fill=\"clear\" (click)=\"addToCart(item)\" class=\"cart\" style=\"color:maroon\">\r\n                  <ion-icon name=\"heart\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n               \r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-row>\r\n              \r\n              <img [src]= \"item.imageUrl\" alt=\"image\" width=\"150\" height=\"100\">\r\n              \r\n            </ion-row>\r\n            <ion-row class=\"ion-align-items-center\">\r\n              <ion-col size=\"\">\r\n                <ion-label color=\"secondary\">\r\n                  <b>{{ item.Price | currency:'RF'}}</b>\r\n                  <p>{{item.Description}}</p>\r\n                </ion-label>\r\n              </ion-col>             \r\n            </ion-row>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n               \r\n    </ion-row>  \r\n  </ion-grid>\r\n \r\n<!-- abc -->  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  background-color: #f0f3f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXG9rb3RoYnJhaW5cXERlc2t0b3BcXENyZWF0ZU9yZGVyL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjU7XHJcbn0iLCJpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let Tab1Page = class Tab1Page {
    constructor(cartService, modalCtrl, firestore) {
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.firestore = firestore;
        this.cart = [];
        this.products = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.items = this.cartService.retrieve_products();
            this.cart = this.cartService.getCart();
            this.cartItemCount = this.cartService.getCartItemCount();
            this.itemList = yield this.initializeItems();
        });
    }
    //function to fetch the items when a query is to be performed
    initializeItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const itemList = yield this.firestore.collection('items').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).toPromise();
            return itemList;
        });
    }
    //function to filter the items when the user starts the search task
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.itemList = yield this.initializeItems();
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.itemList = this.itemList.filter(currentItem => {
                if (currentItem.ProductName && searchTerm) {
                    return (currentItem.ProductName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    addToCart(product) {
        this.cartService.addProduct(product);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cart', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], Tab1Page.prototype, "fab", void 0);
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map