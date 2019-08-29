const isPalindrome = require('./palindrome')

test('isPalindrome a function', () => {
    expect(typeof isPalindrome).toEqual('function');
});

test('"php" is a palindrome', () => {
    expect(isPalindrome('php')).toBeTruthy();
});


test('" php  " is not a palindrome', () => {
    expect(isPalindrome(' php  ')).toBeFalsy();
});

test('"developer" is not a palindrome', () => {
    expect(isPalindrome('developer')).toBeFalsy();
});

test('"2002" a palindrome', () => {
    expect(isPalindrome('2002')).toBeTruthy();
});