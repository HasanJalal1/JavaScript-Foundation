function colorMixer(color1, color2) {
    let result;

    switch (color1.toLowerCase()) {
        case 'red':
            switch (color2.toLowerCase()) {
                case 'blue':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'orange';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'blue':
            switch (color2.toLowerCase()) {
                case 'red':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'yellow':
            switch (color2.toLowerCase()) {
                case 'red':
                    result = 'orange';
                    break;
                case 'blue':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        default:
            result = 'Invalid color combination';
    }

    console.log(`Resulting color: ${result}`);
}

// // Example usage:
colorMixer('Red', 'yellow');    // Orange
colorMixer('red', 'blue');      // Purple
colorMixer('green', 'yellow');  // Invalid color combination
colorMixer('Blue', 'yellow');   // Green