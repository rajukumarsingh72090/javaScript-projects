// textContent will show eveything that has been written in html even hidden text (display:none) that is not showing in web
const mainHeading = document.getElementById("main-heading")
console.log(mainHeading.textContent)
// mainHeading.textContent = "I have changed the task"
// console.log(mainHeading.textContent)

// innerText will show all text that is showing on the web it will not show hidden text (display:none)
const mainHeading2 = document.getElementById("main-heading")
console.log(mainHeading2.innerText)