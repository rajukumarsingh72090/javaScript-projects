const myDetail = {
    name: "raju kumar",
    gender: "male"
}

// function personDetails(personIndividual){
//     console.log(personIndividual.name)
//     console.log(personIndividual.gender)
// }

function personDetails({name,gender}){
    console.log(name)
    console.log(gender)
}

personDetails(myDetail)