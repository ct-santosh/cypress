const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.js',
    // Other e2e-specific configurations can go here
  },
});
