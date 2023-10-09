const myURL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()

xhr.open("GET", myURL)
xhr.onload = () =>{
    if(xhr.status >= 200 && xhr.status <= 300){
        const data1 = JSON.parse(xhr.response)
        // console.log(data1)

        // const id = data1[3]
        // console.log(id)

        const id = data1[3].id
        const myURL2 = `${myURL}/${id}`
        const xhr2 = new XMLHttpRequest()
        xhr2.open("GET", myURL2)
        xhr2.onload = () => {
            if(xhr2.status >= 200 && xhr2.status <= 300){
                const data2 = JSON.parse(xhr2.response)
                console.log(data2)
            }else{
                console.log("something wrong inside")
            }
        }
        xhr2.onerror = () => {
            console.log("network error inside")
        }
        xhr2.send()
    }else{
        console.log("somethhing wrong")
    }
}
xhr.onerror = ()=>{
    console.log("network error")
}
xhr.send()