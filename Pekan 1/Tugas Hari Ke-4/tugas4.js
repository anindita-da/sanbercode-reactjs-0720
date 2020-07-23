//soal 1
console.log("LOOPING PERTAMA");
var firstLoop = 2;
while (firstLoop <= 20){
  console.log(firstLoop + ' - I love coding');
  firstLoop += 2;
}

console.log("LOOPING KEDUA");
var secondLoop = 20;
while (secondLoop >= 2){
  console.log(secondLoop + ' - I will become a frontend developer');
  secondLoop -= 2;
}

console.log("==============================")

//soal 2 
//SYARAT:
//A. Jika angka ganjil maka tampilkan Santai
//B. Jika angka genap maka tampilkan Berkualitas
//C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding

for(i = 1; i <= 20; i++){
  if((i % 3 == 0) && (i % 2 == 1)){
      console.log(i +" I Love Coding");
  } else if (i % 2 == 0) {
      console.log(i + " Berkualitas");
  } else {
      console.log(i + " Santai");
  }
}

console.log("==============================")

//soal 3

var segitiga = "";
for(i = 1; i <= 7 ; i++){
    console.log(segitiga += '#');
}

console.log("==============================")

//soal 4
var kalimat="saya sangat senang belajar javascript"
console.log(kalimat.split(' '));

console.log("==============================")

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for(let i = 0; i < daftarBuah.length; i++){
  console.log(daftarBuah[i]);
}