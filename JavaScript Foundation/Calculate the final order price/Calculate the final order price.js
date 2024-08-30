const calculateTotalCost = (cart) => {
    // Check if the input is an array
    if (!Array.isArray(cart)) {
        console.log("Invalid input. Please provide an array representing the customer's cart.");
        return;
    }

    // Calculate the total cost using reduce
    const totalCost = cart.reduce((acc, item) => {
        // Check if each item in the cart is an object with 'unitPrice' and 'quantity' properties
        if (typeof item === 'object' && 'unitPrice' in item && 'quantity' in item) {
            return acc + (item.unitPrice * item.quantity);
        } else {
            console.log("Invalid item format in the cart. Skipping.");
            return acc;
        }
    }, 0);

    return totalCost;
};

// Example usage:
const customerCart = [
    { unitPrice: 20, quantity: 2 },
    { unitPrice: 30, quantity: 3 },
    { unitPrice: 15, quantity: 1 },
];

const totalCartCost = calculateTotalCost(customerCart);

if (totalCartCost !== undefined) {
    console.log("Customer's Cart:", customerCart);
    console.log(`Total Cost of Items: Rs. ${totalCartCost}/-`);
}