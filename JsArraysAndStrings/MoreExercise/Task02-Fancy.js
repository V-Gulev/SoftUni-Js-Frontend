function solve(arr, step) {
    let result = arr.filter((_, index) => index % step === 0);
    console.log(result.join(' '));
    
}

solve(['5', '20', '31', '4', '20'], 2);
solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);