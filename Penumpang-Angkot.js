let penumpang = [];

function penumpangNaik(namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] === namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada di dalam angkot`);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
}

function penumpangTurun(namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    console.log("Angkot Kosong!!!");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(`${namaPenumpang} tidak ada di dalam angkot!`);
        return penumpang;
      }
    }
  }
  // if (namaPenumpang === penumpang[i]) {
  //   penumpang[i] = undefined;
  //   return penumpang;
  // } else if (namaPenumpang != penumpang[i]) {
  //   console.log`${namaPenumpang} tidak ada di dalam angkot`;
  // }
}

let mhs = {
  nama: "dika",
  umur: 28,
  lulus: true,
  IPSemester: [2.9, 3.1, 3.25, 2.88, 3.04],
  ipk: function () {
    let total = this.IPSemester.reduce((acc, nilai) => {
      return Math.round(((acc + nilai) * 100) / 100) / this.IPSemester.length;
    }, 0);
    return total;
  },
};

console.log(mhs.ipk());

// function ipk() {
//   const { IPSemester } = mhs;
//   let newArr = IPSemester.reduce((acc, nilai) => {
//     return Math.round(((acc + nilai) * 100) / 100) / IPSemester.length;
//   }, 0);
//   console.log(newArr);
// }

// ipk();
