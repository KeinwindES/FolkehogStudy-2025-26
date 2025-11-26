import "./style.css";

enum GameMove {
  Paper,
  Rock,
  Scissors,
}

let app = document.getElementById("app") as HTMLDivElement;

function GenerateRandomMove(): GameMove {
  return Math.trunc(Math.random() * 3);
}

let winConditions = new Map();
winConditions.set(GameMove.Rock, GameMove.Scissors);
winConditions.set(GameMove.Paper, GameMove.Rock);
winConditions.set(GameMove.Scissors, GameMove.Paper);

Object.values(GameMove)
  .filter((move) => typeof move == "number")
  .forEach((move) => {
    let button: HTMLButtonElement = document.createElement("button");
    button.innerText = GameMove[move];

    button.addEventListener("click", () => {
      let botMove = GenerateRandomMove();
      if (winConditions.get(move) == botMove) {
        console.log("You win!");
      } else {
        console.log("you louse LMAO");
      }
    });

    app.appendChild(button);
  });
