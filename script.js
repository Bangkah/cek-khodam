const khodamForm = document.getElementById("khodamForm");
const loader = document.getElementById("loader");
const Div = document.getElementById("");
const saskia = "saskia"

// Menambahkan event listener untuk form ketika tombol submit ditekan
khodamForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Menghentikan aksi default dari form

  // Ambil nilai dari input nama
  const nama = document.getElementById("nama").value;

  // Tampilkan animasi loading
  loader.style.display = "block";

  // Hapus hasil sebelumnya
  Div.textContent = "";

  // Simulasi proses memilih khodam (gunakan setTimeout sebagai contoh)
  setTimeout(function () {
    if (nama) {
      const randomIndex = Math.floor(Math.random() * khodamList.length);
      const khodamTerpilih = khodamList[randomIndex];
      Div.textContent = khodamTerpilih;
    }
      else if (nama = saskia) {
        const randomIndex = Math.floor(Math.random() * myKhodam.lensssgth);
        const khodamTerpilih = myKhodam[randomIndex];
        Div.textContent = khodamTerpilih;
      } else {
      Div.textContent = "Nama tidak boleh kosong.";
    }

    // Sembunyikan animasi loading setelah selesai
    loader.style.display = "none";
  }, 2000); // Ganti dengan durasi yang sesuai dengan proses Anda
});
function refreshPage() {
  window.location.reload(true);
}
// Daftar khodam yang tersedia (contoh)
const myKhodam = [ "ultaman",]

const khodamList = [
  "khodam macan putih",
  "khodam macan kumbang",
  "Naga Raksasa",
  "khodam jin qorin",
  "khodam macan putih",
  "khodam macan kumbang",
  "Naga Raksasa",
  "khodam jin qorin",
  "khodam ular",
  "khodam buaya putih",
  "Lemari Dua Pintu",
  "Orang Normal 😀",
  "Khodam harimau putih",
  "Khodam Ular Naga",
  "Khodam bhatara karang",
  "Khodam Sulaiman",
  "Ganggang Pintu",
  "Tutup Toples",
  "Anomali Emas",
  "Cicak Terbang",
  "Sigit Rendang",
  "Nguwawor",
  "Orang Gila 🤪",
  "Ulangi lagi",
  "Kosong",
  "Ular sigit",
  "Semut Pink",
  "Berak di Celana",
  "Tikus Skibizo",
  "Skibidi Toilet",
  "Arwah Kayang",
  "Hordeng",
  "Villain",
  "Gorilla Cupu",
  "Raja Beruang",
  "Nugget Rebus",
  "Aspal Tol Cipularang",
  "Laba Laba Idol",
  "Kura Kura Yapper",
  "Rubah Raksasa",
  "Bebek Nusantara",
  "Rubah Kutub",
  "Semut Sad Boy",
  "Pecel Lele",
  "Soto Mie Bogor",
  "Bubur Ayam",
  "Rice Cooker",
  "Dispenser",
  "Udang Bunting",
  "Budi Martabak",
  "Tuyul Mohawk",
  "Cacing Kocak",
  "Maaf yang ini khodamnya kabur",
  "Ulat Bulu Ngesot",
  "Kecoak Stress",
  "Kuda Nil Metal",
  "Rizal Perkedel",
  "Joko Kopling",
  "Singkong Rebus",
  "Raja Khodam 👑",
  "Anomali Jawa",
  "Cocomelon",
];
