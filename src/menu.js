const prompt = require('prompt-sync')();
const { viewList, addItem, removeItem, clearAllItems } = require('./shoppingList.js');

const showMenu = () => {
  let isRunning = true;

  while (isRunning) {
    console.log('How do you want to change your Shopping list?')
    console.log('Menu:');
    console.log('1. Add an Item');
    console.log('2. Remove Item');
    console.log('3. Clear all Items');
    console.log('4. Exit\n');

    viewList();

    const menuChoice = prompt('Choose an option (1-4): ').trim();
    if (menuChoice === '1') {
      const description = prompt('Enter item description: ');
      addItem(description);
    } else if (menuChoice === '2') {
      const itemChoice = prompt('Enter item number to remove: ')
      const itemIndex = Number(itemChoice) - 1;
      removeItem(itemIndex);
    } else if (menuChoice === '3') {
      clearAllItems();
    } else if (menuChoice === '4') {
      isRunning = false;
    } else {
      console.log('Invalid option, try again.');
    }

    console.clear();
  }
};

module.exports = { showMenu };