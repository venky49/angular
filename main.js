(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addClass{\r\n\tcolor:red;\r\n}\r\n.ngx-pagination {\r\n    text-align: center;\r\n    margin-top: 27px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>when select the value as per call the function</h3>\n<select class=\"form-control\" [(ngModel)]=\"selectName\" (ngModelChange)=\"changeSelectFun()\">\n<option value=\"\">please select</option>\n<option [value]=\"selectName.name\" *ngFor=\"let selectName of names\">{{selectName.name}}</option>\n\n</select><br>\n<div *ngIf=\"showDetails\">\t\n<input type=\"text\" placeholder=\"search\" [(ngModel)]=\"searchText\" class=\"form-control\">\n<p style=\"text-align:center\">Length: {{ (similarData | employeesFilter:searchText )?.length }}<p>\n<table border=\"1\" class=\"text_center\" width=\"100%\">\n\t  <caption>Thease are the all employee details</caption>\n\t\t<tr>\n\t\t    <th>S.No</th>\n\t\t\t<th>id: </th>\n\t\t\t<th>name: </th>\t\t\t\n\t\t\t<th>userName: </th>\n\t\t\t<th>E-mail: </th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let data of similarData | employeesFilter:searchText | paginate: { itemsPerPage: 10, currentPage: p } index as i\" >\n\t\t    <td>{{i+1}}</td>\n\t\t\t<td>{{data.id}}\t</td>\n\t\t\t<td>{{data.name}}{{data.title}}</td>\n\t\t\t<td>{{data.username}}{{data.userId}}<img src=\"{{data.url}}.jpg\" style=\"width:100%;max-width:52px;\"></td>\n\t\t\t<td>{{data.email}}</td>\n\t\t</tr>\n\t</table>\n\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n\n\n\n<h3>Ag-Grid code here </h3>\n<ag-grid-angular \n    style=\"width: 100%; height: 400px;\" \n    class=\"ag-theme-dark\"\n    [rowData]=\"rowData\" \n\t[gridOptions]=\"gridOptions\"\n\t[defaultColDef]=\"defaultColDef\"\n    [icons]=\"icons\"\n    [columnDefs]=\"columnDefs\" \n\trowSelection=\"multiple\"\n    >\n</ag-grid-angular>\n<br>\n\n\n\n\nEnter text: <input type=\"text\" [(ngModel)]=\"arrayText\" placeholder=\"please enter text\">\n<button (click)=\"arrFilt()\">arrayFilter</button><br>\n\ntotalArray: {{totalArray}}<br>\nrevtotalArray: {{revtotalArray}}<br>\n\n<h3>Select the multiple values </h3>\n\n<ng-multiselect-dropdown\n  [placeholder]=\"'custom placeholder'\"\n  [data]=\"dropdownList\"\n  [(ngModel)]=\"selectedItems\"\n  [settings]=\"dropdownSettings\"\n  (onSelect)=\"onItemSelect($event)\"\n  (onSelectAll)=\"onSelectAll($event)\">\n</ng-multiselect-dropdown><br>\n\n<button (click)=\"toggleText(); countFunc()\" (mouseover)=\"countFunc()\" class=\"btn btn-success\">{{text}}</button><br><br>\n<p>mousehover on button count: {{count}}</p>\n<p *ngIf=\"toggle\">This is sample toggle text </p>\n\n<button (click)=\"conuntDecr()\" [disabled]=\"count == 0\" class=\"btn btn-success\">prev</button>\n<button (click)=\"countFunc()\" [disabled]=\"count == 10\" class=\"btn btn-info\">next</button><br><br>\n<p *ngIf=\"count == 0\" [ngClass]=\"{'addClass': count == 0}\">you count length is 0 so prev button will be disabled</p>\n\n<p *ngIf=\"count == 10\" [ngClass]=\"{'addClass': count == 10}\">you count length is 10 so next button will be disabled</p>\n\ninput Text:<input type=\"text\" name=\"testTest\" placeholder=\"enter number\" [(ngModel)]=\"testTest\">\n<button (click)=\"square()\" class=\"btn btn-success\" [disabled]=\"testTest ==''\">Square</button>\n\n<div>\ninput Value: {{testTest}} <br>\nsquareTest: {{squareTest}}<br>\nsquareTestLeft :{{squareTestLeft}}<br>\nsquareTestRight : {{squareTestRight}}<br>\nsquareSum : {{squareSum}}\n</div><br><br>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    //constructor code 
    function AppComponent(http) {
        this.http = http;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.showDetails = false;
        //toggle text when cluck the button
        this.toggle = false;
        //grid code here 
        this.gridOptions = {};
    }
    //page load code
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //select dropdown call the function
        this.names = [
            { name: 'india' },
            { name: 'usa' },
            { name: 'uk' }
        ];
        //ng-grid for the row data
        this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(function (data) {
            _this.rowData = data;
            //console.log("length",this.rowData.length);
        });
        //grid code here	  
        this.columnDefs = [
            { headerName: 'userId', field: 'userId' },
            { headerName: 'id', field: 'id', "pinned": "left" },
            { headerName: 'title', field: 'title' },
            { headerName: 'completed', field: 'completed' }
        ];
        //filter Array
        this.arrayText = '';
        //this.array=[1, 2, 2, 2, 3, 4];
        // console.log("before array:",this.array);
        //when click change the button text
        this.text = "button";
        this.count = 0;
        this.testTest = '';
        //multi select drop down default code	  
        this.dropdownList = [
            { item_id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Hyderabad' },
            { item_id: 4, item_text: 'Chennai' },
            { item_id: 5, item_text: 'New Delhi' }
        ];
        this.selectedItems = [
            { item_id: 3, item_text: 'Hyderabad' },
            { item_id: 4, item_text: 'Chennai' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 4,
            allowSearchFilter: true
        };
    }; //ngonin it close 
    //changeSelectFun
    AppComponent.prototype.changeSelectFun = function () {
        var _this = this;
        this.showDetails = true;
        switch (this.selectName) {
            case "india": {
                this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(function (data) {
                    _this.similarData = data;
                    //console.log("length",this.rowData.length);
                });
                break;
            }
            case "usa": {
                this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(function (data) {
                    _this.similarData = data;
                    //console.log("length",this.rowData.length);
                });
                break;
            }
            case "uk": {
                this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(function (data) {
                    _this.similarData = data;
                    //console.log("length",this.rowData.length);
                });
                break;
            }
        }
    };
    AppComponent.prototype.onItemSelect = function (item) {
        //console.log(item);
    };
    AppComponent.prototype.onSelectAll = function (items) {
        //console.log(items);
    };
    //toggle chsnge the button text
    AppComponent.prototype.toggleText = function () {
        this.toggle = !this.toggle;
        if (this.text === 'button') {
            this.text = 'clicked';
        }
        else {
            this.text = 'button';
        }
    };
    AppComponent.prototype.countFunc = function () {
        this.count++;
        //alert("please click the button");
        if (this.count == 10) {
            alert("your count length is completed:");
        }
    };
    AppComponent.prototype.conuntDecr = function () {
        this.count--;
    };
    AppComponent.prototype.square = function () {
        this.squareTest = this.testTest * this.testTest;
        //alert(this.squareTest.toString().length/2);
        this.squareTestLeft = this.squareTest.toString().substring(0, this.squareTest.toString().length / 2);
        //alert(this.squareTestLeft);
        this.squareTestRight = this.squareTest.toString().substring(this.squareTest.toString().length / 2);
        this.squareSum = parseInt(this.squareTestRight) + parseInt(this.squareTestLeft);
    };
    //Array Filter function
    AppComponent.prototype.arrFilt = function () {
        this.totalArray = this.array.reduce(function (sum, item) { return sum + item; }, 0);
        this.revtotalArray = this.totalArray.toString().split("").reverse().join("");
        console.log("ind", this.array.findIndex());
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_header_login_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-header/login-header.component */ "./src/app/login-header/login-header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-header/dashboard-header.component */ "./src/app/dashboard-header/dashboard-header.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _user_detalis_user_detalis_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-detalis/user-detalis.component */ "./src/app/user-detalis/user-detalis.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-details.service */ "./src/app/user-details.service.ts");
/* harmony import */ var _employees_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./employees-filter.pipe */ "./src/app/employees-filter.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_guard_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth-guard.guard */ "./src/app/auth-guard.guard.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_25__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_header_login_header_component__WEBPACK_IMPORTED_MODULE_6__["LoginHeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"],
                _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_10__["DashboardHeaderComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeDetailsComponent"],
                _user_detalis_user_detalis_component__WEBPACK_IMPORTED_MODULE_13__["UserDetalisComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _employees_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["EmployeesFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot(),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["NgMultiSelectDropDownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_25__["AgGridModule"].withComponents([_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '',
                        component: _login_header_login_header_component__WEBPACK_IMPORTED_MODULE_6__["LoginHeaderComponent"],
                        children: [
                            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
                            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                            { path: 'changepass', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"] }
                        ]
                    },
                    { path: '',
                        component: _dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_10__["DashboardHeaderComponent"],
                        children: [
                            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
                            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"] },
                            { path: 'employees', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeDetailsComponent"] },
                            { path: 'userDetail/:id', component: _user_detalis_user_detalis_component__WEBPACK_IMPORTED_MODULE_13__["UserDetalisComponent"] }
                        ]
                    },
                    //redirect default page here
                    { path: '**', redirectTo: 'register' }
                ])
            ],
            providers: [_user_details_service__WEBPACK_IMPORTED_MODULE_17__["UserDetailsService"], _auth_guard_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuardGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth-guard.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(router) {
        this.router = router;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('email')) {
            this.router.navigate(['/']);
            return true;
        }
        else {
        }
    };
    AuthGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text_center\">Change password</h3>\n  <div class=\"container\">\n        <div class=\"card card-container\">            \n            <img id=\"profile-img\" class=\"profile-img-card\" src=\"../assets/images/login.png\" />\n\t\t\t<form>\n               <label>e-mail* :</label> \n\t\t\t   <input type=\"text\" name=\"email\" [(ngModel)]=\"changeReqData.email\" class=\"form-control\" placeholder=\"email*\"> <br>\n\t\t\t     <p *ngIf=\"inputInfo\" class=\"red_clr\">Please provide old email</p>\n\t\t\t   <label>old pass* :</label> \n\t\t\t   <input type=\"text\" name=\"pass\" [(ngModel)]=\"changeReqData.pass\" class=\"form-control\" placeholder=\"old password*\"> <br>\n                 <p *ngIf=\"inputInfo\" class=\"red_clr\">Please enter old password</p>\n\t\t\t   <label> new password* :</label> \n\t\t\t   <input type=\"password\" name=\"newPass\" [(ngModel)]=\"changeReqData.newPass\" class=\"form-control\" placeholder=\"newPass *\"><br>\n\t\t\t   <button class=\"btn-signin form-control\" (click)=\"changePassWord()\">ChangePassword</button>\n\t\t\t</form>\n\t\t\t\n\t\t\t\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(router, toastr) {
        this.router = router;
        this.toastr = toastr;
        this.inputInfo = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changeReqData = new _models_login__WEBPACK_IMPORTED_MODULE_1__["changeReq"]();
    };
    //changePassWord
    ChangePasswordComponent.prototype.changePassWord = function () {
        if (localStorage.getItem('email') == this.changeReqData.email && localStorage.getItem('pass') == this.changeReqData.pass) {
            //alert("ok");
            //console.log("change", this.changeReqData.pass);
            this.toastr.success('Pasword Updated', 'Update form');
            localStorage.setItem("pass", this.changeReqData.newPass);
            this.inputInfo = false;
            this.changeReqData = new _models_login__WEBPACK_IMPORTED_MODULE_1__["changeReq"]();
            alert("change password successfully ----!");
            this.router.navigate(['/login']);
        }
        else {
            this.toastr.error('Please fill the fields', 'Update form');
            this.inputInfo = true;
            //	alert("sorry");
        }
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form{\r\n    background: #c1c1c1;\r\n    margin-top: 5%;\r\n\tmargin-bottom:7%;\r\n    width: 70%;\r\n}\r\n.contact-form .form-control{\r\n    border-radius:1rem;\r\n}\r\n.contact-image{\r\n    text-align: center;\r\n}\r\n.contact-image img{\r\n    border-radius: 6rem;\r\n    width: 11%;\r\n    margin-top: -3%;\r\n    -webkit-transform: rotate(29deg);\r\n            transform: rotate(29deg);\r\n}\r\n.contact-form form .row{\r\n    margin-bottom: -7%;\r\n}\r\n.contact-form h3{\r\n    text-align: center;\r\n    color: #0062cc;\r\n}\r\n.contact-form .btnContact {\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    background: #dc3545;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n.btnContactSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border: none;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact-form\">\n\t<div class=\"contact-image\">\n\t\t<img src=\"../assets/images/contact.png\" alt=\"rocket_contact\"/>\n\t</div>\n\t<div class=\"row\">\n\t   <h3>Drop Us a Message</h3> \n\t\t <div class=\"col-md-6\">\t\t\t   \n\t\t\t <form method=\"post\">\n\t\t\t\t\t\t \n\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" name=\"txtName\" class=\"form-control\" placeholder=\"Your Name *\" value=\"\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" name=\"txtEmail\" class=\"form-control\" placeholder=\"Your Email *\" value=\"\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" name=\"txtPhone\" class=\"form-control\" placeholder=\"Your Phone Number *\" value=\"\" />\n\t\t\t\t</div>                        \n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<textarea name=\"txtMsg\" class=\"form-control\" placeholder=\"Your Message *\" style=\"width: 100%; height: 150px;\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"submit\" name=\"btnSubmit\" class=\"btnContact\" value=\"Send Message\" />\n\t\t\t\t</div>\t\t\t\t\t                   \n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3311959118946!2d78.38991151425527!3d17.44385518804481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93de30f7fe9b%3A0x49ad74e1706c9f30!2sGreatcoder-+HR+%26+Recruiting+%7C+IT+Job+Training!5e0!3m2!1sen!2sin!4v1546946226054\"\n\t\twidth=\"100%\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-header/dashboard-header.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-header/dashboard-header.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-header/dashboard-header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-header/dashboard-header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--header bar part -->\n <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">Angular App</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink=\"/\">Home</a></li>\n      <li><a routerLink=\"/login\">login</a></li>\n\t  <li><a routerLink=\"/employees\">employees</a></li>\n\t  <li><a routerLink=\"/contact\">contact</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n\t   <li *ngIf=\"!logInHide\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> login</a></li>\n      <li *ngIf=\"logInHide\" (click)=\"logOut()\" style=\"cursor:pointer;\"><a><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n    </ul>\n  </div>\n</nav>\n<!--header part end -->\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<!--spinner code here -->\n<ngx-spinner\nbdColor = \"rgba(51, 51, 51, 0.8)\"\nsize = \"large\"\ncolor = \"#fff\"\ntype = \"ball-fussion\"\n></ngx-spinner>\n<!--spinner code here -->"

/***/ }),

/***/ "./src/app/dashboard-header/dashboard-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-header/dashboard-header.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function() { return DashboardHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardHeaderComponent = /** @class */ (function () {
    function DashboardHeaderComponent() {
    }
    DashboardHeaderComponent.prototype.ngOnInit = function () {
    };
    DashboardHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-header',
            template: __webpack_require__(/*! ./dashboard-header.component.html */ "./src/app/dashboard-header/dashboard-header.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-header.component.css */ "./src/app/dashboard-header/dashboard-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n\twidth:100%;\r\n}\r\ntable th{\r\n\ttext-align:center;\r\n}\r\ntable caption{\r\n\ttext-align:center;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\n\t<!--for loop users table -->\n\t<table border=\"1\" class=\"text_center\">\n\t  <caption>This is your below Details</caption>\n\t\t<tr>\n\t\t    <th>S.No</th>\n\t\t\t<th>Name: </th>\n\t\t\t<th>E-mail: </th>\n\t\t\t<th>Phone: </th>\n\t\t\t<th>Password: </th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let user of users index as i\">\n\t\t    <td>{{i+1}}</td>\n\t\t\t<td>{{user.name}}</td>\n\t\t\t<td>{{user.email}}</td>\n\t\t\t<td>{{user.phone}}</td>\n\t\t\t<td>{{user.pass}}</td>\n\t\t</tr>\n\t</table><br>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.users = [];
        this.users.push({
            name: localStorage.getItem('name'),
            phone: localStorage.getItem('phone'),
            email: localStorage.getItem('email'),
            pass: localStorage.getItem('pass')
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/employee-details/employee-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n\twidth:100%;\r\n}\r\ntable th{\r\n\ttext-align:center;\r\n}\r\ntable caption{\r\n\ttext-align:center;\r\n}\r\n.searchText{\r\n\tmax-width: 200px;\r\n    margin: 0 auto;\r\n}\r\n.active{\r\n\tbackground-color:purple;\r\n\tcolor:#fff;\r\n}\r\n.popUp_modal{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background: #cdcdcdc9;\r\n}\r\n.spanMod{\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    border-bottom: 1px solid;\r\n    margin-right: 16px;\r\n}\r\n.hidden{\r\n\tdisplay:block;\r\n}"

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text_center\">\n<div class=\"spinner\" [ngClass]=\"{ 'hidden': !loading }\">dkjbsdjkbvkjdb</div>\nToatal Employess: {{employess.length}}\n\n<p>Employess Details!</p>\nsearch:<input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"search\" class=\"form-control searchText\">\nAfter Filter length: {{ (employess | employeesFilter:searchText)?.length}}\n<div *ngIf=\"showDetails\">\t\n\t<!--for loop users table -->\n\t<table border=\"1\" class=\"text_center\">\n\t  <caption>Thease are the all employee details</caption>\n\t\t<tr>\n\t\t    <th>S.No</th>\n\t\t\t<th>id: </th>\n\t\t\t<th>name: </th>\t\t\t\n\t\t\t<th>userName: </th>\n\t\t\t<th>E-mail: </th>\n\t\t\t<th>VIEW</th>\n\t\t\t<th>delete</th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let employee of employess | employeesFilter:searchText | paginate: { itemsPerPage: 2, currentPage: p } index as i\" (click)=\"selectedRow(employee)\" [ngClass]=\"{'active': row == employee}\">\n\t\t    <td>{{i+1}}</td>\n\t\t\t<td>{{employee.id}}\t</td>\n\t\t\t<td>{{employee.name}}</td>\n\t\t\t<td>{{employee.username}}</td>\n\t\t\t<td>{{employee.email}}</td>\n\t\t\t<td><a [routerLink]=\"['/userDetail',employee.id]\">VIEW</a></td>\n\t\t\t<td><button (click)=\"delEmployee(employee)\">Delete</button></td>\n\t\t</tr>\n\t</table><br>\n\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\n\t<!-- <div> -->\n\t\t<!-- name: {{row.name}}<br> -->\n\t\t<!-- username: {{row.username}}<br> -->\n\t\t<!-- email : {{row.email}}<br> -->\n\t\t<!-- <button (click)=\"preRow()\" class=\"btn btn-success\">prev</button> -->\n\t\t   <!-- rowindex:{{rowindex}} -->\n\t\t<!-- <button (click)=\"nextRow()\" class=\"btn btn-info\">next</button> -->\n\t\n\t<!-- </div> -->\n\t\n\t\n\t  <!-- Modal -->\n  <div *ngIf=\"showModal\"  class=\"popUp_modal\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"showModalClo()\">&times;</button>\n          <h4 class=\"modal-title\">Employee Detail</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p><span class=\"spanMod\">name:</span>{{row.name}}</p>\n\t\t  <p><span class=\"spanMod\">username:</span> {{row.username}}</p>\n\t\t  <p><span class=\"spanMod\">email :</span> {{row.email}}</p>\n\t\t  <p><span class=\"spanMod\">rowindex:</span>{{rowindex}}</p>\n        </div>\n        <div class=\"modal-footer\">\n\t\t  <div style=\"text-align:center;\">\n\t\t     <button (click)=\"preRow()\" class=\"btn btn-success\">prev</button>\n\t\t     <button (click)=\"nextRow()\" class=\"btn btn-info\">next</button>\n\t\t  </div>\n        </div>\n      </div>      \n    </div>\n  </div>\n  \n\t\n\t\n</div>\n<div>"

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-details.service */ "./src/app/user-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(userService, router, spinner) {
        this.userService = userService;
        this.router = router;
        this.spinner = spinner;
        this.showModal = false;
        this.employess = [];
        this.showDetails = false;
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.get_employess();
        //selected row
        this.row = [];
    };
    //get all employees
    EmployeeDetailsComponent.prototype.get_employess = function () {
        //alert("hi");
        /** spinner starts on init */
        //this.spinner.show();
        var _this = this;
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 5000);
        this.showDetails = true;
        this.userService.get_employeesInfo().subscribe(function (resp) {
            _this.employess = resp;
        });
        this.loading = false;
    };
    //delete employee-details
    EmployeeDetailsComponent.prototype.delEmployee = function (employee) {
        this.emplyIndex = this.employess.indexOf(employee);
        if (confirm(this.emplyIndex)) {
            //alert(this.emplyIndex);
            this.employess.splice(this.emplyIndex, 1);
        }
    };
    //selected row when click the particukar row
    EmployeeDetailsComponent.prototype.selectedRow = function (employee) {
        this.showModal = true;
        this.row = employee;
        this.rowindex = this.employess.indexOf(employee);
    };
    //preRow
    EmployeeDetailsComponent.prototype.preRow = function () {
        //console.log("this.rowindex first", this.rowindex);
        this.rowindex = (this.rowindex) - 1;
        this.row = this.employess[this.rowindex];
        //console.log("this.rowindex after", this.rowindex);
    };
    ;
    //nextRow
    EmployeeDetailsComponent.prototype.nextRow = function () {
        this.rowindex = (this.rowindex) + 1;
        this.row = this.employess[this.rowindex];
    };
    //show modal close function
    EmployeeDetailsComponent.prototype.showModalClo = function () {
        this.showModal = false;
    };
    EmployeeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employee-details/employee-details.component.css")]
        }),
        __metadata("design:paramtypes", [_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/employees-filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/employees-filter.pipe.ts ***!
  \******************************************/
/*! exports provided: EmployeesFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesFilterPipe", function() { return EmployeesFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeesFilterPipe = /** @class */ (function () {
    function EmployeesFilterPipe() {
    }
    EmployeesFilterPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLocaleLowerCase();
            return value.filter(function (username) {
                return username.name.toLocaleLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    EmployeesFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'employeesFilter'
        })
    ], EmployeesFilterPipe);
    return EmployeesFilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa{\r\n\tfont-size:31px;\r\n}\r\nfooter{\r\n\t    position: absolute;\r\n    display: block;\r\n    left: 0;\r\n    right: 0;\r\n    background: #000;\r\n    padding: 12px 0;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer>\n   <!-- Footer Elements -->\n    <div class=\"container\">\n\n      <!-- Social buttons -->\n      <ul class=\"list-unstyled list-inline text-center\">\n        <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-fb\">\n            <i class=\"fa fa-facebook-square\"> </i>\n          </a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-tw\">\n            <i class=\"fa fa-twitter\"> </i>\n          </a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-gplus\">\n            <i class=\"fa fa-google-plus\"> </i>\n          </a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a class=\"btn-floating btn-li\">\n            <i class=\"fa fa-linkedin-square\"> </i>\n          </a>\n        </li>\n        \n      </ul>\n      <!-- Social buttons -->\n\n    </div>\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center py-3\">© 2018 Copyright: Angular\n    <a [routerLink]=\"['/']\"> HOME </a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login-header/login-header.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login-header/login-header.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-header/login-header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/login-header/login-header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login-header/login-header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-header/login-header.component.ts ***!
  \********************************************************/
/*! exports provided: LoginHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHeaderComponent", function() { return LoginHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginHeaderComponent = /** @class */ (function () {
    function LoginHeaderComponent() {
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
    };
    LoginHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-header',
            template: __webpack_require__(/*! ./login-header.component.html */ "./src/app/login-header/login-header.component.html"),
            styles: [__webpack_require__(/*! ./login-header.component.css */ "./src/app/login-header/login-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginHeaderComponent);
    return LoginHeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text_center\">Login Details</h3>\n  <div class=\"container\">\n        <div class=\"card card-container\">            \n            <img id=\"profile-img\" class=\"profile-img-card\" src=\"../assets/images/login.png\" />\n\t\t\t<form>\n               <label>e-mail* :</label> \n\t\t\t   <input type=\"text\" name=\"logEmail\" [(ngModel)]=\"loginReqData.logEmail\" class=\"form-control\" placeholder=\"email*\"> <br>\t\n                 <p *ngIf=\"DetailsInfo\" class=\"red_clr\">Please give valid email address</p>\t\n                  <p *ngIf=\"changePassInfo\" class=\"red_clr\">Please provide valid email address</p>\n               <label>password* :</label> \n\t\t\t   <input type=\"password\" name=\"logPass\" [(ngModel)]=\"loginReqData.logPass\" class=\"form-control\" placeholder=\"Password*\">\n\t\t\t   <p *ngIf=\"DetailsInfo\" class=\"red_clr\">Please give valid pass address</p><br>\t\n\t\t\t   <button class=\"btn-signin form-control\" (click)=\"login()\">Login</button><br>\n\t\t\t</form>\n\t\t\t<p class=\"btn-signin form-control\" (click)=\"changePass()\">ChangePassword</p>\n\t\t\t\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, toastr) {
        this.router = router;
        this.toastr = toastr;
        this.DetailsInfo = false;
        this.changePassInfo = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginReqData = new _models_login__WEBPACK_IMPORTED_MODULE_2__["loginReq"]();
    };
    //Login function
    LoginComponent.prototype.login = function () {
        if (this.loginReqData.logEmail == localStorage.getItem('email') && this.loginReqData.logPass == localStorage.getItem('pass')) {
            this.toastr.success('Login Success', 'Login form');
            this.DetailsInfo = false;
            this.loginReqData = new _models_login__WEBPACK_IMPORTED_MODULE_2__["loginReq"]();
            this.router.navigate(['/dashboard']);
        }
        else {
            this.toastr.error('Please fill the correct fields', 'Login form');
            this.DetailsInfo = true;
        }
    };
    //for change the password
    LoginComponent.prototype.changePass = function () {
        if (this.loginReqData.logEmail == localStorage.getItem('email')) {
            this.router.navigate(['/changepass']);
        }
        else {
            //alert("sorry");
            //this.changePassInfo = true;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: loginReq, regReq, changeReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginReq", function() { return loginReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regReq", function() { return regReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeReq", function() { return changeReq; });
//login class
var loginReq = /** @class */ (function () {
    function loginReq() {
    }
    return loginReq;
}());

//register class
var regReq = /** @class */ (function () {
    function regReq() {
    }
    return regReq;
}());

//changeReq information
var changeReq = /** @class */ (function () {
    function changeReq() {
    }
    return changeReq;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text_center\">Registre Details</h3>\n  <div class=\"container\">\n        <div class=\"card card-container\">            \n            <img id=\"profile-img\" class=\"profile-img-card\" src=\"../assets/images/login.png\" />\n\t\t\t<form [formGroup]=\"registerform\">\n            <label>UserName* : </label>\n                <input type=\"text\" formControlName=\"name\" [(ngModel)]=\"regReqData.name\" class=\"form-control\" placeholder=\"User Name*\">\n\t\t\t\t<div *ngIf=\"submitted && registerform.controls.name.errors\">\n\t\t\t\t\t<div *ngIf=\"registerform.controls.name.errors.required\"> required</div>\n\t\t\t\t </div>\n                <label>password* :</label> \n\t\t\t\t<input type=\"password\" formControlName=\"pass\" [(ngModel)]=\"regReqData.pass\" class=\"form-control\" placeholder=\"Password*\">\n\t\t\t\t<div *ngIf=\"submitted && registerform.controls.pass.errors\">\n\t\t\t\t  <div *ngIf=\"registerform.controls.pass.errors.required\">\n\t\t\t\t   <div *ngIf=\"registerform.controls.pass.errors.minLength\">Minimum password length is 6</div>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n\t\t\t\t<label>phone* : </label>\n\t\t\t\t<input type=\"text\" formControlName=\"phone\" [(ngModel)]=\"regReqData.phone\" class=\"form-control\" placeholder=\"phone*\">\n\t\t\t\t<div *ngIf=\"submitted && registerform.controls.phone.errors\">\n\t\t\t\t   <div *ngIf=\"registerform.controls.phone.errors.required\">required</div>\n\t\t\t\t</div>\n\t\t\t\t<label>e-mail* :</label> \n\t\t\t\t<input type=\"text\" formControlName=\"email\" [(ngModel)]=\"regReqData.email\" class=\"form-control\" placeholder=\"email*\"> <br>\n\t\t\t\t<div *ngIf=\"submitted && registerform.controls.email.errors\">\n\t\t\t\t\t<div *ngIf=\"registerform.controls.email.errors.required\"> required</div>\n\t\t\t\t\t<div *ngIf=\"registerform.controls.email.errors.email\"> must be a valid email address</div>\n\t\t\t\t </div>\n\t\t\t\t<button class=\"btn-signin\" (click)=\"register()\">Register</button>\n\t\t\t</form>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, formBuilder, toastr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.regReqData = new _models_login__WEBPACK_IMPORTED_MODULE_1__["regReq"]();
        this.registerform = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RegisterComponent.prototype.register = function () {
        this.submitted = true;
        if (this.registerform.invalid) {
            this.toastr.error('Please fill the all fields', 'Register form');
            return;
        }
        else {
            localStorage.setItem("name", this.regReqData.name);
            localStorage.setItem("email", this.regReqData.email);
            localStorage.setItem("pass", this.regReqData.pass);
            localStorage.setItem("phone", this.regReqData.phone);
            //for success message
            this.toastr.success('Register Success', 'Register Form');
            //alert("success Full login ---");
            //navigate to login page
            this.router.navigate(['/login']);
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-details.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user-details.service.ts ***!
  \*****************************************/
/*! exports provided: UserDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsService", function() { return UserDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDetailsService = /** @class */ (function () {
    function UserDetailsService(httpClient) {
        this.httpClient = httpClient;
    }
    //get all employess
    UserDetailsService.prototype.get_employeesInfo = function () {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    };
    //for single employee
    UserDetailsService.prototype.get_employee = function (id) {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + id);
    };
    UserDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserDetailsService);
    return UserDetailsService;
}());



/***/ }),

/***/ "./src/app/user-detalis/user-detalis.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-detalis/user-detalis.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-detalis/user-detalis.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-detalis/user-detalis.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "id: {{userDetail.id}}\n<ul>\n<li>id: {{userDetail.id}}</li>\n<li>name: {{userDetail.name}}</li>\n<li>user Name: {{userDetail.username}}</li>\n<li>email: {{userDetail.email}}</li>\n<li>phone: {{userDetail.phone}}</li>\n<li>website: {{userDetail.website}}</li>\n<li>Address:\n<address>\n  You can contact us at:<br>\n  {{userDetail.address.street}},<br>\n  {{userDetail.address.suite}},<br>\n  {{userDetail.address.city}}.<br>\n  lat:{{userDetail.address.geo.lat}}, Lang: {{userDetail.address.geo.lng}}.\n</address>\n\n</li>\n</ul>"

/***/ }),

/***/ "./src/app/user-detalis/user-detalis.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-detalis/user-detalis.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetalisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetalisComponent", function() { return UserDetalisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-details.service */ "./src/app/user-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetalisComponent = /** @class */ (function () {
    function UserDetalisComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserDetalisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.employeeDetails();
    };
    UserDetalisComponent.prototype.employeeDetails = function () {
        var _this = this;
        this.userService.get_employee(this.id).subscribe(function (res) {
            _this.userDetail = res;
        });
    };
    UserDetalisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detalis',
            template: __webpack_require__(/*! ./user-detalis.component.html */ "./src/app/user-detalis/user-detalis.component.html"),
            styles: [__webpack_require__(/*! ./user-detalis.component.css */ "./src/app/user-detalis/user-detalis.component.css")]
        }),
        __metadata("design:paramtypes", [_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserDetalisComponent);
    return UserDetalisComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map