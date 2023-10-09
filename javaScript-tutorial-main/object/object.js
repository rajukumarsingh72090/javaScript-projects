const myName = {name: "raju", age: 21}
console.log(myName)

// to access data from object
console.log(myName.name) // 1st method
console.log(myName["name"]) // 2nd method
console.log(myName.age)
console.log(myName["age"])
// adding array in object 
const randomPerson = {
    name: "Prince",
    age: 18,
    hobbies: ["playing", "singing", "dancing"],
    aims: ["ips", "ias", "engineer"]
}
console.log(randomPerson)

// adding key value pair
randomPerson.gender = "male" //1st method
randomPerson["happy"] = "not at all" // 2nd method
console.log(randomPerson)