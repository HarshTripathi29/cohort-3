"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// event handler 
wss.on("connection", function (socket) {
    console.log("user connected");
    // server sending a response after an interval 
    setInterval(() => {
        socket.send("Current price of solana is " + Math.random());
    }, 1000);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
