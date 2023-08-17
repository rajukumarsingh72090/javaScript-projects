const myArray1 = ["value1", "value2"]
let myVar1 = (myArray1[0])
let myVar2 = (myArray1[1])

console.log(myVar1)
console.log(myVar2)

// desttructuring of array 
// it is easy and shortcut method
// third value will not appear unitl we don't make  var3
// 
const myArray2 = ["blue", "black", "yellow"]
let [var1, var2] = myArray2
var1 = "red"
console.log(var1)
console.log(var2)

const myArray3 = ["mango", "orange", "guava",]
// space has been left to skip 2nd valu and print 3rd value
let [var3, , var4] = myArray3
var1 = "red"
console.log(var3)
console.log(var4)

const myNewArray = ["money", "table", "chair", "glass"]
let [myItem1, myItem2] = myNewArray
let myTAraay = myNewArray.slice(2)
console.log(myItem1)
console.log(myItem2)
console.log(myTAraay)

// there is one more alternative
const mySecArray = ["bag","phone", "door", "blood" , "honey"]
// ...MyNewItem3 will pring the rest of the item that has been left 
let [myNewItem1, myNewItem2, ...myNewItem3] = mySecArray
console.log(myNewItem1)
console.log(myNewItem2)
console.log(myNewItem3)
