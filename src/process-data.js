function initInventory() {
  return {
    productCode: 'A5',
    productName: 'Roastbeef Sandwich',
    productCost: 4.25,
    quantity: 10
  };
}

const calName = data => {
  const itemData = {};

  data.map(item => {
    const projectNames = Object.keys(item.productName);

    projectNames.map(projectName => {
      if (!itemData[projectName]) {
        itemData[projectName] = initInventory();
      }
    });
  });
};

const processData = data => {
  return {
    productName: calName(data),
    quantity: calQty(data)
  };
};

module.exports = processData;
