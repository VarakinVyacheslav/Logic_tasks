class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
    }
}

class Admin extends User {
    constructor(firstName, lastName, age, isAdmin) {
        super(firstName, lastName, age);
        this.role = isAdmin;
    }
}

const user = new User('John', 'Connor', '32');
user.print();
const admin = new Admin('Name', 'Surname', 35, true)
admin.print();