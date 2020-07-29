//soal 1
console.log("===============Soal 1===============")

const luasLingkaran = (r) =>{
    return Math.PI * r * r
}

const kelilingLingkaran = (r) =>{
    return 2 * Math.PI * r
} 
console.log(`Luas Lingkaran = ${luasLingkaran(10)} dan Keliling Lingkaran = ${kelilingLingkaran(7)}`)

//soal 2
console.log("===============Soal 2===============")

let kalimat = ""

const tambahKata = () =>{
    let kata1 = "saya"
    let kata2 = "adalah"
    let kata3 = "seorang"
    let kata4 = "frontend"
    let kata5 = "developer"
    let tambah = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`

    return tambah
}
let hasilKalimat = tambahKata()
console.log(hasilKalimat)


//soal 3
console.log("===============Soal 3===============")

class Book{
    constructor(name, totalPage, price){
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
}

class Komik extends Book{
    constructor(name, totalPage, price, isColorful = true){
        super(name, totalPage, price)
        this.isColorful = isColorful
    }
}

book1 = new Book("The Subtle Art of Not Giving A F*ck", 225, 75000)
komik1 = new Komik("One Piece", 300, 30000)
console.log(book1)
console.log(komik1)