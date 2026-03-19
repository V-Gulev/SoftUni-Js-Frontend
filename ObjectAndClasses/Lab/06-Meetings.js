function solve(meetings) {
    let meetingsObj = {};

    for (let meeting of meetings) {
        let [day, name] = meeting.split(' ');
        if (meetingsObj[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in meetingsObj) {
        console.log(`${key} -> ${meetingsObj[key]}`);
    }
}

solve(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
);