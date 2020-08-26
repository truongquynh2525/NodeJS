const express = require("express");
const request = require("request");
const app = express();

const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02";

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

const server = require("http").Server(app);
server.listen(2000);

app.get("/", (req, res) => {
    //call url
    request(url, (err, res, body) => {
        weather_json = JSON.parse(body);
        //body nay lay o html
        //console.log(weather_json); *goi thang nay neu muon xem
        
        var weather = {
            
        };

    });
    res.render("home");
});
