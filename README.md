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

## Jenkins CI/CD Setup (Windows)
1. Download and install Allure Jenkins Plugin, Green Balls
2. Once allure plugin is installed, go to Global Tools Configuration and scroll down to Allure Commandline
3. Click 'Add Allure Commandline', add any name you want, then select checkbox 'Install automatically' and finally select Maven version of Allure on dropdown 'From Maven Central' (2.13.x). Click Apply and Save.
4. Go to Home dashboard, and start creating a new Item > Job with proper name and description.
5. Select 'Source Code Management' to 'Git'.
6. In the 'Repository URL', input my git repo, and leave 'branches to build' as default.
7. On Build section, select build step 'Execute Windows Batch Command' and enter this command.

       @echo on
       cmd /c npm install
       cmd /c npm test
 
8. On 'Post Build Actions', select 'Add post build action' dropdown and click 'Allure Report', then enter this path.

       **/allure-results

9. Repeat step 8, but this time select 'Publish Junit Test result report' and enter `*.xml` in 'Test report XMLs' text field. Click apply and save.
10. Go to your newly created job and click 'Build Now' and you should see your test getting triggered from CI/CD setup.
11. This setup will generate 2 reports, one from Allure Report and the other is Test Result which is a JUnit generated test.

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
