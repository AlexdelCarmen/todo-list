class ToDoList {
  constructor(listElement) {
    this.listElement = listElement;
    this.taskList = [];
    this.completedList = [];
  }

  static createToDo(text) {
    const li = document.createElement("li");
    const completeTaskButton = document.createElement("button");
    li.textContent = text;
    li.appendChild(completeTaskButton); 
    return li;
  }

  updateToDoList() {
    // Clear the list
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    // Fill out updated list with new task

    for (const task of this.taskList) {
      this.listElement.appendChild(ToDoList.createToDo(task));
    }
  }

  add(text) {
    this.taskList.push(text);
    this.updateToDoList();
  }
}
