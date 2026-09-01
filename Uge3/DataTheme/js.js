import { $ } from "../../utils_lib/utils_lib.js";
const themeDD = $("#theme");
const body = $("body");

themeDD.addEventListener("click", changeTheme);

function changeTheme() {
  console.log(themeDD.value);
  body.dataset.theme = themeDD.value;
}
