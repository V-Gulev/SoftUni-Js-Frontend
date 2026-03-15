function solve(firstNumber, secondNumber, thirdNumber) {
    const lowestNumber = findMin(firstNumber, secondNumber, thirdNumber);
    console.log(lowestNumber);


    function findMin(num1, num2, num3) {
        return Math.min(num1, num2, num3);
    }
}

solve(2, 5, 3);
solve(600, 342, 123);
solve(25, 21, 4);
