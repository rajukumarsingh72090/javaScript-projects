const newElement = document.createElement("li")
newElement.textContent = " hello i am"
const todoList = document.querySelector(".todo-list")
// todoList.before(newElement)
todoList.after(newElement)
console.log(todoList)