describe('my awesome website', function() {
    it('should do some chai assertions', function() {
        return browser
            .url('http://webdriver.io')
            .getTitle().should.eventually.be.equal('WebdriverIO');
    });
});
