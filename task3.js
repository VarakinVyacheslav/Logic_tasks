
//Function that takes array of numbers and checks if array is sorted (returns true or false)
let is_Sorted = (array) => {
	if (array instanceof Array == false) {
		return "Not an Array";
	}
	if (array.length == 0) {	//if array is empty, he can't be called sorted
		return "Need at least one element";
	}

	for (let i = 0; i < array.length; i++) {
		if (array[i] > array [i + 1]) {
			return false;
		}
	}

	return true;
}
let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [1, 3, 5, 2, 1, 7, 8];
console.log( is_Sorted(array1) ); //true
console.log( is_Sorted(array2) ); //false
console.log( is_Sorted([]) );