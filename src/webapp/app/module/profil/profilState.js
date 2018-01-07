angular.module('profilModule').config(function($stateProvider) {
    $stateProvider .state('account.profil',{
        url: '/profil',
        views: {
            "detail":{
                component: 'profilComponent'
            }
        }
    });
});