document.addEventListener('DOMContentLoaded', function () {
    highlightLongWords();
});

function highlightLongWords() {
    // Get the paragraph element
    const paragraph = document.getElementById('paragraph');

    // Split the content into words
    const words = paragraph.textContent.split(/\s+/);

    // Loop through the words
    words.forEach(function (word) {
        // Check if the word has more than 8 characters
        if (word.length > 8) {
            // Create a span element for the word and add the 'highlight' class
            const span = document.createElement('span');
            span.textContent = word;
            span.className = 'highlight';

            // Replace the original word with the highlighted span
            paragraph.innerHTML = paragraph.innerHTML.replace(word, span.outerHTML);
        }
    });
}