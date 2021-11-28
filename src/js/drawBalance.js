import atm from "./atm";
import lari1 from "./../image/lari1.png";
import lari5 from "./../image/5lari.png";
import lari10 from "./../image/10lari.png";
import lari20 from "./../image/20lari.png";
import lari50 from "./../image/50lari.png";
import lari100 from "./../image/100lari.png";

const images = { lari1, lari5, lari10, lari20, lari50, lari100 };

const drawBalance = {
  tableBody: document.querySelector("#tableBody"),
  drawRow: function (banknote) {
    let img = images[banknote.imgName];
    return `<tr>
    <td><img src="${img}"></td>
      <td>${banknote.amount}</td>
      </tr>`;
  },
  drawTable: function (banknotes) {
    let html = "";
    for (let banknote in banknotes) {
      html += this.drawRow(banknotes[banknote]);
    }
    return html;
  },
  insertInTable: function () {
    this.tableBody.innerHTML = this.drawTable(atm.banknotes);
  },
};

export default drawBalance;
