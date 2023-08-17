const fruits = ["apple", "orange", "banana"]
const fruits2 = []
let i = 0;
while(i < fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2)