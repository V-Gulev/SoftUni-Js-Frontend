function solve(input) {
    let encodedSpell = input.shift();

    const commands = {
        'RemoveEven': (spell) => spell.split('').filter((_, index) => index % 2 === 0).join(''),
        'TakePart': (spell, from, to) => spell.substring(from, to),
        'Reverse': (spell, substring) => {
            if (!spell.includes(substring)) {
                throw new Error('Error');
            }

            let result = spell.replace(substring, '');
            result += substring.split('').reverse().join('');
            return result;
        },
    }

    let line = input.shift();

    while (line !== 'End') {
        const [command, ...args] = line.split('!');

        try {
            encodedSpell = commands[command](encodedSpell, ...args);
            console.log(encodedSpell);
        } catch (err) {
            console.log(err.message);
        }


        line = input.shift();
    }

    console.log(`The concealed spell is: ${encodedSpell}`);
    

}

solve((["asAsl2adkda2mdaczsa", 
"RemoveEven",
"TakePart!1!9",
"Reverse!maz",
"End"])
);

solve((["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
"TakePart!31!42",
"RemoveEven",
"Reverse!anim",
"Reverse!sad",
"End"]));
