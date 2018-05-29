appPersonnel.controller('accountCtrl', function ($scope, $state) {


    $scope.loginOut = function loginOut() {
        $state.go('login')
    }
});