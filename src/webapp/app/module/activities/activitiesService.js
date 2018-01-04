angular.module('activitiesModule').service('activitiesService', function (calendarConfig,$http) {


    this.getLeave = function getLeave(id,month) {

        $http.get("/activitie",{params:{id:id,month:month}}).then(function(response) {
                console.log(response.data);
            });

        return [
            {
                title: 'Event 1',
                color: calendarConfig.colorTypes.warning,
                startsAt: moment("03112017", "DD/MM/YYYY").startOf('day').toDate(),
                endsAt: moment("03112017", "DD/MM/YYYY").startOf('day').toDate(),
                etat: 0
            },
            {
                title: 'Event 2',
                color: calendarConfig.colorTypes.warning,
                startsAt: moment("08112017", "DD/MM/YYYY").startOf('day').toDate(),
                endsAt: moment("08112017", "DD/MM/YYYY").startOf('day').toDate(),
                etat: 0
            }];


    };


    this.addActivite = function addActivite(event,idUser) {


        $http.post('/addActivities', {id:idUser,data:event})
            .success(function (response) {
                // login successful if there's a token in the response
                if (response.token) {
                    console.log(response.token);
                    // store username and token in local storage to keep user logged in between page refreshes
                    $localStorage.currentUser = { name: name, token: response.token };

                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

                    // execute callback with true to indicate successful login
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });

    };

    this.updateActivite = function updateActivite() {

    }
});

