import atm from "./js/atm";
import drawBalance from "./js/drawBalance";
import * as keyboard from "./js/atmKeyboard";
import calculateChange from "./js/calculateChange";

//banknotes array of objects

//for testing
let banknoteSampleArray = [
  { name: "lari", amount: 20 },
  { name: "lari5", amount: 10 },
  { name: "lari10", amount: 15 },
  { name: "lari20", amount: 20 },
  { name: "lari50", amount: 10 },
  { name: "lari100", amount: 4 },
];
atm.refill(banknoteSampleArray);
drawBalance.insertInTable();
