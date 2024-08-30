const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Check if the inputs are valid numbers
    if (typeof originalPrice !== 'number' || typeof discountedPrice !== 'number' || isNaN(originalPrice) || isNaN(discountedPrice) || originalPrice <= 0 || discountedPrice <= 0) {
        console.log("Invalid input. Please provide valid numbers for the original price and the discounted price.");
        return;
    }

    // Calculate the percentage discount
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;

    // Round off the discount percentage to two decimal places
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

    return roundedDiscountPercentage;
};

// Example usage:
const originalPrice = 1000;
const discountedPrice = 750;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

if (discountPercentage !== undefined) {
    console.log(`Original Price: Rs. ${originalPrice}/-`);
    console.log(`Discounted Price: Rs. ${discountedPrice}/-`);
    console.log(`Discount Percentage: ${discountPercentage}%`);
}