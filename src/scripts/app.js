import {
  SaveTask,
  GetSavedTasksFromLocalStorage,
  RemoveFromSavedTask,
} from "./localStorage.js";

const addTaskBtn = document.getElementById("addTaskBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const crudModal = document.getElementById("crudModal");


const submitTaskBtn = document.getElementById("submitTaskBtn");
const description = document.getElementById("description");
const priority = document.getElementById("category");
const date = document.getElementById("date");
const taskTitle = document.getElementById("taskTitle");

const toDoContainer = document.getElementById("toDoContainer");
const inProgressContainer = document.getElementById("inProgressContainer");
const completedContainer = document.getElementById("completedContainer");

let taskPriority = "low";
let taskObject = {
  id: "",
  title: "",
  date: "",
  priority: "",
  description: "",
};

addTaskBtn.addEventListener('click', () => {
    crudModal.classList.remove("hidden");
})

closeModalBtn.addEventListener('click', () => {
    crudModal.classList.add("hidden");
})


const inputFieldCheck = () => {
  return (
    taskTitle.value.trim() !== "" &&
    date.value !== "" &&
    priority.value !== "" &&
    description.value !== ""
  )
}


submitTaskBtn.addEventListener("click", () => {
  if(inputFieldCheck()){
    taskObject.id = Date.now();
    taskObject.title = taskTitle.value;
    taskObject.date = date.value;
    taskObject.priority = priority.value;
    taskObject.description = description.value;
    SaveTask(taskObject);
    crudModal.classList.add("hidden");
    clearInputs()
    console.log(inputFieldCheck())
  }
  console.log(inputFieldCheck())
});

console.log(inputFieldCheck())


const clearInputs = () => {
    taskTitle.innerText = "";
    date.innerText = "";
    priority.innerText = "Set Priority";
    description.innerText = "";
}