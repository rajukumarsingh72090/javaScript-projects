const Grandpa = document.querySelector(".grandparent")
const papa = document.querySelector(".parent")
const bacha = document.querySelector(".child")

// event capturing
bacha.addEventListener("click", ()=>{
    console.log("capture child")
},true)
papa.addEventListener("click", ()=>{
    console.log("capture parent")
},true)
Grandpa.addEventListener("click", ()=>{
    console.log("capture grandparent")
},true)
document.body.addEventListener("click", ()=>{
    console.log("capture body")
},true)

// event bubbling
bacha.addEventListener("click", ()=>{
    console.log("bubbling child")
})
papa.addEventListener("click", ()=>{
    console.log("bubbling parent")
})
Grandpa.addEventListener("click", ()=>{
    console.log("bubbling grandparent")
})
document.body.addEventListener("click", ()=>{
    console.log("bubbling body")
})