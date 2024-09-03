const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  projectId: 'bs3m6o',
  e2e: {
    video: true, // Enable video recording
    screenshotOnRunFailure: true, // Automatically take screenshots on failure
    videosFolder: 'cypress/videos', // Directory for videos
    screenshotsFolder: 'cypress/screenshots', // Directory for screenshots

    setupNodeEvents(on, config) {
      // Implement node event listeners here

      // Allure writer setup
      allureWriter(on, config);

      return config;
    },

    // Mochawesome reporter configuration
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true, // Set to true to generate an HTML report
      json: true
    }
  }
});
