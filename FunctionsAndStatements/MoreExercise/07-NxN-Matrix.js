function solve(number) {

    printMatrix(number);

    function printMatrix(number) {
        for (let i = 0; i < number; i++) {
            let row = '';
            for (let j = 0; j < number; j++) {
                row += number + ' ';
            }
            console.log(row);
        }
    }
}

solve(3);
solve(7);