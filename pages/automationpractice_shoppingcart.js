var log4js = require('log4js');
var logger = log4js.getLogger();

// To have only the page object properties for easy maintenance

var ShoppingCart = function(){

var lblShopcarttitle = element(by.css('#cart_title'))
var btnProceedCheckout = element(by.css('a.standard-checkout > span'))
var btnProceedCheckoutAdd = element(by.css('button[name=\'processAddress\'] > span'))
var btnProceedCheckoutAdd2 = element(by.css('button[name=\'processCarrier\'] > span'))
var chkTerms = element(by.css('#cgv'))

var btnPayOption = element(by.css('.bankwire'))

var lblOrderSummary = element(by.css('.page-heading'))
var btnConfirmOrder = element(by.css('button.button-medium > span'))

var lblOrderConfirm = element(by.css('.page-heading'))
var lblOrderComplete = element(by.css('p.cheque-indent > .dark'))
var lblOrderNum = element(by.xpath('//div[@class=\'box\']'))

var lnkProfile = element(by.css('a.account > span'))

var btnOrderHistory = element(by.css('a[title=\'Orders\'] > span'))
var lnkOrderNum = element(by.css('tr.first_item .color-myaccount'))
var lnkSignout = element(by.css('.logout'))

this.lblShopcarttitle = lblShopcarttitle
this.btnProceedCheckout = btnProceedCheckout
this.btnProceedCheckoutAdd = btnProceedCheckoutAdd
this.btnProceedCheckoutAdd2 = btnProceedCheckoutAdd2
this.chkTerms = chkTerms
this.btnPayOption = btnPayOption
this.lblOrderSummary = lblOrderSummary
this.btnConfirmOrder = btnConfirmOrder
this.lblOrderConfirm = lblOrderConfirm
this.lblOrderComplete = lblOrderComplete
this.lblOrderNum = lblOrderNum
this.lnkProfile = lnkProfile
this.btnOrderHistory = btnOrderHistory
this.lnkOrderNum = lnkOrderNum
this.lnkSignout = lnkSignout

}
module.exports = new ShoppingCart()