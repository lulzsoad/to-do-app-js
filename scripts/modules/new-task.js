function addNewTask(title) {
    var taskLi = document.createElement('li');

    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);

    // Events - toggle and delete
    var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');
    var deleteBtn = taskLi.querySelector('.delete-task-btn');

    toggleCompleteBtn.addEventListener('click', function() {
        toggleTaskComplete(this);
    });

    deleteBtn.addEventListener('click', function() {
        deleteTask(this);
    });
    
    // Add task to DOM
    tasksCointainer.appendChild(taskLi)
}

function prepareTaskHTML(title) {
    return '<div class="input-group">' +
                '<span class="input-group-btn">' +
                    '<button class="btn btn-default toggle-complete-btn" type="submit"><i class="fa fa-check"></i></button>' +
                '</span>' +
                    '<input disabled class="form-control" placeholder="Task\'s title" value="' + title + '">' +
                '<span class="input-group-btn">' +
                    '<button class="btn btn-danger delete-task-btn" type="submit"><i class="fa fa-times"></i></button>' +
                '</span>' +
            '</div>';
}

// Add new tasks events
function bindAddTaskEvent() {
    // On submit
    newTaskForm.addEventListener('submit', function(event){
        event.preventDefault();

        var title = this.querySelector('input').value;

        if(title) {
            addNewTask(title);
        }
    });
}