// const btn1 = document.querySelector("#one")
// btn1.addEventListener("click", function(){
//     console.log("you clicked me")
// })

const allButton = document.querySelectorAll(".all-button button")

// for of loop
// for(let btn of allButton){
//     // here arrow function will undefined so we have to write function
//     btn.addEventListener("click", function(){
//         // console.log("hey you clicked me")
//         // console.log(this)
//         console.log(this.textContent)
//         // console.dir(this)
//     })
// }

// simple for loop
// for(let i = 0; i < allButton.length; i++){
//     allButton[i].addEventListener("click", function(){
//         console.log(this)
//     })
// }

// for each
allButton.forEach(function(btn){
    btn.addEventListener("click", function(){
        console.log(this)
    })
})