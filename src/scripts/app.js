import {
  SaveTask,
  GetSavedTasksFromLocalStorage,
  RemoveFromSavedTask,
} from "./localStorage.js";

import { CreateTaskCards } from "./createCards.js";

const addTaskBtn = document.getElementById("addTaskBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const crudModal = document.getElementById("crudModal");

const submitTaskBtn = document.getElementById("submitTaskBtn");
const description = document.getElementById("description");
const priority = document.getElementById("category");
const date = document.getElementById("date");
const progress = document.getElementById("progress");
const taskTitle = document.getElementById("taskTitle");

const toDoContainer = document.getElementById("toDoContainer");
const inProgressContainer = document.getElementById("inProgressContainer");
const completedContainer = document.getElementById("completedContainer");

let taskObject = {
  id: 0,
  title: "",
  date: "",
  priority: 0,
  progress: "",
  description: ""
};

addTaskBtn.addEventListener("click", () => {
  crudModal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  crudModal.classList.add("hidden");
});

const inputFieldCheck = () => {
  return (
    taskTitle.value.trim() !== "" &&
    date.value !== "" &&
    priority.value !== "" &&
    description.value !== "" &&
    progress.value !== ""
  );
};

submitTaskBtn.addEventListener("click", () => {
  if (inputFieldCheck()) {
    taskObject.id = Date.now();
    taskObject.title = taskTitle.value;
    taskObject.date = date.value;
    taskObject.priority = Number(priority.value);
    taskObject.progress = Number(progress.value);
    taskObject.description = description.value;
    SaveTask(taskObject);
    CreateTaskCards();
    crudModal.classList.add("hidden");
  }
});

const clearInputs = () => {
  taskTitle.innerText = "";
  date.innerText = "mm/dd/yyyy";
  priority.innerText = "Select Priority";
  description.innerText = "";
};


CreateTaskCards();