angular.module('demandeLeaveModule').config(function($stateProvider) {
    $stateProvider .state('account.validDemande',{
        url: '/validDemande',
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            "detail":{
                component: 'demandeLeaveComponent'
            }

        }
    });
});