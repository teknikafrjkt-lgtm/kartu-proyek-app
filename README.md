# Kartu Proyek: aplikasi terpasang (PWA shell)

Halaman kecil yang membuat Kartu Proyek bisa dipasang ("Install" / "Add to Home Screen") dengan ikon dan nama sendiri, lalu membuka web app Apps Script secara langsung.
Isinya hanya kulit: manifest, ikon, service worker, dan pengalihan ke web app (bukan iframe: Google memblokir Apps Script di dalam situs lain di Chrome HP).
Kode aplikasi, data, dan login tetap di Apps Script (repo privat `kartu-proyek`).

- `index.html`: layar pembuka lalu membuka web app. `APP_URL` = alamat web app (sekarang **staging**).
- `manifest.webmanifest`: nama, warna, ikon.
- `sw.js`: menyimpan kulit agar bisa dipasang; data proyek tidak disimpan offline.
- `icons/`: ikon 192/512, maskable, apple-touch-icon.

Pindah ke produksi: ganti `APP_URL` di `index.html` ke URL `/exec` produksi, naikkan `CACHE` di `sw.js` (mis. `kp-shell-v2`).
