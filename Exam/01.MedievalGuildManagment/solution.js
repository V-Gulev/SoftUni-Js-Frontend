function solve(input) {
    const guildCount = Number(input.shift());
    const guild = {};

    for (let i = 0; i < guildCount; i++) {
        const line = input.shift().split(' ');
        const name = line[0];
        const role = line[1];
        const skills = line[2].split(',');
        guild[name] = { role, skills };
    }

    let commandLine = input.shift();
    while (commandLine !== 'End') {
        const [command, name, arg1, arg2] = commandLine.split(' / ');

        switch (command) {
            case 'Perform':
                const role = arg1;
                const skill = arg2;
                if (guild[name] && guild[name].role === role && guild[name].skills.includes(skill)) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;
            case 'Reassign':
                const newRole = arg1;
                if (guild[name]) {
                    guild[name].role = newRole;
                    console.log(`${name} has been reassigned to: ${newRole}`);
                }
                break;
            case 'Learn Skill':
                const newSkill = arg1;
                if (guild[name]) {
                    if (guild[name].skills.includes(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    guild[name].skills.push(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                 }
                }
                break;
        }

        commandLine = input.shift();
    }

    for (const name in guild) {
        const role = guild[name].role;
        const sortedSkills = guild[name].skills.sort((a, b) => a.localeCompare(b)).join(', ');
        console.log(`Guild Member: ${name}, Role: ${role}, Skills: ${sortedSkills}`);
    }
}

solve([
  "3",
  "Arthur warrior swordsmanship,shield",
  "Merlin mage fireball,teleport",
  "Gwen healer healing,alchemy",
  "Perform / Arthur / warrior / swordsmanship",
  "Perform / Merlin / warrior / fireball",
  "Learn Skill / Gwen / purification",
  "Perform / Gwen / healer / purification",
  "Reassign / Merlin / healer",
  "Perform / Merlin / healer / teleport",
  "End"
]
);