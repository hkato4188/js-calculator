//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var addResult = num1 + num2;
    
    res.send("The result of the addition calculation is " + addResult);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight) * 703;
    var height = parseFloat(req.body.height) ** 2;
    var bmiResult = weight / height;

    res.send("The calculated BMI is " + bmiResult);
})

app.listen(3000, function(){
    console.log("Listening on port 3000:\n ctrl c to quit")
})
