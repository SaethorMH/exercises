const sNumber = document.querySelector("#secretNumber");
const startBtn = document.querySelector("#startBtn");

const rGuess = document.querySelector("#rGuess");

let currentGuess = 50;

let cMax = 100;
let cMin = 0;

const lowBtn = document.querySelector("#lowBtn");
const rightBtn = document.querySelector("#rightBtn");
const highBtn = document.querySelector("#highBtn");

const resetBtn = document.querySelector("#reset");

startBtn.addEventListener("click", start);
lowBtn.addEventListener("click", Hint);
rightBtn.addEventListener("click", win);
highBtn.addEventListener("click", Hint);

function start() {
  if (!sNumber.value) {
    console.log("there is no number to guess");
    sNumber.innerHTML = "Der Skal Skrives Tal";
  } else if (Number(sNumber.value) <= 0 || Number(sNumber.value) > 100) {
    sNumber.value = 1;
    rGuess.innerHTML = "Minimum tal er 1, Max er 100";
  } else {
    console.log("There is a number");
    sNumber.disabled = true;
    startBtn.disabled = true;
    makeGuess();
  }
}

function makeGuess(min = 0, max = 100) {
  currentGuess = Math.round((min + max) / 2);
  if (currentGuess > sNumber.value) {
    highBtn.disabled = false;
    lowBtn.disabled = true;
    rightBtn.disabled = true;
    cMax = currentGuess;
    console.log("tallet var for højt");
  } else if (currentGuess < sNumber.value) {
    lowBtn.disabled = false;
    highBtn.disabled = true;
    rightBtn.disabled = true;
    cMin = currentGuess;
    console.log("tallet var for lavt");
  } else {
    rightBtn.disabled = false;
    lowBtn.disabled = true;
    highBtn.disabled = true;
    console.log("tallet var rigtigt");
  }
  rGuess.innerHTML = "Er dit tal " + currentGuess + "?";
}
function Hint() {
  makeGuess(cMin, cMax);
}
function win() {
  rGuess.innerHTML = "YAAY DET VAR RIGTIGT";
  resetBtn.classList.remove("hidden");
}

resetBtn.addEventListener("click", reset);

function reset() {
  window.location.reload();
}
