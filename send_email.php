<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $sekolah = $_POST["sekolah"];
    $sanguinis = $_POST["sanguinis"];
    $kholeris = $_POST["kholeris"];
    $melankolis = $_POST["melankolis"];
    $phlegmatis = $_POST["phlegmatis"];

    $to = "widyantoro0603@email.com"; // Ganti dengan alamat email penerima
    $subject = "Data Hasil Kategori";
    $message = "Nama : $nama
    \nAsal Sekolah : $sekolah
    \nSanguinis : $sanguinis
    \nKholeris : $kholeris
    \nMelankolis : $melankolis
    \nPhlegmatis : $phlegmatis";

    $headers = "From: Quisioner"; // Ganti dengan alamat email pengirim
    $headers .= "\r\nContent-Type: text/plain; charset=utf-8";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email berhasil dikirim!";
    } else {
        echo "Gagal mengirim email. Silakan coba lagi.";
    }


}
?>
