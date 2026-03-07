function solve(number, op1, op2, op3, op4, op5) {
    let currentNumber = Number(number);
    
    currentNumber = executeOperation(currentNumber, op1);
    console.log(currentNumber);
    currentNumber = executeOperation(currentNumber, op2);
    console.log(currentNumber);
    currentNumber = executeOperation(currentNumber, op3);
    console.log(currentNumber);
    currentNumber = executeOperation(currentNumber, op4);
    console.log(currentNumber);
    currentNumber = executeOperation(currentNumber, op5);
    console.log(currentNumber);


    function executeOperation(number, operation) {
        switch (operation) {
            case 'chop':
                return number / 2;
            case 'dice':
                return Math.sqrt(number);
            case 'spice':
                return number + 1;
            case 'bake':
                return number * 3;
            case 'fillet':
                return number - number * 0.2;
        }
    }


}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');