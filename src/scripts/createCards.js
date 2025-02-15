import {
  SaveTask,
  GetSavedTasksFromLocalStorage,
  RemoveFromSavedTask,
} from "./localStorage.js";


const CreateTaskCards = () => {
    toDoContainer.innerHTML = "";
    inProgressContainer.innerHTML = "";
    completedContainer.innerHTML = "";
  const taskList = GetSavedTasksFromLocalStorage();
//   let shallowCopy = [...taskList];

  let toDoArr = taskList.filter(a=>a.progress===2).sort((a,b)=>a.priority-b.priority)
  let inProgressArr = taskList.filter(a=>a.progress===1).sort((a,b)=>a.priority-b.priority)
  let completedArr = taskList.filter(a=>a.progress===3).sort((a,b)=>a.priority-b.priority)
  console.log(taskList)
  console.log(toDoArr)
  console.log(inProgressArr)
  console.log(completedArr)
  toDoArr.forEach(task => {
    constructCard(task, toDoContainer)
  });
  inProgressArr.forEach(task => {
    constructCard(task, inProgressContainer)
  });
  completedArr.forEach(task => {
    constructCard(task, completedContainer)
  });

};

const constructCard = (element, where) => {
    let outerDiv = document.createElement('div')
    outerDiv.classList = "flex flex-col bg-cyan-50 rounded-lg border-1 border-cyan-700 p-2 gap-2";

    let taskH1 = document.createElement('h1')
    taskH1.classList = "text-2xl font-semibold";
    taskH1.innerText = element.title;

    let priorityH1 = document.createElement('h1')
    if(element.priority == 1){
        priorityH1.classList = "text-center bg-red-600 border-3 border-red-800 rounded-2xl";    
        priorityH1.innerText = "Priority: High";
    }else if(element.priority == 2){
        priorityH1.classList = "text-center bg-yellow-300 border-3 border-yellow-600 rounded-2xl";    
        priorityH1.innerText = "Priority: Medium";
    }else{
        priorityH1.classList = "text-center bg-green-600 border-3 border-green-800 rounded-2xl";    
        priorityH1.innerText = "Priority: Low";
    }

    let dateDiv = document.createElement('div')
    dateDiv.classList = "flex gap-2 items-end";

    let completeBy = document.createElement('h1')
    completeBy.classList = "text-xl";
    completeBy.innerText = "Complete by: ";

    let dateP = document.createElement('p')
    dateP.innerText = element.date;

    dateDiv.appendChild(completeBy);
    dateDiv.appendChild(dateP);

    let descriptDiv = document.createElement('div')

    let descriptH1 = document.createElement('h1')
    descriptH1.classList= "text-xl";
    descriptH1.innerText = "Description: ";

    let descriptBox = document.createElement('div')
    descriptBox.classList = "bg-stone-200 mx-2 overflow-auto"

    let descriptP = document.createElement('p')
    descriptP.classList = "px-2"
    descriptP.innerText = element.description;

    descriptBox.appendChild(descriptP)
    descriptDiv.appendChild(descriptH1)
    descriptDiv.appendChild(descriptBox)

    let editBtn = document.createElement('button')
    editBtn.classList = "text-center border-1 rounded-lg bg-white";
    editBtn.innerText = "Edit";

    let DeleteBtn = document.createElement('button')
    DeleteBtn.classList = "text-center border-1 rounded-lg bg-white";
    DeleteBtn.innerText = "Delete";
    
    outerDiv.appendChild(taskH1);
    outerDiv.appendChild(priorityH1);
    outerDiv.appendChild(dateDiv);
    outerDiv.appendChild(descriptDiv);
    outerDiv.appendChild(editBtn);
    outerDiv.appendChild(DeleteBtn);

    where.appendChild(outerDiv)
}





export { CreateTaskCards };
