function capitalizeFirstName(name) {
    const modifiedName = name[0].toLowerCase() === name[0]
        ? name.charAt(0).toUpperCase() + name.slice(1)
        : name;

    return modifiedName;
}

// Example usage:
const userName = "john";
const modifiedUserName = capitalizeFirstName(userName);

console.log(`Original Name: ${userName}`);
console.log(`Modified Name: ${modifiedUserName}`);