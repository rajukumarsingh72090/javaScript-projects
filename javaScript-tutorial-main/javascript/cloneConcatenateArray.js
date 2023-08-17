
// array clone but it is bad method of array cloning
// clone is process of making similar thing 
let array1 = ["item1","item2"]
let array2 = ["item1","item2"]

array1.push("item3")
console.log(array1 === array2)

console.log(array1)
console.log(array2)

// 2nd method of array clone
let aray1 = ["1st piece", "2nd piece"]
let aray2 = aray1.slice(0).concat(["4th piece", "5th piece"])
aray1.push("3rd piece")
console.log(aray1)
console.log(aray2)

// 3rd method with little change
let rArray1 = ["1st num", "2nd num"]
let rArray2 = [].concat(rArray1,["4th num", "5th num"])
rArray1.push("3rd num")
console.log(rArray1)
console.log(rArray2)

// new way of cloning array
let arrays1 = ["no 1", "no 2"]
let arrays3 = ["no 4", "no 5", "no 6"]
let arrays2 = [...arrays1, ...arrays3, "no 7"]
arrays1.push("3rd num")
console.log(arrays1)
console.log(arrays2)