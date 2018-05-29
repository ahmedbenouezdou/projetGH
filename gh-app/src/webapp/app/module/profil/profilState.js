angular.module('profilModule').config(function($stateProvider) {
    $stateProvider .state('account.profil',{
        url: '/profil',
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            "detail":{
                component: 'profilComponent'
            }
        }
    });
});