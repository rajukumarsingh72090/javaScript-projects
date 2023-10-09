const array1 = [1,2,3]
const array2 = [4,5,6]

// spread threes dot is spread operator before array1 and array2
const totalArray = [ ...array1, ...array2]
console.log(totalArray)

// spread array for better clearance
const newArray1 = [..."abc"]
console.log(newArray1)

// spread operator must be in string to spread
const newArray2 = [..."1233243678"]
console.log(newArray2)

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
    // second key will console for same of key
    key1: "value last",
}
console.log(obj1)

const obj2 = {
    key3: "value3",
    key4: "value4",
    // second key will console for same of key even key in second object
    key1: "change again",
}

const newObj = {...obj1, ...obj2, key5:"value5"}
console.log(newObj)

// spread as a value pair
const oneMoreObj = {..."abc"}
console.log(oneMoreObj)

const oneMoreObj2 = {...["item1", "item2"]}
console.log(oneMoreObj2)
