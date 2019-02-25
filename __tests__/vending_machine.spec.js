const VendingMachine = require('../src/vending-machine');

describe('Sandwich Vending Machine 🥪', () => {
  let machine;

  beforeEach(() => {
    machine = new VendingMachine('../data.json');
  }); // end of beforeEach()

  describe('queryInventory', () => {
    it('should print item when productName is entered', () => {
      const result = machine.queryInventory('Roastbeef Sandwich');
      expect(result).toEqual('(A5) Roastbeef Sandwich - $5.75, qty: 8');
    });
    it('should print item when productCode is entered', () => {
      const result = machine.queryInventory('A3');
      expect(result).toEqual(
        '(A3) Peanut Butter & Jelly Sandwich - $4.50, qty: 5'
      );
    });
    it('should say item sold out when name is entered and qty is 0', () => {
      const result = machine.queryInventory('BLT Sandwich');
      expect(result).toEqual('Sold Out');
    });
    it('should say item sold out when code is entered and qty is 0', () => {
      const result = machine.queryInventory('A4');
      expect(result).toEqual('Sold Out');
    });
  }); //end of queryInventory()

  describe('printInventory', () => {
    it('should print inventory in console', () => {
      const result = machine.printInventory();
      expect(result).toEqual(true);
    });
  }); // end of printInventory()

  describe('purchaseItem', () => {
    it('should dispense sandwich with no change, and reduce quantity by 1', () => {
      const result = machine.purchaseItem('A3', 4.5);
      expect(result).toEqual(
        'Name: Peanut Butter & Jelly Sandwich, Change: $0.00, VMQty: 4'
      );
    });
    it('should return correct change and reduce quantity by 1', () => {
      const result = machine.purchaseItem('A2', 5);
      expect(result).toEqual(
        'Name: Egg & Sausage Sandwich, Change: $0.50 = $2*(0), $1*(0), 25¢*(2), 10¢*(0), 5¢*(0), VMQty: 6'
      );
    });
    it('should return payment if less than price', () => {
      const result = machine.purchaseItem('A3', 4.25);
      expect(result).toEqual('Insufficient Funds');
    });
    it('should return money if machine has insufficient change', () => {
      const result = machine.purchaseItem();
      expect(result).toEqual('Insufficient Funds');
    });
    it('should return correct change in the fewest coins possible', () => {
      const result = machine.purchaseItem('A1', 6.65);
      expect(result).toBe(
        'Name: Tuna Sandwich, Change: $2.40 = $2*(1), $1*(0), 25¢*(1), 10¢*(1), 5¢*(0), VMQty: 4'
      );
    });
  }); // end of purchaseItem()

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
});
