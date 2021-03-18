var log4js = require('log4js');
var logger = log4js.getLogger();

// To have only the page object properties for easy maintenance

var HomePage = function(){

var lnkProfileName = element(by.css('a.account > span'))
var lnkHomeButton = element(by.css('a[title=\'Home\'] > span'))
var lnkTshirts = element(by.xpath('//*[@id="block_top_menu"]/ul/li[3]'))
var btnAddtoCart = element(by.css('button[name=\'Submit\'] > span'))
var btnProceedCheckout = element(by.css('a.button-medium > span'))
var prdProductone = element(by.css('.product-name[title=\'Faded Short Sleeve T-shirts\''))

this.lnkProfileName = lnkProfileName
this.lnkHomeButton = lnkHomeButton
this.lnkTshirts = lnkTshirts
this.btnAddtoCart = btnAddtoCart
this.btnProceedCheckout = btnProceedCheckout
this.prdProductone = prdProductone
}
module.exports = new HomePage()