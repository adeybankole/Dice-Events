const { defineConfig } = require('cypress')

module.exports = defineConfig({
  "defaultCommandTimeout": 5000,
  "defaultTimeout": 10000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: 0,
  reporter: '../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require("@deploysentinel/cypress-recorder")(on, config)
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern:
      ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },
})
