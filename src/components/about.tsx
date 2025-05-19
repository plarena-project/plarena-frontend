export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-lime-500 mb-4">
                Tentang <span className="text-black">Kami</span>
              </h2>
              <p className="text-gray-700 mb-4">Kenapa Memilih Kami?</p>
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
            <div>
              <img
                src="/lapangan.jpg"
                alt="Lapangan Futsal"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }