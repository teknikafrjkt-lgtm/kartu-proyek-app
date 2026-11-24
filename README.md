# Kartu Proyek: aplikasi terpasang (PWA)

Versi Kartu Proyek yang bisa dipasang ("Install" / "Add to Home Screen") dengan ikon AF&R.
Tampilan (`index.html`) disalin otomatis dari repo privat `kartu-proyek` oleh `assets/buat-pwa.py`; data dan login
diproses di Google Apps Script lewat `fetch` (tanpa cookie Google, jadi aman untuk HP dengan beberapa akun Google).

- `index.html`: tampilan aplikasi (DIBUAT OTOMATIS, jangan edit langsung).
- `manifest.webmanifest`: nama, warna, ikon.
- `sw.js`: menyimpan tampilan agar cepat dan bisa dipasang; data proyek tidak disimpan offline.
- `icons/`: ikon dari logo AF&R.
