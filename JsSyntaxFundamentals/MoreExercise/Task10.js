function solve(number) {
    const numberAsString = number.toString();
    let sameNumbers = true;
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
        if (numberAsString[i] !== numberAsString[0]) {
            sameNumbers = false;
        }
    }
    
    console.log(sameNumbers);
    console.log(sum);

}

solve(2222222);
solve(1234);