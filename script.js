//store list
let todos = [];
//get elements
window.onload = function() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        displayTodos();
    }
}
//add
function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    if (text === '') {
        alert('Mọe bỏ trống task cho cụ m làm à?');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(todo);
    savedTodos();
    displayTodos();
    input.value = '';
}
//display
function displayTodos() {
    const list = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <div class="todo-text">${todo.text}</div>
            <div class="todo-actions">
            <label>
                <input type="checkbox">
                <span>Done</span>
            </label>
                <button class="edit-btn" onclick="editTodo(${todo.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;
        todoList.appendChild(todoItem);
    });
}
//edit
function editTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    const newText = prompt('Sửa task này nè lợn:', todo.text);
    if (newText !== null&& newText.trim() !== '') {
        todo.text = newText.trim();
        savedTodos();
        displayTodos();
    }
}
//delete
function deleteTodo(id) {
    if (confirm('Vũ chắc chắn muốn xóa task này hả Vũ?')) {
        todos = todos.filter(t => t.id !== id);
        savedTodos();
        displayTodos();
    }
}
//save to local storage
function savedTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
//event listener for add button
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todoInput');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
    }
});

