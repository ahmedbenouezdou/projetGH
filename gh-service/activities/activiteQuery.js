const con = require('../config/dbSQLConfig');

module.exports ={

    getActiviter:(activite) =>{
        con.query("SELECT * FROM gh_activite", function (err, result, fields) {
            if (err) throw err;
            console.log(fields);
        });
    },
    insertActiviter:(activites) =>{

        var sql = "INSERT INTO gh_activite (titleActivite,dateDebut,dateFin,typeACtivite,validActivite,idUser) VALUES ?";
        con.query(sql, [activites], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
    },
    deleteActiviter:() =>{

        con.query('SELECT * from users LIMIT 2', function(err, rows, fields) {
            con.end();
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });
    },
    updateActiviter:() =>{

        con.query('SELECT * from users LIMIT 2', function(err, rows, fields) {
            con.end();
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });
    }
};