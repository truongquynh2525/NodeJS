var socket = io("http://localhost:2000");

socket.on("Server-send-note", function(){
    $("#note").append("This name is used");
});

socket.on("Server-send-success", function(data){
    $("#currentUser").html(data);
    $("#loginForm").hide(2000);
    $("#chatForm").show(1000);
});

socket.on("Server-send-list-users", function(data){
    $("#boxContent").html("");
    data.forEach(function(i){
        $("#boxContent").append("<div class = 'user'>" + i + "</div>");
    });
});

socket.on("Server-Send-Message", (userName, data) => {
    $("#listMessage").append("<div>" + userName + ": " + data + "</div>");
});

$(document).ready(function(){
    $("#loginForm").show();
    $("#chatForm").hide();

    $("#btnRegister").click(function(){
        socket.emit("Client-send-username", $("#username").val());
    });

    $("#btnLogout").click(function(){
        socket.emit("logout"); 
        $("#chatForm").hide(2000);
        $("#loginForm").show(1000);
    });

    $("#btnSendMessage").click(function(){
        socket.emit("Client-Send-Message", $("#txtMessage").val());
    });
});

