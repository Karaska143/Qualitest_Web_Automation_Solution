var d=new Date();
var timeStamp=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"_"+d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds();
var nameTime = d.getMinutes()
var HtmlReporter = require('protractor-html-screenshot-reporter');
exports.config = {
//param feature
    params: {
        environment:null,
    },
    allScriptsTimeout:110,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  //  'MaxSession': 3,
    plugins: [{
        package:require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            removeOriginalJsonReportFile:true,
            openReportInBrowser:true,
            reportPath:'Cucumber-Multi-Report/Report-',
        }
    }],

    //'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub', ---> Can be used for browserstack
   //seleniumAddress: 'http://localhost:4444/wd/hub/', ---> Used for webdriver
    //useAllAngular2AppRoots: true,
    directConnect: true,  //Direct Connect in local
    
    //ChromeDriver Path
    chromeDriver: '../chromedriver',
    
    //capabilities - We can use Multicapabilities for validating in different OS, browsers or mobile devices in device farm like Browserstack, etc
    capabilities:
        {
          browserName : 'chrome',
          os : 'MacOS',
      },
      specs:['../features/qualitestFeatures.feature'],
      cucumberOpts: {
        // required step definitions
        require: ['../stepDefinitions/*.js','../hooks/hooks.js'],
        format: 'json:./tmp/results.json',
        strict: true
    },
onPrepare: function() {
    global.orderNumHistoryFirst = ""
    global.orderNum = ""
    //Use of environment selection during run-time
    switch (browser.params.environment) {
     case "ENV1":
         browser.baseUrl="http://automationpractice.com/index.php";
         break;
     case "ENV2":
         browser.baseUrl="http://automationpractice.com/index.php";
         break;
     case "ENV3":
         browser.baseUrl="http://automationpractice.com/index.php";
         break;
     default:
         browser.baseUrl="http://automationpractice.com/index.php";
    }
            browser.manage().window().maximize();
            browser.manage().timeouts().pageLoadTimeout(90000);
            browser.manage().timeouts().implicitlyWait(35000);
            browser.ignoreSynchronization = true;
            browser.ignoreUncaughtExceptions= true;
   },
 };