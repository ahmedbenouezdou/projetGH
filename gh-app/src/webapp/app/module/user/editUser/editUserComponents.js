function editUserController($state,$stateParams) {
    var ctrl = this;
    /**
     *
     */
    ctrl.$onInit=function $onInit(){
        if($stateParams.idUser===undefined)
        ctrl.user={};
        else
            ctrl.user={};

    };
    /**
     *
     */
    ctrl.updatEditUser=function updatEditUser(){
        console.log(ctrl.user);
    };
    /**
     *
     */
    ctrl.cleanEditUser=function cleanEditUser(){
        if($stateParams.idUser===undefined){
            ctrl.user={};

        }else{
            $state.go('account.user')

        }

    }
}

editUserController.$injector = ['$stateParams'];


angular.module('userModule').component('editUserComponent', {
    templateUrl: 'app/module/user/editUser/editUser.html',
    controller: editUserController,
    controllerAs: 'ctrl'

});