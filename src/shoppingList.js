const shoppingList = [
  {
    name: "apples",
    quantity: 3,
    price: 1.5
  },
  {
    name: "carton of 12 eggs",
    quantity: 1,
    price: 7.99
  },
]

const addItem = (itemToAdd) => {
  if (!itemToAdd.name || !itemToAdd.quantity || !itemToAdd.price) {
    console.log('missing information.');
    return;
  }

  // We could also have just written this code that avoids creating a new variable:
  shoppingList.push(itemToAdd);
  console.log(`Added "${itemToAdd.name}" to your shopping list!`);
};

const removeItem = (itemName, newQuantity) => {
  const itemIndex = shoppingList.findIndex((item) => item.name === itemName);

  if (itemIndex === -1) {
    console.log('Item not on list.');
    return;
  }

  if (newQuantity === 0) {
    shoppingList.splice(itemIndex, 1);
    console.log(`"${itemName}" has been removed!`);
  }

  shoppingList[itemIndex].quantity -= newQuantity
  console.log(`"${itemName}" has been updated!`);

};

const viewList = () => {
  let totalItems = 0
  let totalCost = 0
  if (shoppingList.length === 0) {
    console.log('No items yet! Add one to get started.');
    return;
  }

  console.log('Your List:');
  shoppingList.forEach((item, index) => {4
    totalItems += item.quantity
    totalCost += item.price
    console.log(`- ${item.quantity} ${item.name}: $${item.price}`);
  });
  console.log(`\nTotal Items: ${totalItems}\ntotal cost: ${totalCost}`)
  console.log();
};

const clearAllItems = () => {
  shoppingList.length = 0;
  console.log('All Items cleared!');
};

module.exports = { addItem, viewList, removeItem, clearAllItems };