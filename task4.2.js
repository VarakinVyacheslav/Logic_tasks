let PrUser = {
    print() {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
    }
}


function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.__proto__ = PrUser;
}

let User1 = new User("Artem", "Zhmyh", 0);

User1.print();