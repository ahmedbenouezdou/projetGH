angular.module('activitiesModule').config(function($stateProvider) {
    $stateProvider.state('account.activities',{
        url: '/activities',
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            "detail":{
                component: 'activitiescomponent'
            }
        }
    });

});