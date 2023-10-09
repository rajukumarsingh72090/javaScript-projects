const newTodoItem = document.createElement("li")
const newTodoText = document.createTextNode("Hello achiever")
const todoList = document.querySelector(".todo-list")
newTodoItem.append(newTodoText)
// append will add tag after the tag 
// todoList.append(newTodoItem)
// prepent will add tag befor the tag
todoList.prepend(newTodoItem)
// newTodoItem.appendChild(newTodoText)
console.log(newTodoItem)
