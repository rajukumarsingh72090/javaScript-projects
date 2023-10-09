const key1 = "no 1"
const key2 = "no 2"

const value1 = "rose"
const value2 = "merigold"

// 1st method
const bod = {}
bod[key1] = value1
bod[key2] = value2
console.log(bod)

// 2nd method
const obj2 = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj2)