const dataUMKM = [
  {
    nama: "Toko Dara",
    jam: "05:30 - 21:30",
    jenis: "Sembako",
    alamat: "548P, RT07/RW.01, Dukuh Manding, Kepohkencono",
    kontak: "081252708714"
  },
  {
    nama: "Warung Kopi Mas Hendra",
    jam: "07:30 - 23:00",
    jenis: "Warung Kopi",
    alamat: "547M+JP6, RT07/RW.01, Dukuh Manding, Kepohkencono",
    kontak: "085321054292"
  }
];

const container = document.getElementById("umkm-list");

dataUMKM.forEach((umkm) => {
  const card = document.createElement("div");
  card.className = "umkm-card";
  card.innerHTML = `
    <h3>${umkm.nama}</h3>
    <p><strong>Jam:</strong> ${umkm.jam}</p>
    <p><strong>Jenis:</strong> ${umkm.jenis}</p>
    <p><strong>Alamat:</strong> ${umkm.alamat}</p>
    <p><strong>Kontak:</strong> ${umkm.kontak}</p>
  `;
  container.appendChild(card);
});
