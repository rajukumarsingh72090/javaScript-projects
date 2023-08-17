
// function myName1(){     //function declaration
//     console.log("is it printing my name")
// }

// const myName1 = function(){   //function expression
//     console.log("is it printing my name")
// }

// let and var can also be used insted of const
// paranthesis is necessary if there zero parameter and more than one parameter 
const myName1 = () => {      //arrow function
    console.log("is it printing my name")
}
myName1()

// function isEven (numbers){   //function declaration
//     return numbers % 2 === 0
// }

// wihtout paranthesis () can work if there is one parameter 

// const isEven = numbers => {   // arrow function
//     return numbers % 2 === 0
// }

// arrow function can work wihtout curly braces {} and without retun if the code will come in one line
const isEven = numbers => numbers % 2 === 0

const cheking = isEven
console.log(cheking(3))