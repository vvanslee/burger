var orm = require('../config/orm.js');

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insert: function(burger_name, callback) {
        orm.insertOne("burgers", "burger_name", burger_name, function(res){
            callback(res);
        })
    },
    update: function(burger_name, callback) {
        orm.updateOne("burgers", "devoured", burger_name, function(res){
            callback(res);
        })
    },
}

module.exports = burger;