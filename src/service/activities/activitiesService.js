
const moment = require('moment');
const requetSql = require('./activiteQuery.js');



exports.getActivities = (req, response) =>{

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

exports.addActivities =(req, response) =>{
    console.log(req.body.data);
    var tab=[];
    var infoTab=[];

    req.body.data.forEach((element)=>{
        infoTab=[];
        infoTab.push([req.body.id,element.startsAt,element.endsAt,element.etat,element.title])
        tab.push(infoTab);
    });

    requetSql.insertActiviter(tab);

    response.end();

};




