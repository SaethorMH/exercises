import { $ } from "../../utils_lib/utils_lib.js";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
const btn = $("button");

btn.addEventListener("click", genPath);
const noLinkList = [];
let onlyLinks = bc.filter((element) => {
  if (element.name !== "Bosch") {
    return element;
  } else {
    noLinkList.push(element);
  }
});
function genPath() {
  $("ul").innerHTML = "";

  onlyLinks.forEach((element) => {
    $("ul").innerHTML +=
      `<li>/<a href="${element.link}" >${element.name}</a></li>`;
  });
  noLinkList.forEach((element) => {
    $("ul").innerHTML += `<li>/${element.name}/</li>`;
  });
}
