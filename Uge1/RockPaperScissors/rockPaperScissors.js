"use strict";
let computerensValg;
let brugerenssValg;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);
function rockClicked() {
  //console.log("ROCK CLICKED");
  //brugerenssValg = "rock";
  traefferValg("rock");
}
function paperClicked() {
  //console.log("PAPER CLICKED");
  //brugerenssValg = "paper";
  traefferValg("paper");
}
function scissorsClicked() {
  //console.log("SCISSORS CLICKED");
  //brugerenssValg = "scissors";
  traefferValg("scissors");
}

function traefferValg(choice) {
  brugerenssValg = choice;
  computerensValg = "scissors";
  nedTaelling();
}

function nedTaelling() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", visValg);
}

function visValg() {
  afgoerResultatet();
}

function afgoerResultatet() {
  console.log("brugerenssValg", brugerenssValg);
  console.log("computerensValg", computerensValg);
}
