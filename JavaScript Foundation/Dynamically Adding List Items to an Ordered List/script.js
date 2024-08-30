document.addEventListener("DOMContentLoaded", function () {
  const learningItems = [
    "Introduction to JavaScript",
    "Variables and Data Types",
    "Functions and Control Flow",
    "Working with the DOM",
    "Events and Event Handling",
    "AJAX and Fetch API",
    "JavaScript Libraries and Frameworks",
    "Debugging and Error Handling",
  ];

  let currentIndex = 0;
  const listElement = document.getElementById("learning-list");
  const messageElement = document.getElementById("message");
  const addButton = document.getElementById("add-item-btn");

  addButton.addEventListener("click", function () {
    if (currentIndex < learningItems.length) {
      const newItem = document.createElement("li");
      newItem.textContent = learningItems[currentIndex];
      listElement.appendChild(newItem);
      currentIndex++;
    } else {
      messageElement.textContent = "All items have been added.";
      messageElement.style.display = "block";
      addButton.disabled = true;
    }
  });
});
