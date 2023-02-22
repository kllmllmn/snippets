let app = require("http").createServer();
let io = require("socket.io")(app, { cors: true });

let port = 4090;
let clientCount = 0;

app.listen(port);

io.on("connection", function (socket) {
  clientCount++;
  socket.nickname = "user" + clientCount;
  io.emit("enter", socket.nickname + " comes in");

  socket.on("message", function (str) {
    io.emit("message", socket.nickname + " says: " + str);
  });

  socket.on("disconnect", function () {
    io.emit("leave", socket.nickname + " left");
  });
});

console.log("Websocket server listening on port = " + port);
