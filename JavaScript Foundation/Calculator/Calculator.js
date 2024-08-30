function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Cannot divide by zero. Invalid operation");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${result}`);
}

// Example usage:
calculator(5, 3, '+');  // Addition
calculator(8, 4, '-');  // Subtraction
calculator(6, 2, '*');  // Multiplication
calculator(10, 2, '/'); // Division
calculator(7, 0, '/');  // Division by zero
calculator(5, 3, '%');  // Invalid operator