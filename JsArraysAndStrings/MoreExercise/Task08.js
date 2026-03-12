function solve(input) {
    let pattern = /[A-Z][a-z]*/g;
    const macthes = input.matchAll(pattern);
    const result = Array.from(macthes).map(match => match[0]).join(', ');
    console.log(result);
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');