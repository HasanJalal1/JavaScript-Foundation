// Sample customer account object
const customerAccount = {
    name: "John Doe",
    balance: 1000,
};

// Function to deposit money into the account
const deposit = (account, amount) => {
    // Check if the amount is a valid number
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
        console.log("Invalid deposit amount. Please provide a valid positive number.");
        return;
    }

    // Update the account balance
    account.balance += amount;

    console.log(`${account.name}'s account has been credited with Rs. ${amount}/-. New Balance: Rs. ${account.balance}/-`);
};

// Function to withdraw money from the account
const withdraw = (account, amount) => {
    // Check if the amount is a valid number
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
        console.log("Invalid withdrawal amount. Please provide a valid positive number.");
        return;
    }

    // Check if there is sufficient balance for withdrawal
    if (amount > account.balance) {
        console.log("Insufficient funds. Withdrawal not allowed.");
        return;
    }

    // Update the account balance
    account.balance -= amount;

    console.log(`${account.name}'s account has been debited with Rs. ${amount}/-. New Balance: Rs. ${account.balance}/-`);
};

// Example usage:
console.log("Initial Account Details:", customerAccount);

// Deposit Rs. 500
deposit(customerAccount, 500);

// Withdraw Rs. 200
withdraw(customerAccount, 200);

// Attempt to withdraw Rs. 1500 (insufficient funds)
withdraw(customerAccount, 1500);

// Attempt to deposit an invalid amount
deposit(customerAccount, -100);

// Display final account details
console.log("Final Account Details:", customerAccount);
