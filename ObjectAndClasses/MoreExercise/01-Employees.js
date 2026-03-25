function solve(employees) {
    class Employee {
        constructor(name) {
            this.name = name;
        }

        personalNumber() {
            return this.name.length;
        }
    }

    employees.forEach(name => {
        const employee = new Employee(name);
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber()}`);
    });

}

solve([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
);
