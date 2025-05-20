export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-10">

          <div className="p-0 m-0">
            <img
              src="/image/lapangan2.jpg"
              alt="Lapangan Futsal"
              className="shadow-lg flex-shrink-0"
              style={{ width: "300px", height: "auto" }}
            />
          </div>

          <div className="p-0 m-0 flex-1 mt-20">
            <h2 className="text-3xl font-bold text-limeCustom mb-2">
              Tentang <span className="text-black">Kami</span>
            </h2>
            <p className="text-gray-700 font-bold mb-2">Kenapa Memilih Kami?</p>
            <p className="text-gray-700">
              Plarena Sport adalah pusat olahraga yang menyediakan layanan penyewaan lapangan futsal.
              Tempat ini dirancang untuk mendukung aktivitas olahraga futsal bagi individu, komunitas,
              maupun tim yang ingin berlatih atau bermain bersama.
            </p>
            <p className="text-gray-700 mt-4">
              Lapangan futsal di Plarena Sport dilengkapi dengan fasilitas yang memadai, seperti garis
              permainan yang jelas, jaring, dan pencahayaan yang cukup, sehingga nyaman digunakan untuk
              berbagai kegiatan futsal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
