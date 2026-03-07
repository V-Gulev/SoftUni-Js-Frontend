function solve(speed, area) {

    switch (area) {
        case "motorway":
            if (speed > 130) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - ${getStatus(speed - 130)}`);
            } else {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }
            break;
        case "interstate":
            if (speed > 90) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - ${getStatus(speed - 90)}`);
            } else {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            }
            break;
        case "city":
            if (speed > 50) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - ${getStatus(speed - 50)}`);
            } else {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }
            break;
        case "residential":
            if (speed > 20) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - ${getStatus(speed - 20)}`);
            } else {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }
            break;
    }

    function getStatus(speedDifference) {
        if (speedDifference <= 20) {
            return "speeding";
        } else if (speedDifference <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');