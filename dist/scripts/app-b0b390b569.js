!function(){"use strict";angular.module("asada",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("asada").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("asada").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,a,n,o){var i,r=e(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){r.type(e).pause()["delete"]()}),i=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){r.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){i()})}function a(e,t){function a(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return t.getContributors(10).then(function(e){return o.contributors=e,o.contributors})}var o=this;o.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n}e.$inject=["malarkey"],angular.module("asada").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function a(a){function o(e){return e.data}function i(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return a||(a=30),t.get(n+"/contributors?per_page="+a).then(o)["catch"](i)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:n,getContributors:a};return o}e.$inject=["$log","$http"],angular.module("asada").factory("githubContributor",e)}(),function(){"use strict";function e(){var e=this;e.sizes=["small (4-inch)","medium (8-inch)","large (12-inch)","insane (16-inch)"],e.tortillaTypes=["Flour","Corn","Lettuce","Cabbage"],e.selectedWrapper="",e.meats=[{category:"beef",name:"Asada"},{category:"pork",name:"Carnitas"},{category:"pork",name:"Al Pastor"},{category:"fish",name:"Grilled Fish"},{category:"fish",name:"Fried Fish"},{category:"chicken",name:"Grilled Chicken"},{category:"chicken",name:"Fried Chicken"}],e.toppings=[{name:"Onions",type:"vegetable",value:1,restriction:"none"},{name:"Grilled Onions",type:"vegetable",value:1,restriction:"none"},{name:"Grilled Peppers",type:"vegetable",value:1,restriction:"none"},{name:"Tomatoes",type:"vegetable",value:2,restriction:"none"},{name:"Corn",type:"vegetable",value:2,restriction:"none"},{name:"Pineapple",type:"vegetable",value:3,restriction:"none"},{name:"Jalapenos",type:"vegetable",value:3,restriction:"none"},{name:"Pickled Jalapenos",type:"vegetable",value:3,restriction:"Al Pastor"},{name:"Crema Fresca",type:"sauce",value:4,restriction:"none"},{name:"Guacamole",type:"sauce",value:4,restriction:"none"},{name:"Chili Lime Guacamole",type:"sauce",value:4,restriction:"none"},{name:"Cilantro",type:"vegetable",value:5,restriction:"none"},{name:"Cabbage",type:"vegetable",value:5,restriction:"none"},{name:"Pickled Radishes",type:"vegetable",value:5,restriction:"none"}]}angular.module("asada").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("asada").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("asada").config(e)}(),function(){"use strict";angular.module("asada").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("asada").config(e)}(),angular.module("asada").run(["$templateCache",function(e){e.put("app/main/main.html",'<div layout=vertical layout-fill><md-content><md-content layout-gt-sm=row layout-padding><h1 class=md-title>Pick your taco wrapper</h1><div layout=row><md-input-container style="margin-right: 10px"><label>Size</label><md-select ng-model=size><md-option ng-repeat="size in main.sizes" value={{size}}>{{size}}</md-option></md-select></md-input-container><md-input-container><label>Wrapper Type</label><md-select ng-model=selectedWraper><md-option ng-value=type ng-repeat="type in main.tortillaTypes ">{{type}}</md-option></md-select></md-input-container></div><p ng-if=selectedWraper>You ordered a {{size.toLowerCase()}} tortilla with {{selectedWraper}} wrapper.</p></md-content><md-content><h1 class=md-title>Pick your protein</h1><md-select ng-model=selectedProtein><md-optgroup label=Beef><md-option ng-value=meat.name ng-repeat="meat in main.meats | filter: {category: \'beef\' }">{{meat.name}}</md-option></md-optgroup><md-optgroup label=Pork><md-option ng-value=meat.name ng-repeat="meat in main.meats | filter: {category: \'pork\' }">{{meat.name}}</md-option></md-optgroup><md-optgroup label=Chicken><md-option ng-value=meat.name ng-repeat="meat in main.meats | filter: {category: \'chicken\' }">{{meat.name}}</md-option></md-optgroup><md-optgroup label=Fish><md-option ng-value=meat.name ng-repeat="meat in main.meats | filter: {category: \'fish\' }">{{meat.name}}</md-option></md-optgroup></md-select></md-content><md-content></md-content><hr><!--<div flex-xs flex="50">--><!--<div layout-xs="column" flex-xs="100">--><!--<md-checkbox ng-repeat="topping in main.toppings"  class="md-warn md-align-top-left" >--><!--Checkbox 2 (md-warn)  <br/>--><!--<br/>--><!--{{ topping.name }}--><!--</md-checkbox>--><!--</div>--><!--</div>--><hr><!--<md-content layout-gt-sm="row" layout-padding>--><!--<div>--><!--<md-input-container>--><!--<label>Title</label>--><!--<input ng-model="vm.user.title">--><!--</md-input-container>--><!--<md-input-container>--><!--<label>Email</label>--><!--<input ng-model="vm.user.email" type="email">--><!--</md-input-container>--><!--</div>--><!--</md-content>--><!--<md-content layout-padding>--><!--<div>--><!--<form name="userForm">--><!--<div layout-gt-xs="row">--><!--<md-input-container class="md-block" flex-gt-xs>--><!--<label>Company (Disabled)</label>--><!--<input ng-model="vm.user.company" disabled>--><!--</md-input-container>--><!--<md-datepicker ng-model="vm.user.submissionDate" md-placeholder="Enter date">--><!--</md-datepicker>--><!--</div>--><!--<div layout-gt-sm="row">--><!--<md-input-container class="md-block" flex-gt-sm>--><!--<label>First name</label>--><!--<input ng-model="vm.user.firstName">--><!--</md-input-container>--><!--<md-input-container class="md-block" flex-gt-sm>--><!--<label>Long Last Name That Will Be Truncated And 3 Dots (Ellipsis) Will Appear At The End</label>--><!--<input ng-model="theMax">--><!--</md-input-container>--><!--</div>--><!--<md-input-container class="md-block">--><!--<label>Address</label>--><!--<input ng-model="vm.user.address">--><!--</md-input-container>--><!--<md-input-container md-no-float class="md-block">--><!--<input ng-model="vm.user.address2" placeholder="Address 2">--><!--</md-input-container>--><!--<div layout-gt-sm="row">--><!--<md-input-container class="md-block" flex-gt-sm>--><!--<label>City</label>--><!--<input ng-model="vm.user.city">--><!--</md-input-container>--><!--<md-input-container class="md-block" flex-gt-sm>--><!--<label>State</label>--><!--<md-select ng-model="vm.user.state">--><!--<md-option ng-repeat="state in vm.states" value="{{state.abbrev}}">--><!--{{state.abbrev}}--><!--</md-option>--><!--</md-select>--><!--</md-input-container>--><!--<md-input-container class="md-block" flex-gt-sm>--><!--<label>Postal Code</label>--><!--<input name="postalCode" ng-model="vm.user.postalCode" placeholder="12345"--><!--required ng-pattern="/^[0-9]{5}$/" md-maxlength="5">--><!--<div ng-messages="userForm.postalCode.$error" role="alert" multiple>--><!--<div ng-message="required" class="my-message">You must supply a postal code.</div>--><!--<div ng-message="pattern" class="my-message">That doesn\'t look like a valid postal--><!--code.--><!--</div>--><!--<div ng-message="md-maxlength" class="my-message">--><!--Don\'t use the long version silly...we don\'t need to be that specific...--><!--</div>--><!--</div>--><!--</md-input-container>--><!--</div>--><!--<md-input-container class="md-block">--><!--<label>Biography</label>--><!--<textarea ng-model="vm.user.biography" md-maxlength="150" rows="5" md-select-on-focus></textarea>--><!--</md-input-container>--><!--</form>--><!--</div>--><!--</md-content>--><!--<header>--><!--<acme-navbar creation-date="main.creationDate"></acme-navbar>--><!--</header>--><!--<section class="jumbotron">--><!--<h1>\'Allo, \'Allo!</h1>--><!--<p class="lead">--><!--<img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>--><!--Always a pleasure scaffolding your apps.--><!--</p>--><!--<md-button class="md-raised animated infinite" ng-class="main.classAnimation" ng-click="main.showToastr()">Splendid Toastr</md-button>--><!--<p>--><!--With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey>--><!--</p>--><!--</section>--><!--<div class="techs" layout-align="center">--><!--<md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'">--><!--<md-card-content>--><!--<img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}">--><!--<h3 class="md-title">{{ awesomeThing.title }}</h3>--><!--<p>{{ awesomeThing.description }}</p>--><!--</md-card-content>--><!--<div class="md-action-buttons">--><!--<md-button ng-href="{{ awesomeThing.url }}">Website</md-button>--><!--</div>--><!--</md-card>--><!--</div>--></md-content></div>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-b0b390b569.js.map
