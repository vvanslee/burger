var mysql = require('mysql');
var connection = mysql.createConnection ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Jacob0429',
    database: 'burgers_db'
});

connection.connect(function (error){
    if(error){
        throw error;
    }
});

module.exports = connection;