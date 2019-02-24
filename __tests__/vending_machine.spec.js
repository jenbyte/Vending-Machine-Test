const VendingMachine = require('../src/vending-machine');

describe('Vending Machine Sandwiches 🥪', () => {
  // let vendingMachine, inventory, coinCase;
  let test;

  beforeEach(() => {
    test = {};

    test.coinCase = {
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

    test.inventory = {
      1: {
        productCode: 'A1',
        productName: 'Tuna Sandwich',
        productCost: 3.25,
        quantity: 5
      },
      2: {
        productCode: 'A2',
        productName: 'Egg & Sausage Sandwich',
        productCost: 3.25,
        quantity: 7
      },
      3: {
        productCode: 'A3',
        productName: 'Peanut Butter & Jelly Sandwich',
        productCost: 4.25,
        quantity: 5
      },
      4: {
        productCode: 'A4',
        productName: 'BLT Sandwich',
        productCost: 3.75,
        quantity: 4
      },
      5: {
        productCode: 'A5',
        productName: 'Roastbeef Sandwich',
        productCost: 4.25,
        quantity: 8
      }
    };

    // test.machine = new VendingMachine(test.inventory, test.coinCase);
  }); // end of beforeEach()

  describe('queryInventory', () => {
    beforeEach(() => {
      test.machine = new VendingMachine(test.inventory);
    });

    describe('When inventory exists', () => {
      it('should print entire info of item when productName is entered', () => {
        const result = test.machine.queryInventory('Roastbeef Sandwich');
        expect(result).toEqual('(A5) Roastbeef Sandwich - $4.25, qty: 8');
      });
      it('should print entire info of item when productCode is entered', () => {
        const result = test.machine.queryInventory('A3');
        expect(result).toEqual(
          '(A3) Peanut Butter & Jelly Sandwich - $4.25, qty: 5'
        );
      });
      it.skip('should print current inventory in console', () => {
        const result = test.machine.queryInventory();
        const print =
          'Tuna Sandwich: Code: A1, Price: $3.25, Qty: 5, Egg & Sausage Sandwich: Code: A2, Price: $3.25, Qty: 7Peanut Butter & Jelly Sandwich: Code: A3, Price: $4.25, Qty: 5, BLT Sandwich: Code: A4, Price: $3.75, Qty: 4, Roastbeef Sandwich: Code: A5, Price: $4.25, Qty: 8';

        expect(result).toBe(print);
      });
    });

    describe('When inventory does not exist', () => {
      it('should throw an error when name does not exist', () => {
        const result = test.machine.queryInventory('gummy bears');
        expect(result).toThrow();
      });
      it('should throw an error when code does not exist', () => {
        const result = test.machine.queryInventory('D7');
        expect(result).toThrow('Invalid Item Code');
      });
    });

    describe.skip('Restock', () => {
      beforeEach(() => {
        test.machine = new VendingMachine(test.inventory);
      });

      it('should restock the quantity of each sandwich to 10', () => {
        const result = test.machine.restockInventory();
        expect(result).toEqual(10);
      });
    });
  }); //end of queryInventory

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
