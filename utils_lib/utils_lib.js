export function rNumber(rMax) {
  return Math.ceil(Math.random() * rMax);
}

export function $(elementName) {
  return document.querySelector(elementName);
}
