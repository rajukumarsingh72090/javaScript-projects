// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// C = (5/9) * (F - 32)
const firstInput = document.getElementById("first").value
function ctf(c){
    firstInput = c * 9/5 + 32
    let convert = `${c}\u00B0C is ${first}\u00B0F`
    document.getElementById("result").innerText = convert
}

const secondInput = document.getElementById("second").value
function ftc(f){
    secondInput = (f - 32) * 5/9
    const convert = `${f}\u00B0F is ${second}\u00B0C`
    document.getElementById("result").innerText = convert
}
