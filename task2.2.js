//sum of number sequences
let Add = (n) => {
	if (n < 0) {
		return "Only positive numbers";
	}
	if (n == 1) {
		return 1;
	}

	return n + Add(n - 1);
}
console.log( Add(-20) );
console.log( Add(3) ); 
console.log( Add(5) );	
console.log( Add(16) );	

