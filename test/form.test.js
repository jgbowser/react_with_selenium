const { expect } = require('chai');
const { Builder, By, Key, until } = require('selenium-webdriver');

const formData = {
  name: 'John Bowser',
  address: '123 Main St.',
  ssn: '123-45-6789',
}

describe('Form Submission', () => {
  const driver = new Builder().forBrowser('firefox').build();

  it('successfully submits form when given valid data', async () => {
    await driver.get('http://localhost:3000/');

    const nameInput = await driver.findElement(By.id('name'));
    await nameInput.sendKeys(formData.name);

    const addressInput = await driver.findElement(By.id('address'));
    await addressInput.sendKeys(formData.address);

    const ssnInput = await driver.findElement(By.id('ssn'));
    await ssnInput.sendKeys(formData.ssn);

    await driver.findElement(By.id('submit')).click();
    const submitSuccess = await driver.wait(until.elementLocated(By.css('h2'))).getText();

    expect(submitSuccess).to.eql('Form Submitted');
  });

  after('kill browser', async () => await driver.quit());
});