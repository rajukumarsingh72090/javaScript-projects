// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// day
const myH1 = document.querySelector(".mytag")
const days = new Date

const today1 = days.getDay() 
const week = ["sunday","monday", "tuesday","wednesdaya", "thursday", "friday", "saturday"]
// week.toUpperCase()
const myDay = week[today1]
myH1.innerHTML = "today is : "+ myDay

// time
const currentHours = days.getHours()
const currentminutes = days.getMinutes()
const currentSeconds = days.getSeconds()
const currentMilliSeconds = days.getMilliseconds()

const newTag = document.createElement("h1")
const myText = document.createTextNode(`Current time is ${currentHours} : ${currentminutes} : ${currentSeconds} : ${currentMilliSeconds}`)
newTag.appendChild(myText)
const myAppend = document.querySelector(".mytag")
myAppend.append(newTag)