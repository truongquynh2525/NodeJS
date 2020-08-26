const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(2000);

app.get("/", (req, res) => {
    res.send("ok");
});