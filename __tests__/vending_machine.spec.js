const VendingMachine = require('../src/vending-machine');

describe('Vending Machine Sandwiches 🥪', () => {
  // let vendingMachine, inventory, coinCase;
  let machine;

  beforeEach(() => {
    // test = {};

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
        productCost: 3.75,
        quantity: 10
      },
      {
        productCode: 'A4',
        productName: 'BLT Sandwich',
        productCost: 4,
        quantity: 10
      },
      {
        productCode: 'A5',
        productName: 'Roastbeef Sandwich',
        productCost: 4.25,
        quantity: 10
      }
    ];

    machine = new VendingMachine('../data.json');
  }); // end of beforeEach()

  describe('queryInventory', () => {
    describe('When inventory exists', () => {
      it('should print entire item when productName is entered', () => {
        const result = machine.queryInventory('Roastbeef Sandwich');
        expect(result).toEqual('(A5) Roastbeef Sandwich - $4.25, qty: 8');
      });
      it('should print entire item when productCode is entered', () => {
        const result = machine.queryInventory('A3');
        expect(result).toEqual(
          '(A3) Peanut Butter & Jelly Sandwich - $3.75, qty: 5'
        );
      });
    });
    it('should say item sold out', () => {
      const result = machine.queryInventory('A4');
      expect(result).toEqual('Sold Out');
    });

    describe('When inventory does not exist', () => {
      it.skip('should throw an error, incorrect name', () => {
        const result = machine.queryInventory('gummy bears');
        expect(result).toThrow('Invalid Item');
      });
    });
  }); //end of queryInventory()

  describe('printInventory', () => {
    it('should print inventory in console', () => {
      const result = machine.printInventory();
      expect(result).toBe(true);
    });
  }); // end of printInventory()

  describe('restockInventory', () => {
    it('should restock the quantity of each sandwich to 10', () => {
      const result = machine.restockInventory();
      expect(result).toEqual(10);
    });
  }); //end of restockInventory()

  describe('refillChange', () => {
    it('should refill coinCase to 100 each', () => {
      const result = machine.refillChange();
      expect(result).toEqual(100);
    });
  }); //end of refillChange()

  describe('Dispense Product', () => {
    it('should dispense sandwich with no change, and reduce quantity by 1', () => {
      const result = machine.purchaseItem('A3', 3.75);
      expect(result).toEqual({
        name: 'Peanut Butter & Jelly Sandwich',
        quantity: 9,
        change: 0
      });
    });
  });
});
