function celsiusToFahrenheit(celsius) {
    // Check if the input is a valid number
    if (typeof celsius !== 'number' || isNaN(celsius)) {
        console.log("Invalid input. Please provide a valid number for Celsius temperature.");
        return;
    }

    // Convert Celsius to Fahrenheit using the formula
    const fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;
}

// Example usage:
const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`Celsius: ${celsiusTemperature}°C`);
console.log(`Fahrenheit: ${fahrenheitTemperature}°F`);