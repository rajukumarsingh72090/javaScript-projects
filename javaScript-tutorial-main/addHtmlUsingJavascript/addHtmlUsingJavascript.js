const todoList = document.querySelector(".todo-list")
console.log(todoList)
console.log(todoList.innerHTML)
todoList.innerHTML = "<li> new todo</li>"
todoList.innerHTML = todoList.innerHTML + "<li> one more todo</li>"
todoList.innerHTML += "<li> one more todo 2</li>"