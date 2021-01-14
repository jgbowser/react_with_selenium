const { expect } = require('chai');
const { Builder, By, Key, until, } = require('selenium-webdriver');

describe('making sure tests work', () => {
  it('correctly adds 1 + 1', () => {
    const sum = 1 + 1;
    expect(sum).to.eql(2);
  });
});

describe('making sure selenium is working', () => {
  const driver = new Builder().forBrowser('firefox').build();

  it('navigates to app and gets title', async () => {
    await driver.get('http://localhost:3000/');
    const title = await driver.getTitle();

    expect(title).to.eql('Onboarding');
  });

  after('kill browser', async () => driver.quit());
})