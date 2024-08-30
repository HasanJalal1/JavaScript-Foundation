function addTodo() {
    // Get the input value
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    // Clear the input field
    todoInput.value = '';

    // Check if the input is not empty
    if (todoText !== '') {
        // Create a new list item
        const newTodoItem = document.createElement('li');
        newTodoItem.className = 'todoItem';

        // Create a span for the to-do text
        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;

        // Create a button to delete the to-do
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            // Remove the to-do item when the delete button is clicked
            newTodoItem.remove();
        };

        // Append the to-do text and delete button to the list item
        newTodoItem.appendChild(todoTextSpan);
        newTodoItem.appendChild(deleteButton);

        // Append the new to-do item to the todoList
        document.getElementById('todoList').appendChild(newTodoItem);
    }
}