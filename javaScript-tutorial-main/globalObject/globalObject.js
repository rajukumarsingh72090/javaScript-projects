console.log(this)
console.log(window)
console.log(this === window)

// example
function myFunc1(){
    console.log(this)
}
myFunc1()
window.myFunc1()

// example
// if we will use strict the function will give undefined
function myFunc2(){
    "use strict"
    console.log(this)
}
myFunc2()

// use strict mode can put outside of the function it will work 
"use strict"
function myFunc3(){
    
    console.log(this)
}
myFunc2()