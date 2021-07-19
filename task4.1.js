function calc() {
    return this.a + this.b;

}

console.log(calc.apply({ a: 2, b: 3 }));