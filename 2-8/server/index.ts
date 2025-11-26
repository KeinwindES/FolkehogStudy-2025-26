import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({
  port: 8080,
});

const connections = new Map<number, WebSocket>();
let connectionIdCounter = 0;

let messages = "";

wss.on("connection", (ws) => {
  console.log("connection");

  const id = connectionIdCounter;
  connectionIdCounter++;
  connections.set(id, ws);

  ws.on("message", data => {
          messages += "\n"
          messages += id + " - " + data.toString();
          connections.forEach((sock,key) => {
              sock.send(messages);
          })

          console.log("Message", data.toString())
      })

  ws.on("close", (data) => {
    console.log("close", data);
  });
});

console.log("server started");
