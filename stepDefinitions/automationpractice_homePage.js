const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
var log4js = require('log4js');
var logger = log4js.getLogger();
var pgeHomePage= require('../pages/automationpractice_homepage')
var pgeShopCart= require('../pages/automationpractice_shoppingcart')
var BrowserBots = require('../helper/BrowserBots');
const { browser } = require('protractor');

Then ('User should be able to order T-Shirt and proceed to checkout',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(pgeHomePage.lnkTshirts)
  await BrowserBots.clickAction(pgeHomePage.lnkTshirts)
  await BrowserBots.mouseMoveFn(pgeHomePage.prdProductone)
  await BrowserBots.elementDisplayed(pgeHomePage.btnAddtoCart)
  await BrowserBots.clickAction(pgeHomePage.btnAddtoCart)
  await BrowserBots.elementDisplayed(pgeHomePage.btnProceedCheckout)
  await BrowserBots.clickAction(pgeHomePage.btnProceedCheckout)
});
