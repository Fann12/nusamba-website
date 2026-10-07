# Panduan Website Nusamba Jatim

## 1. Membuka di VS Code
1. Ekstrak folder `nusamba-website`.
2. Di VS Code: **File > Open Folder**, pilih folder tersebut.
3. Pasang ekstensi **Live Server** (Ritwick Dey).
4. Klik kanan `index.html` > **Open with Live Server**. Halaman otomatis refresh saat file disimpan.

## 2. Struktur file
| File | Fungsi |
|---|---|
| `index.html` | Kerangka halaman: top bar, menu, slider, produk, simulasi, bunga, cabang, berita, footer |
| `style.css` | Warna (variabel di `:root`), tata letak, tampilan mobile |
| `script.js` | Semua interaksi dan data contoh |

## 3. Fitur interaktif
- **Tab Individu/Bisnis** (kiri atas): mengganti daftar produk.
- **Slider hero**: pindah otomatis tiap 5 detik, bisa diklik lewat titik.
- **Simulasi kredit**: rumus cicilan anuitas, hasil berubah saat slider digeser.
- **Suku bunga deposito**: pilih tenor untuk melihat bunga.
- **Cari cabang**: filter langsung saat mengetik.
- **Menu mobile**: tombol Menu muncul di layar kecil.

## 4. Cara mengubah
- **Warna**: edit `--deep`, `--teal`, `--gold` di `style.css`. Sesuaikan dengan warna resmi bank.
- **Produk, bunga, cabang**: edit objek `products`, `depositRates`, `branches` di bagian atas `script.js`.
- **Teks hero**: edit blok `.slide` di `index.html`.
- **Logo**: ganti teks di `.logo` dengan `<img src="logo.png" alt="Bank Nusamba Jatim">`.

## 5. Langkah pengembangan berikutnya
1. Pecah jadi halaman terpisah: `produk.html`, `tentang.html`, `kontak.html`.
2. Tambahkan gambar (taruh di folder `img/`).
3. Tambahkan mega menu dropdown seperti BRI.
4. Tambahkan versi bahasa Inggris (ID/EN).
5. Hubungkan data cabang dan bunga ke API atau file JSON.
6. Publikasikan lewat GitHub Pages atau Netlify.

## Catatan
Data bunga, produk, dan cabang hanyalah contoh. Gunakan informasi resmi dari bank sebelum dipublikasikan.
