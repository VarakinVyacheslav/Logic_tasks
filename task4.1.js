function calc() {
    return this.a + this.b;

}

let boundFunc = calc.bind({ a: 2, b: 3 });
console.log(boundFunc());