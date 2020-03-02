import { Browser } from "@wdio/sync";

const fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const customWait = 15000;

export default abstract class Page {
    private _path: string;

    public open(path: string): void {
        this._path = path;
        browser.url(path);
    }

    public setText(textElement: string, text: string): void {
        browser.$(textElement).waitForExist(customWait, undefined, undefined);
        browser.$(textElement).clearValue();
        browser.$(textElement).setValue(text);

    }

    public click(element: string): void {
        browser.$(element).waitForDisplayed(customWait, false, 'Element not visible');
        browser.$(element).click();
    }

    public getVisibilityOfText(textValue: string): boolean {
        const el = $(`//*[contains(text(), "${textValue}")]`);
        return el.waitForExist(customWait, false, `Text ${textValue} is not present`);
    }

    public hoverTo(element: string): void {
        browser.$(element).moveTo(undefined, undefined);
    }

    /**
     * Run Javascript on Selenium
     * @param command - Javascript Command
     */
    public runJS(command: string): any {
        return browser.execute(command);
    }
}
