function redirectToNextPage() {
  // Mengambil nilai input dari elemen "Nama" dan "Asal Sekolah"
  var nama = document.getElementById("nama").value;
  var sekolah = document.getElementById("sekolah").value;

  // Mengirim data ke index.js untuk disimpan
  saveDataFromForm(nama, sekolah);

  // Menampilkan data di console
  // getData();

  // Mengarahkan pengguna ke halaman "index.html"
  window.location.href = "index.html";
}

function saveDataFromForm(nama, sekolah) {
  // Menyimpan data ke localStorage
  localStorage.setItem('nama', nama);
  localStorage.setItem('sekolah', sekolah);
}

// // Function to access the data from other parts of the script
// function getData() {
//   console.log("Data yang diterima di index.js:");
//   console.log("Nama: ", localStorage.getItem('nama'));
//   console.log("Asal Sekolah: ", localStorage.getItem('sekolah'));
// }

