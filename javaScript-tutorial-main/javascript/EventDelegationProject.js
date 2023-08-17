const formTodo = document.querySelector(".form-todo")
const formInput = document.querySelector(".form-todo input[type = 'text']")
const formUl = document.querySelector(".todo-list")
formTodo.addEventListener("submit", (event1)=>{
    event1.preventDefault()
    const newInput = formInput.value
    const newLi = document.createElement("li")
    const newFormat = `<span class="text">${newInput}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">done</button>
      <button class="todo-btn remove">remove</button>
    </div>`
    newLi.innerHTML = newFormat
    formUl.append(newLi)
    formInput.value = ""
})
formUl.addEventListener("click", (event2)=>{
    if(event2.target.classList.contains("remove")){
        const liForRemove = event2.target.parentNode.parentNode
        liForRemove.remove()
        console.log("you have add on remove")
    }
    if(event2.target.classList.contains("done")){
        console.log("you have add on done")
        const liSpan = event2.target.parentNode.previousElementSibling
        liSpan.style.textDecoration = "line-through"
    }
})