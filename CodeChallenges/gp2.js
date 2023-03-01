// Challenge 2

// Write a function that takes an array of strings and returns an object that contains the count of each string in the array.

// Example - 

const arr = ['hello', 'world', 'hello', 'foo', 'bar', 'foo'];
countOccurrences(arr); // should return { hello: 2, world: 1, foo: 2, bar: 1 }

function countOccurrences(arr) {
    const counts = {};
    for(let i = 0; i < arr.length; i++){
        if(counts[arr[i]]){
            counts[arr[i]]++;
        }else{
            counts[arr[i]] = 1;
        }
    }
    return counts
}

// Other way with reduce

const countOccurrences1 = arr => {
    return arr.reduce((acc, count) => {
        acc[count] = (acc[count] || 0) + 1;
        return acc;
    }, {})
}

// Note: 1. Always return the accumulator from the reduce callback
//2. we can intorduce new element using . notaion or [] notaion and assining them a value.




console.log(countOccurrences(arr));
console.log(countOccurrences1(arr));




  
