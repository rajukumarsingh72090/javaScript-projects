let num1 = [1,3,4,]
// javascript create any variable in hidden function form the above code we write and the below code assume javascript
// let num1 = new Array(1,2,3,4)
// javaScript get method from prototype
// to see the prototype we have to consol a prototype variable
console.log(Object.getPrototypeOf(num1))
console.log(num1)


function hello(){
    console.log("hello world")
}
console.log(hello.prototype)
// to change this prototype constructor into empty
hello.prototype = []
console.log(hello.prototype)
// to add something
hello.prototype.push = [1]
console.log(hello.prototype)
