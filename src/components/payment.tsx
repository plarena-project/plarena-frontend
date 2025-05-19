export default function Payment() {
    return (
      <section id="payment" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-lime-500 mb-8 text-center">
            Tata Cara <span className="text-black">Pembayaran</span>
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            <li>Buat akun atau daftar sebagai anggota di website Plarena Sport.</li>
            <li>Pilih jenis lapangan yang ingin dipesan, pilih tanggal dan waktu tertentu.</li>
            <li>Isi formulir pemesanan, termasuk durasi dan jumlah jam.</li>
            <li>Klik tombol "Pesan" setelah semuanya diatur.</li>
            <li>Anda akan diarahkan ke menu pembayaran.</li>
            <li>Lakukan pembayaran ke rekening yang tertera dan unggah bukti pembayaran.</li>
            <li>Tunggu admin untuk menyetujui pembayaran Anda.</li>
            <li>Setelah disetujui, datanglah ke Plarena Sport sesuai dengan jadwal yang telah ditentukan.</li>
          </ol>
        </div>
      </section>
    );
  }