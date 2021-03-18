//const {element, by} = require ('protractor');
var log4js = require('log4js');
var logger = log4js.getLogger();

var LoginPage = function(){

    //Objects: ElementFinder;

//     this.tutorialLink = element(by.linkText("Tutorial"))
// var tutorialLink = this.tutorialLink
var tutorialLink = element(by.css("div.protractor-container [href='#/tutorial']"))
var tutorialsLink= element(by.css("div.protractor-container [href='#/tutorials']"))
var protractorLogo = element(by.css(".protractor-logo"))

this.tutorialLink = tutorialLink
this.tutorialsLink = tutorialsLink
this.protractorLogo = protractorLogo

    //Functions

       /* this.clickTutorial=  async()=>{
           
            await this.tutorialLink.click()
            logger.info("successful click on Tutorial link")

        } */
}
module.exports = new LoginPage()