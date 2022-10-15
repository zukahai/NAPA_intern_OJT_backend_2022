const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

for (const element of array2) {
    array1.push(element);
}

array1.push(...array2);


const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

const concatenated = [...array1, ...array2];