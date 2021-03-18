const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
var log4js = require('log4js');
var logger = log4js.getLogger();
var pgeShopCart= require('../pages/automationpractice_shoppingcart')
var BrowserBots = require('../helper/BrowserBots');
const { browser } = require('protractor');
var orderNum = '';

Then ('User shown with shopping cart summary for checkout',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(pgeShopCart.lblShopcarttitle)
  await BrowserBots.elementDisplayed(pgeShopCart.btnProceedCheckout)
  await BrowserBots.clickAction(pgeShopCart.btnProceedCheckout)
  await BrowserBots.elementDisplayed(pgeShopCart.btnProceedCheckoutAdd)
  await BrowserBots.clickAction(pgeShopCart.btnProceedCheckoutAdd)
});

Then ('User agrees the terms and proceed to checkout',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(pgeShopCart.chkTerms)
  await BrowserBots.clickAction(pgeShopCart.chkTerms)
  await BrowserBots.elementDisplayed(pgeShopCart.btnProceedCheckoutAdd2)
  await BrowserBots.clickAction(pgeShopCart.btnProceedCheckoutAdd2)
});

When ('User performs successful payment and confirm order',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(pgeShopCart.btnPayOption)
  await BrowserBots.clickAction(pgeShopCart.btnPayOption)
  await BrowserBots.elementDisplayed(pgeShopCart.lblOrderSummary)
  await BrowserBots.elementDisplayed(pgeShopCart.btnConfirmOrder)
  await BrowserBots.clickAction(pgeShopCart.btnConfirmOrder)
});

Then ('Order should be placed successfully',{ timeout: 100 * 1000 }, async function () {
  //await browser.get(browser.baseUrl) 
  await BrowserBots.elementDisplayed(pgeShopCart.lblOrderConfirm)
  await BrowserBots.elementDisplayed(pgeShopCart.lblOrderComplete)
  orderNum = await BrowserBots.getText(pgeShopCart.lblOrderNum)
  await BrowserBots.elementDisplayed(pgeShopCart.lnkProfile)
  await BrowserBots.clickAction(pgeShopCart.lnkProfile)
});

Then ('Order should be updated in the Order history',{ timeout: 100 * 1000 }, async function () {
  await BrowserBots.elementDisplayed(pgeShopCart.btnOrderHistory)
  await BrowserBots.clickAction(pgeShopCart.btnOrderHistory)
  var orderNumHistoryFirst = await BrowserBots.getText(pgeShopCart.lnkOrderNum)  
  expect(orderNum).to.contain(orderNumHistoryFirst)

  await BrowserBots.clickAction(pgeShopCart.lnkSignout)
  //expect(orderNum).to.contain('IBHSQFZUQ')
  
});