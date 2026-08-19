"use strict";
const tallet = document.querySelector("#tal");
const rBtn = document.querySelector("#rBtn");
const max = document.querySelector("#max");

let maxNumber = 0;

max.addEventListener("change", setMax);

rBtn.addEventListener("click", talmellem1og10);

function setMax() {
  maxNumber = max.value;
}

function talmellem1og10() {
  if (!max.value) {
    tallet.innerHTML = "Vælg et Max Tal";
  } else {
    randomTal = Math.ceil(Math.random() * maxNumber);
    console.log(randomTal);
    tallet.innerHTML = "Tallet er " + randomTal;
  }
}

/**************************************************************************/

const guessBtn = document.querySelector("#guessBtn");
const guess = document.querySelector("#guess");
const hint = document.querySelector("#hint");
const valgteTal = Math.ceil(Math.random() * 100);

guessBtn.addEventListener("click", guessing);

function guessing() {
  console.log(valgteTal + guess.value);
  if (guess.value < valgteTal) {
    hint.innerHTML = "Tallet er større end " + guess.value;
  } else if (guess.value > valgteTal) {
    hint.innerHTML = "Tallet er lavere end " + guess.value;
  } else if (guess.value == valgteTal) {
    fejring();
  }
}
function fejring() {
  console.log("DU KLAREDE DET");
  document.querySelector("html").classList.add("win");
  hint.innerHTML = "Tallet er " + guess.value + "!!!";
  document.querySelector("#h").innerHTML = "Korrekt!!!";
  document.querySelector("#p").innerHTML = "Korrekt!!!";
  guessBtn.classList.add("hidden");
  guess.classList.add("hidden");
  document.querySelector("#right").innerHTML = valgteTal + " er korrekt!!";
}
