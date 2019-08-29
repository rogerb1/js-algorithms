function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ');
    let capsArray = wordsArray.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return capsArray.join(' ');
}

console.log(typeof capSentence) // function

capSentence('the baby')

module.export = capSentence;