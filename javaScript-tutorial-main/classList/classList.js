const sectionTodo = document.querySelector(".todo-section")
console.log(sectionTodo)
console.log(sectionTodo.classList)
// .add for adding class
sectionTodo.classList.add("bgDark")
// .remove for removing class
sectionTodo.classList.remove("bgDark")
// .contains to check classlist is available or not
const ans = sectionTodo.classList.contains("bgDark")
console.log(ans)

// toggle will remove classlist if exist other it will add class if it is not exit
sectionTodo.classList.toggle("bgDark")  //added
sectionTodo.classList.toggle("bgDark")  //removed