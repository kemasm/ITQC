// 2. buatlah loop yang menghasilkan list dengan panjang 100 elemen dengan isi sebagai berikut
//   ['foo bar', 1, 2, 'foo', 4, 'bar', 'foo', 7, 8, 'foo', 'bar', 11, 'foo', 13, 14, 'foo bar', ......]

//   jika index habis dibagi 3, maka isi array pada index tersebut menjadi 'foo'
//   jika index habis dibagi 5, maka isi array pada index tersebut menjadi 'bar'
//   jika index habis dibagi 3 dan 5, maka isi array pada index tersebut menjadi 'foo bar'

let ls = []
for (let i = 0; i < 100; i++) {
  if(i % 3 == 0 && i % 5 == 0) {
    ls.push('foo bar')
  } else if (i % 3 == 0){
    ls.push('foo')
  } else if (i % 5 == 0) {
    ls.push('bar')
  } else {
    ls.push(i)
  }
}

console.log(ls);

//habis dibagi 3
// 3 / 3 = 1 -> habis dibagi 3
// 4 / 3 = 1,3333 -> tidak habis dibagi 3
