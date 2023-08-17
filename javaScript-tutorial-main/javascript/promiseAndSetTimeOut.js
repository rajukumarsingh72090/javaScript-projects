function myPromise(){
    return new Promise((resolve, reject)=>{
        // const someValue = true
        const someValue = false
        setTimeout(() => {
            if(someValue){
                resolve()
            }else{
                reject()
            }
        }, 2000);
    })
}

myPromise()
.then(()=>{console.log("resolve")})
.catch(()=>{console.log("reject")})