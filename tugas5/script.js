function hitungDiskon(harga, diskon) {
    let potongan = (harga * diskon) / 100;
    return harga - potongan;
}

let hargaSetelahDiskon = hitungDiskon(100000, 20);
console.log(hargaSetelahDiskon);
