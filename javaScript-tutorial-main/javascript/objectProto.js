const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {
//     key3: "value3"
// }
// console.log(obj2.key2)

// if we use object.create and give some parameter it will in first obj2 if it will not find it will search in obj1 and give the result
// if we will not use it will give undefined
const obj2 = Object.create(obj1)
obj2.key3 = "value3"
console.log(obj2.key2)

// prote store object from main function
// this is also called tunder
// proto is the refrence of object
// proto and prototype are two different thing
console.log(obj2.__proto__)

