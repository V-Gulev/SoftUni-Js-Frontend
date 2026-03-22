function solve(arr) {
    let addressBook = {};

    for (let entry of arr) {
        let [name, address] = entry.split(':');
        addressBook[name] = address;
    }

    addressBook = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

   for (let entry of addressBook) {
       console.log(`${entry[0]} -> ${entry[1]}`);
   }
}

solve(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']
);

console.log('------------------');

solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);