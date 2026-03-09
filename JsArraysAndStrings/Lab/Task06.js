function solve(text, wordTosearch) {
    let arr = text.split(' ').filter(w => w === wordTosearch);
    console.log(arr.length);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');