// membuat object angkot
function Angkot(nama, trayek, kas, penumpang) {
  this.nama = nama;
  this.trayek = trayek;
  this.kas = kas;
  this.penumpang = penumpang;
  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length == 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) {
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        } else if (this.penumpang[i] == namaPenumpang) {
          console.log(`${namaPenumpang} sudah ada di dalam angkot`);
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log(`Angkot Masih Kosong!`);
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] === namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        } else if (
          namaPenumpang !=
          penumpang.find(
            (nama = function (e) {
              return e == namaPenumpang;
            }),
          )
        ) {
          // kode ini digunakan untuk mencari penumpang menggunakan metode find
          console.log(`${namaPenumpang} tidak ada di dalam angkot!`);
          return penumpang;
        }
        // kode yang dibawah untuk menacri penumpang menggunakan looping for yang ada di atas
        // else if (i == this.penumpang.length - 1) {
        //   console.log(`${namaPenumpang} tidak ada di dalam angkot!`);
        //   return this.penumpang;
        // }
      }
    }
  };
}

let angkot1 = new Angkot("Galih", ["sungai jawi", "penjara"], 0, []);
console.log(angkot1);

// let a = ["dia", "fahri", "indah", "juki"];
// let b = a.find(
//   (nilai = function (e) {
//     if (e == "indah") {
//       console.log(true);
//     }
//   }),
// );

let pokeName;
const fetchPoke = async (pokeName) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const data = await response.json();
  const { name, abilities } = data;
  console.log(name);
  console.log(abilities);
};
