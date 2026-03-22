function solve(cats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        moew() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of cats) {
        let [name, age] = cat.split(' ');
        new Cat(name, parseInt(age)).moew();
    }
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
