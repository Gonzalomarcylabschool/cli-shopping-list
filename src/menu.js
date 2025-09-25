const prompt = require('prompt-sync')();
const { viewList, addItem, removeItem, clearAllItems } = require('./shoppingList.js');

const showMenu = () => {
  let isRunning = true;

  while (isRunning) {
    // console.log('How do you want to change your Shopping list? 🔁\n')
    console.log('📖 Menu:\n');
    console.log('1. Add an Item 👍');
    console.log('2. Remove Item 🥲');
    console.log('3. ⚠️ Clear all Items⚠️');
    console.log('4. See list 👀')
    console.log('0. Exit ✌️\n');

    // viewList();

    const menuChoice = prompt('Choose an option 🤔(0-4): \n').trim();
    if (menuChoice === '1') {
      const newItem = {};
      newItem.name = prompt('Enter item name: ');
      const price = prompt('Enter price: ');
      const quantity = prompt('Enter quantity: ');
      newItem.price = Number(price);
      newItem.quantity = Number(quantity);
      addItem(newItem);
      console.log(`You added ${quantity} ${newItem.name} at $${price} each to your shopping list!` )
      prompt('Press enter to continue...');
    } else if (menuChoice === '2') {
      const itemChoice = prompt('Enter item to remove: ')
      const newQuantity = prompt('Enter amount to remove: ')
      removeItem(itemChoice, Number(newQuantity));
    } else if (menuChoice === '3') {
      const warn = prompt('⚠️ ⚠️ ⚠️ ARE YOU SURE YOU WANT TO CLEAR YOU LIST? ⚠️ ⚠️ ⚠️\n(Y/N)')
      if (warn === 'Y' || warn === 'y'){
        clearAllItems();
        prompt('Press enter to continue...');
      } else {
        prompt('Your list is unchanged.\nPress enter to continue...')
      }
    } else if (menuChoice === '4'){
      viewList();
      prompt('Press enter to continue...');
    } else if (menuChoice === '0') {
      isRunning = false;
    } else { 
      console.log('Invalid option, try again.');
    }

    console.clear();
  }
};

module.exports = { showMenu };