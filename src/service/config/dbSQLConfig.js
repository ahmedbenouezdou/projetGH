
const mysql = require('mysql');
const fs = require("fs");


const contents = fs.readFileSync("./src/service/config/configSQL.json");
const jsonContent = JSON.parse(contents);

console.log("host:", jsonContent.host);
console.log("user:", jsonContent.user);
console.log("Password:", jsonContent.password);
console.log("database:", jsonContent.database);


const con = mysql.createConnection({
    host: jsonContent.host,
    user: jsonContent.user,
    password: jsonContent.password,
    database: jsonContent.database
});



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;


