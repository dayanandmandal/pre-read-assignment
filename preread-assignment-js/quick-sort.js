let array = [ 6, 4, 2, 1, 7, 9, 8, 3, -1, -3, -2, -121, 5 ];

function swap(array, i, j)
{
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

function partition(array, low, high)
{
    let pivot = array[high];
    let i = low - 1;

    for(let j=low; j<high; j++)
    {
        if(array[j] < pivot)
        {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i+1, high);
    return i+1;
}

function quickSort(array, start, end)
{
    if( start < end)
    {
        let mid = partition(array, start, end);
        quickSort(array, start, mid-1);
        quickSort(array, mid+1, end);
    }
}

quickSort(array, 0, array.length-1);
console.log(array);
