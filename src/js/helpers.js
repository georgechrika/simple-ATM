import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";

export function notifyUser(text) {
  Toastify({
    text,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}
