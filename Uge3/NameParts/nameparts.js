// const fullName = "Peter Heronimous Lind";
const fullName = "Albus Percival Wulfric Brian Dumbledore";

const firstName = fullName.substring(
  fullName.indexOf(0),
  fullName.indexOf(" "),
);
const middleName = fullName.substring(
  fullName.indexOf(" ") + 1,
  fullName.lastIndexOf(" "),
);
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

console.log(`The first name is: ${firstName}`);
console.log(`The middle name is: ${middleName}`);
console.log(`The last name is: ${lastName}`);
