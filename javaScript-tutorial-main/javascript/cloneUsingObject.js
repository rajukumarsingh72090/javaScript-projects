const obj1 = {
    key1: "value1",
    key2: "value2",
}

// const obj2 = obj1
// obj1.key3 = "value3"
// console.log(obj1)
// console.log(obj2)

// cloning 1st way by spread method
// const obj2 = {...obj1}
// obj1.key3 = "value3"
// console.log(obj1)
// console.log(obj2)

// cloning 2nd way by object assign method
const obj2 = Object.assign({}, obj1)
obj1.key3 = "value3"
console.log(obj1)
console.log(obj2)