// sets is alike array with some diffrerenc
// sets are iterable
// duplicate element are not allowed
// it has own method
// order is not guranteed
// if we will write duplicate it will not print on console
// not index base access like we cannot access any particular element by writing index position

//set should use when we have fix number of items 

// example
const kuchNumber = new Set([1,2,3,])
console.log(kuchNumber)

// example
const kuchString = new Set("raju")
console.log(kuchString)

// example
const kuchAdd = new Set()
kuchAdd.add(1)
kuchAdd.add(2)
kuchAdd.add(["item1", "item2"])
kuchAdd.add(["item1", "item2"])
if (kuchAdd.has(1)){
    console.log("one has present")
}else{
    console.log("one has not present")
}
console.log(kuchAdd)

// example
kuchItem = new Set()
kuchItem.add(1)
kuchItem.add(2)
kuchItem.add(3)
kuchItem.add(4)
kuchItem.add(5)
kuchItem.add(6)
kuchItem.add(7)
kuchItem.add(8)

for(let items of kuchItem){
    console.log(items)
}

// example
// here we need unique of number from some array, so here we have to conver array into sets 

const someNumbers = [1,2,3,4,5,3,3,5,2,4,1]
console.log(someNumbers)

const UniqueNum1 = new Set(someNumbers)
console.log(UniqueNum1)

let lenght = 0
for(let Uniqueness of UniqueNum1){
    lenght++
}
console.log("unique numbers are",lenght)