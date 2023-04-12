const hello = require('../src/hello.js');

it('should say hello name', () => {
    expect(hello('bob')).to.equal('Hello bob');
});

it('should say hello world', () => {
    expect(hello()).to.equal('Hello world');
});
