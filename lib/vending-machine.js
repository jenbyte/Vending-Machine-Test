class VendingMachine {
  constructor(inventory, coinBox) {
    this.inventory = inventory;
    this.coinBox = coinBox;
  }

  /** Four functions
   * Restock change, restock inventory
   * Return change and inventory
   */

  purchaseItem(productCode, change) {
    console.log(this.coinBox);
    return this.inventory.productName;
  }

  printInventory() {
    console.log(this.inventory);
    return true;
  }

  restock() {}
}

module.exports = VendingMachine;
