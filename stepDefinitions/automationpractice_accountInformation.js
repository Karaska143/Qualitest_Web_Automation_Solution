const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
var log4js = require('log4js');
var logger = log4js.getLogger();
var pgeSigninPage= require('../pages/automationpractice_signinpage')
var pgeHomePage= require('../pages/automationpractice_homepage')
var pgeAccountInfo = require('../pages/automationpractice_accountinformation')
var BrowserBots = require('../helper/BrowserBots');
const { browser } = require('protractor');

When ('User enters My account section, changes Firstname, update mandatory fields and click save',{ timeout: 100 * 1000 }, async function () {
 // await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(pgeAccountInfo.lnkAccInfo)
  await BrowserBots.clickAction(pgeAccountInfo.lnkAccInfo)
  //Entered Hardcoded values for testing, this will be ideally managed through 'Data Tier' or through Scenario Outline
  txtnewName = 'Karthickqualitest'
  await BrowserBots.enterText(pgeAccountInfo.txtFirstName, txtnewName)
  await BrowserBots.enterText(pgeAccountInfo.txtPassword, 'qualitest')
  await BrowserBots.clickAction(pgeAccountInfo.btnSave)
});

Then ('Your personal information has been successfully updated banner to be shown',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  var txtAlert = await BrowserBots.getText(pgeAccountInfo.bnrSuccess)
  expect(txtAlert).to.contain('Your personal information has been successfully updated.')
});

Then('First name should be reflected in homepage',{ timeout: 100 * 1000 }, async function () {
  var txtNameReplication = await BrowserBots.getText(pgeAccountInfo.lnkAccName)
  expect(txtNameReplication).to.contain(txtnewName)
});