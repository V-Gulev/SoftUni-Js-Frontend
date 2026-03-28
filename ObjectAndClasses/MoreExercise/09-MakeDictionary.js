function solve(input){

    const definitons = {};

    for (const row of input) {
        const definition = JSON.parse(row);
        const key = Object.keys(definition)[0];
        const value = definition[key];
        definitons[key] = value;
    }

    Object.entries(definitons).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        console.log(`Term: ${entry[0]} => ${entry[1]}`);
    });
}

solve([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);