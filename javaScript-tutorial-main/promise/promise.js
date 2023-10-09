console.log("script start")

const bucket = ["coffee", "tea", "vegetable", "salt", "rice"]
// promise made
const myPromise = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("material available")
    }else{
        reject("material is not available")
    }
})

// promise use
// myPromise.then((myFood)=>{
//     // if promise resolve
//     console.log("yeah",myFood)
// },
// (myError)=>{
//     // if promise reject
//     console.log("but",myError)
// })

myPromise.then((myFood)=>{
    // if promise resolve
    console.log("yeah",myFood)
}).catch((myError)=>{console.log(myError)})


// myPromise.then(
//     null,
// (myError)=>{
//     // if promise reject
//     console.log("but",myError)
// })

for(let i = 0; i<100; i++){
    console.log(Math.random(), i)
}

setTimeout(()=>{
    console.log("hello from set time out")
})

console.log("script end")