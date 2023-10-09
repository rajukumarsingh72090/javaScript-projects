const someNum = [11,34,54,54]

// const square = function(someNum){
//     return someNum + someNum
// }

// const sqNumber = someNum.map(square)
// console.log(sqNumber)

const sqNumber = someNum.map ((someSquare, position) =>{
    return `${someSquare* someSquare}, ${position}`
})
console.log(sqNumber)

// example
const users = [
    {fName: "raju kukmar", age: 21, grade: "A"},
    {fName: "sonu kukmar", age: 20, grade: "A"},
    {fName: "mohit kukmar", age: 19, grade: "A"},
    {fName: "harshit kukmar", age: 22, grade: "A"}
]

const userName = users.map((pahleNaame) => {
    return pahleNaame.fName
})

console.log(userName)