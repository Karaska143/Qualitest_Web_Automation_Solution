const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
var log4js = require('log4js');
var logger = log4js.getLogger();
var pgeIndexPage = require('../pages/automationpractice_indexpage')
var BrowserBots = require('../helper/BrowserBots');
const { browser } = require('protractor');

//var browserPage = browser.get(browser.baseUrl)
Given ('User launch automation practice webpage and clicks signin link', { timeout: 100 * 1000 }, async function () {
  await browser.get(browser.baseUrl)
  logger.info("Browser navigated to the URL");
  await BrowserBots.elementDisplayed(pgeIndexPage.lnkindexSignin)
  await BrowserBots.clickAction(pgeIndexPage.lnkindexSignin)
});