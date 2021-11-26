import { notifyUser } from "./helpers";

const keyboardButtons = document.querySelectorAll(".keyboard button");
const displayInput = document.querySelector('[name="amount"]');

keyboardButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    if (event.target.getAttribute("data-value") == "enter") {
      return null;
    }
    if (event.target.getAttribute("data-value") == "del") {
      displayControls.clearInput();
      return null;
    }

    const value = event.target.getAttribute("data-value");
    displayControls.enterNumber(value);
  });
});

const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

document.addEventListener(
  "keydown",
  (event) => {
    if (numberArray.indexOf(event.key) != -1) {
      displayControls.enterNumber(event.key);
    }
    if (event.code == "Backspace") {
      displayControls.clearInput();
    }
  },
  false
);

const displayControls = {
  clearInput: function () {
    displayInput.value = "";
  },
  enterNumber: function (value) {
    if (displayInput.value == "" && value == "0") return null;

    if (this.checkIsMaxAmount(value)) return null;

    displayInput.value += value;
  },
  checkIsMaxAmount: function (value) {
    if (displayInput.value + value > 1000) {
      notifyUser("max amount is 1000");
      return true;
    }
  },
};
