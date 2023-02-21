class ToDoList {
  constructor(pendingList, completedList) {
    this.pendingList = pendingList;
    this.completedList = completedList;
    this.taskList = [];
    this.doneList = [];
  }

  static createToDo(text) {
    const li = document.createElement("li");
    const completeTaskButton = document.createElement("button");
    const deleteTaskButton = document.createElement("button");
    completeTaskButton.classList.add("complete");
    completeTaskButton.innerHTML = "Done";
    deleteTaskButton.innerHTML = "Delete";
    deleteTaskButton.classList.add("delete");
    li.textContent = text;
    li.appendChild(completeTaskButton);
    li.appendChild(deleteTaskButton);

    return li;
  }

  static completeToDo(text) {
    const li = document.createElement("li");
    li.textContent = text;

    return li;
  }

  updateToDoList() {
    // Clear the list
    while (this.pendingList.firstChild) {
      this.pendingList.removeChild(this.pendingList.firstChild);
    }

    // Fill out updated list with new task

    for (const task of this.taskList) {
      this.pendingList.appendChild(ToDoList.createToDo(task));
      let i = 0;
      let list = this.pendingList.children;
      Array.from(list).forEach((element) => {
        element.id = i;
        i++;
      });
    }
  }

  updateCompletedList() {
    while (this.completedList.firstChild) {
      this.completedList.removeChild(this.completedList.firstChild);
    }

    for (const task of this.doneList) {
      this.completedList.appendChild(ToDoList.completeToDo(task));
    }
  }

  add(text) {
    this.taskList.push(text);
    this.updateToDoList();
  }

  complete(index) {
    this.doneList.push(this.taskList[index]);
    this.taskList.splice(index, 1);
    this.updateToDoList();
    this.updateCompletedList();
  }

  remove(index) {
    this.taskList.splice(index, 1);
    this.updateToDoList();
  }
}
