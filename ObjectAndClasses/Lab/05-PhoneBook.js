function solve(phoneBook) {
    let phoneBookObj = {};

    for (let entry of phoneBook) {
        let [name, number] = entry.split(' ');
        phoneBookObj[name] = number;
    }

    for (let key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

solve(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
);