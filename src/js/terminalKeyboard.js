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
    displayControls.enterNumber(event);
  });
});

const displayControls = {
  clearInput: function () {
    displayInput.value = "";
  },
  enterNumber: function (button) {
    const buttonValue = button.target.getAttribute("data-value");

    if (displayInput.value == "" && buttonValue == "0") return null;

    if (this.checkIsMaxAmount(buttonValue)) return null;

    displayInput.value += buttonValue;
  },
  checkIsMaxAmount: function (buttonValue) {
    if (displayInput.value + buttonValue > 1000) {
      notifyUser("max amount is 1000");
      return true;
    }
  },
};
