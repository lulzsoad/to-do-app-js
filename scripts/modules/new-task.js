function addNewTask(title) {
    var taskLi = document.createElement('li');

    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);

    // Add task to DOM
    tasksCointainer.appendChild(taskLi)
}

function prepareTaskHTML(title) {
    return '<div class="input-group">' +
                '<span class="input-group-btn">' +
                    '<button class="btn btn-default toggle-complete-btn" type="submit"><i class="fa fa-check"></i></button>' +
                '</span>' +
                    '<input class="form-control" placeholder="Task\'s title" value="' + title + '">' +
                '<span class="input-group-btn">' +
                    '<button class="btn btn-danger delete-task-btn" type="submit"><i class="fa fa-times"></i></button>' +
                '</span>' +
            '</div>';
}