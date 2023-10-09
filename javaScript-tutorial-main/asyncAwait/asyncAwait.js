const myURL = "https://jsonplaceholder.typicode.com/posts"

// fetch(myURL)
// .then(response1 =>{
//     return response1.json()
// })
// .then(data1 =>{
//     console.log(data1)
// })

// async function getPost(){
//     // await will wait until resolve
//     const myResponse = await fetch(myURL)
//     const data2 = await myResponse.json()
//     // console.log(myResponse)
//     // console.log(data2)
//     return data2
// }

// arrow function
const getPost = async() => {
    const myResponse = await fetch(myURL)
    const data2 = await myResponse.json()
    return data2
}


// const returnPromise = getPost()
// console.log(returnPromise)
getPost()
.then(myData =>{
    console.log(myData)
})
.catch(myError =>{
    console.log(myError)
})