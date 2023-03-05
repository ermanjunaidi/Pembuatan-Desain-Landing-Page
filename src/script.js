function tambah() {
  let kadarair = parseFloat(document.getElementById("kadarair").value);
  let kadar_hampa = parseFloat(document.getElementById("kadar_hampa").value);
  let chalky = parseFloat(document.getElementById("chalky").value);
  let rusak = parseFloat(document.getElementById("rusak").value);
  let hargaawal = parseFloat(document.getElementById("hargaawal").value);
  let potonganmaksimal = parseFloat(
    document.getElementById("potonganmaksimal").value
  );
  let hasil =
    kadarair + kadar_hampa + chalky + rusak + hargaawal + potonganmaksimal;
  document.getElementById(
    "hasil"
  ).innerHTML = `Harga Bersih GKP= ${hasil.toFixed(2)}`;
}
