console.log("===============Soal 1===============")
//soal 1
const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: () =>{
        console.log(`${firstName} ${lastName}`)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName()

console.log("===============Soal 2===============")
//soal 2
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

  const {firstName, lastName, destination, occupation, spell} = newObject
  console.log(firstName, lastName, destination, occupation)

console.log("===============Soal 3===============")
//soal 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)