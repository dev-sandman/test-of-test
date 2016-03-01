var casper = require('casper').create();

casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});

casper.run();

casper.test.begin("Hello, Test!", 1, function(test) {
  test.assert(true);
  test.done();
});
