function findHighestMarks(marks) {
    let highestMarks = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    console.log(`The highest marks in the class: ${highestMarks}`);
}

// Example usage:
const studentMarks = [85, 92, 78, 95, 88];
findHighestMarks(studentMarks);