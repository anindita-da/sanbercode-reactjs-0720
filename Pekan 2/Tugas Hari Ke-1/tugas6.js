//soal 1
var arrayDaftarPeserta = {
    nama: "Asep",
    jeniskelamin: "laki-laki",
    hobi: "baca buku",
    tahunlahir: "1992"
}
console.log(arrayDaftarPeserta);

console.log("==============================")

//soal 2
var buah = [{
    nama: "strawberry",
    warna: "merah",
    adabijinya: "tidak",
    harga: "9000"
},
{
    nama: "jeruk",
    warna: "oranye",
    adabijinya: "ada",
    harga: "8000"
},
{
    nama: "Semangka",
    warna: "Hijau & Merah",
    adabijinya: "ada",
    harga: "10000"
},
{
    nama: "Pisang",
    warna: "kuning",
    adabijinya: "ada",
    harga: "5000"
}]
var buahFilter = buah.filter(function(item){
    return item.nama == "strawberry";
})
console.log(buahFilter);

console.log("==============================")

//soal 3
var dataFilm = []

function film(nama, durasi, genre, tahun){
    var tambahFilm = {
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    }
    dataFilm.push(tambahFilm);
}

film("Nanti Kita Cerita Tentang Hari Ini (NKCTHI)", "120 menit", "Drama", "2019");
film("Spiderman: Far From Home", "130 menit", "Action", "2019");
film("Toy Story 4", "100 menit", "Animation", "2019");
console.log(dataFilm);

console.log("==============================")

//soal 4 (Release 0)
class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get Animals(){
        return this.name;
    }
    set Animals(x){
        this.name = x;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//soal 4 (Release 1)
class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs = 2;
    }
    yell(){
        return "Auooo";
    }
}

class Frog extends Animal{
    constructor(name){
        super(name);
        this.cold_blooded = true;
    }
    jump(){
        return "hop hop"
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);

console.log("==============================")

//soal 5
class Clock{
    constructor({template}){
        this.template = template;
    }

    render(){
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template.replace('h',hours).replace('m',mins).replace('s',secs);
        console.log(output);
    }

    start(){
        var start = this;
        this.timer = setInterval(function(){start.render();},1000);
    }

    stop(){
        clearInterval(this.timer);
    }
    
}

var clock = new Clock({template: 'h:m:s'});
clock.start();