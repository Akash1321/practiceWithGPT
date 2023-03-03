// Write a function that logs the numbers from 1 to 100. For multiples of three, log "Fizz" instead of the number, and for multiples of five, log "Buzz". For numbers that are multiples of both three and five, log "FizzBuzz".

const logChallenge = () => {
    for (let i = 1; i <= 100; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
            continue;
        }

        if (i % 3 == 0) {
            console.log("Fizz");
            continue;
        }

        if (i % 5 == 0) {
            console.log("Buzz");
            continue;
        }

        console.log(i)
    }
}

const logChallenge1 = () => {
    for (let i = 1; i <= 100; i++) {
        const isMultipleOfThree = i % 3 === 0;
        const isMultipleOfFive = i % 5 === 0;

        if (isMultipleOfThree && isMultipleOfFive) {
            console.log("FizzBuzz");
        } else if (isMultipleOfThree) {
            console.log("Fizz");
        } else if (isMultipleOfFive) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

const logChallenge2 = () => {
    for (let i = 1; i <= 100; i++) {
        const output =
            (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i;
        console.log(output);
    }
};



logChallenge();



