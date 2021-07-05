//function that takes array of numbers and returns average value
let avr = (array) => {
	if (array instanceof Array == false) {
		return "Not an Array";
	}
	if (array.length == 0) {
		return "empty";
	}

	let sum = 0;

	for (let i = 0; i < array.length; i++) {	//getting the sum of array values
		sum = sum + array[i];
	}

	return sum / array.length;
}
let array1 = [1, 10, -30, 3, 12, -55, 103];	
let array2 = [32, 11, -30, 8, 26, -23, 53];	
console.log( avr(array1) );	//6.2857
console.log( avr(array2) );	//11
console.log( avr(2) );		//"Not an Array"
console.log( avr([]) );		//"empty"