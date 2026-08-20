const rockBtn = document.querySelector(".rock");
const scissorBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
let pChoice = "";
let opChoice = "";
let score = 0;

rockBtn.addEventListener("click", rockChoice);
function rockChoice() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  console.log("rock chosen");
  pChoice = "rock";
  player1.classList.add("shake");
  player2.classList.add("shake");

  opPreChoice = Math.ceil(Math.random() * 3);
  if (opPreChoice === 1) {
    opChoice = "rock";
  } else if (opPreChoice === 2) {
    opChoice = "paper";
  } else {
    opChoice = "scissors";
  }

  console.log(opChoice);

  //   player1.addEventListener("animationend", (event) => {
  //     switch (opChoice) {
  //       case 1:
  //         draw();
  //         clear();
  //         player1.classList.add("rock");
  //         player2.classList.add("rock");
  //         break;
  //       case 2:
  //         lose();
  //         clear();
  //         player1.classList.add("rock");
  //         player2.classList.add("paper");

  //         break;
  //       case 3:
  //         win();
  //         clear();
  //         player1.classList.add("rock");
  //         player2.classList.add("scissors");

  //         break;
  //     }
  //   });
}

paperBtn.addEventListener("click", paperChoice);
function paperChoice() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  console.log("paper chosen");
  pChoice = "paper";

  player1.classList.add("shake");
  player2.classList.add("shake");

  opPreChoice = Math.ceil(Math.random() * 3);
  if (opPreChoice === 1) {
    opChoice = "rock";
  } else if (opPreChoice === 2) {
    opChoice = "paper";
  } else {
    opChoice = "scissors";
  }
  console.log(opChoice);

  //   player1.addEventListener("animationend", (event) => {
  //     switch (opChoice) {
  //       case 1:
  //         draw();
  //         clear();
  //         player1.classList.add("paper");
  //         player2.classList.add("paper");
  //         break;
  //       case 2:
  //         clear();
  //         player1.classList.add("paper");
  //         player2.classList.add("scissors");
  //         lose();
  //         break;
  //       case 3:
  //         clear();
  //         player1.classList.add("paper");
  //         player2.classList.add("rock");
  //         win();
  //         break;
  //     }
  //   });
}
scissorBtn.addEventListener("click", scissorsChoice);
function scissorsChoice() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  console.log("scissors chosen");
  pChoice = "scissors";

  player1.classList.add("shake");
  player2.classList.add("shake");

  opPreChoice = Math.ceil(Math.random() * 3);
  if (opPreChoice === 1) {
    opChoice = "rock";
  } else if (opPreChoice === 2) {
    opChoice = "paper";
  } else {
    opChoice = "scissors";
  }

  console.log(opChoice);

  //   player1.addEventListener("animationend", (event) => {
  //     switch (opChoice) {
  //       case 1:
  //         draw();
  //         clear();
  //         player1.classList.add("scissors");
  //         player2.classList.add("scissors");
  //         break;
  //       case 2:
  //         clear();
  //         player1.classList.add("scissors");
  //         player2.classList.add("rock");
  //         lose();
  //         break;
  //       case 3:
  //         clear();
  //         player1.classList.add("scissors");
  //         player2.classList.add("paper");
  //         win();
  //         break;
  //     }

  //   });
}
player1.addEventListener("animationend", shoot);
function shoot() {
  if (pChoice === opChoice) {
    clear();
    player1.classList.add(pChoice);
    player2.classList.add(opChoice);
    draw();
  } else if (
    (pChoice === "paper" && opChoice === "rock") ||
    (pChoice === "scissors" && opChoice === "paper") ||
    (pChoice === "rock" && opChoice === "scissors")
  ) {
    clear();
    player1.classList.add(pChoice);
    player2.classList.add(opChoice);
    win();
  } else {
    clear();
    player1.classList.add(pChoice);
    player2.classList.add(opChoice);
    lose();
  }
}
function clear() {
  player1.classList.remove("shake", "paper", "scissors", "rock");
  player2.classList.remove("shake", "paper", "scissors", "rock");
}
function win() {
  console.log("Player Won");
  score++;
  document.querySelector("#win").classList.remove("hidden");
  console.log("Your score is " + score);
}
function lose() {
  console.log("Player Lost");
  score--;
  document.querySelector("#lose").classList.remove("hidden");
  console.log("Your score is " + score);
}
function draw() {
  console.log("Player Drew");
  document.querySelector("#draw").classList.remove("hidden");
  console.log("Your score is " + score);
}
