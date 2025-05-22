import AnimatedElement from "./AnimatedElement";

const aboutContent = {
  title: "Tentang Kami",
  highlight: "Kami",
  subtitle: "Kenapa Memilih Kami?",
  description1: `Plarena Sport adalah pusat olahraga yang menyediakan layanan penyewaan lapangan futsal.
Tempat ini dirancang untuk mendukung aktivitas olahraga futsal bagi individu, komunitas,
maupun tim yang ingin berlatih atau bermain bersama.`,
  description2: `Lapangan futsal di Plarena Sport dilengkapi dengan fasilitas yang memadai, seperti garis
permainan yang jelas, jaring, dan pencahayaan yang cukup, sehingga nyaman digunakan untuk
berbagai kegiatan futsal.`,
  image: {
    src: "/image/lapangan2.jpg",
    alt: "Lapangan Futsal",
    width: "450px",
  },
};

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-24">
          <AnimatedElement animation="fade-in" delay={100} duration={800} threshold={0.1} rootMargin="0px 0px -50px 0px">
            <div className="p-0 m-0 mr-12 ">
              <img src={aboutContent.image.src} alt={aboutContent.image.alt} className="shadow-lg rounded-xl  flex-shrink-0" style={{ width: aboutContent.image.width, height: "auto" }} />
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={100} duration={800} threshold={0.1} rootMargin="0px 0px -50px 0px">
            <div className="p-0 m-0 flex-1 mt-20">
              <h2 className="text-3xl font-bold text-limeCustom mb-2">
                {aboutContent.title.replace(aboutContent.highlight, "")}
                <span className="text-black">{aboutContent.highlight}</span>
              </h2>
              <p className="text-gray-700 font-bold mb-2">{aboutContent.subtitle}</p>
              <p className="text-gray-700">{aboutContent.description1}</p>
              <p className="text-gray-700 mt-4">{aboutContent.description2}</p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
