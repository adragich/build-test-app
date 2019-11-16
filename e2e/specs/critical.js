module.exports = {
  'sanity test': browser => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app')
      .end();
  }
}
