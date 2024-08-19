<?php
$to = "widyantoro0603@email.com"; // Ganti dengan alamat email penerima
$subject = "Data Hasil Kategori";
$message = "tes lagi";

$headers = "From: Quisioner"; // Ganti dengan alamat email pengirim

$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo "Email berhasil dikirim!";
} else {
    echo "Gagal mengirim email. Silakan coba lagi.";
}
?>
