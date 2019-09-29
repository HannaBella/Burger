// Import MySQL connection.
var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(tableInput, condition, cb) {
        var queryString = "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    }
}



// Export the orm object for the model (burger.js).
module.exports = orm;