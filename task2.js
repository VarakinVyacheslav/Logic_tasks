
//function that takes array of numbers and returns average value
let avr = (array) => {
	let sum = 0;
	for (let i = 0; i < array.length; i++) //getting the sum of array values
		{sum = sum + array[i];}
	return sum / array.length;
}

let array1 = [1, 10, -30, 3, 12, -55, 103];	//6.2857
let array2 = [32, 11, -30, 8, 26, -23, 53];	//11
console.log(avr(array1));
console.log(avr(array2));