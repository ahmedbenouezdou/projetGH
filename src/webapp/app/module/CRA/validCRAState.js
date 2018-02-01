angular.module('validActivitiesModule').config(function($stateProvider) {
    $stateProvider .state('account.validCRA',{
        url: '/validCRA',
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            "detail":{
                component: 'validActivitiescomponent'
            }
        }
    });

});

