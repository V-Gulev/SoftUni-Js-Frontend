function solve(numbers) {
    let result = [];
    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length / 2; i++) {
        result.push(numbers[i]);

        if (!(numbers.length % 2 === 0 && i === numbers.length / 2 - 1)) {
            result.push(numbers[numbers.length - 1 - i]);
        }
    }

    console.log(result);
}

solve([1,65,3,52,48,63,31,-3,18,56]);
