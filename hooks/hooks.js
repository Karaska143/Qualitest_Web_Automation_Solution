var {After, Status, AfterAll, Before} = require('cucumber');
const { browser } = require('protractor');

After(async function (scenario) {
  console.log("Inside After step - Scenario - " + scenario.result.status)
  //if (scenario.result.status === Status.FAILED) {
    const screenShot = await browser.takeScreenshot()
    this.attach(screenShot, "image/png");
    console.log("Screenshot taken for scenario")
 // }
});

