angular.module('myProfilModule').config(function($stateProvider) {
    $stateProvider .state('account.myProfil',{
        url: '/myProfil',
        views: {
            "detail":{
                component: 'myProfilComponent'
            }
        }
    });

});