import "./style.css";

const websocket = new WebSocket("ws://127.0.0.1:8080");

const output = document.getElementById("output") as HTMLDivElement;
const textInput = document.getElementById("textfield") as HTMLInputElement;
const submitButton = document.getElementById("submitbutton") as HTMLButtonElement;

submitButton.addEventListener("click", () => {
  websocket.send(textInput.value);
  textInput.value = "";
});

websocket.addEventListener("open", (data) => {
  console.log("WebSocket opened", data);
  websocket.send("Hello from client!");
  websocket.send("ekploder");
});
websocket.addEventListener("message", (event) => {
  const data = event.data;
  output.innerText = data
  console.log("Received message:", data);
});
websocket.addEventListener("close", (data) => {
  console.log("WebSocket closed", data);
});
