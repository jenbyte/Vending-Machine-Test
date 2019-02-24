const processData = require('./process-data');

class VendingMachine {
  constructor(inventory, coinCase) {
    if (inventory.length === 0) {
      throw 'Empty Inventory.';
    }

    this.inventory = inventory;
    this.coinCase = coinCase;
  }

  queryInventory(string) {
    for (let i = 1; i <= 5; i++) {
      if (
        this.inventory[i].productName === string ||
        this.inventory[i].productCode === string
      ) {
        const sandwich = this.inventory[i];
        return `(${sandwich.productCode}) ${sandwich.productName} - $${
          sandwich.productCost
        }, qty: ${sandwich.quantity}`;
      } else if (!this.inventory[i].productName || !string) {
        throw new Error('Invalid Item Name');
      }

      if (this.inventory[i].productCode === string) {
        console.log('************', this.inventory[i]);
        return `${this.inventory[i].productName}, ${string}`;
      }

      // if (
      //   this.inventory[i].productName === string ||
      //   this.inventory[i].productCode === string
      // ) {
      //   console.log('************', this.inventory[i].productCode);
      // return `(${this.inventory[i].productCode}): ${
      //   this.inventory[i].productName
      // } - $${this.inventory[i].productPrice}, qty: ${
      //   this.inventory[i].quantity
      // }`;
      // }

      // console.log('############', string);

      // this.inventory.map(item => {
      //   `${item.productName}: Code: ${item.productCode}, Price: $${
      //     item.productCost
      //   }, Qty: ${item.quantity},`;
      // });
    } // end of for Loop
  } //end of queryInventory

  restockInventory() {
    let qty = 0;

    this.inventory.forEach(item => {
      if (item.quantity < 10) {
        item.quantity = 10;
      }
      qty = 10;
    });
    return qty;
  }
} //end of VendingMachine

module.exports = VendingMachine;

// let sum = data.pop.reduce((acc, val) => {
//   return val.country === 'China' ? acc : acc + val.pop;
// }, 0);
