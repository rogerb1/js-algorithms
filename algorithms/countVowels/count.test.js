const vowelsCounter = require('./count');

test('vowelCounter is a function', () => {
    expect(typeof vowelsCounter).toEqual('function');
});

test('returns the number of vowels found', () => {
    expect(vowelsCounter('food')).toEqual(2);
});

test('returns the number of vowels found', () => {
    expect(vowelsCounter('queue')).toEqual(4);
});