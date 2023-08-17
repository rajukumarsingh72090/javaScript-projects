const link1 = document.querySelector("a")
console.log(link1.getAttribute("href"))
console.log(link1.getAttribute("href").slice(1))
link1.setAttribute("href", "https://wwww.facebook.com")
console.log(link1.getAttribute("href"))


const formInput = document.querySelector(".form-todo input")
console.log(formInput.getAttribute("type"))