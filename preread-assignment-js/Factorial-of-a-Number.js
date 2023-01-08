let number = 2;
let factorial = number;

while(number > 1)
{
    factorial *= (--number);
}

console.log(`Factorial is ${factorial}.`);
