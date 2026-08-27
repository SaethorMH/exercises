import { $ } from "../../../utils_lib/utils_lib.js";

const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

const el = vehicles.filter((car) => car.isElectric);
// console.log("Electric vehicles: ", el);
const twoSeats = vehicles.filter((car) => car.passengers === 2);
// console.log("Two seated vehicles: ", twoSeats);
const elJonas = el.filter((car) => car.ownedBy === "Jonas");
// console.log("Electric vehicles owned by Jonas: ", elJonas);
const rugOver1Seat = vehicles.filter(
  (car) => car.fuel === "Rugbrød" && car.passengers > 1,
);
// console.log("Ryebread run vehicles with over one seat: ", rugOver1Seat);

document.querySelectorAll("button").forEach((btn) => {
  console.log(eval(btn.value));
  btn.addEventListener("click", () => showTheseVehicles(eval(btn.value)));
  // showTheseVehicles(btn.dataset);
});

// showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    // if (!each.fuel) {
    //   each.fuel = "Not fueled";
    // }
    // if (!each.stops) {
    //   each.stops = "Doesn't Have a fixed route";
    // }
    // if (!each.ownedBy) {
    //   each.ownedBy = "No one";
    // }
    // if (!each.isElectric) {
    //   each.isElectric = "false";
    // }
    // if (!each.isTandem) {
    //   each.isTandem = "false";
    // }
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ? each.fuel : "Has no Fuel type"}</td>
  <td>${each.passengers ? each.passengers : "No Passengers"}</td> 
  <td>${each.stops ? each.stops : "Drives its own way"}</td>
  <td>${each.ownedBy ? each.ownedBy : "Has no Owner"}</td>
  <td>${each.isElectric ? "is Electric" : "Is Not Electric"}</td>
  <td>${each.isTandem ? "Is Tandem" : "Is Not Tandem"}</td>
</tr>`;
  });
}
