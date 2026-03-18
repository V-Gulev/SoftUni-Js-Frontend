function solve(information) {
    let person = JSON.parse(information);
    let entries = Object.entries(person);

    for (let entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }

}

solve('{"name": "George", "age": 40, "town": "Sofia"}');