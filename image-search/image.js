const accessKey = "TSBqb5wECxor5Hg8SuJcsHxj5SiXNIVtHfShI190g7M"

const formE1 = document.querySelector("form")
const inputE1 = document.querySelector("input")
const searchResults = document.querySelector(".results")
const showMore = document.getElementById("show-more")

let inputData = ""
let page = 1;

async function searchImage(){
    inputData = inputE1.value;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page === 1){
        searchResults.innerHTML = ""
    }

    for (const result of results) {
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("click-results")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.alt = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)
    };
    page++
    if(page > 1) {
        showMore.style.display = "block"
    }
}

formE1.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImage()
})

showMore.addEventListener("click", () => {
    searchImage()
})