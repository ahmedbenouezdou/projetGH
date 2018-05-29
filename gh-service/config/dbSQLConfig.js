
const mysql = require('mysql');
const fs = require("fs");
//const logger = require(__dirname+"/configProperties");

const contents = fs.readFileSync(__dirname+"/configSQL.json");
const jsonContent = JSON.parse(contents);


const con = mysql.createConnection({
    host: jsonContent.host,
    user: jsonContent.user,
    password: jsonContent.password,
    database: jsonContent.database
});



con.connect(function(err) {
    if (err) console.log("test");
});

module.exports = con;


