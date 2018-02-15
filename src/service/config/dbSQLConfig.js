
const mysql = require('mysql');
const fs = require("fs");
const logger = require("./src/service/configProperties");

const contents = fs.readFileSync("../config/configSQL.json");
const jsonContent = JSON.parse(contents);


const con = mysql.createConnection({
    host: jsonContent.host,
    user: jsonContent.user,
    password: jsonContent.password,
    database: jsonContent.database
});



con.connect(function(err) {
    if (err) logger.info("test");
});

module.exports = con;


