const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todolist=document.querySelector('.todo-list');

// event lisner
todoButton.addEventListener('click',addTodo)
todolist.addEventListener('click',deleteCheck)


// function add todo

function addTodo(event){
    // prevent submit
    event.preventDefault();
    
    // create todo div
    const todoDiv =document.createElement("div")
    todoDiv.classList.add("todo")

    // create li for div 
    const newTodo =document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-items')

    todoDiv.append(newTodo)

    // need two button complete button or delete button

    // completed button
    const completedButton=document.createElement('button')
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button")

    todoDiv.appendChild(completedButton)
 
    // delete button
    const trashButton=document.createElement('button')
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button")

    todoDiv.appendChild(trashButton)


    todolist.appendChild(todoDiv)

    // clear input value
    todoInput.value=""
}


function deleteCheck(e){
    // console.log(e.target);

 
    // deleted todo
    const item=e.target;
    if(item.classList[0]==='trash-button'){
        const todo=item.parentElement;
        todo.remove()
    }
   
    // 
    if(item.classList[0]==='complete-button'){
        const todo=item.parentElement;
        todo.classList.toggle("completed")
        
    }



}