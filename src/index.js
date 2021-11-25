import terminal from "./js/terminal";
import drawBalance from "./js/drawBalance";

//banknotes array of objects

let banknoteSampleArray = [
  { name: "lari", amount: 20 },
  { name: "lari5", amount: 20 },
  { name: "lari10", amount: 20 },
  { name: "lari20", amount: 20 },
  { name: "lari50", amount: 20 },
  { name: "lari100", amount: 20 },
];
terminal.refill(banknoteSampleArray);
drawBalance.insertInTable();
// document
//   .querySelector("#refill")
//   .addEventListener("click", () => drawBalance.insertInTable());
