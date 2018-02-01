angular.module('myProfilModule').config(function($stateProvider) {
    $stateProvider .state('account.myProfil',{
        url: '/myProfil',
        views: {
            menu:{
            templateUrl: 'app/module/account/menu.html'
        },
            "detail":{
                component: 'myProfilComponent'
            }
        }
    });

});