function solve(charA, charB) {

    const lowerChar = getLowerChar(charA, charB);
    const higherChar = getHigherChar(charA, charB);
    const charsInRange = getCharsInRange(lowerChar, higherChar);
    printCharsInRange(charsInRange);


    function getLowerChar(charA, charB) {
        return charA < charB ? charA : charB;
    }

    function getHigherChar(charA, charB) {
        return charA > charB ? charA : charB;
    }

    function getCharsInRange(lowerChar, higherChar) {
        let result = [];
        for (let i = lowerChar.charCodeAt(0) + 1; i < higherChar.charCodeAt(0); i++) {
            result.push(String.fromCharCode(i));
        }
        return result.join(' ');
    }

    function printCharsInRange(chars) {
        console.log(chars);
    }
} 

solve('a',
'd'
);
solve('#',
':'
);
solve('C',
'#'
);