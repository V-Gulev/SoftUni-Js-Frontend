function solve(text, wordToCensor) {
    let starTemplate = '*'.repeat(wordToCensor.length);
    text = text.replaceAll(wordToCensor, starTemplate);
    console.log(text);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');