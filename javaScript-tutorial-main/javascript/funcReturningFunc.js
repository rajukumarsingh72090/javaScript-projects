function myFunc1 (){
    function hello (){
        // console.log("hello world")  // directly call
        return "hello world"  // we have to console in callback function
    }
    // return "a"
    // return [1,2,2,3,4]
    return hello
    
}
const waapas = myFunc1()
// console.log(waapas)    //return full syntax including green text (//)
// console.log(waapas())    //return value
// waapas()    //return value
console.log(waapas())


// in second way we directly return function
function myFunc2 (){
    return function(){
        return "hello world 2"
    }
}
const waapas2 = myFunc2()
console.log(waapas2())