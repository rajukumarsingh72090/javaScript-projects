// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 
for(var year = 2014; year <= 2050; year++){
    var d = new Date(year , 0, 1)
    var day = d.getDay()
    if(day === 0){
        console.log("1st january is sunday", year)  
    }
}