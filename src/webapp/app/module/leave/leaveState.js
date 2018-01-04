angular.module('leaveRequestModule').config(function($stateProvider) {
    $stateProvider.state('account.leaveRequest', {
        name: 'account.leaveRequest',
        url: '/leaveRequest',
        views: {
            'detail':{
                component: 'leaveRequestComponent'
            }
        }


    });

});