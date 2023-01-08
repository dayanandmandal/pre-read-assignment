let string = "aaaaaaaaasddaaaadddasddsaaaaaaarea";
let char = "a";
let count = 0;

for(let i=0; i<string.length; i++)
{
    if(string[i] === char)
        count++;
}

console.log(`Frequency of ${char} in string ${string} is ${count}`);
