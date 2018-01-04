angular.module('validActivitiesModule').config(function($stateProvider) {
    $stateProvider .state('account.validCRA',{
        url: '/validCRA',
        views: {
            "detail":{
                component: 'validActivitiescomponent'
            }
        }
    });

});

