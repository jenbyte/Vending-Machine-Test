class VendingMachine {
  constructor(data) {
    this.data = require(data);
    this.slots = Object.keys(this.data.inventory);
    // console.log('************', Object.keys(this.data.coinCase)[loonie]);
  }

  queryInventory(string) {
    for (let i = 1; i <= 5; i++) {
      let item = this.data.inventory[i];

      if (item.productCode === string && item.quantity === 0) {
        return 'Sold Out';
      }

      if (item.productName === string || item.productCode === string) {
        return `(${item.productCode}) ${item.productName} - $${
          item.productCost
        }, qty: ${item.quantity}`;
      }
    } // end of for Loop
  } //end of queryInventory()

  printInventory() {
    this.slots.forEach(slot => {
      const sw = this.data.inventory[slot];
      console.log(
        `(${sw.productCode}) ${sw.productName} - $${sw.productCost}, qty: ${
          sw.quantity
        }`
      );
    });

    return true;
  } // end of printInventory()

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
    const coins = Object.keys(this.data.coinCase);
    let amt = 0;
    // console.log('????????', Object.entries(this.data.coinCase));

    coins.map(value => {
      const coin = this.data.coinCase[value];

      if (coin.amount < 100) {
        coin.amount = 100;
      }
      amt = coin.amount;
    });
    return amt;
  } //end of refillChange()

  purchaseItem(input, money) {
    let purchase = { name: '', quantity: null, change: null };

    this.slots.forEach(slot => {
      const sw = this.data.inventory[slot];

      if (input === sw.productCode) {
        console.log('++++++++++++', sw);
        purchase.name = sw.productName;
        purchase.quantity = sw.quantity -= 1;
        purchase.change = money - sw.productCost;
      }
    });

    return purchase;
  } //end of purchaseItem()
} //end of VendingMachine

module.exports = VendingMachine;

// let sum = data.pop.reduce((acc, val) => {
//   return val.country === 'China' ? acc : acc + val.pop;
// }, 0);
