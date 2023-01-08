let number = 10;
let firstNumberInFibonacciSeries = 0;
let secondNumberInFibonacciSeries = 1;

while(number-- > 0)
{
    console.log(`${firstNumberInFibonacciSeries}`);
    let temp = firstNumberInFibonacciSeries;
    firstNumberInFibonacciSeries = secondNumberInFibonacciSeries;
    secondNumberInFibonacciSeries = secondNumberInFibonacciSeries + temp;
}
