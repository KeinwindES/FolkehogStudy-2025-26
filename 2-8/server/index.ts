import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({
  port: 8080,
});

const connections = new Map<number, WebSocket>();
let connectionIdCounter = 0;

wss.on("connection", (ws) => {
  console.log("connection");

  const id = connectionIdCounter;
  connectionIdCounter++;
  connections.set(id, ws);

  ws.on("message", (data) => {
    const message = data.toString();
    switch (message) {
      case "hei server!!":
        console.log("hi");
        break;
      case "ekploder":
        ws.send("boom");
        connections.forEach((connection, connectionID) => {
          connection.send("");
        });
        console.log("boom did run");
        break;
    }
    console.log("Message", data.toString());
  });
  ws.on("close", (data) => {
    console.log("close", data);
  });
});

console.log("server started");
