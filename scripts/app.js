//Variables
var newTaskForm = document.querySelector('.new-task-container form');
var tasksCointainer = document.querySelector('.tasks-container ul');

// On DOM load
document.addEventListener('DOMContentLoaded', function() {
    bindAddTaskEvent();
    showTasks();
});