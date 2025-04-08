//npx cypress run --record --key 20b677ff-4a99-4d3a-9cf8-bf42274799e4
const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  projectId: "42kcwi",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
