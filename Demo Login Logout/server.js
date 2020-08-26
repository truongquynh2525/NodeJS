const express = require("express");
const app = express();
const brcypt = require("bcrypt");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

const server = require("http").Server(app);
const user = [];

app.get("/", (req, res) => {
    res.render("login");
});

app.post("/", (req, res) => {

});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    try {
        const hashedPasword = await brcypt.hash(req.body.password, 10);
        user.push({
            id: Date.now().toString(),
            
        });
    } catch {

    }
    
});

server.listen(7777);