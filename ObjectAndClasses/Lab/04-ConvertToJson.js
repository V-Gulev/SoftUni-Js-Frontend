function solve(firstname, lastname, hairColor) {
    let person = {
        firstname: firstname,
        lastname: lastname,
        hairColor: hairColor
    };
    console.log(JSON.stringify(person));
}

solve('George', 'Jones', 'Brown');