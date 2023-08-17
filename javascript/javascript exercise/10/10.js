// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). 

function multiplyBy(){
    num1 = document.getElementById("firstNumber").value
    num2 = document.getElementById("secondNumber").value
    let result = num1 * num2
    document.getElementById("result").innerHTML = result
}