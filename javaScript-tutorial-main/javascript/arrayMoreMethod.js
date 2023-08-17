const someNum1 = [1,3,4,5,6]

function MultplyBy2 (num1, position){
    console.log(`position is ${position} and number is ${num1}`, position)
    // console.log(`${num1} * 2 = ${num1 * 2}`)
}

// MultplyBy2(someNum[3], 3)
// MultplyBy2(someNum[2], 2)

// to get all value we have to manually callback all function but we can run loop instead of this

// for(let i = 0; i< someNum1.length; i++){
//     // console.log(i)
//     MultplyBy2(someNum1[i], i)
// }

// for Each method
// for each method will reduce code line
someNum1.forEach(MultplyBy2);

console.log("second function")

// example
const someNum2 = [7,8,8,9,0,0,3]
someNum2.forEach(function(num2, position2){    
    console.log(`position is ${position2} and number is ${num2}`, position2)
});

// example
const someNum3 = [3,2,4,5,6,7]
someNum3.forEach(function(num3){
    console.log (num3*3)
})

// example
const users = [
    {fName: "raju kukmar", age: 21, grade: "A"},
    {fName: "sonu kukmar", age: 20, grade: "A"},
    {fName: "mohit kukmar", age: 19, grade: "A"},
    {fName: "harshit kukmar", age: 22, grade: "A"}
]

// for each 
// users.forEach(function(rider){
//     // console.log(rider)
//     console.log(rider.fName)
//     console.log(rider.age)
//     console.log(rider.grade)
// })

// arrow function
// users.forEach((rider) =>{
//     // console.log(rider)
//     console.log(rider.fName)
//     console.log(rider.age)
//     console.log(rider.grade)
// })

// for of loop for same function
for(let rider of users){
    console.log(rider.fName)
    console.log(rider.age)
    console.log(rider.grade)
}