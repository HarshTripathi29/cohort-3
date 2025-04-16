"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 8081 });
let allSockets = [];
ws.on("connection", (socket) => {
    allSockets.push(socket);
    socket.on("message", (message) => {
        console.log("message recieved " + message.toString());
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(message.toString() + ": sent from the server");
        }
    });
});
