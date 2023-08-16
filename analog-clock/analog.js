const endDate = "26 july 2023 12:00";
document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
   const end = new Date (endDate)
   const now = new Date();
   const diff = end - now;
   inputs[0].value = Math.floor(diff /1000 / 3600 / 24); //days 
   inputs[1].value = Math.floor((diff /1000 / 3600) % 24);  // months 
   inputs[2].value = Math.floor((diff /1000 /60) % 60);  // minutes
   inputs[3].value = Math.floor((diff /1000) % 60);   // seconds
}
// call back
clock();

setInterval(
    () => {
    clock()
},
   1000
)

