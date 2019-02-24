/** CREATE 4 FUNCTIONS:
 * DISPENSE ITEM
 * ADD ITEM
 * DISPENSE COIN
 * REFILL COIN  */

class VendingMachine {
  constructor(inventory, coinBox) {
    this.inventory = inventory;
    this.coinBox = coinBox;
  }

  queryInventory(item) {
    const sandwich = Object.entries(this.inventory);
    // const stock = sandwich.reduce((acc, val) => {
    //   val.join(), '';
    //   // console.log('ACC', acc, 'VAL:', val);
    // });

    const inventory = sandwich[item].map(item => {
      `${item.productName}: Code: ${item.productCode}, Price: $${
        item.productCost
      }, Qty: ${item.quantity},`;
    });

    return inventory;
  }

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
}

module.exports = VendingMachine;

// let sum = data.pop.reduce((acc, val) => {
//   return val.country === 'China' ? acc : acc + val.pop;
// }, 0);
