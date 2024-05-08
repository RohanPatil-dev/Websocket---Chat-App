var http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on('user-message', (message) => {
    io.emit('message',message)
  })
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(8081, () => console.log("Server started at PORT:8081"));


