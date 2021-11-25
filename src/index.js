const terminal = {
  banknotes: {
    lari: { amount: 0, accumulatorValue: 1, geoName: "ლარი" },
    lari5: { amount: 0, accumulatorValue: 5, geoName: "5 ლარი" },
    lari10: { amount: 0, accumulatorValue: 10, geoName: "10 ლარი" },
    lari20: { amount: 0, accumulatorValue: 20, geoName: "20 ლარი" },
    lari50: { amount: 0, accumulatorValue: 50, geoName: "50 ლარი" },
    lari100: { amount: 0, accumulatorValue: 100, geoName: "100 ლარი" },
  },
  refill: function (banknotes) {
    banknotes.forEach((banknote) => {
      this.banknotes[banknote.name].amount = banknote.amount;
    });
    console.log(this.banknotes);
  },
};

const drawBalance = {
  tableBody: document.querySelector("#tableBody"),
  TableRow: function (banknote) {
    return `<tr>
                <td>${banknote.geoName}</td>
                <td>${banknote.accumulatorValue}</td>
                <td>${banknote.amount}</td>
              </tr>`;
  },
  drawTable: function (banknotes) {
    let html = "";
    for (banknote in banknotes) {
      html += this.TableRow(banknotes[banknote]);
    }
    return html;
  },
  insertTable: function () {
    this.tableBody.innerHTML = this.drawTable(terminal.banknotes);
  },
};

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
drawBalance.insertTable();
// document
//   .querySelector("#refill")
//   .addEventListener("click", () => drawBalance.insertTable());
