class Element {
    constructor(elementName, xpath) {
        this.elementName = elementName;
        this.element = element(by.xpath(xpath));
    }

    click() {
        return this.element.click();
    }
}

class ElementById {
    constructor(elementName, id) {
        this.elementName = elementName;
        this.element = element(by.id(id));
    }

    click() {
        return this.element.click();
    }

    isDisplayed() {
        return this.element.isDisplayed();
    }

    sendKeys(input) {
        return this.element.sendKeys(input);
    }
}

class ElementByClass {
    constructor(elementName, name) {
        this.elementName = elementName;
        this.element = element(by.className(name));
    }

    getText() {
        return this.element.getText();
    }
}

module.exports = {
    ElementById,
    Element,
    ElementByClass
};