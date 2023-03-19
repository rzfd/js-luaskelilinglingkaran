// Import stylesheets
import './style.css';

// Write Javascript code!
const PHI = 3.14;

const nilaiR = () => {
  let nilai = prompt('Masukkan jari - jari');
  while (nilai <= 0) {
    nilai = prompt('Masukkan jari jari(value tidak boleh 0 atau negatif)');
  }
  return nilai;
};
const r = nilaiR();
const luas = () => {
  return PHI * r * r;
};
const keliling = () => {
  return 2 * PHI * r;
};
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Hitung luas dan keliling lingkaran </h1>
jari - jari = ${r} cm </br>
luas lingkaran = ${PHI} x ${r} *x ${r} = ${luas()} cm <sup>2</sup> <br>
keliling lingkaran = 2 x ${PHI} x ${r} = ${keliling().toFixed(2)} cm`;
