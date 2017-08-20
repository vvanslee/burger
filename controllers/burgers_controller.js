var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js')

router.get("/", function(req, res){
    burger.all(function(data){
        var hndlbrsObject = {
            burgers: data
        };
        res.render("index", hndlbrsObject)
    })
})

router.post("/", function(req, res) {
    burger.insert(req.body.name, function() {
        res.redirect('/')
    })
})

router.put("/:name", function(req, res) {
    burger.update(req.params.name, function() {
        res.redirect('/')
    })
})

module.exports = router;