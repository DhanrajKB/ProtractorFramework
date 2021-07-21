describe('demo calculator tests', function() {
  it('addition test', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(1000);
    element(by.model('first')).sendKeys('10');
    element(by.model("second")).sendKeys('30');
    // element(by.id('gobutton')).click();
    element(by.css('[ng-click="doAddition()"]')).click();

    let result = element(by.cssContainingText('.ng-binding','40'));
    expect(result.getText()).toEqual('40')

    browser.sleep(2000);
  });
  
});
  
