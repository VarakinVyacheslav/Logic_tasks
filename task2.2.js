//sum of number sequences
let Add = (n) => {
	if (n == 1) {
		return 1;
	}

	return n + Add(n - 1);
}

console.log( Add(3) );  //
console.log( Add(5) );	//15
console.log( Add(16) );	//136
