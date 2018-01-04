angular.module('profilModule').config(function($stateProvider) {
    $stateProvider .state('account.profil',{
        url: '/profil',
        views: {
            "detail":{
                component: 'profilComponent'
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