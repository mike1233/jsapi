var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

router.post('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    //console.log(req.body)
    //var json = JSON.stringify(req)
    console.log(req.body)

    res.locals.connection.query(`INSERT INTO customers (customerName, phone, contactFirstName, contactLastName) VALUES (? , ? , ? , ?)`, [req.body.name, req.body.phone, req.body.fName, req.body.lName ], function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            //If there is no error, all is good and response is 200OK.
        }
    });

    
    //res.send("The server received:" + " " + req.body.name + " " + req.body.email);
});

module.exports = router;