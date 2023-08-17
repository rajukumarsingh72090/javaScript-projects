// console.log("script start")
// setInterval(()=>{
//     console.log(Math.random())
// },1000)

const deh = document.body
const stopColor = document.querySelector("button")

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const allColor = `rgb(${red}, ${green}, ${blue})`
    deh.style.backgroundColor = allColor
    // console.log(allColor)
}, 1000);

stopColor.addEventListener("click",()=>{
    clearInterval(intervalId)
    stopColor.textContent = deh.style.backgroundColor
})