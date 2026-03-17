function solve(number) {

    let divisors = getDivisors(number);
    let divisorSum = sumNumbers(divisors);
    let isPerfect = isPerfectNumber(number, divisorSum);

    if (isPerfect) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }

    function getDivisors(num) {
        let divisors = [];
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    function sumNumbers(numbers) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
    
        return sum;
    }

    function isPerfectNumber(number, divisorSum) {
        return number === divisorSum;
    }
}

solve(6);
solve(28);
solve(1236498);