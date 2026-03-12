function solve(searchWord, text) {
    const words = text.split(' ');
    
    if (words.some(word => word.toLowerCase() === searchWord.toLowerCase())) {
        console.log(searchWord);
    } else {
        console.log(`${searchWord} not found!`);
    }
    
}