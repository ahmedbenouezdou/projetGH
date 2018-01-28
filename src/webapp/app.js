var appPersonnel= angular.module('appPersonnel',['ui.router','activitiesModule','homeModule','profilModule',
    'myProfilModule','720kb.datepicker', 'ngAnimate','gestionPersonnelModule','leaveRequestModule','loginModule',
    'userModule','validActivitiesModule']);

appPersonnel.config(function($stateProvider,$urlRouterProvider) {


    var validDemande = {
        name: 'validDemande',
        url: '/validDemande',
        templateUrl: 'app/module/validLeave/demandeLeave.html'
    };



    var profil = {
        name: 'profil',
        url: '/profil',
        component: 'profilComponent'
    };


    var myInformation = {
        name: 'myProfil.myInformation',
        url: '/myInformation',
        templateUrl: 'app/module/myProfil/myInformation.html'
    };

    var gestionPersonnel = {
        name: 'gestionPersonnel',
        url: '/gestionPersonnel',
        component: 'gestionPersonnelComponent'
    };




    $stateProvider .state('account', {
        url: "/account",
        views: {
            menu:{
                templateUrl: 'app/module/account/menu.html'
            },
            account:{
                templateUrl: 'app/module/account/account.html'
            }
        }
    }).state(validDemande).state(gestionPersonnel).state(profil).state('account.validDemande',{
        url: '/validDemande',
        views: {
            "detail":{
                templateUrl: 'app/module/validLeave/demandeLeave.html'
            }
        }
    });

    $urlRouterProvider.otherwise('account/home');
});

appPersonnel.run(function(){
    moment.lang('fr', {
        months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre".split("_"),
        monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            L : "DD/MM/YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd D MMMM YYYY LT"
        },
        calendar : {
            sameDay: "[Aujourd'hui ] LT",
            nextDay: '[Demain ] LT',
            nextWeek: 'dddd [] LT',
            lastDay: '[Hier ] LT',
            lastWeek: 'dddd [dernier ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : "dans %s",
            past : "il y a %s",
            s : "quelques secondes",
            m : "une minute",
            mm : "%d minutes",
            h : "une heure",
            hh : "%d heures",
            d : "un jour",
            dd : "%d jours",
            M : "un mois",
            MM : "%d mois",
            y : "une année",
            yy : "%d années"
        },
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : 'éme');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

});

angular.module('activitiesModule',['mwl.calendar', 'ngAnimate','calendarModule','ui.router','profilModule']);
angular.module('validActivitiesModule',['mwl.calendar', 'ngAnimate','calendarModule','ui.router']);
angular.module('homeModule',['barchartModule','ui.router']);
angular.module('gestionPersonnelModule',['ui.router']);
angular.module('leaveRequestModule',['ui.router']);
angular.module('profilModule',['ui.router','activitiesModule']);
angular.module('myProfilModule',['ui.router']);
angular.module('loginModule',['ui.router']);
angular.module('userModule',['activitiesModule']);