// Selecting elements from the DOM
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listener for adding a todo
todoButton.addEventListener('click', addTodo);

// Function to add a todo
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear input value
    todoInput.value = '';
}

// Event listener for checking or deleting todos
todoList.addEventListener('click', checkDelete);

// Function to check or delete todos
function checkDelete(event) {
    const item = event.target;

    // Delete todo
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement;
        todo.remove();
    }

    // Check mark
    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
