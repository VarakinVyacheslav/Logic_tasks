function PrUser() {
    this.print = function() {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
    }
}


function User(firstName, lastName, age) {
    PrUser.call(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let User1 = new User("Artem", "Zhmyh", 0);

User1.print();