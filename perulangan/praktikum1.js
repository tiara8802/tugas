// Minta input dari pengguna
const n = parseInt(prompt("Masukkan nilai n (n >= 1): "));

// Periksa apakah input valid
if (n >= 1) {
  // Gunakan perulangan untuk mencetak angka-angka
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
} else {
  console.log("Input tidak valid. Silakan masukkan nilai n yang lebih besar atau sama dengan 1.");
}