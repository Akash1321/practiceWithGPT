// Challenge 3

// Write a function that takes an array of integers as input and returns a new array with all the duplicate values removed, in the order that they first appear in the input array. For example:

Input: [1, 2, 3, 2, 4, 3, 5, 1]
Output: [1, 2, 3, 4, 5]

const input = [1, 2, 3, 2, 4, 3, 5, 1];


function removeDuplicates(arr) { // This is my solution where I used include to check if an element is present or not if it is present then don't dont any thing and if not than add it to the new array.
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
       if(newArr.includes(arr[i])){
        continue;
       }else{
        newArr.push(arr[i])
       }
    }

    return newArr;
}


function removeDuplicates1(arr) { // this one is suggested by chat gpt where we created a set object which does not hold any data twice and than converted than object to an array using array from method
    const set = new Set(arr);
    return Array.from(set);
}

const removeDuplicates2 = arr => { // this method is similar to the one that uses includes but here instead of includes we use index of the item in the new array and if it is -1 i.e not present than we push it there else don't do anything
    
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }
    }

    return newArr;
}


console.log(removeDuplicates(input));
console.log(removeDuplicates1(input));
console.log(removeDuplicates2(input));




  