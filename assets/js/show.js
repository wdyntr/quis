const nama = document.getElementById('bio_nama')
const sekolah = document.getElementById('bio_asalSekolah')
const sanguinis = document.getElementById('Sanguinis')
const kholeris = document.getElementById('Kholeris')
const melankolis = document.getElementById('Melankolis')
const phlegmatis = document.getElementById('Phlegmatis')

nama.textContent = `Nama : ${localStorage.getItem('nama')}`
sekolah.textContent = `Asal Sekolah : ${localStorage.getItem('sekolah')}`
sanguinis.textContent = `Sanguinis : ${localStorage.getItem('sanguinis')}`
kholeris.textContent = `Kholeris : ${localStorage.getItem('kholeris')}`
melankolis.textContent = `Melankolis : ${localStorage.getItem('melankolis')}`
phlegmatis.textContent = `Phlegmatis : ${localStorage.getItem('phlegmatis')}`

console.log("\nData final:");
console.log('Nama :', localStorage.getItem('nama'));
console.log('Asal Sekolah : ', localStorage.getItem('sekolah'));

const data = {
    Nama: localStorage.getItem('nama'),
    Asal_Sekolah: localStorage.getItem('sekolah'),
    Sanguinis: localStorage.getItem('sanguinis'),
    Kholeris: localStorage.getItem('kholeris'),
    Melankolis: localStorage.getItem('melankolis'),
    Phlegmatis: localStorage.getItem('phlegmatis')
};

// Send data to server using AJAX
fetch('http://localhost:3000/simpan', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => {
        console.log(result.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
