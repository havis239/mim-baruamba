# PANDUAN PEMELIHARAAN & MANAJEMEN KONTEN WEBSITE
## MI Muhammadiyah Baruamba

---

## 📌 DAFTAR ISI

1. [Panduan Admin](#panduan-admin)
2. [Manajemen Konten](#manajemen-konten)
3. [Update Reguler](#update-reguler)
4. [Troubleshooting](#troubleshooting)
5. [FAQ](#faq)

---

## PANDUAN ADMIN

### Akses FTP/Server

#### Menggunakan FileZilla (Windows/Mac/Linux)
```
Host: [Server FTP Anda]
Username: [Username FTP]
Password: [Password FTP]
Port: 21 (untuk FTP) atau 22 (untuk SFTP)
```

**Langkah-langkah:**
1. Buka FileZilla
2. File > Site Manager > New Site
3. Isi Host, Username, Password
4. Connect
5. Folder `public_html` atau `/www` adalah root website
6. Edit file dan upload kembali

#### Menggunakan cPanel (Jika tersedia)
1. Login ke cPanel
2. File Manager
3. Navigate ke folder `public_html`
4. Browse dan edit file secara online

---

## MANAJEMEN KONTEN

### 1. MENGUPDATE HALAMAN BERANDA (index.html)

#### Edit Text Utama
```html
<!-- Temukan bagian hero section -->
<section class="hero">
  <div class="container">
    <h1>Judul dapat diedit di sini</h1>
    <p>Deskripsi dapat diedit di sini</p>
  </div>
</section>
```

#### Mengganti Gambar Hero
1. Siapkan gambar baru (1920x600px recommended)
2. Compress gambar (gunakan TinyPNG atau Compressor.io)
3. Upload ke `assets/images/` folder
4. Edit src di HTML:
```html
<img src="../assets/images/nama-gambar-baru.jpg" alt="Deskripsi">
```

### 2. UPDATE HALAMAN BERITA (pages/berita.html)

#### Menambah Berita Baru
1. Buka `pages/berita.html` di editor
2. Cari section berita
3. Tambahkan berita baru di BAGIAN ATAS list (untuk berita terbaru)
4. Format:
```html
<article class="news-card">
  <img src="../assets/images/news/gambar.jpg" alt="Judul berita">
  <div class="news-content">
    <span class="news-date">7 Februari 2026</span>
    <h3>Judul Berita</h3>
    <p>Isi berita singkat...</p>
    <a href="#" class="read-more">Baca Selengkapnya →</a>
  </div>
</article>
```
5. Save dan upload

#### Edit Tanggal Format
- Format: `7 Februari 2026`
- Gunakan nama bulan bahasa Indonesia
- Letakkan di tag `<span class="news-date">`

### 3. UPDATE HALAMAN GURU (pages/guru.html)

#### Menambah Data Guru Baru
1. Buka `pages/guru.html`
2. Cari section daftar guru
3. Tambahkan guru baru:
```html
<div class="teacher-card">
  <img src="../assets/images/guru/nama-guru.jpg" alt="Nama Guru">
  <div class="teacher-info">
    <h3>Nama Lengkap Guru</h3>
    <p class="position">Posisi/Jabatan</p>
    <p class="info">Gelar/Pendidikan</p>
    <p class="info">Pengalaman</p>
  </div>
</div>
```
4. Save dan upload

#### Update Data Guru Existing
- Edit name, position, qualification langsung di HTML
- Ganti foto di `assets/images/guru/`
- Compressed foto terlebih dahulu

### 4. UPDATE HALAMAN PRESTASI (pages/prestasi.html)

#### Menambah Prestasi Baru
1. Buka `pages/prestasi.html`
2. Cari section galeri prestasi
3. Tambahkan prestasi baru (di awal list):
```html
<div class="achievement-item">
  <img src="../assets/images/prestasi/foto-prestasi.jpg" alt="Deskripsi">
  <div class="achievement-overlay">
    <h4>Nama Prestasi</h4>
    <p>Jenis Kompetisi</p>
    <p class="date">Tahun 2026</p>
  </div>
</div>
```
4. Upload gambar ke `assets/images/prestasi/`
5. Save dan upload HTML

### 5. UPDATE HALAMAN FASILITAS (pages/fasilitas.html)

#### Menambah Fasilitas Baru
1. Buka `pages/fasilitas.html`
2. Cari section fasilitas
3. Template fasilitas:
```html
<div class="facility-card">
  <div class="facility-photo">
    <img src="../assets/images/facilities/foto.jpg" alt="Nama Fasilitas">
    <div class="facility-overlay">
      <i class="fas fa-icon"></i>
    </div>
  </div>
  <div class="facility-body">
    <h3>Nama Fasilitas</h3>
    <p>Deskripsi singkat fasilitas...</p>
  </div>
</div>
```
4. Upload gambar ke `assets/images/facilities/`

### 6. UPDATE HALAMAN GALERI (pages/galeri.html)

#### Menambah Foto ke Galeri
1. Buka `pages/galeri.html`
2. Cari section galeri
3. Tambahkan foto baru:
```html
<div class="gallery-item">
  <img src="../assets/images/gallery/folder/foto.jpg" alt="Keterangan">
  <div class="gallery-overlay">
    <h4>Judul Foto</h4>
    <p>Deskripsi Kegiatan</p>
  </div>
</div>
```
4. Organize foto dalam folder category:
   - `assets/images/gallery/kelas/` - foto ruang kelas
   - `assets/images/gallery/perpustakaan/` - foto perpustakaan
   - `assets/images/gallery/karnaval/` - foto karnaval
   - dst.

---

## UPDATE REGULER

### Jadwal Update yang Direkomendasikan

#### Harian
- Monitoring website uptime
- Check error notifications
- Monitor visitor traffic

#### Mingguan
- Update berita/pengumuman
- Check form submissions (kontak)
- Review analytics

#### Bulanan
- Update galeri foto (kegiatan baru)
- Refresh content yang sudah lama
- Backup website
- Check semua link masih valid

#### Setiap Semester
- Update data guru (mutasi, baru)
- Update program pembelajaran
- Update jadwal akademik
- Update prestasi siswa

#### Tahunan
- Full content review
- Update statistik siswa & guru
- Update fasilitas (jika ada perubahan)
- Discuss improvements dengan tim

---

## TROUBLESHOOTING

### Masalah Umum & Solusi

#### 1. **Gambar Tidak Muncul**

**Penyebab:** Path gambar salah

**Solusi:**
```html
<!-- SALAH -->
<img src="assets/images/foto.jpg"> 

<!-- BENAR (dari halaman di folder pages/) -->
<img src="../assets/images/foto.jpg">

<!-- BENAR (dari halaman di root) -->
<img src="assets/images/foto.jpg">
```

Perhatikan `../` untuk naik satu folder.

#### 2. **Link Tidak Berfungsi**

**Solusi:**
- Pastikan file tujuan exists
- Gunakan path relatif yang benar
- Cek spelling dan case sensitivity
```html
<!-- Internal link -->
<a href="../pages/tentang.html">Link</a>

<!-- External link -->
<a href="https://website.com">Link</a>
```

#### 3. **Konten Hilang Setelah Reload**

**Penyebab:** File tidak tersimpan atau upload failed

**Solusi:**
- Pastikan save file sebelum close
- Upload ulang melalui FTP
- Clear browser cache (Ctrl+Shift+Delete)

#### 4. **Website Lambat**

**Solusi:**
- Compress gambar lebih kecil
- Hapus gambar yang tidak digunakan
- Gunakan image format modern (WebP)
- Minimize CSS/JS file

#### 5. **Error 404 di Halaman Tertentu**

**Penyebab:** File hilang atau path salah

**Solusi:**
- Check file exists di server
- Verify path di HTML
- Re-upload file yang hilang
- Check file permissions (755 untuk folder, 644 untuk file)

---

## FAQ

### Q: Bagaimana cara menambah halaman baru?

**A:** 
1. Copy file HTML existing (misal: tentang.html)
2. Rename dengan nama halaman baru
3. Edit di tag `<title>` di head
4. Edit breadcrumb
5. Edit konten di body
6. Add link di navbar (`assets/js/components.js`)
7. Upload file baru
8. Update sitemap.xml

### Q: Bagaimana format untuk tanggal?

**A:** Gunakan format Indonesia:
```
7 Februari 2026
14 Mei 2025
```
Tidak perlu hari (Senin, dll).

### Q: Berapa ukuran maksimal gambar?

**A:** 
- Hero image: 1920x600px (atau lebih besar)
- Card image: 400x300px
- Thumbnail: 200x150px
- Maksimal file: 500KB (setelah compress)

### Q: Bagaimana cara compress gambar?

**A:** Gunakan tools online gratis:
- [TinyPNG](https://tinypng.com) - JPEG & PNG
- [Compressor.io](https://compressor.io) - Multiple format
- [ImageOptim](https://imageoptim.com/) - Mac
- [FileOptimizer](https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer) - Windows

### Q: Bagaimana cara edit teks di halaman?

**A:**
1. Buka file HTML di text editor
2. Cari teks yang ingin diedit
3. Ubah di antara tag HTML
4. Jangan hapus tag HTML-nya
5. Save file
6. Re-upload ke server

Contoh:
```html
<!-- Edit di bagian ini -->
<h1>Ini adalah judulnya</h1>
<!-- Ubah menjadi -->
<h1>Judul baru saya</h1>
```

### Q: Bagaimana cara hapus halaman/konten?

**A:**
1. Delete saja dari server via FTP
2. Atau comment out di HTML (jangan hapus langsung)
3. Remove dari navbar link
4. Update sitemap.xml
5. Submit update ke Google Search Console

### Q: Apakah perlu backup regular?

**A:** **YA!** Sangat penting:
- Backup setiap bulan
- Sebelum melakukan update besar
- Before upgrading server/sistem
- Gunakan backup dari hosting provider

### Q: Bagaimana kontrak dengan penyedia hosting?

**A:** Pastikan:
- Uptime 99%+
- Support 24/7
- Auto-backup included
- SSL certificate included
- Bandwidth unlimited atau cukup
- Storage 50GB minimum

### Q: Apakah perlu upgrade ke backend/database?

**A:** Direkomendasikan jika:
- Konten sangat banyak & update sering
- Ingin admin dashboard
- Perlu user registration
- Ingin automation content management

### Q: Siapa yang bisa edit website?

**A:** 
- Best practice: 1-2 admin utama
- Give FTP access only to trusted people
- Keep password secure
- Change password regular
- Use strong password (12+ char, mix uppercase/number/symbol)

### Q: Bagaimana monitoring performa?

**A:** 
- Google Analytics untuk traffic
- Google Search Console untuk SEO
- Gtmetrix.com untuk performance
- Uptime robot untuk monitoring uptime
- Check regularly & optimize jika perlu

---

## CONTACT & SUPPORT

**Untuk masalah teknis:**
- Hubungi hosting provider support
- Email: support@hostingprovider.com
- Chat support tersedia

**Untuk konsultasi website:**
- Hubungi developer/tim KKN
- Diskusi improvement & enhancement ideas

---

## CHECKLIST MAINTENANCE BULANAN

Copy & gunakan checklist ini setiap bulan:

```
FEBRUARI 2026 - MAINTENANCE CHECKLIST

[ ] ✓ Website status check (uptime ok?)
[ ] ✓ Check form submissions dari kontak page
[ ] ✓ Review analytics traffic
[ ] ✓ Update berita/pengumuman baru
[ ] ✓ Check all links functional
[ ] ✓ Verify images loading correctly
[ ] ✓ Test di mobile & desktop
[ ] ✓ Backup website files
[ ] ✓ Clear cache/temp files
[ ] ✓ Update Google Search Console
[ ] ✓ Check for broken links (deadlinks)
[ ] ✓ Speed test & optimize if needed
[ ] ✓ Security check & updates
[ ] ✓ Document changes made

NOTE: [Isi keterangan/perubahan yang dilakukan]
```

---

**Panduan ini akan membantu tim madrasah untuk memelihara website dengan baik.**

Untuk pertanyaan atau masalah, silakan hubungi tim support.

--- 

**Dibuat: 7 Februari 2026**  
**Versi: 1.0**  
**Status: Final**
