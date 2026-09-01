import { $ } from "../../utils_lib/utils_lib.js";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
let text = $("p").innerHTML;
const btn = $("button");
const closeDialog = $("#closeDialog");
const dialog = $("dialog");
let safe = false;
console.log("this is the text: ", text);

btn.addEventListener("click", makeSFW);
closeDialog.addEventListener("click", closeDialogs);
function makeSFW() {
  console.log("Clicked");
  if (safe) {
    //hvis safe = true, så vil det betyde at sfw knappen allerede er blevet trykket 1 gang så åbnes der en dialog
    dialog.showModal();
    console.log("already safe");
  } else {
    //gennemgår alle bandeordne og checker om de er i text strengen, som tidligere blev difineret som p'ets innerHTML
    curseWords.forEach((element) => {
      if (text.includes(element.bad)) {
        console.log(
          "There is a bad word it is: ",
          element.bad,
          ", I will replace with: ",
          element.good,
        );
        //erstatter text strengen ud fra de element.bad så at der bliver erstattet hvert bandeord med en highlightet godt ord i stedet.
        text = text.replaceAll(
          element.bad,
          `<span style="background-color:yellow"> ${element.good}</span>`,
        );
      }
      //tager den nye text og printer den tilbage i paragraffen.
      $("p").innerHTML = text;
    });
  }
  safe = true;
}
function closeDialogs() {
  dialog.close();
}
