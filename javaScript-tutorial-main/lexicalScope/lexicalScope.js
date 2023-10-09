// if we console something lexical will find first
// if variable will find inside fundctiion she will console but if variable would not found she will serach inside main function if she didn't found even there she wiil search inside the whole then after she will console.

const myVar = "my variabel"


function app (){
    // const myVar = "my variabel"
    function myFunc1(){
        // const myVar = "my value"
        // console.log("my Function",myVar)
        function myFunc2(){
        console.log("my Function",myVar)
        }
        myFunc2()
    }
    console.log(myVar)
    myFunc1()
}
app()