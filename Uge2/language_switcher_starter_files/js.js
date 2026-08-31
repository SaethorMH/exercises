import { $ } from "../../utils_lib/utils_lib.js";

const languageDD = $("#languageDropdown");

// const LANGUAGE = {
//   DE: de,
//   DE: da,
// };

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      { text: "Du hast eine Ro-bot und eine fillur", location: "p" },
      { text: "SPRAKEN ZE DEUTCH", location: "h2" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      { text: "Vælg sprog", location: "h2" },
      { text: "Du har sku en robotbåd og en filur", location: "p" },
    ],
  },
  en: {
    texts: [
      { text: "The Boat", location: ".header" },
      { text: "The Rowbot", location: ".footer" },
      { text: "You have a robot rowboat boat my dear boy", location: "p" },
      { text: "Choose a language dear boy", location: "h2" },
    ],
  },
};

let locale = "da";
languageDD.addEventListener("change", changeLanguage);
function changeLanguage() {
  locale = languageDD.value;
  console.log("Chose " + languageDD.value + " language");
  texts[locale].texts.forEach((element) => {
    $(element.location).innerHTML = element.text;
  });
}
