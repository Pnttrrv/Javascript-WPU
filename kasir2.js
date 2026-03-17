function Kasir2(operator, produks, harga, kas) {
  this.operator = operator;
  this.produks = produks;
  this.harga = harga;
  this.kas = kas;

  this.tambahProduk = async (produk) => {
    const response = await fetch(`fileHarga.json`);
    const data = await response.json();
    let totalProduk = this.produks;
    let listHarga = this.harga;
    if (totalProduk.length == 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].namaProduk == produk) {
          totalProduk.push(produk);
          listHarga.push(data[i].harga);
          return totalProduk;
        }
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].namaProduk == produk) {
          totalProduk.push(produk);
          listHarga.push(data[i].harga);
          return totalProduk;
        }
      }
    }
  };

  this.hapusProduk = async (produk) => {
    let totalProduk = this.produks;
    let listHarga = this.harga;
    const response = await fetch(`fileHarga.json`);
    const data = await response.json();
    if (totalProduk.length == 0) {
      console.log(`Keranjang belanjaan masih kosong.`);
      return totalProduk;
    } else {
      for (let i = 0; i < totalProduk.length; i++) {
        if (totalProduk[i] === produk) {
          totalProduk[i] = undefined;
          listHarga[i] = undefined;
          return totalProduk;
        } else if (i == totalProduk.length - 1) {
          console.log(`Produk tidak ada dalam keranjang belanjaan.`);
          return totalProduk;
        }
      }
    }
  };

  this.pembayaran = function (dana) {
    let totalProduk = this.produks;
    let listHarga = this.harga;
    let total = listHarga.reduce((acc, jumlah) => {
      return acc + jumlah;
    }, 0);
    if (listHarga.length == 0) {
      console.log(`Keranjang belanjaan masih kosong.`);
      return totalProduk;
    } else {
      if (dana > total) {
        let temp = dana - total;
        console.log(
          `Total belanjaan sebesar ${total} dan kembalian sebesar ${temp}`,
        );
        return null;
      } else if (dana < total) {
        console.log(
          `Total belanjaan sebesar ${total}, pembayaran kurang ${temp}`,
        );
        return null;
      } else if (dana == total) {
        console.log(`Total belanjaan sebesar ${total}, Lunas`);
        return null;
      }
    }
  };
}

// catatan
// untuk running async fetch yang ada di dalam constructor function maka harus menggunakan await di depannya contoh : await KasirPonco.tambahProduk("Kikoman Tiram") ini untuk menyelesaikan masalah promise pending

let kasirPonco = new Kasir2("Ponco", [], [], 0);
console.log(kasirPonco);
