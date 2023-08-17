const mainButtton = document.querySelector("button")
const body1 = document.body
const CurrenColor1 = document.querySelector(".current-color")
function randomColorGenerator(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor
}

mainButtton.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator()
    console.log(randomColor)
    body1.style.backgroundColor = randomColor
    CurrenColor1.textContent = randomColor
})