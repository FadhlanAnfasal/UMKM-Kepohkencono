const dataUMKM = [
  {
    nama: "Toko Dara",
    jam: "05:30 - 21:30",
    jenis: "Sembako",
    alamat: "548P+284, RT07/RW.01, Dukuh Manding, Kepohkencono",
    kontak: "081252708714"
  },
  {
    nama: "Warung Kopi Mas Hendra",
    jam: "07:30 - 23:00",
    jenis: "Warung Kopi",
    alamat: "547M+JP6, RT07/RW.01, Dukuh Manding, Kepohkencono",
    kontak: "085321054292"
  },
  {
    nama: "Agen Ibu Sutikjo",
    jam: "05:30 - 21:30",
    jenis: "Agen Sembako",
    alamat: "547M+JP6, RT07/RW.01, Dukuh Manding, Kepohkencono",
    kontak: "081392429129"
  },
  {
    nama: "Toko Sinar Tani",
    jam: "06:00 - 17:00",
    jenis: "Toko Pertanian",
    alamat: "547M+JP6, RT07/RW.01, Dukuh Manding, Kepohkencono",
    kontak: "081225344504"
  },
  {
    nama: "Toko Nurhayati",
    jam: "06:00 - 21:00",
    jenis: "Sembako dan Agen Token",
    alamat: "547M+JP6, RT07/RW.01, Dukuh Manding, Kepohkencono",
    kontak: "085290653745"
  },
  {
    nama: "Toko Tani Makmur",
    jam: "06:00 - 17:00 (Tentatif)",
    jenis: "Toko Pertanian",
    alamat: "547M+JP6, RT07/RW.01, Dukuh Manding, Kepohkencono",
    kontak: "085325336743"
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
