
const mysql = require('mysql');
const fs = require("fs");


const contents = fs.readFileSync("./src/service/config/configSQL.json");
const jsonContent = JSON.parse(contents);
const logger = fs.readFileSync("./src/service/configProperties");

const con = mysql.createConnection({
    host: jsonContent.host,
    user: jsonContent.user,
    password: jsonContent.password,
    database: jsonContent.database
});



con.connect(function(err) {
    if (err) logger.debug(err);
});

module.exports = con;


