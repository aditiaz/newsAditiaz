// Kerjakan dengan menggunakan bahasa pemograman yg anda kuasai, buat folder terpisah untuk soal ini

//     1.Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const reverseWord = (string) => {
  return (
    string
      .toUpperCase()
      .split("")
      .filter((e) => e != 1)
      .reverse()
      .join("") + "1"
  );
};

console.log(reverseWord("NEgIE1"));

//     2.Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
const longestWord = (string) => {
  return string.split(" ").reduce((a, b) => (b.length > a.length ? b : a)).length;
};
console.log(longestWord("Saya sangat senang mengerjakan soal algoritma"));

// console.log(kemunculan);
// Contoh:

// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence)
// // mengerjakan: 11 character

//     3.Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

// Contoh:

// INPUT = ['xc', 'dz', 'bbb', 'dz']
// QUERY = ['bbb', 'ac', 'dz']
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
const emerge = (arr1, arr2) => {
  let outputTemp = [];
  arr1.map((e) => arr2.map((q) => q == e && outputTemp.push(q)));
  return arr2.map((e) => outputTemp.filter((o) => o === e).length);
};

console.log(emerge(INPUT, QUERY));

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

//     4.Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

// Contoh:

// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12

// maka hasilnya adalah 15 - 12 = 3
const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const MatrixCalc = (matriks) => {
  let selisih = 0;
  const size = matriks.length;
  matriks.map((e, i) => (selisih += e[i] - e[size - 1 - i]));
  return selisih;
};
console.log(MatrixCalc(Matrix));
