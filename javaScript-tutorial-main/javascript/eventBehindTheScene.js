
console.log(" script start")
const allButton = document.querySelectorAll(".all-button button")
allButton.forEach((buttons)=>{
    buttons.addEventListener("click", (evnt)=>{
        let num1 = 0
        for(let i = 0; i <= 100000000; i++){
            num1 += i
        }
        console.log(evnt.currentTarget.textContent, num1)
    })
})

let outerVar = 0;
for(let i = 0; i <= 10000000; i++){
    outerVar += i
}
console.log("the outerVar is", outerVar)
console.log("end")