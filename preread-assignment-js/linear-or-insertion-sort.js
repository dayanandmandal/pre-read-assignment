let array = [ 6, 4, 2, 1, 7, 9, 8, 3, -1, -3, -2, -121, 5 ];

for(let i=1; i<array.length; i++)
{
    for(let j=i; j>0; j--)
    {
        if(array[j] < array[j-1])
        {
            let temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
        }
    }
}

console.log(array);
