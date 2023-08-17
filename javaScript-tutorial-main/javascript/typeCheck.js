let age = 22
let firstName = "Raju"

// checking type though let
console.log(typeof age)
console.log(typeof firstName)

// checking type indipendantly
console.log(typeof 3)
console.log(typeof "j")

// converting number to string 1st method
age = age + ""
console.log(typeof age)

// converting number to string 2nd method
age = String(age)
console.log( typeof age)

let StringAge = "32"
console.log(typeof StringAge)

// converting string to number 1st method
StringAge = +"32"
console.log(typeof StringAge)

// converting string to number 2nd method
StringAge = Number(StringAge)
console.log(typeof StringAge)