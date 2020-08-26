const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs');

app.listen(2000);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html', 
    (err, data) => {
        if(err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
    });
}

io.on("connection", (socket) => {
    socket.on('client-send-direction', (direction) => {
        io.sockets.emit("server-send-direction", direction);
    });
});