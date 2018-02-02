angular.module('myProfilModule').config(function($stateProvider) {
    $stateProvider .state('account.myProfil',{
        url: '/myProfil',
        views: {
            menu:{
            templateUrl: 'app/module/account/menu.html'
        },
            "detail":{
                templateUrl: 'app/module/myProfil/myProfil.html'
            }
        }
    }).state('account.myProfil.infoProfil',{
        url: '/infoProfil',
        views: {
            "detailProfil":{
                component: 'myProfilComponent'
            }
        }
    }).state('account.myProfil.security',{
        url: '/security',
        views: {
            "detailProfil":{
                component: 'securityComponent'
            }
        }
    });

});