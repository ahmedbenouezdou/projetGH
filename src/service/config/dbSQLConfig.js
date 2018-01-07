
var mysql = require('mysql');
var fs = require("fs");


var contents = fs.readFileSync("./src/service/config/configSQL.json");
var jsonContent = JSON.parse(contents);

console.log("host:", jsonContent.host);
console.log("user:", jsonContent.user);
console.log("Password:", jsonContent.password);
console.log("database:", jsonContent.database);


var con = mysql.createConnection({
    host: jsonContent.host,
    user: jsonContent.user,
    password: jsonContent.password,
    database: jsonContent.database
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


exports.insertSQl = function insertSQl() {

    con.query('SELECT * from users LIMIT 2', function(err, rows, fields) {
        con.end();
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
    });
};