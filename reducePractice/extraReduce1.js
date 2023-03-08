// 1. Write a function that takes an array of numbers and returns the sum of the first three even numbers in the array. If there are less than three even numbers, return 0.

const number = [2, 3, 4, 5, 6, 7 , 8];

const firstThreeEven = arr => arr.reduce((sum, numbers) => numbers % 2 == 0 ? numbers + sum : sum );

console.log(firstThreeEven(number));




