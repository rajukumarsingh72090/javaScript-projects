const myURL = "https://jsonplaceholder.typicode.com/posts"
fetch(myURL)
const urlResult = fetch(myURL, {
    method: "POST",
    body: JSON.stringify({
        titlle: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "content-type": "application/json ; charset=UTF-8"
    },
})
// console.log(urlResult)
.then(myResponse => {
    // console.log(myResponse)
    if(myResponse.ok){
        return myResponse.json()
    }else{
        throw new Error("something went wrong")
    }
    return myResponse.json()
})
.then(someData =>{
    console.log(someData)
})
.catch(myError =>{
    console.log("catch error")
    console.log(myError)
})