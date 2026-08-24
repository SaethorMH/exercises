import { rNumber } from "../../utils_lib/utils_lib.js";

const list = document.querySelector("ul");
const listArray = [];
let speed = 1000;
let amount = 20;

let intervallet = setInterval(genColumn, speed);

function genColumn() {
  if (listArray.length > amount) {
    listArray.shift();
    list.removeChild(list.firstElementChild);
  }

  let gcNumber = rNumber(100);
  listArray.push(gcNumber);
  console.log(listArray);
  const li = document.createElement("li");
  li.style.setProperty("--height", gcNumber);
  list.appendChild(li);
  //   console.log("column generated");

  generateFromArray();
}

function generateFromArray() {
  document.querySelector("ol").innerHTML = "";
  //   console.log("AAAHH");

  listArray.forEach((element) => {
    document.querySelector("ol").innerHTML +=
      `<li style="--height:${element}">`;
  });
}

document.querySelector("input").addEventListener("change", changeSpeed);
function changeSpeed() {
  speed = 1000 / Number(document.querySelector("input").value);
  console.log("speed is " + speed);
  clearInterval(intervallet);
  intervallet = setInterval(genColumn, speed);
}
