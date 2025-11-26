import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", ws => {
  console.log("connection");

  ws.on("message", data => {
    const message = data.toString();
    switch (message) {
      case "Hello from client!": break;
    }
    console.log("message", data.toString());
  });

  ws.on("close", data => {
    console.log("close", data);
  });
});

console.log("server started");
