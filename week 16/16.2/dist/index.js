"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import WebSocketServer and WebSocket types from the 'ws' library
const ws_1 = require("ws");
// Create a WebSocket server that listens on port 8081
const ws = new ws_1.WebSocketServer({ port: 8081 });
// Array to keep track of all connected client sockets
let allSockets = [];
// When a new client connects to the server
ws.on("connection", (socket) => {
    // Add the new socket to the list of all connected sockets
    allSockets.push(socket);
    // Listen for messages from this client
    socket.on("message", (message) => {
        console.log("message received " + message.toString());
        // Broadcast the message to all connected clients
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            // Send the original message with an added suffix
            s.send(message.toString() + ": sent from the server");
        }
    });
    // Listen for when a client disconnects from the server
    socket.on("close", () => {
        // Remove the disconnected socket from the list
        allSockets = allSockets.filter(x => x !== socket);
    });
});
