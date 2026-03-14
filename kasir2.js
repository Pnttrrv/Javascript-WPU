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
}

// catatan
// untuk running async fetch yang ada di dalam constructor function maka harus menggunakan await di depannya contoh : await KasirPonco.tambahProduk("Kikoman Tiram") ini untuk menyelesaikan masalah promise pending

let kasirPonco = new Kasir2("Ponco", [], [], 0);
console.log(kasirPonco);
