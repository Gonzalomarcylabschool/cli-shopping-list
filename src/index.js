const { showMenu } = require('./menu.js');

// This is the main entry point for the application.
const startApp = () => {
  console.log("\nWelcome to CLI Shopping list! 📋\n");
  showMenu();
  console.log("Goodbye! 👋");
}

startApp();