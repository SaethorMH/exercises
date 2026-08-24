export function rNumber(rMax) {
  return Math.ceil(Math.random() * rMax);
}

export function find(elementName) {
  return document.querySelector(elementName);
}
