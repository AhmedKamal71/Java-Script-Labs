
function Message(mess) {
    var message = document.getElementById('result');
    message.textContent = mess;
    message.style.color = 'red'
}

function add() {
    var taskName = document.getElementById('newTask').value;

    if (taskName.trim() !== '') {
        var tasksList = document.getElementById('tasksList');
        var taskElement = document.createElement('div');
        taskElement.className = 'task';

        var taskNameElement = document.createElement('span');
        taskNameElement.textContent = taskName;
        var doneButton = document.createElement('span');

        doneButton.textContent = 'Done';
        doneButton.className = 'done';
        doneButton.onclick = function () {
            taskNameElement.style.background = 'green';
            doneButton.style.display = 'none';
        };

        var deleteButton = document.createElement('span');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete';
        deleteButton.onclick = function () {
            tasksList.removeChild(taskElement);
        };

        taskElement.appendChild(taskNameElement);
        taskElement.appendChild(doneButton);
        taskElement.appendChild(deleteButton);
        tasksList.appendChild(taskElement);
        document.getElementById('newTask').value = '';
        updateLocalStorage()

    }
    else {
        Message("Please Enter The Task!");
    }
}
function updateLocalStorage() {
    var tasks = [];
    var taskElements = document.getElementsByClassName('task');

    for (var i = 0; i < taskElements.length; i++) {
        tasks.push(taskElements[i].getElementsByTagName('span')[0].textContent);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

