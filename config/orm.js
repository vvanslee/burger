var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, callback) {
        var query =
        connection.query("SELECT * FROM ??", [tableInput],
        function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    insertOne: function(tableInput, head, burger_name, callback) {
        var query =
        connection.query("INSERT INTO ?? (??) VALUES (?)", [tableInput, head, burger_name],
        function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    updateOne: function(tableInput, head, burger_name, callback) {
        var query =
        connection.query("UPDATE ?? SET ?? = TRUE WHERE burger_name = ?", [tableInput, head, burger_name],
        function(err, res) {
            if (err) throw err;
            callback(res);
        });
    }
};

module.exports = orm;