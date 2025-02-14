const SaveTask = (task) => {
    let taskArr = GetSavedTasksFromLocalStorage();
    const GetIds = taskArr.map((tasks) => tasks.Id)
    if (!GetIds.includes(task.Id)) {
      taskArr.push(task);
    }
    localStorage.setItem("SavedTasks", JSON.stringify(taskArr));
  };
  
  const GetSavedTasksFromLocalStorage = () => {
    let localStorageData = localStorage.getItem("SavedTasks");
    if (localStorageData == null) {
      return [];
    }
    return JSON.parse(localStorageData);
  };
  
  const RemoveFromSavedTask = (taskToRemove) => {
      let localStorageData = GetSavedTasksFromLocalStorage();
      const updatedTasks = localStorageData.filter(task => 
          task.Id !== taskToRemove.Id
      );
      localStorage.setItem("SavedTasks", JSON.stringify(updatedTasks));
  };

export {
    SaveTask,
    GetSavedTasksFromLocalStorage,
    RemoveFromSavedTask
}