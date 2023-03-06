// 1. Write a function that takes an array of numbers and returns the sum of all the numbers.

const numbers = [100, 50, 20, 110, 30];

const findSum = arr => arr.reduce((acc, curr)=> curr ? acc + curr : acc);

// console.log(findSum(numbers));



// 2. Write a function that takes an array of words and returns the total number of characters in all the words.

const arrayOfWords = ["words", "reduce", "map", "functional", "akash"];

const findTotalCharacters = arr => arr.reduce((count, words) => count + words.length, 0);

// console.log(findTotalCharacters(arrayOfWords));



// 3. Write a function that takes an array of numbers and returns the highest number in the array.

const returnHighest = arr => arr.reduce((max, number) => number > max ? max = number : max);

// console.log(returnHighest(numbers));



// 4. Write a function that takes an array of strings and returns the longest string in the array.

const findLongestString = arr => arr.reduce((longest, words) => words.length >= longest.length ? longest = words : longest);

// console.log(findLongestString(arrayOfWords));

// 5. Write a function that takes an array of objects representing books, where each object has a title property and a page count property, and returns the total number of pages in all the books.

const books = [
    { title: 'The Hobbit', pageCount: 310 },
    { title: 'To Kill a Mockingbird', pageCount: 281 },
    { title: '1984', pageCount: 328 },
    { title: 'Pride and Prejudice', pageCount: 432 }
  ];

const totalPages = arr => arr.reduce((total, book) => total + book.pageCount, 0);

// console.log(totalPages(books));



// 6. Write a function that takes an array of numbers and returns a new array with only the even numbers.

const numbers1 = [5, 12, 6, 17, 25, 8, 10, 11, 7, 4];

const evenArray = arr => arr.reduce((array, number) => number % 2 == 0 ? (array.push(number), array) : array, []);


// const evenArray = arr => arr.reduce((array, number) => {
//     if(number % 2 == 0){
//         array.push(number)
//     }
//     return array;
// }, []);

// console.log(evenArray(numbers1));


// 7. Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];


// const findWordsWithA = arr => arr.reduce((array, fruit) => fruit.includes("a") ? (array.push(fruit), array) : array, []);

const findWordsWithA = arr => arr.reduce((array, fruit) => {
    if(fruit.includes("a")){
        array.push(fruit)
    }
    return array;
}, []);


console.log(findWordsWithA(words));

// 8. Write a function that takes an array of objects representing people, where each object has a name property and an age property, and returns the average age of all the people.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 35 },
];

const averageAge = arr => arr.reduce((average, person) => average + person.age, 0)/arr.length;
  
console.log(averageAge(people));



// 9. Write a function that takes an array of numbers and returns the product of all the numbers.

const productOfNumbers = arr => arr.reduce((product, number) => product * number);

console.log(productOfNumbers([1, 2, 3, 4]));

// 10. Write a function that takes an array of strings and returns a new array with the first letter of each string capitalized.

const capitalize = arr => arr.reduce((array, str) => {
   let strArray = str.split("");
   strArray[0] = strArray[0].toUpperCase();
   let newStr = strArray.join("");

   array.push(newStr);

    return array;
}, []);

console.log(capitalize(words));




