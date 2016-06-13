!function(){"use strict";angular.module("asada",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("asada").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("asada").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,n,a,o){var r,i=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){i.type(e).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){i.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}function n(e,t){function n(){return a().then(function(){e.info("Activated Contributors View")})}function a(){return t.getContributors(10).then(function(e){return o.contributors=e,o.contributors})}var o=this;o.contributors=[],n()}n.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return a}e.$inject=["malarkey"],angular.module("asada").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function n(n){function o(e){return e.data}function r(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(a+"/contributors?per_page="+n).then(o)["catch"](r)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:a,getContributors:n};return o}e.$inject=["$log","$http"],angular.module("asada").factory("githubContributor",e)}(),function(){"use strict";function e(){var e=this;e.sizes=["small (4-inch)","medium (8-inch)","large (12-inch)","insane (16-inch)"],e.tortillaTypes=["Flour","Corn","Lettuce","Cabbage"],e.selectedWrapper="",e.meats=[{category:"beef",name:"Asada"},{category:"pork",name:"Carnitas"},{category:"pork",name:"Al Pastor"},{category:"seafood",name:"Grilled Fish"},{category:"seafood",name:"Fried Fish"},{category:"seafood",name:"Fried Shrimp"},{category:"seafood",name:"Grilled Shrimp"},{category:"chicken",name:"Grilled Chicken"},{category:"chicken",name:"Fried Chicken"}],e.toppings=[{name:"Onions",type:"vegetable",value:1,restriction:"none"},{name:"Grilled Onions",type:"vegetable",value:1,restriction:"none"},{name:"Grilled Peppers",type:"vegetable",value:1,restriction:"none"},{name:"Tomatoes",type:"vegetable",value:2,restriction:"none"},{name:"Corn",type:"vegetable",value:2,restriction:"none"},{name:"Pineapple",type:"vegetable",value:3,restriction:"Al Pastor"},{name:"Jalapenos",type:"vegetable",value:3,restriction:"none"},{name:"Pickled Jalapenos",type:"vegetable",value:3,restriction:"Al Pastor"},{name:"Crema Fresca",type:"sauce",value:4,restriction:"none"},{name:"Guacamole",type:"sauce",value:4,restriction:"none"},{name:"Chili Lime Guacamole",type:"sauce",value:4,restriction:"none"},{name:"Cilantro",type:"vegetable",value:5,restriction:"none"},{name:"Cabbage",type:"vegetable",value:5,restriction:"none"},{name:"Pickled Radishes",type:"vegetable",value:5,restriction:"none"}]}angular.module("asada").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("asada").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("asada").config(e)}(),function(){"use strict";angular.module("asada").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("asada").config(e)}(),angular.module("asada").run(["$templateCache",function(e){e.put("app/main/main.html",'<div layout=vertical layout-fill><md-content><md-content layout-gt-lg=row layout-align="center start"><h1 class=md-title>Pick your taco wrapper</h1><div layout=row><div class=select-container><md-input-container><label>Size</label><md-select ng-model=size><md-option ng-repeat="size in main.sizes" value={{size}}>{{size}}</md-option></md-select></md-input-container></div><div class=select-container><md-input-container><label>Wrapper Type</label><md-select ng-model=selectedWraper><md-option ng-value=type ng-repeat="type in main.tortillaTypes ">{{type}}</md-option></md-select></md-input-container></div></div><p ng-if=selectedWraper>You ordered a {{size.toLowerCase()}} tortilla with {{selectedWraper}} wrapper.</p></md-content><hr><md-content layout-gt-md=row layout-align="center start"><h1 class=md-title>Pick your protein</h1><div layout=row><md-input-container><md-select ng-model=selectedProtein><md-optgroup label=Beef><md-option ng-value=meat.name ng-repeat="meat in main.meats | filter: {category: \'beef\' }">{{meat.name}}</md-option></md-optgroup><md-optgroup label=Pork><md-option ng-value=meat.name ng-repeat="meat in main.meats | filter: {category: \'pork\' }">{{meat.name}}</md-option></md-optgroup><md-optgroup label=Chicken><md-option ng-value=meat.name ng-repeat="meat in main.meats | filter: {category: \'chicken\' }">{{meat.name}}</md-option></md-optgroup><md-optgroup label=Seafood><md-option ng-value=meat.name ng-repeat="meat in main.meats | filter: {category: \'seafood\' }">{{meat.name}}</md-option></md-optgroup></md-select></md-input-container></div></md-content><hr><md-content><h2 class=md-title>Toppings</h2><md-list><md-list-item class="md-2-line veggie-option" ng-repeat="topping in main.toppings" layout=row ng-show="topping.restriction == \'none\' || selectedProtein ==\'{{topping.restriction}}\' "><div class="md-item-text md-whiteframe-z1" flex><md-checkbox class="md-warn md-align-top-left"><h3>{{ topping.name }}</h3></md-checkbox></div></md-list-item></md-list></md-content></md-content></div>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-891f0322f4.js.map
