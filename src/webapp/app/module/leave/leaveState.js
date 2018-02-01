angular.module('leaveRequestModule').config(function($stateProvider) {
    $stateProvider.state('account.leaveRequest', {
        name: 'account.leaveRequest',
        url: '/leaveRequest',
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            'detail':{
                component: 'leaveRequestComponent'
            }
        }


    });

});