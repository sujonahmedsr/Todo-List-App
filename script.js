let input = document.querySelector('input');
let button = document.querySelector('button');
let todoList = document.querySelector('.todo-list');

button.addEventListener('click', ()=>{
    if(input.value == ''){
        alert('Please input your task')
    }else{
        // todoList.innerHTML += `<li class='check'>${input.value} <span>×</span></li>`;

        let li = document.createElement('li');
        li.innerHTML = input.value;
        todoList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '×';
        li.appendChild(span)

        input.value = ''
        todoList.style.display = 'block';
        saveData()
    }
})


todoList.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})


function saveData(){
    localStorage.setItem('data', JSON.stringify(todoList.innerHTML))
}

function showData(){
    todoList.innerHTML = JSON.parse(localStorage.getItem('data'))
}
showData()







