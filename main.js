(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\My Projects\salahemam.github.io\application\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'PersonalWebApp';
        this.cvDetails = {
            projects: [
                { name: 'Project One', description: 'this is project one' },
                { name: 'Project Two', description: 'this is project two' }
            ]
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".SideMenuLink[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.SideMenuLink.active[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlNpZGVNZW51TGluayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLlNpZGVNZW51TGluay5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pipes_split_list_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/split-list.pipe */ "ZKDy");
/* harmony import */ var _components_my_cv_cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-cv/cv.component */ "w0nr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let components = [
    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _components_my_cv_cv_component__WEBPACK_IMPORTED_MODULE_4__["CVComponent"]
];
let pipes = [
    _pipes_split_list_pipe__WEBPACK_IMPORTED_MODULE_3__["ListLastPart"],
    _pipes_split_list_pipe__WEBPACK_IMPORTED_MODULE_3__["ListFirstPart"]
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_my_cv_cv_component__WEBPACK_IMPORTED_MODULE_4__["CVComponent"], _pipes_split_list_pipe__WEBPACK_IMPORTED_MODULE_3__["ListLastPart"],
        _pipes_split_list_pipe__WEBPACK_IMPORTED_MODULE_3__["ListFirstPart"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "ZKDy":
/*!******************************************!*\
  !*** ./src/app/pipes/split-list.pipe.ts ***!
  \******************************************/
/*! exports provided: ListFirstPart, ListLastPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFirstPart", function() { return ListFirstPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLastPart", function() { return ListLastPart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ListFirstPart {
    transform(list) {
        let len = list.length;
        return list.slice(0, len / 2);
    }
}
ListFirstPart.ɵfac = function ListFirstPart_Factory(t) { return new (t || ListFirstPart)(); };
ListFirstPart.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "listFirstPart", type: ListFirstPart, pure: true });
class ListLastPart {
    transform(list) {
        let len = list.length;
        return list.slice(len / 2, len);
    }
}
ListLastPart.ɵfac = function ListLastPart_Factory(t) { return new (t || ListLastPart)(); };
ListLastPart.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "listLastPart", type: ListLastPart, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_my_cv_cv_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/my-cv/cv.component */ "w0nr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_my_cv_cv_component__WEBPACK_IMPORTED_MODULE_1__["CVComponent"],
        pathMatch: 'full'
    },
    { path: 'my-cv', component: _components_my_cv_cv_component__WEBPACK_IMPORTED_MODULE_1__["CVComponent"] },
    {
        path: '**',
        redirectTo: '404'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w0nr":
/*!**************************************************!*\
  !*** ./src/app/components/my-cv/cv.component.ts ***!
  \**************************************************/
/*! exports provided: CVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CVComponent", function() { return CVComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_split_list_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/split-list.pipe */ "ZKDy");



function CVComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const edu_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", edu_r8.Speciality, " - ", edu_r8.Place, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", edu_r8.FromYear, " - ", edu_r8.ToYear, "");
} }
function CVComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const exp_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r9.Position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", exp_r9.Company, " | ", exp_r9.FromDate, " to ", exp_r9.ToDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r9.Description);
} }
function CVComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const proj_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", proj_r10.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", proj_r10.Tools, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proj_r10.Description);
} }
function CVComponent_ng_container_55_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " | Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CVComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CVComponent_ng_container_55_span_7_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cou_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cou_r11.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", cou_r11.Place, " | ", ctx_r3.formatDate(cou_r11.Date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cou_r11.IsOnline);
} }
function CVComponent_ng_container_59_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " | Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CVComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CVComponent_ng_container_59_span_7_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cou_r13 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cou_r13.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", cou_r13.Place, " | ", ctx_r4.formatDate(cou_r13.Date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cou_r13.IsOnline);
} }
function CVComponent_ng_container_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cert_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r15.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", cert_r15.Place, " | ", cert_r15.Date, " ");
} }
function CVComponent_ng_container_86_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r16.Value);
} }
function CVComponent_ng_container_86_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", info_r16.Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r16.Value);
} }
function CVComponent_ng_container_86_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CVComponent_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CVComponent_ng_container_86_span_3_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CVComponent_ng_container_86_a_4_Template, 2, 2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CVComponent_ng_container_86_span_5_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const info_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", info_r16.Key, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !info_r16.Url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", info_r16.Url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r17 != ctx_r6.contactInfos.length - 1);
} }
function CVComponent_ng_container_89_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CVComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CVComponent_ng_container_89_span_4_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const info_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", info_r23.Key, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r23.Value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r24 != ctx_r7.personalInfos.length - 1);
} }
class CVComponent {
    constructor() {
        this.careerSummary = `Accomplished software engineer with 15+ years of experience, including 5+ years as a team leader and 2 years as Head of Engineering, specializing in delivering high-quality web and desktop solutions. Skilled in a wide range of technologies including .NET, .NET Core, ASP.NET, C#, SQL Server, MongoDB, Angular, and front-end frameworks. Plus working with modern collaboration tools such as JIRA, Slack, Ziplin, VS, VS Code, GitHub, Azure Devops, and Zoom. Adept at the full software development life cycle, from requirements analysis and design to deployment and support, with strong expertise in Agile, Scrum, and Waterfall methodologies. Proven track record in leading and mentoring teams, fostering collaboration, and driving continuous improvement through practices such as code reviews and refactoring. Recognized for strong leadership, stakeholder communication, and passion for building scalable, efficient, and innovative software solutions that exceed client expectations.`;
        this.educations = [
            {
                Place: "Ainshams University",
                FromYear: 2005,
                ToYear: 2009,
                Speciality: "Faculty of Computer & Information Sciences"
            },
            {
                Place: "Mubarak Secondary",
                FromYear: 2002,
                ToYear: 2005,
                Speciality: "Thanawia Amma"
            }
        ];
        this.experiences = [
            {
                Position: "Head of Engineering",
                Company: "Qorrect",
                FromDate: "Jan-2024",
                ToDate: "Present",
                Url: "https://qorrectassess.com/",
                Description: "Head of Engineering with proven experience leading cross-functional teams (frontend, backend, mobile, and QA) to deliver high-quality products in agile environments. Skilled in managing feature delivery, deployment, and DevOps processes while ensuring product stability and performance. Experienced in stakeholder communication, client meetings, and team hiring/onboarding. also managing tools such as JIRA, Azure DevOps, and GitHub. Adept at fostering collaboration, reviewing code, and guiding teams to meet organizational objectives efficiently."
            },
            {
                Position: "Software Team Leader (.Net)",
                Company: "Qorrect",
                FromDate: "MAR-2021",
                ToDate: "Dec-2023",
                Url: "https://qorrectassess.com/",
                Description: "Lead the development team (backend & frontend) in an agile environment to work on the company product features (Qorrect Assessment Platform)." +
                    "My activities includes leadership, development, interview, refactoring, code reviews, research for best solutions, architecture & design, also act as Scrum Master."
            },
            {
                Position: "Technical Lead (.Net)",
                Company: "Key2Soft",
                FromDate: "Jan-2020",
                ToDate: "MAR-2021",
                Url: "http://www.key2soft.com/",
                Description: "Delivered educational projects to Saudi clients like TETCO software company and Ministry of Education"
            },
            {
                Position: "Senior Software Engineer (.Net)",
                Company: "Path Solutions",
                FromDate: "Nov-2018",
                ToDate: "Dec-2019",
                Url: "https://www.path-solutions.com/",
                Description: "Work on large banking system 'iSHRAQ' with banking clients like 'Gulf Bank' and also build web services for integration."
            },
            {
                Position: "Technical Team Lead (.Net)",
                Company: "Integrated Technology Group",
                FromDate: "Aug-2018",
                ToDate: "Nov-2018",
                Url: "https://www.itgsolutions.com/",
                Description: "Lead the development team to achieve tasks for large e-learning solution 'EduWave' and also build solutions from scratch using WebApis, Authentication, SignalR & WebSockets."
            },
            {
                Position: ".Net Team Leader",
                Company: "CodeLab",
                FromDate: "May-2015",
                ToDate: "July-2018",
                Url: "http://www.codelabsys.com/",
                Description: "Lead the development team to work on Dynamic Inspection System using angular & WebApis, and also was responsible for code review &deployments delivered to multiple different clients in Saudi Arabia"
            },
            {
                Position: "Senior .Net Web Developer",
                Company: "Vodafone International Services",
                FromDate: "Jul-2014",
                ToDate: "Apr-2015",
                Url: "http://vis.vodafone.com.eg/",
                Description: "Worked on the official website for Ceramica Royal using Orchard CMS application built on ASP.Net MVC"
            },
            {
                Position: "Senior .Net Web Developer",
                Company: "Advanced Computer Systems",
                FromDate: "Jan-2013",
                ToDate: "July-2014",
                Url: "http://www.acs-egypt.com/",
                Description: "Developed different web & desktop projects using C#.Net, VB.Net, ASP.Net, SqlServer, Crystal Reports."
            },
            {
                Position: "Junior .Net Web Developer",
                Company: "Advanced Computer Systems",
                FromDate: "Mar-2010",
                ToDate: " Jan-2013",
                Url: "http://www.acs-egypt.com/",
                Description: "Developed different web & desktop projects using C#.Net, VB.Net, ASP.Net, SqlServer, Crystal Reports."
            },
        ];
        this.projects = [
            {
                Title: "Qorrect Assessment",
                Tools: "C#, .Net Core, ASP.Net WebApis, ASP.Net MVC, SqlServer, Postgres, Redis, IdentityServer4, Hangfire",
                Description: "Smart assessment product which manages examinations for both examiners & examinees, delivered online or on papers using web, tablet, and mobile devices. It allows examiners to create and assign exams with different questions & layouts for their examinees."
            },
            {
                Title: "Marking System",
                Tools: "C#, .Net Core, ASP.Net WebApis, SqlServer, Postgres, Redis, JWT",
                Description: "A product to facilitae the examinees answers marking in an easy and collaborative way while the marking tasks are assigned randomly or manually to the markers."
            },
            {
                Title: "Key2Learn",
                Tools: "C#.Net, ASP.Net MVC Core, MongoDB",
                Description: "Learning management system (LMS) which manages schools, teachers, students, and parents. It allows teachers to create and assign couses, meeting, and materials for their students."
            },
            {
                Title: "Future Leaders",
                Tools: "C#.Net, ASP.Net MVC, WCF Services, Sql Server",
                Description: "Educational web application which allows the ministry to choose the most talented graduates or teachers to fullll the available leadership positions"
            },
            {
                Title: "Waed",
                Tools: "C#.Net, ASP.Net MVC Core, WCF Services, Sql Server",
                Description: "Educational web application which allows filtering the ministry employees by passing some exams and surveys and also making interviews and trainings based on their skills"
            },
            {
                Title: "Safeer Graduates",
                Tools: "C#.Net, ASP.Net MVC, WCF Services, Sql Server",
                Description: "Educational web application that integrates with many WCF services which allows the graduates to publish their CVs and apply for jobs or trainings offered by other registered agencies."
            },
            {
                Title: "Online Banking Webservices",
                Tools: "C#.Net, ASP.Net WebApis, Oracle",
                Description: "Build webservices for integration with internal bank system & exposed to external customers portal"
            },
            {
                Title: "iSHRAQ",
                Tools: "C#.Net, ASP.Net WebForms, Oracle",
                Description: "Banking software product for internal & external bank activities management & core banking."
            },
            {
                Title: "EduWave",
                Tools: "C#.Net, Asp.Net WebApis Asp.Net WebForms, Sql Server",
                Description: "Large e-learning system for all study levels which helps students and teachers communication & cover many schools in the Gulf"
            },
            {
                Title: "GAZT",
                Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x, Active Directory, SAP, CRM.",
                Description: "Inspection for agencies that have not paid their VAT or Excise Taxes to detect violations and set penalities on their owners & integrate with active directory and other external services (SAP, CRM)."
            },
            {
                Title: "MOT",
                Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x",
                Description: "Tracking and reporting accidents or violations in roads."
            },
            {
                Title: "Onaizah Municipality",
                Tools: "C#.Net, Asp.Net WebApis, Sql Server, Oracle, Angular 1.x Active Directory.",
                Description: "Inspection for all shops in Onaizah to check violations and set penalities on their owners & sync with oracle db & integrate with active directory."
            },
            {
                Title: "MLSD",
                Tools: "C#.Net, Asp.Net WebApis, Sql Server, Oracle, SSIS, Angular 1.x.",
                Description: "Inspection for poor people who need help or money & sync with ministry oracle db."
            },
            {
                Title: "GAMEP",
                Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x..",
                Description: "Inspection for buildings, factories, or agencies which have environmental violations & go through approval & revision workow"
            },
            {
                Title: "MOF",
                Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x",
                Description: "Provides news related to the ministry & integrate with mobile app."
            },
            {
                Title: "BRAVO Product",
                Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x",
                Description: "Generic field inspection product with dynamic form builder, form viewer (web & mobile), workow, and task distribution."
            },
            {
                Title: "http://www.royalceramica.com",
                Tools: "C#.Net, Asp.Net MVC, Sql Server, Orchard CMS",
                Description: "Ceramica Royal company ofcial website."
            },
            {
                Title: "http://www.egysurvey.com",
                Tools: "C#.Net, Asp.Net Webforms, Sql Server",
                Description: "Design simple & professional surveys with different templates."
            },
            {
                Title: "http://www.rakeeb.net",
                Tools: "C#.Net, Asp.Net Webforms, Sql Server, Charts, Windows Services",
                Description: "Egypt Elections Supervision, News, Results, Statistics and Maps."
            },
            {
                Title: "http://www.emta7anat.com",
                Tools: "C#.Net, Asp.Net Webforms, Sql Server",
                Description: "Exams online for students, teachers, and schools."
            },
            {
                Title: "http://www.reservegypt.com",
                Tools: "C#.Net, Asp.Net Webforms, Sql Server",
                Description: "Hotels Reservation system for Egypt and other services."
            },
            {
                Title: "http://www.eiod.org",
                Tools: "C#.Net, Asp.Net Webforms, Sql Server",
                Description: "Egyptian Institute of Directors."
            },
            {
                Title: "http://www.ecrc.org.eg",
                Tools: "C#.Net, Asp.Net Webforms, Sql Server",
                Description: "Egyptian Corporate Responsibility Center."
            },
            {
                Title: "http://www.followmycars.com",
                Tools: "C#.Net, Asp.Net Webforms",
                Description: "Marketing website for tracking cars through GPS tools."
            },
            {
                Title: "http://www.acs-egypt.com",
                Tools: "C#.Net, Asp.Net Webforms, Sql Server",
                Description: "Management system for ACS Company."
            },
            {
                Title: "Gait Analysis for Human Identication",
                Tools: "C#.Net, OpenCV, Sql Server",
                Description: "Graduation Project which aims to identify the individuals by their gait (i.e. the manner they walk) from a video sequence. Won ITIDA prize"
            },
        ];
        this.technicalSkills = [
            "C#.Net", "VB.Net",
            "ASP.Net (WebForms, MVC, WebApis)",
            "ASP.Net MVC Core", ".Net Core",
            "Entity Framework", "EF Core",
            "Design Patterns",
            "OOP", "SOLID Principles",
            "IdentityServer", "Hangfire", "Redis",
            "AngularJS", "Angular 2+", "KnockoutJs",
            "HTML", "CSS", "Bootstrap",
            "JavaScript", "jQuery", "AJAX",
            "JSON", "XML", "WCF",
            "MongoDB (Query, Aggregation, Performance)",
            "SQL Server", "SSIS",
            "Oracle", "MS Access", "Postgres",
            "Crystal Reports", "iReport", "SSRS",
            "Cloud (Amazon, Azure)",
            "Git", "TFVS", "JIRA",
            "Agile", "Scrum",
            "SignalR", "WebSockets",
            "Basics in (SharePoint, Orchard CMS, Ionic Framework, Android, WordPress, Joomla, C++, JAVA, Win 8 Apps)."
        ];
        this.personalSkills = [
            "Great Leadership & Management skills",
            "Committed",
            "Analytical",
            "Love Thinking",
            "Cooperative",
            "Hard Worker",
            "Team Player",
            "Well Organized"
        ];
        this.courses = [
            {
                Title: "PMP Preparation Course - InProgress",
                IsOnline: true,
                Place: "net3lem.com",
                Date: new Date(2025, Months.September)
            },
            {
                Title: "Agile Frameworks Webinar",
                IsOnline: true,
                Place: "net3lem.com",
                Date: new Date(2025, Months.August)
            },
            {
                Title: "EF Core 6 Fundamentals",
                IsOnline: true,
                Place: "Pluralsight",
                Date: new Date(2025, Months.July)
            },
            {
                Title: "SOLID Principles for C# Developers",
                IsOnline: true,
                Place: "Pluralsight",
                Date: new Date(2023, Months.August)
            },
            {
                Title: "Top 1%: Software Architecture Series",
                IsOnline: true,
                Place: "Pluralsight",
                Date: new Date(2023, Months.July)
            },
            {
                Title: "Microservices Architecture in Arabic",
                IsOnline: true,
                Place: "Youtube",
                Date: new Date(2024, Months.November)
            },
            {
                Title: "Microservices Architecture and Design",
                IsOnline: true,
                Place: "Youtube",
                Date: new Date(2024, Months.November)
            },
            {
                Title: "Saga pattern: distributed transactions",
                IsOnline: true,
                Place: "Youtube",
                Date: new Date(2024, Months.November)
            },
            {
                Title: "Introduction to Microservices - DotnetMastery",
                IsOnline: true,
                Place: "Youtube",
                Date: new Date(2024, Months.November)
            },
            {
                Title: "Get Started With .Net Core Identity Server 4",
                IsOnline: true,
                Place: "Udemy",
                Date: new Date(2021, Months.June)
            },
            {
                Title: "Learn Amazon web services (AWS): The complete introduction",
                IsOnline: true,
                Place: "Udemy",
                Date: new Date(2021, Months.February)
            },
            {
                Title: "MongoDB Basics",
                IsOnline: true,
                Place: "MongoDB University",
                Date: new Date(2020, Months.October)
            },
            {
                Title: "MongoDB Aggregation Framework",
                IsOnline: true,
                Place: "MongoDB University",
                Date: new Date(2020, Months.October)
            },
            {
                Title: "MongoDB Performance",
                IsOnline: true,
                Place: "MongoDB University",
                Date: new Date(2020, Months.October)
            },
            {
                Title: "MongoDB for Python Developers",
                IsOnline: true,
                Place: "MongoDB University",
                Date: new Date(2020, Months.October)
            },
            {
                Title: "Angular 9 - The Complete Guide 2020 Edition",
                IsOnline: true,
                Place: "Udemy",
                Date: new Date(2020, Months.October)
            },
            {
                Title: "Leadership Skills",
                IsOnline: true,
                Place: "E3melBusiness Academy",
                Date: new Date(2019, Months.July)
            },
            {
                Title: "Professional CEO",
                IsOnline: true,
                Place: "E3melBusiness Academy",
                Date: new Date(2019, Months.July)
            },
            {
                Title: "Modern Software Architecture",
                Place: "SECC-ITIDA",
                Date: new Date(2019, Months.June)
            },
            {
                Title: "SECC Agile Foundation",
                Place: "SECC-ITIDA",
                Date: new Date(2018, Months.April)
            },
            {
                Title: "Mastering the Basics of SQL Server Query Optimization",
                IsOnline: true,
                Place: "Udemy",
                Date: new Date(2018, Months.January)
            },
            {
                Title: "Mini MBA",
                Place: "Smart Vision",
                Date: new Date(2018, Months.January)
            },
            {
                Title: "Developing Microsoft SharePoint Server 2013 Core Solutions",
                Place: "New Horizons",
                Date: new Date(2015, Months.June)
            },
            {
                Title: "Cloud Business Essentials",
                Place: "ITSynergy",
                Date: new Date(2014, Months.January)
            },
            {
                Title: "Android Application Development",
                Place: "Asgatech",
                Date: new Date(2014, Months.March)
            },
            {
                Title: "Code Refactoring Techniques",
                Place: "SECC-ITIDA",
                Date: new Date(2013, Months.June)
            },
            {
                Title: "Test Driven Development",
                Place: "SECC-ITIDA",
                Date: new Date(2013, Months.June)
            },
            {
                Title: "Berlitz Prociency Level 1 (English Course)",
                Place: "Berlitz",
                Date: new Date(2012, Months.April)
            },
            //
            {
                Title: "[Arabic - بالعربي] Entity Framework Core",
                Place: "Youtube",
                Date: new Date(2022, Months.June),
                IsOnline: true
            },
            {
                Title: "Microservices: The Big Picture",
                Place: "Pluralsight",
                Date: new Date(2022, Months.June),
                IsOnline: true
            },
            {
                Title: "ASP.NET Core Microservices: Getting Started",
                Place: "Pluralsight",
                Date: new Date(2022, Months.June),
                IsOnline: true
            },
            {
                Title: "Simplified .Net Background Tasks with Hangfire 1",
                Place: "Pluralsight",
                Date: new Date(2022, Months.June),
                IsOnline: true
            },
            {
                Title: "Clean Architecture: Patterns, Practices, and Principles",
                Place: "Pluralsight",
                Date: new Date(2022, Months.June),
                IsOnline: true
            },
            {
                Title: "سلسلة سكروم باللغة العربية",
                Place: "Youtube",
                Date: new Date(2022, Months.August),
                IsOnline: true
            },
        ].sort((a, b) => b.Date.getTime() - a.Date.getTime());
        this.languages = [
            "Arabic (Native)",
            "English (Excellent)"
        ];
        this.personalInfos = [
            {
                Key: "Birthdate",
                Value: "01 May 1988"
            },
            {
                Key: "Marital Status",
                Value: "Married"
            },
            {
                Key: "Military Status",
                Value: "Excempted"
            }
        ];
        this.contactInfos = [
            {
                Key: "Address",
                Value: "Cairo, Egypt"
            },
            // {
            //   Key: "Mobile",
            //   Value: "01001018750"
            // },
            {
                Key: "Email",
                Value: "goldencap2009@gmail.com"
            },
            {
                Key: "Linkedin",
                Value: "/salah-emam",
                Url: "https://www.linkedin.com/in/salah-emam"
            }
        ];
        this.certificates = [
            {
                Title: "SECC Agile Foundation",
                Place: "SECC",
                Date: "May 2018",
                Url: "http://www.secc.org.eg/"
            },
            {
                Title: "CCC Cloud Business Associate",
                Place: "TIEC",
                Date: "February 2014",
                Url: "http://www.cloudcredential.org/"
            }
        ];
    }
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        return `${month}-${year}`; // Example: "2025-08-25"
    }
}
CVComponent.ɵfac = function CVComponent_Factory(t) { return new (t || CVComponent)(); };
CVComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CVComponent, selectors: [["app-cv"]], decls: 101, vars: 21, consts: [[1, "cv-container"], ["border", "1", 1, "custom-table"], [1, "main-content"], [2, "text-align", "center"], ["colspan", "2"], [1, "summary"], ["colspan", "2", 1, "header"], [2, "padding-right", "0", "padding-left", "0"], ["width", "100%"], [4, "ngFor", "ngForOf"], [1, "header"], [1, "middle-side"], [2, "font-weight", "bold"], [1, "title"], [4, "ngIf"], [3, "href", 4, "ngIf"], [3, "href"]], template: function CVComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Salah Eldin Emam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CVComponent_ng_container_22_Template, 6, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CVComponent_ng_container_29_Template, 10, 5, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CVComponent_ng_container_36_Template, 9, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " TECHNICAL SKILLS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CVComponent_ng_container_55_Template, 8, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "listFirstPart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CVComponent_ng_container_59_Template, 8, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "listLastPart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, CVComponent_ng_container_70_Template, 7, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " PERSONAL SKILLS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " PERSONAL INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, CVComponent_ng_container_86_Template, 6, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, CVComponent_ng_container_89_Template, 5, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Languages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.careerSummary, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" EDUCATION (", ctx.educations.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" WORK EXPERIENCES (", ctx.experiences.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" PROJECTS (", ctx.projects.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.technicalSkills.join(" | "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" COURSES (", ctx.courses.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 17, ctx.courses));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 19, ctx.courses));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" CERTIFICATES (", ctx.certificates.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certificates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.personalSkills.join(" | "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactInfos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personalInfos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.languages.join(" | "), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_pipes_split_list_pipe__WEBPACK_IMPORTED_MODULE_2__["ListFirstPart"], _pipes_split_list_pipe__WEBPACK_IMPORTED_MODULE_2__["ListLastPart"]], styles: ["table[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n    padding: 3px;\r\n    vertical-align: top;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    vertical-align: top;\r\n    font-size: 12px\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\r\n\r\n.left-side[_ngcontent-%COMP%] {\r\n    background-color: #eee;\r\n    padding-left: 5px;\r\n}\r\n\r\n.middle-side[_ngcontent-%COMP%] {\r\n    width: 5px;\r\n    padding: 0;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: system-ui;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    padding-top: 5px;\r\n    border-top: 1px solid #eee;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n        font-weight: normal;\r\n        font-style: italic;\r\n        font-size: 10px;\r\n    }\r\n\r\ntd.header[_ngcontent-%COMP%] {\r\n    background-color: #eee;\r\n    border: darkgray 0.5px solid;\r\n    padding: 5px 0px 5px 5px;\r\n    font-weight: 500;\r\n}\r\n\r\nspan.name[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n}\r\n\r\nspan.summary[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUk7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0FBRUo7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxudHIge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxudGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubGVmdC1zaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLm1pZGRsZS1zaWRlIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbn1cclxuXHJcbi5jdXN0b20tdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbiAgICAudGl0bGUgPiBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcblxyXG50ZC5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogZGFya2dyYXkgMC41cHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5zcGFuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbnNwYW4uc3VtbWFyeSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbnN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiJdfQ== */"] });
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
})(Months || (Months = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map