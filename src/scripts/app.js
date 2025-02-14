import {
    SaveTask,
    GetSavedTasksFromLocalStorage,
    RemoveFromSavedTask
} from "./localStorage.js"

const submitTaskBtn = document.getElementById("submitTaskBtn");
const description = document.getElementById("description");
const priority = document.getElementById("category");
const date = document.getElementById("datepicker-format");
const taskTitle = document.getElementById("taskTitle");

const toDoContainer = document.getElementById("toDoContainer");
const inProgressContainer = document.getElementById("inProgressContainer");
const completedContainer = document.getElementById("completedContainer");

let taskPriority = "low"

submitTaskBtn.addEventListener('click', () => {
    console.log(taskTitle.value)
    console.log(description.value)
    console.log(priority.value)
    console.log(date.value)
})