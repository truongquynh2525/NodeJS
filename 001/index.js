var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(7777);

app.get("/", function(req, res){
    //res.send("<font color = red>Hello world </font>");
    res.sendFile(__dirname + "/index.html");
});

app.get("/tinhtong/:so1/:so2", function(req, res){
    var sum = parseInt(req.params.so1) + parseInt(req.params.so2);
    res.send("<h1>" + sum  + "</h1>");
});

app.post("/tinhtong/:so1/:so2", function(req, res){
    var sum = parseInt(req.params.so1) + parseInt(req.params.so2);
    res.send("<h1>" + sum  + "</h1>");
});