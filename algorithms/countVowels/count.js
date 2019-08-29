/* This is my implementation */
function vowelCounter(word) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let letter of word.toLowerCase()) {
        console.log(letter);
        if (vowels.includes(letter)) {
            count += 1;
        }
    }
    console.log(count)
    return count;
}


vowelCounter('Food')

module.exports = vowelCounter;