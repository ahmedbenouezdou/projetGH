"use strict";

var log4js = require('log4js');


log4js.configure({
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'file',
            "absolute": true,
            filename: __dirname + '/logs/logProjetGH.log',
            "maxLogSize": 20480,
            category: 'Hermes'
        }]
});
var logger = log4js.getLogger('projetGH');


exports.constant = function () {
    return {
        confLog: logger
    };
};
