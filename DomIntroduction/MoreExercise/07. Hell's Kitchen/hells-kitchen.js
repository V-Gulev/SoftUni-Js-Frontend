function solve() {
    const input = document.querySelector('#inputs textarea').value;
    const data = JSON.parse(input);
    const restaurants = {};

    for (let row of data) {
        const [name, workersInfo] = row.split(' - ');
        const workers = workersInfo.split(', ').map(info => {
            const [name, salary] = info.split(' ');
            return [
                name,
                Number(salary),
            ]
        });


        restaurants[name] = Object.fromEntries(workers);
    }

    let maxAverageSalary = Number.MIN_SAFE_INTEGER;
    let bestRestaurant = null;
    
    for (let restaurant in restaurants) {
        const salaries = Object.values(restaurants[bestRestaurant]);
        const averageSalary = salaries.reduce((acc, salary) => acc + salary, 0) / salaries.length;
        if (averageSalary > maxAverageSalary) {
            maxAverageSalary = averageSalary;
            bestRestaurant = restaurant;
        }
    }

    
    const highestSalary = Math.max(...Object.values(restaurants[bestRestaurant]));

    const bestOutput = document.getElementById('bestRestaurant');
    bestOutput.querySelector('p').textContent = `Name: ${bestRestaurant} Average Salary: ${maxAverageSalary.toFixed(2)} Best Salary: ${highestSalary.toFixed(2)}`;

    const workersOutput = Object.entries(restaurants[bestRestaurant]).sort((a, b) => a[1] - b[1]).map(name, salary => `Name: ${name} With Salary: ${salary}`).join(' ');

    document.querySelector('#workers p').textContent = workersOutput;


     
}