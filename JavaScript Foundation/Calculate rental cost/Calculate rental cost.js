function calculateRentalCost(daysRented, carType) {
    // Define the rental costs for each car type
    const economyCostPerDay = 4000;
    const midsizeCostPerDay = 15000;
    const luxuryCostPerDay = 20000;

    // Check if the input is a valid number of days
    if (typeof daysRented !== 'number' || isNaN(daysRented) || daysRented <= 0) {
        console.log("Invalid input for the number of days rented. Please provide a positive number.");
        return;
    }

    // Calculate the rental cost based on the car type
    let rentalCost;
    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCost = economyCostPerDay * daysRented;
            break;
        case 'midsize':
            rentalCost = midsizeCostPerDay * daysRented;
            break;
        case 'luxury':
            rentalCost = luxuryCostPerDay * daysRented;
            break;
        default:
            console.log("Invalid car type. Please choose 'economy', 'midsize', or 'luxury'.");
            return;
    }

    return rentalCost;
}

// Example usage:
const daysRented = 5;
const carType = 'economy';
const totalCost = calculateRentalCost(daysRented, carType);

if (totalCost !== undefined) {
    console.log(`Number of days rented: ${daysRented}`);
    console.log(`Car type: ${carType}`);
    console.log(`Total rental cost: Rs. ${totalCost}/-`);
}