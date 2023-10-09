// where we can run for of loop is called iterable, which is string and array

// string
const raju = "raju"
for(charOfMyName of raju){
    console.log(charOfMyName)
}

// array
const kuchItem = ["raju", "sanjeev", "dheeraj"]
for(charName of kuchItem){
    console.log(charName)
}

// array like object
const myName = "kumar"
console.log(myName.length)
console.log(myName[2])