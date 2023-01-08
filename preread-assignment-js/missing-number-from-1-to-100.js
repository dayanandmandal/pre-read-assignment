let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let n = array.length + 1;
let sum = ( n * (n + 1)  / 2);

let sumArray = 0;
for( let i = 0; i< array.length; i++)
    sumArray += array[i];

console.log(`Missing number is ${sum - sumArray}`);

