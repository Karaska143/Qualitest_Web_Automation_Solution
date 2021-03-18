var log4js = require('log4js');
var logger = log4js.getLogger();

// To have only the page object properties for easy maintenance

var SigninPage = function(){

var txtEmail = element(by.css('#email'))
var txtPassword = element(by.css('#passwd'))
var btnSignin=element(by.css('button#SubmitLogin > span'))

this.txtEmail = txtEmail
this.txtPassword = txtPassword
this.btnSignin = btnSignin
}
module.exports = new SigninPage()