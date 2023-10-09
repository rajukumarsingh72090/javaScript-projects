const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
const refrenceNode = document.querySelector(".first-todo")
li.textContent = "new todo"
// ul.appendChild(li)
// ul.insertBefore(li, refrenceNode)
// ul.replaceChild(li, refrenceNode)
ul.remove(refrenceNode)