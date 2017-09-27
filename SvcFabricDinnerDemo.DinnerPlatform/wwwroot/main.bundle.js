webpackJsonp(["main"],{

/***/ "../../../../../AppSrc/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../AppSrc/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../AppSrc/app/Admin/add-restaurant/add-restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">Neues Restaurant: </div>\r\n\r\n    <form #form=\"ngForm\" (ngSubmit)=\"save(form.value)\" class=\"form-horizontal\">\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"control-label col-xs-1\">Restaurantname</label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"text\" name=\"name\" ngModel [(ngModel)]=\"name\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-4\">\r\n          <span class=\"selected-message\">{{message}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-4\">\r\n          <button type=\"submit\" class=\"btn btn-default\" id=\"button\">Anlegen</button> </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/Admin/add-restaurant/add-restaurant.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/Admin/add-restaurant/add-restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AddRestaurantComponent = (function () {
    function AddRestaurantComponent(adminClient) {
        this.adminClient = adminClient;
        this.restaurantAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    AddRestaurantComponent.prototype.ngOnInit = function () {
    };
    AddRestaurantComponent.prototype.save = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var restaurant;
            return __generator(this, function (_a) {
                restaurant = new __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["g" /* Restaurant */]();
                restaurant.name = this.name;
                this.adminClient.create(restaurant).subscribe(function (addedRestaurant) {
                    _this.message = 'Restaurant ' + addedRestaurant.name + '  added';
                    _this.restaurantAdded.emit(addedRestaurant);
                }, function (error) {
                    _this.message = 'Fehler beim Speichern ';
                    if (error.message) {
                        _this.message += error.message;
                    }
                    if (error.status) {
                        _this.message += ';Status: ' + error.status;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */])(),
        __metadata("design:type", Object)
    ], AddRestaurantComponent.prototype, "restaurantAdded", void 0);
    AddRestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'dinner-add-restaurant',
            template: __webpack_require__("../../../../../AppSrc/app/Admin/add-restaurant/add-restaurant.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/Admin/add-restaurant/add-restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["b" /* AdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["b" /* AdminClient */]) === "function" && _a || Object])
    ], AddRestaurantComponent);
    return AddRestaurantComponent;
    var _a;
}());

//# sourceMappingURL=add-restaurant.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/admin-restaurant/admin-restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-restaurant works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/admin-restaurant/admin-restaurant.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/admin-restaurant/admin-restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminRestaurantComponent = (function () {
    function AdminRestaurantComponent() {
    }
    AdminRestaurantComponent.prototype.ngOnInit = function () {
    };
    AdminRestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-admin-restaurant',
            template: __webpack_require__("../../../../../AppSrc/app/admin-restaurant/admin-restaurant.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/admin-restaurant/admin-restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminRestaurantComponent);
    return AdminRestaurantComponent;
}());

//# sourceMappingURL=admin-restaurant.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/admin/add-dish/add-dish.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"adminNeuesRegister\">\r\n  <div class=\"card-header\">Neues Gericht: </div>\r\n  <div class=\"card-body\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"save(form.value)\" class=\"form-horizontal\">\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"control-label col-xs-1\">Gericht</label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"text\" name=\"name\" ngModel [(ngModel)]=\"name\" class=\"form-control\">\r\n        </div>\r\n        <label for=\"description\" class=\"control-label col-xs-1\">Beschreibung</label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"text\" name=\"description\" ngModel [(ngModel)]=\"description\" class=\"form-control\">\r\n        </div>\r\n        <label for=\"imageUrl\" class=\"control-label col-xs-1\">Url Bild </label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"text\" name=\"imageUrl\" ngModel [(ngModel)]=\"imageUrl\" class=\"form-control\">\r\n        </div>\r\n        <label for=\"price\" class=\"control-label col-xs-1\">Preis</label>\r\n        <div class=\"col-xs-3\">\r\n          <input type=\"number\" name=\"price\" ngModel [(ngModel)]=\"price\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-4\">\r\n          <span class=\"selected-message\">{{message}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-4\">\r\n          <button type=\"submit\" class=\"btn btn-default\" id=\"button\">Anlegen</button> </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/admin/add-dish/add-dish.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/admin/add-dish/add-dish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDishComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddDishComponent = (function () {
    function AddDishComponent(restaurantAdminClient) {
        this.restaurantAdminClient = restaurantAdminClient;
        this.dishAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    AddDishComponent.prototype.save = function (value) {
        var _this = this;
        var dish = new __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["c" /* Dish */]();
        dish.name = this.name;
        dish.price = this.price;
        dish.description = this.description;
        dish.imageUrl = this.imageUrl;
        this.restaurantAdminClient.addDish(this.restaurantId, dish).subscribe(function (result) {
            _this.dishAdded.emit(result);
        }, function (error) {
            console.log(error);
        });
    };
    AddDishComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], AddDishComponent.prototype, "restaurantId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */])(),
        __metadata("design:type", Object)
    ], AddDishComponent.prototype, "dishAdded", void 0);
    AddDishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'dinner-add-dish',
            template: __webpack_require__("../../../../../AppSrc/app/admin/add-dish/add-dish.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/admin/add-dish/add-dish.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["h" /* RestaurantAdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["h" /* RestaurantAdminClient */]) === "function" && _a || Object])
    ], AddDishComponent);
    return AddDishComponent;
    var _a;
}());

//# sourceMappingURL=add-dish.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/admin/add-restaurant-table/add-restaurant-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"adminNeuesRegister\">\r\n    <div class=\"card-header\">Neuer Tisch:</div>\r\n    <div class=\"card-body\">\r\n      <form #form=\"ngForm\" (ngSubmit)=\"save(form.value)\" class=\"form-horizontal\">\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\" class=\"control-label col-xs-1\">Tischnummer:</label>\r\n                <div class=\"col-xs-1\">\r\n                  <input type=\"text\" name=\"tablenr\" ngModel [(ngModel)]=\"tablenr\" class=\"form-control \">\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <div class=\"col-xs-4\">\r\n                  <span class=\"selected-message\">{{message}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"col-xs-4\">\r\n                  <button type=\"submit\" class=\"btn btn-default\" id=\"button\">Anlegen</button> </div>\r\n              </div>\r\n            </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/admin/add-restaurant-table/add-restaurant-table.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/admin/add-restaurant-table/add-restaurant-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRestaurantTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AddRestaurantTableComponent = (function () {
    function AddRestaurantTableComponent(restaurantAdminClient) {
        this.restaurantAdminClient = restaurantAdminClient;
        this.tableAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
    }
    AddRestaurantTableComponent.prototype.ngOnInit = function () {
    };
    AddRestaurantTableComponent.prototype.save = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var table;
            return __generator(this, function (_a) {
                table = new __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["j" /* RestaurantTable */]();
                table.tablenr = this.tablenr;
                this.restaurantAdminClient.createTable(this.restaurantId, table).subscribe(function (addedTable) {
                    _this.message = 'Tisch ' + addedTable.tablenr + ' wurde hinzugefügt';
                    _this.tableAdded.emit(addedTable);
                }, function (error) {
                    _this.message = 'Fehler beim Speichern ';
                    if (error.message) {
                        _this.message += error.message;
                    }
                    if (error.status) {
                        _this.message += ';Status: ' + error.status;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], AddRestaurantTableComponent.prototype, "restaurantId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */])(),
        __metadata("design:type", Object)
    ], AddRestaurantTableComponent.prototype, "tableAdded", void 0);
    AddRestaurantTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'dinner-add-restaurant-table',
            template: __webpack_require__("../../../../../AppSrc/app/admin/add-restaurant-table/add-restaurant-table.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/admin/add-restaurant-table/add-restaurant-table.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["h" /* RestaurantAdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["h" /* RestaurantAdminClient */]) === "function" && _a || Object])
    ], AddRestaurantTableComponent);
    return AddRestaurantTableComponent;
    var _a;
}());

//# sourceMappingURL=add-restaurant-table.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card col-12\" style=\"border: 0px solid white\">\r\n  <h3>Administration</h3>\r\n\r\n  <div class=\"card col-6\" style=\"border: 0px\">\r\n  <dinner-add-restaurant (restaurantAdded)=\"restaurantAdded($event)\"></dinner-add-restaurant>\r\n  </div><br/>\r\n\r\n  <div [hidden]='restaurants.length == 0' class=\"col-12\">\r\n      <div class=\"card-header col-6\">Anzahl Restaurants: {{restaurants.length}}</div> <br/>\r\n\r\n      <div class=\"card  mb-6\" *ngFor=\"let restaurant of restaurants\" style=\"background-color: #d7dae0\">\r\n          <dinner-restaurant-detail [restaurant]=\"restaurant\"></dinner-restaurant-detail>\r\n       </div> \r\n  </div>\r\n  <br/>\r\n  <a [routerLink]=\"['/']\">Zurück zur Übersicht</a>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/admin/admin.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(adminClient) {
        this.adminClient = adminClient;
        this.restaurants = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminClient.get().subscribe(function (response) { return _this.restaurants = response != null ? response : []; });
    };
    AdminComponent.prototype.restaurantAdded = function (restaurant) {
        this.restaurants = this.restaurants.concat([restaurant]);
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'dinner-admin',
            template: __webpack_require__("../../../../../AppSrc/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/admin/admin.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["b" /* AdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["b" /* AdminClient */]) === "function" && _a || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a;
}());

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/admin/menucard-administration/menucard-administration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\r\n\r\n        <div class=\"adminTableNumber\" *ngFor=\"let dish of dishes\">\r\n          <div class=\"card-block\">\r\n              <img class=\"card-img-top\" [src]=\"dish.imageUrl\" [alt]=\"dish.name\">\r\n           <h5 class=\"card-title\"> {{dish.name}}</h5>\r\n           <div class=\"card-text\">{{dish.description}} €</div>\r\n           <div class=\"card-text\">Preis: {{dish.price}} €</div>\r\n          </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/admin/menucard-administration/menucard-administration.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/admin/menucard-administration/menucard-administration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenucardAdministrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenucardAdministrationComponent = (function () {
    function MenucardAdministrationComponent() {
    }
    MenucardAdministrationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MenucardAdministrationComponent.prototype, "restaurantId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MenucardAdministrationComponent.prototype, "dishes", void 0);
    MenucardAdministrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-menucard-administration',
            template: __webpack_require__("../../../../../AppSrc/app/admin/menucard-administration/menucard-administration.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/admin/menucard-administration/menucard-administration.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MenucardAdministrationComponent);
    return MenucardAdministrationComponent;
}());

//# sourceMappingURL=menucard-administration.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/admin/restaurant-detail/restaurant-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\">{{restaurant.name}}</div>\r\n<div class=\"card-body\">\r\n  <div class=\"card-deck\">\r\n    <div class=\"card\">\r\n      <p id=\"anzahl\"><b>{{restaurantTables.length}} Tisch(e)</b></p>\r\n      <div class=\"card-body\">\r\n        <dinner-add-restaurant-table [restaurantId]=\"restaurant.id\" (tableAdded)=\"restaurantTableAdded($event)\"></dinner-add-restaurant-table>\r\n        <dinner-restaurant-tables [restaurantId]=\"restaurant.id\" [restaurantTables]=\"restaurantTables\"> </dinner-restaurant-tables>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <p id=\"anzahl\"><b>{{dishes.length}} Gericht(e)</b></p>\r\n      <div class=\"card-body\">\r\n        <dinner-add-dish [restaurantId]=\"restaurant.id\" (dishAdded)=\"dishAdded($event)\"></dinner-add-dish>\r\n        <dinner-menucard-administration [restaurantId]=\"restaurant.id\" [dishes]=\"dishes\"></dinner-menucard-administration>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <hr>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/admin/restaurant-detail/restaurant-detail.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/admin/restaurant-detail/restaurant-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantDetailComponent = (function () {
    function RestaurantDetailComponent(restaurantAdmin) {
        this.restaurantAdmin = restaurantAdmin;
    }
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantTables = [];
        this.dishes = [];
        this.restaurantAdmin.getTables(this.restaurant.id).subscribe(function (list) {
            _this.restaurantTables = list;
            console.log('tables loaded:' + list.length);
        }, function (error) {
            console.log('Fehler beim Laden der Tische' + error);
            // error
        });
        this.restaurantAdmin.getMenuCard(this.restaurant.id).subscribe(function (list) {
            _this.dishes = list;
            console.log('dishes loaded:' + list.length);
        }, function (error) {
            console.log('Fehler beim Laden der Menükarte' + error);
            // error
        });
    };
    RestaurantDetailComponent.prototype.restaurantTableAdded = function (table) {
        if (table) {
            this.restaurantTables = this.restaurantTables.concat([table]);
        }
    };
    RestaurantDetailComponent.prototype.dishAdded = function (dish) {
        if (dish) {
            this.dishes = this.dishes.concat([dish]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["g" /* Restaurant */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["g" /* Restaurant */]) === "function" && _a || Object)
    ], RestaurantDetailComponent.prototype, "restaurant", void 0);
    RestaurantDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'dinner-restaurant-detail',
            template: __webpack_require__("../../../../../AppSrc/app/admin/restaurant-detail/restaurant-detail.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/admin/restaurant-detail/restaurant-detail.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["h" /* RestaurantAdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["h" /* RestaurantAdminClient */]) === "function" && _b || Object])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
    var _a, _b;
}());

//# sourceMappingURL=restaurant-detail.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/admin/restaurant-tables/restaurant-tables.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"card-deck\">\r\n\r\n      <div class=\"adminTableNumber\" *ngFor=\"let table of restaurantTables\">\r\n        <div>\r\n         <h5 class=\"card-title \"> Tisch {{table.tablenr}} </h5>\r\n        </div>\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../AppSrc/app/admin/restaurant-tables/restaurant-tables.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/admin/restaurant-tables/restaurant-tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestaurantTablesComponent = (function () {
    function RestaurantTablesComponent() {
    }
    RestaurantTablesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], RestaurantTablesComponent.prototype, "restaurantId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], RestaurantTablesComponent.prototype, "restaurantTables", void 0);
    RestaurantTablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-restaurant-tables',
            template: __webpack_require__("../../../../../AppSrc/app/admin/restaurant-tables/restaurant-tables.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/admin/restaurant-tables/restaurant-tables.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantTablesComponent);
    return RestaurantTablesComponent;
}());

//# sourceMappingURL=restaurant-tables.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../AppSrc/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurants_restaurants_component__ = __webpack_require__("../../../../../AppSrc/app/restaurants/restaurants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_restaurant_select_restaurant_component__ = __webpack_require__("../../../../../AppSrc/app/select-restaurant/select-restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restaurant_restaurant_component__ = __webpack_require__("../../../../../AppSrc/app/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_table_in_restaurant_select_table_in_restaurant_component__ = __webpack_require__("../../../../../AppSrc/app/select-table-in-restaurant/select-table-in-restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selected_table_selected_table_component__ = __webpack_require__("../../../../../AppSrc/app/selected-table/selected-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_dish_order_dish_component__ = __webpack_require__("../../../../../AppSrc/app/order-dish/order-dish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_status_order_status_component__ = __webpack_require__("../../../../../AppSrc/app/order-status/order-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__kitchen_kitchens_kitchens_component__ = __webpack_require__("../../../../../AppSrc/app/kitchen/kitchens/kitchens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kitchen_kitchen_kitchen_component__ = __webpack_require__("../../../../../AppSrc/app/kitchen/kitchen/kitchen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__kitchen_select_kitchen_select_kitchen_component__ = __webpack_require__("../../../../../AppSrc/app/kitchen/select-kitchen/select-kitchen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        redirectTo: 'restaurants',
        pathMatch: 'full'
    },
    {
        path: 'restaurants', component: __WEBPACK_IMPORTED_MODULE_3__restaurants_restaurants_component__["a" /* RestaurantsComponent */],
        children: [
            {
                path: '',
                redirectTo: 'select',
                pathMatch: 'full'
            },
            {
                path: 'select',
                component: __WEBPACK_IMPORTED_MODULE_4__select_restaurant_select_restaurant_component__["a" /* SelectRestaurantComponent */]
            },
            {
                path: ':restaurantId',
                component: __WEBPACK_IMPORTED_MODULE_5__restaurant_restaurant_component__["a" /* RestaurantComponent */],
                children: [
                    {
                        path: '',
                        redirectTo: 'select',
                        pathMatch: 'full'
                    },
                    {
                        path: 'select',
                        component: __WEBPACK_IMPORTED_MODULE_6__select_table_in_restaurant_select_table_in_restaurant_component__["a" /* SelectTableInRestaurantComponent */]
                    },
                    {
                        path: ':tableId',
                        component: __WEBPACK_IMPORTED_MODULE_7__selected_table_selected_table_component__["a" /* SelectedTableComponent */],
                        children: [
                            {
                                path: '',
                                redirectTo: 'order',
                                pathMatch: 'full'
                            },
                            {
                                path: 'order',
                                component: __WEBPACK_IMPORTED_MODULE_8__order_dish_order_dish_component__["a" /* OrderDishComponent */]
                            },
                            {
                                path: 'status',
                                component: __WEBPACK_IMPORTED_MODULE_9__order_status_order_status_component__["a" /* OrderStatusComponent */]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: 'kitchens', component: __WEBPACK_IMPORTED_MODULE_10__kitchen_kitchens_kitchens_component__["a" /* KitchensComponent */],
        children: [
            {
                path: '',
                redirectTo: 'select',
                pathMatch: 'full'
            },
            {
                path: 'select',
                component: __WEBPACK_IMPORTED_MODULE_12__kitchen_select_kitchen_select_kitchen_component__["a" /* SelectKitchenComponent */]
            },
            {
                path: ':restaurantId',
                component: __WEBPACK_IMPORTED_MODULE_11__kitchen_kitchen_kitchen_component__["a" /* KitchenComponent */]
            }
        ]
    },
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"header\"> \r\n  \r\n    <a href=\"http://www.bridging-it.de/\" class=\"card-img-top\" >\r\n      <img src=\"assets/bitlogo.png\"/> \r\n    </a><br/>\r\n    <h1>Microservices mit Azure Service Fabric:</h1>\r\n  </div>\r\n  \r\n <div class=\"container\"> \r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n  <div  id=\"navbarSupportedContent\" class=\"col-md-12\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/kitchens']\">Küche</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/admin']\">Admin</a>\r\n        </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" href=\"http://blog.bridging-it.de/author/Tobias.Meier\" _target=\"new\">Weitere Infos</a>\r\n          <ul class=\"dropdown-menu\">\r\n            <a href=\"\" >: http://blog.bridging-it-de/author/Tobias.Meier</a>\r\n          </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav> <br/>\r\n\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Service Fabric Dinner Demo';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-root',
            template: __webpack_require__("../../../../../AppSrc/app/app.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../AppSrc/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../AppSrc/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_restaurant_admin_restaurant_component__ = __webpack_require__("../../../../../AppSrc/app/admin-restaurant/admin-restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__ = __webpack_require__("../../../../../AppSrc/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Admin_add_restaurant_add_restaurant_component__ = __webpack_require__("../../../../../AppSrc/app/Admin/add-restaurant/add-restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_restaurant_tables_restaurant_tables_component__ = __webpack_require__("../../../../../AppSrc/app/admin/restaurant-tables/restaurant-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_add_restaurant_table_add_restaurant_table_component__ = __webpack_require__("../../../../../AppSrc/app/admin/add-restaurant-table/add-restaurant-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_restaurant_detail_restaurant_detail_component__ = __webpack_require__("../../../../../AppSrc/app/admin/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_menucard_administration_menucard_administration_component__ = __webpack_require__("../../../../../AppSrc/app/admin/menucard-administration/menucard-administration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_add_dish_add_dish_component__ = __webpack_require__("../../../../../AppSrc/app/admin/add-dish/add-dish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__restaurants_restaurants_component__ = __webpack_require__("../../../../../AppSrc/app/restaurants/restaurants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__restaurant_restaurant_component__ = __webpack_require__("../../../../../AppSrc/app/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__select_restaurant_select_restaurant_component__ = __webpack_require__("../../../../../AppSrc/app/select-restaurant/select-restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__select_table_in_restaurant_select_table_in_restaurant_component__ = __webpack_require__("../../../../../AppSrc/app/select-table-in-restaurant/select-table-in-restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__selected_table_selected_table_component__ = __webpack_require__("../../../../../AppSrc/app/selected-table/selected-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__order_dish_order_dish_component__ = __webpack_require__("../../../../../AppSrc/app/order-dish/order-dish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__order_status_order_status_component__ = __webpack_require__("../../../../../AppSrc/app/order-status/order-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__kitchen_kitchen_kitchen_component__ = __webpack_require__("../../../../../AppSrc/app/kitchen/kitchen/kitchen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__kitchen_kitchens_kitchens_component__ = __webpack_require__("../../../../../AppSrc/app/kitchen/kitchens/kitchens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__kitchen_select_kitchen_select_kitchen_component__ = __webpack_require__("../../../../../AppSrc/app/kitchen/select-kitchen/select-kitchen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var API_BASE_URL2 = 'http://localhost:8328';
if (window != null && window.location != null) {
    var loc = window.location;
    var server = loc.hostname;
    var port = loc.port;
    if (server === 'localhost' && port === '4200') {
        //Falls der Client direkt aus VSCode mit dem Serverstand 6.1 verwendet wird, ist das Protokoll auf http zu ändern:
        API_BASE_URL2 = "https://localhost:8333";
    }
    else {
        API_BASE_URL2 = loc.protocol + '//' + server + ':' + port;
    }
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__admin_restaurant_admin_restaurant_component__["a" /* AdminRestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Admin_add_restaurant_add_restaurant_component__["a" /* AddRestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_restaurant_tables_restaurant_tables_component__["a" /* RestaurantTablesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__admin_add_restaurant_table_add_restaurant_table_component__["a" /* AddRestaurantTableComponent */],
                __WEBPACK_IMPORTED_MODULE_12__admin_restaurant_detail_restaurant_detail_component__["a" /* RestaurantDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_menucard_administration_menucard_administration_component__["a" /* MenucardAdministrationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_add_dish_add_dish_component__["a" /* AddDishComponent */],
                __WEBPACK_IMPORTED_MODULE_15__restaurants_restaurants_component__["a" /* RestaurantsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__restaurant_restaurant_component__["a" /* RestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_17__select_restaurant_select_restaurant_component__["a" /* SelectRestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_18__select_table_in_restaurant_select_table_in_restaurant_component__["a" /* SelectTableInRestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_19__selected_table_selected_table_component__["a" /* SelectedTableComponent */],
                __WEBPACK_IMPORTED_MODULE_20__order_dish_order_dish_component__["a" /* OrderDishComponent */],
                __WEBPACK_IMPORTED_MODULE_21__order_status_order_status_component__["a" /* OrderStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_22__kitchen_kitchen_kitchen_component__["a" /* KitchenComponent */],
                __WEBPACK_IMPORTED_MODULE_23__kitchen_kitchens_kitchens_component__["a" /* KitchensComponent */],
                __WEBPACK_IMPORTED_MODULE_24__kitchen_select_kitchen_select_kitchen_component__["a" /* SelectKitchenComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__shared_Controllers_generated__["b" /* AdminClient */], __WEBPACK_IMPORTED_MODULE_9__shared_Controllers_generated__["h" /* RestaurantAdminClient */], __WEBPACK_IMPORTED_MODULE_9__shared_Controllers_generated__["f" /* OrderClient */], __WEBPACK_IMPORTED_MODULE_9__shared_Controllers_generated__["i" /* RestaurantClient */], __WEBPACK_IMPORTED_MODULE_9__shared_Controllers_generated__["d" /* KitchenClient */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__shared_Controllers_generated__["a" /* API_BASE_URL */], useValue: API_BASE_URL2 }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/kitchen/kitchen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-kitchen col-6\">\r\n<p><b>Offene Bestellungen:</b></p>\r\n<div *ngFor=\"let order of kitchenQueue\">\r\n  <div class=\"card-body\">\r\n    <h3 class=\"menue-title\">{{getDishname(order.dishId)}}</h3>    \r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"card-kitchen col-6\">\r\n<p><b> Folgende Gerichte werden gerade gekocht:</b></p>\r\n  <div *ngFor=\"let order of cookingQueue\">\r\n    <div class=\"card-body\">\r\n      <h3 class=\"menue-title\">{{getDishname(order.dishId)}}</h3>    \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/kitchen/kitchen.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/kitchen/kitchen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitchenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__ = __webpack_require__("../../../../rxjs/observable/IntervalObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KitchenComponent = (function () {
    function KitchenComponent(route, kitchenClient, restaurantClient) {
        this.route = route;
        this.kitchenClient = kitchenClient;
        this.restaurantClient = restaurantClient;
        this.alive = true;
    }
    KitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kitchenQueue = [];
        this.cookingQueue = [];
        this.restaurantNr = this.route.snapshot.params['restaurantId'];
        this.restaurantClient.getMenuCard(this.restaurantNr).subscribe(function (dishes) {
            _this.dishMap = new Map();
            dishes.forEach(function (dish) {
                _this.dishMap.set(dish.id, dish);
            });
        });
        this.kitchenClient.getKitchenQueue(this.restaurantNr).subscribe(function (kitchenOrders) {
            _this.kitchenQueue = kitchenOrders;
        });
        this.kitchenClient.getKitchenCookingQueue(this.restaurantNr).subscribe(function (kitchenOrders) {
            _this.cookingQueue = kitchenOrders;
        });
        var that = this;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__["IntervalObservable"].create(2000).subscribe(function (data) {
            if (that.subWaiting != null) {
                that.subWaiting.unsubscribe();
            }
            that.subWaiting = that.kitchenClient.getKitchenQueue(that.restaurantNr).subscribe(function (kitchenOrders) {
                that.kitchenQueue = kitchenOrders;
            });
            if (that.subCooking != null) {
                that.subCooking.unsubscribe();
            }
            that.subCooking = that.kitchenClient.getKitchenCookingQueue(that.restaurantNr).subscribe(function (kitchenOrders) {
                that.cookingQueue = kitchenOrders;
            });
        });
    };
    KitchenComponent.prototype.getDishname = function (id) {
        var found = this.dishMap.get(id);
        if (found)
            return found.name;
        return id;
    };
    KitchenComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.subCooking.unsubscribe();
        this.subWaiting.unsubscribe();
    };
    KitchenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'dinner-kitchen',
            template: __webpack_require__("../../../../../AppSrc/app/kitchen/kitchen/kitchen.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/kitchen/kitchen/kitchen.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["d" /* KitchenClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["d" /* KitchenClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["h" /* RestaurantAdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["h" /* RestaurantAdminClient */]) === "function" && _c || Object])
    ], KitchenComponent);
    return KitchenComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=kitchen.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/kitchens/kitchens.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/kitchens/kitchens.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/kitchens/kitchens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitchensComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KitchensComponent = (function () {
    function KitchensComponent() {
    }
    KitchensComponent.prototype.ngOnInit = function () {
    };
    KitchensComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-kitchens',
            template: __webpack_require__("../../../../../AppSrc/app/kitchen/kitchens/kitchens.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/kitchen/kitchens/kitchens.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], KitchensComponent);
    return KitchensComponent;
}());

//# sourceMappingURL=kitchens.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/select-kitchen/select-kitchen.component.html":
/***/ (function(module, exports) {

module.exports = "<p><b>Bitte wählen Sie eine Küche aus.</b></p>\r\n\r\n<div class=\"card  mb-3\" style=\"max-width: 40rem;\" *ngFor=\"let restaurant of restaurants\">\r\n  <div class=\"card-body\">\r\n    <h3 class=\"card-title\">{{restaurant.name}}</h3>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/kitchens/', restaurant.id]\" role=\"button\">Auswählen</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/select-kitchen/select-kitchen.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/kitchen/select-kitchen/select-kitchen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectKitchenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectKitchenComponent = (function () {
    function SelectKitchenComponent(restaurantClient) {
        this.restaurantClient = restaurantClient;
    }
    SelectKitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantClient.get().subscribe(function (restaurants) {
            _this.restaurants = restaurants;
        }, function (error) {
            console.log('Restaurants konnten nicht geladen werden: ' + error);
        });
    };
    SelectKitchenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'dinner-select-kitchen',
            template: __webpack_require__("../../../../../AppSrc/app/kitchen/select-kitchen/select-kitchen.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/kitchen/select-kitchen/select-kitchen.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["b" /* AdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["b" /* AdminClient */]) === "function" && _a || Object])
    ], SelectKitchenComponent);
    return SelectKitchenComponent;
    var _a;
}());

//# sourceMappingURL=select-kitchen.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/order-dish/order-dish.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<p><b>Bitte wählen Sie ein Gericht aus:</b></p>\r\n<p class=\"selected-message\">{{message}}</p>\r\n\r\n\r\n<div class=\"card col-md-3 mb-3\" *ngFor=\"let dish of dishes\" id=\"card-dish\">\r\n  \r\n  <div class=\"card-select-dish\">\r\n    <a class=\"btn btn-primary\" (click)=\"order(dish)\" role=\"button\" id=\"button\">Bestellen</a>\r\n    <div class=\"menue-text\">Preis: {{dish.price}} €</div>\r\n    <img class=\"card-img-top dishimg\" [src]=\"dish.imageUrl\" [alt]=\"dish.name\">\r\n    <h3 class=\"menue-title\" bg-primary> {{dish.name}}</h3>\r\n    <div class=\"menue-text\">{{dish.description}}</div><br/>\r\n  </div>\r\n  \r\n  \r\n</div><br/>\r\n </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/order-dish/order-dish.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/order-dish/order-dish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDishComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDishComponent = (function () {
    function OrderDishComponent(route, restaurantClient, restaurantAdminClient, orderClient) {
        this.route = route;
        this.restaurantClient = restaurantClient;
        this.restaurantAdminClient = restaurantAdminClient;
        this.orderClient = orderClient;
    }
    OrderDishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishes = [];
        this.restaurantId = this.route.snapshot.parent.parent.params['restaurantId'];
        this.tableId = this.route.snapshot.parent.params['tableId'];
        this.restaurantAdminClient.getMenuCard(this.restaurantId).subscribe(function (dishes) {
            _this.dishes = dishes;
        }, function (error) {
            console.log(error);
        });
    };
    OrderDishComponent.prototype.order = function (dish) {
        this.message = 'Bestellung starten';
        var order = new __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["e" /* Order */]();
        order.dishId = dish.id;
        order.price = dish.price;
        order.tableId = this.tableId;
        order.restaurantId = this.restaurantId;
        var that = this;
        this.orderClient.create(order).subscribe(function (orderresult) {
            that.message = dish.name + ' ist bestellt! Order id ' + orderresult.orderId + ' State: ' + orderresult.orderState;
        }, function (error) {
            console.log('Bestellung konnte nicht abgegeben werden!' + error);
            that.message = 'Bestellung konnte nicht abgegeben werden!' + error;
        });
    };
    OrderDishComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-order-dish',
            template: __webpack_require__("../../../../../AppSrc/app/order-dish/order-dish.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/order-dish/order-dish.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["i" /* RestaurantClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["i" /* RestaurantClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["h" /* RestaurantAdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["h" /* RestaurantAdminClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["f" /* OrderClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["f" /* OrderClient */]) === "function" && _d || Object])
    ], OrderDishComponent);
    return OrderDishComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=order-dish.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/order-status/order-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \r\n  <p><b>Getätigte Bestellungen</b></p>\r\n  <div class=\"card col-md-5 mb-3\" *ngFor=\"let order of orders\">\r\n    <h3 class=\"menue-title\">{{order.dish}}: {{order.state}}</h3>\r\n    <span class=\"menue-text\">{{order.price}} €</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../AppSrc/app/order-status/order-status.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/order-status/order-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderStatusComponent = (function () {
    function OrderStatusComponent(route, restaurantClient, orderClient) {
        this.route = route;
        this.restaurantClient = restaurantClient;
        this.orderClient = orderClient;
        this.orders = [];
    }
    OrderStatusComponent.prototype.ngOnInit = function () {
        this.restaurantId = this.route.snapshot.parent.parent.params['restaurantId'];
        this.tableId = this.route.snapshot.parent.params['tableId'];
        var that = this;
        this.orderClient.getOrders(that.tableId).subscribe(function (orders) {
            that.orders = orders;
        }, function (error) {
            console.log('Fehler beim Laden der Bestellungen des Tisches: ' + error);
        });
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].timer(10, 10).subscribe(function (data) {
            that.orderClient.getOrders(that.tableId).subscribe(function (orders) {
                that.orders = orders;
            }, function (error) {
                console.log('Fehler beim Laden der Bestellungen des Tisches: ' + error);
            });
        });
    };
    OrderStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-order-status',
            template: __webpack_require__("../../../../../AppSrc/app/order-status/order-status.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/order-status/order-status.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["i" /* RestaurantClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["i" /* RestaurantClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["f" /* OrderClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["f" /* OrderClient */]) === "function" && _c || Object])
    ], OrderStatusComponent);
    return OrderStatusComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=order-status.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/restaurant/restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<h2 *ngIf=\"restaurant!=null\" class=\"selected\">Restaurant: {{restaurant.name}}</h2><br/>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/restaurant/restaurant.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/restaurant/restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantComponent = (function () {
    function RestaurantComponent(route, restaurantClient) {
        this.route = route;
        this.restaurantClient = restaurantClient;
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantNr = this.route.snapshot.params['restaurantId'];
        this.restaurantClient.get(this.restaurantNr).subscribe(function (restaurant) {
            _this.restaurant = restaurant;
        }, function (error) {
            console.log('Fehler beim Laden des Restaurants');
        });
    };
    RestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-restaurant',
            template: __webpack_require__("../../../../../AppSrc/app/restaurant/restaurant.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/restaurant/restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_Controllers_generated__["i" /* RestaurantClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_Controllers_generated__["i" /* RestaurantClient */]) === "function" && _b || Object])
    ], RestaurantComponent);
    return RestaurantComponent;
    var _a, _b;
}());

//# sourceMappingURL=restaurant.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/restaurants/restaurants.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/restaurants/restaurants.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/restaurants/restaurants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestaurantsComponent = (function () {
    function RestaurantsComponent() {
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
    };
    RestaurantsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-restaurants',
            template: __webpack_require__("../../../../../AppSrc/app/restaurants/restaurants.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/restaurants/restaurants.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());

//# sourceMappingURL=restaurants.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/select-restaurant/select-restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <p><b>Bitte wählen Sie ein Restaurant aus.</b></p>\r\n\r\n  <div class=\"card col-5  mb-3\" *ngFor=\"let restaurant of restaurants\">\r\n    <div class=\"card-select\">\r\n      <h3 class=\"card-title\">{{restaurant.name}}</h3>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/restaurants/', restaurant.id]\" role=\"button\">Auswählen</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/select-restaurant/select-restaurant.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/select-restaurant/select-restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectRestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectRestaurantComponent = (function () {
    function SelectRestaurantComponent(restaurantClient) {
        this.restaurantClient = restaurantClient;
    }
    SelectRestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantClient.get().subscribe(function (restaurants) {
            _this.restaurants = restaurants;
        }, function (error) {
            console.log('Restaurants konnten nicht geladen werden: ' + error);
        });
    };
    SelectRestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'dinner-select-restaurant',
            template: __webpack_require__("../../../../../AppSrc/app/select-restaurant/select-restaurant.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/select-restaurant/select-restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["b" /* AdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_Controllers_generated__["b" /* AdminClient */]) === "function" && _a || Object])
    ], SelectRestaurantComponent);
    return SelectRestaurantComponent;
    var _a;
}());

//# sourceMappingURL=select-restaurant.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/select-table-in-restaurant/select-table-in-restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<p><b>Bitte wählen Sie einen Tisch aus.</b></p>\r\n<div class=\"row\"> \r\n  \r\n  <div class=\"card col-md-5 mb-3\" *ngFor=\"let table of tables\">\r\n    <div class=\"card-select\">\r\n      <h3 class=\"card-title\">Tisch {{table.tablenr}}</h3>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/restaurants/', restaurantId, table.id]\"  role=\"button\">Auswählen</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/select-table-in-restaurant/select-table-in-restaurant.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/select-table-in-restaurant/select-table-in-restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectTableInRestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectTableInRestaurantComponent = (function () {
    function SelectTableInRestaurantComponent(route, restaurantAdminClient) {
        this.route = route;
        this.restaurantAdminClient = restaurantAdminClient;
    }
    SelectTableInRestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tables = [];
        this.restaurantId = this.route.snapshot.parent.params['restaurantId'];
        this.restaurantAdminClient.getTables(this.restaurantId).subscribe(function (tables) {
            _this.tables = tables;
        }, function (error) {
            console.log(error);
        });
    };
    SelectTableInRestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-select-table-in-restaurant',
            template: __webpack_require__("../../../../../AppSrc/app/select-table-in-restaurant/select-table-in-restaurant.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/select-table-in-restaurant/select-table-in-restaurant.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_Controllers_generated__["h" /* RestaurantAdminClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_Controllers_generated__["h" /* RestaurantAdminClient */]) === "function" && _b || Object])
    ], SelectTableInRestaurantComponent);
    return SelectTableInRestaurantComponent;
    var _a, _b;
}());

//# sourceMappingURL=select-table-in-restaurant.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/selected-table/selected-table.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"table == true\">\r\n  Willkommen am Tisch {{table.tablenr}}\r\n</p>\r\n<div class=\"container\">  \r\n  <a routerLink=\"order\" class=\"btn btn-primary\">Gericht auswählen</a> &nbsp;&nbsp;\r\n  <a routerLink=\"status\" class=\"btn btn-primary\">Bestellungen</a>\r\n  \r\n</div><br/>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../AppSrc/app/selected-table/selected-table.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../AppSrc/app/selected-table/selected-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__ = __webpack_require__("../../../../../AppSrc/app/shared/Controllers.generated.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectedTableComponent = (function () {
    function SelectedTableComponent(route, restaurantClient) {
        this.route = route;
        this.restaurantClient = restaurantClient;
    }
    SelectedTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantId = this.route.snapshot.parent.params['restaurantId'];
        this.tableId = this.route.snapshot.params['tableId'];
        this.restaurantClient.getTable(this.restaurantId, this.tableId).subscribe(function (table) {
            _this.table = table;
        }, function (error) {
            console.log('Error beim Laden der Table');
        });
    };
    SelectedTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'dinner-selected-table',
            template: __webpack_require__("../../../../../AppSrc/app/selected-table/selected-table.component.html"),
            styles: [__webpack_require__("../../../../../AppSrc/app/selected-table/selected-table.component.sass")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["i" /* RestaurantClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Controllers_generated__["i" /* RestaurantClient */]) === "function" && _b || Object])
    ], SelectedTableComponent);
    return SelectedTableComponent;
    var _a, _b;
}());

//# sourceMappingURL=selected-table.component.js.map

/***/ }),

/***/ "../../../../../AppSrc/app/shared/Controllers.generated.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdminClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RestaurantAdminClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OrderClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RestaurantClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return KitchenClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Restaurant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Dish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RestaurantTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Order; });
/* unused harmony export OrderState */
/* unused harmony export TableOrder */
/* unused harmony export KitchenOrder */
/* unused harmony export SwaggerException */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.7.2.0 (NJsonSchema v9.6.3.0) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var API_BASE_URL = new __WEBPACK_IMPORTED_MODULE_8__angular_core__["S" /* OpaqueToken */]('API_BASE_URL');
var AdminClient = (function () {
    function AdminClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    AdminClient.prototype.get = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Admin/Get";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    AdminClient.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                    var item = resultData200_1[_i];
                    result200.push(Restaurant.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    AdminClient.prototype.create = function (restaurant) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Admin/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(restaurant);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    AdminClient.prototype.processCreate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Restaurant.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    AdminClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["T" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(API_BASE_URL)),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object, String])
    ], AdminClient);
    return AdminClient;
    var _a;
}());

var RestaurantAdminClient = (function () {
    function RestaurantAdminClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    RestaurantAdminClient.prototype.getMenuCard = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/RestaurantAdmin/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetMenuCard(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGetMenuCard(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    RestaurantAdminClient.prototype.processGetMenuCard = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                    var item = resultData200_2[_i];
                    result200.push(Dish.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    RestaurantAdminClient.prototype.addDish = function (restaurantId, dish) {
        var _this = this;
        var url_ = this.baseUrl + "/api/RestaurantAdmin/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(dish);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processAddDish(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processAddDish(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    RestaurantAdminClient.prototype.processAddDish = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Dish.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    RestaurantAdminClient.prototype.createTable = function (restaurantId, table) {
        var _this = this;
        var url_ = this.baseUrl + "/api/RestaurantAdmin/CreateTable/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(table);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processCreateTable(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processCreateTable(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    RestaurantAdminClient.prototype.processCreateTable = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RestaurantTable.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    RestaurantAdminClient.prototype.getTables = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/RestaurantAdmin/GetTables/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetTables(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGetTables(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    RestaurantAdminClient.prototype.processGetTables = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_3 = resultData200; _i < resultData200_3.length; _i++) {
                    var item = resultData200_3[_i];
                    result200.push(RestaurantTable.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    RestaurantAdminClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["T" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(API_BASE_URL)),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object, String])
    ], RestaurantAdminClient);
    return RestaurantAdminClient;
    var _a;
}());

var OrderClient = (function () {
    function OrderClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    OrderClient.prototype.create = function (order) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(order);
        var options_ = {
            body: content_,
            method: "post",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processCreate(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    OrderClient.prototype.processCreate = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Order.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    OrderClient.prototype.getOrder = function (orderId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order/GetOrder/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetOrder(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGetOrder(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    OrderClient.prototype.processGetOrder = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Order.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    OrderClient.prototype.getOrders = function (tableId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Order/GetOrders/{tableId}";
        if (tableId === undefined || tableId === null)
            throw new Error("The parameter 'tableId' must be defined.");
        url_ = url_.replace("{tableId}", encodeURIComponent("" + tableId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetOrders(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGetOrders(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    OrderClient.prototype.processGetOrders = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_4 = resultData200; _i < resultData200_4.length; _i++) {
                    var item = resultData200_4[_i];
                    result200.push(TableOrder.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    OrderClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["T" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(API_BASE_URL)),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object, String])
    ], OrderClient);
    return OrderClient;
    var _a;
}());

var RestaurantClient = (function () {
    function RestaurantClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    RestaurantClient.prototype.get = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Restaurant/Get/{restaurantId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGet(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGet(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    RestaurantClient.prototype.processGet = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Restaurant.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    RestaurantClient.prototype.getTable = function (restaurantId, tableId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Restaurant/GetTable/{restaurantId}/{tableId}";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        if (tableId === undefined || tableId === null)
            throw new Error("The parameter 'tableId' must be defined.");
        url_ = url_.replace("{tableId}", encodeURIComponent("" + tableId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetTable(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGetTable(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    RestaurantClient.prototype.processGetTable = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RestaurantTable.fromJS(resultData200) : null;
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    RestaurantClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["T" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(API_BASE_URL)),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object, String])
    ], RestaurantClient);
    return RestaurantClient;
    var _a;
}());

var KitchenClient = (function () {
    function KitchenClient(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    KitchenClient.prototype.getKitchenQueue = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Kitchen/{restaurantId}/KitchenQueue";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetKitchenQueue(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGetKitchenQueue(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    KitchenClient.prototype.processGetKitchenQueue = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_5 = resultData200; _i < resultData200_5.length; _i++) {
                    var item = resultData200_5[_i];
                    result200.push(KitchenOrder.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    KitchenClient.prototype.getKitchenCookingQueue = function (restaurantId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Kitchen/{restaurantId}/KitchenCookingQueue";
        if (restaurantId === undefined || restaurantId === null)
            throw new Error("The parameter 'restaurantId' must be defined.");
        url_ = url_.replace("{restaurantId}", encodeURIComponent("" + restaurantId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "get",
            headers: new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request(url_, options_).flatMap(function (response_) {
            return _this.processGetKitchenCookingQueue(response_);
        }).catch(function (response_) {
            if (response_ instanceof __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Response */]) {
                try {
                    return _this.processGetKitchenCookingQueue(response_);
                }
                catch (e) {
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(e);
                }
            }
            else
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(response_);
        });
    };
    KitchenClient.prototype.processGetKitchenCookingQueue = function (response) {
        var status = response.status;
        var _headers = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            var _responseText = response.text();
            var result200 = null;
            var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (var _i = 0, resultData200_6 = resultData200; _i < resultData200_6.length; _i++) {
                    var item = resultData200_6[_i];
                    result200.push(KitchenOrder.fromJS(item));
                }
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(result200);
        }
        else if (status !== 200 && status !== 204) {
            var _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
    };
    KitchenClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["T" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["B" /* Inject */])(API_BASE_URL)),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _a || Object, String])
    ], KitchenClient);
    return KitchenClient;
    var _a;
}());

var Restaurant = (function () {
    function Restaurant(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Restaurant.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.id = data["id"];
        }
    };
    Restaurant.fromJS = function (data) {
        var result = new Restaurant();
        result.init(data);
        return result;
    };
    Restaurant.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["id"] = this.id;
        return data;
    };
    return Restaurant;
}());

var Dish = (function () {
    function Dish(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Dish.prototype.init = function (data) {
        if (data) {
            this.name = data["name"];
            this.price = data["price"];
            this.id = data["id"];
            this.description = data["description"];
            this.imageUrl = data["imageUrl"];
        }
    };
    Dish.fromJS = function (data) {
        var result = new Dish();
        result.init(data);
        return result;
    };
    Dish.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["price"] = this.price;
        data["id"] = this.id;
        data["description"] = this.description;
        data["imageUrl"] = this.imageUrl;
        return data;
    };
    return Dish;
}());

var RestaurantTable = (function () {
    function RestaurantTable(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    RestaurantTable.prototype.init = function (data) {
        if (data) {
            this.tablenr = data["tablenr"];
            this.id = data["id"];
        }
    };
    RestaurantTable.fromJS = function (data) {
        var result = new RestaurantTable();
        result.init(data);
        return result;
    };
    RestaurantTable.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["tablenr"] = this.tablenr;
        data["id"] = this.id;
        return data;
    };
    return RestaurantTable;
}());

var Order = (function () {
    function Order(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Order.prototype.init = function (data) {
        if (data) {
            this.restaurantId = data["restaurantId"];
            this.orderId = data["orderId"];
            this.tableId = data["tableId"];
            this.dishId = data["dishId"];
            this.price = data["price"];
            this.orderTime = data["orderTime"] ? new Date(data["orderTime"].toString()) : undefined;
            this.servedTime = data["servedTime"] ? new Date(data["servedTime"].toString()) : undefined;
            this.orderState = data["orderState"];
        }
    };
    Order.fromJS = function (data) {
        var result = new Order();
        result.init(data);
        return result;
    };
    Order.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["restaurantId"] = this.restaurantId;
        data["orderId"] = this.orderId;
        data["tableId"] = this.tableId;
        data["dishId"] = this.dishId;
        data["price"] = this.price;
        data["orderTime"] = this.orderTime ? this.orderTime.toISOString() : undefined;
        data["servedTime"] = this.servedTime ? this.servedTime.toISOString() : undefined;
        data["orderState"] = this.orderState;
        return data;
    };
    return Order;
}());

var OrderState;
(function (OrderState) {
    OrderState[OrderState["None"] = 0] = "None";
    OrderState[OrderState["Ordered"] = 1] = "Ordered";
    OrderState[OrderState["InKitchenQueue"] = 2] = "InKitchenQueue";
    OrderState[OrderState["Cooking"] = 3] = "Cooking";
    OrderState[OrderState["Cooked"] = 4] = "Cooked";
    OrderState[OrderState["Served"] = 5] = "Served";
    OrderState[OrderState["Payed"] = 6] = "Payed";
})(OrderState || (OrderState = {}));
var TableOrder = (function () {
    function TableOrder(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TableOrder.prototype.init = function (data) {
        if (data) {
            this.orderId = data["orderId"];
            this.price = data["price"];
            this.servedAt = data["servedAt"] ? new Date(data["servedAt"].toString()) : undefined;
            this.dish = data["dish"];
            this.state = data["state"];
        }
    };
    TableOrder.fromJS = function (data) {
        var result = new TableOrder();
        result.init(data);
        return result;
    };
    TableOrder.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId;
        data["price"] = this.price;
        data["servedAt"] = this.servedAt ? this.servedAt.toISOString() : undefined;
        data["dish"] = this.dish;
        data["state"] = this.state;
        return data;
    };
    return TableOrder;
}());

var KitchenOrder = (function () {
    function KitchenOrder(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    KitchenOrder.prototype.init = function (data) {
        if (data) {
            this.orderId = data["orderId"];
            this.dishId = data["dishId"];
        }
    };
    KitchenOrder.fromJS = function (data) {
        var result = new KitchenOrder();
        result.init(data);
        return result;
    };
    KitchenOrder.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId;
        data["dishId"] = this.dishId;
        return data;
    };
    return KitchenOrder;
}());

var SwaggerException = (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(new SwaggerException(message, status, response, headers, result));
}
function blobToText(blob) {
    return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
        var reader = new FileReader();
        reader.onload = function () {
            observer.next(this.result);
            observer.complete();
        };
        reader.readAsText(blob);
    });
}
//# sourceMappingURL=Controllers.generated.js.map

/***/ }),

/***/ "../../../../../AppSrc/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../AppSrc/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../AppSrc/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../AppSrc/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../AppSrc/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map