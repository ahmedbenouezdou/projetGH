
var moment = require('moment');
var requetSql = require('../config/dbSQLConfig');



exports.getActivities = function getActivities(req, response) {

    var listBookServer = [
        {
            title: 'Event 1',
            color: 'calendarConfig.colorTypes.warning',
            startsAt: moment("03112017", "DD/MM/YYYY").startOf('day').toDate(),
            endsAt: moment("03112017", "DD/MM/YYYY").startOf('day').toDate(),
            etat: 0
        },
        {
            title: 'Event 2',
            color: 'calendarConfig.colorTypes.warning',
            startsAt: moment("08112017", "DD/MM/YYYY").startOf('day').toDate(),
            endsAt: moment("08112017", "DD/MM/YYYY").startOf('day').toDate(),
            etat: 0
        }];


    response.end(JSON.stringify(listBookServer));
};

exports.addActivities =function addActivities(req, response) {
    console.log(requetSql.insertSQl());
      response.end();

};


/*
module.exports = {

    getActivities: function(req, response) {

        var listBookServer = [
            {
                title: 'Event 1',
                color: 'calendarConfig.colorTypes.warning',
                startsAt: moment("03112017", "DD/MM/YYYY").startOf('day').toDate(),
                endsAt: moment("03112017", "DD/MM/YYYY").startOf('day').toDate(),
                etat: 0
            },
            {
                title: 'Event 2',
                color: 'calendarConfig.colorTypes.warning',
                startsAt: moment("08112017", "DD/MM/YYYY").startOf('day').toDate(),
                endsAt: moment("08112017", "DD/MM/YYYY").startOf('day').toDate(),
                etat: 0
            }];


        response.end(JSON.stringify(listBookServer));
    },

    addActivities: function(req, response) {
        console.log(req);
       response.end();

    } ,
    updateActivities: function(req, response) {
        return null;
    } ,
    deletActivities: function(req, response) {
        return null;
    }
};
*/


