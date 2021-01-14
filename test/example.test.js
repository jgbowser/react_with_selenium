const { expect } = require('chai');

describe('making sure tests work', () => {
  it('correctly adds 1 + 1', () => {
    const sum = 1 + 1;
    expect(sum).to.eql(2);
  })
})