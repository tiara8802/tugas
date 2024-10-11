// Minta input dari pengguna
const batasAwal = parseInt(prompt("Masukkan nilai batas awal (batasAwal > 0): "));
const batasAkhir = parseInt(prompt("Masukkan nilai batas akhir (batasAkhir >= batasAwal): "));

// Periksa apakah input valid
if (batasAwal > 0 && batasAkhir >= batasAwal) {
  // Gunakan perulangan untuk mencetak angka-angka
  for (let i = batasAwal; i <= batasAkhir; i++) {
    console.log(i);
  }
} else {
  console.log("Input tidak valid. Silakan masukkan nilai batas awal dan batas akhir yang sesuai.");
}