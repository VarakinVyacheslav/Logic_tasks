let dubl_check = (array) => {
    let set = new Set();
    for (let i = 0; i < array.length; i++) {
        set.add(array[i].id);
    }

    let new_array = Array.from(set, x => { return { id: x } });

    return new_array;
}

const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }, { id: 2 }];
console.log(dubl_check(arr));