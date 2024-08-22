const { defineConfig } = require("cypress");

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
      // implement node event listeners here
    }
  }
});
