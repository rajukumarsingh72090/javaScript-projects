function myName1(){
    console.log("is it printing my name")
}

// calling a function
myName1()

function twoPlusFour(){
    console.log(2+4)
}

twoPlusFour()


// printing a cosole
function onePlusOne(){
    return 1+1
}
console.log(onePlusOne())

// consoling by making constant
const returnValue = onePlusOne()
console.log(returnValue)

// function with parameters 
// function numberAdding1(number1, number2){ 
//     return number1 + number2   //function declaration
// }


// we can also use var and let intead of const
const numberAdding1 = function(number1, number2){
    return number1 + number2       //function expression
}
const iWillAdd1 = numberAdding1(3, 5)
console.log(iWillAdd1)

// if we will not pass any value it will NaN
// const IWillAdd2 = numberAdding()
// console.log(IWillAdd2)


function numberAdding2(number1, number2, number3){
    return number1 + number2 + number3
}

// if we will give two value it will NaN because we have given three params but we will put value it will show result
const iWllAdd3 = numberAdding2(6,6)
console.log(iWllAdd3)

// example
function isEven (numbers){
    return numbers % 2 === 0
} 
console.log(isEven(3))

// example
function firstLatter(start1){
    return start1[0]
}
console.log(firstLatter("hello"))

function findTarget(numb1, target){
    for(i=0; i<numb1.length; i++){
        if(numb1[i] === target){
            return i
        }
    }
    return "not found"
}
const myArray1 = [1,2,5,56,43]
const ans = findTarget(myArray1, 56)
console.log(ans)

// function expression 
// decorating function is function expressiong

// function myName2(){         //function declaration
//     console.log("is it printing my name")
// }

const myName2 = function(){     //fucntion expression
    console.log("is is printing again")
}

myName2()