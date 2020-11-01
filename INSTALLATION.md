## Live Website
http://anhzf.github.io/

## Langkah untuk menjalankan/membuka web
### _Sebelum memulai pastikan sudah terinstall berikut ini_
- [NODE.JS + NPM](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)

1. Clone repository menggunakan command berikut pada terminal:
   ```bash
    git clone https://github.com/anhzf/anhzf.github.io.git
   ```
2. Masuk ke direktori tersebut dahulu
   ```bash
   cd [Nama direktori hasil clone]
   ```
3. Install dependency yang diperlukan menggunakan perintah berikut:
   ```bash
   npm install
   ```
4. Untuk menjalankan server akan terdapat 2 opsi (pilih salah satu):
   - Menjalankan server dengan perintah berikut:
     ```bash
     npm run cr:start
     ```
   - Versi build (Ukuran file lebih kecil) menggunakan perintah berikut:
     ```bash
     npm run cr:build
     ```