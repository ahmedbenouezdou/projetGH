function userController($state) {
    var ctrl = this;
    /**
     *
     */
    ctrl.$onInit=function $onInit(){

    };
    /**
     *
     */
    ctrl.addUser=function addUser(){
        $state.go('account.editUser')

    };
    /**
     *
     */
    ctrl.removeUser=function removeUser(){

    };
    /**
     *
     */
    ctrl.openDetail=function openDetail(){

    };
    /**
     *
     */
    ctrl.editUser=function editUser(idUser){
        $state.go('account.editUser',{idUser:'gv3976'})


    };
    /**
     *
     */
    ctrl.activeUser=function activeUser(){

    }
}

angular.module('userModule').component('userComponent', {
    templateUrl: 'app/module/user/user.html',
    controller: userController,
    controllerAs: 'ctrl'

});