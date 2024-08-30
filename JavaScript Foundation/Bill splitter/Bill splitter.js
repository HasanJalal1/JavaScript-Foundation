function calculateTotalBill(costPerDish, numberOfPeople) {
    // Check if the inputs are valid numbers
    if (typeof costPerDish !== 'number' || typeof numberOfPeople !== 'number' || isNaN(costPerDish) || isNaN(numberOfPeople) || costPerDish <= 0 || numberOfPeople <= 0) {
        console.log("Invalid input. Please provide valid numbers for the cost per dish and the number of people.");
        return;
    }

    // Calculate the total bill
    const totalBill = costPerDish * numberOfPeople;

    // Calculate the bill to be paid by each person
    const billPerPerson = totalBill / numberOfPeople;

    // Create and return an object with the results
    const billDetails = {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };

    return billDetails;
}

// Example usage:
const costPerDish = 250;
const numberOfPeople = 4;
const result = calculateTotalBill(costPerDish, numberOfPeople);

if (result !== undefined) {
    console.log(`Cost per dish: Rs. ${costPerDish}/-`);
    console.log(`Number of people: ${numberOfPeople}`);
    console.log(`Total bill: Rs. ${result.totalBill}/-`);
    console.log(`Bill per person: Rs. ${result.billPerPerson}/-`);
}