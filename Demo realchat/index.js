const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");


const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(2000);

var userArray = ["TruongQuynh123"];

io.on("connection", function(socket){
    console.log(socket.id + " is connect");

    socket.on("disconnect", function(){
        console.log(socket.id + " is disconnect");
    });

    socket.on("Client-send-username", function(data){
        if(userArray.indexOf(data) >= 0) {
            socket.emit("Server-send-note");
        }
        else {
            userArray.push(data);
            socket.Username = data;
            socket.emit("Server-send-success", data);
            io.sockets.emit("Server-send-list-users", userArray);
        }
    });

    socket.on("logout", function(){
        userArray.splice(
            userArray.indexOf(socket.Username), 1
        );
        socket.broadcast.emit("Server-send-list-users", userArray);
    });

    socket.on("Client-Send-Message", (data) => {
        io.sockets.emit("Server-Send-Message", socket.Username, data);
    })
});

app.get("/", function(req, res){
    res.render("trangchu");
});