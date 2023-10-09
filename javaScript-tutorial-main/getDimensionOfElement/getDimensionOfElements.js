const sectionTodo = document.querySelector(".todo-section")
// to show height and widht distance from top , bottom , left and right
// const info = sectionTodo.getBoundingClientRect()

// to hight only
const info = sectionTodo.getBoundingClientRect().height
console.log(info)