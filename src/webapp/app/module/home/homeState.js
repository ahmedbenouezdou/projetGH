angular.module('homeModule').config(function($stateProvider) {
    $stateProvider .state('account.home',{
        url: '/home',
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            "detail":{
                component: 'homeComponent'
            }
        }
    });

});