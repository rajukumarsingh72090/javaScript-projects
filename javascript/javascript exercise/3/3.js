// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const myDate = new Date
const myh1 = document.querySelector(".my-date")
myh1.innerHTML = myDate.toDateString()
