import './style.css'

const websocket = new WebSocket("ws://127.0.0.1:8080");

websocket.addEventListener("open", data => {
  console.log("WebSocket opened", data);
})
websocket.addEventListener("message", data => {
  console.log("Received message:", data);
})
websocket.addEventListener("close", data => {
  console.log("WebSocket closed", data);
})
