const maxRecurring = require('./max')

test('maxRecurring should be a function', () => {
    expect(typeof maxRecurring).toEqual('function');
});

test('should find most frequent character', () => {
    expect(maxRecurring('sisusbsnshsjsmskslstsw')).toEqual('s');
});