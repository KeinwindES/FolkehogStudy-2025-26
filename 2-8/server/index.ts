import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", ws => {
  console.log("connection", ws);

  ws.on("message", data => {
    console.log("message", data);
  });

  ws.on("close", data => {
    console.log("close", data);
  });
});

console.log("server started");
