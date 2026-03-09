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
        console.log(`Penumpang sudah ada di dalam angkot`);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
}

function penumpangTurun(namaPenumpang) {
  for (let i = 0; i < penumpang.length; i++) {
    if (namaPenumpang === penumpang[i]) {
      penumpang[i] = undefined;
    }
  }
  return penumpang;
}

// console.log(penumpangNaik("dika"));
// console.log(penumpangNaik("naya"));
