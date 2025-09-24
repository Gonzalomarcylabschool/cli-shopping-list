const shoppingList = [
  {
    description: 'soap',
  },
  {
    description: 'chicken breast',
  },
];

const addItem = (description) => {
  if (!description) {
    console.log('No description provided.');
    return;
  }

  // We could also have just written this code that avoids creating a new variable:
  const newItem = {
    description,
  };
  shoppingList.push(newItem);
  console.log(`Added "${newItem.description}" to your shopping list!`);
};

const removeItem = (itemIndex) => {
  const item = shoppingList[itemIndex];

  if (!item) {
    console.log('Invalid item number.');
    return;
  }

  shoppingList.splice(itemIndex, 1);
  console.log(`"${item.description}" has been removed  marked as completed!`);
};

const viewList = () => {
  if (shoppingList.length === 0) {
    console.log('No items yet! Add one to get started.');
    return;
  }

  console.log('Your Tasks:');
  shoppingList.forEach((item, index) => {4
    console.log(`${index + 1}. [${item.isComplete ? 'x' : ' '}] ${item.description}`);
  });
  console.log();
};

const clearAllItems = () => {
  tasks.length = 0;
  console.log('All Items cleared!');
};

module.exports = { addItem, viewList, removeItem, clearAllItems };