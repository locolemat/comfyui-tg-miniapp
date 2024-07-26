var app = angular.module("tgMiniApp", ["ngRoute", "ngAnimate"]).controller("tgMiniAppController", function($scope){
    
})
app.config(function($routeProvider){
    $routeProvider.when("/stats", {
        templateUrl: "./stats.html",
        controller: "accordionCtrl"
    })
})
app.controller("accordionCtrl", function($scope){
    $scope.accordions = [
        {
            headerText: "Статистика",
            contentHTML: "components/accordion/content/stats.html",
            open: true
        },
        {
            headerText: "История генераций",
            contentHTML: "components/accordion/content/gen_history.html",
            open: false
        }
    ]
})