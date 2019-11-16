module.exports = {
  'cannot submit an empty form': browser => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app')
      .click('button')
      .waitForElementNotPresent('#thank_you')
      .end();
  },

  'submit form shows "thank you" view': browser => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app')
      .setValue('textarea', 'Some text')
      .click('button')
      .waitForElementPresent('#thank_you')
      .end();
  },
}
