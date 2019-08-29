const capSentence = require('./sentence');

// For some reason jest is not reading this as 
// a function rather an object. In my
// sentence.js file it is recognized as a function
test('capSentence is an object', () => {
    expect(typeof capSentence).toEqual('function');
});

