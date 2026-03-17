function Kasir(operator, produks, harga, kas) {
  this.operator = operator;
  this.produks = produks;
  this.harga = harga;
  this.kas = kas;

  this.tambahProduk = async (produk) => {
    const response = await fetch(`fileHarga.json`);
    const data = await response.json();
    // console.log(data);
    let totalProduk = this.produks;
    let listHarga = this.harga;
    if (totalProduk.length == 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].namaProduk == produk) {
          totalProduk.push(produk);
          listHarga.push(harga);

          return totalProduk;
        } else {
          console.log(`${produk} belum tersedia.`);
          return totalProduk;
        }
      }
    } else {
      for (let i = 0; i < totalProduk.length; i++) {
        if (totalProduk[i] == undefined) {
          totalProduk[i] = produk;
          listHarga[i] = harga;
          return totalProduk;
        } else if (i == totalProduk.length - 1) {
          totalProduk.push(produk);
          listHarga.push(harga);
          return totalProduk;
        }
      }
    }
  };

  this.hapusBarang = function (produk) {
    let totalProduk = this.produks;
    let listHarga = this.harga;
    if (totalProduk.length == 0) {
      console.log(`Keranjang belanja masih kosong.`);
      return totalProduk;
    } else {
      for (let i = 0; i < totalProduk.length; i++) {
        if (totalProduk[i] == produk) {
          totalProduk[i] = undefined;
          listHarga[i] = undefined;
          return totalProduk;
        } else if (i == listHarga.length - 1) {
          console.log(`${produk} tidak ada di dalam keranjang belanja.`);
          return produk;
        }
      }
    }
  };

  this.pembayaran = function (dana) {
    let listHarga = this.harga;
    let total = this.kas;
    if (listHarga.length == 0) {
      console.log(`Keranjang belanja masih kosong.`);
      return null;
    } else {
      total = listHarga.reduce((acc, harga) => {
        return acc + harga;
      }, 0);
      let kembalian;
      if (dana > total) {
        kembalian = dana - total;
        return `Total belanjaan sebesar ${total}, kembalian sebesar ${kembalian}`;
      } else if (dana < total) {
        kembalian = dana - total;
        return `Total belanjaan sebesar ${total}, dana kurang ${kembalian}`;
      } else {
        return `Total belanjaan sebesar ${total}, Lunas`;
      }
    }
  };

  this.print = function nota() {
    let totalProduk = this.produks;
    let listHarga = this.harga;
    for (let i = 0; i < totalProduk.length; i++) {
      console.log(`${totalProduk[i]} ${listHarga[i]}`);
    }
  };
}

let kasir1 = new Kasir("Dinda", [], [], 0);
console.log(kasir1);
