const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    chromeWebSecurity: false,
    browser: "chrome",
    specPattern: "cypress/e2e/**/*.cy.js",
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    video: false,
    headless: false,
    retries: 1,
    watchForFileChanges: false,
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/",
      html: false,
      json: true,
      charts: true,
      embeddedScreenshots: false,
      inlineAssets: true,
      saveAllAttempts: false,
    }
  }
});
