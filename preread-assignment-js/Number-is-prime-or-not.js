let number = 53;
let isPrime = true;
for(let i=2; i<Math.sqrt(number); i++)
{
    if(number%i == 0)
    {
        isPrime = false;
        console.log(`${number} is not a prime number.`);
        break;
    }    
}

if(isPrime)
console.log(`${number} is a prime number.`);
