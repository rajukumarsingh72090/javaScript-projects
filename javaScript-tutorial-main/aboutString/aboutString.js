// undefined function because value is not assigned
let firstName;
console.log(firstName)

// undefined because value is not assigned
var firstName1;
console.log(firstName)

// cant leave const without putting value it will give error
// const firstName3;
// console.log(firstName)

// in console.log you can print more than of value 
firstName = "raju"
console.log(typeof firstName, firstName)

// null is nothing but console.log is printig 'object' that the bug of javascript
let myVar = null
console.log(myVar, typeof myVar)

// bigInt 1st method
let myNum = BigInt(123)
console.log(myNum)

// bigInt second method
let myNum1 = 123n
console.log(myNum1)

// adding bigInt
let addMyNum = myNum + myNum1
console.log(addMyNum)