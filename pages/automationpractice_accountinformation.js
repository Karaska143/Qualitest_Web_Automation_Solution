var log4js = require('log4js');
var logger = log4js.getLogger();

// To have only the page object properties for easy maintenance

var AccountInformation = function(){

var lnkAccInfo = element(by.css('a[title=\'Information\'] > span'))
var txtFirstName = element(by.css('#firstname'))
var txtPassword = element(by.css('#old_passwd'))
var btnSave = element(by.css('button[name=\'submitIdentity\'] > span'))
var bnrSuccess = element(by.css('.alert'))
var lnkAccName = element(by.css('a.account > span'))

this.lnkAccInfo = lnkAccInfo
this.txtFirstName = txtFirstName
this.txtPassword = txtPassword
this.btnSave = btnSave
this.bnrSuccess = bnrSuccess
this.lnkAccName = lnkAccName

}

module.exports = new AccountInformation()