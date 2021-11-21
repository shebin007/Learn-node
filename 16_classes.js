class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person {

    constructor(name, level) {
        super(name);
        this.level = level;
    }

    greet() {
        console.log(`Hi ${this.name} in level ${this.level}`);
    }
}


const o1 = new Person("shebin");

const o2 = new Student('shebin', 'plustwo');

const o3 = new Student('Shebin ', 'Engineering');

o3.greet = () => {
    console.log("All set");
}

o1.greet();
o2.greet();
o3.greet();