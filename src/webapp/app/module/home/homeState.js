angular.module('homeModule').config(function($stateProvider) {
    $stateProvider .state('account.home',{
        url: '/home',
        views: {
            "detail":{
                component: 'homeComponent'
            }
        }
    });

});