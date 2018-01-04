var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var greetings = require("./src/service/activities/activitiesService");




app.set('port', '2001');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/activitie',greetings.getActivities);
app.post('/addActivities',greetings.addActivities);

app.use('/', express.static(__dirname + '/src/webapp/'));



app.listen(app.get('port'), function() {
    console.log('-- Express server listening on http://localhost:%d/', app.get('port'));
});