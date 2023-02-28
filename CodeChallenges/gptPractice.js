// Challenge 1
// Write a function that takes a string as input and returns the string reversed. And your function should work for strings of any length and should not use the built-in reverse() function.

function reverseString1(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed +=  str[i];
    }

    return reversed
}

//feedback: One thing to note is that your implementation uses string concatenation (+=) inside the loop, which can be slow for larger strings since it creates a new string with each iteration. A more optimized approach would be to use an array to store the characters and then join them into a string at the end. Here's an example implementation using this approach:

function reverseString2(str) {
    let reversed = [];
    for(let i = str.length - 1; i >= 0; i--){
        reversed.push(str[i]);
    }

    return reversed.join("")
}

console.log(reverseString2("akash"));
  