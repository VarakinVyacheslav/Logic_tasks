//Function that takes array of numbers and returns minimum and maximum values
let min_max = (array) => {
    if (Array.isArray(array) == false) {
        return "Not array";
    }

    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return [min, max];
}
let array = [1, 10, -30, 3, 12, -55, 103];	//[-55, 103]
console.log( min_max(array) );
console.log( min_max(2) );