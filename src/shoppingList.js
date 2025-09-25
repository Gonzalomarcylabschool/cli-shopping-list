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

const removeItem = (itemIndex) => {
  const item = shoppingList[itemIndex];

  if (!item) {
    console.log('Invalid item number.');
    return;
  }

  shoppingList.splice(itemIndex, 1);
  console.log(`"${item.name}" has been removed  marked as completed!`);
};

const viewList = () => {
  if (shoppingList.length === 0) {
    console.log('No items yet! Add one to get started.');
    return;
  }

  console.log('Your Tasks:');
  shoppingList.forEach((item, index) => {4
    console.log(`${index + 1}. [${item.isComplete ? 'x' : ' '}] ${item.name}`);
  });
  console.log();
};

const clearAllItems = () => {
  tasks.length = 0;
  console.log('All Items cleared!');
};

module.exports = { addItem, viewList, removeItem, clearAllItems };