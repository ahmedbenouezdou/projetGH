function validActivitiesController(moment, calendarConfig, activitiesService) {
    var ctrl = this;

    ctrl.newActiv = {};
    var previousValueMonth, previousValueEvents;

    moment.locale('fr'); // change the locale to french

    calendarConfig.dateFormatter = 'moment'; // use moment instead of angular for formatting dates
    var originali18n = angular.copy(calendarConfig.i18nStrings);
    calendarConfig.i18nStrings.weekNumber = 'Semaine {week}';

    ctrl.$onInit = function () {
        ctrl.month = new Date().getUTCMonth();
        ctrl.years = new Date().getUTCFullYear();
        ctrl.monthYears = moment(new Date(ctrl.years, ctrl.month, 1)).format("MMMM YYYY");


        ctrl.disabledDates = [];
        ctrl.events = [
            {
                title: 'Event 1',
                color: calendarConfig.colorTypes.info.primary,
                startsAt: moment("13082017", "DD/MM/YYYY").startOf('day').toDate(),
                endsAt: moment("13082017", "DD/MM/YYYY").startOf('day').toDate(),
                etat: 1
            },
            {
                title: 'Event 2',
                color: calendarConfig.colorTypes.info.primary,
                startsAt: moment("05082017", "DD/MM/YYYY").startOf('day').toDate(),
                endsAt: moment("05082017", "DD/MM/YYYY").startOf('day').toDate(),
                etat: 1
            }
        ];

        if (activitiesService.getLeave().length !== 0) {
            activitiesService.getLeave().forEach(function (elementLeave) {
                ctrl.events.push(elementLeave);
                ctrl.disabledDates.push(elementLeave.startsAt);
            });
        }


        ctrl.calendarView = 'month';
        ctrl.viewDate = moment().startOf('month').toDate();
        ctrl.monthevents = {
            month: ctrl.month,
            years: ctrl.years,
            events: ctrl.events
        };

        ctrl.changeViewIcon = true;
    };


    ctrl.addActivities = function addActivities() {
        var diffDateEvent = (diffdate(new Date(ctrl.newActiv.startsAt), new Date(ctrl.newActiv.endsAt), 'd') + 1);
        for (var i = 0; i < diffDateEvent; i++) {
            var dateEvent = new Date(new Date().setDate(new Date(ctrl.newActiv.startsAt).getDate() + i));
            var activity = {};

            if (dateEvent.getDay() != 0 && dateEvent.getDay() != 6) {




                if (ctrl.disabledDates.every(function(element) {
                        return (diffdate(new Date(element), new Date(dateEvent), 'd') > 0)|| (diffdate(new Date(element), new Date(dateEvent), 'd') < 0);
                    })) {
                    activity.color = calendarConfig.colorTypes.info;
                    activity.startsAt = moment(new Date(dateEvent).toISOString()).format("YYYY/MM/DD");
                    activity.endsAt = moment(new Date(dateEvent).toISOString()).format("YYYY/MM/DD");
                    activity.etat = 1;
                    activity.title = ctrl.newActiv.title;
                    ctrl.disabledDates.push(moment(new Date(dateEvent).toISOString()).format("YYYY/MM/DD"));
                    ctrl.events.push(activity);

                }




            }
        }
        ctrl.newActiv = {};


    };


    ctrl.removeActivities = function removeActivities(index) {
        ctrl.events.splice(index, 1);
    };

    ctrl.editActivities = function editActivities() {

    };

    ctrl.initDate = function initDate() {
        ctrl.newActiv.endsAt = "";
    };


    ctrl.editNextMonth = function editNextMonth() {
        return (workingDayWorked() === ctrl.events.length);
    };


    ctrl.previousMonth = function previousMonth() {


        ctrl.month = ctrl.month - 1;
        ctrl.monthYears = moment(new Date(ctrl.years, ctrl.month, 1)).format("MMMM YYYY");

        ctrl.monthevents = {
            month: new Date(new Date(moment(new Date(ctrl.years, ctrl.month, 1)).format("YYYY"), ctrl.month, 1)).getMonth(),
            years: new Date(new Date(moment(new Date(ctrl.years, ctrl.month, 1)).format("YYYY"), ctrl.month, 1)).getUTCFullYear(),
            events: ctrl.events
        };
    };

    ctrl.nextMonth = function nextMonth() {

        ctrl.month = ctrl.month + 1;
        ctrl.monthYears = moment(new Date(ctrl.years, ctrl.month, 1)).format("MMMM YYYY");

        ctrl.monthevents = {
            month: new Date(new Date(moment(new Date(ctrl.years, ctrl.month, 1)).format("YYYY"), ctrl.month, 1)).getMonth(),
            years: new Date(new Date(moment(new Date(ctrl.years, ctrl.month, 1)).format("YYYY"), ctrl.month, 1)).getUTCFullYear(),
            events: ctrl.events
        };

    };

    ctrl.changeView = function changeView() {
        ctrl.changeViewIcon = !ctrl.changeViewIcon
    }
}

validActivitiesController.$injector = ['moment', 'calendarConfig'];

angular.module('validActivitiesModule').component('validActivitiescomponent', {
    transclude: true,
    templateUrl: 'app/module/CRA/validCRA.html',
    controller: validActivitiesController

});

