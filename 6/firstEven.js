function findFirstEven(arr) {

    let i = 0;

    do {
        if (arr[i] % 2 !== 0) {
            i++;
            continue;
        }
        return arr[i];
    } while (i < arr.length);
    return null;
}


const numbers = [1, 3, 7, 9, 12, 15, 18];

const firstEven = findFirstEven(numbers);

console.log("First Even Number:", firstEven);