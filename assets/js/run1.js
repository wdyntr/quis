const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors'); // Import the cors package

const db = mysql.createConnection({
    host: 'localhost',  // Ganti dengan host MySQL Anda
    user: 'root',       // Ganti dengan username MySQL Anda
    password: '', // Ganti dengan password MySQL Anda
    database: 'quisioner' // Ganti dengan Nama database Anda
});

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes


app.post('/simpan', (req, res) => {
    const { Nama, Asal_Sekolah, Sanguinis, Kholeris, Melankolis, Phlegmatis } = req.body;

    const query = `
      INSERT INTO kepribadian (Nama, Asal_Sekolah, Sanguinis, Kholeris, Melankolis, Phlegmatis)
      VALUES ('${Nama}', '${Asal_Sekolah}', '${Sanguinis}', '${Kholeris}', '${Melankolis}', '${Phlegmatis}')
    `;

    // // Add CORS headers to the response
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3003');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    db.query(query, [Nama, Asal_Sekolah, Sanguinis, Kholeris, Melankolis, Phlegmatis], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Terjadi kesalahan saat menyimpan data.');
        } else {
            // res.send('Data berhasil disimpan.');
        }
    });
    
});


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
