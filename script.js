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
        } else if (i == this.penumpang.length - 1) {
          console.log(`${namaPenumpang} tidak ada di dalam angkot!`);
          return this.penumpang;
        }
      }
    }
  };
}

let angkot1 = new Angkot("Galih", ["sungai jawi", "penjara"], 0, []);
console.log(angkot1);
