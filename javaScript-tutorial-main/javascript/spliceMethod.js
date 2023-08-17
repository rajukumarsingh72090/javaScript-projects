// it is use to delete or insert something in array
const thodaArry = ["item1", "item2", "item3"]
// in the splice (1,1,"insert") first one means start from one, second one means delete one element and third inset means insert something.
// delete
// thodaArry.splice(1,1)
// console.log(thodaArry)

// printing deleted item
// const deltedOne = thodaArry.splice(1,1)
// console.log("showingDeleted", deltedOne)
// console.log(thodaArry)

// insert
// thodaArry.splice(1,0,"addMe")
// console.log(thodaArry)

// insert and delete together
// thodaArry.splice(1,2, "one", "two")
// console.log(thodaArry)

// printin deletd item
const deltedOne = thodaArry.splice(1,2, "one", "two")
console.log("showingDeleted", deltedOne)
console.log(thodaArry)