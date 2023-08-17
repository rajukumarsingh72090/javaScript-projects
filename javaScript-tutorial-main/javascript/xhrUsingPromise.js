const myURL = "https://jsonplaceholder.typicode.com/posts"
function sendRequest(method1, url1){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(method1,url1)
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response)
            }else{
                reject(new Error("something went wrong"))
            }
            xhr.onerror = ()=>{
                reject(new error("somethi went wrong 2"))
            }
        }
        xhr.send()
    })
}
const result = sendRequest("GET", myURL)
// chaining
.then( response => {
    const data = JSON.parse(response)
    // console.log(data)
    return data
})
.then(data =>{
    // console.log(data)
    // console.log(data[2])
    // console.log(data[2].id)
    const id = data[3].id
    return id
})
.then(id => {
    // console.log(id)
    const myURL2 = `${myURL}/${id}`
    // console.log(myURL2)
    return sendRequest("GET", myURL2)
})
.then(newResponse =>{
    // console.log(newResponse)
    const newData = JSON.parse(newResponse)
    console.log(newData)
})
.catch(error1 =>{
    console.log(error1)
})