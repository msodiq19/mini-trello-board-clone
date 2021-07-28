const btn = document.querySelector("#submit");
const listItems = document.querySelector(".todo-items");
const todo = document.querySelector("#todo");

/* const todos = [[],[],[]];  */

   
function allowdrop(e) {
  e.preventDefault();
}

function dragItem(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function dropItem(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));

  /* if(e.target.id === 'drop2'){
    todos[0].forEach((todo,id)=>{
        
    })
  } */
}

let i = 0
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(todo.value !== ''){
        /* todos[0].push(todo.value)
        localStorage.setItem('todos',JSON.stringify(todos)); */
        listItems.innerHTML += `
        <div class="todo-item" id="drag${i+1}" draggable="true" ondragstart="dragItem(event)">${todo.value}</div>
    `;
    }
    todo.value = '';
    i += 1
});

/* if(localStorage.getItem('todos') !== null){
    JSON.parse(localStorage.getItem('todos')).forEach(todo=>{
        
    })
} */