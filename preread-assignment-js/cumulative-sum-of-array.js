let array = [1, 4, 5, 2, 8, 9, 12, 13, 15, 55, 98, 112, 0, 1];
// let array = [1, 2, 3, 4];

for(let i=0; i<array.length-1; i++)
    array[i+1] = array[i] + array[i+1];

console.log(array);