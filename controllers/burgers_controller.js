var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data);
        res.render("index");
    })

});


// Export routes for server.js to use.
module.exports = router;