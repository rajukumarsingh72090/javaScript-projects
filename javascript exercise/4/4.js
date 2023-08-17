// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

// aria of triangle herons formula
// s = (a + b + c) ÷ 2
// ABC = √[s × (s – a) × (s – b) × (s – c)].

const side1 = 5
const side2 = 6
const side3 = 7

const s = (side1 + side2 + side3)/2
const allSide = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
const myh1 = document.querySelector("h1")
myh1.innerText = `area of triangle whose sides are 5, 6, 7 = ${allSide}`


