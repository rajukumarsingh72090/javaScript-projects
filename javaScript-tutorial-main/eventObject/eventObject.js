// in event object we call javaScript event object it will return call back function with included information in the form of object

// const firstButton = document.querySelector("#one")
// firstButton.addEventListener("click", function(){
//     console.log(this)
// })

const allButton = document.querySelectorAll(".all-button button")

// for of loop
// for(let btn of allButton){
//     btn.addEventListener("click", function(){
//         console.log(this)
//     })
// }

for(let btn of allButton){
    btn.addEventListener("click", (e) =>{
        // console.log(e)
        // console.log(e.target)
        console.log(e.currentTarget) 
    })
}
