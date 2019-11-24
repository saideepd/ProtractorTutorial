 describe('demo calculator tests', () => {

    it('addition test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        // element(by.buttonText('Go!')).click();
        element(by.css('[ng-click="doAddition()"]')).click();
        var result = element(by.cssContainingText('.ng-binding', '5'));

        expect(result.getText()).toEqual('5');
        
        //browser.sleep(2000);
    });

    it('subtraction test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(3);
        // element(by.buttonText('Go!')).click();
        element(by.css('option[value="SUBTRACTION"]')).click();
        element(by.css('[ng-click="doAddition()"]')).click();
        var result = element(by.cssContainingText('.ng-binding', '2'));

        expect(result.getText()).toEqual('2');
        
        //browser.sleep(2000);
    });

    it('multiplication test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(3);
        // element(by.buttonText('Go!')).click();
        element(by.css('option[value="MULTIPLICATION"]')).click();
        element(by.css('[ng-click="doAddition()"]')).click();
        var result = element(by.cssContainingText('.ng-binding', '15'));

        expect(result.getText()).toEqual('15');
        
        //browser.sleep(2000);
    });

    it('division test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(2);
        // element(by.buttonText('Go!')).click();
        element(by.css('option[value="DIVISION"]')).click();
        element(by.css('[ng-click="doAddition()"]')).click();
        var result = element(by.cssContainingText('.ng-binding', '2.5'));

        expect(result.getText()).toEqual('2.5');
        
        //browser.sleep(2000);
    });

    it('modulo test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(3);
        // element(by.buttonText('Go!')).click();
        element(by.css('option[value="MODULO"]')).click();
        element(by.css('[ng-click="doAddition()"]')).click();
        var result = element(by.cssContainingText('.ng-binding', '2'));

        expect(result.getText()).toEqual('2');
        browser.takeScreenshot();
        //browser.sleep(2000);
    });

 });