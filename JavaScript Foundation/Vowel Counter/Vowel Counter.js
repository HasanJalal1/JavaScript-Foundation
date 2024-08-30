function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    console.log(`Number of vowels in the name "${name}": ${vowelCount}`);
}

// Example usage:
const personName = "John Doe";
countVowels(personName);
