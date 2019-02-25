class VendingMachine {
  constructor(data) {
    this.data = require(data);
    this.slots = Object.keys(this.data.inventory);
  }

  queryInventory(string) {
    for (let i = 1; i <= 5; i++) {
      let item = this.data.inventory[i];
      if (
        (item.productCode === string && item.quantity === 0) ||
        (item.productName === string && item.quantity === 0)
      ) {
        return 'Sold Out';
      }

      if (item.productName === string || item.productCode === string || '') {
        let price = item.productCost.toFixed(2);
        return `(${item.productCode}) ${item.productName} - $${price}, qty: ${
          item.quantity
        }`;
      }
    } // end of for Loop
  } //end of queryInventory()

  printInventory() {
    this.slots.forEach(slot => {
      const sw = this.data.inventory[slot];
      console.log(
        `(${sw.productCode}) ${sw.productName}-$${sw.productCost}, qty: ${
          sw.quantity
        }`
      );
    });
    return true;
  } // end of printInventory()

  purchaseItem(input, money) {
    let purchase = { Change: null, Name: '', VMQty: null };

    this.slots.forEach(slot => {
      let sw = this.data.inventory[slot];
      let change = money - sw.productCost;

      if (input === sw.productCode && money >= sw.productCost) {
        purchase.name = sw.productName;
        purchase.vmQty = sw.quantity -= 1;
        purchase.change = change.toFixed(2);
      }
    });

    let cents = purchase.change;
    let toonie = cents / 2 >= 1 ? Math.floor(cents / 2) : 0;
    cents -= toonie * 2;
    let loonie = cents >= 1 ? Math.floor(cents / 1) : 0;
    cents -= loonie;
    let quarter = cents / 0.25 >= 1 ? Math.floor(cents / 0.25) : 0;
    cents -= quarter * 0.25;
    let dime = cents / 0.1 >= 1 ? Math.floor(cents / 0.1) : 0;
    cents -= dime * 0.1;
    let nickle = cents / 0.05 >= 1 ? Math.floor(cents / 0.05) : 0;
    cents = Math.round(cents * 100) / 100;
    cents -= nickle * 0.05;

    let change =
      purchase.change != 0
        ? `$${
            purchase.change
          } = $2*(${toonie}), $1*(${loonie}), 25¢*(${quarter}), 10¢*(${dime}), 5¢*(${nickle})`
        : '$0.00';

    return purchase.change != null
      ? `Name: ${purchase.name}, Change: ${change}, VMQty: ${purchase.vmQty}`
      : 'Insufficient Funds';
  } //end of purchaseItem()

  restockInventory() {
    let qty = 0;
    this.slots.forEach(slot => {
      const sw = this.data.inventory[slot];
      if (sw.quantity < 10) {
        sw.quantity = 10;
      }
      qty = sw.quantity;
    });
    return qty;
  } // end of restockInventory()

  refillChange() {
    let coins = Object.keys(this.data.coinCase);
    let amt = 0;
    coins.map(value => {
      let coin = this.data.coinCase[value];

      if (coin.amount < 100) {
        coin.amount = 100;
      }
      amt = coin.amount;
    });
    return amt;
  } //end of refillChange()
} //end of VendingMachine

module.exports = VendingMachine;
