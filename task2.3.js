//string reversing function
let reverse = (str) => {
	let result = "";

	for(let i = (str.length - 1); i >= 0; i--) {
		result += str[i];
	}

	return result;
}

console.log( reverse("") );
console.log( reverse("a") );
console.log( reverse("ab") );
console.log( reverse("Hello") );