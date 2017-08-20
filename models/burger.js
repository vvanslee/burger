var orm = require('../config/orm.js');

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insert: function(burger_name, cb) {
        orm.insertOne("burgers", "burger_name", burger_name, function(res){
            callback(res);
        })
    },
    update: function(burger_name, cb) {
        orm.updateOne("burgers", "devoured", burger_name, function(res){
            calback(res);
        })
    },
}

module.exports = burger;