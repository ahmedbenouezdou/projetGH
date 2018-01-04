function leaveRequestComponent() {
    var ctrl = this;


    ctrl.$onInit = function $onInit() {
        ctrl.newLeave={};
        ctrl.listLeave=[];
        ctrl.initvar = 'hhh';
        ctrl.motifConge = [
            {titre: 'RTT', codeMotif: 0},
            {titre: 'Congés Payés', codeMotif: 0},
            {titre: 'Congés Exceptionnels', codeMotif: 0},
            {titre: 'Intercontrat', codeMotif: 0},
            {titre: 'Autres Absences', codeMotif: 0},
            {titre: 'Formation', codeMotif: 0},
            {titre: 'Maladie', codeMotif: 0}
        ]
    };

    ctrl.addLeave = function addLeave() {

        ctrl.listLeave.push({
            title:ctrl.newLeave.title,
            startsAt:ctrl.newActiv.startsAt,
            endsAt:ctrl.newActiv.endsAt,
            nbday:diffdate(moment(ctrl.newActiv.startsAt, "YYYY-MM-DD").startOf('day').toDate(),moment(ctrl.newActiv.endsAt, "YYYY-MM-DD").startOf('day').toDate(),'d')
        });
        ctrl.newLeave={};
    };


    ctrl.removeLeave =function removeLeave(index){
        ctrl.listLeave.splice(index,1);
    }
}

angular.module('leaveRequestModule').component('leaveRequestComponent', {
    templateUrl: 'app/module/leave/request/leaveRequest.html',
    controller: leaveRequestComponent
});