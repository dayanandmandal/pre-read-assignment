let string = "dfg h";

function reverseString(str)
{
    if(str.length > 0)
        return reverseString( str.substring(1, str.length) ) + str[0];
    else
        return "";
}

console.log(reverseString(string));
