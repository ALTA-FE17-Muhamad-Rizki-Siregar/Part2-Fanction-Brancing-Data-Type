// gradeConverter.ts

function konversiKeHurufGrade(skor: number): string {
  if (skor >= 80 && skor <= 100) {
    return 'A';
  } else if (skor >= 65 && skor <= 79) {
    return 'B+';
  } else if (skor >= 50 && skor <= 64) {
    return 'B';
  } else if (skor >= 35 && skor <= 49) {
    return 'C';
  } else if (skor >= 0 && skor <= 34) {
    return 'D';
  } else {
    return 'Invalid';
  }
}

const readline = require('readline-sync');

// Dapatkan nama mahasiswa dari input pengguna
const namaMahasiswa = readline.question('Masukkan nama mahasiswa: ');

// Dapatkan nilai numerik mahasiswa dari input pengguna
const nilaiNumerik = parseFloat(readline.question('Masukkan nilai numerik: '));

// Periksa apakah input nilai numerik adalah angka yang valid
if (!isNaN(nilaiNumerik) && nilaiNumerik >= 0 && nilaiNumerik <= 100) {
  // Konversi nilai numerik ke huruf grade
  const hurufGrade = konversiKeHurufGrade(nilaiNumerik);

  // Tampilkan hasilnya
  console.log(`Nama Mahasiswa: ${namaMahasiswa}`);
  console.log(`Nilai Huruf: ${hurufGrade}`);
} else {
  console.log('Invalid input. Harap masukkan nilai numerik antara 0 dan 100.');
}