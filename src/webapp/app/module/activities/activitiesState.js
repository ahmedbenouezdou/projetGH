angular.module('activitiesModule').config(function($stateProvider) {
    $stateProvider.state('account.activities',{
        url: '/activities',
        views: {
            "detail":{
                component: 'activitiescomponent'
            }
        }
    });

});