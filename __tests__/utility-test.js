fs = require('fs');
code = fs.readFileSync('includes/utility.js','utf-8');
eval(code);

describe('utility', () => {
  it('adds the randomFunction global', () => {
    expect(randomFunction()).toBe('randomValue');
  });
});
