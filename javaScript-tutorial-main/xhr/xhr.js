const myURL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()
// it will all happen asychonously javascript brower will do

// console.log(xhr.readyState)
xhr.open("GET", myURL)

// console.log(xhr.readyState)
// xhr.onreadystatechange = function(){
//     // console.log(xhr)
//     // console.log(xhr.readyState)
//     // console.log(xhr.response)
//     // console.log(typeof xhr.response)

//     if(xhr.readyState === 4){
//     const myResponse = xhr.response
//     // this parse will convert json into object
//     const data1 = JSON.parse(xhr.response)
//     // console.log(data1)
//     console.log(typeof data1)
// }}

// onload will run status code will 4
xhr.onload = function(){
    const myResponse = xhr.response
    const data1 = JSON.parse(xhr.response)
    console.log(data1)
}

xhr.send()


// Value	State	                  Description
// 0	    UNSENT	                  Client has been created. open() not called yet.
// 1	    OPENED	                  open() has been called.
// 2	    HEADERS_RECEIVED	      send() has been called, and headers and status are available.
// 3	    LOADING	                  Downloading; responseText holds partial data.
// 4	    DONE	                  The operation is complete.