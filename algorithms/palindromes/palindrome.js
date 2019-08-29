function isPalindrome(text) {
    let textLen = text.length;
    for (let i = 0; i < textLen / 2; i++) {
        if (text[i] !== text[textLen - 1 - i]) {
            return false;
        }
    }
    return true;
}

isPalindrome('racecar')

module.exports = isPalindrome;