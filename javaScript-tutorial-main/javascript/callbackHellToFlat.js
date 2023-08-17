const heading1 = document.querySelector(".headinng1")
const heading2 = document.querySelector(".headinng2")
const heading3 = document.querySelector(".headinng3")
const heading4 = document.querySelector(".headinng4")
const heading5 = document.querySelector(".headinng5")
const heading6 = document.querySelector(".headinng6")
const heading7 = document.querySelector(".headinng7")

function changText(element, text, color, time){
    return new Promise((resolve1,reject1)=>{
        setTimeout(() => {
            if(element){
                element.textContent = text
                element.style.color = color
                resolve1("resolved problem")
            }else{
                reject1("element not found")
            }
        }, time);
    })
}

// const returnPromise = changText(heading1, "one", "red", 2000)
// returnPromise.then(()=>{
//    return changText(heading2, "two", "red", 1000)
// }).then(()=>{
//     return changText(heading3, "three", "red", 1000)
// }).then(()=>{
//     return changText(heading4, "four", "red", 1000)
// }).then(()=>{
//     return changText(heading5, "five", "red", 1000)
// }).then(()=>{
//     return changText(heading6, "six", "red", 1000)
// }).then(()=>{
//     return changText(heading7, "seven", "red", 1000)
// }).catch((error)=>{
//     console.log(error)
// })

// short form
const returnPromise = changText(heading1, "one", "red", 2000)
.then( () => changText(heading2, "two", "red", 1000))
.then( () => changText(heading3, "three", "red", 1000))
.then( () => changText(heading4, "four", "red", 1000))
.then( () => changText(heading5, "five", "red", 1000))
.then( () => changText(heading6, "six", "red", 1000))
.then( () => changText(heading7, "seven", "red", 1000))
// if errors will catch method will run
.catch( (error) => console.log(error) )