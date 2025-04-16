import { WebSocketServer, WebSocket } from "ws";

const ws = new WebSocketServer({port:8081});

let allSockets:WebSocket[] = [];

ws.on("connection",(socket)=>{
    allSockets.push(socket);
    socket.on("message", (message)=>{
        console.log("message recieved "+ message.toString())
        for(let i=0; i<allSockets.length;i++){
            const s = allSockets[i];
            s.send(message.toString()+": sent from the server");
        }
    })
})