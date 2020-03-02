import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import loginpage from '../pages/LoginPage';

@binding()
export class LoginSteps {

    @when(/^I enter (username|password) "([^"]*)"$/)
    public enterUsername(fieldType: string, textValue: string) {
        fieldType === 'username'
            ? loginpage.setUsername(textValue)
            : loginpage.setPassword(textValue);
    }

    @when(/^I tap Login button$/)
    public clickLoginButton() {
        loginpage.clickLoginButton();
    }

    @then(/^I can see form displays "([^"]*)" message$/)
    public verifyErrorMessage(expected_message: string) {
        const actual_message = loginpage.getFormMessage();

        assert.equal(actual_message, expected_message, `Expected: ${expected_message} is not equal to Actual: ${actual_message}`)
    }
}
