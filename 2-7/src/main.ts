import "./style.css";

enum GameMove {
  Paper,
  Rock,
  Scissors,
}

let currentlySelectMove: GameMove = GameMove.Paper;

Object.values(GameMove)
  .filter((move) => typeof move == "number")
  .forEach((move) => {
    let button: HTMLButtonElement = document.createElement("button");
    button.innerText = GameMove[move];
  });
