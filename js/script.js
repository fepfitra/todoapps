const todos = [];
const RENDER_EVENT = 'render-todo';

console.log('test');

function generateTodoObject(id, task, timestamp, isCompleted){
    return {
        id,
        task,
        timestamp,
        isCompleted
    }
}

document.addEventListener('DOMContentLoaded',function (){
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function (event){
        event.preventDefault();
        addTodo();
    })
});

function generateId(){
    return +new Date();
}

function addTodo(){
    const textTodo = document.getElementById('date').value;
    const timestamp = document.getElementById('date').value;

    const generateID = generateId();
    const todoObjet = generateTodoObject(generateID, textTodo, timestamp, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}

document.addEventListener(RENDER_EVENT,function(){
    console.log(todos);
});