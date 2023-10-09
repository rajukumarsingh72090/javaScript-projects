// it will give html collection
const allNavItems1 = document.getElementsByClassName("nav-inside")
console.log(allNavItems1)
// this is array like object but not array
console.log(typeof allNavItems1)
console.log(Array.isArray(allNavItems1))

// it will give nodeList
const allNavItems2 = document.querySelectorAll(".nav-inside")
console.log(allNavItems2)
console.log(allNavItems2[0])