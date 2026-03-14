function solve(num1, num2, operator) {
    
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case 'add':
            console.log(add(num1, num2));
            break;
        case 'subtract':
            console.log(subtract(num1, num2));
            break;
        case 'multiply':
            console.log(multiply(num1, num2));
            break;
        case 'divide':
            console.log(divide(num1, num2));
            break;
    }
}

solve(5, 5, 'multiply');