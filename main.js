const todoList = document.querySelector('.todoList')
const todoInput = document.querySelector('.todoInput')
const submitBtn = document.querySelector('.submitBtn')
const selectCategory = document.querySelector('select')

submitBtn.addEventListener('click', submitTodo)
todoList.addEventListener('click', addRemove)
selectCategory.addEventListener('click', select)

function submitTodo(e){
    e.preventDefault()

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    

    const todoItem = document.createElement('li');
    todoItem.innerText = todoInput.value;
    todoItem.classList.add('todoItem');
    todoDiv.appendChild(todoItem);

    const markBtn = document.createElement('button');
    markBtn.innerText = 'done';
    todoDiv.append(markBtn);
    markBtn.classList.add('markBtn');


    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'rem';
    deleteBtn.classList.add('deleteBtn');
    todoDiv.append(deleteBtn);

    todoInput.value = '';
    todoList.append(todoDiv);
}

function addRemove(e){
    const item = e.target
    if(item.classList[0]==='deleteBtn'){
        const todoDel = item.parentElement;
        todoDel.classList.add('delete');
        todoDel.addEventListener('transitionend', function(){
        todoDel.remove()
        })
    }
    if(item.classList[0]==='markBtn'){
        const todoDel = item.parentElement;
        todoDel.classList.toggle('mark')
    }
}

function select(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex'
                break
            case 'done':
                if(todo.classList.contains('mark')){
                    todo.style.display = 'flex'
                }else{
                    todo.style.display = 'none'
                }
                break
            case 'unfinished':
                if(!todo.classList.contains('mark')){
                    todo.style.display = 'flex'
                }else{
                    todo.style.display = 'none'
                }
        }
    })

}
