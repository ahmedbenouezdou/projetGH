angular.module('userModule').config(function($stateProvider) {
    $stateProvider .state('account.user',{
        url: '/user',
        views: {
            "detail":{
                component: 'userComponent'
            }
        }
    }).state('account.editUser',{
        url: '/editUser/?:idUser',
        views: {
            "detail":{
                component: 'editUserComponent'
            }
        }
    });
});