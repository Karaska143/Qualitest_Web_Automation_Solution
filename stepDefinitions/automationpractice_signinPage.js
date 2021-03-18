const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
var log4js = require('log4js');
var logger = log4js.getLogger();
var pgeSigninPage= require('../pages/automationpractice_signinpage')
var pgeHomePage= require('../pages/automationpractice_homepage')
var BrowserBots = require('../helper/BrowserBots');
const { browser } = require('protractor');

When ('User logged in with valid credentials',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(pgeSigninPage.txtEmail)
  //Entered Hardcoded values for testing, this will be ideally managed through 'Data Tier' or through Scenario Outline
  await BrowserBots.enterText(pgeSigninPage.txtEmail, 'karthick.Qualitest@gmail.com')
  await BrowserBots.enterText(pgeSigninPage.txtPassword, 'qualitest')
  await BrowserBots.clickAction(pgeSigninPage.btnSignin)
  await BrowserBots.elementDisplayed(pgeHomePage.lnkHomeButton)
  await BrowserBots.clickAction(pgeHomePage.lnkHomeButton)
   logger.info("Homepage loaded successfully");
});

When ('User logged in with valid login credentials',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(pgeSigninPage.txtEmail)
  //Entered Hardcoded values for testing, this will be ideally managed through 'Data Tier' or through Scenario Outline
  await BrowserBots.enterText(pgeSigninPage.txtEmail, 'karthick.Qualitest@gmail.com')
  await BrowserBots.enterText(pgeSigninPage.txtPassword, 'qualitest')
  await BrowserBots.clickAction(pgeSigninPage.btnSignin)
  await BrowserBots.elementDisplayed(pgeHomePage.lnkHomeButton)
   logger.info("Homepage loaded successfully");
});


