function solve(words, text) {
    let wordsArr = words.split(', ');

    for (let word of wordsArr) {
        const searchWord = '*'.repeat(word.length);
        text = text.replaceAll(searchWord, word);
    }

    console.log(text);
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');
