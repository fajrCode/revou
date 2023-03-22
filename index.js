// function untuk mengecek pilihan input radio (jenis kelamin)
function validateRadio() {
  let radios = document.getElementsByName("jk");
  let formValid = false;

  let i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;
  }
  return formValid;
}

//function untuk melakukan validasi dan perhitungan kalkulator BMI
function input() {
  //validasi inputan jenis kelamin
  let valid = validateRadio();

  if (!valid) {
    return alert("Pilih salah satu jenis kelamin.");
  }

  //DOM, pengambilan nilai inputan
  let jk = document.querySelector("input[type=radio]:checked").value;
  let umur = document.getElementById("umur").value;
  let berat = document.getElementById("berat").value;
  let tinggi = document.getElementById("tinggi").value;

  //validasi inputan
  if (berat == "") {
    return alert("Maaf, tolong isi berat badan Anda.");
  } else if (umur == "") {
    return alert("Maaf, tolong isi usia Anda.");
  } else if (tinggi == "") {
    return alert("Maaf, tolong isi tinggi badan Anda.");
  }

  //pembuatan variabel
  let bmi;
  let status;
  let ket;
  let ctt;
  let ctt2;
  let ctt3;
  let penyakit = [];
  let range;
  let r1;
  let r2;

  //menyembunyikan halaman pertama (input) dan menampilkan halaman kedua (hasil)
  document.getElementById("kalkulator").style.display = "none";
  document.getElementById("result").style.display = "block";

  //perhitungan bmi
  bmi = berat / (tinggi / 100) ** 2;
  r1 = Math.floor(bmi);
  r2 = Math.ceil(bmi);
  range = "Hasil BMI diantara " + r1 + " dan " + r2;

  //kondisional hasil perhitungan
  if (bmi < 18.5) {
    status = "Kekurangan Berat Badan";
    ket = "Huhu, berat badan Anda masih kurang";
    ctt =
      "Sebagai seorang " +
      jk +
      " yang berumur " +
      umur +
      " Anda berada dalam kategori underweight atau berat badan kurang.";
    ctt2 =
      "Cara terbaik untuk menaikkan berat badan adalah dengan mengatur dan makan makanan yang bergizi serta menambah kalori makanan yang dikonsumsi dan berolahraga.";
    ctt3 =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
    penyakit = ["Penyakit Jantung", "Stroke", "Diabetes"];
    document.getElementById("sakit").innerHTML =
      "Beberapa resiko penyakit yang berasal dari kekurangan berat badan";
  } else if (bmi < 25) {
    status = "Normal (Ideal)";
    ket = "Yeaaay, berat badan Anda Ideal";
    ctt =
      "Sebagai seorang " +
      jk +
      " yang berumur " +
      umur +
      " Anda berada dalam kategori normal atau berat badan ideal.";
    ctt2 =
      "Jangan kasih kendor, tetap konsisten dalam menjalani aktifitas, makan makanan yang bergizi dan seimbang serta olahraga.";
    ctt3 =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk tetap konsisiten menjaga berat badan.";
  } else if (bmi < 30) {
    status = "Kelebihan Berat Badan";
    ket = "Waduh, berat badan Anda berlebih";
    ctt =
      "Sebagai seorang " +
      jk +
      " yang berumur " +
      umur +
      " Anda berada dalam kategori overweigth atau berat badan berlebih.";
    ctt2 =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
    ctt3 =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    penyakit = ["Diabetes", "Hipertensi", "Sakit Jantung", "Osteoarthritis"];
    document.getElementById("sakit").innerHTML =
      "Beberapa resiko penyakit yang berasal dari kegemukan";
  } else {
    status = "Kegemukan (Obesitas)";
    ket = "Ohh tidaaak, Anda mengalami Obesitas";
    ctt =
      "Sebagai seorang " +
      jk +
      " yang berumur " +
      umur +
      " Anda berada dalam kategori obesity.";
    ctt2 =
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga secara rutin.";
    ctt3 =
      "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    penyakit = [
      "Diabetes Mellitus",
      "Hipertensi",
      "Penyakit Jantung Koroner",
      "Gagal Jantung",
      "Kanker",
      "Stroke",
    ];
    document.getElementById("sakit").innerHTML =
      "Beberapa resiko penyakit yang berasal dari Obesitas";
  }

  //menampilkan hasil perhitungan ke halaman kedua (hasil)
  document.getElementById("status").innerHTML = status;
  document.getElementById("nilai").innerHTML = bmi.toFixed(1);
  document.getElementById("keterangan").innerHTML = ket;
  document.getElementById("range").innerHTML = range;
  document.getElementById("ctt").innerHTML = ctt;
  document.getElementById("ctt2").innerHTML = ctt2;
  document.getElementById("ctt3").innerHTML = ctt3;

  //membuat elemen li untuk list resiko penyakit (kecuali berat ideal)
  const list = document.getElementById("list");
  if ((penyakit.length < 1)) {
    document.getElementById("resiko").style.display = "none";
  } else {
    document.getElementById("resiko").style.display = "block";
    penyakit.forEach((p) => {
      const item = document.createElement("li");
      item.textContent = p;
      list.appendChild(item);
    });
  }
}

//function untuk mereset form setelah melakukan kalkulasi
function ulang() {
  //menampilkan halaman pertama (inputan) dan menyembunyikan halaman kedua (hasil)
  document.getElementById("kalkulator").style.display = "block";
  document.getElementById("result").style.display = "none";
  document.getElementById("input-bmi").reset();

  //menghapus list resiko penyakit dari hasil yang telah dibuat pada function sebelumnya
  let list = document.getElementById("list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
