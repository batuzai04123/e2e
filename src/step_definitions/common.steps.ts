import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import Page from '../pages/Page';

@binding()
export class CommonSteps extends Page {

    @given(/^I navigate to url "([^"]*)"$/)
    public async goToUrl(url: string) {
        super.open(url);
    }

    @then(/^I see title page "([^"]*)" is displayed$/)
    public verifyPageTitle(expected_title: string) {
        const actual_title = browser.getTitle();

        assert.equal(actual_title, expected_title, `Title is not valid, Expected: ${expected_title} 
                    Actual: ${actual_title}`);
    }

    @then(/^I (can|cannot) see "([^"]*)" text displayed$/)
    public verifyTextIsDisplayed(condition: string, textValue: string) {
        const is_valid = (condition === 'can');

        assert.equal(is_valid, super.getVisibilityOfText(textValue));
    }
}
