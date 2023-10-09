// if function don't get value it will show NaN but if we set default value lika (a = something, b = somthing) it wiil show this
function addTwo(a = 0,b = 0){
    return a + b
}

// here if we will put one value it wiill take default value from b, if will not put any value it will default of both a and b 
// const ans = addTwo()
// const ans = addTwo(2)
const ans = addTwo(3, 4)
console.log(ans)