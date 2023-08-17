const fruits = ["apple", "mango", "banana"]
const fruits2 = []
for(let fruit in fruits){
    console.log(fruits[fruit])
    fruits2.push(fruits[fruit].toUpperCase())
}
console.log(fruits2)