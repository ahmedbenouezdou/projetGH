angular.module('userModule').config(function($stateProvider) {
    $stateProvider .state('account.user',{
        url: '/user',
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            "detail":{
                component: 'userComponent'
            }
        }
    }).state('account.editUser',{
        url: '/editUser/?:idUser',
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            "detail":{
                component: 'editUserComponent'
            }
        }
    });
});