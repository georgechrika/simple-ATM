const atm = {
  banknotes: {
    lari: { amount: 0, accumulatorValue: 1, imgName: "lari" },
    lari5: { amount: 0, accumulatorValue: 5, imgName: "lari5" },
    lari10: { amount: 0, accumulatorValue: 10, imgName: "lari10" },
    lari20: { amount: 0, accumulatorValue: 20, imgName: "lari20" },
    lari50: { amount: 0, accumulatorValue: 50, imgName: "lari50" },
    lari100: { amount: 0, accumulatorValue: 100, imgName: "lari100" },
  },
  banknotesSorted: ["lari100", "lari50", "lari20", "lari10", "lari5", "lari"],
  refill: function (banknotes) {
    banknotes.forEach((banknote) => {
      this.banknotes[banknote.name].amount = banknote.amount;
    });
  },
};

export default atm;
