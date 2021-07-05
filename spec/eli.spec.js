
const { element, browser } = require('protractor');
const chai = require('chai');
const { beforeEach } = require('mocha');
const expect = chai.expect;
const PageFactory = require('../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;

describe('youtube', function () {
    before(async function () {
        browser.waitForAngularEnabled(false);
    });

    beforeEach(async function () {
        await PageFactory.getPage('Home').open();
        await browser.driver.manage().window().maximize();
        await PageFactory.getPage('Home').wait(3000);
    });

    it('check dark theme is visible', async function () {
        await PageFactory.getPage('Home').filterIcon.click();
        await PageFactory.getPage('Home').wait(2000);
        await PageFactory.getPage('Home').filterContainer.isDisplayed();
        await PageFactory.getPage('Home').search.click();
        await PageFactory.getPage('Home').searchInput.sendKeys("լամպ\n");
        await PageFactory.getPage('Home').itemLink.click();
        await PageFactory.getPage('Home').itemName.getText();
        expect(itemName).equal('Սիլիկոնե լամպ – Նապաստակ');
    });
});