import terminal from "./js/terminal";
import drawBalance from "./js/drawBalance";
import * as keyboard from "./js/terminalKeyboard";
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
terminal.refill(banknoteSampleArray);
drawBalance.insertInTable();
calculateChange.checkAvailability(534);
