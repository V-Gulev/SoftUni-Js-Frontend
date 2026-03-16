function solve(numbers) {

    printResults(numbers);

    function isPalindrome(num) {
        const strNum = num.toString();
        const reversedStrNum = strNum.split('').reverse().join('');
        return strNum === reversedStrNum;
    }

    function printResults(numbers) {
        numbers.forEach(num => {
        console.log(isPalindrome(num));
    });
    }
    

}

solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);