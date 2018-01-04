function loginController($state) {
    var ctrl = this;

    ctrl.$onInit=function $onInit(){

    };

    ctrl.login=function login(){
        $state.go('account.home')
    };


}

angular.module('loginModule').component('loginComponent', {
    templateUrl: 'app/module/login/login.html',
    controller: loginController,
    controllerAs: 'ctrl'

});