# Qualitest_Web_Automation_Solution
**
Cucumber BDD JavaScript framework **


#Framework:
This Framework allows us to cover all aspects of testing under one single test framework with Enhancing, Readability, maintenance and reusability. Our main objective is to reduce manual effort and increase the productivity with ease of use and less maintenance.

#Installation:
This is a test automation framework allowing users to create tests using protractor and CucumberJVM. In order to get started, install the below modules globally npm install -g protractor npm install -g protractor-multiple-cucumber-html-reporter-plugin

To kick off the execution:

protractor Configs/conf.js --params.environment=Env1
where ENV1 is the required environment to be executed

The package.json file has a list of dependencies needed for our framework. To install all dependencies listed in the file, run npm install command. All the dependencies will get installed in node_modules Folder.

#Folder Structure and Basic Coding Standards of our Framework:
All our Test scripts will be inside the folder called Test we follow Page object model and sub folders structure are explained below
Page Object model: Each and every page in the application is a class, each and every field in the page is method.
Config_Files:
This is the heart of the framework and Test Execution starts from here whenever the test scripts execution starts.
Configs/conf.js will contain all the configuration needed, Any customization: example: Browser capabilities, feature file path, step definitions path etc.,
Features:
Folders need to be created based on the functionality and name of the folder should represent the functionality, respective feature file will be created inside the folder.
Pages:
This will contain the all the object properties with page wise in java script file.
helper:
This will contain the required helper functions.
Step Definitions:
Here we will call the method which was written in functional Util for validations/logic of the Acceptance criteria, which in turn drive the feature files.
hooks:
This is one of key part of the framework. We have hooks that needs to be executed before, after, etc,
