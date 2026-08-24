import { rNumber } from "../../utils_lib/utils_lib.js";

const list = document.querySelector("ul");
const listArray = [];

setInterval(genColumn, 1000);

function genColumn() {
  if (listArray.length > 19) {
    listArray.shift();
    list.removeChild(list.firstElementChild);
  }

  let gcNumber = rNumber(100);
  listArray.push(gcNumber);
  console.log(listArray);
  const li = document.createElement("li");
  li.style.setProperty("--height", gcNumber);
  list.appendChild(li);
  console.log("column generated");

  generateFromArray();
}

function generateFromArray() {
  document.querySelector("ol").innerHTML = "";
  console.log("AAAHH");

  listArray.forEach((element) => {
    document.querySelector("ol").innerHTML +=
      `<li style="--height:${element}">`;
  });
}
