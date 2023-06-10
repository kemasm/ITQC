// 1. buatlah loop yang menghasilkan list dengan isi sebagai berikut (sbb.)
//   a. [0, 1, 2, 3, 4, 5, 7, 8 ,9]
//   b. [1, 3, 5, 7, 9, 11, 13, 15, 17]
//   c. [0, 2, 4, 6, 8, 10, 12, 14, 16]
//   d. [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

// a
let ls1 = []
for (let i = 0; i < 10; i++) {
  ls1.push(i)
}
console.log(ls1)

// b
let ls2 = []
for (let i = 1; i <= 17; i += 2) {
  ls2.push(i)
}
console.log(ls2)

ls2 = []
for (let i = 1; i < 18; i++) {
  if (i % 2 == 1){
    ls2.push(i)
  }
}
console.log(ls2)


// c
let ls3 = []
for (let i = 0; i <= 16; i += 2) {
  ls3.push(i)
}
console.log(ls3)

ls3 = []
for (let i = 0; i < 17; i++) {
  if (i % 2 == 0){
    ls3.push(i)
  }
}
console.log(ls3)

// d
let ls4 = []
for (let i = 2; i <= 1024; i *= 2) {
  ls4.push(i)
}
console.log(ls4)
