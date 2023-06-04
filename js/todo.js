const toDoFrom = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));  
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

//newToDo는 text가 될 예정
function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault(); 
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);   
    paintToDo(newTodo);
    saveToDos();
}


toDoFrom.addEventListener("submit", handleTodoSubmit);