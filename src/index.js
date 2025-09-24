const { showMenu } = require('./menu.js');

// This is the main entry point for the application.
const startApp = () => {
  console.log("Welcome to CLI Shopping list!\n");
  showMenu();
  console.log("Goodbye!");
}

startApp();