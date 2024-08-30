function printDivisibleByThreeNotByTwo(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        // Check if the number is divisible by 2
        if (currentNumber % 2 === 0) {
            continue;  // Skip the current iteration if divisible by 2
        }

        // Check if the number is divisible by 3
        if (currentNumber % 3 === 0) {
            console.log(currentNumber);
        }
    }
}

// Example usage:
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printDivisibleByThreeNotByTwo(numberArray);