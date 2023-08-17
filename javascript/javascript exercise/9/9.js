// 9. Write a JavaScript program to calculate the days left before Christmas.

function ChristmasDayLeft(){
    today = new Date()
    const ChristmasDay = new Date(today.getFullYear(), 11 ,25)
    const timeDiff = (ChristmasDay.getTime() - today.getTime())
    const daysLeft = Math.ceil(timeDiff/(1000*60*60*24))
    return daysLeft
}
const leftDay = ChristmasDayLeft()
console.log(`${leftDay} is left for christmas`)
