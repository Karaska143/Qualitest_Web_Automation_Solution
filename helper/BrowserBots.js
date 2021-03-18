const { browser } = require("protractor");
var log4js = require('log4js');
var logger = log4js.getLogger();
const expect = require('chai').expect;

 this.clickAction = async function(ele){
        console.log("clickAction Function")
         await ele.click()
};

this.elementDisplayed = async function(ele){
        console.log("elementDisplayed Function")
         await ele.isDisplayed()
};

this.enterText = async function(ele, val){
    console.log("Enter text Function")
    await ele.clear()
    await ele.sendKeys(val)
};

this.mouseMoveFn = async function(ele){
    console.log("mousemove Function")
     //await browser.actions.mouseMove(ele).click().perform()

     var hiddenElement = browser.findElement(protractor.by.css('.product-name[title=\'Faded Short Sleeve T-shirts\''));
        await browser.executeScript("arguments[0].click()", hiddenElement)
};

this.getText = async function (ele) {
    logger.info("Getting Text of Element" + ele);
    return ele.getText()
};
