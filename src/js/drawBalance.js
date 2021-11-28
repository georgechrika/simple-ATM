import atm from "./atm";

const drawBalance = {
  tableBody: document.querySelector("#tableBody"),
  drawRow: function (banknote) {
    return `<tr>
      <td>${banknote.geoName}</td>
      <td>${banknote.accumulatorValue}</td>
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
