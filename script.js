/* ANIMASI SCROLL */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else if (entry.boundingClientRect.top > 0) {

            entry.target.classList.remove("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));



/* MODAL JURUSAN */

const dataJurusan = {
  tkj: {
    judul: "Teknik Komputer dan Jaringan (TKJ)",
    gambar: "tkj.jpg",
    deskripsi: "Jurusan TKJ membekali siswa dengan kemampuan instalasi jaringan komputer, konfigurasi server, keamanan jaringan (cyber security dasar), pemrograman web, hingga perawatan perangkat keras dan lunak. Lulusan siap kerja di bidang IT support, teknisi jaringan, hingga administrator server."
  },
  tbsm: {
    judul: "Teknik Bisnis Sepeda Motor (TBSM)",
    gambar: "tbsm.jpg",
    deskripsi: "Jurusan TBSM fokus pada perawatan, perbaikan, dan bisnis sepeda motor, mulai dari mesin, kelistrikan, injeksi, hingga manajemen bengkel. Lulusan siap menjadi mekanik profesional atau membuka usaha bengkel sendiri."
  },
  tkr: {
    judul: "Teknik Kendaraan Ringan (TKR)",
    gambar: "tkr.jpg",
    deskripsi: "Jurusan TKR mempelajari sistem kendaraan roda empat, meliputi mesin, sasis, kelistrikan otomotif, dan perawatan berkala. Lulusan siap bekerja di bengkel resmi, dealer, atau industri otomotif."
  },
  tb: {
    judul: "Tata Busana (TB)",
    gambar: "tb.jpg",
    deskripsi: "Jurusan Tata Busana mengajarkan desain, pola, jahit, dan produksi pakaian sesuai standar industri fashion. Lulusan siap berkarier sebagai desainer, penjahit profesional, atau membuka usaha konveksi sendiri."
  }
};

function bukaDetail(kode){
  const data = dataJurusan[kode];
  document.getElementById("modalTitle").textContent = data.judul;
  document.getElementById("modalDesc").textContent = data.deskripsi;
  document.getElementById("modalImg").src = data.gambar;
  document.getElementById("modalOverlay").classList.add("active");
}

function tutupDetail(e){
  if(e.target.id === "modalOverlay" || e.target.classList.contains("modal-close")){
    document.getElementById("modalOverlay").classList.remove("active");
  }
}



/* CHATBOT ASISTEN SEKOLAH */

const jawabanBot = [
  {
    kata: ["jurusan", "prodi", "program studi", "tkj", "tbsm", "tkr", "tata busana"],
    jawab: "Sekolah ini punya 4 jurusan: Teknik Komputer dan Jaringan (TKJ), Teknik Bisnis Sepeda Motor (TBSM), Teknik Kendaraan Ringan (TKR), dan Tata Busana (TB). Klik kartu jurusan di halaman untuk detail lengkapnya."
  },
  {
    kata: ["untung", "keuntungan", "kenapa masuk", "kelebihan", "alasan"],
    jawab: "Keuntungan masuk SMK Muhammadiyah Imogiri: pendidikan berbasis teknologi & keterampilan, praktik langsung sesuai kebutuhan dunia industri, serta lingkungan yang membentuk siswa berkarakter dan kompeten."
  },
  {
    kata: ["kepala sekolah", "kepsek", "siapa kepsek"],
    jawab: "Kepala Sekolah SMK Muhammadiyah Imogiri adalah Bapak Sabarudin Ahmad, S.Pd.T."
  },
  {
    kata: ["perpus", "perpustakaan"],
    jawab: "Nama perpustakaan sekolah ini adalah Perpustakaan Baitul Hikmah."
  },
  {
    kata: ["gedung 1", "gedung satu"],
    jawab: "Gedung 1 berlokasi di Jalan Bakulan - Imogiri, Garjoyo, Dusun Dukuh, Kalurahan Imogiri, Kapanewon Imogiri, Kabupaten Bantul, DIY 55782."
  },
  {
    kata: ["gedung 2", "gedung dua"],
    jawab: "Gedung 2 berlokasi di Jalan Imogiri Timur, Telan, Karangtalun, Kapanewon Imogiri, Kabupaten Bantul, DIY 55782."
  },
  {
    kata: ["lokasi", "alamat", "dimana"],
    jawab: "Sekolah ini punya 2 gedung:\n📍 Gedung 1: Jl. Bakulan - Imogiri, Garjoyo, Dukuh, Imogiri, Bantul, DIY 55782\n📍 Gedung 2: Jl. Imogiri Timur, Telan, Karangtalun, Imogiri, Bantul, DIY 55782"
  },
  {
    kata: ["halo", "hai", "assalamualaikum", "pagi", "siang", "malam"],
    jawab: "Halo juga! Ada yang bisa saya bantu seputar sekolah? 😊"
  }
];

function toggleChat(){
  document.getElementById("chatBox").classList.toggle("active");
}

function cariJawaban(teks){
  const t = teks.toLowerCase();
  for(const item of jawabanBot){
    if(item.kata.some(k => t.includes(k))){
      return item.jawab;
    }
  }
  return "Maaf, saya belum bisa menjawab itu. Coba tanya seputar jurusan, keuntungan masuk sini, kepala sekolah, perpustakaan, atau lokasi gedung ya.";
}

document.getElementById("chatForm").addEventListener("submit", function(e){
  e.preventDefault();
  const input = document.getElementById("chatInput");
  const teks = input.value.trim();
  if(!teks) return;

  const messagesBox = document.getElementById("chatMessages");

  const userMsg = document.createElement("div");
  userMsg.className = "chat-msg user";
  userMsg.textContent = teks;
  messagesBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "chat-msg bot";
  botMsg.textContent = cariJawaban(teks);
  messagesBox.appendChild(botMsg);

  input.value = "";
  messagesBox.scrollTop = messagesBox.scrollHeight;
});



/* HAMBURGER MENU */

function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

function closeMenu(){
  document.getElementById("navLinks").classList.remove("active");
}

function openChatFromMenu(){
  closeMenu();
  document.getElementById("chatBox").classList.add("active");
}
