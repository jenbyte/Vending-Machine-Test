const VendingMachine = require('../src/vending-machine.js');

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

    test.fullInventory = [
      {
        productCode: 'A1',
        productName: 'Tuna Sandwich',
        productCost: 3.25,
        quantity: 10
      },
      {
        productCode: 'A2',
        productName: 'Egg & Sausage Sandwich',
        productCost: 3.25,
        quantity: 10
      },
      {
        productCode: 'A3',
        productName: 'Peanut Butter & Jelly Sandwich',
        productCost: 4.25,
        quantity: 10
      },
      {
        productCode: 'A4',
        productName: 'BLT Sandwich',
        productCost: 3.75,
        quantity: 10
      },
      {
        productCode: 'A5',
        productName: 'Roastbeef Sandwich',
        productCost: 4.25,
        quantity: 10
      }
    ];

    test.inventory = [
      {
        productCode: 'A1',
        productName: 'Tuna Sandwich',
        productCost: 3.25,
        quantity: 5
      },
      {
        productCode: 'A2',
        productName: 'Egg & Sausage Sandwich',
        productCost: 3.25,
        quantity: 7
      },
      {
        productCode: 'A3',
        productName: 'Peanut Butter & Jelly Sandwich',
        productCost: 4.25,
        quantity: 5
      },
      {
        productCode: 'A4',
        productName: 'BLT Sandwich',
        productCost: 3.75,
        quantity: 4
      },
      {
        productCode: 'A5',
        productName: 'Roastbeef Sandwich',
        productCost: 4.25,
        quantity: 8
      }
    ];

    test.machine = new VendingMachine(test.inventory, test.coinBox);
  }); // end of beforeEach()

  describe('queryInventory', () => {
    describe('empty inventory and coin storage', () => {
      beforeEach(() => {
        test.machine = new VendingMachine(test.inventory);
      });

      it('should print current inventory in console', () => {
        const result = test.machine.queryInventory();
        const print =
          'Tuna Sandwich: Code: A1, Price: $3.25, Qty: 5, Egg & Sausage Sandwich: Code: A2, Price: $3.25, Qty: 7Peanut Butter & Jelly Sandwich: Code: A3, Price: $4.25, Qty: 5, BLT Sandwich: Code: A4, Price: $3.75, Qty: 4, Roastbeef Sandwich: Code: A5, Price: $4.25, Qty: 8';

        expect(result).toBe(print);
      });
      it('should print no data for inventory', () => {
        expect(test.result).toBeUndefined();
      });
    });

    describe('restock', () => {
      beforeEach(() => {
        test.machine = new VendingMachine(test.inventory);
      });

      it('should restock the quantity of each sandwich to 10', () => {
        const result = test.machine.restockInventory();
        expect(result).toEqual(10);
      });
    });
  });

  //   describe('Coin Box', ()=>{
  // it('should be refilled to max at end of day', ()=>{
  //   const result =
  // })
  //   }))

  describe.skip('purchase sandwich with exact change', () => {
    beforeEach(() => {
      test.machine = new VendingMachine(test.inventory);
    });

    it('should return sandwich and decrement it by one, and return change 0', () => {
      const result = test.machine.purchaseItem('A3', 0);
      expect(result).toEqual('Chicken Sandwich');
    });
  });
});
