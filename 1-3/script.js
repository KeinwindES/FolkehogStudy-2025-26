var money = 10;

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
    money ++;
    alert("You won and have " + money + "€");
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
    
  } else {
    money --;
    alert("You lost and have " + money + "€");
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
  }

  if (money <= 0) {
    alert("You are out of money! Game over. \n never gonna give you up!");
    rolldicebutton.disabled = true;
  }

  console.log(dices);
}

function placeBet() {
  let betinput = document.getElementById("betinput");
  let bet = parseInt(betinput.value);

  if (isNaN(bet) || bet <= 0) {
    alert("Please enter a valid bet amount.");
    return;
  }

  if (bet > money) {
    alert("You cannot bet more than you have!");
    return;
  }

  money -= bet;
  alert("You placed a bet of " + bet + "€. You now have " + money + "€ left.");
}

let rolldicebutton = document.getElementById("rolldicebutton");
let betinput = document.getElementById("betinput");

betinput.addEventListener("change", placeBet);

rolldicebutton.addEventListener("click", rollDices);
