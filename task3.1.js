function User(f_name, l_name, age) {
    this.name = f_name;
    this.l_name = l_name;
    this.age = age;

    this.print = function() {
        console.log(`Name:${this.name}, Last name:${this.l_name}, age:${this.age}`);
    };
}

let user = new User('John', 'Smith', 30);
user.print();