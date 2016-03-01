test.open('http://doctorwhotv.co.uk/')
    .assert.text('#nav').is('Navigation')
    .assert.visible('#nav')
    .assert.attr('#nav', 'data-nav', 'true')
    .done();
