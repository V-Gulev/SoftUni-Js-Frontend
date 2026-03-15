function solve(number) {


    function getDigits(num) {
        return num.toString().split('').map(Number);
    }

    function sumOfEvenDigits(digits) {
        return digits.filter(digit => digit % 2 === 0).reduce((sum, digit) => sum + digit, 0);
    }

    function sumOfOddDigits(digits) {
        return digits.filter(digit => digit % 2 !== 0).reduce((sum, digit) => sum + digit, 0);
    }

    const digits = getDigits(number);
    const evenSum = sumOfEvenDigits(digits);
    const oddSum = sumOfOddDigits(digits);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

solve(1000435);
solve(3495892137259234);