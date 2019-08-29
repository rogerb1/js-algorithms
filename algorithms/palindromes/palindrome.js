function isPalindrome(text) {
    let textLen = text.length;
    console.log(3 / 2)
    for (let i = 0; i < textLen / 2; i++) {
        console.log(i);
        if (text[i] !== text[textLen - 1 - i]) {
            return false;
        }
    }
    return true;
}

isPalindrome('php')

module.exports = isPalindrome;