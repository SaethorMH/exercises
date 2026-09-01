const name = "jOnAthAn";

const allLowercase = name.toLowerCase();
const thirdUpperCase = `${allLowercase.substring(0, 2)}${allLowercase.toUpperCase().substring(2, 3)}${allLowercase.substring(3)}`;
const firstUpperCase = `${allLowercase.substring(0, 1).toUpperCase()}${allLowercase.substring(1)}`;

console.log(allLowercase);
console.log(thirdUpperCase);
console.log(firstUpperCase);
