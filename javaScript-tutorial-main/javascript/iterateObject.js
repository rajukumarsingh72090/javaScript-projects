const person = {
    name: "raju",
    age: 21,
    "person hobbies": ["listening", "solving", "conntributing"]
}

// for in loop
for(let key in person){
    // console.log(key)   // keys will come
    // console.log(person[key]) // key value will come
    // console.log(`${key} : ${person[key]}`) // key with value will come 
    console.log(key, ":", person[key]) // 2nd way to get name with value
}

// object keys
console.log(typeof Object.keys(person))
const raj = Array.isArray(Object.keys(person))
console.log(raj)

// for of loop
 for(let key of Object.keys(person)){
    // console.log(key) //keys only
    console.log(person[key])
 }