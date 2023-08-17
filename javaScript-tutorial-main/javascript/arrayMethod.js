let fruits = ["apple", "mango", "grapes"]
console.log(fruits)

// push method is used to add elements in ending
fruits.push("banana")
console.log(fruits)

// pop method will removed elements from ending

// console.log(fruits.pop())
// console.log(fruits)


// we can make variable of pop elements
let poppedFruits = fruits.pop()
console.log(fruits)
console.log(`this is ${poppedFruits}`)

// unshift method is used to add elements in starting
fruits.unshift("pineapple")
fruits.unshift("papaya")
console.log(fruits)

// shift method will remove element from starting

// fruits.shift()
// console.log(fruits)

// we can var variable to show the shift elements
let removedFruits = fruits.shift()
console.log("this is a", removedFruits)