import { $ } from "../../utils_lib/utils_lib.js";
const text = $("h1");
const btn = $("button");

btn.addEventListener("click", changeBatFox);
console.log(text.dataset.filter);

function changeBatFox() {
  if (text.dataset.filter === "bat") {
    text.dataset.filter = "fox";
  } else {
    text.dataset.filter = "bat";
  }
}
