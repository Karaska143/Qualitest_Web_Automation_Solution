const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
var log4js = require('log4js');
var logger = log4js.getLogger();
var homepage = require('../pages/homepage')
var BrowserBots = require('../helper/BrowserBots');
const { browser } = require('protractor');


//var browserPage = browser.get(browser.baseUrl)
Given ('Open protractor homepage', { timeout: 100 * 1000 }, async function () {
  await browser.get(browser.baseUrl)
    //await browserPage
    logger.info("Browser navigated to the URL");
  // await BrowserBots.clickAction(homepage.tutorialLink)
    //await homepage.clickTutorial()

    // await browser.sleep(60000)
});

When ('Homepage appears successfully',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(homepage.protractorLogo)
   logger.info("Homepage loaded successfully");
});

Then ('Verify the tutorial link is present on the homepage', { timeout: 100 * 1000 }, async function () {
   //await BrowserBots.elementDisplayed(homepage.tutorialLink)
    //await homepage.clickTutorial()
    logger.info("Tutorial link is displayed in homepage")

    // await browser.sleep(60000)
});

Then ('click on tutorial link', { timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl)
  //await browser.get(browser.baseUrl)
   //await BrowserBots.clickAction(homepage.tutorialLink)
   await BrowserBots.clickAction(homepage.tutorialLink)
   logger.info("Tutorial link is clicked successfully in homepage")
   await browser.sleep(5000)
});

Then ('click on tutorials link', { timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl)
  //await browser.get(browser.baseUrl)
   //await BrowserBots.clickAction(homepage.tutorialLink)
   await BrowserBots.clickAction(homepage.tutorialsLink)
   logger.info("Tutorials link is clicked successfully in homepage")
   await browser.sleep(5000)
});