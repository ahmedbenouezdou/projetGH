angular.module('loginModule').config(function($stateProvider) {
    $stateProvider.state('login', {
        name: 'login',
        url: '/login',
        views: {
            login:{
                component: 'loginComponent'
            }
        }


    });
});