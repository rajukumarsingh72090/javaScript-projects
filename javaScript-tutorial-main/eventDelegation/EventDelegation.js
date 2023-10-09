const Grandpa = document.querySelector(".grandparent")

// Grandpa.addEventListener("click", ()=>{
//     console.log("you clicked something")
// })

// Grandpa.addEventListener("click", (e)=>{
//     console.log(e)
// })

// Grandpa.addEventListener("click", (e)=>{
//     console.log(e.target)
// })

Grandpa.addEventListener("click", (e)=>{
    console.log(e.target.textContent)
})