const allButton = document.querySelectorAll(".all-button button")

allButton.forEach(button => {
    button.addEventListener("click", (e)=>{
        // console.log(e.target)
        e.target.style.backgroundColor = "yellow"
        e.target.style.color = "red"
    })
})