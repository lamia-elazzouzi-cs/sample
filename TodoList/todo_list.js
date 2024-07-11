const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const taskList = document.getElementById("taskList");
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn");
let tasks = [];


// add new task to tasks[]:
function addTask() {
    const taskText = taskInput.value.trim(); // trim trailing whitespace
    if (taskText !== "") {
        tasks.push({ text: taskText });
        taskInput.value = "";
        displayTasks();
    }
}

// retrieving only the tasks not marked complete
function clearCompletedTask() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks(){
    tasks = [];
    displayTasks();
}


// iterating through tasks[] to display the <li> elements
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input 
                type="checkbox" 
                id="task-${index}"
                ${task.completed ? "checked" : ""}
            >
            <label for="task-${index}">${task.text}</label>
        `;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));

        taskList.appendChild(li);
    });
}

// toggling the completion status of a specific task based on its index
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}


addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTask);
clearAllTasksBtn.addEventListener("click", clearAllTasks);
displayTasks();