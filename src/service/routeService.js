var express = require('express');
var app = express();
var greetings = require("./activities/activitiesService");

app.route('activitie').get(greetings.getActivities).post(greetings.addActivities);
