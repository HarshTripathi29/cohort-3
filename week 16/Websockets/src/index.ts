// Import the WebSocketServer class from the 'ws' library
import { WebSocketServer } from "ws";

// Create a new WebSocket server that listens on port 8080
const wss = new WebSocketServer({ port: 8080 });

// Handle connection event when a client connects to the server
wss.on("connection", function (socket) {
    console.log("user connected");

    // Send a message to the client every 1 second (1000 ms)
    // This message simulates a changing price of Solana (random value)
    setInterval(() => {
        socket.send("Current price of solana is " + Math.random());
    }, 1000);

    // Handle incoming messages from the client
    socket.on("message", (e) => {
        console.log(e.toString()); // Log the message received from the client
    });
});
