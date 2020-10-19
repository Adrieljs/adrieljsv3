function submit() {
    var salah = document.getElementById('jumlahSalah').value;
    var soal = document.getElementById('jumlahSoal').value;
    var kkm = document.getElementById('kkm').value;
    const jumlahSalah = salah;
    const jumlahSoal = soal;
    const jumlahBenar = jumlahSoal - jumlahSalah;
    let operasi = jumlahBenar/jumlahSoal;
    let nilai = Math.round(operasi * 100);
    let nilaiPerSoalBulat = Math.round(100/jumlahSoal);
    let nilaiSebenarnya = operasi * 100;
    let npss = 100/jumlahSoal;
    let remedials;
    if (nilaiSebenarnya < kkm) remedials = true;
    if (nilaiSebenarnya > kkm) remedials = false;
    let remedial;
    if (nilai < kkm) remedial = true;
    if (nilai > kkm) remedial = false;
    if (!salah || salah <= 0 || salah > soal) {nilaiPerSoalBulat = 0, remedials = false, nilai = 0,nilaiSebenarnya = 0, kkm = 0, npss = 0, remedial = false, document.getElementById('output1').style.color = "indianred", document.getElementById('output2').style.color = "indianred"} else {
        document.getElementById('output1').style.color = "forestgreen";
        document.getElementById('output2').style.color = "forestgreen";
    }
    if (!soal || soal <= 0) {nilaiPerSoalBulat = 0, remedials = false, nilai = 0,nilaiSebenarnya = 0, kkm = 0, npss = 0, remedial = false, document.getElementById('output1').style.color = "indianred", document.getElementById('output2').style.color = "indianred"} else {
        document.getElementById('output1').style.color = "forestgreen";
        document.getElementById('output2').style.color = "forestgreen";
    }
    if (!kkm || kkm <= 0) {nilaiPerSoalBulat = 0, remedials = false, nilai = 0,nilaiSebenarnya = 0, kkm = 0, npss = 0, remedial = false, document.getElementById('output1').style.color = "indianred", document.getElementById('output2').style.color = "indianred"} else {
        document.getElementById('output1').style.color = "forestgreen";
        document.getElementById('output2').style.color = "forestgreen";
    }
    let note = '';    
    if (!salah) note = "ERR: Jumlah salah tidak disediakan.\n"
    if (!soal) note = "ERR: Jumlah soal tidak disediakan.\n";
    if (!kkm) note = "ERR: KKM tidak disediakan.\n";
    if (salah <= 0) note = "ERR: Jumlah salah tidak bisa atau dibawah 0.\n";
    if (soal <= 0) note = "ERR: Jumlah soal tidak bisa atau dibawah 0.\n";
    if (kkm <= 0) note = "ERR: KKM tidak bisa atau dibawah 0.\n";
    document.getElementById('output1').value = '';
    document.getElementById('output1').value += `${note}`;
    document.getElementById('output1').value += `Nilai: ${nilaiSebenarnya}\n`;
    document.getElementById('output1').value += `Nilai Per Soal: ${npss}\n`;
    document.getElementById('output1').value += `KKM: ${kkm}\n`;
    document.getElementById('output1').value += `Remedial: ${remedial}\n`;
    document.getElementById('output2').value = '';
    document.getElementById('output2').value += `${note}`;
    document.getElementById('output2').value += `Nilai: ${nilai}\n`;
    document.getElementById('output2').value += `Nilai Per Soal: ${nilaiPerSoalBulat}\n`;
    document.getElementById('output2').value += `KKM: ${kkm}\n`;
    document.getElementById('output2').value += `Remedial: ${remedials}\n`;
}
