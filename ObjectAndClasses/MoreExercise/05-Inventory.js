function solve(input) {

    let heroes = [];

    for (let row of input) {
        heroes.push(createHero(row));
    }

    printHeroes(sortHeroes(heroes));


    function createHero(row) {
        const [name, level, inventory] = row.split(' / ');

        const hero = {
            name,
            level: Number(level),
            items: inventory.split(', ')
        }

        return hero;
    }

    function printHeroes(heroes) {
        for (let hero of heroes) {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items.join(', ')}`);
        }
    }

    function sortHeroes(heroes) {
        return heroes.sort((a, b) => a.level - b.level);
    }
}

solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
);