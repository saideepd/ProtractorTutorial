let homepage = function() {

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let operator = element(by.css('option[value="ADDITION"]'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = (url) => {
        browser.get(url);
    };

    this.enterFirstNumber = (firstNo) => {
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = (secondNo) => {
        secondNumber_input.sendKeys(secondNo);
    };

    this.selectOperator = () => {
        operator.click();
    }

    this.clickGo = () => {
        goButton.click();
    };

    this.verifyResult = (result) => {
        var output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();