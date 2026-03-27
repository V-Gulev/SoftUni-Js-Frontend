function solve(input) {
    const words = input.split(' ').map(word => word.toLowerCase());
    const occurences = {};

    for (const word of words) {
        if (occurences.hasOwnProperty(word)) {
            occurences[word]++;
        } else {
            occurences[word] = 1;
        }
    }
    const result = Object.entries(occurences).filter(wordEntry => wordEntry[1] % 2 !== 0).sort((a, b) => b[1] - a[1]).map(wordEntry => wordEntry[0]).join(' ');
    console.log(result);
    
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food')