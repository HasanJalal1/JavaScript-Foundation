function doubleQuantity(cart) {
    // Check if the input is an array
    if (!Array.isArray(cart)) {
        console.log("Invalid input. Please provide an array.");
        return;
    }

    // Iterate through each element in the array and double the quantity
    for (let i = 0; i < cart.length; i++) {
        // Check if the current element is a number
        if (typeof cart[i] === 'number') {
            cart[i] *= 2;  // Double the quantity
        } else {
            console.log(`Invalid quantity at index ${i}. Skipping.`);
        }
    }

    console.log("Cart quantities doubled successfully.");
}

// Example usage:
const cartArray = [1, 3, 2, 4];
doubleQuantity(cartArray);

// Check the modified cart array
console.log("Modified Cart:", cartArray);
