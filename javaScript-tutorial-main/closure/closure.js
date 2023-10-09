function hello(x){
    const a = "varA"
    const b = "varB"
    return function(){
        console.log(a,b,x)
    }
}
const answ = hello("arg")
answ()

// example
function myfunction(power1){
     return function(number1){
        return number1 ** power1
     }
}
const numSquare1 = myfunction(2)
const myNumber1 = numSquare1(4)
console.log(myNumber1)

const numCube1 = myfunction(3)
const myNumber2 = numCube1(4)
console.log(myNumber2)

// example
function myFunc(){
    let counter1 = 0
    return function(){
    if(counter1 < 1){
        console.log("aapne mujhe console kiya")
        counter1++
    }else{
        console.log("aapne mujhe pahle hi console kar liya hai dubar karne ki jarurat nhi")
    }
 }
}
const callMyFunc = myFunc()
callMyFunc()
callMyFunc()
callMyFunc()