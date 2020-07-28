var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function reading(time, index){
    readBooksPromise(time, books[index])
    .then(function(timeLeft){
        index++
        if(timeLeft > 0 && index < books.length){
            reading(timeLeft, index)
        }
    })
    .catch(function(error){
        console.log(error.message)
    })
}
reading(10000, 0)