const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    env: {
      // TAGS: "@only",
    },
    baseUrl: "https://bugbank.netlify.app/",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config)

      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }))

      return config
    },
  },
});