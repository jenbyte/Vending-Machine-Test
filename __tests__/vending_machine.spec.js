const VendingMachine = require('../src/vending-machine');

describe('Sandwich Vending Machine 🥪', () => {
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
        expect(result).toEqual('(A5) Roastbeef Sandwich - $5.75, qty: 8');
      });
      it('should print entire item when productCode is entered', () => {
        const result = machine.queryInventory('A3');
        expect(result).toEqual(
          '(A3) Peanut Butter & Jelly Sandwich - $4.50, qty: 5'
        );
      });
    });

    describe('When inventory does not exist', () => {
      it('should say item sold out when qty is 0', () => {
        const result = machine.queryInventory('A4');
        expect(result).toEqual('Sold Out');
      });
      it.skip('should throw an error, incorrect name', () => {
        const result = machine.queryInventory('gummy bears');
        expect(result).toThrow('Invalid Item');
      });
    });
  }); //end of queryInventory()

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

  describe('printInventory', () => {
    it('should print inventory in console', () => {
      const result = machine.printInventory();
      expect(result).toBe(true);
    });
  }); // end of printInventory()

  describe('Dispense Product', () => {
    it('should dispense sandwich with no change, and reduce quantity by 1', () => {
      const result = machine.purchaseItem('A3', 4.5);
      expect(result).toEqual(
        'Name: Peanut Butter & Jelly Sandwich, Change: $0.00 = $2*(0), $1*(0), 25¢*(0), 10¢*(0), 5¢*(0), VMQty: 9'
      );
    });
    it('should return correct change and reduce quantity by 1', () => {
      const result = machine.purchaseItem('A2', 5);
      expect(result).toEqual(
        'Name: Egg & Sausage Sandwich, Change: $0.50 = $2*(0), $1*(0), 25¢*(2), 10¢*(0), 5¢*(0), VMQty: 9'
      );
    });
    it('should return money if less than price', () => {
      const result = machine.purchaseItem('A3', 4.25);
      expect(result).toEqual('Insufficient Funds');
    });
    it('should return money correct change in descending order', () => {
      const result = machine.purchaseItem('A1', 6.65);
      expect(result).toBe(
        'Name: Tuna Sandwich, Change: $2.40 = $2*(1), $1*(0), 25¢*(1), 10¢*(1), 5¢*(0), VMQty: 9'
      );
    });
  });
});
