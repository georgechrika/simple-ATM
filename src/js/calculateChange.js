import { inputIsEmpty, notifyUser } from "./helpers";
import terminal from "./terminal";
import drawBalance from "./drawBalance";

const calculateChange = {
  displayInput: document.querySelector('[name="amount"]'),
  checkInputValidity: function () {
    var numberPattern = /\d+/g;
    return !this.displayInput.value.match(numberPattern);
  },
  calculate: function () {
    if (inputIsEmpty(this.displayInput.value))
      return notifyUser("first enter amount");

    if (this.checkInputValidity()) return notifyUser("only digits are allowed");

    this.checkAvailability(this.displayInput.value);
    this.displayInput.value = "";
  },
  checkAvailability: function (desiredAmount) {
    let amount = desiredAmount;
    let change = {};
    for (let banknote of terminal.banknotesSorted) {
      const desiredAmount =
        Math.floor(amount / terminal.banknotes[banknote].accumulatorValue) *
        terminal.banknotes[banknote].accumulatorValue;
      const availableAmount =
        terminal.banknotes[banknote].amount *
        terminal.banknotes[banknote].accumulatorValue;

      change[banknote] = this.calculateBanknoteAmount(amount, banknote);
      amount = this.updateAmountValue(
        desiredAmount,
        availableAmount,
        banknote,
        amount
      );
    }
    amount > 0
      ? notifyUser("not enough cash in terminal")
      : this.updateAmountInTerminal(change);
  },
  updateAmountValue: function (
    desiredAmount,
    availableAmount,
    banknote,
    amount
  ) {
    return desiredAmount - availableAmount > 0
      ? amount - availableAmount
      : amount -
          Math.floor(amount / terminal.banknotes[banknote].accumulatorValue) *
            terminal.banknotes[banknote].accumulatorValue;
  },
  calculateBanknoteAmount: function (amount, banknote) {
    return Math.floor(
      amount / terminal.banknotes[banknote].accumulatorValue <=
        terminal.banknotes[banknote].amount
        ? Math.floor(amount / terminal.banknotes[banknote].accumulatorValue)
        : terminal.banknotes[banknote].amount
    );
  },
  updateAmountInTerminal: function (change) {
    let banknoteArray = [];
    for (let banknote in change) {
      terminal.banknotes[banknote].amount -= change[banknote];
    }
    drawBalance.insertInTable();
  },
};

export default calculateChange;
