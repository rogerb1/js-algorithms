const reverseString = require('./reverse.js');

// Testing to see if reverseString is a function 
test('reverseString is a function', () => {
    expect(typeof reverseString).toEqual('function');
});

// Test to see if the function reverses string
test('should reverse string', () => {
    expect(reverseString('aeiou')).toEqual('uoiea')
});

// Test to see if the function number string
test('should reverse number string ', () => {
    expect(reverseString('1234')).toEqual('4321')
});

test('should reverse string of mixed characters', () => {
    expect(reverseString('AdEfG')).toEqual('GfEdA')
});