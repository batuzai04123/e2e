# WebdriverIO CucumberJS Typescript

## Required Applicatioons and libraries
- Java 1.8
- Node.JS v12.6.x
- Visual Studio Code 
    - (with extension Cucumber-Gherkin installed from https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

## Usage

    npm install
    npm run test
    npm run test:debug
    npm run allure-report

## Alternative to npm run test using WDIO CLI Test Runner
On windows, run this command on the root directory of this project
    
    .\node_modules\.bin\wdio wdio.conf.js

Suffix this code above if you want to run scenarios with specific tags
     
     --cucumberOpts.tagExpression "@optional"


## Boilerplate project with CucumberJS configured with typescript

-   Allure Reporter
-   Typescript PageObjects
-   Typescirpt Cucumber step decorators
-   Chai For assertions
-   Selenium Standalone with chrome and firefox capabilties in headless mode
-   Vscode launch configuration to debug tests

## Debugging Tests

-   `browser.debug()` statement in code and then: `npm run test:debug` this will enalbe debug repl in console window
-   Add breakpoints in vscode or debugger statement and run launch configuration in vscode.

### Dependencies

Java must be installed to run allure reports
