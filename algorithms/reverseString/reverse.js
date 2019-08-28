// Has a time of 1.2546s
/*function reverseString(word) {
    let result = ""
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }
    return result;
} */

// Faster implementation
function reverseString(word) {
    return [...word].reduce((empty, currentChar) => currentChar + empty)
}

console.log(reverseString('roger'));

module.exports = reverseString;