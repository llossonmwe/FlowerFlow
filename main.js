(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth-component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth-component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main-material.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main-material.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main-->\n<nav style=\"padding-top:50px;\" class=\"navbar navbar-expand-lg navbar-light\">\n\t<div class=\"container-fluid\">\n\t\t<a class=\"navbar-brand\" href=\"#\"><img height=\"20px\" width=\"auto\" src=\"assets/img/galleryV2/LogoFF.png\" /></a>\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t  </button>\n\t  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t<form class=\"d-flex\">\n\t\t\t<input class=\"form-control me-2\" type=\"search\" placeholder=\"Recherche\" aria-label=\"Search\">\n\t\t  </form>\n\t\t<ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n\t\t  <li class=\"nav-item\">\n\t\t\t<a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Fil d'actu</a>\n\t\t  </li>\n\t\t  <li class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"#\">Proposer un projet</a>\n\t\t  </li>\n\t\t  <li *ngIf=\"userLoggedIn\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"/dashboard/versus-profile\">Connecté avec {{ username }}</a>\n\t\t\t</li>\n\t\t  <li *ngIf=\"!userLoggedIn\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"register\">Inscription</a>\n\t\t  </li>\n\t\t  <li *ngIf=\"!userLoggedIn\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"loginone\">Connexion</a>\n\t\t  </li>\n\t\t  <li *ngIf=\"userLoggedIn\" class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"/session/loginone\">Déconnexion</a>\n\t\t  </li>\n\t\t</ul>\n\t  </div>\n\t</div>\n  </nav>\n\n\n<div id=\"app\" class=\"app {{headerSkinColor}} {{themeSkinColor}}\" [dir]=\"layout\" [class.app-dark]=\"dark\"\n\t[class.boxed]=\"boxed\" [class.collapsed-sidebar]=\"collapseSidebar\" [class.compact-sidebar]=\"compactSidebar\"\n\t[class.customizer-in]=\"customizerIn\" [class.chat-window--open]=\"chatWindowOpen\"\n\t[class.sidebar-closed]=\"sidebarClosed\" [class.sidebar-opened]=\"!sidebarClosed\" [class.chat-sidebar]=\"chatSidebar\"\n\t[ngClass]=\"{'icon-sidebar-wrap': miniSidebar}\">\n\t\t\t\n\t\t\t<section class=\"main-contents\">\n\t\t\t\n\t\t\t\t<!-- main header closed -->\n\t\t\t\t<div class=\"chankya-base-container\" #scrollContainer>\n\t\t\t\t\n\t\t\t\t\t<div class=\"inner-container\">\n\t\t\t\t\t\t<router-outlet (activate)=\"onActivate($event, scrollContainer)\"></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- chankya base container closed -->\n\t\t\t</section>\n\t\t\t<!-- main content closed -->\n\t\t<!-- Sidebar Closed -->\n\n\t\n</div>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\t<div class=\"container-fluid\">\n\t  <a class=\"navbar-brand\" href=\"#\"><img height=\"20px\" width=\"auto\" src=\"assets/img/galleryV2/LogoFF.png\" /></a>\n\n\t  <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t  </button>\n\t  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t<ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n\t\t  <li class=\"nav-item\">\n\t\t\t<a class=\"nav-link active\" aria-current=\"page\" href=\"#\">©2021 FlowerFlow</a>\n\t\t  </li>\n\t\t  <li class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"#\">Proposer un projet</a>\n\t\t  </li>\n\t\t  <li class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"#\">Top projets</a>\n\t\t  </li>\n\t\t  <li class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"#\">Nouveautés</a>\n\t\t  </li>\n\t\t</ul>\n\t  </div>\n\t</div>\n  </nav>\n<!-- app closed -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/coming-soon/coming-soon-component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/coming-soon/coming-soon-component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Coming Soon-->\n<div class=\"coming-wrapper bg-sc d-flex align-items-start justify-content-center\">\n\t<div class=\"coming-soon-wrapper text-center pt-lg-5\">\n\t\t<div class=\"mb-5\">\n\t\t\t<h2 class=\"text-capitalize font-5x font-weight-bold\">{{'Coming Soon'|translate}}</h2>\n\t\t</div>\n\t\t<div class=\"getting-started font-3x mb-5\"></div>\n\t\t<div class=\"mb-3\">\n\t\t\t<h2 class=\"text-uppercase font-4x font-weight-bold\">{{\"We're so close\"|translate}}</h2>\n\t\t</div>\n\t\t<p class=\"content font-lg\">Enjoy a Very Limited Opportunity by subscribing to our newsletter.\n\t\t\t<br> Check out the time remaining on top left, hurry up!</p>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/coming-soonV2/coming-soonV2.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/coming-soonV2/coming-soonV2.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Coming Soon V2-->\n<div class=\"comingsoon-wrap bg-white\">\n\t<div class=\"row no-gutters comingsoon-row align-items-stretch\">\n\t\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-6 d-none d-lg-block\">\n\t\t\t<div class=\"comingsoon-image h-100\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-12 col-sm-12 col-md-12 col-lg-6 align-items-center justify-content-center d-flex\">\n\t\t\t<div class=\"text-center px-5\">\n\t\t\t\t<div class=\"text-center mb-4\">\n\t\t\t\t\t<h2><span class=\"font-3x font-weight-light text-uppercase\">{{'Coming Soon'|translate}}</span></h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12 col-sm-12 col-md-10 col-lg-10 mx-auto\">\n\t\t\t\t\t\t<div class=\"text-center mb-5\">\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"counter-wrapper text-center mb-5 px-5\">\n\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t<div class=\"mb-2 col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<h4 class=\"mb-2 font-weight-normal\"><span class=\"font-2x\">{{days}}</span></h4>\n\t\t\t\t\t\t\t\t<p>Days</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mb-2 col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<h4 class=\"mb-2 font-weight-normal\"><span class=\"font-2x\">{{hours}}</span></h4>\n\t\t\t\t\t\t\t\t<p>Hours</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mb-2 col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<h4 class=\"mb-2 font-weight-normal\"><span class=\"font-2x\">{{minutes}}</span></h4>\n\t\t\t\t\t\t\t\t<p>Minutes</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mb-2 col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<h4 class=\"mb-2 font-weight-normal\"><span class=\"font-2x\">{{seconds}}</span></h4>\n\t\t\t\t\t\t\t\t<p>Seconds</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-4 text-center\">\n\t\t\t\t\t<span>Subscribe For Your Early Access Invite.</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-center d-flex align-items-stretch justify-content-center\">\n\t\t\t\t\t<div class=\"mr-2\">\n\t\t\t\t\t\t<input class=\"form-control\" type=\"email\" placeholder=\"Enter Email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"btn btn-dark h-100 text-nowrap\">Subscribe</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/forgot-password/forgot-password-component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/forgot-password/forgot-password-component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Forgot Password-->\n<div class=\"forgot-password d-flex align-items-center justify-content-between\">\n\t<div class=\"login-block mx-auto text-center position-relative shadow-box\">\n\t\t<div class=\"login-icon mb-5\">\n\t\t\t<span class=\"square-100\"><i class=\"fa fa-unlock-alt\"></i></span>\n\t\t</div>\n\t\t<div class=\"mb-5\">\n\t\t\t<h2 class=\"text-capitalize font-2x mb-3\">{{'Recover Password'|translate}}</h2>\n\t\t\t<p>{{\"Enter your email and we'll send you instructions on how to reset your password\"|translate}}</p>\n\t\t</div>\n\t\t<form #form=\"ngForm\" (ngSubmit)=\"forgetPassword(form.value)\" class=\"login-form\" action=\"javascript:void(0)\" method=\"post\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"email\" name=\"email\" class=\"form-control session-input-font input-square\" [(ngModel)]=\"email\" placeholder=\"Your email\" required>\n\t\t\t</div>\n\t\t\t<div class=\"mb-4\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block btn-square btn-lg\">{{'Send Me Password'|translate}}</button>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col col-lg-6\">\n\t\t\t\t\t<a routerLink=\"/session/register\" class=\"btn btn-danger btn-block btn-lg btn-pill\">{{'Register'|translate}}</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col col-lg-6\">\n\t\t\t\t\t<a routerLink=\"/session/loginone\" class=\"btn btn-secondary btn-block btn-lg btn-pill\">{{'Login'|translate}}</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<!-- login form closed -->\n\t</div>\n\t<!-- login block closed -->\n</div>\n<!-- login wrapper closed -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/lockscreen/lockscreen-component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/lockscreen/lockscreen-component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--LockScreen-->\n<div class=\"registerone-wrapper lockscreen-wrapper bg-sc d-flex align-items-center justify-content-center\">\n\t<div class=\"login-block text-center position-relative shadow-box lockscreen-content\">\n\t\t<div class=\"login-icon mb-5\">\n\t\t\t<span class=\"square-100\"><i class=\"fa fa-unlock-alt\"></i></span>\n\t\t</div>\n\t\t<div class=\"pos-relative d-inline-block mrgn-b-2\">\n\t\t\t<span class=\"badge badge-success badge-circle status-top-right fa-notify\"><i class=\"fa fa-unlock-alt\"></i></span>\n\t\t\t<span>\n            <img src=\"assets/img/user-1.jpg\" class=\"img-fluid rounded-circle d-inline-block mb-3\" alt=\"admin thumb\" width=\"150\" height=\"150\" />\n         </span>\n\t\t\t<p>Anisha Willams</p>\n\t\t</div>\n\t\t<form class=\"login-form\" action=\"javascript:void(0)\" method=\"post\">\n\t\t\t<div class=\"form-group mb-4\">\n\t\t\t\t<input type=\"password\" name=\"password\" class=\"form-control session-input-font input-square\" placeholder=\"Password\" required>\n\t\t\t</div>\n\t\t\t<div class=\"mrgn-b-2\">\n\t\t\t\t<a routerLink=\"/dashboard/dashboard-v1\" class=\"btn btn-primary btn-block btn-square btn-lg\">Unlock</a>\n\t\t\t</div>\n\t\t\t<span>Not you? <a routerLink=\"/session/loginone\" class=\"text-muted\">Sign in as different user</a></span>\n\t\t</form>\n\t\t<!-- login form closed -->\n\t</div>\n</div>\n<!-- login wrapper closed -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/loginone/loginone-component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/loginone/loginone-component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Wrapper-->\n<div class=\"loginone-wrapper pt-xl-5\">\n\t<div class=\"login-content text-center\">\n\t\t<div class=\"login-inner-wrapper-2 shadow-box p-4\">\n\t\t\t<div class=\"mb-4\">\n\t\t\t\t<a class=\"navbar-brand\" href=\"#\"><img height=\"30px\" width=\"auto\" src=\"assets/img/galleryV2/LogoFF.png\" /></a>\n\t\t\t\t<p class=\"text-muted font-weight-bold mb-0 letter-space-1\">Bienvenue sur FlowerFlow</p>\n\t\t\t\t<h2 class=\"text-primary font-weight-normal\">Connexion</h2>\n\t\t\t</div>\n\t\t\t<form #form=\"ngForm\" (ngSubmit)=logIn(form.value) class=\"login-form\" action=\"javascript:void(0)\" method=\"post\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control session-input-font input-square\" placeholder=\"Adresse email\" required>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input name=\"password\" type=\"password\" [(ngModel)]=\"password\" placeholder=\"Mot de passe\" class=\"form-control session-input-font input-square\" required>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"login-meta mb-3\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6\">\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t<label class=\"mb-2 mr-sm-2 mb-sm-0 d-flex\">\n                           <input class=\"custom-control-input ng-untouched ng-pristine ng-valid\" type=\"checkbox\">\n                           <span class=\"custom-control-label\"></span>\n                           <span class=\"custom-control-description d-inline-block align-text-top\">Se souvenir de moi</span>\n                        </label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 text-left text-sm-right\">\n\t\t\t\t\t\t\t<a routerLink=\"/session/forgot-password\" class=\"text-muted\">{{'Forgot Password?'|translate}}</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block btn-lg btn-square\">{{'Sign In'|translate}}</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<a routerLink=\"/session/register\" class=\"text-muted\">Pas encore de compte ? Enregistrez-vous</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"login-social-icon\">\n\t\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void(0)\"><i class=\"fa fa-google-plus fa-lg text-warning\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter fa-lg text-info\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-official fa-lg text-primary\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void(0)\"><i class=\"fa fa-instagram fa-lg text-danger\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<!-- login form wrapper closed -->\n\t</div>\n\t<!-- login-one- wrapper closed -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/maintenanceV2/maintenanceV2.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/maintenanceV2/maintenanceV2.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Maintenance V2-->\n<div class=\"maintenance-wrap py-5\">\n\t<div class=\"container\">\n\t\t<div class=\"main-row row no-gutters\">\n\t\t\t<div class=\"col-12 col-sm-11 col-md-9 col-lg-9 mx-auto d-flex align-items-center\">\n\t\t\t\t<div class=\"maintenance-content text-center shadow-box\">\n\t\t\t\t\t<div class=\"sec-descp mb-4\">\n\t\t\t\t\t\t<h2 class=\"font-weight-normal\"><span class=\"font-2x\">{{\"We'll be back soon\"|translate}}</span></h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"sec-content text-center mrgn-b-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-12 col-sm-12 col-md-11 col-lg-11 mx-auto\">\n\t\t\t\t\t\t\t\t<p class=\"mb-0\">We're updating our servers to provide you with a better experience.Check back momentarily to view this page...or try hitting refresh, we may already be back!\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"img-wrap mb-5\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/maintain.png\" width=\"300\" height=\"37\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-center d-flex align-items-center justify-content-center\">\n\t\t\t\t\t\t<div class=\"mr-2\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"email\" placeholder=\"Your Email\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button class=\"btn btn-primary text-nowrap\">Get Notified</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/not-found/not-found-component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/not-found/not-found-component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Not Found-->\n<div class=\"registerone-wrapper under-maintenance-wrapper bg-sc d-flex align-items-center not-found\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 col-md-12 col-lg-11 col-xl-6 mx-auto\">\n\t\t\t\t<div class=\"card not-found-wrapper text-center shadow-box p-4\">\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<h2 class=\"text-capitalize font-5x font-weight-bold\">{{'404'|translate}}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<h2 class=\"font-2x font-weight-bold text-danger\">{{'Page not found'|translate}}</h2>\n\t\t\t\t\t\t<p class=\"font-lg\">{{'Sorry! There might be some error on this page...'|translate}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<a routerLink=\"/dashboard/dashboard-v1\" class=\"btn btn-primary btn-large btn-pill\">{{'Go back to Home'|translate}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-5\">\n\t\t\t\t\t\t<p class=\"font-lg\">{{'Stay connected, Subscribe us...'|translate}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form action=\"javascript:void(0)\" method=\"post\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-12 col-lg-8 mx-auto\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"your email address\" type=\"text\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-append\">\n                                 <button class=\"btn btn-primary h-100\" type=\"button\">Subscribe</button>\n                              </span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<!-- Subscribe form closed -->\n\t\t\t\t</div>\n\t\t\t\t<!-- coming soon wrapper closed -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Coming wrapper closed -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/register/register-component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/register/register-component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Register-->\n<div class=\"registerone-wrapper d-flex align-items-center justify-content-between\">\n\t<div class=\"login-block text-center register-content shadow-box border mx-auto position-relative\">\n\t\t<div class=\"login-icon mb-4\">\n\t\t\t<span class=\"square-100 fa-notify\"><i class=\"fa fa-unlock-alt\"></i></span>\n\t\t</div>\n\t\t<div class=\"grid-b-space\">\n\t\t\t<a class=\"navbar-brand\" href=\"#\"><img height=\"30px\" width=\"auto\" src=\"assets/img/galleryV2/LogoFF.png\" /></a>\n\t\t\t<p class=\"text-primary mb-2 letter-space-1\">Inscription</p>\n\t\t\t<h2 class=\"text-muted\">Flowerflow, place de marché entre investisseurs et porteurs de projets</h2>\n\t\t</div>\n\t\t<form [formGroup]=\"ngForm\" class=\"login-form\" action=\"javascript:;\" method=\"post\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control session-input-font input-square\" type=\"text\" placeholder=\"Prénom\" formControlName=\"firstName\">\n\t\t\t\t<small *ngIf=\"ngForm.controls['firstName'].hasError('required') && ngForm.controls['firstName'].touched\" class=\"text-danger\">\n               Merci d'indiquer votre prénom.\n            </small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control session-input-font input-square\" type=\"text\" placeholder=\"Nom\" formControlName=\"lastName\">\n\t\t\t\t<small *ngIf=\"ngForm.controls['lastName'].hasError('required') && ngForm.controls['lastName'].touched\" class=\"text-danger\">\n\t\t\t\t\tMerci d'indiquer votre nom.\n            </small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"email\" class=\"form-control session-input-font input-square\" placeholder=\"Adresse email\" formControlName=\"email\">\n\t\t\t\t<small *ngIf=\"ngForm.controls['email'].hasError('required') && ngForm.controls['email'].touched\" class=\"text-danger\">\n\t\t\t\t\tMerci d'indiquer votre adresse email.\n            </small>\n\t\t\t\t<small *ngIf=\"ngForm.controls['email'].errors && !(ngForm.controls['email'].hasError('required')) && ngForm.controls['email'].touched\" class=\"text-danger\">\n\t\t\t\t\tMerci d'indiquer une adresse email correcte.\n            </small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group mb-4\">\n\t\t\t\t<input type=\"password\" name=\"password\" class=\"form-control session-input-font input-square\" placeholder=\"Mot de passe\" formControlName=\"password\">\n\t\t\t\t<small *ngIf=\"ngForm.controls['password'].hasError('required') && ngForm.controls['password'].touched\" class=\"text-danger\">\n              Merci d'indiquer un mot de passe.\n           </small>\n\t\t\t</div>\n\t\t\t<div class=\"login-meta mb-4\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6\">\n\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t<label class=\"mb-2 mr-sm-2 mb-sm-0 d-flex\">\n                        <input class=\"custom-control-input ng-untouched ng-pristine ng-valid\" type=\"checkbox\">\n                        <span class=\"custom-control-label\"></span>\n                        <span class=\"custom-control-description d-inline-block align-text-top\">J'accepte les conditions générales</span>\n                     </label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 text-left text-sm-right\">\n\t\t\t\t\t\t<a routerLink=\"/session/forgot-password\" class=\"text-muted\">Mot de passe oublié ?</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- login meta closed -->\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<button type=\"submit\" (click)=\"register(firstName, lastName)\" class=\"btn btn-primary btn-block btn-lg btn-square\">M'inscrire</button>\n\t\t\t</div>\n\t\t\t<span>Déjà un compte ? <a routerLink=\"/session/loginone\" class=\"text-primary\">Se connecter</a></span>\n\t\t</form>\n\t\t<!-- Login Form closed -->\n\t</div>\n</div>\n<!-- login wrapper closed -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/subscribes/subscribes.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/subscribes/subscribes.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Subscribe-->\n<div class=\"registerone-wrapper subscribe-wrapper bg-sc d-flex align-items-center\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 col-md-12 col-lg-11 col-xl-9 mx-auto\">\n\t\t\t\t<div class=\"card shadow-box\">\n\t\t\t\t\t<div class=\"card-header bg-primary\">\n\t\t\t\t\t\t<h4 class=\"text-uppercase mb-0\">{{'Subscribe'|translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<form action=\"javascript:void(0)\" method=\"post\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-11 mx-auto\">\n\t\t\t\t\t\t\t\t\t<p class=\"mb-3 text-muted\">{{'Subscribe to our newsletter to receive weekly updates.'|translate}}</p>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>{{'Your Email'|translate}}</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group align-items-stretch col-12 col-md-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon bg-light px-3\" id=\"basic-addon1\"><i class=\"fa fa-envelope m-0 d-inline-block align-bottom\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-square btn-lg\">{{'Subscribe'|translate}}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- card body closed -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Coming wrapper closed -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/session/under-maintance/under-maintance.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/session/under-maintance/under-maintance.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Under Maintenance-->\n<div class=\"registerone-wrapper under-maintenance-wrapper bg-sc d-flex align-items-center justify-content-center\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 col-md-12 col-lg-11 col-xl-9 mx-auto\">\n\t\t\t\t<div class=\"card shadow-box\">\n\t\t\t\t\t<div class=\"card-header bg-primary\">\n\t\t\t\t\t\t<h4 class=\"text-uppercase mb-0\">{{'Under maintenance'|translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<form action=\"javascript:void(0)\" method=\"post\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-12 col-sm-11 mx-auto\">\n\t\t\t\t\t\t\t\t\t<p class=\"mb-3\">{{\"We are under maintenance right now. We'll be back soon.\"|translate}}</p>\n\t\t\t\t\t\t\t\t\t<p class=\"mb-2 text-muted\">{{'Searching for something?'|translate}}</p>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group mb-3 flex-row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group col-12 col-md-11 px-0\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group mb-4\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-primary btn-square btn-lg\">{{'Submit'|translate}}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"links\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted mb-1\">{{'Already have an account?'|translate}}\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/session/loginone\" class=\"text-primary\">{{'Sign in here'|translate}}</a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted mb-0\">{{'New user?'|translate}}\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/session/register\" class=\"text-primary\">{{'Sign up here'|translate}}</a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- links closed -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Coming Soon Wrapper closed -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Coming wrapper closed -->"

/***/ }),

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
/*! exports provided: AppRoutes, RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");





var AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard/dashboard-v1',
        pathMatch: 'full',
    },
    {
        path: 'session', loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./session/session.module */ "./src/app/session/session.module.ts")).then(function (m) { return m.SessionDemoModule; });
        }
    },
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        runGuardsAndResolvers: 'always',
        children: [{
                path: 'dashboard', loadChildren: function () {
                    return __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; });
                }
            }],
    },
    {
        path: '**',
        redirectTo: 'dashboard-v1'
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(AppRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: ChankyaAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChankyaAppComponent", function() { return ChankyaAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var ChankyaAppComponent = /** @class */ (function () {
    function ChankyaAppComponent(translate) {
        translate.addLangs(['en', 'fr', 'he', 'ru', 'ar', 'zh', 'de', 'es', 'ja', 'ko', 'it', 'hu']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ChankyaAppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    ChankyaAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chankya-app',
            template: '<router-outlet></router-outlet>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ChankyaAppComponent);
    return ChankyaAppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, firebase, ChankyaAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChankyaAppModule", function() { return ChankyaAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-tour-ng-bootstrap */ "./node_modules/ngx-tour-ng-bootstrap/fesm5/ngx-tour-ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _core_menu_menu_toggle_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/menu/menu-toggle.module */ "./src/app/core/menu/menu-toggle.module.ts");
/* harmony import */ var _core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/menu/menu-items/menu-items */ "./src/app/core/menu/menu-items/menu-items.ts");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _session_session_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./session/session.module */ "./src/app/session/session.module.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






























/********** Custom option for ngx-translate ******/
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var firebase = {
    apiKey: "AIzaSyBvsSomC8OX2ombKDcsIdDOiw7ocSf5x7c",
    authDomain: "myversus.firebaseapp.com",
    databaseURL: "https://myversus.firebaseio.com",
    projectId: "myversus",
    storageBucket: "myversus.appspot.com",
    messagingSenderId: "19369283860",
    appId: "1:19369283860:web:930e7c62fa4d4a62"
};
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var perfectScrollbarConfig = {
    suppressScrollX: true
};
var ChankyaAppModule = /** @class */ (function () {
    function ChankyaAppModule() {
    }
    ChankyaAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_14__["SidebarModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["RoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _session_session_module__WEBPACK_IMPORTED_MODULE_27__["SessionDemoModule"],
                ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TourNgBootstrapModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
                _core_menu_menu_toggle_module__WEBPACK_IMPORTED_MODULE_24__["MenuToggleModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                    timeOut: 2000,
                    preventDuplicates: true
                }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_20__["ChankyaAppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_22__["MainComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_23__["AuthComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["ChankyaAppComponent"]],
            providers: [
                _core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_25__["MenuItems"],
                _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_26__["PageTitleService"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_28__["AngularFirestore"],
                _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], ChankyaAppModule);
    return ChankyaAppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-auth',
            template: __webpack_require__(/*! raw-loader!./auth-component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth-component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userAuthService) {
        this.router = router;
        this.userAuthService = userAuthService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        /* if (this.userAuthService.getLocalStorageUser()) {
         // logged in so return true
            return true;
         }
   
         // not logged in so redirect to login page with the return url
         this.router.navigate(['/session/loginone'], { queryParams: { returnUrl: state.url }});
         return false;
         */
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-items/menu-items.ts":
/*!****************************************************!*\
  !*** ./src/app/core/menu/menu-items/menu-items.ts ***!
  \****************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MENUITEMS = [
    {
        state: 'dashboard',
        name: 'Home',
        type: 'rooms',
        icon: 'icon-speedometer icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: 'VS VR  (booking & video)',
        type: 'rooms',
        icon: 'icon-speedometer icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: 'VS Esports  (booking)',
        type: 'rooms',
        icon: 'icon-speedometer icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: 'VS Series  (booking & agenda)',
        type: 'ranking',
        icon: 'icon-login icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: 'VS Kids  (Video AR, booking)',
        type: 'arcade',
        icon: 'icon-speedometer icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: 'VS Arcade  (ranking)',
        type: 'arcade',
        icon: 'icon-speedometer icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: 'S\'identifier',
        type: 'profile',
        icon: 'icon-login icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: '[OLD] Nouveau Duel',
        type: 'versus',
        icon: 'icon-speedometer icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: '[OLD] Nouveau Tournoi',
        type: 'tournaments',
        icon: 'icon-login icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: '[DANS PROFIL] Historique',
        type: 'history',
        icon: 'icon-login icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    },
    {
        state: 'dashboard',
        name: 'Quitter',
        type: 'logout',
        icon: 'icon-login icons',
        label: 'New',
        children: [
            { state: 'dashboard-v1', name: 'DASHBOARD 1' },
            { state: 'dashboard-v2', name: 'DASHBOARD 2' },
        ]
    }
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-toggle.module.ts":
/*!*************************************************!*\
  !*** ./src/app/core/menu/menu-toggle.module.ts ***!
  \*************************************************/
/*! exports provided: MenuToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleModule", function() { return MenuToggleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-toggle */ "./src/app/core/menu/menu-toggle/index.ts");



var MenuToggleModule = /** @class */ (function () {
    function MenuToggleModule() {
    }
    MenuToggleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _menu_toggle__WEBPACK_IMPORTED_MODULE_2__["MenuToggleAnchorDirective"],
                _menu_toggle__WEBPACK_IMPORTED_MODULE_2__["MenuToggleLinkDirective"],
                _menu_toggle__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"],
            ],
            exports: [
                _menu_toggle__WEBPACK_IMPORTED_MODULE_2__["MenuToggleAnchorDirective"],
                _menu_toggle__WEBPACK_IMPORTED_MODULE_2__["MenuToggleLinkDirective"],
                _menu_toggle__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"],
            ],
        })
    ], MenuToggleModule);
    return MenuToggleModule;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-toggle/index.ts":
/*!************************************************!*\
  !*** ./src/app/core/menu/menu-toggle/index.ts ***!
  \************************************************/
/*! exports provided: MenuToggleAnchorDirective, MenuToggleLinkDirective, MenuToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_toggle_anchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-toggle-anchor.directive */ "./src/app/core/menu/menu-toggle/menu-toggle-anchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuToggleAnchorDirective", function() { return _menu_toggle_anchor_directive__WEBPACK_IMPORTED_MODULE_0__["MenuToggleAnchorDirective"]; });

/* harmony import */ var _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-toggle-link.directive */ "./src/app/core/menu/menu-toggle/menu-toggle-link.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuToggleLinkDirective", function() { return _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_1__["MenuToggleLinkDirective"]; });

/* harmony import */ var _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-toggle.directive */ "./src/app/core/menu/menu-toggle/menu-toggle.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuToggleDirective", function() { return _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"]; });






/***/ }),

/***/ "./src/app/core/menu/menu-toggle/menu-toggle-anchor.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/menu/menu-toggle/menu-toggle-anchor.directive.ts ***!
  \***********************************************************************/
/*! exports provided: MenuToggleAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleAnchorDirective", function() { return MenuToggleAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-toggle-link.directive */ "./src/app/core/menu/menu-toggle/menu-toggle-link.directive.ts");



var MenuToggleAnchorDirective = /** @class */ (function () {
    function MenuToggleAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    MenuToggleAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    MenuToggleAnchorDirective.ctorParameters = function () { return [
        { type: _menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleLinkDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MenuToggleAnchorDirective.prototype, "onClick", null);
    MenuToggleAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[menuToggle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleLinkDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_toggle_link_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleLinkDirective"]])
    ], MenuToggleAnchorDirective);
    return MenuToggleAnchorDirective;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-toggle/menu-toggle-link.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/menu/menu-toggle/menu-toggle-link.directive.ts ***!
  \*********************************************************************/
/*! exports provided: MenuToggleLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleLinkDirective", function() { return MenuToggleLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-toggle.directive */ "./src/app/core/menu/menu-toggle/menu-toggle.directive.ts");



var MenuToggleLinkDirective = /** @class */ (function () {
    function MenuToggleLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(MenuToggleLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    MenuToggleLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    };
    MenuToggleLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    MenuToggleLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    MenuToggleLinkDirective.ctorParameters = function () { return [
        { type: _menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuToggleLinkDirective.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], MenuToggleLinkDirective.prototype, "open", null);
    MenuToggleLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[menuToggleLink]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["MenuToggleDirective"]])
    ], MenuToggleLinkDirective);
    return MenuToggleLinkDirective;
}());



/***/ }),

/***/ "./src/app/core/menu/menu-toggle/menu-toggle.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/menu/menu-toggle/menu-toggle.directive.ts ***!
  \****************************************************************/
/*! exports provided: MenuToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleDirective", function() { return MenuToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuToggleDirective = /** @class */ (function () {
    function MenuToggleDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    MenuToggleDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    MenuToggleDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    MenuToggleDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    MenuToggleDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    MenuToggleDirective.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MenuToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[menuToggleDirective]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuToggleDirective);
    return MenuToggleDirective;
}());



/***/ }),

/***/ "./src/app/core/page-title/page-title.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/page-title/page-title.service.ts ***!
  \*******************************************************/
/*! exports provided: PageTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleService", function() { return PageTitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PageTitleService = /** @class */ (function () {
    function PageTitleService() {
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    PageTitleService.prototype.setTitle = function (value) {
        this.title.next(value);
    };
    PageTitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PageTitleService);
    return PageTitleService;
}());



/***/ }),

/***/ "./src/app/main/main-material.scss":
/*!*****************************************!*\
  !*** ./src/app/main/main-material.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi1tYXRlcmlhbC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-tour-ng-bootstrap */ "./node_modules/ngx-tour-ng-bootstrap/fesm5/ngx-tour-ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/menu/menu-items/menu-items */ "./src/app/core/menu/menu-items/menu-items.ts");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _service_core_core_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/core/core-service.service */ "./src/app/service/core/core-service.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");














var screenfull = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
var MainComponent = /** @class */ (function () {
    function MainComponent(tourService, coreService, authService, afAuth, afs, menuItems, pageTitleService, translate, router, media) {
        this.tourService = tourService;
        this.coreService = coreService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.afs = afs;
        this.menuItems = menuItems;
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.router = router;
        this.media = media;
        this.userLoggedIn = false;
        this.customizerIn = false;
        this.chatWindowOpen = false;
        this.chatSidebar = false;
        this.sidebarClosed = false;
        this.chatpanelOpen = false;
        this.sidenavOpen = true;
        this.isMobile = false;
        this.isFullscreen = false;
        this._opened = true;
        this._showBackdrop = false;
        this._closeOnClickOutside = false;
        this.showSettings = false;
        this._mode = "push";
        this.sidenavMode = 'side';
        this.themeSkinColor = "light";
        this.headerSkinColor = "light";
        this.root = 'ltr';
        this.layout = 'ltr';
        this.miniSidebar = true;
        this.currentLang = 'en';
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        /*	this.tourService.events$.subscribe();
            this.tourService.initialize([
                {
                    anchorId: 'start.tour',
                    content: 'Welcome to the Chankya tour!',
                    placement: 'below',
                    title: 'Welcome to Chankya',
                },
                {
                    anchorId: 'tour-search',
                    content: 'Enjoying Search box with sugestion and many more things',
                    placement: 'below',
                    title: 'Search Box',
                },
                {
                    anchorId: 'tour-full-screen',
                    content: 'By pressing this button you can switch to fullscreen mode.',
                    placement: 'below',
                    title: 'Full Screen',
                },
                {
                    anchorId: 'tour-ui',
                    content: 'Create your frontend with beautifully designed UI-Panel. Pre integrated page templates and widgets provides you the power to create any design.',
                    placement: 'right',
                    title: 'Awesome UI-Panel',
                }]
            );
            
            if (window.innerWidth > 1280) {
                this.tourService.start();
            }*/
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.pageTitleService.title.subscribe(function (val) {
            _this.header = val;
        });
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                _this.userCol = _this.afs.collection('users', function (ref) { return ref.where('parentId', '==', _this.user.uid); });
                //this.posts = this.postsCol.valueChanges();
                _this.usersProfile = _this.userCol.snapshotChanges()
                    .map(function (actions) {
                    return actions.map(function (a) {
                        var data = a.payload.doc.data();
                        var id = a.payload.doc.id;
                        return { id: id, data: data };
                    });
                });
                _this.userLoggedIn = true;
                _this.email = user.email;
                _this.username = user.email; // user.displayName;
                _this.emailVerified = user.emailVerified;
            }
        });
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })).subscribe(function (event) {
            _this.url = event.url;
        });
        if (this.url != '/session/login' && this.url != '/session/register' && this.url != '/session/forgot-password' && this.url != '/session/lockscreen') {
            var elemSidebar = document.querySelector('.sidebar-container');
            /** Perfect scrollbar for sidebar menu **/
            if (window.matchMedia("(min-width: 1280px)").matches) {
                var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemSidebar, {
                    wheelSpeed: 2,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                });
                ps.update();
            }
            /** Perfect scrollbar for chat window **/
            var elemChatbar = document.querySelector('.chat-inner ');
            if (window.matchMedia("(min-width: 1280px)").matches) {
                var pse = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemChatbar);
            }
        }
        if (this.media.isActive('xs') || this.media.isActive('sm') || this.media.isActive('md')) {
            this._mode = 'over';
            this._closeOnClickOutside = true;
            this._showBackdrop = true;
            this._opened = false;
            this.sidebarClosed = false;
        }
        this._mediaSubscription = this.media.media$.subscribe(function (change) {
            var isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') || (change.mqAlias == 'md');
            _this.isMobile = isMobile;
            _this._mode = (isMobile) ? 'over' : 'push';
            _this._closeOnClickOutside = (isMobile) ? true : false;
            _this._showBackdrop = (isMobile) ? true : false;
            _this._opened = !isMobile;
            _this.sidebarClosed = false;
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] && _this.isMobile) {
                _this.sidenav.close();
            }
        });
        //Add class on focus of search box in header
        document.getElementById('search-field').addEventListener("focusin", function () {
            document.getElementById('search-field').parentElement.classList.add("search-active");
        });
        document.getElementById('search-field').addEventListener("focusout", function () {
            document.getElementById('search-field').parentElement.classList.remove("search-active");
        });
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
        this._mediaSubscription.unsubscribe();
    };
    /**
      * toggleFullscreen method is used to show a template in fullscreen.
      */
    MainComponent.prototype.toggleFullscreen = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    /**
      * _toggleOpened method is used to toggle a menu list.
      */
    MainComponent.prototype._toggleOpened = function () {
        this._opened = !this._opened;
        this.sidebarClosed = !this.sidebarClosed;
    };
    /**
      * customizerFunction is used to open and close the customizer.
      */
    MainComponent.prototype.customizerFunction = function () {
        this.customizerIn = !this.customizerIn;
    };
    /**
      * chatWindowFunction is used to open and close the chat window.
      */
    MainComponent.prototype.chatWindowFunction = function () {
        this.chatWindowOpen = !this.chatWindowOpen;
    };
    /**
      * chatSidebarFunction is used to open and close the chat sidebar list.
      */
    MainComponent.prototype.chatSidebarFunction = function () {
        this.chatSidebar = !this.chatSidebar;
    };
    /**
      * changeThemeColor function filter the color for sidebar section.
      */
    MainComponent.prototype.changeThemeColor = function (color) {
        this.themeSkinColor = color;
    };
    /**
      * changeHeaderColor function filter the color for header section.
      */
    MainComponent.prototype.changeHeaderColor = function (color) {
        this.headerSkinColor = color;
    };
    /**
      * addMenuItem is used to add a new menu into menu list.
      */
    MainComponent.prototype.addMenuItem = function () {
        this.menuItems.add({
            state: 'pages',
            name: 'CHANKYA MENU',
            type: 'sub',
            icon: 'icon-plus icons',
            children: [
                { state: 'blank', name: 'SUB MENU1' }
            ]
        });
    };
    /**
      * As router outlet will emit an activate event any time a new component is being instantiated.
      */
    MainComponent.prototype.onActivate = function (e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    };
    /**
      * changeRTL method is used to change the layout of template.
      */
    MainComponent.prototype.changeRTL = function (isChecked) {
        if (isChecked) {
            this.layout = "rtl";
            this.coreService.rtlShowStatus = true;
        }
        else {
            this.layout = "ltr";
            this.coreService.rtlShowStatus = false;
        }
    };
    /**
      * toggleSidebar method is used to switch between Icon sidebar and Sidebar.
      */
    MainComponent.prototype.toggleSidebar = function (isChecked) {
        console.log(isChecked);
        this.miniSidebar = !isChecked;
        if (isChecked) {
            document.getElementById('showSidebar').classList.remove('icon-sidebar');
            document.getElementsByClassName('app')[0].classList.remove("icon-sidebar-wrap");
            document.getElementById('boxed-layout').classList.remove('disabled-checkbox');
        }
        else {
            document.getElementById('showSidebar').className += " icon-sidebar";
            document.getElementsByClassName('app')[0].className += " icon-sidebar-wrap";
            document.getElementById('boxed-layout').className += " disabled-checkbox";
        }
    };
    /**
      * logOut method is used to log out the  template.
      */
    MainComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    /**
      *closeOnClickOutside method is used when click on outside close/open the sidebar.
      */
    MainComponent.prototype.closeOnClickOutside = function () {
        if (this._opened) {
            this.sidebarClosed = false;
        }
        else {
            this.sidebarClosed = true;
        }
        return this._closeOnClickOutside;
    };
    /**
      * boxedLayout method is used to show the box layout.
      */
    MainComponent.prototype.boxedLayout = function (isChecked) {
        if (isChecked) {
            this.boxed = true;
            document.getElementById('icon-sidebar').className += " disabled-checkbox";
        }
        else {
            this.boxed = false;
            document.getElementById('icon-sidebar').classList.remove('disabled-checkbox');
        }
    };
    MainComponent.ctorParameters = function () { return [
        { type: ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TourService"] },
        { type: _service_core_core_service_service__WEBPACK_IMPORTED_MODULE_11__["CoreService"] },
        { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"] },
        { type: _core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_8__["MenuItems"] },
        { type: _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_9__["PageTitleService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainComponent.prototype, "sidenav", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chankya-layout',
            template: __webpack_require__(/*! raw-loader!./main-material.html */ "./node_modules/raw-loader/index.js!./src/app/main/main-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./main-material.scss */ "./src/app/main/main-material.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_tour_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TourService"],
            _service_core_core_service_service__WEBPACK_IMPORTED_MODULE_11__["CoreService"],
            _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"],
            _core_menu_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_8__["MenuItems"],
            _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_9__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/service/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, router, toastr) {
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.toastr = toastr;
        this.isLoggedIn = false;
        this.user = firebaseAuth.authState;
    }
    /*
     *  getLocalStorageUser function is used to get local user profile data.
     */
    AuthService.prototype.getLocalStorageUser = function () {
        this.userData = JSON.parse(localStorage.getItem("userProfile"));
        if (this.userData) {
            this.isLoggedIn = true;
            return true;
        }
        else {
            this.isLoggedIn = false;
            return false;
        }
    };
    /*
    * signupUserProfile method save email and password into firabse &
    * signupUserProfile method save the user sign in data into local storage.
    */
    AuthService.prototype.signupUserProfile = function (value) {
        var _this = this;
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(value.email, value.password)
            .then(function (value) {
            _this.toastr.success('Compte créé avec succès. Merci !');
            _this.setLocalUserProfile(value);
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.toastr.error(err.message);
        });
    };
    /*
     * loginUser fuction used to login.
     */
    AuthService.prototype.loginUser = function (value) {
        var _this = this;
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(value.email, value.password)
            .then(function (value) {
            _this.setLocalUserProfile(value);
            _this.toastr.success('Connexion réussie !');
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.toastr.error(err.message);
        });
    };
    /*
     * resetPassword is used to reset your password.
     */
    AuthService.prototype.resetPassword = function (value) {
        var _this = this;
        this.firebaseAuth.auth.sendPasswordResetEmail(value.email)
            .then(function (value) {
            _this.toastr.success("Email envoyé.");
            _this.router.navigate(['/session/loginone']);
        })
            .catch(function (err) {
            _this.toastr.error(err.message);
        });
    };
    /*
     * logOut function is used to sign out .
     */
    AuthService.prototype.logOut = function () {
        this.firebaseAuth
            .auth
            .signOut();
        localStorage.removeItem("userProfile");
        this.isLoggedIn = false;
        this.toastr.success("Déconnexion effectuée avec succès.");
        this.router.navigate(['/session/loginone']);
    };
    /*
     * setLocalUserProfile function is used to set local user profile data.
     */
    AuthService.prototype.setLocalUserProfile = function (value) {
        localStorage.setItem("userProfile", JSON.stringify(value));
        this.isLoggedIn = true;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/core/core-service.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/core/core-service.service.ts ***!
  \******************************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var CoreService = /** @class */ (function () {
    function CoreService(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.rtlShowStatus = false;
    }
    CoreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
    ]; };
    CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "./src/app/session/coming-soon/coming-soon-component.scss":
/*!****************************************************************!*\
  !*** ./src/app/session/coming-soon/coming-soon-component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vY29taW5nLXNvb24vY29taW5nLXNvb24tY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/session/coming-soon/coming-soon.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/session/coming-soon/coming-soon.component.ts ***!
  \**************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent(translate) {
        this.translate = translate;
    }
    ComingSoonComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    ComingSoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-coming-soon',
            template: __webpack_require__(/*! raw-loader!./coming-soon-component.html */ "./node_modules/raw-loader/index.js!./src/app/session/coming-soon/coming-soon-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./coming-soon-component.scss */ "./src/app/session/coming-soon/coming-soon-component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/session/coming-soonV2/coming-soonV2.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/session/coming-soonV2/coming-soonV2.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vY29taW5nLXNvb25WMi9jb21pbmctc29vblYyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/session/coming-soonV2/coming-soonV2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/session/coming-soonV2/coming-soonV2.component.ts ***!
  \******************************************************************/
/*! exports provided: ComingsoonV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingsoonV2Component", function() { return ComingsoonV2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var ComingsoonV2Component = /** @class */ (function () {
    function ComingsoonV2Component(translate) {
        this.translate = translate;
        this.currentTimeStamp = new Date().getTime();
    }
    ComingsoonV2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.countDownDate = this.currentTimeStamp + (86400 * 10 * 1000);
        setInterval(function () {
            _this.counterDown();
        }, 1000);
    };
    //counterDown method is used to Time calculations for days, hours, minutes and seconds.
    ComingsoonV2Component.prototype.counterDown = function () {
        this.currentTimeStamp = new Date().getTime();
        this.difference = this.countDownDate - this.currentTimeStamp;
        this.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
    };
    ComingsoonV2Component.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    ComingsoonV2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coming-soonV2',
            template: __webpack_require__(/*! raw-loader!./coming-soonV2.component.html */ "./node_modules/raw-loader/index.js!./src/app/session/coming-soonV2/coming-soonV2.component.html"),
            styles: [__webpack_require__(/*! ./coming-soonV2.component.scss */ "./src/app/session/coming-soonV2/coming-soonV2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ComingsoonV2Component);
    return ComingsoonV2Component;
}());



/***/ }),

/***/ "./src/app/session/forgot-password/forgot-password-component.scss":
/*!************************************************************************!*\
  !*** ./src/app/session/forgot-password/forgot-password-component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC1jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/session/forgot-password/forgot-password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/session/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, authService, translate) {
        this.router = router;
        this.authService = authService;
        this.translate = translate;
    }
    /**
      * forgetPassword is used to send a reset password link into your mail.
      */
    ForgotPasswordComponent.prototype.forgetPassword = function (value) {
        if (value.email != undefined) {
            this.authService.resetPassword(value);
        }
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password-component.html */ "./node_modules/raw-loader/index.js!./src/app/session/forgot-password/forgot-password-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./forgot-password-component.scss */ "./src/app/session/forgot-password/forgot-password-component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/session/lockscreen/lockscreen-component.scss":
/*!**************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen-component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vbG9ja3NjcmVlbi9sb2Nrc2NyZWVuLWNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/session/lockscreen/lockscreen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen.component.ts ***!
  \************************************************************/
/*! exports provided: LockScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenComponent", function() { return LockScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var LockScreenComponent = /** @class */ (function () {
    function LockScreenComponent(router, translate) {
        this.router = router;
        this.translate = translate;
    }
    LockScreenComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    LockScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-lockscreen',
            template: __webpack_require__(/*! raw-loader!./lockscreen-component.html */ "./node_modules/raw-loader/index.js!./src/app/session/lockscreen/lockscreen-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./lockscreen-component.scss */ "./src/app/session/lockscreen/lockscreen-component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], LockScreenComponent);
    return LockScreenComponent;
}());



/***/ }),

/***/ "./src/app/session/loginone/loginone-component.scss":
/*!**********************************************************!*\
  !*** ./src/app/session/loginone/loginone-component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host zxing-scanner::ng-deep {\n  max-height: 10vh;\n  max-width: 10vw;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94YXZpZXJsb21iaW9uL0xvY2FsL0FOR1VMQVIvZmxvd2VyZmxvdy9zcmMvYXBwL3Nlc3Npb24vbG9naW5vbmUvbG9naW5vbmUtY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nlc3Npb24vbG9naW5vbmUvbG9naW5vbmUtY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXNzaW9uL2xvZ2lub25lL2xvZ2lub25lLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qgenhpbmctc2Nhbm5lcjo6bmctZGVlcCB7XG4gICAgbWF4LWhlaWdodDogMTB2aDtcbiAgICBtYXgtd2lkdGg6IDEwdnc7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9IiwiOmhvc3Qgenhpbmctc2Nhbm5lcjo6bmctZGVlcCB7XG4gIG1heC1oZWlnaHQ6IDEwdmg7XG4gIG1heC13aWR0aDogMTB2dztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/session/loginone/loginone.component.ts":
/*!********************************************************!*\
  !*** ./src/app/session/loginone/loginone.component.ts ***!
  \********************************************************/
/*! exports provided: LoginoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginoneComponent", function() { return LoginoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");





var LoginoneComponent = /** @class */ (function () {
    function LoginoneComponent(router, authService, translate) {
        this.router = router;
        this.authService = authService;
        this.translate = translate;
        this.hasCameras = false;
        this.qrResultsArray = [];
    }
    LoginoneComponent.prototype.ngOnInit = function () {
    };
    LoginoneComponent.prototype.handleQrCodeResult = function (resultString) {
        this.qrResultString = resultString;
        if (!this.qrResultsArray.includes(resultString)) {
            this.qrResultsArray.push(resultString);
        }
    };
    LoginoneComponent.prototype.handleQrCodeValidation = function (resultString) {
        console.log('Validation: ', resultString);
    };
    LoginoneComponent.prototype.onDeviceSelectChange = function (selectedValue) {
        console.log('Selection changed: ', selectedValue);
    };
    // when email and password is correct, user logged in.
    LoginoneComponent.prototype.logIn = function (value) {
        this.authService.loginUser(value);
    };
    LoginoneComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    LoginoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-loginone-session',
            template: __webpack_require__(/*! raw-loader!./loginone-component.html */ "./node_modules/raw-loader/index.js!./src/app/session/loginone/loginone-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./loginone-component.scss */ "./src/app/session/loginone/loginone-component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], LoginoneComponent);
    return LoginoneComponent;
}());



/***/ }),

/***/ "./src/app/session/maintenanceV2/maintenanceV2.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/session/maintenanceV2/maintenanceV2.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vbWFpbnRlbmFuY2VWMi9tYWludGVuYW5jZVYyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/session/maintenanceV2/maintenanceV2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/session/maintenanceV2/maintenanceV2.component.ts ***!
  \******************************************************************/
/*! exports provided: MaintenanceV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceV2Component", function() { return MaintenanceV2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var MaintenanceV2Component = /** @class */ (function () {
    function MaintenanceV2Component(translate) {
        this.translate = translate;
    }
    MaintenanceV2Component.prototype.ngOnInit = function () {
    };
    MaintenanceV2Component.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    MaintenanceV2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenanceV2',
            template: __webpack_require__(/*! raw-loader!./maintenanceV2.component.html */ "./node_modules/raw-loader/index.js!./src/app/session/maintenanceV2/maintenanceV2.component.html"),
            styles: [__webpack_require__(/*! ./maintenanceV2.component.scss */ "./src/app/session/maintenanceV2/maintenanceV2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], MaintenanceV2Component);
    return MaintenanceV2Component;
}());



/***/ }),

/***/ "./src/app/session/not-found/not-found-component.scss":
/*!************************************************************!*\
  !*** ./src/app/session/not-found/not-found-component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vbm90LWZvdW5kL25vdC1mb3VuZC1jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/session/not-found/not-found.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/session/not-found/not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router, translate) {
        this.router = router;
        this.translate = translate;
    }
    NotFoundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found-component.html */ "./node_modules/raw-loader/index.js!./src/app/session/not-found/not-found-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./not-found-component.scss */ "./src/app/session/not-found/not-found-component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/session/register/register-component.scss":
/*!**********************************************************!*\
  !*** ./src/app/session/register/register-component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vcmVnaXN0ZXIvcmVnaXN0ZXItY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/session/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/session/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, formBuilder, translate) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.ngForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.emailPattern)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    //register method is used to sign up on the template.
    RegisterComponent.prototype.register = function () {
        if (this.ngForm.valid) {
            this.authService.signupUserProfile(this.ngForm.value);
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-register-session',
            template: __webpack_require__(/*! raw-loader!./register-component.html */ "./node_modules/raw-loader/index.js!./src/app/session/register/register-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./register-component.scss */ "./src/app/session/register/register-component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/session/session.module.ts":
/*!*******************************************!*\
  !*** ./src/app/session/session.module.ts ***!
  \*******************************************/
/*! exports provided: SessionDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDemoModule", function() { return SessionDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _loginone_loginone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loginone/loginone.component */ "./src/app/session/loginone/loginone.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/session/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/session/forgot-password/forgot-password.component.ts");
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ "./src/app/session/coming-soon/coming-soon.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var _subscribes_subscribes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subscribes/subscribes.component */ "./src/app/session/subscribes/subscribes.component.ts");
/* harmony import */ var _under_maintance_under_maintance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./under-maintance/under-maintance.component */ "./src/app/session/under-maintance/under-maintance.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/session/not-found/not-found.component.ts");
/* harmony import */ var _coming_soonV2_coming_soonV2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./coming-soonV2/coming-soonV2.component */ "./src/app/session/coming-soonV2/coming-soonV2.component.ts");
/* harmony import */ var _maintenanceV2_maintenanceV2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./maintenanceV2/maintenanceV2.component */ "./src/app/session/maintenanceV2/maintenanceV2.component.ts");
/* harmony import */ var _session_routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./session.routing */ "./src/app/session/session.routing.ts");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm5/zxing-ngx-scanner.js");



















var SessionDemoModule = /** @class */ (function () {
    function SessionDemoModule() {
    }
    SessionDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_18__["ZXingScannerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_session_routing__WEBPACK_IMPORTED_MODULE_17__["SessionRoutes"])
            ],
            declarations: [
                _loginone_loginone_component__WEBPACK_IMPORTED_MODULE_7__["LoginoneComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
                _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_10__["ComingSoonComponent"],
                _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_11__["LockScreenComponent"],
                _subscribes_subscribes_component__WEBPACK_IMPORTED_MODULE_12__["SubscribesComponent"],
                _under_maintance_under_maintance_component__WEBPACK_IMPORTED_MODULE_13__["UnderMaintanceComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _coming_soonV2_coming_soonV2_component__WEBPACK_IMPORTED_MODULE_15__["ComingsoonV2Component"],
                _maintenanceV2_maintenanceV2_component__WEBPACK_IMPORTED_MODULE_16__["MaintenanceV2Component"]
            ]
        })
    ], SessionDemoModule);
    return SessionDemoModule;
}());



/***/ }),

/***/ "./src/app/session/session.routing.ts":
/*!********************************************!*\
  !*** ./src/app/session/session.routing.ts ***!
  \********************************************/
/*! exports provided: SessionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRoutes", function() { return SessionRoutes; });
/* harmony import */ var _loginone_loginone_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginone/loginone.component */ "./src/app/session/loginone/loginone.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/session/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/session/forgot-password/forgot-password.component.ts");
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ "./src/app/session/coming-soon/coming-soon.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var _subscribes_subscribes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribes/subscribes.component */ "./src/app/session/subscribes/subscribes.component.ts");
/* harmony import */ var _under_maintance_under_maintance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./under-maintance/under-maintance.component */ "./src/app/session/under-maintance/under-maintance.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/session/not-found/not-found.component.ts");
/* harmony import */ var _coming_soonV2_coming_soonV2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coming-soonV2/coming-soonV2.component */ "./src/app/session/coming-soonV2/coming-soonV2.component.ts");
/* harmony import */ var _maintenanceV2_maintenanceV2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenanceV2/maintenanceV2.component */ "./src/app/session/maintenanceV2/maintenanceV2.component.ts");










var SessionRoutes = [{
        path: '',
        redirectTo: 'loginone',
        pathMatch: 'full',
    }, {
        path: '',
        children: [{
                path: 'loginone',
                component: _loginone_loginone_component__WEBPACK_IMPORTED_MODULE_0__["LoginoneComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
            }, {
                path: 'forgot-password',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
            }, {
                path: 'coming-soon',
                component: _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_3__["ComingSoonComponent"]
            }, {
                path: 'coming-soonV2',
                component: _coming_soonV2_coming_soonV2_component__WEBPACK_IMPORTED_MODULE_8__["ComingsoonV2Component"]
            }, {
                path: 'lockscreen',
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__["LockScreenComponent"]
            }, {
                path: 'not-found',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
            }, {
                path: 'subscribes',
                component: _subscribes_subscribes_component__WEBPACK_IMPORTED_MODULE_5__["SubscribesComponent"]
            }, {
                path: 'undermaintance',
                component: _under_maintance_under_maintance_component__WEBPACK_IMPORTED_MODULE_6__["UnderMaintanceComponent"]
            }, {
                path: 'maintanceV2',
                component: _maintenanceV2_maintenanceV2_component__WEBPACK_IMPORTED_MODULE_9__["MaintenanceV2Component"]
            }]
    }];


/***/ }),

/***/ "./src/app/session/subscribes/subscribes.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/session/subscribes/subscribes.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vc3Vic2NyaWJlcy9zdWJzY3JpYmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/session/subscribes/subscribes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/session/subscribes/subscribes.component.ts ***!
  \************************************************************/
/*! exports provided: SubscribesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribesComponent", function() { return SubscribesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var SubscribesComponent = /** @class */ (function () {
    function SubscribesComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    SubscribesComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Subscribes");
    };
    SubscribesComponent.ctorParameters = function () { return [
        { type: _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    SubscribesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-subscribes',
            template: __webpack_require__(/*! raw-loader!./subscribes.component.html */ "./node_modules/raw-loader/index.js!./src/app/session/subscribes/subscribes.component.html"),
            styles: [__webpack_require__(/*! ./subscribes.component.scss */ "./src/app/session/subscribes/subscribes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SubscribesComponent);
    return SubscribesComponent;
}());



/***/ }),

/***/ "./src/app/session/under-maintance/under-maintance.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/session/under-maintance/under-maintance.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vdW5kZXItbWFpbnRhbmNlL3VuZGVyLW1haW50YW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/session/under-maintance/under-maintance.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/session/under-maintance/under-maintance.component.ts ***!
  \**********************************************************************/
/*! exports provided: UnderMaintanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderMaintanceComponent", function() { return UnderMaintanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var UnderMaintanceComponent = /** @class */ (function () {
    function UnderMaintanceComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    UnderMaintanceComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Under Maintance");
    };
    UnderMaintanceComponent.ctorParameters = function () { return [
        { type: _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    UnderMaintanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ms-under-maintance',
            template: __webpack_require__(/*! raw-loader!./under-maintance.component.html */ "./node_modules/raw-loader/index.js!./src/app/session/under-maintance/under-maintance.component.html"),
            styles: [__webpack_require__(/*! ./under-maintance.component.scss */ "./src/app/session/under-maintance/under-maintance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], UnderMaintanceComponent);
    return UnderMaintanceComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["ChankyaAppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xavierlombion/Local/ANGULAR/flowerflow/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map