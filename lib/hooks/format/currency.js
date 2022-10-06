if (!Number.hasOwnProperty("currency")) {
  Number.prototype.currency = function (decimals = 0) {
    const currency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return currency.format(this);
  };
}
