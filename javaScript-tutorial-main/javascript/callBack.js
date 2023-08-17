// function myFunc(CallingFunction){
//     console.log("fuction is doing some task")
//     CallingFunction()
// }
// function myFunc2(){
//     console.log("fuction is doing some task 2")
// }
// myFunc(myFunc2)


function getTwoNum (num1, num2, callMyFunc){
    if(typeof num1 === "number" && typeof num2 === "number"){
    callMyFunc(num1,num2)
    }else{
        console.log("wrong data type")
    }
}

// function addTwoNum (num3, num4){
//     console.log (num3 + num4)
// }

// getTwoNum(4,5, addTwoNum)
getTwoNum(4,5, (num3, num4) =>{
    console.log(num3 + num4)
})