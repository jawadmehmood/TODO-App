var input = document.querySelector('#todo');
var todoList = document.querySelector('#todo-list');
var todo = [];

function renderTodo(){
    todoList.innerHTML = '';
    for(var i = 0; i < todo.length; i++){
        todoList.innerHTML += `
        <li> ${todo[i]}
        <button onclick="deleteTodo(${i})">Delete</button>
        <button onclick="editTodo(${i})">Edit</button>
        </li>
        `
    }    
}

function addTodo(){
    todo.push(input.value);
    renderTodo();
    input.value = '';
}

function deleteTodo(index){
    todo.splice(index , 1);
    renderTodo();
}

function editTodo(index){
    var updatedValue = prompt('Enter updated value');
    todo.splice(index , 1 , updatedValue);
    renderTodo();
}