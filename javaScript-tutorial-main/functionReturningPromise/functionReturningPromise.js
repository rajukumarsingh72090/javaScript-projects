

function myPromise(){
    const bucket = ["coffee", "tea", "vegetable", "salt", "rice"]
    return new Promise( (resolve, reject) => {
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("material available")
    }else{
        reject("material is not available")
    }
})}

myPromise().then(
    (myFood)=>{
        console.log("let me eat", myFood)
}).catch((myError)=>{console.log(myError)})