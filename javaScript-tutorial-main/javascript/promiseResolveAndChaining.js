// const myPromise = Promise.resolve(5)
// // then method always return promise
// myPromise.then(value =>{
//     console.log(value)
// })

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}
myPromise().then((value) =>{
    console.log(value)
    value += "hello"
    // return value
    return Promise.resolve(value)
}).then((value1)=>{
    console.log(value1)
    value1 += "twice"
    return value1
}).then((value3)=>{
    console.log(value3)
})