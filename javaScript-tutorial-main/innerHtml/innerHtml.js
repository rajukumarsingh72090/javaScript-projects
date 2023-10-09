const headline = document.querySelector(".headline")
// console.log(headline)
// console.log(headline.innerHTML)
headline.innerHTML = "<h1>inner HTML changed</h1>"
// here we use plus (+) because it will work after h1 tag other it will work from start that is headline
headline.innerHTML += "<button class = \"btn\">learn more</button>"
console.log(headline.innerHTML)