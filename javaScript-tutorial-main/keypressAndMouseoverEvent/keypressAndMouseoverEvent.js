// keypress event
// const body = document.body
// body.addEventListener("keypress", (e) =>{
//     // console.log(e)
//     console.log(e.key)
// })

// mouseOver event
const body = document.body
const btn = document.querySelector(".btn-headline")
btn.addEventListener("mouseover", () =>{
    console.log("mouse hover")
})


btn.addEventListener("mouseleave", () =>{
    console.log("mouse left")
})
