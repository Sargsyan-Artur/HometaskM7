class BasePage {

    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    }

    open(url) {
        return browser.get(url);
    }
}

module.exports = BasePage;