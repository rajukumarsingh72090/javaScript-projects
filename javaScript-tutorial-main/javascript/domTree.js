const rootNode = document.getRootNode()
console.log(rootNode)
console.log(rootNode.childNodes)
// chilenodes 
// const htmlElementNodes = rootNode.childNodes[0]
const htmlElementNodes = rootNode.childNodes[1]
console.log(htmlElementNodes)
console.log(htmlElementNodes.childNodes)
// console.log(htmlElementNodes.childNodes[0])
// console.log(htmlElementNodes.childNodes[1])
// console.log(htmlElementNodes.childNodes[2])

const headElement = htmlElementNodes.childNodes[0]
console.log(headElement)

// parent nodes
console.log(htmlElementNodes.parentNode)

// sibling nodes
console.log(headElement.nextSibling)
console.log(headElement.nextSibling.nextSibling)
console.log(headElement.nextElementSibling)
console.log(headElement.childNodes)


const h1 = document.querySelector("h1")
// const div = h1.parentNode
// div.style.color = "#efefef"
// div.style.backgroundColor = "#333"

const div = h1.parentNode.parentNode
div.style.color = "#efefef"
div.style.backgroundColor = "#333"


const head = document.querySelector("head")
const title = head.querySelector("title")
console.log(title)
console.log(title.childNodes)

const constainer = document.querySelector(".container")
console.log(constainer)
console.log(constainer.childNodes)
console.log(constainer.children)