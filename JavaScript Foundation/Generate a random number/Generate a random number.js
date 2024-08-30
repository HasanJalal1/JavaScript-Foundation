const generateRandomNumber = (() => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Log the generated random number to the console
    console.log(`Random Number: ${randomNumber}`);
})();

// The random number is generated and logged when the program starts