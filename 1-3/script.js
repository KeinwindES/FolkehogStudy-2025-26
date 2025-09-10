function randomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

function rollDices() {
  let dices = document.getElementsByClassName("dice");
  dices = [...dices];

  let hasWon = false;

  dices.forEach((dice) => {
    dice.innerText = randomNumber(1, 6);

    if (dice.innerText == "6") {
      hasWon = true;
    }
  });

  if (hasWon) {
    console.log("You won!");
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
  } else {
    console.log("You lost!");
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
  }

  console.log(dices);
}

rolldicebutton.addEventListener("click", rollDices);
