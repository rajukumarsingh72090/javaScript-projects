// maps are iterable
// duplicates are not allowed
// store key value pair
// you can use anything as a key like number , array or strings

// const person1 = {
//     fName: "raju kumar",
//     age: 21,
//     2: "two"
// }
// console.log(person1.fName)
// console.log(person1["fName"])
// for(let key1 in person1){
//     console.log(typeof key1)
// }

// map 
const person2 = new Map()
person2.set("my name", "raju")
person2.set("my age", "21")
person2.set(1, "one")
// person2.set([1,2,3,], "one")
// person2.set({1: "one"}, "one")
// console.log(person2)
// console.log(person2.get("my name"))
// console.log(person2.get("my age"))
// console.log(person2.get(1))
// console.log(person2.keys())

// for(let key1 of person2.keys()){
//     console.log(key1, typeof key1)
// }

// for(let key2 of person2){
//     // console.log(key2)
//     // console.log(Array.isArray(key2))
//     console.log(typeof key2)
// }

// destructuring map
for(let [key2, value] of person2){
    console.log(key2, value)
}


// const person3 = new Map([
//     ["fName", "harshit"],
//     ["age", "22"],
//     [1, "one"]
//   ]
// )
// console.log(person3)

const personId1 = {
  id: 1,
  pName: "harshvanrdhan"
}
const personId2 = {
  id: 2,
  pName: "radhika"
}

const userInfo = new Map()
userInfo.set(personId1, {age: 28, gender: "male"})
userInfo.set(personId2, {age: 18, gender: "female"})
console.log(personId1.id)
console.log(personId2.id)
console.log(userInfo.get(personId1).gender)
console.log(userInfo.get(personId2).gender)
