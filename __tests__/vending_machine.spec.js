const VendingMachine = require('../lib/vending-machine.js');

describe('Vending Machine Sandwiches 🥪', () => {
  // let vendingMachine, inventory, coinBox;
  let test;

  beforeEach(() => {
    test = {};

    test.coinBox = {
      toonie: { amount: 100, value: 2 },
      loonie: { amount: 100, value: 1 },
      quarter: { amount: 100, value: 0.25 },
      dime: { amount: 100, value: 0.1 },
      nickle: { amount: 100, value: 0.05 }
    };

    test.inventory = {
      1: {
        productCode: 'A1',
        productName: 'Tuna Sandwich',
        productCost: 3.25,
        quantity: 10
      },
      2: {
        productCode: 'A2',
        productName: 'Egg & Sausage Sandwich',
        productCost: 3.25,
        quantity: 10
      },
      3: {
        productCode: 'A3',
        productName: 'Chicken Sandwich',
        productCost: 4.25,
        quantity: 10
      },
      4: {
        productCode: 'A4',
        productName: 'BLT Sandwich',
        productCost: 3.75,
        quantity: 10
      },
      5: {
        productCode: 'A5',
        productName: 'Roastbeef Sandwich',
        productCost: 4.25,
        quantity: 10
      }
    };

    test.vendingMachine = new VendingMachine(test.inventory);
  }); // end of beforeEach()

  describe('print inventory', () => {
    beforeEach(() => {
      test.subject = new VendingMachine(test.inventory);
    });
    it('should print vending machine in console.log', () => {
      const result = test.subject.printInventory();
      expect(result).toEqual(true);
    });
  });

  describe('purchase item with exact change', () => {
    beforeEach(() => {
      test.subject = new VendingMachine(test.inventory);
    });

    it('should return product and decrement it by one, and return change 0', () => {
      const result = test.subject.purchaseItem('A3', 0);
      expect(result).toEqual('Chicken Sandwich');
    });
  });
});
