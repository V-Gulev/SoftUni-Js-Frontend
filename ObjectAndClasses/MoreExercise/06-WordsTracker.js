function solve(input) {

    const searchWords = input.shift().split(' ');
    const words = input;

    const occurences = {};

    for (const word of searchWords) {
        occurences[word] = 0;
    }

    for (const word of words) {
        if (occurences.hasOwnProperty(word)) {
            occurences[word]++;
        }
    }

    const result = Object.entries(occurences);
    result.sort((a, b) => b[1] - a[1]);


    for (const [word, count] of result) {
        console.log(`${word} -> ${count}`);
    }


}

solve([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);