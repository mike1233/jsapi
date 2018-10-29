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

    
    res.send("The server received:" + " " + req.body.name + " " + req.body.email);
});

module.exports = router;