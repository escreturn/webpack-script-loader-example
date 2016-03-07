fs = require('fs');
code = fs.readFileSync('dist/main.bundle.js','utf-8');
eval(code);

describe('bundle', () => {
  it('adds the randomFunction global', () => {
    expect(randomFunction()).toBe('randomValue');
  });
});
