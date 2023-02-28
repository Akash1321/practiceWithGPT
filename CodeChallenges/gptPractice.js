// Challenge 1
// Write a function that takes a string as input and returns the string reversed. And your function should work for strings of any length and should not use the built-in reverse() function.

function reverseString(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed +=  str[i];
    }

    return reversed
}


console.log(reverseString("akash"));
  