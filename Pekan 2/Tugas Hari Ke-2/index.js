var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

function reading(time, index){
    readBooks(time, books[index], function(timeLeft){
        index++
        if(timeLeft > 0 && index < books.length){
            reading(timeLeft, index)
        }
    })
}
reading(10000, 0)