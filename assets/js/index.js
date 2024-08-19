function getData() {
  console.log("Data yang diterima di index.js:");
  console.log("Nama: ", localStorage.getItem('nama'));
  console.log("Asal Sekolah: ", localStorage.getItem('sekolah'));
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('wizard');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    saveJawaban();
  });

  function saveJawaban() {

    const selectedOptionStep1 = document.querySelector('input[name="stp_1_select_option"]:checked');
    const selectedOptionStep2 = document.querySelector('input[name="stp_2_select_option"]:checked');
    const selectedOptionStep3 = document.querySelector('input[name="stp_3_select_option"]:checked');
    const selectedOptionStep4 = document.querySelector('input[name="stp_4_select_option"]:checked');
    const selectedOptionStep5 = document.querySelector('input[name="stp_5_select_option"]:checked');
    const selectedOptionStep6 = document.querySelector('input[name="stp_6_select_option"]:checked');
    const selectedOptionStep7 = document.querySelector('input[name="stp_7_select_option"]:checked');
    const selectedOptionStep8 = document.querySelector('input[name="stp_8_select_option"]:checked');
    const selectedOptionStep9 = document.querySelector('input[name="stp_9_select_option"]:checked');
    const selectedOptionStep10 = document.querySelector('input[name="stp_10_select_option"]:checked');
    const selectedOptionStep11 = document.querySelector('input[name="stp_11_select_option"]:checked');
    const selectedOptionStep12 = document.querySelector('input[name="stp_12_select_option"]:checked');
    const selectedOptionStep13 = document.querySelector('input[name="stp_13_select_option"]:checked');
    const selectedOptionStep14 = document.querySelector('input[name="stp_14_select_option"]:checked');
    const selectedOptionStep15 = document.querySelector('input[name="stp_15_select_option"]:checked');
    const selectedOptionStep16 = document.querySelector('input[name="stp_16_select_option"]:checked');
    const selectedOptionStep17 = document.querySelector('input[name="stp_17_select_option"]:checked');
    const selectedOptionStep18 = document.querySelector('input[name="stp_18_select_option"]:checked');
    const selectedOptionStep19 = document.querySelector('input[name="stp_19_select_option"]:checked');
    const selectedOptionStep20 = document.querySelector('input[name="stp_20_select_option"]:checked');
    const selectedOptionStep21 = document.querySelector('input[name="stp_21_select_option"]:checked');
    const selectedOptionStep22 = document.querySelector('input[name="stp_22_select_option"]:checked');
    const selectedOptionStep23 = document.querySelector('input[name="stp_23_select_option"]:checked');
    const selectedOptionStep24 = document.querySelector('input[name="stp_24_select_option"]:checked');
    const selectedOptionStep25 = document.querySelector('input[name="stp_25_select_option"]:checked');
    const selectedOptionStep26 = document.querySelector('input[name="stp_26_select_option"]:checked');
    const selectedOptionStep27 = document.querySelector('input[name="stp_27_select_option"]:checked');
    const selectedOptionStep28 = document.querySelector('input[name="stp_28_select_option"]:checked');
    const selectedOptionStep29 = document.querySelector('input[name="stp_29_select_option"]:checked');
    const selectedOptionStep30 = document.querySelector('input[name="stp_30_select_option"]:checked');
    const selectedOptionStep31 = document.querySelector('input[name="stp_31_select_option"]:checked');
    const selectedOptionStep32 = document.querySelector('input[name="stp_32_select_option"]:checked');
    const selectedOptionStep33 = document.querySelector('input[name="stp_33_select_option"]:checked');
    const selectedOptionStep34 = document.querySelector('input[name="stp_34_select_option"]:checked');
    const selectedOptionStep35 = document.querySelector('input[name="stp_35_select_option"]:checked');
    const selectedOptionStep36 = document.querySelector('input[name="stp_36_select_option"]:checked');
    const selectedOptionStep37 = document.querySelector('input[name="stp_37_select_option"]:checked');
    const selectedOptionStep38 = document.querySelector('input[name="stp_38_select_option"]:checked');
    const selectedOptionStep39 = document.querySelector('input[name="stp_39_select_option"]:checked');
    const selectedOptionStep40 = document.querySelector('input[name="stp_40_select_option"]:checked');

    // Mendapatkan ID jawaban yang dipilih
    const selectedOptionStep1Id = selectedOptionStep1 ? selectedOptionStep1.id : null;
    const selectedOptionStep2Id = selectedOptionStep2 ? selectedOptionStep2.id : null;
    const selectedOptionStep3Id = selectedOptionStep3 ? selectedOptionStep3.id : null;
    const selectedOptionStep4Id = selectedOptionStep4 ? selectedOptionStep4.id : null;
    const selectedOptionStep5Id = selectedOptionStep5 ? selectedOptionStep5.id : null;
    const selectedOptionStep6Id = selectedOptionStep6 ? selectedOptionStep6.id : null;
    const selectedOptionStep7Id = selectedOptionStep7 ? selectedOptionStep7.id : null;
    const selectedOptionStep8Id = selectedOptionStep8 ? selectedOptionStep8.id : null;
    const selectedOptionStep9Id = selectedOptionStep9 ? selectedOptionStep9.id : null;
    const selectedOptionStep10Id = selectedOptionStep10 ? selectedOptionStep10.id : null;
    const selectedOptionStep11Id = selectedOptionStep11 ? selectedOptionStep11.id : null;
    const selectedOptionStep12Id = selectedOptionStep12 ? selectedOptionStep12.id : null;
    const selectedOptionStep13Id = selectedOptionStep13 ? selectedOptionStep13.id : null;
    const selectedOptionStep14Id = selectedOptionStep14 ? selectedOptionStep14.id : null;
    const selectedOptionStep15Id = selectedOptionStep15 ? selectedOptionStep15.id : null;
    const selectedOptionStep16Id = selectedOptionStep16 ? selectedOptionStep16.id : null;
    const selectedOptionStep17Id = selectedOptionStep17 ? selectedOptionStep17.id : null;
    const selectedOptionStep18Id = selectedOptionStep18 ? selectedOptionStep18.id : null;
    const selectedOptionStep19Id = selectedOptionStep19 ? selectedOptionStep19.id : null;
    const selectedOptionStep20Id = selectedOptionStep20 ? selectedOptionStep20.id : null;
    const selectedOptionStep21Id = selectedOptionStep21 ? selectedOptionStep21.id : null;
    const selectedOptionStep22Id = selectedOptionStep22 ? selectedOptionStep22.id : null;
    const selectedOptionStep23Id = selectedOptionStep23 ? selectedOptionStep23.id : null;
    const selectedOptionStep24Id = selectedOptionStep24 ? selectedOptionStep24.id : null;
    const selectedOptionStep25Id = selectedOptionStep25 ? selectedOptionStep25.id : null;
    const selectedOptionStep26Id = selectedOptionStep26 ? selectedOptionStep26.id : null;
    const selectedOptionStep27Id = selectedOptionStep27 ? selectedOptionStep27.id : null;
    const selectedOptionStep28Id = selectedOptionStep28 ? selectedOptionStep28.id : null;
    const selectedOptionStep29Id = selectedOptionStep29 ? selectedOptionStep29.id : null;
    const selectedOptionStep30Id = selectedOptionStep30 ? selectedOptionStep30.id : null;
    const selectedOptionStep31Id = selectedOptionStep31 ? selectedOptionStep31.id : null;
    const selectedOptionStep32Id = selectedOptionStep32 ? selectedOptionStep32.id : null;
    const selectedOptionStep33Id = selectedOptionStep33 ? selectedOptionStep33.id : null;
    const selectedOptionStep34Id = selectedOptionStep34 ? selectedOptionStep34.id : null;
    const selectedOptionStep35Id = selectedOptionStep35 ? selectedOptionStep35.id : null;
    const selectedOptionStep36Id = selectedOptionStep36 ? selectedOptionStep36.id : null;
    const selectedOptionStep37Id = selectedOptionStep37 ? selectedOptionStep37.id : null;
    const selectedOptionStep38Id = selectedOptionStep38 ? selectedOptionStep38.id : null;
    const selectedOptionStep39Id = selectedOptionStep39 ? selectedOptionStep39.id : null;
    const selectedOptionStep40Id = selectedOptionStep40 ? selectedOptionStep40.id : null;

    // Menampilkan ID jawaban pada konsol
    getData()
    console.log("Step 1 Answer ID:", selectedOptionStep1Id);
    console.log("Step 2 Answer ID:", selectedOptionStep2Id);
    console.log("Step 3 Answer IDs:", selectedOptionStep3Id);
    console.log("Step 4 Answer ID:", selectedOptionStep4Id);
    console.log("Step 5 Answer ID:", selectedOptionStep5Id);
    console.log("Step 6 Answer ID:", selectedOptionStep6Id);
    console.log("Step 7 Answer ID:", selectedOptionStep7Id);
    console.log("Step 8 Answer ID:", selectedOptionStep8Id);
    console.log("Step 9 Answer ID:", selectedOptionStep9Id);
    console.log("Step 10 Answer ID:", selectedOptionStep10Id);
    console.log("Step 11 Answer ID:", selectedOptionStep11Id);
    console.log("Step 12 Answer ID:", selectedOptionStep12Id);
    console.log("Step 13 Answer ID:", selectedOptionStep13Id);
    console.log("Step 14 Answer ID:", selectedOptionStep14Id);
    console.log("Step 15 Answer ID:", selectedOptionStep15Id);
    console.log("Step 16 Answer ID:", selectedOptionStep16Id);
    console.log("Step 17 Answer ID:", selectedOptionStep17Id);
    console.log("Step 18 Answer ID:", selectedOptionStep18Id);
    console.log("Step 19 Answer ID:", selectedOptionStep19Id);
    console.log("Step 20 Answer ID:", selectedOptionStep20Id);
    console.log("Step 21 Answer ID:", selectedOptionStep21Id);
    console.log("Step 22 Answer ID:", selectedOptionStep22Id);
    console.log("Step 23 Answer ID:", selectedOptionStep23Id);
    console.log("Step 24 Answer ID:", selectedOptionStep24Id);
    console.log("Step 25 Answer ID:", selectedOptionStep25Id);
    console.log("Step 26 Answer ID:", selectedOptionStep26Id);
    console.log("Step 27 Answer ID:", selectedOptionStep27Id);
    console.log("Step 28 Answer ID:", selectedOptionStep28Id);
    console.log("Step 29 Answer ID:", selectedOptionStep29Id);
    console.log("Step 30 Answer ID:", selectedOptionStep30Id);
    console.log("Step 31 Answer ID:", selectedOptionStep31Id);
    console.log("Step 32 Answer ID:", selectedOptionStep32Id);
    console.log("Step 33 Answer ID:", selectedOptionStep33Id);
    console.log("Step 34 Answer ID:", selectedOptionStep34Id);
    console.log("Step 35 Answer ID:", selectedOptionStep35Id);
    console.log("Step 36 Answer ID:", selectedOptionStep36Id);
    console.log("Step 37 Answer ID:", selectedOptionStep37Id);
    console.log("Step 38 Answer ID:", selectedOptionStep38Id);
    console.log("Step 39 Answer ID:", selectedOptionStep39Id);
    console.log("Step 40 Answer ID:", selectedOptionStep40Id);
    console.log("\n")

    // window.location.href = '../../../thankyou/index-1.html'

    // Lakukan pengolahan lebih lanjut dengan jawaban-jawaban tersebut sesuai kebutuhan Anda

    // Membuat objek untuk menghitung jumlah kemunculan jenis jawaban
    const countJawaban = {
      a: 0,
      b: 0,
      c: 0,
      d: 0
    };

    // Meloop melalui ID jawaban dan menghitung jumlah kemunculan masing-masing jenis jawaban
    const selectedOptionIds = [
      selectedOptionStep1Id,
      selectedOptionStep2Id,
      selectedOptionStep3Id,
      selectedOptionStep4Id,
      selectedOptionStep5Id,
      selectedOptionStep6Id,
      selectedOptionStep7Id,
      selectedOptionStep8Id,
      selectedOptionStep9Id,
      selectedOptionStep10Id,
      selectedOptionStep11Id,
      selectedOptionStep12Id,
      selectedOptionStep13Id,
      selectedOptionStep14Id,
      selectedOptionStep15Id,
      selectedOptionStep16Id,
      selectedOptionStep17Id,
      selectedOptionStep18Id,
      selectedOptionStep19Id,
      selectedOptionStep20Id,
      selectedOptionStep21Id,
      selectedOptionStep22Id,
      selectedOptionStep23Id,
      selectedOptionStep24Id,
      selectedOptionStep25Id,
      selectedOptionStep26Id,
      selectedOptionStep27Id,
      selectedOptionStep28Id,
      selectedOptionStep29Id,
      selectedOptionStep30Id,
      selectedOptionStep31Id,
      selectedOptionStep32Id,
      selectedOptionStep33Id,
      selectedOptionStep34Id,
      selectedOptionStep35Id,
      selectedOptionStep36Id,
      selectedOptionStep37Id,
      selectedOptionStep38Id,
      selectedOptionStep39Id,
      selectedOptionStep40Id
    ];

    selectedOptionIds.forEach((jawabanID) => {
      const jenisJawaban = jawabanID.charAt(0);
      countJawaban[jenisJawaban]++;
    });

    // Menampilkan jumlah kemunculan masing-masing jenis jawaban
    console.log("Jumlah Jawaban A:", countJawaban.a);
    console.log("Jumlah Jawaban B:", countJawaban.b);
    console.log("Jumlah Jawaban C:", countJawaban.c);
    console.log("Jumlah Jawaban D:", countJawaban.d);

    const Sanguinis = (countJawaban.a / 40) * 100;
    const Kholeris = (countJawaban.b / 40) * 100;
    const Melankolis = (countJawaban.c / 40) * 100;
    const Phlegmatis = (countJawaban.d / 40) * 100;

    const persentaseSanguinis = Sanguinis.toFixed(2) + ' %'
    const persentaseKholeris = Kholeris.toFixed(2) + ' %'
    const persentaseMelankolis = Melankolis.toFixed(2) + ' %'
    const persentasePhlegmatis = Phlegmatis.toFixed(2) + ' %'

    // Mencari jenis jawaban dengan jumlah paling besar
    const jenisJawabanTerbanyak = Object.keys(countJawaban).reduce((a, b) =>
      countJawaban[a] > countJawaban[b] ? a : b
    );

    console.log("Jenis Jawaban Paling Banyak:", jenisJawabanTerbanyak);

    // Menentukan kategori berdasarkan jenis jawaban yang paling banyak
    // let kategori = "";
    // if (jenisJawabanTerbanyak === "a") {
    //   kategori = "SANGUINIS";
    // } else if (jenisJawabanTerbanyak === "b") {
    //   kategori = "KHOLERIS";
    // } else if (jenisJawabanTerbanyak === "c") {
    //   kategori = "MELANKOLIS";
    // } else if (jenisJawabanTerbanyak === "d") {
    //   kategori = "PHLEGMATIS";
    // }

    // console.log("Kategori Personality:", kategori);
    // Menampilkan hasil persentase pada konsol
    console.log(`Persentase Sanguinis: ${persentaseSanguinis}`);
    console.log(`Persentase Kholeris: ${persentaseKholeris}`);
    console.log(`Persentase Melankolis: ${persentaseMelankolis}`);
    console.log(`Persentase Phlegmatis: ${persentasePhlegmatis}`);
    
    // localStorage.setItem('kategori', kategori)
    localStorage.setItem('sanguinis', persentaseSanguinis)
    localStorage.setItem('kholeris', persentaseKholeris)
    localStorage.setItem('melankolis', persentaseMelankolis)
    localStorage.setItem('phlegmatis', persentasePhlegmatis)
  }
});
