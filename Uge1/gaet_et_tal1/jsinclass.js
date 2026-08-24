import { robotChoosesNumberWithMax } from "../utils_lib/utils_lib.js";
import { find } from "../utils_lib/utils_lib.js";

const tallet = find("#tal");
console.log("!!!!!!!!!!!!!", tallet, "!!!!!!!!!!!!");
const rBtn = find("#rBtn");
const max = find("#max");

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

const guessBtn = find("#guessBtn");
const guess = find("#guess");
const hint = find("#hint");
const valgteTal = robotChoosesNumberWithMax(100);
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
robotChoosesNumberWithMax;
console.log("robottens hemmelige valgte tal er = ", valgteTal);
function fejring() {
  console.log("DU KLAREDE DET");
  find("html").classList.add("win");
  hint.innerHTML = "Tallet er " + guess.value + "!!!";
  find("#h").innerHTML = "Korrekt!!!";
  find("#p").innerHTML = "Korrekt!!!";
  guessBtn.classList.add("hidden");
  guess.classList.add("hidden");
  find("#right").innerHTML = valgteTal + " er korrekt!!";
}
