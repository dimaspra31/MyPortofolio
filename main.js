function sendMessage() {
    const urlToWhatsapp = `https://wa.me/62895416043731?text=Nama saya, ${nama.value}, ${pesan.value}`;
    window.open(urlToWhatsapp, "_blank");
  }
  