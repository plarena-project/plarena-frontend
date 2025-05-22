import AnimatedElement from "./AnimatedElement";

const paymentSteps = [
  "Buat akun atau daftar sebagai anggota di website Plarena Sport.",
  "Pilih jenis lapangan yang ingin dipesan, pilih tanggal dan waktu tertentu.",
  "Isi formulir pemesanan, termasuk durasi dan jumlah jam.",
  'Klik tombol "Pesan" setelah semuanya diatur.',
  "Anda akan diarahkan ke menu pembayaran.",
  "Lakukan pembayaran ke rekening yang tertera dan unggah bukti pembayaran.",
  "Tunggu admin untuk menyetujui pembayaran Anda.",
  "Setelah disetujui, datanglah ke Plarena Sport sesuai dengan jadwal yang telah ditentukan.",
];

export default function Payment() {
  return (
    <section id="payment" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="fade-in" delay={200} duration={800} threshold={0.1} rootMargin="0px 0px -50px 0px">
          <h2 className="text-3xl font-bold text-limeCustom mb-8 text-center">
            Tata Cara <span className="text-black">Pembayaran</span>
          </h2>
        </AnimatedElement>
        <AnimatedElement animation="fade-in" delay={100} duration={800} threshold={0.1} rootMargin="0px 0px -50px 0px">
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            {paymentSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </AnimatedElement>
      </div>
    </section>
  );
}
