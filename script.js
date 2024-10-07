let newTask = document.querySelector('#newTask')
let mainBtn = document.querySelector('#mainbtn')
let listTasks = document.querySelector('#tasks')


mainBtn.addEventListener('click', addTask)

function addTask() {
    saveTask(newTask.value)
    let task = document.createElement('div')
    task.className = 'task'

    let title = document.createElement('h2')
    let deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', deleteTask)
    deleteBtn.classList.add('deletebtn')

    let changeBtn = document.createElement('button')
    changeBtn.addEventListener('click', changeTask)
    changeBtn.classList.add('changebtn')

    function deleteTask () {
        listTasks.removeChild(task)
    }

    function changeTask () {
        task.value = InputEvent
    }


    title.textContent = newTask.value
    deleteBtn.textContent = 'Удалить'
    changeBtn.textContent = 'Изменить'
    listTasks.appendChild(task)
    task.appendChild(title)
    task.appendChild(deleteBtn)
    task.appendChild(changeBtn)


}

function saveTask(tasks) {
    let Tasks = JSON.parse(localStorage.getItem('tasks')) || []
    Tasks.push(tasks)
    localStorage.setItem('tasks', JSON.stringify(Tasks))
}

