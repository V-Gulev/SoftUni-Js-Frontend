function solve(input) {
    const parking = {};

    for (let line of input) {
        const [command, carNumber] = line.split(', ');
        if (command === 'IN') {
            parking[carNumber] = true;
        } else if (command === 'OUT') {
            delete parking[carNumber];
        }
    }

    let result = Object.keys(parking).sort((a, b) => a.localeCompare(b));
    result.forEach(carNumber => console.log(carNumber));

    
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);