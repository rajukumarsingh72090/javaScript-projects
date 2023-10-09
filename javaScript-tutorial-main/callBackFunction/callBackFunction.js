function app(callBack){
    // console.log(a)
    callBack("raju")
    console.log("hello world")
}
// app([1,2,2,2])
// app("abc")

function app2 (name){
    console.log(`your name is ${name}`)
    console.log("this is second hello world")
}
// in this code callBack function will first print app2() then after app()
app(app2)