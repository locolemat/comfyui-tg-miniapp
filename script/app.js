var app = angular.module("tgMiniApp", ["ngRoute", "ngAnimate"]).controller("tgMiniAppController", function($scope){
    
})

app.config(function($routeProvider){
    $routeProvider.when("/account", {
        templateUrl: "./account.html",
        controller: "accountCtrl"
    })
    $routeProvider.when("/generate", {
        templateUrl: "./generate.html",
        controller: "generateCtrl"
    })
})

app.controller("accountCtrl", function($scope){
    // $scope.accordions = [
    //     {
    //         headerText: "Статистика",
    //         contentHTML: "components/accordion/content/stats.html",
    //         open: true
    //     },
    //     {
    //         headerText: "История генераций",
    //         contentHTML: "components/accordion/content/gen_history.html",
    //         open: false
    //     }
    // ]
    $scope.modelOption = [
        'model1', 'model2', 'model3', 'model4'
    ]

    $scope.videoOption = [
        'video_model1', 'video_model2', 'video_model3'
    ]

    $scope.selectedModel = $scope.modelOption[0]
    $scope.selectedVideoModel = $scope.videoOption[0]

    $scope.videoLength = 3;
    $scope.videoFPS = 14;
    $scope.decrementValue = function(val, min){
        if($scope[val] > min){
            $scope[val]--;
        }   
    }
    $scope.incrementValue = function(val, max){
        if($scope[val] < max){
            $scope[val]++;
        }   
    }
    $scope.useDefaultNegPrompt = true;
    $scope.replaceDefaultNegPrompt = false;

    $scope.defaultNegPromptText = "text, watermark"

    $scope.statRecords = [
        {
            "label": "Всего генераций: ",
            "value": 0
        },
        {
            "label": "Генерации картинок: ",
            "value": 0
        },
        {
            "label": "Генерации видео: ",
            "value": 0
        },
        {
            "label": "Самое длинное видео: ",
            "value": 0
        },
        {
            "label": "Самый частый размер: ",
            "value": 0
        },
        {
            "label": "Любимый тип генерации: ",
            "value": "Картинка в картинку"
        },
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