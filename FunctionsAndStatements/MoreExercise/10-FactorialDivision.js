function solve(numbers) {
    const firstFactorial = calculateFactorial(numbers[0]);
    const secondFactorial = calculateFactorial(numbers[1]);
    const result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));

    function calculateFactorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

solve([5, 2]);
solve([6, 2]);