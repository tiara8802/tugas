// Minta input dari pengguna
const batasAwal = parseInt(prompt("Masukkan nilai batas awal: "));
const batasAkhir = parseInt(prompt("Masukkan nilai batas akhir: "));

// Periksa apakah input valid
if (batasAwal <= batasAkhir) {
  // Gunakan perulangan untuk mencetak angka-angka ganjil
  for (let i = batasAwal; i <= batasAkhir; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
} else {
  console.log("Input tidak valid. Silakan masukkan nilai batas awal dan batas akhir yang sesuai.");
}