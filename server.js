const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const greetings = require("./gh-service/activities/activitiesService");
const config = require('./config/configServer.json');


app.set('port', process.env.PORT || config.serverLocal.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/activitie',greetings.getActivities);
app.post('/addActivities',greetings.addActivities);

app.use('/', express.static(__dirname + '/gh-app/src/webapp/'));



app.listen(app.get('port'), function() {
    console.log('-- Express server listening on http://localhost:%d/', app.get('port'));
});