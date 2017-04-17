webpackJsonp([1,5],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard2_dashboard2_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard3_dashboard3_component__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    {
        path: "home", component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: "dashboard2", component: __WEBPACK_IMPORTED_MODULE_3__dashboard2_dashboard2_component__["a" /* Dashboard2Component */]
    },
    {
        path: "dashboard3", component: __WEBPACK_IMPORTED_MODULE_4__dashboard3_dashboard3_component__["a" /* Dashboard3Component */]
    },
    {
        path: "", component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_3__dashboard2_dashboard2_component__["a" /* Dashboard2Component */],
    __WEBPACK_IMPORTED_MODULE_4__dashboard3_dashboard3_component__["a" /* Dashboard3Component */]
];
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/app.routes.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(514);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/main.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(690),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/app.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__side_bar_menu_side_bar_menu_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__side_bar_menu_side_bar_menu_component__["a" /* SideBarMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routingComponents */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["b" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/app.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard2Component = (function () {
    function Dashboard2Component() {
    }
    Dashboard2Component.prototype.ngOnInit = function () {
    };
    Dashboard2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard2',
            template: __webpack_require__(691),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], Dashboard2Component);
    return Dashboard2Component;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/dashboard2.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard3Component = (function () {
    function Dashboard3Component() {
    }
    Dashboard3Component.prototype.ngOnInit = function () {
    };
    Dashboard3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard3',
            template: __webpack_require__(692),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], Dashboard3Component);
    return Dashboard3Component;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/dashboard3.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(693),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/footer.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(694),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/header.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__(520);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(homeSvc) {
        this.homeSvc = homeSvc;
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.getTotalUser();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getTotalUser = function () {
        var _this = this;
        this.homeSvc.getTotalUser()
            .subscribe(function (res) {
            console.log(res.totalUser);
            _this.totalUser = res.totalUser;
        });
    };
    HomeComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    HomeComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(695),
            styles: [__webpack_require__(688)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/home.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getTotalUser = function () {
        return this.http.get("api/home.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return error.json(); });
    };
    HomeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HomeService);
    return HomeService;
    var _a;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/home.service.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_bar_menu_service__ = __webpack_require__(522);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarMenuComponent = (function () {
    function SideBarMenuComponent(sideMenuSvc) {
        this.sideMenuSvc = sideMenuSvc;
        //  showStyle: false;
        //class add/remove on click function
        this.hightlightStatus = [];
        this.hightlightStatus1 = [];
        this.getMenu();
    }
    SideBarMenuComponent.prototype.getMenu = function () {
        var _this = this;
        this.sideMenuSvc.getMenu()
            .subscribe(function (res) {
            console.log(res.menusLive);
            _this.menus = res.menus;
            _this.menusLive = res.menusLive;
        });
    };
    SideBarMenuComponent.prototype.ngOnInit = function () {
    };
    SideBarMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-bar-menu',
            template: __webpack_require__(696),
            styles: [__webpack_require__(689)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__side_bar_menu_service__["a" /* SideBarMenuService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__side_bar_menu_service__["a" /* SideBarMenuService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__side_bar_menu_service__["a" /* SideBarMenuService */]) === 'function' && _a) || Object])
    ], SideBarMenuComponent);
    return SideBarMenuComponent;
    var _a;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/side-bar-menu.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideBarMenuService = (function () {
    function SideBarMenuService(http) {
        this.http = http;
    }
    SideBarMenuService.prototype.getMenu = function () {
        return this.http.get("api/home.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return error.json(); });
    };
    SideBarMenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SideBarMenuService);
    return SideBarMenuService;
    var _a;
}());
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/side-bar-menu.service.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/kirti/study/gentelella-master/angular-demo/gentelella-app/src/environment.js.map

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\r\n  <div class=\"main_container\">\r\n      <div class=\"col-md-3 left_col menu_fixed\">\r\n        <app-side-bar-menu></app-side-bar-menu>\r\n      </div>\r\n       <div class=\"top_nav\">\r\n        <app-header></app-header>\r\n       </div>\r\n       <div class=\"right_col\" role=\"main\">\r\n       <router-outlet></router-outlet>\r\n       </div>\r\n       <app-footer></app-footer>\r\n </div>\r\n</div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard2 works!\n</p>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard3 works!\n</p>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<!-- footer content -->\n        <footer>\n          <div class=\"pull-right\">\n            Gentelella - Bootstrap Admin Template by <a href=\"https://colorlib.com\">Colorlib</a>\n          </div>\n          <div class=\"clearfix\"></div>\n        </footer>\n        <!-- /footer content -->"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<!-- top navigation -->\n       \n          <div class=\"nav_menu\">\n            <nav>\n              <div class=\"nav toggle\">\n                <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\n              </div>\n\n              <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"\">\n                  <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <img src=\"../assets/images/img.jpg\" alt=\"\">John Doe\n                    <span class=\" fa fa-angle-down\"></span>\n                  </a>\n                  <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\n                    <li><a href=\"javascript:;\"> Profile</a></li>\n                    <li>\n                      <a href=\"javascript:;\">\n                        <span class=\"badge bg-red pull-right\">50%</span>\n                        <span>Settings</span>\n                      </a>\n                    </li>\n                    <li><a href=\"javascript:;\">Help</a></li>\n                    <li><a href=\"login.html\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\n                  </ul>\n                </li>\n\n                <li role=\"presentation\" class=\"dropdown\">\n                  <a href=\"javascript:;\" class=\"dropdown-toggle info-number\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"fa fa-envelope-o\"></i>\n                    <span class=\"badge bg-green\">6</span>\n                  </a>\n                  <ul id=\"menu1\" class=\"dropdown-menu list-unstyled msg_list\" role=\"menu\">\n                    <li>\n                      <a>\n                        <span class=\"image\"><img src=\"../assets/images/img.jpg\" alt=\"Profile Image\" /></span>\n                        <span>\n                          <span>John Smith</span>\n                          <span class=\"time\">3 mins ago</span>\n                        </span>\n                        <span class=\"message\">\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\n                        </span>\n                      </a>\n                    </li>\n                    <li>\n                      <a>\n                        <span class=\"image\"><img src=\"../assets/images/img.jpg\" alt=\"Profile Image\" /></span>\n                        <span>\n                          <span>John Smith</span>\n                          <span class=\"time\">3 mins ago</span>\n                        </span>\n                        <span class=\"message\">\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\n                        </span>\n                      </a>\n                    </li>\n                    <li>\n                      <a>\n                        <span class=\"image\"><img src=\"../assets/images/img.jpg\" alt=\"Profile Image\" /></span>\n                        <span>\n                          <span>John Smith</span>\n                          <span class=\"time\">3 mins ago</span>\n                        </span>\n                        <span class=\"message\">\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\n                        </span>\n                      </a>\n                    </li>\n                    <li>\n                      <a>\n                        <span class=\"image\"><img src=\"../assets/images/img.jpg\" alt=\"Profile Image\" /></span>\n                        <span>\n                          <span>John Smith</span>\n                          <span class=\"time\">3 mins ago</span>\n                        </span>\n                        <span class=\"message\">\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\n                        </span>\n                      </a>\n                    </li>\n                    <li>\n                      <div class=\"text-center\">\n                        <a>\n                          <strong>See All Alerts</strong>\n                          <i class=\"fa fa-angle-right\"></i>\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </nav>\n          </div>\n        \n        <!-- /top navigation -->"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "\n          <!-- top tiles -->\n          <div class=\"row tile_count\">\n            <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\" *ngFor=\"let tuser of totalUser\">\n              <span class=\"count_top\"><i class=\"fa {{tuser.faUser}}\"></i> {{tuser.name}}</span>\n              <div class=\"count\">{{tuser.count}}</div>\n              <span class=\"count_bottom\"><i class=\"{{tuser.upDown}}\">{{tuser.percent}} </i> From last Week</span>\n            </div>            \n          </div>\n          <!-- /top tiles -->\n\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"dashboard_graph\">\n\n                <div class=\"row x_title\">\n                  <div class=\"col-md-6\">\n                    <h3>Network Activities <small>Graph title sub-title</small></h3>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div id=\"reportrange\" class=\"pull-right\" style=\"background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc\">\n                      <i class=\"glyphicon glyphicon-calendar fa fa-calendar\"></i>\n                      <span>December 30, 2014 - January 28, 2015</span> <b class=\"caret\"></b>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                  <!--<div id=\"chart_plot_01\" class=\"demo-placeholder\"></div>-->\n                  <div style=\"display: inline-block;\">\n <canvas baseChart width=\"1200\" height=\"300\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n    <button (click)=\"randomize()\">Update</button>\n                </div>\n                <div class=\"col-md-3 col-sm-3 col-xs-12 bg-white\">\n                  <div class=\"x_title\">\n                    <h2>Top Campaign Performance</h2>\n                    <div class=\"clearfix\"></div>\n                  </div>\n\n                  <div class=\"col-md-12 col-sm-12 col-xs-6\">\n                    <div>\n                      <p>Facebook Campaign</p>\n                      <div class=\"\">\n                        <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"80\"></div>\n                        </div>\n                      </div>\n                    </div>\n                    <div>\n                      <p>Twitter Campaign</p>\n                      <div class=\"\">\n                        <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"60\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 col-xs-6\">\n                    <div>\n                      <p>Conventional Media</p>\n                      <div class=\"\">\n                        <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"40\"></div>\n                        </div>\n                      </div>\n                    </div>\n                    <div>\n                      <p>Bill boards</p>\n                      <div class=\"\">\n                        <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"50\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n\n          </div>\n          <br />\n\n          <div class=\"row\">\n\n\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"x_panel tile fixed_height_320\">\n                <div class=\"x_title\">\n                  <h2>App Versions</h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <h4>App Usage across versions</h4>\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.2</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 66%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>123k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.3</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>53k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.4</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 25%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>23k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.5</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 5%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>3k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.6</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 2%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>1k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"x_panel tile fixed_height_320 overflow_hidden\">\n                <div class=\"x_title\">\n                  <h2>Device Usage</h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <table class=\"\" style=\"width:100%\">\n                    <tr>\n                      <th style=\"width:37%;\">\n                        <p>Top 5</p>\n                      </th>\n                      <th>\n                        <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n                          <p class=\"\">Device</p>\n                        </div>\n                        <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5\">\n                          <p class=\"\">Progress</p>\n                        </div>\n                      </th>\n                    </tr>\n                    <tr>\n                      <td>\n                        <canvas class=\"canvasDoughnut\" height=\"140\" width=\"140\" style=\"margin: 15px 10px 10px 0\"></canvas>\n                      </td>\n                      <td>\n                        <table class=\"tile_info\">\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square blue\"></i>IOS </p>\n                            </td>\n                            <td>30%</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square green\"></i>Android </p>\n                            </td>\n                            <td>10%</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square purple\"></i>Blackberry </p>\n                            </td>\n                            <td>20%</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square aero\"></i>Symbian </p>\n                            </td>\n                            <td>15%</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square red\"></i>Others </p>\n                            </td>\n                            <td>30%</td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"x_panel tile fixed_height_320\">\n                <div class=\"x_title\">\n                  <h2>Quick Settings</h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <div class=\"dashboard-widget-content\">\n                    <ul class=\"quick-list\">\n                      <li><i class=\"fa fa-calendar-o\"></i><a href=\"#\">Settings</a>\n                      </li>\n                      <li><i class=\"fa fa-bars\"></i><a href=\"#\">Subscription</a>\n                      </li>\n                      <li><i class=\"fa fa-bar-chart\"></i><a href=\"#\">Auto Renewal</a> </li>\n                      <li><i class=\"fa fa-line-chart\"></i><a href=\"#\">Achievements</a>\n                      </li>\n                      <li><i class=\"fa fa-bar-chart\"></i><a href=\"#\">Auto Renewal</a> </li>\n                      <li><i class=\"fa fa-line-chart\"></i><a href=\"#\">Achievements</a>\n                      </li>\n                      <li><i class=\"fa fa-area-chart\"></i><a href=\"#\">Logout</a>\n                      </li>\n                    </ul>\n\n                    <div class=\"sidebar-widget\">\n                        <h4>Profile Completion</h4>\n                        <canvas width=\"150\" height=\"80\" id=\"chart_gauge_01\" class=\"\" style=\"width: 160px; height: 100px;\"></canvas>\n                        <div class=\"goal-wrapper\">\n                          <span id=\"gauge-text\" class=\"gauge-value pull-left\">0</span>\n                          <span class=\"gauge-value pull-left\">%</span>\n                          <span id=\"goal-text\" class=\"goal-value pull-right\">100%</span>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"x_panel\">\n                <div class=\"x_title\">\n                  <h2>Recent Activities <small>Sessions</small></h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <div class=\"dashboard-widget-content\">\n\n                    <ul class=\"list-unstyled timeline widget\">\n                      <li>\n                        <div class=\"block\">\n                          <div class=\"block_content\">\n                            <h2 class=\"title\">\n                                              <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                                          </h2>\n                            <div class=\"byline\">\n                              <span>13 hours ago</span> by <a>Jane Smith</a>\n                            </div>\n                            <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                            </p>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"block\">\n                          <div class=\"block_content\">\n                            <h2 class=\"title\">\n                                              <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                                          </h2>\n                            <div class=\"byline\">\n                              <span>13 hours ago</span> by <a>Jane Smith</a>\n                            </div>\n                            <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                            </p>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"block\">\n                          <div class=\"block_content\">\n                            <h2 class=\"title\">\n                                              <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                                          </h2>\n                            <div class=\"byline\">\n                              <span>13 hours ago</span> by <a>Jane Smith</a>\n                            </div>\n                            <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                            </p>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"block\">\n                          <div class=\"block_content\">\n                            <h2 class=\"title\">\n                                              <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                                          </h2>\n                            <div class=\"byline\">\n                              <span>13 hours ago</span> by <a>Jane Smith</a>\n                            </div>\n                            <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                            </p>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-8 col-sm-8 col-xs-12\">\n\n\n\n              <div class=\"row\">\n\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"x_panel\">\n                    <div class=\"x_title\">\n                      <h2>Visitors location <small>geo-presentation</small></h2>\n                      <ul class=\"nav navbar-right panel_toolbox\">\n                        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                        </li>\n                        <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                          <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Settings 1</a>\n                            </li>\n                            <li><a href=\"#\">Settings 2</a>\n                            </li>\n                          </ul>\n                        </li>\n                        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                        </li>\n                      </ul>\n                      <div class=\"clearfix\"></div>\n                    </div>\n                    <div class=\"x_content\">\n                      <div class=\"dashboard-widget-content\">\n                        <div class=\"col-md-4 hidden-small\">\n                          <h2 class=\"line_30\">125.7k Views from 60 countries</h2>\n\n                          <table class=\"countries_list\">\n                            <tbody>\n                              <tr>\n                                <td>United States</td>\n                                <td class=\"fs15 fw700 text-right\">33%</td>\n                              </tr>\n                              <tr>\n                                <td>France</td>\n                                <td class=\"fs15 fw700 text-right\">27%</td>\n                              </tr>\n                              <tr>\n                                <td>Germany</td>\n                                <td class=\"fs15 fw700 text-right\">16%</td>\n                              </tr>\n                              <tr>\n                                <td>Spain</td>\n                                <td class=\"fs15 fw700 text-right\">11%</td>\n                              </tr>\n                              <tr>\n                                <td>Britain</td>\n                                <td class=\"fs15 fw700 text-right\">10%</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        <div id=\"world-map-gdp\" class=\"col-md-8 col-sm-12 col-xs-12\" style=\"height:230px;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"row\">\n\n\n                <!-- Start to do list -->\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"x_panel\">\n                    <div class=\"x_title\">\n                      <h2>To Do List <small>Sample tasks</small></h2>\n                      <ul class=\"nav navbar-right panel_toolbox\">\n                        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                        </li>\n                        <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                          <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Settings 1</a>\n                            </li>\n                            <li><a href=\"#\">Settings 2</a>\n                            </li>\n                          </ul>\n                        </li>\n                        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                        </li>\n                      </ul>\n                      <div class=\"clearfix\"></div>\n                    </div>\n                    <div class=\"x_content\">\n\n                      <div class=\"\">\n                        <ul class=\"to_do\">\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Schedule meeting with new client </p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Create email address for new intern</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Have IT fix the network printer</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Copy backups to offsite location</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Food truck fixie locavors mcsweeney</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Food truck fixie locavors mcsweeney</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Create email address for new intern</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Have IT fix the network printer</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Copy backups to offsite location</p>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- End to do list -->\n                \n                <!-- start of weather widget -->\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"x_panel\">\n                    <div class=\"x_title\">\n                      <h2>Daily active users <small>Sessions</small></h2>\n                      <ul class=\"nav navbar-right panel_toolbox\">\n                        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                        </li>\n                        <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                          <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Settings 1</a>\n                            </li>\n                            <li><a href=\"#\">Settings 2</a>\n                            </li>\n                          </ul>\n                        </li>\n                        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                        </li>\n                      </ul>\n                      <div class=\"clearfix\"></div>\n                    </div>\n                    <div class=\"x_content\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <div class=\"temperature\"><b>Monday</b>, 07:30 AM\n                            <span>F</span>\n                            <span><b>C</b></span>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                          <div class=\"weather-icon\">\n                            <canvas height=\"84\" width=\"84\" id=\"partly-cloudy-day\"></canvas>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-8\">\n                          <div class=\"weather-text\">\n                            <h2>Texas <br><i>Partly Cloudy Day</i></h2>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-12\">\n                        <div class=\"weather-text pull-right\">\n                          <h3 class=\"degrees\">23</h3>\n                        </div>\n                      </div>\n\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"row weather-days\">\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Mon</h2>\n                            <h3 class=\"degrees\">25</h3>\n                            <canvas id=\"clear-day\" width=\"32\" height=\"32\"></canvas>\n                            <h5>15 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Tue</h2>\n                            <h3 class=\"degrees\">25</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"rain\"></canvas>\n                            <h5>12 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Wed</h2>\n                            <h3 class=\"degrees\">27</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"snow\"></canvas>\n                            <h5>14 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Thu</h2>\n                            <h3 class=\"degrees\">28</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"sleet\"></canvas>\n                            <h5>15 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Fri</h2>\n                            <h3 class=\"degrees\">28</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"wind\"></canvas>\n                            <h5>11 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Sat</h2>\n                            <h3 class=\"degrees\">26</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"cloudy\"></canvas>\n                            <h5>10 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n                <!-- end of weather widget -->\n              </div>\n            </div>\n          </div>\n        "

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "\n          <div class=\"left_col scroll-view\">\n            <div class=\"navbar nav_title\" style=\"border: 0;\">\n              <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>Gentelella Alela!</span></a>\n            </div>\n\n            <div class=\"clearfix\"></div>\n\n            <!-- menu profile quick info -->\n            <div class=\"profile clearfix\">\n              <div class=\"profile_pic\">\n                <img src=\"../assets/images/img.jpg\" alt=\"...\" class=\"img-circle profile_img\">\n              </div>\n              <div class=\"profile_info\">\n                <span>Welcome,</span>\n                <h2>John Doe</h2>\n              </div>\n            </div>\n            <!-- /menu profile quick info -->\n\n            <br />\n\n            <!-- sidebar menu -->\n            <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\n              <div class=\"menu_section\">\n                <h3>General</h3>\n                <ul class=\"nav side-menu\">\n                  <li [attr.data-selected]=\"false\" \n       (click)=\"hightlightStatus[i]=!hightlightStatus[i]\" \n       [class.active]=\"hightlightStatus[i]\"  *ngFor=\"let menu of menus, let i = index\">\n                        <a><i class=\"fa {{menu.parentIcon}}\"></i>{{menu.name}} <span class=\"{{menu.dropdownArrow}}\"></span></a>\n                        <ul class=\"nav child_menu\">\n                            <li *ngFor=\"let mc of menu.cName\"><a routerLink=\"{{mc.linkName | lowercase}}\">{{mc.mName}}</a></li>\n                        </ul>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"menu_section\">\n                <h3>Live On</h3>\n                <ul class=\"nav side-menu\">\n                  <li [attr.data-selected]=\"false\" \n       (click)=\"hightlightStatus1[i]=!hightlightStatus1[i]\" \n       [class.active]=\"hightlightStatus1[i]\" *ngFor=\"let menuL of menusLive, let i = index\">\n                        <a><i class=\"fa {{menuL.parentIcon}}\"></i>{{menuL.name}} <span class=\"fa {{menuL.dropdownArrow}}\"></span></a>\n                        <ul class=\"nav child_menu\">\n                            <li *ngFor=\"let mcl of menuL.cName\"><a>{{mcl.mName}}</a></li>\n                        </ul>\n                  </li>\n                </ul>\n              </div>\n\n            </div>\n            <!-- /sidebar menu -->\n\n            <!-- /menu footer buttons -->\n            <div class=\"sidebar-footer hidden-small\">\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Settings\">\n                <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n              </a>\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"FullScreen\">\n                <span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"></span>\n              </a>\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lock\">\n                <span class=\"glyphicon glyphicon-eye-close\" aria-hidden=\"true\"></span>\n              </a>\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Logout\" href=\"login.html\">\n                <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\n              </a>\n            </div>\n            <!-- /menu footer buttons -->\n          </div>\n       "

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[717]);
//# sourceMappingURL=main.bundle.map