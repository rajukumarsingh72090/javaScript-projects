let firstName = "   RajuKumarSingh"
console.log(firstName)
console.log(firstName.length)

// firstName trim 1st method
let newString = firstName.trim()
console.log(newString)
console.log(newString.length)

// firstnaem trim 2nd method
firstName = firstName.trim()
console.log(firstName.length)

// capital later
firstName = firstName.toUpperCase()
console.log(firstName)

// small later
firstName = firstName.toLowerCase()
console.log(firstName)

// slice result after trimming
let newString1 = firstName.slice(1)
console.log(newString1)

// trim result
newString1 = firstName.slice(0, 4)
console.log(newString1)
