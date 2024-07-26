var app = angular.module("tgMiniApp", ["ngRoute", "ngAnimate"]).controller("tgMiniAppController", function($scope){
    
})

app.config(function($routeProvider){
    $routeProvider.when("/stats", {
        templateUrl: "./stats.html",
        controller: "accordionCtrl"
    })
    $routeProvider.when("/generate", {
        templateUrl: "./generate.html",
        controller: "generateCtrl"
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

app.controller("generateCtrl", function($scope){
    $scope.cards = [
        {
            imageURL : "",
            header: "Картинка из текста",
            desc: "Офигенная генерация"
        },
        {
            imageURL : "",
            header: "Текст в видео",
            desc: "Охуенная генерация"
        },
        {
            imageURL : "",
            header: "Картинка в видео",
            desc: "Опиздохуительная генерация"
        },
        {
            imageURL : "",
            header: "Картинка в картинку",
            desc: "Ебанутейшая генерация"
        }
    ]
})