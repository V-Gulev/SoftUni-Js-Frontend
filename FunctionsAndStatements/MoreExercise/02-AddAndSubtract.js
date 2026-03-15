function solve(num1, num2, num3) {


    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(sum, num3) {
        return sum - num3;
    }

    const resultSum = sum(num1, num2);
    const result = subtract(resultSum, num3);
    console.log(result);
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);