let fruits = ["apple", "mango", "banana", "grapes"]
console.log(fruits.length)

// element from start index
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

// element from last index
console.log(fruits[fruits.length-1])
console.log(fruits[fruits.length-2])
console.log(fruits[fruits.length-3])
console.log(fruits[fruits.length-4])

// for loop in array
let fruits2 = []
for(i=0; i < fruits.length; i++){
    console.log(i)
    fruits2.push(fruits[i].toUpperCase())
}
console.log(fruits2)