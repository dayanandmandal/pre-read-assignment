let string = "hehaabheh";
let isPalindrome = true;
for(let i=0; i<string.length/2; i++)
{
    if(string[i] != string[string.length-i-1])
    {
        isPalindrome = false;
        console.log(`${string} is not Palindrome.`);
        break;
    }
}

if(isPalindrome)
console.log(`${string} is Palindrome.`);
