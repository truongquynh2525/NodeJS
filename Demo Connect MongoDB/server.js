const express = require("express");
const app = express();


//K6b6b5ZgncAxpRd
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(2000);

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://firstdemo:K6b6b5ZgncAxpRd@firstmongo.pfux2.mongodb.net/demo?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err) => {
        if(!err) {
            console.log("Connected!");
        }
        else {
            console.log("Error");
        }
    }
);

const Cap1 = require("./Models/cap1");
const Cap2 = require("./Models/cap2");

app.get("/cap1/:name", (req, res) => {
    var cap1 = new Cap1({
        name: req.params.name,
        kids: []
    })

    cap1.save((err) => {
        if(!err) {
            res.json("ok");
        }
        else {
            res.json("error");
        }
    });
});

app.get("/", (req, res) => {
    res.send("ok");
});