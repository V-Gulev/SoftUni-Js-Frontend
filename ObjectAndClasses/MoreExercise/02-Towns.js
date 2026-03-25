function solve(towns) {

    class Town {
        constructor(name, latitude, longitude) {
            this.town = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    let result = [];

    for (let town of towns) {
        let [name, latitude, longitude] = town.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        result.push(new Town(name, latitude, longitude));
    }

    for (let town of result) {
        console.log(`{ town: '${town.town}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);