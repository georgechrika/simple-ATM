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
  },
};

export default terminal;
